(this.webpackJsonpnewridersapp=this.webpackJsonpnewridersapp||[]).push([[0],{13:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),c=s(6),a=s.n(c),i=s(2),d=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2);return[t[0],t[1]]},o=s(0),l=function(){var e=d(),t=Object(i.a)(e,2),s=t[0],n=t[1],r=document.getElementById("root");return s?(r.classList.add("opacity-25"),Object(o.jsx)("div",{className:"modal fade show d-block",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"true",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(o.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(o.jsxs)("div",{className:"modal-content",children:[Object(o.jsxs)("div",{className:"modal-header",children:[Object(o.jsx)("h5",{className:"modal-title",children:"No hay Riders para esta hora"}),Object(o.jsx)("button",{type:"button",className:"btn-close",onClick:function(){n(!s),r.classList.toggle("opacity-50")}})]}),Object(o.jsx)("div",{className:"modal-body",children:"Lo sentimos, pero alguien acaba de reservar esta hora justo hace unos segundos."})]})})})):null},b=s(3),j=s.n(b),u=s(4),h=s.p+"static/media/reserva.3fb678c1.png",p=function(e){var t=e.buttonToChange,s=e.clicked,n=e.id,r=e.riders;return Object(o.jsx)("td",{children:Object(o.jsx)("button",{id:"btn"+n,type:"button",className:s||0===r?"btn btn-danger":"btn btn-primary",onClick:function(){t(n)},disabled:0===r&&!1===s,children:Object(o.jsx)("img",{src:h,alt:"Reservar",width:"20"})})})},O=function(e){var t=e.id,s=e.hora,r=e.ridersAvailable,c=e.pressed,a=e.setPressed,l=e.getRiders,b=e.record,h=Object(n.useState)(!1),O=Object(i.a)(h,2),x=O[0],m=O[1],f=d(),v=Object(i.a)(f,2),g=v[0],y=v[1];return Object(o.jsxs)("tr",{className:x||0===r?"table-danger":"table-light",id:t,children:[Object(o.jsx)("th",{scope:"row",children:s}),Object(o.jsx)("td",{children:r}),0===r?Object(o.jsx)("td",{children:"No disponible"}):Object(o.jsx)("td",{children:"Disponible"}),Object(o.jsx)(p,{id:t,buttonToChange:function(e){document.getElementById("btn".concat(e)).disabled=!0;l().then(void(0!==b[e-1].Riders?b[e-1].Riders=x?parseInt(b[e-1].Riders)+1:parseInt(b[e-1].Riders)-1:y(!g)));var t=function(){var t=Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.jsonbin.io/v3/b/614ebd7a4a82881d6c550e11",t.next=3,fetch("https://api.jsonbin.io/v3/b/614ebd7a4a82881d6c550e11",{method:"PUT",headers:{"X-Master-Key":"$2b$10$nnuSg9tFuinZo/CM8ap4vep/s6l5iQkZwE2JkRHpQaVMGEHdmEqC2","Content-type":"application/json"},body:JSON.stringify(b)}).then((function(e){return console.log(e)}));case 3:return t.next=5,document.getElementById("btn".concat(e)).disabled=!1;case 5:return t.next=7,a(!c);case 7:return t.next=9,m(!x);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()},clicked:x,ridersAvailable:r},t)]},t)},x=function(e){var t=e.pressed,s=e.setPressed,r=Object(n.useState)([]),c=Object(i.a)(r,2),a=c[0],d=c[1],l=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.jsonbin.io/v3/b/614ebd7a4a82881d6c550e11/latest",e.next=3,fetch("https://api.jsonbin.io/v3/b/614ebd7a4a82881d6c550e11/latest",{headers:{"X-Master-Key":"$2b$10$nnuSg9tFuinZo/CM8ap4vep/s6l5iQkZwE2JkRHpQaVMGEHdmEqC2"}}).then((function(e){return e.json()})).then((function(e){return d(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){l()}),[t]);var b=a.record;return 0===a.length?Object(o.jsxs)("div",{className:"prueba container position-absolute top-50 start-50",children:[Object(o.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(o.jsx)("span",{className:"sr-only w-3"})}),Object(o.jsx)("p",{children:"Loading"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("table",{className:"table table-hover",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Horas"}),Object(o.jsx)("th",{scope:"col",children:"Free Riders"}),Object(o.jsx)("th",{scope:"col",children:"Estado"}),Object(o.jsx)("th",{scope:"col",children:"Reservar"})]})}),Object(o.jsx)("tbody",{children:Object.keys(b).map((function(e){return Object(o.jsx)(O,{id:b[e].id,hora:b[e].Hora,ridersAvailable:b[e].Riders,pressed:t,setPressed:s,record:b,getRiders:l},b[e].id)}))})]}),Object(o.jsxs)("div",{children:["Iconos dise\xf1ados por ",Object(o.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(o.jsx)("a",{href:"https://www.flaticon.es/",title:"Flaticon",children:"www.flaticon.es"})]})]})},m=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),s=t[0],r=t[1];return Object(n.useEffect)((function(){setInterval((function(){r(!s)}),6e4)})),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"text-center mt-5",children:"Horarios disponibles"}),Object(o.jsx)(x,{pressed:s,setPressed:r})]})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("modalOpen"))}},[[13,1,2]]]);
//# sourceMappingURL=main.55bc6842.chunk.js.map