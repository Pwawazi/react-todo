(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{14:function(t,e,c){t.exports={item:"TodoItem_item__2QbMN",checkbox:"TodoItem_checkbox__2dg_d",textInput:"TodoItem_textInput__3oq7V"}},38:function(t,e,c){},39:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c.n(n),i=c(20),a=c.n(i),s=c(6),r=c(19),l=c(8),u=c(7),d=c(3),j=c(2),b=function(){return Object(j.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(j.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},h=c(12),p=c(13),x=c(0),O=function(t){var e=Object(n.useState)({title:""}),c=Object(u.a)(e,2),o=c[0],i=c[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.title.trim()?(t.addTodoProps(o.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(j.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(t){i(Object(l.a)(Object(l.a)({},o),{},Object(h.a)({},t.target.name,t.target.value)))}}),Object(j.jsx)(x.b.Provider,{value:{color:"darkcyan",style:{fontSize:"20px",color:"#ff0000"},className:"submit-iconn"},children:Object(j.jsx)("button",{className:"input-submit",children:Object(j.jsx)(p.a,{})})})]})},f=c(21),m=c(22),g=function(){var t=Object(n.useState)(!1),e=Object(u.a)(t,2),c=e[0],o=e[1];return Object(j.jsxs)("nav",{className:"navBar",children:[Object(j.jsx)("button",{onClick:function(){o((function(t){return!t}))},children:c?Object(j.jsx)(f.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(j.jsx)(m.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(j.jsx)("ul",{className:"menuNav ".concat(c?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:t.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:t.text})},t.id)}))})]})},y=c(14),v=c.n(y),N=function(t){var e=Object(n.useState)(!1),c=Object(u.a)(e,2),o=c[0],i=c[1],a=t.todo,s=a.completed,r=a.id,l=a.title,d={},b={};return o?d.display="none":b.display="none",Object(n.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(j.jsxs)("li",{className:v.a.item,children:[Object(j.jsxs)("div",{onDoubleClick:function(){i(!0)},style:d,children:[Object(j.jsx)("input",{type:"checkbox",className:v.a.checkbox,checked:s,onChange:function(){return t.handleChangeProps(r)}}),Object(j.jsx)("button",{onClick:function(){return t.deleteTodoProps(r)},children:Object(j.jsx)(p.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(j.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(j.jsx)("input",{type:"text",style:b,className:v.a.textInput,value:l,onChange:function(e){t.setUpdate(e.target.value,r)},onKeyDown:function(t){"Enter"===t.key&&i(!1)}})]})},k=function(t){return Object(j.jsx)("ul",{children:t.todos.map((function(e){return Object(j.jsx)(N,{todo:e,handleChangeProps:t.handleChangeProps,deleteTodoProps:t.deleteTodoProps,setUpdate:t.setUpdate},e.id)}))})},_=function(){var t=Object(d.f)().slug,e=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Philip Wawazi."}].find((function(e){return e.slug===t})),c=e.title,n=e.description;return Object(j.jsxs)("div",{className:"main__content",children:[Object(j.jsx)("h1",{children:c}),Object(j.jsx)("p",{children:n})]})},S=function(){var t=Object(d.g)(),e=t.url,c=t.path;return Object(j.jsxs)("div",{className:"about__content",children:[Object(j.jsxs)("ul",{className:"about__list",children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"".concat(e,"/about-app"),children:"About App"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"".concat(e,"/about-author"),children:"About Author"})})]}),Object(j.jsx)(d.a,{path:"".concat(c,"/:slug"),children:Object(j.jsx)(_,{})})]})},w=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h3",{children:"No match for this page"})})},C=c(41),P=function(){var t=Object(n.useState)(function(){var t=localStorage.getItem("todos");return JSON.parse(t)||[]}()),e=Object(u.a)(t,2),c=e[0],o=e[1];return Object(n.useEffect)((function(){var t=JSON.stringify(c);localStorage.setItem("todos",t)}),[c]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{exact:!0,path:"/",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"inner",children:[Object(j.jsx)(b,{}),Object(j.jsx)(O,{addTodoProps:function(t){var e={id:Object(C.a)(),title:t,completed:!1};o([].concat(Object(r.a)(c),[e]))}}),Object(j.jsx)(k,{todos:c,handleChangeProps:function(t){o((function(e){return e.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e}))}))},deleteTodoProps:function(t){o(Object(r.a)(c.filter((function(e){return e.id!==t}))))},setUpdate:function(t,e){o(c.map((function(c){return c.id===e&&(c.title=t),c})))}})]})})}),Object(j.jsx)(d.a,{path:"/about",children:Object(j.jsx)(S,{})}),Object(j.jsx)(d.a,{path:"*",children:Object(j.jsx)(w,{})})]})]})};c(38);a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(P,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.62be261e.chunk.js.map