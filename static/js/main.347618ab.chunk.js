(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(8),o=n.n(s),c=n(9),r=n(3),u=n(2),l=n.n(u),b=n(0),d=function(t){var e=t.onSubmit,n=Object(a.useState)(""),i=Object(r.a)(n,2),s=i[0],o=i[1],c=Object(a.useState)(""),u=Object(r.a)(c,2),d=u[0],m=u[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{className:l.a.TaskEditor,onSubmit:function(t){t.preventDefault();var n={id:Date.now(),name:s,number:d};e(n),o(""),m("")},children:[Object(b.jsxs)("label",{className:l.a.TaskEditor_label,children:["Name",Object(b.jsx)("input",{className:l.a.TaskEditor_input,type:"text",name:"name",value:s,onChange:function(t){o(t.target.value)}})]}),Object(b.jsxs)("label",{className:l.a.TaskEditor_label,children:["Number",Object(b.jsx)("input",{className:l.a.TaskEditor_input,type:"text",name:"number",value:d,onChange:function(t){m(t.target.value)}})]}),Object(b.jsx)("button",{className:l.a.TaskEditor_button,children:" Add contact"})]})})};function m(t){var e=t.value,n=t.onChangeFilter;return Object(b.jsxs)("div",{children:["Find contacts by name",Object(b.jsx)("input",{type:"text",value:e,onChange:n})]})}var _=n(6),j=n.n(_),k=function(t){t.newContacts;var e=t.onRemoveContact,n=t.filteredContacts;return Object(b.jsx)("ul",{className:j.a.TaskList,children:n.map((function(t){return Object(b.jsxs)("li",{className:j.a.TaskList_item,children:[t.name+": "+t.number,Object(b.jsx)("button",{className:j.a.TaskList_button,type:"button",name:"delte",onClick:function(){return e(t.id)},children:"delete"})]},t.id)}))})},f=function(){var t=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),e=Object(r.a)(t,2),n=e[0],i=e[1],s=Object(a.useState)(""),o=Object(r.a)(s,2),u=o[0],l=o[1],_=n.filter((function(t){return t.name.toLowerCase().includes(u.toLowerCase())}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(d,{onSubmit:function(t){if(n.find((function(e){return e.name===t.name})))return alert("".concat(t.name," is already in contacts"));i((function(e){return[t].concat(Object(c.a)(e))}))}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(m,{value:u,onChangeFilter:function(t){l(t.target.value)}}),Object(b.jsx)(k,{newContacts:n,onRemoveContact:function(t){return i((function(e){return e.filter((function(e){return e.id!==t}))}))},filteredContacts:_})]})};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={TaskEditor:"ContactForm_TaskEditor__1gYPr",TaskEditor_label:"ContactForm_TaskEditor_label__3Cj4Z",TaskEditor_input:"ContactForm_TaskEditor_input__68SIy",TaskEditorinput:"ContactForm_TaskEditorinput__27VfH",TaskEditor_button:"ContactForm_TaskEditor_button__LJkgZ"}},6:function(t,e,n){t.exports={TaskList:"ContactList_TaskList__21YW4",TaskList_item:"ContactList_TaskList_item__ksKO8",completed:"ContactList_completed__1e4Nf",TaskList_text:"ContactList_TaskList_text__Ku6k2",TaskList_actions:"ContactList_TaskList_actions__1vp8i",TaskList_button:"ContactList_TaskList_button__yA6xW"}}},[[15,1,2]]]);
//# sourceMappingURL=main.347618ab.chunk.js.map