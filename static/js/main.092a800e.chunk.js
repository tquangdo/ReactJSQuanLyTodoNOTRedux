(this["webpackJsonpquanly-todo-notredux"]=this["webpackJsonpquanly-todo-notredux"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),i=a(6),c=a(1),s=a(2),m=a(4),u=a(3),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-header"},r.a.createElement("h1",null,"Qu\u1ea3n l\xed TODO list ",r.a.createElement("small",null,"ReactJS")))}}]),a}(r.a.Component),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).refTim=r.a.createRef(),n}return Object(s.a)(a,[{key:"timKiem",value:function(e){this.props.onClickTimKiem(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",ref:this.refTim,placeholder:"Nh\u1eadp \u0111\u1ec3 t\xecm..."}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.timKiem(e.refTim.current.value)}},"T\xecm ki\u1ebfm"),r.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.timKiem("")}},"Hi\u1ec7n all"))))}}]),a}(r.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"doiSort",value:function(e,t){this.props.onClickDoiSort(e,t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-default dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},"X\u1ebfp theo ",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},r.a.createElement("li",null,r.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.doiSort("name","asc")}},"NAME ASC")),r.a.createElement("li",null,r.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.doiSort("name","desc")}},"NAME DESC")),r.a.createElement("li",{role:"separator",className:"divider"}),r.a.createElement("li",null,r.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.doiSort("level","asc")}},"LEVEL ASC")),r.a.createElement("li",null,r.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.doiSort("level","desc")}},"LEVEL DESC"))),r.a.createElement("span",{className:"label label-success label-medium"},this.props.orderBy.toUpperCase()," - ",this.props.orderDir.toUpperCase())))}}]),a}(r.a.Component),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"anHienForm",value:function(){this.props.anHienForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-xs-5 col-sm-5 col-md-5 col-lg-5"},r.a.createElement("button",{type:"button",className:"btn btn-info btn-block",onClick:function(){return e.anHienForm()}},this.props.domAnHien," "))}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement(d,{onClickTimKiem:this.props.onClickTimKiem}),r.a.createElement(h,{orderBy:this.props.orderBy,orderDir:this.props.orderDir,onClickDoiSort:this.props.onClickDoiSort}),r.a.createElement(b,{anHienForm:this.props.anHienForm,domAnHien:this.props.domAnHien}))}}]),a}(r.a.Component),E=a(10),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).submitForm=function(e){if(""===n.state.task_name)alert("KH\xd4NG \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng t\xean task!!!");else{var t={uid:n.state.task_uid,name:n.state.task_name,level:n.state.task_level};n.props.onClickThem(t)}e.preventDefault()},n.handleChange=function(e){var t=e.target.name,a="checkbox"===e.target.type?e.target.checked:e.target.value;n.setState(Object(E.a)({},t,a))},n.state={task_uid:"",task_name:"",task_level:0},n}return Object(s.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.componentWillMountWillReceive(this.props.propItemEdit)}},{key:"componentWillMountWillReceive",value:function(e){null!==e&&this.setState({task_uid:e.uid,task_name:e.name,task_level:e.level})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.componentWillMountWillReceive(e.propItemEdit)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-offset-7 col-md-5"},r.a.createElement("form",{onSubmit:this.submitForm,className:"form-inline"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"task_name",type:"text",className:"form-control",value:this.state.task_name,onChange:this.handleChange,placeholder:"Nh\u1eadp task name..."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"task_level",className:"form-control",value:this.state.task_level,onChange:this.handleChange,required:"required"},r.a.createElement("option",{value:0},"Th\u1ea5p"),r.a.createElement("option",{value:1},"V\u1eeba"),r.a.createElement("option",{value:2},"Cao"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},this.props.txtThemSua," "))))}}]),a}(r.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"xoa",value:function(e){this.props.onClickXoa(e)}},{key:"sua",value:function(e){this.props.onClickSua(e)}},{key:"doiLevelSo2Chu",value:function(e){var t=r.a.createElement("span",{className:"label label-default"},"Th\u1ea5p");return 1===e?t=r.a.createElement("span",{className:"label label-info"},"V\u1eeba"):2===e&&(t=r.a.createElement("span",{className:"label label-danger"},"Cao")),t}},{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center"},this.props.chiso+1),r.a.createElement("td",null,this.props.item.name," "),r.a.createElement("td",{className:"text-center"},this.doiLevelSo2Chu(this.props.item.level)),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){return e.sua(e.props.item)}},"S\u1eeda"),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.xoa(e.props.item.uid)}},"X\xf3a")))}}]),a}(r.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.mangmuccons.map((function(t,a){return r.a.createElement(k,{key:a,chiso:a,item:t,onClickXoa:e.props.onClickXoa,onClickSua:e.props.onClickSua})}));return r.a.createElement("div",{className:"panel panel-success"},r.a.createElement("div",{className:"panel-heading"},"List Tasks"),r.a.createElement("table",{className:"table table-hover "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"10%"},className:"text-center"},"#"),r.a.createElement("th",null,"NAME"),r.a.createElement("th",{style:{width:"20%"},className:"text-center"},"LEVEL"),r.a.createElement("th",{style:{width:"20%"}},"Ch\u1ec9nh s\u1eeda"))),r.a.createElement("tbody",null,t)))}}]),a}(r.a.Component),O=a(8).uuid,y=[{uid:O(),name:"qu\xe9t nh\xe0",level:2},{uid:O(),name:"r\u1eeda ch\xe9n",level:0},{uid:O(),name:"qu\xe9t s\xe2n",level:0},{uid:O(),name:"lau ch\xe9n",level:1},{uid:O(),name:"gi\u1eb7t \u0111\u1ed3",level:1}],N=a(5),g=a(8).uuid,S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).txtThemSua="Th\xeam",n.anHienForm=function(){n.txtThemSua="Th\xeam",n.setState({stateIsHienForm:!n.state.stateIsHienForm,stateItemEdit:null})},n.onClickDoiSort=function(e,t){n.setState({stateOrderBy:e,stateOrderDir:t})},n.onClickThem=function(e){var t=n.state.stateMangGoc,a="";""!==e.uid?(t=Object(N.reject)(t,{uid:e.uid}),a=e.uid):a=g(),t.push({uid:a,name:e.name,level:+e.level}),n.setState({stateMangGoc:t,stateIsHienForm:!1}),localStorage.setItem("mangItems",JSON.stringify(t))},n.onClickSua=function(e){n.txtThemSua="S\u1eeda",n.setState({stateItemEdit:e,stateIsHienForm:!0})},n.onClickTimKiem=function(e){n.setState({stateTxtTimKiem:e})},n.onClickXoa=function(e){var t=n.state.stateMangGoc;Object(N.remove)(t,(function(t){return t.uid===e})),n.setState({stateMangGoc:t}),localStorage.setItem("mangItems",JSON.stringify(t))},n.state={stateIsHienForm:!1,stateTxtTimKiem:"",stateOrderBy:"name",stateMangGoc:y,stateOrderDir:"asc",stateItemEdit:null},n}return Object(s.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({stateMangGoc:JSON.parse(localStorage.getItem("mangItems"))||y})}},{key:"render",value:function(){var e=this,t=null!==this.state.stateMangGoc?Object(i.a)(this.state.stateMangGoc):Object(i.a)(y),a=[];a=Object(N.filter)(t,(function(t){return Object(N.includes)(t.name.toLowerCase(),e.state.stateTxtTimKiem.toLowerCase())})),a=Object(N.orderBy)(a,[this.state.stateOrderBy],[this.state.stateOrderDir]);var n=null,l=null;return this.state.stateIsHienForm?(l=r.a.createElement(f,{onClickThem:this.onClickThem,anHienForm:this.anHienForm,propItemEdit:this.state.stateItemEdit,txtThemSua:this.txtThemSua}),n=r.a.createElement("i",null,"\u1ea8n m\u1ee5c th\xeam task")):n=r.a.createElement("b",null,"Hi\u1ec7n m\u1ee5c th\xeam task"),r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(v,{anHienForm:this.anHienForm,domAnHien:n,onClickDoiSort:this.onClickDoiSort,onClickTimKiem:this.onClickTimKiem,orderBy:this.state.stateOrderBy,orderDir:this.state.stateOrderDir}),l,r.a.createElement(C,{mangmuccons:a,onClickXoa:this.onClickXoa,onClickSua:this.onClickSua}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("dotq")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.092a800e.chunk.js.map