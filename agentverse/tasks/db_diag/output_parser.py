from __future__ import annotations

import sys
sys.path.append('../../../')

import re
from typing import Union
import json

# from langchain.schema import AgentAction, AgentFinish
from agentverse.utils import AgentAction, AgentFinish

from agentverse.parser import OutputParserError, output_parser_registry
from agentverse.parser import OutputParser
from agentverse.llms.base import LLMResult
from termcolor import colored

from response_formalize_scripts.combine_similar_answer import combine_similar_answers

import pdb

@output_parser_registry.register("db_diag")
class DBDiag(OutputParser):
    def parse(self, output: LLMResult) -> Union[AgentAction, AgentFinish]:
        # pdb.set_trace()
        text = output.content
        cleaned_output = text.strip()
        cleaned_output = re.sub(r"\n+", "\n", cleaned_output)
        cleaned_output = cleaned_output.split("\n")

        if not (
            cleaned_output[0].startswith("Thought")
            and cleaned_output[1].startswith("Action")
            and cleaned_output[2].startswith("Action Input")
        ):
            raise OutputParserError(text)
        action = cleaned_output[1][len("Action:") :].strip()
        action_input = cleaned_output[2][len("Action Input:") :].strip()

        print(colored("new action", "red"))
        print(cleaned_output)

        # pdb.set_trace()

        if action in ["Speak"]:

            action_input = re.sub(r"\n+", "\n", action_input)
            #action_input = action_input.split("\n")
            if action_input[0] == '(':
                action_input = action_input[1:]
            if action_input[-1] == ')':
                action_input = action_input[:-1]
            action_input = json.loads(action_input)

            action_json = {"diagnose": "", "solution": [], "knowledge": ""}
            
            for key in action_input:
                if "diagnose" in key:
                    if type(action_input[key]) == list and action_input[key] != []:
                        action_input[key] = combine_similar_answers(action_input[key], output_format='list')
                    elif type(action_input[key]) == str and action_input[key] != "":
                        action_input[key] = combine_similar_answers(action_input[key])

                    action_json["diagnose"] = action_input[key]
                elif "solution" in key: # list
                    if type(action_input[key]) == list and action_input[key] != []:
                        action_input[key] = combine_similar_answers(action_input[key], output_format='list')
                    elif type(action_input[key]) == str and action_input[key] != "":
                        action_input[key] = combine_similar_answers(action_input[key])
                    potential_solutions = action_input[key]

                    if isinstance(potential_solutions, str):
                        potential_solutions = potential_solutions.strip()
                        potential_solutions = re.sub(r"\n+", "\n", potential_solutions)
                        potential_solutions = potential_solutions.split("\n")

                    action_json["solution"] = potential_solutions
                elif "knowledge" in key:
                    if type(action_input[key]) == list and action_input[key] != []:
                        action_input[key] = combine_similar_answers(action_input[key], output_format='list')
                    elif type(action_input[key]) == str and action_input[key] != "":
                        action_input[key] = combine_similar_answers(action_input[key])

                    action_json["knowledge"] = action_input[key]

            return AgentFinish({"output": action_json}, text)
        
        elif action == "CallOn":
            return AgentFinish({"output": "[CallOn] " + action_input}, text)
        elif action == "RaiseHand":
            return AgentFinish({"output": "[RaiseHand] " + action_input}, text)
        elif action == "Listen":
            return AgentFinish({"output": ""}, text)
        else:
            return AgentAction(action.lower(), action_input, text)