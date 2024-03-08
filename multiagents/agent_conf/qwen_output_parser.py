from __future__ import annotations

import re
from typing import Union
import json

# from langchain.schema import AgentAction, AgentFinish
from multiagents.utils.utils import AgentAction, AgentFinish
from multiagents.custom_parser import OutputParserError, output_parser_registry
from multiagents.custom_parser import OutputParser
from multiagents.response_formalize_scripts.combine_similar_answer import combine_similar_answers


@output_parser_registry.register("qwen_output_parser")
class QwenDBDiag(OutputParser):
    def parse(self, output) -> Union[AgentAction, AgentFinish]:
        # pdb.set_trace()
        # if output is str
        if isinstance(output, str):
            text = output
        else:
            try:
                text = output['content']
            except:
                raise OutputParserError("llm output is not str or dict")

        # 需要解析的内容通常只含有Thought / Action / Action Input / Final Answer
        special_thought_token = 'Thought:'
        special_func_token = 'Action:'
        special_args_token = 'Action Input:'
        special_obs_token = 'Observation:'
        special_answer_token = 'Final Answer:'
        i = text.rfind(special_thought_token)
        j = text.rfind(special_func_token)
        k = text.rfind(special_args_token)
        m = text.rfind(special_obs_token)
        n = text.rfind(special_answer_token)

        assert m == -1  # 必须没有Observation

        if i < j < k:  # 有Thought / Action / Action Input
            assert n == -1
            action = text[j + len(special_func_token):k].strip()
            action_input = text[k + len(special_args_token):].strip()
            return AgentAction(action.lower(), action_input, text)

        elif i < n:  # 有Thought / Final Answer
            assert j == -1 and k == -1
            final_answer = text[n + len(special_answer_token):]
            # 防止生成了final answer后还乱说其他的，可能还会有问题 TODO
            # left = final_answer.find("{")
            # right = final_answer.find("}")
            # final_answer = final_answer[left:right + 1]
            # final_answer = re.match(r"Final Answer: ({.*?})", final_answer, flags=re.DOTALL)

            try:

                final_answer = json.loads(final_answer)
            except:
                print("Error in parsing diagnosis results")
                return None

            final_answer_json = {"diagnose": "", "solution": [], "knowledge": ""}

            for key in final_answer:
                if "diagnose" in key:
                    if type(final_answer[key]) == list and final_answer[key] != []:
                        final_answer[key] = combine_similar_answers(final_answer[key], output_format='list')
                    elif type(final_answer[key]) == str and final_answer[key] != "":
                        final_answer[key] = combine_similar_answers(final_answer[key])

                    final_answer_json["diagnose"] = final_answer[key]
                elif "solution" in key:  # list
                    if type(final_answer[key]) == list and final_answer[key] != []:
                        final_answer[key] = combine_similar_answers(final_answer[key], output_format='list')
                    elif type(final_answer[key]) == str and final_answer[key] != "":
                        final_answer[key] = combine_similar_answers(final_answer[key])
                    potential_solutions = final_answer[key]

                    if isinstance(potential_solutions, str):
                        potential_solutions = potential_solutions.strip()
                        potential_solutions = re.sub(r"\n+", "\n", potential_solutions)
                        potential_solutions = potential_solutions.split("\n")

                    final_answer_json["solution"] = potential_solutions
                elif "knowledge" in key:
                    if type(final_answer[key]) == list and final_answer[key] != []:
                        final_answer[key] = combine_similar_answers(final_answer[key], output_format='list')
                    elif type(final_answer[key]) == str and final_answer[key] != "":
                        final_answer[key] = combine_similar_answers(final_answer[key])

                    final_answer_json["knowledge"] = final_answer[key]

            return AgentFinish({"output": final_answer_json}, text)

        else:
            raise OutputParserError(message=text)
