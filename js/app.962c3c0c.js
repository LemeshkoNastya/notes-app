(function(t){function e(e){for(var o,i,r=e[0],a=e[1],l=e[2],u=0,b=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&b.push(s[i][0]),s[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);d&&d(e);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var a=n[r];0!==s[a]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},s={app:0},c=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0042":function(t,e,n){"use strict";n("5e9f")},"0d45":function(t,e,n){t.exports=n.p+"img/delete.7f916b3f.svg"},1573:function(t,e,n){},"1bbe":function(t,e,n){},2138:function(t,e,n){"use strict";n("6508")},"27df":function(t,e,n){"use strict";n("a086")},"3f14":function(t,e,n){"use strict";n("e776")},"3fc4":function(t,e,n){"use strict";n("9324")},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("7a23");function s(t,e){const n=Object(o["y"])("router-view");return Object(o["t"])(),Object(o["e"])(n)}n("6437");var c=n("6b0d"),i=n.n(c);const r={},a=i()(r,[["render",s]]);var l=a,d=n("6605");const u={class:"main-page"},b={class:"main-page__title"},p=Object(o["h"])("h1",null,"Note taking app",-1);function h(t,e,n,s,c,i){const r=Object(o["y"])("BaseButton"),a=Object(o["y"])("router-link"),l=Object(o["y"])("NotesList");return Object(o["t"])(),Object(o["g"])("div",u,[Object(o["h"])("div",b,[p,Object(o["i"])(a,{to:{name:"edit",params:{id:0}}},{default:Object(o["F"])(({navigate:t})=>[Object(o["i"])(r,{text:"Create a new note",onClick:t},null,8,["onClick"])]),_:1})]),Object(o["i"])(l)])}const O={class:"button"};function j(t,e,n,s,c,i){return Object(o["t"])(),Object(o["g"])("button",O,Object(o["A"])(n.text),1)}var f={props:["text"]};n("df16");const m=i()(f,[["render",j]]);var k=m;const g={class:"notes"};function v(t,e,n,s,c,i){const r=Object(o["y"])("NotesListItem");return Object(o["t"])(),Object(o["g"])("div",g,[(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["x"])(t.notes,t=>(Object(o["t"])(),Object(o["e"])(r,{key:t.name,note:t},null,8,["note"]))),128))])}const _={class:"note__header"},y={class:"note__title"};function T(t,e,n,s,c,i){const r=Object(o["y"])("DropdownNote"),a=Object(o["y"])("TodoList"),l=Object(o["y"])("PopupWarning");return Object(o["t"])(),Object(o["g"])("div",{class:"note",style:Object(o["p"])({backgroundColor:i.bgrColor})},[Object(o["h"])("div",_,[Object(o["h"])("h3",y,Object(o["A"])(n.note.name),1),Object(o["i"])(r,{id:n.note.id,onOpenPopup:e[0]||(e[0]=t=>c.showPopup=!0)},null,8,["id"])]),Object(o["i"])(a,{"id-note":n.note.id,all:c.showTasksAll},null,8,["id-note","all"]),c.showTasksAll?Object(o["f"])("",!0):(Object(o["t"])(),Object(o["g"])("button",{key:0,onClick:e[1]||(e[1]=Object(o["I"])(t=>c.showTasksAll=!0,["prevent"])),class:Object(o["o"])(["note__button",{note__button_invisible:0===i.tasksHidden}])}," +"+Object(o["A"])(i.tasksHidden)+" Tasks ",3)),c.showPopup?(Object(o["t"])(),Object(o["e"])(l,{key:1,header:"Deleting a note",text:"Are you sure you want to delete the note?",component:"TextWarning",onClose:e[2]||(e[2]=t=>c.showPopup=!1),onConfirmed:e[3]||(e[3]=e=>t.deleteNote(n.note.id))})):Object(o["f"])("",!0)],4)}const w={class:"list"};function N(t,e,n,s,c,i){const r=Object(o["y"])("TodoListItem");return Object(o["t"])(),Object(o["g"])("ul",w,[(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["x"])(t.tasks(n.idNote,n.all),t=>(Object(o["t"])(),Object(o["e"])(r,{key:t.name,task:t,disabled:!0},null,8,["task"]))),128))])}var x=n("daf0"),C=n.n(x),I=n("0d45"),P=n.n(I);const S={class:"list__item"},A=["id","value","disabled"],E=["for"],B={key:2,class:"list__icons"},D=Object(o["h"])("img",{src:C.a},null,-1),L=[D],M=Object(o["h"])("img",{src:P.a},null,-1),W=[M];function $(t,e,n,s,c,i){return Object(o["t"])(),Object(o["g"])("li",S,[Object(o["G"])(Object(o["h"])("input",{type:"checkbox",id:c.currentTask.name,"onUpdate:modelValue":e[0]||(e[0]=t=>c.currentTask.done=t),value:c.currentTask.name,disabled:n.disabled,class:"list__checkbox"},null,8,A),[[o["C"],c.currentTask.done]]),c.isChange?Object(o["G"])((Object(o["t"])(),Object(o["g"])("input",{key:1,"onUpdate:modelValue":e[1]||(e[1]=t=>c.newName=t),placeholder:"Enter name of task",onKeyup:e[2]||(e[2]=Object(o["H"])((...t)=>i.keyupCheck&&i.keyupCheck(...t),["enter"])),class:"edit__input"},null,544)),[[o["D"],c.newName]]):(Object(o["t"])(),Object(o["g"])("label",{key:0,for:c.currentTask.name,class:"list__label"},Object(o["A"])(c.currentTask.name),9,E)),n.buttons&&!c.isChange?(Object(o["t"])(),Object(o["g"])("div",B,[Object(o["h"])("button",{class:"list__icon",onClick:e[3]||(e[3]=Object(o["I"])((...t)=>i.editTask&&i.editTask(...t),["prevent"]))},L),Object(o["h"])("button",{class:"list__icon",onClick:e[4]||(e[4]=Object(o["I"])(e=>t.$emit("deleteTodo"),["prevent"]))},W)])):Object(o["f"])("",!0)])}var H={props:["task","disabled","buttons"],data(){return{currentTask:this.task,newName:this.task.name,isChange:!1}},watch:{currentTask(){this.$emit("input",this.currentTask)}},methods:{editTask(){this.isChange=!0,this.$emit("editTodo")},keyupCheck(){this.currentTask.name=this.newName,this.isChange=!1}}};n("b61f");const J=i()(H,[["render",$]]);var U=J,V=n("5502"),F={props:["idNote","all"],components:{TodoListItem:U},computed:{...Object(V["b"])({tasks:"showTasks"})}};n("2138");const G=i()(F,[["render",N]]);var R=G,K=n("d17f"),Y=n.n(K);const q={class:"menu"},z=Object(o["h"])("button",{class:"menu__button"},[Object(o["h"])("img",{src:Y.a})],-1),Q={class:"dropdown"},X={class:"dropdown__list"},Z=["onClick"],tt=Object(o["h"])("div",{class:"dropdown__icon"},[Object(o["h"])("img",{src:C.a})],-1),et=Object(o["h"])("span",null,"Edit note",-1),nt=[tt,et],ot=Object(o["h"])("div",{class:"dropdown__icon"},[Object(o["h"])("img",{src:P.a})],-1),st=Object(o["h"])("span",null,"Delete note",-1),ct=[ot,st];function it(t,e,n,s,c,i){const r=Object(o["y"])("router-link");return Object(o["t"])(),Object(o["g"])("div",q,[z,Object(o["h"])("div",Q,[Object(o["h"])("ul",X,[Object(o["i"])(r,{to:{name:"edit",params:{id:n.id}},custom:""},{default:Object(o["F"])(({navigate:t})=>[Object(o["h"])("li",{onClick:t,class:"dropdown__item"},nt,8,Z)]),_:1},8,["to"]),Object(o["h"])("li",{class:"dropdown__item",onClick:e[0]||(e[0]=Object(o["I"])(e=>t.$emit("openPopup"),["prevent"]))},ct)])])])}var rt={props:["id"]};n("3fc4");const at=i()(rt,[["render",it]]);var lt=at;const dt={class:"popup__bg"},ut={class:"popup"},bt={class:"popup__content"},pt={class:"popup__header"},ht={class:"popup__body"},Ot={class:"popup__footer"};function jt(t,e,n,s,c,i){const r=Object(o["y"])("BaseButton");return Object(o["t"])(),Object(o["e"])(o["b"],{name:"modal"},{default:Object(o["F"])(()=>[Object(o["h"])("div",dt,[Object(o["h"])("div",ut,[Object(o["h"])("div",bt,[Object(o["h"])("div",pt,[Object(o["h"])("h2",null,Object(o["A"])(n.header),1)]),Object(o["h"])("div",ht,[Object(o["h"])("p",null,Object(o["A"])(n.text),1)]),Object(o["h"])("div",Ot,[Object(o["i"])(r,{text:"Yes",onClick:e[0]||(e[0]=Object(o["I"])(e=>t.$emit("confirmed"),["prevent"])),class:"popup__button"}),Object(o["i"])(r,{text:"Cancel",onClick:e[1]||(e[1]=Object(o["I"])(e=>t.$emit("close"),["prevent"])),class:"popup__button"})])])])])]),_:1})}var ft={props:["header","text"],components:{BaseButton:k}};n("8343");const mt=i()(ft,[["render",jt]]);var kt=mt,gt={props:["note"],components:{TodoList:R,DropdownNote:lt,PopupWarning:kt},data(){return{showTasksAll:!1,showPopup:!1}},computed:{...Object(V["b"])({countTasksHidden:"countTasksHidden"}),bgrColor(){return this.note?this.note.background:"#ffffff"},tasksHidden(){return this.countTasksHidden(this.note.id)}},methods:{...Object(V["c"])(["deleteNote"])}};n("b0f0");const vt=i()(gt,[["render",T]]);var _t=vt,yt={components:{NotesListItem:_t},computed:{...Object(V["b"])({notes:"getNotes"})}};n("0042");const Tt=i()(yt,[["render",v]]);var wt=Tt,Nt={name:"Main",components:{BaseButton:k,NotesList:wt},computed:{...Object(V["b"])({notes:"getNotes"})},methods:{...Object(V["c"])(["addNotes"])},created(){const t=JSON.parse(localStorage.getItem("notes"));0===this.notes.length&&t&&t.forEach(t=>{this.addNotes(t)})}};n("f17f");const xt=i()(Nt,[["render",h]]);var Ct=xt;const It={class:"edit"},Pt={key:0},St={key:1,class:"edit__title"},At={class:"edit__tooltips"},Et={class:"edit__content"},Bt={class:"edit__item"},Dt=Object(o["h"])("label",{class:"edit__label"},"Note title",-1),Lt=Object(o["h"])("h3",null,"Task list",-1),Mt={class:"edit__list"},Wt={key:0,class:"edit__error"},$t={class:"edit__item"},Ht={class:"edit__buttons"},Jt={key:0,class:"edit__error"};function Ut(t,e,n,s,c,i){const r=Object(o["y"])("BaseTooltip"),a=Object(o["y"])("TodoListItem"),l=Object(o["y"])("BaseButton"),d=Object(o["y"])("PopupWarning");return Object(o["t"])(),Object(o["g"])("div",It,[Object(o["h"])("div",null,[i.newNote?(Object(o["t"])(),Object(o["g"])("h1",Pt,"Create a new note")):(Object(o["t"])(),Object(o["g"])("div",St,[Object(o["h"])("h1",null,"Note editing - "+Object(o["A"])(c.note.name),1),Object(o["h"])("div",At,[(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["x"])(c.actionsButton,t=>(Object(o["t"])(),Object(o["e"])(r,{key:t.icon,icon:t.icon,text:t.text,onClick:Object(o["I"])(e=>i.clickTooltipButton(t.icon),["prevent"])},null,8,["icon","text","onClick"]))),128))])]))]),Object(o["h"])("div",Et,[Object(o["h"])("div",Bt,[Dt,Object(o["G"])(Object(o["h"])("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>c.note.name=t),placeholder:"Enter note title",class:"edit__input"},null,512),[[o["D"],c.note.name]])]),Lt,Object(o["h"])("ul",Mt,[c.errorTask?(Object(o["t"])(),Object(o["g"])("div",Wt,Object(o["A"])(c.errorTask),1)):Object(o["f"])("",!0),(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["x"])(c.note.taskList,(t,e)=>(Object(o["t"])(),Object(o["e"])(a,{key:t.name,task:t,disabled:!1,buttons:!0,onEditTodo:e=>i.editTodo(t.name),onDeleteTodo:t=>c.note.taskList.splice(e,1),class:"edit__list-item"},null,8,["task","onEditTodo","onDeleteTodo"]))),128))]),Object(o["h"])("div",$t,[Object(o["G"])(Object(o["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>c.newTask=t),placeholder:"Enter name of task",class:"edit__input"},null,512),[[o["D"],c.newTask]]),Object(o["i"])(l,{text:"Add task",onClick:Object(o["I"])(i.addTask,["prevent"]),class:"edit__button"},null,8,["onClick"])])]),Object(o["h"])("div",Ht,[Object(o["i"])(l,{text:i.newNote?"Сreate note":"Save note",onClick:e[2]||(e[2]=Object(o["I"])(t=>i.newNote?i.createNote():i.saveNote(),["prevent"])),class:"edit__button"},null,8,["text"]),Object(o["i"])(l,{text:"Cancel",onClick:e[3]||(e[3]=Object(o["I"])(t=>c.showPopupWarning=!0,["prevent"]))})]),c.error?(Object(o["t"])(),Object(o["g"])("div",Jt,Object(o["A"])(c.error),1)):Object(o["f"])("",!0),c.showPopupWarning?(Object(o["t"])(),Object(o["e"])(d,{key:1,header:"Undo editing",text:"Are you sure you want to undo editing the note?",component:"TextWarning",onClose:e[4]||(e[4]=t=>c.showPopupWarning=!1),onConfirmed:i.toMain},null,8,["onConfirmed"])):Object(o["f"])("",!0),c.showPopupDelete?(Object(o["t"])(),Object(o["e"])(d,{key:2,header:"Deleting a note",text:"Are you sure you want to delete the note?",component:"TextWarning",onClose:e[5]||(e[5]=t=>c.showPopupDelete=!1),onConfirmed:i.deleteCheck},null,8,["onConfirmed"])):Object(o["f"])("",!0)])}const Vt={class:"tooltip"},Ft=["src"],Gt={class:"tooltip__text"};function Rt(t,e,s,c,i,r){return Object(o["t"])(),Object(o["g"])("div",Vt,[Object(o["h"])("img",{src:n("6f32")(`./${s.icon}.svg`)},null,8,Ft),Object(o["h"])("span",Gt,Object(o["A"])(s.text),1)])}var Kt={props:["icon","text"]};n("3f14");const Yt=i()(Kt,[["render",Rt]]);var qt=Yt,zt={components:{TodoListItem:U,BaseButton:k,BaseTooltip:qt,PopupWarning:kt},data(){return{note:{id:null,name:null,background:null,taskList:[]},copy:null,newTask:null,error:null,errorTask:null,minNumId:1e4,maxNumId:99999,showPopupWarning:!1,showPopupDelete:!1,showPopupChangeTodo:!1,actionsButton:[{icon:"arrow-left",text:"Revert the change"},{icon:"arrow-right",text:"Redo an undone change"},{icon:"delete",text:"Delete note"}],currentTask:null}},computed:{...Object(V["b"])({names:"namesNotes",idNotes:"idNotes",noteEditable:"currentNote"}),id(){return+this.$route.params.id},newNote(){return 0===this.id},noteEdit(){return this.noteEditable(this.id)},randomColor(){return"hsl("+360*Math.random()+","+(25+70*Math.random())+"%,"+(85+10*Math.random())+"%)"}},methods:{...Object(V["c"])(["addNotes","updateNotes","deleteNote"]),addTask(){const t=this.newTask;t?this.note.taskList.filter(e=>e.name===t).length>0?this.errorTask="Error ! Such a task already exists.":this.errorTask=null:this.errorTask="Error ! Enter the title.",this.errorTask||(this.note.taskList.push({name:t,done:!1}),this.newTask=null)},createNote(){this.note.name?this.names.filter(t=>t===this.note.name).length>0?this.error="Error ! This post title already exists.":this.error=null:this.error="Error ! Enter note title.",this.error||(this.addNotes(this.note),this.toMain())},saveNote(){console.log("SAVE"),this.updateNotes(this.note),this.toMain()},toMain(){this.$router.push("/")},randomId(){const t=Math.floor(Math.random()*(this.maxNumId-this.minNumId+1))+this.minNumId;if(!(this.idNotes.filter(e=>e===t).length>0))return t;this.randomId()},clickTooltipButton(t){"delete"===t?this.showPopupDelete=!0:this.changeNote()},changeNote(){const t=this.copyObj(this.note);this.note=this.copyObj(this.copy),this.copy=t},deleteCheck(){this.deleteNote(this.note.id),this.showPopupDelete=!1,this.toMain()},copyObj(t){return JSON.parse(JSON.stringify(t))},editTodo(t){this.currentTask=t,this.showPopupChangeTodo=!0},changeTodo(){console.log("change todo")}},mounted(){this.newNote?(this.note.background=this.randomColor,this.note.id=this.randomId()):(this.note=this.copyObj(this.noteEdit),this.copy=this.copyObj(this.note))}};n("27df");const Qt=i()(zt,[["render",Ut]]);var Xt=Qt;const Zt=[{path:"/",name:"main",component:Ct},{path:"/edit/:id",name:"edit",component:Xt}],te=Object(d["a"])({history:Object(d["b"])("/"),routes:Zt});var ee=te,ne=Object(V["a"])({state:{notes:[],countShowTasks:5},mutations:{addNotes(t,e){t.notes.push(e),localStorage.setItem("notes",JSON.stringify(t.notes))},updateNotes(t,e){const n=t.notes.findIndex(t=>t.id===e.id);n>-1&&(t.notes[n]=e,localStorage.setItem("notes",JSON.stringify(t.notes)))},deleteNote(t,e){let n=t.notes.filter(t=>t.id!==e);t.notes=n,localStorage.setItem("notes",JSON.stringify(t.notes))}},getters:{getNotes(t){return t.notes},currentNote:t=>e=>t.notes.find(t=>t.id===e),countTasksHidden:(t,e)=>n=>{const o=e.currentNote(n).taskList.length;let s=0;return o>t.countShowTasks&&(s=o-t.countShowTasks),s},showTasks:(t,e)=>(n,o)=>{const s=e.currentNote(n).taskList;return o?s:s.filter((e,n)=>n<t.countShowTasks)},namesNotes(t){return Array.from(t.notes,t=>t.name)},idNotes(t){return Array.from(t.notes,t=>t.id)}},actions:{},modules:{}});Object(o["d"])(l).use(ne).use(ee).mount("#app")},"5cfb":function(t,e,n){},"5e9f":function(t,e,n){},6437:function(t,e,n){"use strict";n("cb50")},6508:function(t,e,n){},"6f32":function(t,e,n){var o={"./arrow-left.svg":"ac3b","./arrow-right.svg":"cd8c","./delete.svg":"0d45","./edit.svg":"daf0","./menu.svg":"d17f"};function s(t){var e=c(t);return n(e)}function c(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=c,t.exports=s,s.id="6f32"},8343:function(t,e,n){"use strict";n("df7e")},9324:function(t,e,n){},a086:function(t,e,n){},ac3b:function(t,e,n){t.exports=n.p+"img/arrow-left.9317256d.svg"},b0d9:function(t,e,n){},b0f0:function(t,e,n){"use strict";n("1573")},b61f:function(t,e,n){"use strict";n("5cfb")},cb50:function(t,e,n){},cd8c:function(t,e,n){t.exports=n.p+"img/arrow-right.e1d2abec.svg"},d17f:function(t,e,n){t.exports=n.p+"img/menu.d2ca4810.svg"},daf0:function(t,e,n){t.exports=n.p+"img/edit.2aa7f670.svg"},df16:function(t,e,n){"use strict";n("1bbe")},df7e:function(t,e,n){},e776:function(t,e,n){},f17f:function(t,e,n){"use strict";n("b0d9")}});
//# sourceMappingURL=app.962c3c0c.js.map