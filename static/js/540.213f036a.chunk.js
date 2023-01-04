"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[540],{5540:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,a,o,i,s,c,l=t(9439),d=t(168),p=t(6444),u=t(1777),m=p.ZP.li(r||(r=(0,d.Z)(["\n  padding: 10px 0;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  border-radius: 5px;\n\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  gap: 10px;\n  min-width: 250px;\n\n  .fisrtLetters {\n    min-width: 40px;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    border: 1px solid ",";\n  }\n  .contact-data {\n    display: inline-flex;\n    flex-direction: column;\n    gap: 5px;\n\n    .name {\n      /* font-weight: 400; */\n      font-size: 18px;\n      color: ",";\n    }\n  }\n\n  .additional-menu-btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    /* width: 25px;\n    height: 25px; */\n    padding: 0;\n    margin-left: auto;\n\n    border-radius: 50%;\n    border: none;\n    background-color: ",";\n    background-color: transparent;\n\n    color: ",";\n    color: ",";\n    font-weight: 700;\n    font-family: inherit;\n\n    cursor: pointer;\n\n    transform: translateX(45%);\n\n    svg {\n      pointer-events: none;\n    }\n\n    &:hover,\n    &:focus {\n      /* background-color: #9b6e14; */\n      /* color: #9b6e14; */\n      /* outline: 1px solid #9b6e14; */\n    }\n  }\n"])),u.O.mainBorder,u.O.mainBorder,u.O.mainBorder,u.O.mainColor,u.O.deleteContactBtn,u.O.minorColor,u.O.mainColor),x=t(1213),h=t(9434),g=t(4186),f=t(6036),b=t(6856),j=p.ZP.ul(a||(a=(0,d.Z)(["\n  position: absolute;\n  bottom: 47px;\n  right: 3px;\n  z-index: 1;\n\n  display: flex;\n  flex-direction: column;\n\n  padding: 0 5px;\n  transform: translate(0%, 20%);\n  opacity: 0;\n  pointer-events: none;\n  transition: all 250ms ease-in-out;\n\n  border-radius: 5px;\n  border-bottom-right-radius: 0;\n  border: 1px solid ",";\n  background-color: ",";\n\n  &.opened {\n    pointer-events: all;\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n\n  li {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n\n    min-height: 40px;\n    padding: 10px 5px;\n    background-color: transparent;\n    border: none;\n\n    color: ",";\n    font-size: 18px;\n\n    cursor: pointer;\n\n    :hover,\n    :focus {\n      color: ",";\n    }\n\n    a {\n      width: 100%;\n      height: 100%;\n      text-decoration: none;\n      color: inherit;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\n  li:not(:last-child) {\n    border-bottom: 2px solid ",";\n  }\n\n  .editIcon {\n    color: ",";\n  }\n  .callIcon {\n    color: ",";\n  }\n  .deleteIcon {\n    color: ",";\n  }\n"])),u.O.mainBorder,u.O.modalBg,u.O.mainColor,u.O.white,u.O.mainBorder,u.O.editIcon,u.O.callIcon,u.O.deleteIcon),y=t(184),v=function(n){var e=n.id,t=n.name,r=n.number,a=n.changeName,o=n.changeNumber,i=n.changeId,s=(0,h.I0)();return(0,y.jsxs)(j,{className:"additional-menu",id:t,children:[(0,y.jsxs)("li",{onClick:function(){s((0,g.GK)(e))},children:[(0,y.jsx)("p",{children:"Delete"}),(0,y.jsx)(f.OZs,{className:"deleteIcon",size:25})]}),(0,y.jsx)("li",{children:(0,y.jsxs)("a",{href:"tel:".concat(r),children:[(0,y.jsx)("p",{children:"Call"}),(0,y.jsx)(b.H2b,{className:"callIcon",size:25})]})}),(0,y.jsxs)("li",{onClick:function(){a(t),o(r),i(e),document.querySelector(".edit-contact-modal").classList.add("opened")},children:[(0,y.jsx)("p",{children:"Edit"}),(0,y.jsx)(b.cqP,{className:"editIcon",size:25})]})]})},w=t(8434),N=function(n){var e=n.id,t=n.name,r=n.number,a=n.changeName,o=n.changeNumber,i=n.changeId,s=t.split(" "),c=[];s.forEach((function(n){c.push(n[0])}));var l=c.join("");return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(m,{children:[(0,y.jsx)("div",{className:"fisrtLetters",style:{backgroundColor:"".concat(function(){var n=function(n,e){return n+Math.floor(Math.random()*(e-n+1))},e=n(0,255),t=n(0,255),r=n(0,255);return"rgba(".concat(e,",").concat(t,",").concat(r,", 0.1)")}())},children:l}),(0,y.jsxs)("div",{className:"contact-data",children:[(0,y.jsx)("h3",{className:"name",children:t}),(0,y.jsx)("p",{className:"number",children:r})]}),(0,y.jsx)(w.un,{type:"button",className:"additional-menu-btn","aria-label":t,onClick:function(n){var e=n.target;document.querySelectorAll(".additional-menu").forEach((function(n){e.ariaLabel===n.id?n.classList.toggle("opened"):n.classList.remove("opened")}))},children:(0,y.jsx)(x.pLe,{size:30})}),(0,y.jsx)(v,{id:e,name:t,number:r,changeName:a,changeNumber:o,changeId:i})]})})},k=p.ZP.ul(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n\n  .empty-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-height: 100vh;\n    height: auto;\n    width: 100%;\n    gap: 5px;\n    padding: 15px 0;\n    color: ",";\n    text-align: center;\n    text-transform: uppercase;\n  }\n"])),u.O.mainColor),C=t(6351),O=t(2791),Z=t(1578),z=t(8990),I=p.ZP.div(i||(i=(0,d.Z)(["\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  pointer-events: none;\n  opacity: 0;\n  transition: all 250ms ease-in-out;\n\n  &.opened {\n    pointer-events: all;\n    opacity: 1;\n  }\n\n  form {\n    background-color: ",";\n    padding: 15px;\n    border-radius: 5px;\n    border: 1px solid ",";\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n\n    input {\n      border-radius: 5px;\n      border: 1px solid ",";\n      width: 250px;\n      height: 35px;\n      padding: 5px 10px;\n\n      margin: 0 auto 10px;\n\n      background-color: ",";\n      color: ",";\n      text-align: center;\n      font-family: inherit;\n      font-size: 20px;\n\n      :focus,\n      :hover {\n        outline: none;\n      }\n    }\n\n    .btns-wrapper {\n      display: flex;\n      gap: 20px;\n    }\n    button {\n      width: 65px;\n\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      gap: 5px;\n\n      font-size: 14px;\n      font-weight: 500;\n    }\n  }\n"])),u.O.backdropBg,u.O.modalBg,u.O.mainBorder,u.O.mainBorder,u.O.darkTransparent,u.O.inputText),B=function(n,e,t,r,a,o){var i=function(n){(console.log(n.target),n.target===n.currentTarget)&&document.querySelector(".edit-contact-modal").classList.remove("opened")};return(0,y.jsx)(I,{className:"edit-contact-modal",onClick:i,children:(0,y.jsxs)("form",{className:"edit-contact-form",onSubmit:function(n){n.preventDefault()},children:[(0,y.jsx)("label",{htmlFor:"name-changer",children:"Name"}),(0,y.jsx)("input",{type:"text",name:"name",id:"name-changer",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,y.jsx)("label",{htmlFor:"num-changer",children:"Number"}),(0,y.jsx)("input",{type:"tel",name:"number",id:"num-changer",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0}),(0,y.jsxs)("div",{className:"btns-wrapper",children:[(0,y.jsx)(w.un,{type:"submit",children:"Save"}),(0,y.jsx)(w.un,{type:"button",onClick:i,children:"Cancel"})]})]})})},S=function(){var n,e=(0,O.useState)("Name"),t=(0,l.Z)(e,2),r=t[0],a=t[1],o=(0,O.useState)("Number"),i=(0,l.Z)(o,2),s=i[0],c=i[1],d=(0,O.useState)(""),p=(0,l.Z)(d,2),u=p[0],m=p[1];console.log(r);var x=(0,h.v9)(C.K2),f=(0,h.v9)(C.zK),b=(0,h.I0)();(0,O.useEffect)((function(){b((0,g.yF)())}),[b]);var j=function(){if(null!==x&&void 0!==x&&x.length)return x.filter((function(n){return n.name.toLowerCase().includes(f)}))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{onClick:z.Z,children:j()?null===(n=j())||void 0===n?void 0:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,y.jsx)(N,{id:e,name:t,number:r,changeName:a,changeNumber:c,changeId:m},e)})):(0,y.jsxs)("div",{className:"empty-list",children:[(0,y.jsx)("h3",{children:"There is no one here"}),(0,y.jsx)(Z.vG$,{size:100})]})}),(0,y.jsx)(B,{name:r,number:s,id:u,resetName:a,resetNumber:c,resetId:m})]})},L=p.ZP.form(s||(s=(0,d.Z)(["\n  width: 250px;\n\n  margin: 0 auto;\n  margin-bottom: 15px;\n\n  display: flex;\n  flex-direction: column;\n\n  font-size: 18px;\n\n  label {\n    display: block;\n    text-align: start;\n    margin-bottom: 5px;\n  }\n\n  input {\n    margin: 0 auto;\n\n    border-radius: 5px;\n    border: 1px solid ",";\n    width: 250px;\n    height: 35px;\n    background-color: ",";\n    color: ",";\n    text-align: center;\n    font-family: inherit;\n    font-size: 20px;\n    padding: 5px 10px;\n\n    :focus,\n    :hover {\n      outline: none;\n    }\n\n    :placeholder-shown {\n      color: ",";\n      text-align: center;\n      font-size: 20px;\n    }\n  }\n"])),u.O.mainBorder,u.O.darkTransparent,u.O.inputText,u.O.mainColor),q=t(6895),A=function(){var n=(0,h.I0)(),e=(0,h.v9)(C.zK);return(0,y.jsxs)(L,{onClick:z.Z,children:[(0,y.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,y.jsx)("input",{type:"text",onChange:function(e){return function(e){n((0,q.M)(e.target.value.toLowerCase()))}(e)},value:e,id:"filter"})]})},F=t(5264),T=function(n,e){return n.name===e.name?(F.Notify.warning("".concat(e.name," is already in contacts.")),n):n.number===e.number?(F.Notify.warning("This number (".concat(e.number,") is already in ").concat(n.name," contact.")),n):void 0},P=p.ZP.div(c||(c=(0,d.Z)(["\n  position: fixed;\n  z-index: 1;\n  bottom: 0;\n  right: 0;\n\n  box-shadow: 0px -1px 5px 0px ",";\n  background-color: ",";\n  border-top-right-radius: 15px;\n  border-top-left-radius: 15px;\n\n  padding: 15px 25px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: 70px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  &.opened {\n    gap: 15px;\n  }\n\n  .creator-btn {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n\n    height: 40px;\n    width: 290px;\n    padding: 5px 10px;\n    outline: none;\n    border-radius: 5px;\n\n    border: 1px solid ",";\n    background-color: transparent;\n    color: ",";\n\n    font-size: 20px;\n    font-weight: 500;\n    font-family: inherit;\n  }\n\n  .creator-wrap {\n    max-height: 0;\n    overflow: hidden;\n\n    transition: max-height 0.25s ease-in-out;\n    transition-timing-function: ease-in-out;\n\n    &.opend {\n      max-height: 308px;\n    }\n  }\n\n  #creator {\n    transform: translateY(100%);\n    transition: all 250ms ease-in-out;\n\n    &.opend {\n      margin-bottom: 15px;\n      transform: translateY(0%);\n    }\n  }\n\n  .submit-btn {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n\n    font-size: 18px;\n    font-weight: 500;\n  }\n"])),u.O.darkTransparent,u.O.modalBg,u.O.mainBorder,u.O.mainColor),_=t(3853),K=t(8617),E=function(){var n=(0,h.I0)(),e=(0,h.v9)(C.K2),t=(0,O.useState)(""),r=(0,l.Z)(t,2),a=r[0],o=r[1],i=(0,O.useState)(""),s=(0,l.Z)(i,2),c=s[0],d=s[1],p=(0,O.useState)(!1),u=(0,l.Z)(p,2),m=u[0],x=u[1];(0,O.useEffect)((function(){document.querySelector("#ctreator-form").classList.toggle("opend")}),[m]);var f=function(){x(!m),document.querySelector("#creator").classList.toggle("opend"),document.querySelector(".creator-wrap").classList.toggle("opend")},j=function(n){switch(n.currentTarget.name){case"name":o(n.currentTarget.value);break;case"number":d(n.currentTarget.value);break;default:return}},v=function(){o(""),d("")};return(0,y.jsxs)(P,{id:"ctreator-form",onClick:z.Z,children:[(0,y.jsx)("div",{className:"creator-wrap",children:(0,y.jsxs)(w.Gq,{onSubmit:function(t){t.preventDefault(),e.filter((function(n){return T(n,{name:a,number:c})})).length||(f(),n((0,g.uK)({name:a,number:c}))),v()},id:"creator",children:[(0,y.jsxs)("label",{children:["Name",(0,y.jsx)("input",{type:"text",name:"name",value:a,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)("label",{children:["Number",(0,y.jsx)("input",{type:"tel",name:"number",value:c,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsxs)("button",{type:"submit",className:"submit-btn",children:["Add contact",(0,y.jsx)(_.zy7,{})]})]})}),(0,y.jsx)("button",{className:"creator-btn",type:"button",onClick:f,children:m?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{children:"Hide creator"}),(0,y.jsx)(K.Or3,{})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{children:"Create contact"}),(0,y.jsx)(b.rWj,{})]})})]})},M=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(w.xD,{onClick:z.Z,children:"Contacts"}),(0,y.jsx)(E,{}),(0,y.jsx)(A,{}),(0,y.jsx)(S,{})]})}}}]);
//# sourceMappingURL=540.213f036a.chunk.js.map