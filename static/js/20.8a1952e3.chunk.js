(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{621:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(623);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){c=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(c)throw a}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},622:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},623:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(622);function c(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},628:function(e,t,r){"use strict";t.a=[{id:0,name:"Martin Neubauer",registered:"2018/01/01",role:"Founder",status:"Active"},{id:1,name:"Dominic K\xf6berl",registered:"2018/01/01",role:"Founder",status:"Pending"}]},682:function(e,t,r){"use strict";r.r(t);var n=r(621),c=r(20),a=r(1),i=r(19),s=r(619),u=r(628),o=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};t.default=function(){var e=Object(i.g)(),t=Object(i.h)().search.match(/page=([0-9]+)/,""),r=Number(t&&t[1]?t[1]:1),l=Object(a.useState)(r),d=Object(n.a)(l,2),f=d[0],b=d[1];return Object(a.useEffect)((function(){r!==f&&b(r)}),[r,f]),Object(c.jsx)(s.wb,{children:Object(c.jsx)(s.u,{xl:6,children:Object(c.jsxs)(s.j,{children:[Object(c.jsxs)(s.n,{children:["Team",Object(c.jsx)("small",{className:"text-muted",children:" (co-worker) "})]}),Object(c.jsxs)(s.k,{children:[Object(c.jsx)(s.y,{items:u.a,fields:[{key:"name",_classes:"font-weight-bold"},"registered","role","status"],hover:!0,striped:!0,itemsPerPage:5,activePage:f,clickableRows:!0,onRowClick:function(t){return e.push("/users/".concat(t.id))},scopedSlots:{status:function(e){return Object(c.jsx)("td",{children:Object(c.jsx)(s.b,{color:o(e.status),children:e.status})})}}}),Object(c.jsx)(s.sb,{activePage:f,onActivePageChange:function(t){r!==t&&e.push("/users?page=".concat(t))},pages:5,doubleArrows:!1,align:"center"})]})]})})})}}}]);
//# sourceMappingURL=20.8a1952e3.chunk.js.map