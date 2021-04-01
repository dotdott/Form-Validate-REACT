(this["webpackJsonpform-app"]=this["webpackJsonpform-app"]||[]).push([[0],{32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(24),c=a.n(r),i=(a(32),a(14)),o=a(6),d=a(11),j=a.n(d),u=a(15),l=a(8),p=a(25),b=(a(34),p.a.initializeApp({apiKey:"AIzaSyAIks9yV3UMCmMN1XaoodKTUAhFj850OVQ",authDomain:"form-app-dc952.firebaseapp.com",projectId:"form-app-dc952",storageBucket:"form-app-dc952.appspot.com",messagingSenderId:"809707173174",appId:"1:809707173174:web:6c7c823cee7b218f556f97"})),m=b.auth(),h=a(0),O=Object(s.createContext)({});function x(e){var t=e.children,a=Object(s.useState)(""),n=Object(l.a)(a,2),r=n[0],c=n[1],i=Object(s.useState)(!0),o=Object(l.a)(i,2),d=o[0],j=o[1],u=m.currentUser;return Object(s.useEffect)((function(){return m.onAuthStateChanged((function(e){c(e),j(!1)}))}),[]),Object(h.jsx)(O.Provider,{value:{SignUp:function(e,t,a){return m.createUserWithEmailAndPassword(e,t).then((function(e){e.user.updateProfile({displayName:a})}))},SignIn:function(e,t){return m.signInWithEmailAndPassword(e,t)},SignOut:function(){return m.signOut()},user:u,currentUser:r},children:!d&&t})}var w=function(e){var t={};return e.username||(t.name="Enter a username"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Invalid e-mail address"):t.email="Enter a email",e.password?e.password.length<6&&(t.passsword="Enter a password with mininum 6 characters"):t.password="Enter a password",e.password2?e.password2!==e.password&&(t.password2="Passwords do not match"):t.password2="Enter your password again",t},f=a(12),g="/Form-Validate-REACT/",v="/Form-Validate-REACT/signup",y="/Form-Validate-REACT/login",S=function(){var e=Object(s.useState)({username:"",email:"",password:"",password2:"",weakpass:"",inUseEmail:""}),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)({}),c=Object(l.a)(r,2),d=c[0],p=c[1],b=Object(s.useState)(!1),m=Object(l.a)(b,2),x=m[0],g=m[1],v=Object(s.useState)(!1),S=Object(l.a)(v,2),k=S[0],C=S[1],E=Object(s.useState)(!1),N=Object(l.a)(E,2),U=N[0],A=N[1],I=Object(s.useState)(!1),P=Object(l.a)(I,2),F=P[0],T=P[1],V=Object(s.useContext)(O).SignUp,L=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p(w(a)),e.prev=2,0!==Object.keys(d).length||!0!==x||!0!==U||!1!==k){e.next=7;break}return e.next=6,V(a.email,a.password,a.username);case 6:C(!0);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),"auth/weak-password"===e.t0.code&&p({weakpass:"Password should be at least 6 characters"}),"auth/email-already-in-use"===e.t0.code&&p({inUseEmail:"The email address is already in use by another account."});case 13:g(!0);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),q=function(e){var t=e.target,s=t.name,r=t.value;n(Object(o.a)(Object(o.a)({},a),{},Object(i.a)({},s,r)))};return Object(s.useEffect)((function(){0===Object.keys(d).length&&!0===x&&!0===U&&!0===k&&(n({username:"",email:"",password:"",password2:"",weakpass:"",inUseEmail:""}),T(!0),A(!1),g(!1),C(!1),document.querySelector("#form-validate").reset())}),[d]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Register form"}),Object(h.jsx)("div",{className:"form-container",children:Object(h.jsxs)("form",{onSubmit:L,autoComplete:"off",id:"form-validate",noValidate:!0,children:[Object(h.jsx)("div",{className:F?"modal active":"modal",children:Object(h.jsxs)("h1",{children:["Register  with sucess!",Object(h.jsx)("span",{onClick:function(){return T(!1)},children:"X"})]})}),Object(h.jsx)("input",{type:"text",name:"username",id:"username",className:"username",placeholder:"Username",onChange:q}),d.name&&Object(h.jsx)("p",{children:d.name}),Object(h.jsx)("input",{type:"email",name:"email",id:"email",className:"email",placeholder:"Email",onChange:q}),d.email&&Object(h.jsx)("p",{children:d.email}),d.inUseEmail&&Object(h.jsx)("p",{children:d.inUseEmail}),Object(h.jsx)("input",{type:"password",name:"password",id:"password",className:"password",placeholder:"Password",onChange:q}),d.password&&Object(h.jsx)("p",{children:d.password}),d.weakpass&&Object(h.jsx)("p",{children:d.weakpass}),Object(h.jsx)("input",{type:"password",name:"password2",id:"password2",className:"password2",placeholder:"Confirm password",onChange:q}),d.password2&&Object(h.jsx)("p",{children:d.password2}),d.weakpass&&Object(h.jsx)("p",{children:d.weakpass}),Object(h.jsxs)("div",{className:"condition-use",children:[Object(h.jsxs)("div",{className:"checkbox-input",children:[Object(h.jsx)("input",{type:"checkbox",id:"checkbox",onClick:function(){return A(!U)}}),Object(h.jsxs)("label",{htmlFor:"checkbox",children:[" I agree with ",Object(h.jsx)("i",{children:"website"})," terms of uses"]}),U||Object(h.jsx)("small",{children:"'You need to agree with terms of use to register'"})]}),Object(h.jsx)("button",{type:"submit",children:"Sign up"})]}),Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("p",{children:"Already have an account?"}),Object(h.jsx)(f.b,{to:y,children:"Login here"})]})]})})]})},k=a(3);function C(){var e=Object(s.useContext)(O),t=e.SignOut,a=e.user,n=Object(k.g)();function r(){return(r=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n.push("/login");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"HomePage"}),Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("p",{className:"greetings",children:["Hello, ",a.displayName,"."]}),Object(h.jsx)("button",{onClick:function(){return r.apply(this,arguments)},children:"Logout"})]})]})}function E(){var e=Object(s.useContext)(O),t=e.SignIn,a=e.user,n=Object(s.useState)({email:"",password:""}),r=Object(l.a)(n,2),c=r[0],d=r[1],p=Object(s.useState)({}),b=Object(l.a)(p,2),m=b[0],x=b[1],g=Object(k.g)();function y(){return(y=Object(u.a)(j.a.mark((function e(s){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,t(c.email,c.password);case 4:a&&g.push("/"),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(1),x(w(c)),"auth/too-many-requests"===e.t0.code&&x({requestLimit:"Access to this account has been temporarily disabled due to many failed login attempts."}),"auth/wrong-password"===e.t0.code&&x({wrongPass:"The password is invalid."}),"auth/user-not-found"===e.t0.code&&x({notFound:"There is no user record corresponding to this identifier. The user may have been deleted."});case 13:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}var S=function(e){var t=e.target,a=t.name,s=t.value;d(Object(o.a)(Object(o.a)({},c),{},Object(i.a)({},a,s)))};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Sign In"}),Object(h.jsx)("div",{className:"form-container",children:Object(h.jsxs)("form",{onSubmit:function(e){return function(e){return y.apply(this,arguments)}(e)},noValidate:!0,children:[Object(h.jsx)("input",{type:"email",name:"email",placeholder:"User Email Address",onChange:S}),m.email&&Object(h.jsx)("p",{children:m.email}),m.notFound&&Object(h.jsx)("p",{children:m.notFound}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"User Password",onChange:S}),m.password&&Object(h.jsx)("p",{children:m.password}),m.wrongPass&&Object(h.jsx)("p",{children:m.wrongPass}),m.requestLimit&&Object(h.jsx)("p",{children:m.requestLimit}),Object(h.jsx)("button",{type:"submit",children:"Log In"}),Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("p",{children:"Still dont have an account?"}),Object(h.jsx)(f.b,{to:v,children:"Sign Up Now!"})]})]})})]})}var N=a(22);function U(e){var t=e.component,a=Object(N.a)(e,["component"]),n=Object(s.useContext)(O).currentUser;return Object(h.jsx)(k.b,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return n?Object(h.jsx)(k.a,{to:g}):Object(h.jsx)(t,Object(o.a)({},e))}}))}function A(e){var t=e.component,a=Object(N.a)(e,["component"]),n=Object(s.useContext)(O).currentUser;return Object(h.jsx)(k.b,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return n?Object(h.jsx)(t,Object(o.a)({},e)):Object(h.jsx)(k.a,{to:y})}}))}var I=function(){return Object(h.jsx)(x,{children:Object(h.jsx)(f.a,{children:Object(h.jsxs)(k.d,{children:[Object(h.jsx)(A,{exact:!0,path:g,component:C}),Object(h.jsx)(U,{path:y,component:E}),Object(h.jsx)(k.b,{path:v,component:S})]})})})};c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ffff9455.chunk.js.map