(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(29),c=a.n(n),i=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,121)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),r(e),n(e),c(e)}))},o=a(8),l=a.n(o),u=a(18),j=a(3),d=a(24),b=a(7),h=(a(32),a(1));var O=function(){return Object(h.jsx)("div",{className:"bg1 font",children:"Welcome to my MERN Challenge"})};var m=function(){return Object(h.jsx)(O,{})};var x=function(e){var t=e.userData;return Object(h.jsx)("div",{className:"bg1 font",children:t.user?Object(h.jsxs)("h1",{children:["Welcome ",t.user.firstName]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Please Login to continue"}),Object(h.jsx)(d.b,{to:"/users/login",children:"Login"})]})})},p=Object(s.createContext)(null);var f=function(){return Object(h.jsx)(p.Consumer,{children:function(e){return Object(h.jsx)(x,{userData:null===e||void 0===e?void 0:e.userData})}})},v=a(14),g=a.n(v);var N=function(e){return Object(h.jsxs)("div",{className:"error-notice",children:[Object(h.jsx)("span",{children:e.message}),Object(h.jsx)("button",{onClick:e.clearError,children:"X"})]})},C=a(119),k=a(71);var y=function(){var e=Object(s.useState)(),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)(),c=Object(j.a)(n,2),i=c[0],o=c[1],d=Object(s.useState)(),O=Object(j.a)(d,2),m=O[0],x=O[1],f=Object(s.useState)(!1),v=Object(j.a)(f,2),y=v[0],w=v[1],S=Object(s.useContext)(p).setUserData,L=Object(b.f)();Object(s.useEffect)((function(){w(!(!a||!i))}),[a,i]);var D=function(){var e=Object(u.a)(l.a.mark((function e(t){var s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,s={email:a,password:i},e.next=5,g.a.post("http://localhost:5000/users/login",s);case 5:r=e.sent,S(r.data),sessionStorage.setItem("auth-token",r.data.token),L.push("/users",r.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response.data.msg&&x(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"bg1 font",children:[Object(h.jsx)("h2",{children:"Login"}),m&&Object(h.jsx)(N,{message:m,clearError:function(){return x(void 0)}}),Object(h.jsxs)(C.a,{onSubmit:D,children:[Object(h.jsx)(C.a.Label,{children:"Email "}),Object(h.jsx)(C.a.Control,{type:"email",id:"email",onChange:function(e){return r(e.target.value)}}),Object(h.jsx)(C.a.Label,{children:"Password "}),Object(h.jsx)(C.a.Control,{type:"password",id:"password",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)(k.a,{variant:"primary",type:"submit",disabled:!y,children:"Login"})]})]})};var w=function(){var e=Object(s.useState)(),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)(),c=Object(j.a)(n,2),i=c[0],o=c[1],d=Object(s.useState)(),O=Object(j.a)(d,2),m=O[0],x=O[1],f=Object(s.useState)(),v=Object(j.a)(f,2),y=v[0],w=v[1],S=Object(s.useState)(),L=Object(j.a)(S,2),D=L[0],E=L[1],I=Object(s.useState)(),F=Object(j.a)(I,2),G=F[0],P=F[1],A=Object(s.useState)(),U=Object(j.a)(A,2),M=U[0],q=U[1],R=Object(s.useState)(!1),B=Object(j.a)(R,2),Q=B[0],T=B[1],Y=Object(s.useContext)(p).setUserData,H=Object(b.f)();Object(s.useEffect)((function(){T(!!(a&&i&&i===m&&y&&D&&G))}),[a,i,m,y,D,G]);var J=function(){var e=Object(u.a)(l.a.mark((function e(t){var s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,s={email:a,password:i,passwordCheck:m,firstName:y,lastName:D,dni:G},e.next=5,g.a.post("http://localhost:5000/users/register",s);case 5:return e.next=7,g.a.post("http://localhost:5000/users/login",{email:a,password:i});case 7:r=e.sent,Y({token:r.data.token,user:r.data.user}),sessionStorage.setItem("auth-token",r.data.token),H.push("/users"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),e.t0.response.data.msg&&q(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"bg1 font",children:[Object(h.jsx)("h2",{children:"Register"}),M&&Object(h.jsx)(N,{message:M,clearError:function(){return q(void 0)}}),Object(h.jsxs)(C.a,{onSubmit:J,children:[Object(h.jsx)(C.a.Label,{children:"Email "}),Object(h.jsx)(C.a.Control,{type:"email",id:"email",onChange:function(e){return r(e.target.value)}}),Object(h.jsx)(C.a.Label,{children:"Password "}),Object(h.jsx)(C.a.Control,{type:"password",id:"password",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)(C.a.Control,{className:i===m?"form-control":"is-invalid form-control",type:"password",placeholder:"Confirm password",onChange:function(e){return x(e.target.value)}}),Object(h.jsx)(C.a.Label,{children:"First Name "}),Object(h.jsx)(C.a.Control,{type:"text",id:"firstName",onChange:function(e){return w(e.target.value)}}),Object(h.jsx)(C.a.Label,{children:"Last Name "}),Object(h.jsx)(C.a.Control,{type:"text",id:"lastName",onChange:function(e){return E(e.target.value)}}),Object(h.jsx)(C.a.Label,{children:"DNI "}),Object(h.jsx)(C.a.Control,{type:"text",id:"dni",onChange:function(e){return P(e.target.value)}}),Object(h.jsx)(k.a,{variant:"primary",type:"submit",disabled:!Q,children:"Register"})]})]})};var S=function(e){var t=e.submit,a=void 0===t?e.submit:t,s=e.userData,r=void 0===s?e.userData:s,n=e.setFirstName,c=void 0===n?e.setFirstName:n,i=e.setLastName,o=void 0===i?e.setLastName:i,l=e.setDni,u=void 0===l?e.setDni:l;return Object(h.jsx)("div",{className:"align-items-center p-1 bg1 font",children:r.user?Object(h.jsxs)(C.a,{onSubmit:a,children:[Object(h.jsxs)(C.a.Group,{className:"mb-3",children:[Object(h.jsx)(C.a.Label,{children:"First Name"}),Object(h.jsx)(C.a.Control,{type:"text",placeholder:r.user.firstName,onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)(C.a.Group,{className:"mb-3",children:[Object(h.jsx)(C.a.Label,{children:"Last Name"}),Object(h.jsx)(C.a.Control,{type:"text",placeholder:r.user.lastName,onChange:function(e){return o(e.target.value)}})]}),Object(h.jsxs)(C.a.Group,{className:"mb-3",children:[Object(h.jsx)(C.a.Label,{children:"DNI"}),Object(h.jsx)(C.a.Control,{type:"text",placeholder:r.user.dni,onChange:function(e){return u(e.target.value)}})]}),Object(h.jsx)("br",{}),Object(h.jsx)(C.a.Group,{className:"mb-3",children:Object(h.jsx)(k.a,{variant:"info",type:"submit",children:"Save"})})]}):Object(h.jsx)("p",{children:"Loading..."})})};var L=function(){var e=Object(s.useState)(),t=Object(j.a)(e,2),a=(t[0],t[1],Object(s.useContext)(p)),r=a.userData,n=a.setUserData,c=(Object(b.g)(),Object(b.f)(),""),i="",o="",d=0,O=[],m=Object(s.useState)(c),x=Object(j.a)(m,2),f=x[0],v=x[1],N=Object(s.useState)(i),C=Object(j.a)(N,2),k=C[0],y=C[1],w=Object(s.useState)(o),L=Object(j.a)(w,2),D=L[0],E=L[1],I=Object(s.useState)(d),F=Object(j.a)(I,2),G=F[0],P=(F[1],Object(s.useState)(O)),A=Object(j.a)(P,2),U=A[0],M=(A[1],function(){var e=Object(u.a)(l.a.mark((function e(t){var a,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={id:r.user.id,firstName:f,lastName:k,dni:D,childsQ:G,childs:U}){e.next=6;break}alert("No changes were made"),e.next=19;break;case 6:return e.prev=6,s={"x-auth-token":"".concat(r.token)},e.next=10,g.a.post("http://localhost:5000/users/edit",a,{headers:s});case 10:c=e.sent,n({user:c.data}),alert("Your changes were submited"),{user:c.data,token:r.token},e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),alert("Error trying to save changes");case 19:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}());return Object(h.jsx)(S,{submit:M,userData:r,setFirstName:v,setLastName:y,setDni:E})},D=a(120),E=a(117);var I=function(){var e=Object(s.useContext)(p),t=e.userData,a=e.setUserData,r=Object(b.f)();return Object(h.jsx)(D.a.Item,{className:"ms-auto",children:t.user?Object(h.jsxs)(E.a,{title:"Hello ".concat(t.user.firstName),children:[Object(h.jsx)(E.a.Item,{href:"/users/edit",children:"Profile"}),Object(h.jsx)(E.a.Item,{href:"/users/childs",children:"My Childs"}),Object(h.jsx)(E.a.Divider,{}),Object(h.jsx)(E.a.Item,{onClick:function(){a({token:"",user:void 0}),sessionStorage.setItem("auth-token",""),r.push("/")},children:"Logout"})]}):Object(h.jsxs)(E.a,{title:"My Account",menuVariant:"dark",className:"text-dark",children:[Object(h.jsx)(E.a.Item,{href:"/users/login",children:"Login"}),Object(h.jsx)(E.a.Item,{href:"/users/register",children:"Sign Up"})]})})},F=a(118);var G=function(){return Object(h.jsxs)(F.a,{bg:"warning",children:[Object(h.jsx)(F.a.Brand,{href:"/",children:"MERN App "}),Object(h.jsxs)(D.a,{className:"container-fluid",children:[Object(h.jsx)(D.a.Item,{className:"ml-auto",children:Object(h.jsx)(D.a.Link,{href:"/",children:"Home"})}),Object(h.jsx)(D.a.Item,{className:"ml-auto",children:Object(h.jsx)(D.a.Link,{href:"/users",children:"Users"})}),Object(h.jsx)(I,{})]})]})};var P=function(){return Object(h.jsx)(G,{})},A=a(116),U=a(69),M=a(70);var q=function(e){e.userData;var t=e.myChilds,a=e.submit,s=e.addChild,r=e.handleChange,n=e.showAdd,c=e.setShowAdd,i=e.showChilds,o=e.enableEdit,l=e.setEnableEdit;return Object(h.jsxs)("div",{className:"bg1 align-items-center p-1",children:[Object(h.jsx)("div",{className:"p-1 m-3",children:Object(h.jsx)(k.a,{variant:"info",onClick:function(){return c(!n)},children:"Add Child"})}),n?Object(h.jsxs)(A.a,{className:"align-items-center p-1 font",children:[Object(h.jsx)(U.a,{md:!0,children:Object(h.jsxs)(C.a.Group,{className:"mb-3",children:[Object(h.jsx)(C.a.Label,{children:"Email"}),Object(h.jsx)(C.a.Control,{type:"text",name:"email",placeholder:"Email to login",onChange:function(e){return r(e)},required:!0})]})}),Object(h.jsx)(U.a,{md:!0,children:Object(h.jsxs)(C.a.Group,{className:"mb-3",children:[Object(h.jsx)(C.a.Label,{children:"Password"}),Object(h.jsx)(C.a.Control,{type:"text",name:"password",placeholder:"Password to login",onChange:function(e){return r(e)},required:!0})]})}),Object(h.jsx)(U.a,{md:!0,children:Object(h.jsxs)(C.a.Group,{className:"mb-3",children:[Object(h.jsx)(C.a.Label,{children:"First Name"}),Object(h.jsx)(C.a.Control,{type:"text",name:"firstName",placeholder:"Child's Name",onChange:function(e){return r(e)},required:!0})]})}),Object(h.jsx)(U.a,{md:!0,children:Object(h.jsxs)(C.a.Group,{className:"mb-3",children:[Object(h.jsx)(C.a.Label,{children:"Last Name"}),Object(h.jsx)(C.a.Control,{type:"text",name:"lastName",placeholder:"Child's Last Name",onChange:function(e){return r(e)},required:!0})]})}),Object(h.jsx)(U.a,{md:!0,children:Object(h.jsxs)(C.a.Group,{className:"mb-3",children:[Object(h.jsx)(C.a.Label,{children:"DNI"}),Object(h.jsx)(C.a.Control,{type:"text",name:"dni",placeholder:"Child's Dni",onChange:function(e){return r(e)},required:!0})]})}),Object(h.jsx)(U.a,{md:!0,children:Object(h.jsx)(C.a.Group,{className:"p-1 m-3 mb-1",children:Object(h.jsx)(k.a,{variant:"primary",onClick:s,children:"Add"})})})]}):null,Object(h.jsxs)("div",{className:"p-1 m-3 font",children:[i?Object(h.jsx)(k.a,{variant:"info",onClick:function(){return l(!o)},children:"Edit Data"}):null,Object(h.jsx)("h6",{className:"m-2",children:" My childs data:"})]}),Object(h.jsx)("div",{className:"p-1 m-3",children:i?t.map((function(e){return t=e,Object(h.jsxs)(A.a,{className:"align-items-center p-1",children:[Object(h.jsx)(U.a,{sm:!0,className:"my-1",children:Object(h.jsx)(M.a,{className:"mb-3",label:"First Name",children:o?Object(h.jsx)(C.a.Control,{type:"text",placeholder:t.firsName,onChange:function(e){return t.firstName=e.target.value}}):Object(h.jsx)(C.a.Control,{type:"text",value:t.firstName,disabled:!0})})}),Object(h.jsx)(U.a,{sm:!0,className:"my-1",children:Object(h.jsx)(M.a,{className:"mb-3",label:"Last Name",children:o?Object(h.jsx)(C.a.Control,{type:"text",placeholder:t.lastName,onChange:function(e){return t.lastName=e.target.value}}):Object(h.jsx)(C.a.Control,{type:"text",value:t.lastName,disabled:!0})})}),Object(h.jsx)(U.a,{sm:!0,className:"my-1",children:Object(h.jsx)(M.a,{className:"mb-3",label:"DNI",children:o?Object(h.jsx)(C.a.Control,{type:"text",placeholder:t.dni,onChange:function(e){return t.dni=e.target.value}}):Object(h.jsx)(C.a.Control,{type:"text",value:t.dni,disabled:!0})})})]});var t})):Object(h.jsx)("h6",{children:"You haven't loaded childs yet"})}),o?Object(h.jsx)(k.a,{variant:"success",onClick:a,children:"Save Changes"}):null]})};var R=function(){var e=Object(s.useContext)(p),t=e.userData,a=e.setUserData,r=Object(s.useState)([]),n=Object(j.a)(r,2),c=n[0],i=n[1],o=Object(s.useState)(),d=Object(j.a)(o,2),b=d[0],O=d[1],m=Object(s.useState)(),x=Object(j.a)(m,2),f=x[0],v=x[1],N=Object(s.useState)(),C=Object(j.a)(N,2),k=C[0],y=C[1],w=Object(s.useState)(),S=Object(j.a)(w,2),L=S[0],D=S[1],E=Object(s.useState)(),I=Object(j.a)(E,2),F=I[0],G=I[1],P=Object(s.useState)(!1),A=Object(j.a)(P,2),U=A[0],M=A[1],R=Object(s.useState)(!1),B=Object(j.a)(R,2),Q=B[0],T=B[1],Y=Object(s.useState)(!1),H=Object(j.a)(Y,2),J=H[0],W=H[1];Object(s.useEffect)((function(){t.user&&V()}),[t]),Object(s.useEffect)((function(){c.length>0?T(!0):T(!1)}),[c]);var V=function(){var e=Object(u.a)(l.a.mark((function e(){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={userId:t.user.id,token:t.token},e.next=3,g.a.get("http://localhost:5000/users/mychilds",{params:a});case 3:s=e.sent,i(s.data.childs);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(u.a)(l.a.mark((function e(s){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),r={"x-auth-token":"".concat(t.token)},n={id:t.user.id,firstName:t.user.firstName,lastName:t.user.lastName,dni:t.user.dni,childsQ:c.length,childs:c}){e.next=7;break}alert("No changes were made"),e.next=17;break;case 7:return e.prev=7,e.next=10,g.a.post("http://localhost:5000/users/edit",n,{headers:r});case 10:a({token:t.token,user:n}),alert("Your changes were submited"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),alert("Error trying to save changes");case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("http://localhost:5000/users/register",t);case 3:c[c.length]=t,alert("Successfully added children"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Failed to add new child");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={email:b,password:f,passwordCheck:f,firstName:k,lastName:L,dni:F,childsQ:-1},e.next=3,z(a);case 3:return e.next=5,X(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(q,{userData:t,myChilds:c,submit:X,addChild:K,handleChange:function(e){switch(e.target.name){case"email":O(e.target.value);break;case"password":v(e.target.value);break;case"firstName":y(e.target.value);break;case"lastName":D(e.target.value);break;case"dni":G(e.target.value)}},setShowAdd:M,showAdd:U,showChilds:Q,enableEdit:J,setEnableEdit:W})};a(109);var B=function(){var e=Object(s.useState)({token:"",user:void 0}),t=Object(j.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=sessionStorage.getItem("auth-token"))&&(sessionStorage.setItem("auth-token",""),t=""),e.next=4,g.a.post("http://localhost:5000/users/validateToken",null,{headers:{"x-auth-token":t}});case 4:if(!e.sent.data){e.next=10;break}return e.next=8,g.a.get("http://localhost:5000/users/",{headers:{"x-auth-token":t}});case 8:a=e.sent,r({token:t,user:a.data});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsx)(d.a,{children:Object(h.jsxs)(p.Provider,{value:{userData:a,setUserData:r},children:[Object(h.jsx)(P,{}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{exact:!0,path:"/",component:m}),Object(h.jsx)(b.a,{exact:!0,path:"/users",component:f}),Object(h.jsx)(b.a,{exact:!0,path:"/users/login",component:y}),Object(h.jsx)(b.a,{exact:!0,path:"/users/register",component:w}),Object(h.jsx)(b.a,{exact:!0,path:"/users/edit",component:L}),Object(h.jsx)(b.a,{exact:!0,path:"/users/childs",component:R})]})]})})};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),i()},32:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.9aa115be.chunk.js.map