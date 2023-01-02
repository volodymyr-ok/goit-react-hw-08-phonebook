"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[693],{7693:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i,o,s,c=t(168),l=t(6444),d=l.ZP.li(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px auto;\n  min-width: 250px;\n\n  p {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    .name {\n      color: #b6baff;\n    }\n  }\n\n  button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    border: 0 solid #b6baff;\n    /* padding: 5px 10px; */\n    padding: 0;\n    background-color: #cc4343;\n    margin-top: 5px;\n    margin-left: auto;\n\n    color: #222327;\n    font-weight: 700;\n    font-family: inherit;\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n      background-color: transparent;\n      color: #9b6e14;\n      outline: 1px solid #9b6e14;\n    }\n  }\n"]))),u=t(9434),p=t(4186),x=t(6036),m=t(184),h=function(n){var e=n.id,t=n.name,r=n.number,a=(0,u.I0)();return(0,m.jsxs)(d,{children:[(0,m.jsxs)("p",{children:[(0,m.jsxs)("span",{className:"name",children:[t,":"]}),(0,m.jsx)("span",{className:"number",children:r})]}),(0,m.jsx)("button",{type:"button",onClick:function(){return a((0,p.GK)(e))},children:(0,m.jsx)(x.OZs,{size:22})})]})},f=l.ZP.ul(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .empty-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-height: 100vh;\n    height: auto;\n    width: 100%;\n    gap: 5px;\n    padding: 15px 0;\n    color: #b6baff;\n    text-align: center;\n    text-transform: uppercase;\n  }\n"]))),b=t(6351),g=t(2791),j=t(1578),y=function(){var n,e=(0,u.v9)(b.K2),t=(0,u.v9)(b.zK),r=(0,u.I0)();(0,g.useEffect)((function(){r((0,p.yF)())}),[r]);var a=function(){if(null!==e&&void 0!==e&&e.length)return e.filter((function(n){return n.name.toLowerCase().includes(t)}))};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(f,{children:a()?null===(n=a())||void 0===n?void 0:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,m.jsx)(h,{id:e,name:t,number:r},e)})):(0,m.jsxs)("div",{className:"empty-list",children:[(0,m.jsx)("h3",{children:"There is no one here"}),(0,m.jsx)(j.vG$,{size:100})]})})})},v=t(1777),k=l.ZP.form(i||(i=(0,c.Z)(["\n  width: 250px;\n\n  margin: 0 auto;\n  margin-bottom: 15px;\n\n  display: flex;\n  flex-direction: column;\n\n  font-size: 18px;\n\n  label {\n    display: block;\n    text-align: start;\n    margin-bottom: 5px;\n  }\n\n  input {\n    margin: 0 auto;\n\n    border-radius: 5px;\n    border: 1px solid ",";\n    height: 35px;\n    background-color: ",";\n    color: #7f86ff;\n    text-align: center;\n    font-family: inherit;\n    font-size: 20px;\n    padding: 5px 10px;\n\n    :focus,\n    :hover {\n      outline: none;\n    }\n\n    :placeholder-shown {\n      color: ",";\n      text-align: center;\n      font-size: 20px;\n    }\n  }\n"])),v.O.mainBorder,v.O.darkTransparent,v.O.mainBlue),w=(l.ZP.label(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  font-size: 18px;\n\n  input {\n    margin-top: 3px;\n\n    border-radius: 5px;\n    border: 1px solid ",";\n    width: 250px;\n    height: 35px;\n    background-color: ",";\n    color: #7f86ff;\n    text-align: center;\n    font-family: inherit;\n    font-size: 20px;\n    padding: 5px 10px;\n\n    :focus,\n    :hover {\n      outline: none;\n    }\n\n    :placeholder-shown {\n      color: ",";\n      text-align: start;\n      font-size: 20px;\n    }\n  }\n"])),v.O.mainBorder,v.O.darkTransparent,v.O.mainBlue),t(6895)),z=function(){var n=(0,u.I0)(),e=(0,u.v9)(b.zK);return(0,m.jsxs)(k,{children:[(0,m.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,m.jsx)("input",{type:"text",onChange:function(e){return function(e){n((0,w.M)(e.target.value.toLowerCase()))}(e)},value:e,id:"filter"})]})},Z=t(9439),O=function(n,e){return n.name===e.name?(alert("".concat(e.name," is already in contacts.")),n):n.number===e.number?(alert("This number (".concat(e.number,") is already in ").concat(n.name," contact.")),n):void 0},C=t(8434),T=l.ZP.div(s||(s=(0,c.Z)(["\n  margin: 0 auto;\n  width: auto;\n  max-width: 320px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 15px;\n\n  &.opend .creator-btn {\n    /* background-color: ",";\n    color: ","; */\n    background-color: ",";\n    /* color: ","; */\n    border: 1px solid ",";\n  }\n\n  .creator-btn {\n    /* margin-left: auto; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n\n    /* height: 35px; */\n    width: 250px;\n    padding: 5px 10px;\n    outline: none;\n    border-radius: 5px;\n\n    /* border: 1px solid ",";\n    background-color: ","; */\n    border: 1px solid ",";\n    background-color: ",";\n    color: white;\n\n    font-size: 20px;\n    font-weight: 500;\n    font-family: inherit;\n  }\n\n  .creator-wrap {\n    max-height: 0;\n    overflow: hidden;\n\n    transition: max-height 0.25s ease-in-out;\n    transition-timing-function: ease-in-out;\n\n    &.opend {\n      max-height: 308px;\n    }\n  }\n\n  #creator {\n    transform: translateY(-110%);\n    transition-property: transform, margin;\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    &.opend {\n      margin-top: 15px;\n      transform: translateY(0%);\n    }\n  }\n\n  .submit-btn {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n\n    font-size: 18px;\n    font-weight: 500;\n  }\n"])),v.O.darkTransparent,v.O.mainBlue,v.O.darkTransparent,v.O.mainBlue,v.O.darkTransparent,v.O.mainBlue,v.O.mainBlue,v.O.mainBorder,v.O.darkTransparent),B=t(3853),N=t(4651),F=function(){var n=(0,u.I0)(),e=(0,u.v9)(b.K2),t=(0,g.useState)(""),r=(0,Z.Z)(t,2),a=r[0],i=r[1],o=(0,g.useState)(""),s=(0,Z.Z)(o,2),c=s[0],l=s[1],d=(0,g.useState)(!1),x=(0,Z.Z)(d,2),h=x[0],f=x[1];(0,g.useEffect)((function(){document.querySelector("#ctreator-form").classList.toggle("opend")}),[h]);var j=function(){f(!h),document.querySelector("#creator").classList.toggle("opend"),document.querySelector(".creator-wrap").classList.toggle("opend")},y=function(n){switch(n.currentTarget.name){case"name":i(n.currentTarget.value);break;case"number":l(n.currentTarget.value);break;default:return}},v=function(){i(""),l("")};return(0,m.jsxs)(T,{id:"ctreator-form",children:[(0,m.jsx)("button",{className:"creator-btn",type:"button",onClick:j,children:h?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{children:"Hide creator"}),(0,m.jsx)(N.knE,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{children:"Create contact"}),(0,m.jsx)(N.kPb,{})]})}),(0,m.jsx)("div",{className:"creator-wrap",children:(0,m.jsxs)(C.Gq,{onSubmit:function(t){t.preventDefault(),e.filter((function(n){return O(n,{name:a,number:c})})).length||(j(),n((0,p.uK)({name:a,number:c}))),v()},id:"creator",children:[(0,m.jsxs)("label",{children:["Name",(0,m.jsx)("input",{type:"text",name:"name",value:a,onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{children:["Number",(0,m.jsx)("input",{type:"tel",name:"number",value:c,onChange:y,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsxs)("button",{type:"submit",className:"submit-btn",children:["Add contact",(0,m.jsx)(B.zy7,{})]})]})})]})},P=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(C.xD,{children:(0,m.jsxs)(C.kE,{children:[(0,m.jsx)("span",{children:"P"}),(0,m.jsx)("span",{children:"h"}),(0,m.jsx)("span",{children:"o"}),(0,m.jsx)("span",{children:"n"}),(0,m.jsx)("span",{children:"e"}),(0,m.jsx)("span",{children:"b"}),(0,m.jsx)("span",{children:"o"}),(0,m.jsx)("span",{children:"o"}),(0,m.jsx)("span",{children:"k"})]})}),(0,m.jsx)(F,{}),(0,m.jsx)(C.xD,{children:(0,m.jsxs)(C.kE,{children:[(0,m.jsx)("span",{children:"C"}),(0,m.jsx)("span",{children:"o"}),(0,m.jsx)("span",{children:"n"}),(0,m.jsx)("span",{children:"t"}),(0,m.jsx)("span",{children:"a"}),(0,m.jsx)("span",{children:"c"}),(0,m.jsx)("span",{children:"t"}),(0,m.jsx)("span",{children:"s"})]})}),(0,m.jsx)(z,{}),(0,m.jsx)(y,{})]})}}}]);
//# sourceMappingURL=693.c8064f1a.chunk.js.map