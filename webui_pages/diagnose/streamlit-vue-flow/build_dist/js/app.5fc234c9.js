(function(t){function e(e){for(var a,i,s=e[0],c=e[1],d=e[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0295":function(t,e,n){"use strict";var a=n("f3b7"),o=n.n(a);o.a},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"0543":function(t,e,n){t.exports=n.p+"img/mem_robot.44e5fdbc.webp"},"0994":function(t,e,n){"use strict";var a=n("74a0"),o=n.n(a);o.a},1771:function(t,e,n){var a={"./configuration_robot.webp":"dab1","./cpu_robot.webp":"9f0b","./dba_robot.webp":"fbcc","./index_robot.webp":"5cfa","./io_robot.webp":"6069","./mem_robot.webp":"0543","./net_robot.webp":"75b4","./query_robot.webp":"6004","./workload_robot.webp":"462a"};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="1771"},"206f":function(t,e,n){"use strict";var a=n("27d4"),o=n.n(a);o.a},"21dc":function(t,e,n){},2415:function(t,e,n){"use strict";var a=n("b749"),o=n.n(a);o.a},"27d4":function(t,e,n){},"35ce":function(t,e,n){"use strict";var a=n("21dc"),o=n.n(a);o.a},"3d89":function(t,e,n){"use strict";var a=n("ba4c"),o=n.n(a);o.a},"3f42":function(t,e,n){},"40e7":function(t,e,n){"use strict";var a=n("ee4f"),o=n.n(a);o.a},"45fa":function(t,e,n){},"462a":function(t,e,n){t.exports=n.p+"img/workload_robot.a4663857.webp"},5637:function(t,e,n){"use strict";var a=n("3f42"),o=n.n(a);o.a},"5ba5":function(t,e,n){"use strict";var a=n("ce29"),o=n.n(a);o.a},"5cfa":function(t,e,n){t.exports=n.p+"img/index_robot.871d66b4.webp"},6004:function(t,e,n){t.exports=n.p+"img/query_robot.3342da36.webp"},6069:function(t,e,n){t.exports=n.p+"img/io_robot.1c748e65.webp"},7074:function(t,e,n){"use strict";var a=n("45fa"),o=n.n(a);o.a},"74a0":function(t,e,n){},"75b4":function(t,e,n){t.exports=n.p+"img/net_robot.871d66b4.webp"},"85ec":function(t,e,n){},"88c2":function(t,e,n){},"9f0b":function(t,e,n){t.exports=n.p+"img/cpu_robot.4c891857.webp"},b749:function(t,e,n){},ba4c:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("WithStreamlitConnection",{scopedSlots:t._u([{key:"default",fn:function(t){var e=t.args;return[n("ReportFlow",{attrs:{args:e}})]}}])})],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",style:"width: "+t.options.width+"; height: "+t.options.height+"; background: "+t.options.background+";"},[n("butterfly-vue",{key:"grid",ref:"butterflyVue",attrs:{canvasData:t.nodeData,className:"grid"},on:{onLoaded:t.finishLoaded}})],1)},s=[],c=(n("4160"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className},[n("div",{ref:"canvas-dag",staticClass:"butterfly-vue-container"})])}),d=[],u=(n("99af"),n("c740"),n("a434"),n("fbef"),n("995b")),l={disLinkable:!1,linkable:!1,draggable:!1,zoomable:!1,moveable:!0,theme:{edge:{shapeType:"AdvancedBezier"}}},p=(n("d81d"),n("5530")),f=(n("1bf2"),n("d4ec")),v=n("257e"),h=n("262e"),g=n("2caf"),b=n("ade3"),m=function(t,e){return{left:t+"px",top:e+"px",position:"absolute"}},y=function(t){Object(h["a"])(n,t);var e=Object(g["a"])(n);function n(){var t;Object(f["a"])(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o)),Object(b["a"])(Object(v["a"])(t),"draw",(function(t){var e=document.createElement("div"),n=m(t.left,t.top);return Reflect.ownKeys(n).forEach((function(t){e.style[t]=n[t]})),e.className="butterfly-node",e.id="bf_node_"+t.id,e})),t}return n}(u["Node"]),E=y,w=function(t,e){return{left:t+"px",top:e+"px",position:"absolute"}},x=function(t){Object(h["a"])(n,t);var e=Object(g["a"])(n);function n(t){var a;return Object(f["a"])(this,n),a=e.call(this,t),Object(b["a"])(Object(v["a"])(a),"draw",(function(t){var e=document.createElement("div"),n=w(t.left,t.top);return Reflect.ownKeys(n).forEach((function(t){e.style[t]=n[t]})),e.className="butterfly-node",e.id="bf_node_"+t.id,e})),a.children=t.children,a.parent=t.parent,a.collapsed=t.collapsed||!1,t.isRoot&&(a.isRoot=t.isRoot),a}return n}(u["TreeNode"]),D=x,O=(n("a9e3"),n("bee2")),C=n("45eb"),j=n("7e84"),N=function(t){Object(h["a"])(n,t);var e=Object(g["a"])(n);function n(){return Object(f["a"])(this,n),e.apply(this,arguments)}return Object(O["a"])(n,[{key:"drawArrow",value:function(t){var e=Object(C["a"])(Object(j["a"])(n.prototype),"drawArrow",this).call(this,t);return e}},{key:"drawLabel",value:function(){var t=document.createElement("div");return this.id||(this.id=String(Number(new Date))),t.id="edge_label_".concat(this.id),t.className="butterflies-label",t}}]),n}(u["Edge"]),k=N,I=(n("b64b"),function(t,e){return{left:t+"px",top:e+"px",position:"absolute"}}),R=function(t){Object(h["a"])(n,t);var e=Object(g["a"])(n);function n(){return Object(f["a"])(this,n),e.apply(this,arguments)}return Object(O["a"])(n,[{key:"draw",value:function(t){var e=document.createElement("div"),n=I(t.left,t.top);return Object.keys(n).forEach((function(t){e.style[t]=n[t]})),e.className="butterfly-group",e.id="bf_group_".concat(t.id),e.className="butterflies-group",e}}]),n}(u["Group"]),$=R,S=(n("caad"),n("2532"),n("b85c")),L=function(t){return Array.isArray(t)?t:[t]},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id";t=L(t),e=L(e);var a,o=[],r=[],i=[],s=Object(S["a"])(t);try{for(s.s();!(a=s.n()).done;){var c=a.value;e.map((function(t){return t[n]})).includes(c[n])?i.push(c):o.push(c)}}catch(p){s.e(p)}finally{s.f()}var d,u=Object(S["a"])(e);try{for(u.s();!(d=u.n()).done;){var l=d.value;t.map((function(t){return t[n]})).includes(l[n])||r.push(l)}}catch(p){u.e(p)}finally{u.f()}return{created:o,deleted:r,updated:i}},A=T,F=n("2ef0"),P=n.n(F),q=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t){if(!t.relayout){var n=t.layout||{},a=n.type,o=n.options;t.relayout=function(e){e?(t._autoLayout(Object(p["a"])(Object(p["a"])({},t),{},{nodes:e})),M(t,e)):t.constructor===u["TreeCanvas"]?t._autoLayout(t):a&&o&&t.autoLayout(a,o||{}),this.nodes.forEach((function(t){t.moveTo(t.left,t.top)})),t.recalc&&t.recalc()}}t.relayout(e)}},M=function(t,e){var n={};e.forEach((function(t){n[t.id]=t})),t.nodes.forEach((function(t){P.a.get(n,"[".concat(t.id,"].left"))&&(t.left=n[t.id].left),P.a.get(n,"[".concat(t.id,"].top"))&&(t.top=n[t.id].top)}))},G=n("53ca"),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-bf-group"},[n("div",{staticClass:"vue-bf-group-header"},[t._v(" group"+t._s(t.itemData.id)+" ")]),n("div",{staticClass:"vue-bf-group-content"})])},V=[],B={name:"vue-group",props:{itemData:{type:Object,required:!0}}},W=B,H=(n("5ba5"),n("2877")),J=Object(H["a"])(W,z,V,!1,null,"521f46d8",null),K=J.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-bf-node"},[t._v(" node"+t._s(t.itemData.id)+" ")])},U=[],X={name:"vue-node",props:{itemData:{type:Object,required:!0}}},Y=X,Z=(n("3d89"),Object(H["a"])(Y,Q,U,!1,null,"61785935",null)),tt=Z.exports,et=function t(e,n){var o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(e.render)switch(Object(G["a"])(e.render)){case"string":o=a["default"].extend({template:e.render,props:{itemData:{type:Object,required:!0}}});break;case"object":o=a["default"].extend(e.render);break;default:throw Error("".concat(n,"存在render属性，应该为string或者object类型，现在是").concat(Object(G["a"])(t)))}else switch(n){case"group":o=a["default"].extend(K);break;case"node":o=a["default"].extend(tt);break;default:break}var s={itemData:e};if("node"===n){var c=i.findIndex((function(t){return t.id===e.id}));if(-1===c)return console.warn("canvas.addNodes方法出错"),null;var d=i[c];s.canvasNode=d;var u=new o({parent:r,propsData:s});return u.$butterfly={type:n},u._events=r._events,u.$mount(),u}var l=new o({propsData:s});return l._events=r._events,l.$mount(),l},nt=function(t,e,n){e.map((function(e,a){var o=e.id;if(o){var r=t.querySelector("*[id^='bf_group_".concat(e.id,"']"));if(r){var i=et(e,"group",n);r.append(i.$el)}}else console.warn("groups的".concat(a,"不含ID属性，请检查格式"))}))},at=function(t,e,n,a){n.map((function(n,o){if(!P.a.isArray(n)){var r=n.id;if(r){var i=t.querySelector("*[id^='bf_node_".concat(n.id,"']"));if(i){var s=et(n,"node",a,e);i.append(s.$el);var c=e.findIndex((function(t){return t.id===n.id}));return-1===c?(console.warn("canvas.addNodes方法出错"),null):void 0}}else console.warn("nodes的".concat(o,"不含ID属性，请检查格式"))}}))},ot=function(t,e,n){e.map((function(e,a){var o=e.id;if(o){if(e.render){var r=t.querySelector("*[id^='edge_label_".concat(e.id,"']"));if(!r)return;var i=et(e,"edge",n);r.append(i.$el)}}else console.warn("edges的".concat(a,"不含ID属性，请检查格式"))}))},rt=function(t){var e=t.nodes,n=void 0===e?[]:e,a=t.edges,o=void 0===a?[]:a,r=t.groups,i=void 0===r?[]:r,s=t.canvas,c=void 0===s?{}:s,d=E;return c.constructor===u["TreeCanvas"]&&(d=D),{nodes:n.map((function(t){return Object(p["a"])(Object(p["a"])({},t),{},{Class:d})})),edges:o.map((function(t){return Object(p["a"])(Object(p["a"])({type:"endpoint"},t),{},{Class:k})})),groups:i.map((function(t){return Object(p["a"])(Object(p["a"])({},t),{},{Class:$})}))}},it=function(t,e,n,a){t.constructor===u["TreeCanvas"]&&(t.layout&&t.previousIsFlatNode&&(e=t._handleTreeNodes(e||[],_.get({},"isFlatNode",!1))),q(t,e));var o=A(e,n),r=o.created,i=o.deleted;t.removeNodes(i.map((function(t){return t.id})),!0),t.addNodes(rt({nodes:r}).nodes),at(t.root,t.getDataMap().nodes,{nodes:r}.nodes,a)},st=function(t,e,n,a){var o=A(e,n),r=o.created,i=o.deleted;t.removeEdges(i.map((function(t){return t.id})),!0),t.addEdges(rt({edges:r}).edges,!0),ot(t.root,{edges:r}.edges,a)},ct=function(t,e,n,a){var o=A(e,n),r=o.created,i=o.deleted;rt({groups:i}).groups.forEach((function(e){t.removeGroup(e.id)})),rt({groups:r}).groups.forEach((function(e){t.addGroup(e)})),nt(t.root,{groups:r}.groups,a)},dt=function(t){t&&(t.recalc=function(){this.nodes.forEach((function(t){t.endpoints.forEach((function(t){P.a.isFunction(t.updatePos)&&t.updatePos()}))})),this.edges.forEach((function(t){P.a.isFunction(t.redraw)&&t.redraw()})),this.groups.forEach((function(t){P.a.isFunction(t.redraw)&&t.redraw()}))},t.recalc())},ut={name:"butterfly-vue",props:{className:{type:String,default:"butterfly-vue"},baseCanvas:{type:Function,default:u["Canvas"]},canvasConf:{type:Object,default:function(){return l}},canvasData:{type:Object,required:!0}},data:function(){return{canvas:null,nodes:this.canvasData.nodes,groups:this.canvasData.groups,edges:this.canvasData.edges}},watch:{groups:{handler:function(){this.updateCavans(),this.re()}},nodes:{handler:function(){this.updateCavans(),this.re()}},edges:{handler:function(){this.updateCavans(),this.re()}},canvasData:{handler:function(){this.nodes=this.canvasData.nodes,this.groups=this.canvasData.groups,this.edges=this.canvasData.edges}}},mounted:function(){var t=this;this.initCanvas(),this.canvas?(this.updateCavans(),this.re(),this.$emit("onLoaded",this),this.canvas.on("events",(function(e){if("link:connect"===e.type)t.onCreateEdge(e);else if("links:delete"===e.type&&e.links.length>0)t.onDeleteEdge(e);else if("link:reconnect"===e.type)t.onChangeEdges(e);else{if("drag:end"===e.type){var n=e.dragGroup,a=e.dragNode;if(null!==n){var o=t.groups.findIndex((function(t){return t.id===n.id}));-1!==o&&(t.groups[o].left=n.left,t.groups[o].top=n.top),t.canvasData.groups=t.groups}if(null!==a&&Array.isArray(t.nodes)){var r=t.nodes.findIndex((function(t){return t.id===a.id}));-1!==r&&(t.nodes[r].left=a.left,t.nodes[r].top=a.top),t.canvasData.nodes=t.nodes}}t.onOtherEvent(e)}}))):console.warn("当前canvas为null，初始化存在问题")},methods:{initCanvas:function(){var t=this.$refs["canvas-dag"];t?(console.log("initCanvas***********"),this.canvasConf.root=t,this.canvas=new this.baseCanvas(this.canvasConf)):console.warn("当前canvas没有绑定dom节点，无法渲染")},updateCavans:function(){if(this.canvas){var t=this.canvas.nodes,e=this.canvas.edges,n=this.canvas.groups;ct(this.canvas,this.groups,n,this),it(this.canvas,this.nodes,t,this),st(this.canvas,this.edges,e,this)}else console.warn("当前canvas为null，初始化存在问题")},re:function(){this.canvas?(dt(this.canvas),q(this.canvas)):console.warn("当前canvas为null，初始化存在问题")},redraw:function(){var t=this.canvas.nodes,e=this.canvas.edges,n=this.canvas.groups;st(this.canvas,[],e,this),it(this.canvas,[],t,this),ct(this.canvas,[],n,this),ct(this.canvas,this.groups,n,this),it(this.canvas,this.nodes,t,this),st(this.canvas,this.edges,e,this),this.re()},onCreateEdge:function(t){var e=t.links[0];if(e){var n={id:"".concat(e.sourceNode.id,".").concat(e.sourceEndpoint.id,"-").concat(e.targetNode.id,".").concat(e.targetEndpoint.id),sourceEndpointId:e.sourceEndpoint.id,sourceNodeId:e.sourceNode.id,targetEndpointId:e.targetEndpoint.id,targetNodeId:e.targetNode.id};this.edges.push({id:"".concat(n.sourceNodeId,".").concat(n.sourceEndpointId,"-").concat(n.targetNodeId,".").concat(n.targetEndpointId),sourceNode:n.sourceNodeId,targetNode:n.targetNodeId,source:n.sourceEndpointId,target:n.targetEndpointId}),this.$emit("onCreateEdge",n)}},onDeleteEdge:function(t){var e=t.links[0];if(e){var n={id:e.id,sourceEndpointId:e.sourceEndpoint.id,sourceNodeId:e.sourceNode.id,targetEndpointId:e.targetEndpoint.id,targetNodeId:e.targetNode.id},a=this.edges.findIndex((function(t){return t.id===e.id}));this.edges.splice(a,1),this.$emit("onDeleteEdge",n)}},onChangeEdges:function(t){var e=t.addLinks[0],n=t.delLinks[0];if(e&&n){var a={addLink:{id:"".concat(e.sourceNode.id,".").concat(e.sourceEndpoint.id,"-").concat(e.targetNode.id,".").concat(e.targetEndpoint.id),sourceEndpointId:e.sourceEndpoint.id,sourceNodeId:e.sourceNode.id,targetEndpointId:e.targetEndpoint.id,targetNodeId:e.targetNode.id},delLinks:{id:"".concat(n.sourceNode.id,".").concat(n.sourceEndpoint.id,"-").concat(n.targetNode.id,".").concat(n.targetEndpoint.id),sourceEndpointId:n.sourceEndpoint.id,sourceNodeId:n.sourceNode.id,targetEndpointId:n.targetEndpoint.id,targetNodeId:n.targetNode.id},info:t.info},o=this.edges.findIndex((function(t){return t.id===a.delLinks.id}));this.edges.splice(o,1),this.edges.push({id:"".concat(e.sourceNode.id,".").concat(e.sourceEndpoint.id,"-").concat(e.targetNode.id,".").concat(e.targetEndpoint.id),sourceNode:a.addLink.sourceNodeId,targetNode:a.addLink.targetNodeId,source:a.addLink.sourceEndpointId,target:a.addLink.targetEndpointId}),this.$emit("onChangeEdges",a)}},onOtherEvent:function(t){this.$emit("onOtherEvent",t)}}},lt=ut,pt=(n("7074"),n("ee7a"),Object(H["a"])(lt,c,d,!1,null,null,null)),ft=pt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({class:t.className,attrs:{id:"bf_endpoint_"+t.id}},t.$listeners),[t._t("default",[n("div",[t._v(" "+t._s(t.id)+" ")])])],2)},ht=[],gt={name:"butterfly-vue-endpoint",props:{id:{type:String,required:!0},className:{type:String,default:"vue-bf-endpoint-default"},param:{type:Object}},methods:{findParent:function(t){if(t.$parent){var e=P.a.get(t,"$parent.$butterfly.type",!1);if(!e)return this.findParent(t.$parent);if(["node"].includes(e)&&P.a.get(t,"$parent.$options.propsData.canvasNode",!1))return t.$parent}else console.warn("锚点没有被node包裹上,请检查！")}},mounted:function(){var t=this.findParent(this),e=P.a.get(t,"$options.propsData.canvasNode",!1);e&&!e.getEndpoint("bf_endpoint_"+this.id)&&e.addEndpoint(Object(p["a"])({id:"bf_endpoint_"+this.id,dom:this.$el},this.param))},beforeDestroy:function(){var t=this.findParent(this);t.canvasNode.getEndpoint("bf_endpoint_"+this.id)&&t.canvasNode.removeEndpoint("bf_endpoint_"+this.id)}},bt=gt,mt=(n("2415"),Object(H["a"])(bt,vt,ht,!1,null,null,null)),_t=(mt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"node"},[n("div",{staticClass:"header",style:t.itemData.userData.isCompleted?"background-color: RGBA(103, 194, 58, 0.9);":"background-color: #3C3A3A;"},[t._v(" "+t._s(t.itemData.userData.title)+" ")]),n("div",{staticClass:"content"},[t._v(" "+t._s(t.itemData.userData.content)+" ")]),t.itemData.userData.isRuning?n("div",{staticClass:"blinking-dot"}):t._e()])}),yt=[],Et={name:"title-content-node",props:{itemData:{type:Object},canvasNode:{type:Object}},components:{},methods:{}},wt=Et,xt=(n("0295"),Object(H["a"])(wt,_t,yt,!1,null,null,null)),Dt=xt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group_node"},[a("div",{staticClass:"group_node_header",style:t.itemData.userData.isCompleted?"background-color: RGBA(103, 194, 58, 0.9);":"background-color: #3C3A3A;"},[t._v(" "+t._s(t.itemData.userData.title)+" ")]),a("div",{staticClass:"group_content"},t._l(t.expertData,(function(e,o){return a("div",{key:o,staticClass:"group_content_item",style:e.isRuning?"":"opacity: 0.5"},[e.isRuning?[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"hover"}},[a("OneChat",{staticStyle:{width:"360px",height:"400px","border-radius":"8px",overflow:"hidden","z-index":"9999999999"},attrs:{messages:e.messages,sender:e.title}}),a("div",{class:t.itemData.isDiagnosing?"blinking-avatar-dot":"avatar-dot",attrs:{slot:"reference"},slot:"reference"},[a("img",{staticClass:"group_content_item_avatar",attrs:{src:n("1771")("./"+e.avatar)}})])],1)]:[a("div",[a("img",{staticClass:"group_content_item_avatar",attrs:{src:n("1771")("./"+e.avatar)}})])],a("div",{staticClass:"group_content_item_text"},[t._v(t._s(e.title))])],2)})),0),t.itemData.userData.isRuning&&t.itemData.isDiagnosing?a("div",{staticClass:"blinking-dot"}):t._e()])},Ct=[],jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%",height:"100%",position:"relative",display:"flex","flex-direction":"column",background:"rgb(242, 246, 255)"}},[n("div",{staticClass:"scroll-container",staticStyle:{position:"relative"}},[n("div",{staticClass:"message-header"},[n("span",{staticStyle:{"font-size":"16px",color:"#FFFFFF"}},[t._v(t._s(t.sender))])]),t._l(t.chats,(function(e,a){return n("div",{key:a,staticClass:"text-item"},[n("span",{staticStyle:{"font-size":"14px",color:"#333333","margin-bottom":"5px"}},[n("span",{staticStyle:{"margin-left":"5px",color:"#666666"}},[t._v(t._s(e.time))])]),n("div",{staticClass:"report-content",domProps:{innerHTML:t._s(e.data)}})])}))],2)])},Nt=[],kt=(n("d3b7"),n("25f0"),n("498a"),n("d4cd")),It=n.n(kt),Rt=n("1487"),$t=n.n(Rt),St={name:"OneChat",components:{},props:{messages:{type:Array,required:!0,default:function(){return[]}},sender:{type:String,required:!0,default:""}},data:function(){return{componentId:Math.random().toString(36).substr(2,9),chats:[],scrollObserver:void 0,md:(new It.a).set({html:!0,breaks:!0,typographer:!0,linkify:!0}).set({highlight:function(t){return'<pre class="hljs"><code>'+$t.a.highlight(t,{language:"python",ignoreIllegals:!0}).value+"</code></pre>"}})}},watch:{messages:{handler:function(){console.log("=======:",this.messages),this.chats=[];for(var t=0;t<this.messages.length;t++){var e=this.messages[t];e.data&&0!==e.data.trim().length&&this.chats.push({time:e.time,data:this.md.render(e.data)})}},deep:!0,immediate:!0}}},Lt=St,Tt=(n("5637"),n("e923"),Object(H["a"])(Lt,jt,Nt,!1,null,"2b793b10",null)),At=Tt.exports,Ft={name:"agent_group_node",components:{OneChat:At},props:{itemData:{type:Object},canvasNode:{type:Object}},data:function(){return{defaultExpertData:[{title:"CpuExpert",subTitle:"CpuExpert",avatar:"cpu_robot.webp",isRuning:!1,role:""},{title:"MemoryExpert",subTitle:"MemoryExpert",avatar:"mem_robot.webp",isRuning:!1,role:""},{title:"IoExpert",subTitle:"IoExpert",avatar:"io_robot.webp",isRuning:!1,role:""},{title:"IndexExpert",subTitle:"IndexExpert",avatar:"index_robot.webp",isRuning:!1,role:""},{title:"ConfigExpert",subTitle:"ConfigurationExpert",avatar:"configuration_robot.webp",isRuning:!1,role:""},{title:"QueryExpert",subTitle:"QueryExpert",avatar:"query_robot.webp",isRuning:!1,role:""},{title:"WorkloadExpert",subTitle:"WorkloadExpert",avatar:"workload_robot.webp",isRuning:!1,role:""},{title:"WriteExpert",subTitle:"WriteExpert",avatar:"mem_robot.webp",isRuning:!1,role:""}],expertData:[]}},watch:{itemData:{handler:function(t,e){this.expertData=JSON.parse(JSON.stringify(this.defaultExpertData)),t.userData.expertData&&this.expertData.forEach((function(e){t.userData.expertData.forEach((function(t){e.subTitle===t.name&&(e.isRuning=!0,e.messages=t.messages)}))}))},deep:!0,immediate:!0}},methods:{}},Pt=Ft,qt=(n("35ce"),Object(H["a"])(Pt,Ot,Ct,!1,null,null,null)),Mt=qt.exports,Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"node"},[n("div",{staticClass:"header",style:t.itemData.userData.isCompleted?"background-color: RGBA(103, 194, 58, 0.9);":"background-color: #3C3A3A;"},[t._v(" "+t._s(t.itemData.userData.title)+" ")]),t.itemData.userData.isCompleted?[n("el-popover",{attrs:{placement:"top-start",title:"",trigger:"hover"}},[n("div",{staticStyle:{width:"auto",height:"800px","border-radius":"8px","overflow-y":"scroll","overflow-x":"scroll","z-index":"9999999999","background-color":"RGBA(242, 246, 255, 1)",padding:"20px"}},[n("div",{staticStyle:{transform:"scale(0.8)",width:"100%",height:"100%"},domProps:{innerHTML:t._s(t.report)}})]),n("div",{staticClass:"content",attrs:{slot:"reference"},slot:"reference"},[t._v(" "+t._s(t.itemData.userData.content)+" ")])])]:[n("div",{staticClass:"content"},[t._v(" "+t._s(t.itemData.userData.content)+" ")])],t.itemData.userData.isRuning?n("div",{staticClass:"blinking-dot"}):t._e()],2)},zt=[],Vt={name:"title-content-node",props:{itemData:{type:Object},canvasNode:{type:Object}},watch:{itemData:{handler:function(t){var e=t.userData.messages;e&&0!==e.trim().length?this.report=this.md.render(e):this.report=""},deep:!0,immediate:!0}},data:function(){return{report:"",md:(new It.a).set({html:!0,breaks:!0,typographer:!0,linkify:!0}).set({highlight:function(t){return'<pre class="hljs"><code>'+$t.a.highlight(t,{language:"python",ignoreIllegals:!0}).value+"</code></pre>"}})}},components:{},methods:{}},Bt=Vt,Wt=(n("40e7"),Object(H["a"])(Bt,Gt,zt,!1,null,null,null)),Ht=Wt.exports,Jt=function(t){Object(h["a"])(n,t);var e=Object(g["a"])(n);function n(){return Object(f["a"])(this,n),e.apply(this,arguments)}return Object(O["a"])(n,[{key:"draw",value:function(t){var e=Object(C["a"])(Object(j["a"])(n.prototype),"draw",this).call(this,t);return console.log("********path:",e),e}},{key:"drawLabel",value:function(t){console.log("********texts:",t)}}]),n}(u["Edge"]),Kt=Jt,Qt={titleContentNode:Dt,agentGroupNode:Mt,clickContentNode:Ht,Edge:Kt},Ut={name:"ReportFlow",props:["args"],components:{ButterflyVue:ft},data:function(){return{options:{width:"100%",height:"300px",background:"rgba(0, 0, 0, 1)"},runData:{},defaults:{width:"100%",height:"300px",background:"rgba(0, 0, 0, 1)"},nodeData:{},canvansRef:{},butterflyVue:{},nodeIndex:0}},watch:{args:{handler:function(t,e){this.options.width=t.args.width||this.defaults.width,this.options.height=t.args.height||this.defaults.height,this.options.background=t.args.background||this.defaults.background;var n=t.args.nodeData;n.nodes.forEach((function(t){t.render=Qt[t.render],t["isDiagnosing"]=n.isDiagnosing})),n.edges.forEach((function(t){t.Class=Qt[t.Class]})),this.nodeData=n},deep:!0,immediate:!0}},methods:{addEdge:function(){this.mockData.edges.push({id:"0-29",type:"node",source:"0",target:"29"})},finishLoaded:function(t){this.butterflyVue=t,this.canvansRef=t.canvas,window.butterflyVue=t,console.log("finish:",this.canvansRef)}}},Xt=Ut,Yt=(n("206f"),Object(H["a"])(Xt,i,s,!1,null,null,null)),Zt=Yt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[""!=t.componentError?n("div",[n("h1",{staticClass:"err__title"},[t._v("Component Error")]),n("div",{staticClass:"err__msg"},[t._v(t._s(t.componentError))])]):void 0!=t.renderData?t._t("default",null,{args:t.renderData.args,disabled:t.renderData.disabled}):t._e()],2)},ee=[],ne=n("d092"),ae=a["default"].extend({name:"withStreamlitConnection",data:function(){return{renderData:void 0,componentError:""}},methods:{onRenderEvent:function(t){var e=t;this.renderData=e.detail,this.componentError=""}},mounted:function(){ne["a"].events.addEventListener(ne["a"].RENDER_EVENT,this.onRenderEvent),ne["a"].setComponentReady(),ne["a"].setFrameHeight()},updated:function(){ne["a"].setFrameHeight()},destroyed:function(){ne["a"].events.removeEventListener(ne["a"].RENDER_EVENT,this.onRenderEvent)},errorCaptured:function(t){this.componentError=String(t)}}),oe=ae,re=(n("0994"),Object(H["a"])(oe,te,ee,!1,null,"17a60eb2",null)),ie=re.exports,se={name:"App",components:{ReportFlow:Zt,WithStreamlitConnection:ie}},ce=se,de=(n("034f"),Object(H["a"])(ce,o,r,!1,null,null,null)),ue=de.exports,le=n("5c96");n("0fae");a["default"].component(le["Popover"].name,le["Popover"]),a["default"].config.productionTip=!1,a["default"].prototype.$ELEMENT={size:"small",zIndex:3e3},new a["default"]({render:function(t){return t(ue)}}).$mount("#app")},ce29:function(t,e,n){},dab1:function(t,e,n){t.exports=n.p+"img/configuration_robot.7b743a08.webp"},e923:function(t,e,n){"use strict";var a=n("fb7f"),o=n.n(a);o.a},ee4f:function(t,e,n){},ee7a:function(t,e,n){"use strict";var a=n("88c2"),o=n.n(a);o.a},f3b7:function(t,e,n){},fb7f:function(t,e,n){},fbcc:function(t,e,n){t.exports=n.p+"img/dba_robot.f875048d.webp"}});
//# sourceMappingURL=app.5fc234c9.js.map