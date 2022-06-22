(this.webpackJsonpreact_frontend=this.webpackJsonpreact_frontend||[]).push([[0],{146:function(e,t,c){},147:function(e,t,c){},270:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(38),s=c.n(r),i=c(22),o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,298)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},l=(c(144),c(145),c(146),c(2)),j=(c(147),c(39)),u=c.n(j),b=c(27),d=c(58),m=c(5),O=c(7),x=c(8),f=function(){function e(t){Object(O.a)(this,e),this.locationName=t}return Object(x.a)(e,[{key:"error",value:function(e){var t="".concat(p()," ").concat(h.ERROR," [%c").concat(this.locationName,"%c] ").concat(e);console.log(t,"color:#f51e0f","","color:#9997fc","")}},{key:"apiError",value:function(e){if(e.response){var t="".concat(p()," ").concat(h.ERROR," [%c").concat(this.locationName,"%c]");t+=" Request [".concat(e.config.method.toString().toUpperCase(),"] ").concat(e.config.baseURL).concat(e.config.url),t+=" failed with status code ".concat(e.response.status),console.log(t,"color:#f51e0f","","color:#9997fc",""),console.log('Message "'.concat(e.response.data.error,'"'))}else e.request?this.error(e.request):this.error(e.message)}},{key:"info",value:function(e){var t="".concat(p()," ").concat(h.INFO," [%c").concat(this.locationName,"%c] ").concat(e);console.log(t,"color:#02f20a","","color:#9997fc","")}},{key:"trace",value:function(e,t){var c="".concat(p()," ").concat(h.TRACE," [%c").concat(this.locationName,"%c] ").concat(e,"= ");console.log(c,"color:yellow","","color:#9997fc",""),console.log(t)}}]),e}(),h={INFO:"[%cINFO%c]",DEBUG:"[%cDEBUG%c]",ERROR:"[%cERROR%c]",TRACE:"[%cTRACE%c]"};function p(){return(new Date).toLocaleTimeString("en-US",{hour12:!1})}new f("Logger").info("Loaded");var v=c(126),N=c.n(v),R=c(13);new f("Constants").info("Loaded");var E="/auth",y=[{key:"RON",value:"RON"},{key:"EUR",value:"EUR"},{key:"USD",value:"USD"},{key:"GBP",value:"GBP"}],g=[{key:"CURRENT_ACCOUNT",value:"CURRENT_ACCOUNT"},{key:"SAVINGS_ACCOUNT",value:"SAVINGS_ACCOUNT"},{key:"RECURRING_DEPOSIT_ACCOUNT",value:"RECURRING_DEPOSIT_ACCOUNT"},{key:"FIXED_DEPOSIT_ACCOUNT",value:"FIXED_DEPOSIT_ACCOUNT"}],I={ROLE_USER:"ROLE_USER",ROLE_STAFF:"ROLE_STAFF",ROLE_ADMIN:"ROLE_ADMIN"},A={LOGIN:"/login",LOGOUT:"/logout",REGISTER:"/register",DASHBOARD:"/my/dashboard",PROFILE:"/my/profile",PREFERENCES:"/my/preferences",HOME:"/",ADMINPAGE:"/admin",VERIFY_USER:"/verify"},S="Required",w={REQUIRED_STRING:R.e().required(S),REQUIRED_NUMBER:R.b().required(S),REQUIRED_DATE:R.a("Invalid date format").required(S)},C={firstName:w.REQUIRED_STRING,lastName:w.REQUIRED_STRING,email:w.REQUIRED_STRING.email("Ckeck email format."),telephoneNumber:w.REQUIRED_STRING.matches(/^[0-9]{10}$/,"Invalid telephone number."),username:w.REQUIRED_STRING,password:w.REQUIRED_STRING,passConfirm:w.REQUIRED_STRING.oneOf([R.d("password"),null],"Passwords must match"),twoFACode:w.REQUIRED_STRING.matches(/^[0-9]{6}$/,"Invalid verification code"),country:w.REQUIRED_STRING,region:w.REQUIRED_STRING,city:w.REQUIRED_STRING,street:w.REQUIRED_STRING,number:w.REQUIRED_STRING,staircase:w.REQUIRED_STRING,apartment:w.REQUIRED_STRING,cnp:w.REQUIRED_STRING,series:w.REQUIRED_STRING,cnp_number:w.REQUIRED_STRING,expirationDate:w.REQUIRED_DATE,currency:w.REQUIRED_STRING,type:w.REQUIRED_STRING,iban:w.REQUIRED_STRING.length(24,"IBAN invalid"),amount:w.REQUIRED_NUMBER.min(2,"Min 2").max(1e4,"Max 10k")},D={firstName:C.firstName,lastName:C.lastName,email:C.email,telephoneNumber:C.telephoneNumber,username:C.username,password:C.password,passConfirm:C.passConfirm},_={country:C.country,region:C.region,city:C.city,street:C.street,number:C.number,staircase:C.staircase,apartment:C.apartment},U={cnp:C.cnp,series:C.series,cnp_number:C.cnp_number,expirationDate:C.expirationDate},k={currency:C.currency,type:C.type},F={toIBAN:C.iban,fromIBAN:C.iban,currency:C.currency,amount:C.amount};Object.freeze(y),Object.freeze(g),Object.freeze(I),Object.freeze(A),Object.freeze(C),Object.freeze(w),Object.freeze(D),Object.freeze(_),Object.freeze(U),Object.freeze(k),Object.freeze(F);var T=N.a.create({withCredentials:!0,baseURL:"http://26.193.78.172:8000"}),L=new f("Utility Functions script");function G(){return P.apply(this,arguments)}function P(){return(P=Object(d.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.get(E);case 3:return e.next=5,e.sent.data;case 5:return t=e.sent,c=t,e.next=9,T.get(c._links.address.href);case 9:return e.next=11,e.sent.data;case 11:return t=e.sent,c.address=t,e.next=15,T.get(c._links.ci.href);case 15:return e.next=17,e.sent.data;case 17:return t=e.sent,c.ci=t,e.next=21,T.get(c._links.accounts.href);case 21:return e.next=23,e.sent.data;case 23:t=e.sent,c.accounts={_accounts:t._embedded.accountDtoes,_links:t._links},e.next=31;break;case 27:return e.prev=27,e.t0=e.catch(0),L.apiError(e.t0),e.abrupt("return",!1);case 31:return e.abrupt("return",c);case 32:case"end":return e.stop()}}),e,null,[[0,27]])})))).apply(this,arguments)}function B(e,t,c){return Q.apply(this,arguments)}function Q(){return(Q=Object(d.a)(u.a.mark((function e(t,c,n){var a,r,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object.keys(t),L.trace("Keys Found",a),r=Object(b.a)({},c.user),s=!1,a.forEach((function(e){void 0!==r[e]&&(r[e]=t[e],s=!0)})),L.trace("Updated User",r),!s){e.next=9;break}return T.put(c.user._links.self.href,{firstName:r.firstName,lastName:r.lastName,username:r.username,telephoneNumber:r.telephoneNumber}).then((function(e){n({ok:Date.now()}),L.info("User updated")})).catch((function(e){L.apiError(e)})),e.abrupt("return");case 9:i=Object(b.a)({},c.user.address),a.forEach((function(e){void 0!==i[e]&&(i[e]=t[e])})),L.trace("Updated Address",i),T.put(c.user._links.self.href,{address:{id:i.id,country:i.country,region:i.region,city:i.city,street:i.street,number:i.number,staircase:i.staircase,apartment:i.apartment}}).then((function(e){n({ok:Date.now()}),L.info("Address updated")})).catch((function(e){L.apiError(e)}));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){switch(e){case I.ROLE_USER:return 1;case I.ROLE_STAFF:return 2;case I.ROLE_ADMIN:return 3;default:return 0}}L.info("Loaded");var V=c(11),z=c(0),q=Object(V.atom)({}),H=(Object(V.atom)({date:Date.now()}),new f("Context Provider"));function Y(e){var t=e.children,c=Object(V.useAtom)(q),a=Object(l.a)(c,2),r=a[0],s=a[1],i=Object(m.f)();return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:!1===(t=e.sent)?s(c={isLoggedIn:!1}):(c={isLoggedIn:!0,user:Object(b.a)({},t)},s(c)),H.trace("Context set with value",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,r.ok]),Object(n.useEffect)((function(){H.info("Mounted")}),[]),Object(n.useEffect)((function(){H.info("Updated")}),[r.ok]),H.info("Rendered"),null!==r&&void 0===r.ok&&0!==Object.keys(r).length?Object(z.jsxs)(z.Fragment,{children:[" ",t," "]}):Object(z.jsx)(z.Fragment,{})}function J(e){var t=e.path,c=e.children;return Object(z.jsx)("li",{children:Object(z.jsx)(i.c,{to:t,children:c})})}var W=c.p+"static/media/logo.ede7fbb3.png",X=new f("Header Component");function $(){var e=Object(V.useAtom)(q),t=Object(l.a)(e,1)[0],c=[];if(void 0!==t.isLoggedIn&&t.isLoggedIn){if(c.push(Object(z.jsx)(J,{path:A.DASHBOARD,children:"Dashboard"},A.DASHBOARD)),c.push(Object(z.jsx)(J,{path:A.PROFILE,children:"Profile"},A.PROFILE)),c.push(Object(z.jsx)(J,{path:A.LOGOUT,children:"Logout"},A.LOGOUT)),t.user.role===I.ROLE_ADMIN)c.push(Object(z.jsx)(J,{path:A.ADMINPAGE,children:"Admin Page"},A.ADMINPAGE))}else c.push(Object(z.jsx)(J,{path:A.LOGIN,children:"Login"},A.LOGIN)),c.push(Object(z.jsx)(J,{path:A.REGISTER,children:"Register"},A.REGISTER));return Object(n.useEffect)((function(){X.info("Mounted")}),[]),X.info("Rendered"),Object(z.jsx)("header",{children:Object(z.jsx)("nav",{children:Object(z.jsxs)("div",{className:"nav-wrapper",children:[Object(z.jsx)(i.c,{to:A.HOME,className:"logo",children:Object(z.jsx)("img",{src:W,alt:"Logo"})}),Object(z.jsx)("ul",{className:"right",children:c})]})})})}new f("Footer Component");function K(){return Object(n.useEffect)((function(){}),[]),Object(z.jsx)("footer",{className:"page-footer",children:Object(z.jsx)("div",{className:"container",children:Object(z.jsx)("div",{className:"row",children:Object(z.jsx)("p",{children:" Acesta este un footer "})})})})}var Z=new f("Home Page");function ee(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)({}),s=Object(l.a)(r,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){T.get("https://baconipsum.com/api/?type=all-meat&paras=2",{withCredentials:!1}).then((function(e){var t=e.data;a(t)})).catch((function(e){Z.apiError(e)})),T.get("/api/v2/users").then((function(e){var t=e.data;o(Object(b.a)({},t))})).catch((function(e){Z.apiError(e)}))}),[]),Object(n.useEffect)((function(){Z.info("Mounted")}),[]),Z.info("Rendered"),Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)("h4",{children:"Home"}),Object(z.jsx)("p",{children:c}),Object(z.jsx)("pre",{children:JSON.stringify(i,null,2)})]})}var te=c(9),ce=c(296);function ne(e){var t=e.name,c=e.text,n=void 0===c?null:c,a=e.type,r=void 0===a?"text":a;return Object(z.jsxs)("div",{className:"input-field",children:[n?Object(z.jsx)("label",{className:"active",htmlFor:t,children:n}):Object(z.jsx)(z.Fragment,{}),Object(z.jsx)(te.b,{name:t,type:r,autoComplete:"off"}),Object(z.jsx)(te.a,{name:t})]})}var ae=new f("Login Page"),re={username:"stefan_admin",password:"qwertyuiop1234",twoFACode:""};function se(){var e=Object(V.useAtom)(q),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),s=Object(l.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)("Next"),u=Object(l.a)(j,2),b=u[0],d=u[1],O=Object(n.useRef)(R.c({username:C.username,password:C.password})),x=c.isLoggedIn?Object(z.jsx)(m.a,{to:A.DASHBOARD}):Object(z.jsx)(z.Fragment,{}),f=function(e){i<1&&function(){var e=i,t=1===(e+=1)?"Log in":"Next";O.current=R.c({username:C.username,password:C.password,twoFACode:C.twoFACode}),o(e),d(t)}(),T.post("/auth/login",{username:e.username,password:e.password,twoFACode:e.twoFACode}).then((function(e){1===i&&a({ok:Date.now()}),ae.info(e.data)})).catch((function(e){ae.error(e)}))};return Object(z.jsxs)("div",{className:"container",children:[x,Object(z.jsx)(te.d,{initialValues:re,validationSchema:O.current,onSubmit:function(e){return f(e)},children:Object(z.jsxs)(te.c,{children:[0===i?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ne,{name:"username",text:"Username"}),Object(z.jsx)(ne,{name:"password",text:"Password",type:"password"})]}):Object(z.jsx)(ne,{name:"twoFACode",text:"Verification Code"}),Object(z.jsxs)("div",{className:"container",children:[0!==i?Object(z.jsx)(ce.a,{className:"btn waves-effect waves-light",onClick:function(){var e=i,t=1===(e=e>0?e-1:0)?"Log in":"Next";O.current=R.c({username:C.username,password:C.password}),o(e),d(t)},children:" Back "}):Object(z.jsx)(z.Fragment,{}),Object(z.jsx)(ce.a,{type:"submit",className:"btn waves-effect waves-light",children:b})]})]})})]})}function ie(){return Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)("p",{className:"red-text",children:"User Details"}),Object(z.jsx)(ne,{name:"firstName",text:"First Name"}),Object(z.jsx)(ne,{name:"lastName",text:"Last Name"}),Object(z.jsx)(ne,{name:"email",text:"Email"}),Object(z.jsx)(ne,{name:"telephoneNumber",text:"Telephone"}),Object(z.jsx)(ne,{name:"username",text:"Username"}),Object(z.jsx)(ne,{name:"password",text:"Password",type:"password"}),Object(z.jsx)(ne,{name:"passConfirm",text:"Confirm Password",type:"password"})]})}function oe(){return Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)("p",{className:"red-text",children:"Address"}),Object(z.jsx)(ne,{name:"country",text:"Country"}),Object(z.jsx)(ne,{name:"region",text:"Region"}),Object(z.jsx)(ne,{name:"city",text:"City"}),Object(z.jsx)(ne,{name:"street",text:"Street"}),Object(z.jsx)(ne,{name:"number",text:"Number"}),Object(z.jsx)(ne,{name:"staircase",text:"Staircase"}),Object(z.jsx)(ne,{name:"apartment",text:"Apartment"})]})}function le(){return Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)("p",{className:"red-text",children:"Identity Card"}),Object(z.jsx)(ne,{name:"cnp",text:"CNP"}),Object(z.jsx)(ne,{name:"series",text:"Series"}),Object(z.jsx)(ne,{name:"number",text:"Number"}),Object(z.jsx)(ne,{name:"expirationDate",text:"Expiration Date"})]})}function je(e){var t=e.name,c=e.options,n=e.text,a=void 0===n?null:n;return Object(z.jsxs)("div",{className:"input-field",children:[a?Object(z.jsx)("label",{className:"active",htmlFor:t,children:a}):Object(z.jsx)(z.Fragment,{}),Object(z.jsx)(te.b,{as:"select",name:t,children:c.map((function(e){return Object(z.jsx)("option",{value:e.value,children:e.key},e.key)}))}),Object(z.jsx)(te.a,{name:t})]})}function ue(){return Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)("p",{className:"red-text",children:"What type of account do you want to have? (You will be able to open multiple accounts later)"}),Object(z.jsx)(je,{name:"currency",options:y}),Object(z.jsx)(je,{name:"type",options:g})]})}var be=new f("Register Page"),de=[D,_,U,k],me={firstName:"Popescu",lastName:"Popescu",username:"_popescu",password:"asdasdasdasd",passConfirm:"asdasdasdasd",email:"asd@asd.dfasd",telephoneNumber:"1231231231",country:"Asd",region:"Asd",city:"Asd",street:"asd",number:"asd",staircase:"asd",apartment:"asd",cnp:"asd",series:"asas",cnp_number:"asdasd",expirationDate:"09/06/2026",currency:"RON",type:"CURRENT_ACCOUNT"};function Oe(){var e,t=Object(n.useState)(0),c=Object(l.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)("Next"),i=Object(l.a)(s,2),o=i[0],j=i[1],u=Object(n.useRef)(R.c(Object(b.a)({},de[a])));switch(a){case 0:e=Object(z.jsx)(ie,{});break;case 1:e=Object(z.jsx)(oe,{});break;case 2:e=Object(z.jsx)(le,{});break;case 3:e=Object(z.jsx)(ue,{})}return Object(z.jsx)(te.d,{initialValues:me,validationSchema:u.current,onSubmit:function(e){a<3?function(){var e=a,t=3===(e+=1)?"Sumbit":"Next";u.current=R.c(Object(b.a)({},de[e])),r(e),j(t)}():(be.trace("Form data",e),T.post("/api/v2/users",{firstName:e.firstName,lastName:e.lastName,username:e.username,password:e.password,email:e.email,telephoneNumber:e.telephoneNumber,address:{country:e.country,region:e.region,city:e.city,street:e.street,number:e.number,staircase:e.staircase,apartment:e.apartment},ci:{cnp:e.country,series:e.series,number:e.cnp_number,expirationDate:e.expirationDate},accounts:[{currency:e.currency,type:e.type}]}).then((function(e){be.trace("Response from register",e.data)})).catch((function(e){be.error(e)})))},children:Object(z.jsxs)(te.c,{children:[e,Object(z.jsxs)("div",{className:"container",children:[0!==a?Object(z.jsx)(ce.a,{className:"btn waves-effect waves-light",onClick:function(){var e=a,t=3===(e=e>0?e-1:0)?"Sumbit":"Next";u.current=R.c(Object(b.a)({},de[e])),r(e),j(t)},children:" Back "}):Object(z.jsx)(z.Fragment,{}),Object(z.jsx)(ce.a,{type:"submit",className:"btn waves-effect waves-light",children:o})]})]})})}function xe(){return Object(z.jsx)("h1",{children:"Error"})}var fe=new f("Logout Page");function he(){var e=Object(V.useAtom)(q),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),s=Object(l.a)(r,2),o=s[0],j=s[1];return Object(n.useEffect)((function(){c.isLoggedIn?(T.get("/auth/logout").then((function(e){a({isLoggedIn:!1}),fe.info(e.data)})).catch((function(e){fe.apiError(e)})),j(Object(z.jsx)("div",{children:" You were succefully logged out. "}))):j(Object(z.jsxs)("div",{children:[" You don't have an account, make one",Object(z.jsx)(i.b,{to:A.REGISTER,children:"here"})]}))}),[]),Object(z.jsx)("div",{className:"container",children:o})}var pe=c(6),ve=c(295);function Ne(e){var t=e.text,c=void 0===t?"Are you sure?":t,n=e.formReff,a=e.open,r=e.close,s=e.handleEvent,i=function(e){e?void 0!==n?n.submitForm():(s(),r()):r()};return Object(z.jsx)(ve.a,{hideBackdrop:!0,open:a,onClose:function(){return i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(z.jsxs)("div",{className:"container modal-form",children:[Object(z.jsx)("h4",{className:"modal-modal-title center",children:c}),Object(z.jsxs)("div",{className:"modal-modal-description center",children:[Object(z.jsx)(ce.a,{variant:"outlined",onClick:function(){return i(!0)},children:"Yes"}),Object(z.jsx)(ce.a,{variant:"outlined",onClick:function(){return i(!1)},children:"No"})]})]})})}new f("Profile Item Form");function Re(e){var t=e.value,c=e.name,a=e.label,r=e.open,s=e.close,i=Object(V.useAtom)(q),o=Object(l.a)(i,2),j=o[0],u=o[1],b=Object(n.useState)(!1),d=Object(l.a)(b,2),m=d[0],O=d[1],x=Object(n.useRef)(null),f=Object(pe.a)({},c,t),h=function(){return Object.values(x.current.values)[0]!==Object.values(f)[0]&&(!1!==m||(O(!0),!1))};return Object(z.jsx)(ve.a,{open:r,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(z.jsxs)("div",{className:"container modal-form",children:[Object(z.jsxs)("div",{id:"modal-modal-description",children:[Object(z.jsxs)("p",{children:[" ",a," "]}),Object(z.jsx)(te.d,{initialValues:f,innerRef:x,validationSchema:R.c(Object(pe.a)({},c,w.REQUIRED_STRING)),onSubmit:function(e){h()&&(O(!1),B(e,j,u),s())},children:Object(z.jsxs)(te.c,{children:[Object(z.jsx)(ne,{name:c}),Object(z.jsx)(ce.a,{onClick:h,variant:"contained",children:"Apply"}),m?Object(z.jsx)(Ne,{formReff:x.current,open:m,close:function(){O(!1)}}):Object(z.jsx)(z.Fragment,{})]})})]}),Object(z.jsx)(ce.a,{className:"close-btn",onClick:s,children:Object(z.jsx)("i",{className:"material-icons",children:"close"})})]})})}var Ee=new f("Profile Item");function ye(e){var t=e.label,c=e.value,a=e.isEditable,r=void 0===a||a,s=e.name,i=Object(n.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(z.jsxs)("div",{className:"card-panel hoverable row",children:[Object(z.jsxs)("div",{className:"col s6",children:[Object(z.jsx)("p",{children:t}),Object(z.jsx)("div",{children:c})]}),r?Object(z.jsxs)("div",{className:"col s6",children:[Object(z.jsx)(ce.a,{variant:"contained",onClick:function(){return u(!0)},children:"Edit"}),Object(z.jsx)(Re,{open:j,close:function(){Ee.info("Modal close"),u(!1)},value:c,name:s,label:t})]}):Object(z.jsx)(z.Fragment,{})]})}var ge=new f("Require Auth");function Ie(e){var t=e.children,c=e.roleRequired,a=Object(V.useAtom)(q),r=Object(l.a)(a,1)[0],s=Object(m.f)(),i=Object(n.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1],b=Object(n.useRef)(!1);return Object(n.useEffect)((function(){var e,t;r.isLoggedIn&&(e=r.user.role,void 0===(t=c)&&(t=I.ROLE_USER),M(e)>=M(t))?(ge.info("Authorized"),u(!0)):(ge.info("Unauthorized"),u(!1)),b.current=!0}),[s]),Object(n.useEffect)((function(){ge.info("Mounted")}),[]),ge.info("Rendered"),j?Object(z.jsx)(z.Fragment,{children:t}):Object(z.jsx)(z.Fragment,{})}new f("User Modal Form");var Ae=R.c({firstName:C.firstName,lastName:C.lastName,username:C.username,telephoneNumber:C.telephoneNumber});function Se(e){var t=e.open,c=e.close,a=Object(V.useAtom)(q),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(!1),j=Object(l.a)(o,2),u=j[0],b=j[1],d=Object(n.useRef)(null),m={firstName:s.user.firstName,lastName:s.user.lastName,username:s.user.username,telephoneNumber:s.user.telephoneNumber},O=function(){for(var e=!1,t=0;t<Object.values(d.current.values).length;t++)if(Object.values(d.current.values)[t]!==Object.values(m)[t]){e=!0;break}return!!e&&(!1!==u||(b(!0),!1))};return Object(z.jsx)(ve.a,{open:t,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(z.jsxs)("div",{className:"container modal-form",children:[Object(z.jsxs)("div",{id:"modal-modal-description",children:[Object(z.jsx)("p",{children:" Edit User "}),Object(z.jsx)(te.d,{initialValues:m,innerRef:d,validationSchema:Ae,onSubmit:function(e){O()&&(b(!1),B(e,s,i),c())},children:Object(z.jsxs)(te.c,{children:[Object(z.jsx)(ne,{name:"firstName",text:"First Name"}),Object(z.jsx)(ne,{name:"lastName",text:"Last Name"}),Object(z.jsx)(ne,{name:"username",text:"Username"}),Object(z.jsx)(ne,{name:"telephoneNumber",text:"TelephoneNumber"}),Object(z.jsx)(ce.a,{onClick:O,variant:"contained",children:"Apply"}),u?Object(z.jsx)(Ne,{formReff:d.current,open:u,close:function(){b(!1)}}):Object(z.jsx)(z.Fragment,{})]})})]}),Object(z.jsx)(ce.a,{className:"close-btn",onClick:c,children:Object(z.jsx)("i",{className:"material-icons",children:"close"})})]})})}new f("Address Modal Form");var we=R.c({country:C.country,region:C.region,city:C.city,street:C.street,number:C.number,staircase:C.staircase,apartment:C.apartment});function Ce(e){var t=e.open,c=e.close,a=Object(V.useAtom)(q),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(!1),j=Object(l.a)(o,2),u=j[0],b=j[1],d=Object(n.useRef)(null),m={country:s.user.address.country,region:s.user.address.region,city:s.user.address.city,street:s.user.address.street,number:s.user.address.number,staircase:s.user.address.staircase,apartment:s.user.address.apartment},O=function(){for(var e=!1,t=0;t<Object.values(d.current.values).length;t++)if(Object.values(d.current.values)[t]!==Object.values(m)[t]){e=!0;break}return!!e&&(!1!==u||(b(!0),!1))};return Object(z.jsx)(ve.a,{open:t,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(z.jsxs)("div",{className:"container modal-form",children:[Object(z.jsxs)("div",{id:"modal-modal-description",children:[Object(z.jsx)("p",{children:" Edit Address "}),Object(z.jsx)(te.d,{initialValues:m,innerRef:d,validationSchema:we,onSubmit:function(e){O()&&(b(!1),B(e,s,i),c())},children:Object(z.jsxs)(te.c,{children:[Object(z.jsx)(ne,{name:"country",text:"Country"}),Object(z.jsx)(ne,{name:"region",text:"Region"}),Object(z.jsx)(ne,{name:"city",text:"City"}),Object(z.jsx)(ne,{name:"street",text:"Street"}),Object(z.jsx)(ne,{name:"number",text:"Number"}),Object(z.jsx)(ne,{name:"staircase",text:"Staircase"}),Object(z.jsx)(ne,{name:"apartment",text:"Apartment"}),Object(z.jsx)(ce.a,{onClick:O,variant:"contained",children:"Apply"}),u?Object(z.jsx)(Ne,{formReff:d.current,open:u,close:function(){b(!1)}}):Object(z.jsx)(z.Fragment,{})]})})]}),Object(z.jsx)(ce.a,{className:"close-btn",onClick:c,children:Object(z.jsx)("i",{className:"material-icons",children:"close"})})]})})}new f("Address Modal Form");var De=R.c({currency:C.currency,type:C.type}),_e={currency:"RON",type:"CURRENT_ACCOUNT"};function Ue(e){var t=e.open,c=e.close,a=Object(V.useAtom)(q),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(!1),j=Object(l.a)(o,2),u=j[0],b=j[1],d=Object(n.useRef)(null),m=function(){return!1!==u||(b(!0),!1)};return Object(z.jsx)(ve.a,{open:t,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(z.jsxs)("div",{className:"container modal-form",children:[Object(z.jsxs)("div",{id:"modal-modal-description",children:[Object(z.jsx)("p",{children:" Add account "}),Object(z.jsx)(te.d,{initialValues:_e,innerRef:d,validationSchema:De,onSubmit:function(e){m()&&(b(!1),function(e,t,c){L.trace("New Account Values",e),T.post(t.user.accounts._links.self.href,{currency:e.currency,type:e.type}).then((function(e){L.info(e.data),c({ok:Date.now()})})).catch((function(e){L.apiError(e)}))}(e,s,i),c())},children:Object(z.jsxs)(te.c,{children:[Object(z.jsx)(je,{name:"currency",options:y}),Object(z.jsx)(je,{name:"type",options:g}),Object(z.jsx)(ce.a,{onClick:m,variant:"contained",children:"Add"}),u?Object(z.jsx)(Ne,{formReff:d.current,open:u,close:function(){b(!1)}}):Object(z.jsx)(z.Fragment,{})]})})]}),Object(z.jsx)(ce.a,{className:"close-btn",onClick:c,children:Object(z.jsx)("i",{className:"material-icons",children:"close"})})]})})}function ke(e){var t=e.account,c=e.showDeleteButton,a=e.handleAccountDelete,r=Object(n.useState)(!1),s=Object(l.a)(r,2),i=s[0],o=s[1];return Object(z.jsxs)("div",{className:"card-panel",children:[Object(z.jsxs)("p",{children:[" ","Account ".concat(t.id)," "]}),Object(z.jsx)(ye,{label:"IBAN",value:t.iban,isEditable:!1}),Object(z.jsx)(ye,{label:"Card Number",value:t.cardNumber,isEditable:!1}),Object(z.jsx)(ye,{label:"Currency",value:t.currency,isEditable:!1}),Object(z.jsx)(ye,{label:"Type",value:t.type,isEditable:!1}),Object(z.jsx)(ye,{label:"CVV",value:t.cvv,isEditable:!1}),Object(z.jsx)(ye,{label:"Balance",value:t.balance,isEditable:!1}),Object(z.jsx)(ye,{label:"Expires in",value:t.expirationDate,isEditable:!1}),c?Object(z.jsxs)("div",{children:[Object(z.jsx)(ce.a,{variant:"outlined",onClick:function(){return o(!0)},children:"Delete Account"}),Object(z.jsx)(Ne,{handleEvent:function(){return a(t.id)},text:"You want to delete Account ".concat(t.id,"?"),open:i,close:function(){return o(!1)}})]}):Object(z.jsx)(z.Fragment,{})]})}new f("Profile Page");function Fe(){var e,t=Object(V.useAtom)(q),c=Object(l.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),i=Object(l.a)(s,2),o=i[0],j=i[1],u=Object(n.useState)(!1),b=Object(l.a)(u,2),d=b[0],m=b[1],O=Object(n.useState)(!1),x=Object(l.a)(O,2),f=x[0],h=x[1],p=function(e){!function(e,t,c){var n;t.user.accounts._accounts.forEach((function(t){t.id===e&&(n=t._links.self.href)})),T.delete(n).then((function(e){L.info(e.data),c({ok:Date.now()})})).catch((function(e){L.apiError(e)}))}(e,a,r)},v=a.user.accounts._accounts.length>1;return e=a.user.accounts._accounts.map((function(e){return Object(z.jsx)(ke,{account:e,handleAccountDelete:p,showDeleteButton:v},e.id)})),Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)("h4",{children:"My Profile"}),Object(z.jsxs)("div",{className:"card-panel",children:[Object(z.jsx)(ye,{label:"First Name",value:a.user.firstName,name:"firstName"}),Object(z.jsx)(ye,{label:"Last Name",value:a.user.lastName,name:"lastName"}),Object(z.jsx)(ye,{label:"Username",value:a.user.username,name:"username"}),Object(z.jsx)(ye,{label:"Email",value:a.user.email,isEditable:!1}),Object(z.jsx)(ye,{label:"Telephone Number",value:a.user.telephoneNumber,name:"telephoneNumber"}),Object(z.jsxs)("div",{children:[Object(z.jsx)(ce.a,{variant:"outlined",onClick:function(){return j(!0)},children:"Edit User"}),Object(z.jsx)(Se,{open:o,close:function(){return j(!1)}})]})]}),Object(z.jsxs)("div",{className:"card-panel",children:[Object(z.jsx)(ye,{label:"Country",value:a.user.address.country,name:"country"}),Object(z.jsx)(ye,{label:"Region",value:a.user.address.region,name:"region"}),Object(z.jsx)(ye,{label:"City",value:a.user.address.city,name:"city"}),Object(z.jsx)(ye,{label:"Street",value:a.user.address.street,name:"street"}),Object(z.jsx)(ye,{label:"Number",value:a.user.address.number,name:"number"}),Object(z.jsx)(ye,{label:"Staircase",value:a.user.address.staircase,name:"staircase"}),Object(z.jsx)(ye,{label:"Apartment",value:a.user.address.apartment,name:"apartment"}),Object(z.jsxs)("div",{children:[Object(z.jsx)(ce.a,{variant:"outlined",onClick:function(){return m(!0)},children:"Edit Address"}),Object(z.jsx)(Ce,{open:d,close:function(){return m(!1)}})]})]}),Object(z.jsxs)("div",{className:"card-panel",children:[Object(z.jsx)(ye,{label:"CNP",value:a.user.ci.cnp,isEditable:!1}),Object(z.jsx)(ye,{label:"Series",value:a.user.ci.series,isEditable:!1}),Object(z.jsx)(ye,{label:"Number",value:a.user.ci.number,isEditable:!1}),Object(z.jsx)(ye,{label:"Expires in",value:a.user.ci.expirationDate,isEditable:!1})]}),Object(z.jsxs)("div",{className:"card-panel",children:[e,Object(z.jsxs)("div",{children:[Object(z.jsx)(ce.a,{variant:"outlined",onClick:function(){return h(!0)},children:"Add Account"}),Object(z.jsx)(Ue,{open:f,close:function(){return h(!1)}})]})]})]})}function Te(){return Object(z.jsx)(Ie,{children:Object(z.jsx)(Fe,{})})}var Le=new f("Payment Form");function Ge(e){var t=e.open,c=e.close,a=e.account,r=Object(V.useAtom)(q),s=Object(l.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(0),u=Object(l.a)(j,2),d=u[0],m=u[1],O=Object(n.useRef)(null),x=Object(n.useState)("Next"),f=Object(l.a)(x,2),h=f[0],p=f[1],v=[];i.user.accounts._accounts.forEach((function(e){v.push({key:"".concat(e.iban," ").concat(e.type," ").concat(e.balance," ").concat(e.currency),value:e.iban})}));var N={toIBAN:"",fromIBAN:a.iban,currency:a.currency,amount:""};return Object(z.jsx)(ve.a,{open:t,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(z.jsxs)("div",{className:"container modal-form",children:[Object(z.jsx)("div",{id:"modal-modal-description",children:Object(z.jsx)(te.d,{initialValues:N,innerRef:O,validationSchema:R.c(Object(b.a)({},F)),onSubmit:function(e){O.current.values.toIBAN!==O.current.values.fromIBAN&&(d<1?function(){var e=d,t=1===(e+=1)?"Confirm":"Next";m(e),p(t)}():(T.post("/api/v2/transactions",{toAccountIBAN:e.toIBAN,fromAccountIBAN:e.fromIBAN,currency:e.currency,amount:e.amount}).then((function(e){Le.info(e.data),o({ok:Date.now()})})).catch((function(e){Le.apiError(e)})),c()))},children:Object(z.jsxs)(te.c,{children:[0===d?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("p",{children:" New Payment "}),Object(z.jsx)(je,{name:"fromIBAN",options:v,text:"From Account"}),Object(z.jsx)(ne,{name:"toIBAN",text:"To Account"}),Object(z.jsx)(je,{name:"currency",options:y}),Object(z.jsx)(ne,{name:"amount",text:"Amount"})]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("p",{children:" Confirm Payment "}),Object(z.jsxs)("p",{children:[" ","You are going to transfer ".concat(O.current.values.amount," ").concat(O.current.values.currency," to this account")," "]}),Object(z.jsxs)("p",{children:[" ","".concat(O.current.values.toIBAN)," "]}),Object(z.jsx)("p",{children:" from this account "}),Object(z.jsxs)("p",{children:[" ","".concat(O.current.values.fromIBAN)," "]})]}),Object(z.jsxs)("div",{className:"submit-buttons-container",children:[0!==d?Object(z.jsx)(ce.a,{className:"btn waves-effect waves-light first",onClick:function(){var e=d,t=1===(e=e>0?e-1:0)?"Sumbit":"Next";m(e),p(t)},children:" Back "}):Object(z.jsx)(z.Fragment,{}),Object(z.jsx)(ce.a,{type:"submit",className:"btn waves-effect waves-light second",children:h})]})]})})}),Object(z.jsx)(ce.a,{className:"close-btn",onClick:c,children:Object(z.jsx)("i",{className:"material-icons",children:"close"})})]})})}function Pe(e){var t=e.show,c=e.iban;return t?Object(z.jsx)("div",{children:c}):Object(z.jsx)(z.Fragment,{})}new f("Account Container");function Be(e){var t=e.account,c=Object(n.useState)(!1),a=Object(l.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{className:"card-panel",children:[Object(z.jsxs)("div",{className:"card-content row",children:[Object(z.jsx)("span",{className:"card-title col s8",children:t.type}),Object(z.jsx)("div",{className:"acc-balance col s4",children:Object(z.jsx)("span",{children:" ".concat(t.balance," ").concat(t.currency)})}),Object(z.jsx)("span",{className:"col",children:t.iban})]}),Object(z.jsxs)("div",{className:"card-action",children:[Object(z.jsx)(ce.a,{onClick:function(){return u(!j)},children:" Transaction history "}),Object(z.jsx)(ce.a,{onClick:function(){return s(!0)},children:" New Payment "}),Object(z.jsx)(Ge,{open:r,close:function(){return s(!1)},account:t})]})]}),Object(z.jsx)(Pe,{show:j,iban:t.iban})]})}new f("Dashboard");function Qe(){var e,t=Object(V.useAtom)(q);return e=Object(l.a)(t,1)[0].user.accounts._accounts.map((function(e){return Object(z.jsx)(Be,{account:e},e.id)})),Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)("h4",{children:"Dashboard"}),Object(z.jsx)("div",{children:e})]})}function Me(){return Object(z.jsx)(Ie,{children:Object(z.jsx)(Qe,{})})}function Ve(){return Object(z.jsx)(Ie,{roleRequired:I.ROLE_ADMIN,children:Object(z.jsx)("div",{className:"container",children:Object(z.jsx)("h4",{children:"Admin Page"})})})}var ze=new f("Verify User");function qe(){var e=Object(i.d)(),t=Object(l.a)(e,1)[0],c=Object(n.useState)("Waiting for verification"),a=Object(l.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){T.post("/auth/enable",t.entries().next().value[0],{headers:{"Content-Type":"text/plain"}}).then((function(e){ze.info(e.data),s("Verification complete")})).catch((function(e){ze.apiError(e),s("Error")}))}),[]),ze.trace("Query value",t.entries().next().value[0]),Object(z.jsxs)("div",{className:"wrapper",children:[Object(z.jsx)("span",{className:"large-text",children:r}),"Error"!==r?Object(z.jsx)("i",{className:"material-icons blue-text",style:{fontSize:"8em"},children:" task_alt "}):Object(z.jsx)("i",{className:"material-icons blue-text",style:{fontSize:"8em"},children:" error_outline "})]})}function He(){return Object(z.jsx)("main",{children:Object(z.jsxs)(m.d,{children:[Object(z.jsx)(m.b,{path:A.HOME,element:Object(z.jsx)(ee,{})}),Object(z.jsx)(m.b,{path:A.LOGIN,element:Object(z.jsx)(se,{})}),Object(z.jsx)(m.b,{path:A.LOGOUT,element:Object(z.jsx)(he,{})}),Object(z.jsx)(m.b,{path:A.REGISTER,element:Object(z.jsx)(Oe,{})}),Object(z.jsx)(m.b,{exact:!0,path:A.PROFILE,element:Object(z.jsx)(Te,{})}),Object(z.jsx)(m.b,{exact:!0,path:A.DASHBOARD,element:Object(z.jsx)(Me,{})}),Object(z.jsx)(m.b,{exact:!0,path:A.PREFERENCES,element:Object(z.jsx)(z.Fragment,{})}),Object(z.jsx)(m.b,{path:A.ADMINPAGE,element:Object(z.jsx)(Ve,{})}),Object(z.jsx)(m.b,{path:A.VERIFY_USER,element:Object(z.jsx)(qe,{})}),Object(z.jsx)(m.b,{path:"*",element:Object(z.jsx)(xe,{})})]})})}new f("Index Page");s.a.render(Object(z.jsxs)(a.a.StrictMode,{children:[Object(z.jsx)(i.a,{children:Object(z.jsxs)(Y,{children:[Object(z.jsx)($,{}),Object(z.jsx)(He,{}),Object(z.jsx)(K,{})]})}),","]}),document.getElementById("root")),o()}},[[270,1,2]]]);
//# sourceMappingURL=main.a7e45311.chunk.js.map