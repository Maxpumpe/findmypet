(this["webpackJsonpreact-demo-app-saga"]=this["webpackJsonpreact-demo-app-saga"]||[]).push([[1],{10:function(e,t,r){"use strict";r.d(t,"i",(function(){return n})),r.d(t,"h",(function(){return c})),r.d(t,"j",(function(){return a})),r.d(t,"f",(function(){return o})),r.d(t,"e",(function(){return u})),r.d(t,"g",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return b})),r.d(t,"c",(function(){return l})),r.d(t,"k",(function(){return O})),r.d(t,"t",(function(){return j})),r.d(t,"s",(function(){return f})),r.d(t,"u",(function(){return p})),r.d(t,"q",(function(){return m})),r.d(t,"p",(function(){return v})),r.d(t,"r",(function(){return h})),r.d(t,"o",(function(){return x})),r.d(t,"m",(function(){return g})),r.d(t,"l",(function(){return y})),r.d(t,"n",(function(){return k})),r.d(t,"v",(function(){return E}));var n="BOOK_PAGE_INIT",c="BOOK_ERROR",a="BOOK_SUCCESS",o="BOOK_DETAIL_INIT",u="BOOK_DETAIL_ERROR",s="BOOK_DETAIL_SUCCESS",i="BOOK_DETAIL_CLOSE",d="BOOK_DELETE_INIT",b="BOOK_DELETE_ERROR",l="BOOK_DELETE_SUCCESS",O="RELEASE_STATE_DATA";function j(){return{type:n}}function f(e){return{type:c,error:e}}function p(e){return{type:a,payload:e}}function m(e){return{type:o,id:e}}function v(e){return{type:u,error:e}}function h(e){return{type:s,payload:e}}function x(){return{type:i}}function g(e){return{type:d,id:e}}function y(e){return{type:b,error:e}}function k(e){return{type:l,payload:e}}function E(){return{type:O}}},11:function(e,t,r){"use strict";r.d(t,"h",(function(){return n})),r.d(t,"i",(function(){return c})),r.d(t,"g",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"f",(function(){return d})),r.d(t,"d",(function(){return b})),r.d(t,"k",(function(){return l})),r.d(t,"q",(function(){return O})),r.d(t,"p",(function(){return j})),r.d(t,"r",(function(){return f})),r.d(t,"l",(function(){return p})),r.d(t,"j",(function(){return m})),r.d(t,"n",(function(){return v})),r.d(t,"m",(function(){return h})),r.d(t,"o",(function(){return x}));var n="VERIFY_OTP_REQUESTING",c="VERIFY_OTP_SUCCESS",a="VERIFY_OTP_ERROR",o="OTP_PAGE_INIT",u="REDIRECT_FOR_CONFIRM",s="CLEAR_CONFIRM_DATA",i="RESEND_OTP_REQUESTING",d="RESEND_OTP_SUCCESS",b="RESEND_OTP_ERROR";function l(){return{type:o}}function O(e){return{type:n,payload:e}}function j(e){return{type:a,error:e}}function f(){return{type:c}}function p(e){return{type:u,email:e}}function m(){return{type:s}}function v(e){return{type:i,email:e}}function h(e){return{type:b,error:e}}function x(e){return{type:d,payload:e}}},125:function(e,t,r){},13:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return a}));r(1);var n=r(43),c=(r(3),function(e){n.a.push(e)}),a=function(){var e=localStorage.getItem("token");if(e){var t=function(e){if(e){var t=e.split(".")[1].replace("-","+").replace("_","/");return JSON.parse(window.atob(t))}return null}(e),r=new Date(1e3*t.exp).getTime();return!((new Date).getTime()>r)}return!1}},14:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"i",(function(){return d})),r.d(t,"j",(function(){return b})),r.d(t,"h",(function(){return l})),r.d(t,"k",(function(){return O})),r.d(t,"m",(function(){return j})),r.d(t,"l",(function(){return f})),r.d(t,"n",(function(){return p}));var n="BOOK_ADD_REQUESTING",c="BOOK_ADD_SUCCESS",a="BOOK_ADD_ERROR",o="BOOK_ADD_PAGE_INIT",u="BOOK_UPDATE_REQUESTING",s="BOOK_UPDATE_SUCCESS",i="BOOK_UPDATE_ERROR";function d(){return{type:o}}function b(e){return{type:n,payload:e}}function l(e){return{type:a,error:e}}function O(){return{type:c}}function j(e,t){return{type:u,payload:e,id:t}}function f(e){return{type:i,error:e}}function p(){return{type:s}}},166:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(38),o=r.n(a),u=(r(88),r(9)),s=r(43),i=r(2),d=r(26),b=r(13),l=r(30),O=r(31),j=r(32),f=r(33),p=r(20),m=r(3),v=function(e){Object(j.a)(r,e);var t=Object(f.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(O.a)(r,[{key:"render",value:function(){JSON.parse(localStorage.getItem("user"));return Object(m.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(m.jsx)(p.a,{to:"/",className:"navbar-brand",children:"[Company-Name]"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:[Object(m.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(m.jsx)("li",{className:"nav-item active",children:Object(m.jsx)(p.a,{to:"/",className:"nav-link",children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(p.a,{to:"/book",className:"nav-link",children:"My Books"})})]}),Object(m.jsx)("div",{className:"dropdown",children:Object(m.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:Object(m.jsx)(p.a,{to:"/logout",className:"dropdown-item",children:"Logout"})})})]})]})}}]),r}(n.Component),h=["component","redirect"],x=function(e){var t=e.component,r=e.redirect,n=Object(d.a)(e,h),c=function(e){return!0===Object(b.b)()?Object(m.jsx)(u.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return Object(m.jsxs)("div",{className:"privateLayout",children:[Object(m.jsx)(v,{}),Object(m.jsx)(t,Object(i.a)(Object(i.a)({},n),e))]})}})):Object(m.jsx)(u.a,{to:{pathname:r,state:{from:e.location}}})};return Object(m.jsx)(c,{})};x.defaultProps={redirect:"/login"};var g=x,y=["component","redirect"],k=function(e){var t=e.component,r=e.redirect,n=Object(d.a)(e,y),c=function(e){return!1===Object(b.b)()?Object(m.jsx)(u.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return Object(m.jsx)("div",{className:"authLayout",children:Object(m.jsx)(t,Object(i.a)(Object(i.a)({},n),e))})}})):Object(m.jsx)(u.a,{to:{pathname:r,state:{from:e.location}}})};return Object(m.jsx)(c,{})};k.defaultProps={redirect:"/"};var E=k,_=["component","redirect"],w=function(e){var t=e.component,r=(e.redirect,Object(d.a)(e,_)),n=function(e){return Object(m.jsx)(u.b,Object(i.a)(Object(i.a)({},r),{},{render:function(e){return Object(m.jsxs)("div",{className:"privateLayout",children:[Object(m.jsx)(v,{}),Object(m.jsx)(t,Object(i.a)(Object(i.a)({},r),e))]})}}))};return Object(m.jsx)(n,{})};w.defaultProps={redirect:"/logind"};var S=w,N=Object(n.lazy)((function(){return r.e(10).then(r.bind(null,328))})),R=Object(n.lazy)((function(){return r.e(11).then(r.bind(null,329))})),T=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,330))})),I=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,331))})),B=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,332))})),C=Object(n.lazy)((function(){return r.e(7).then(r.bind(null,335))})),D=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,333))})),L=Object(n.lazy)((function(){return r.e(9).then(r.bind(null,334))})),A=function(){return Object(m.jsx)(u.c,{history:s.a,children:Object(m.jsx)(n.Suspense,{fallback:Object(m.jsx)("div",{children:"Loading..."}),children:Object(m.jsxs)(u.d,{children:[Object(m.jsx)(g,{exact:!0,path:"/",component:N}),Object(m.jsx)(E,{path:"/login",component:T}),Object(m.jsx)(E,{path:"/register",component:I}),Object(m.jsx)(E,{path:"/confirm-account",component:B}),Object(m.jsx)(g,{path:"/logout",component:R}),Object(m.jsx)(g,{path:"/book",component:C}),Object(m.jsx)(g,{path:"/manage-book/:id",component:D}),Object(m.jsx)(g,{path:"/manage-book",component:D}),Object(m.jsx)(S,{path:"/xx",component:L})]})})})},P=r(55),z=r(23),G=r.n(z),q=r(78),K=r.n(q),F=r(81);r(123),r(124),r(125);G.a.accessToken="pk.eyJ1IjoibWF4cHVtcGUiLCJhIjoiY2pwdjZleG1yMG9oNjN4bzk0OTRrOXB6NiJ9.8Jt5dEyEdxDVqkJ2EYhqNg";var U=function(e){Object(j.a)(r,e);var t=Object(f.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).showError=function(e){console.info("WebSocket error:",e),n.setState((function(t){return{error:e&&e.code&&"system.connectionError"==e.code?"Connection error. Are NATS Server and Resgate running?":e&&e.message?e.message:String(e)}})),clearTimeout(n.errorTimer),n.errorTimer=setTimeout((function(){return n.setState((function(e){return{error:""}}))}),5e3)},n.state={lng:13.404954,lat:52.520008,zoom:10},n.mapContainer=c.a.createRef(),n.errorTimer=null,n.client=new F.a("ws://dev-nook.de:4223"),console.info("WebSocket status:",n.client),n}return Object(O.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.client.get("pets.status").then((function(t){e.setState({pets:t})})).catch(this.showError);var t=this.state,r=t.lng,n=t.lat,c=t.zoom,a=new G.a.Map({container:this.mapContainer.current,style:"mapbox://styles/mapbox/streets-v11",center:[r,n],zoom:c});a.addControl(new G.a.FullscreenControl),a.addControl(new K.a({accessToken:G.a.accessToken,mapboxgl:G.a})),new G.a.Marker({color:"#00FFFF",draggable:!0}).setLngLat([13.724954,52.210008]).addTo(a).setDraggable(!0);var o,u=Object(P.a)([{type:"Feature",properties:{message:"Katze Foo entlaufen",iconSize:[60,60]},geometry:{type:"Point",coordinates:[13.754954,52.240008]}},{type:"Feature",properties:{message:"Kater Bar entlaufen",iconSize:[50,50]},geometry:{type:"Point",coordinates:[13.354954,52.440008]}},{type:"Feature",properties:{message:"Kater Baz entlaufen",iconSize:[40,40]},geometry:{type:"Point",coordinates:[13.254954,52.440008]}}]);try{var s=function(){var e=o.value,t=document.createElement("div"),r=e.properties.iconSize[0],n=e.properties.iconSize[1];t.className="marker",t.style.backgroundImage="url(https://placekitten.com/g/".concat(r,"/").concat(n,"/)"),t.style.width="".concat(r,"px"),t.style.height="".concat(n,"px"),t.style.backgroundSize="100%",t.addEventListener("click",(function(){window.alert(e.properties.message)})),new G.a.Marker(t).setLngLat(e.geometry.coordinates).addTo(a)};for(u.s();!(o=u.n()).done;)s()}catch(i){u.e(i)}finally{u.f()}new G.a.Marker({color:"black",rotation:0}).setLngLat([13.214954,52.810008]).addTo(a);a.on("move",(function(){e.setState({lng:a.getCenter().lng.toFixed(4),lat:a.getCenter().lat.toFixed(4),zoom:a.getZoom().toFixed(2)})}))}},{key:"render",value:function(){var e=this.state,t=e.lng,r=e.lat,n=e.zoom;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"sidebar",children:["Longitude: ",t," | Latitude: ",r," | Zoom: ",n]}),Object(m.jsx)("div",{ref:this.mapContainer,className:"map-container"})]})}}]),r}(c.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=r(52),J=r(76);r(162).config(),o.a.render(Object(m.jsxs)(M.a,{store:J.a,children:[Object(m.jsx)(A,{}),Object(m.jsx)(U,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},21:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"h",(function(){return d}));var n="LOGIN_REQUESTING",c="LOGIN_SUCCESS",a="LOGIN_ERROR",o="LOGIN_PAGE_INIT";function u(){return{type:o}}function s(e){return{type:n,payload:e}}function i(e){return{type:a,error:e}}function d(){return{type:c}}},22:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"h",(function(){return d}));var n="REGISTER_REQUESTING",c="REGISTER_SUCCESS",a="REGISTER_ERROR",o="REGISTER_PAGE_INIT";function u(){return{type:o}}function s(e){return{type:n,payload:e}}function i(e){return{type:a,error:e}}function d(){return{type:c}}},42:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));var n="WORLDMAP_PAGE_INIT";function c(e){return{type:n,payload:e}}},43:function(e,t,r){"use strict";var n=r(15).createBrowserHistory();t.a=n},76:function(e,t,r){"use strict";var n=r(19),c=r(82),a=r(79),o=r(2),u=r(21),s={id:"",password:"",requesting:!1,successful:!1,messages:[],errors:{}},i=r(22),d=r(11),b={id:"",password:"",requesting:!1,successful:!1,messages:[],errors:{},user:{},otp_errors:{},confirm_email:"",resend_success:{}},l=r(46),O=r(10),j=r(14),f={requesting:!1,successful:!1,messages:[],errors:{},addedBook:{},updatedBook:{}},p={successful:!1,messages:[],errors:[],books:[],selectedBook:{},selectedBookError:{},deleteBook:{}},m=Object(n.combineReducers)({list_book:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.i:return Object(o.a)(Object(o.a)({},e),{},{errors:[],books:[]});case O.j:return Object(o.a)(Object(o.a)({},e),{},{successful:!0,books:Object(l.a)(t.payload)});case O.h:return Object(o.a)(Object(o.a)({},e),{},{successful:!1,errors:Object(l.a)(t.error)});case O.f:return Object(o.a)(Object(o.a)({},e),{},{selectedBookError:{},selectedBook:{}});case O.g:return Object(o.a)(Object(o.a)({},e),{},{selectedBook:Object(o.a)({},t.payload)});case O.e:return Object(o.a)(Object(o.a)({},e),{},{selectedBookError:Object(o.a)({},t.error)});case O.d:return Object(o.a)(Object(o.a)({},e),{},{selectedBookError:{},selectedBook:{}});case O.c:return Object(o.a)(Object(o.a)({},e),{},{deleteBook:Object(o.a)({},t.payload)});case O.a:return Object(o.a)(Object(o.a)({},e),{},{selectedBookError:Object(o.a)({},t.error)});case O.k:return Object(o.a)(Object(o.a)({},e),{},{errors:[],books:[],selectedBook:{},selectedBookError:{},deleteBook:{}});default:return e}},manage_book:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.b:return Object(o.a)(Object(o.a)({},e),{},{errors:{}});case j.c:return Object(o.a)(Object(o.a)({},e),{},{requesting:!0,errors:{}});case j.d:return Object(o.a)(Object(o.a)({},e),{},{successful:!0,errors:{},addedBook:Object(o.a)({},t.payload)});case j.a:return Object(o.a)(Object(o.a)({},e),{},{successful:!1,errors:Object(o.a)({},t.error)});case j.f:return Object(o.a)(Object(o.a)({},e),{},{requesting:!0,errors:{}});case j.g:return Object(o.a)(Object(o.a)({},e),{},{successful:!0,errors:{},updatedBook:Object(o.a)({},t.payload)});case j.e:return Object(o.a)(Object(o.a)({},e),{},{successful:!1,errors:Object(o.a)({},t.error)});default:return e}}}),v=r(42),h={counter:-1},x=Object(n.combineReducers)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.b:return Object(o.a)(Object(o.a)({},e),{},{errors:{}});case u.c:return Object(o.a)(Object(o.a)({},e),{},{requesting:!0});case u.d:return Object(o.a)(Object(o.a)({},e),{},{successful:!0,user:Object(o.a)({},t.payload)});case u.a:return Object(o.a)(Object(o.a)({},e),{},{successful:!1,errors:Object(o.a)({},t.error)});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.b:return Object(o.a)(Object(o.a)({},e),{},{errors:{}});case i.c:return Object(o.a)(Object(o.a)({},e),{},{requesting:!0});case i.d:return Object(o.a)(Object(o.a)({},e),{},{requesting:!1,successful:!0,errors:{}});case i.a:return Object(o.a)(Object(o.a)({},e),{},{requesting:!1,successful:!1,errors:Object(o.a)({},t.error)});case d.b:return Object(o.a)(Object(o.a)({},e),{},{otp_errors:{},resend_success:{}});case d.h:return Object(o.a)(Object(o.a)({},e),{},{resend_success:{},requesting:!0});case d.i:return Object(o.a)(Object(o.a)({},e),{},{requesting:!1,successful:!0,otp_errors:{}});case d.g:return Object(o.a)(Object(o.a)({},e),{},{requesting:!1,successful:!1,otp_errors:Object(o.a)({},t.error)});case d.c:return Object(o.a)(Object(o.a)({},e),{},{confirm_email:t.email});case d.a:return Object(o.a)(Object(o.a)({},e),{},{confirm_email:"",otp_errors:{}});case d.e:return Object(o.a)(Object(o.a)({},e),{},{requesting:!0});case d.f:return Object(o.a)(Object(o.a)({},e),{},{requesting:!1,successful:!0,otp_errors:{},resend_success:Object(o.a)({},t.payload.data)});case d.d:return Object(o.a)(Object(o.a)({},e),{},{requesting:!1,successful:!1,otp_errors:Object(o.a)({},t.error)});default:return e}},books:m,map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.a:return Object(o.a)(Object(o.a)({},e),{},{counter:e.counter+1});default:return e}}}),g=r(6),y=r.n(g),k=r(4),E=r(80),_=r.n(E),w="http://localhost:8080/login",S=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c={method:e,url:w+t};r&&(c.data=r),1===n&&(c.headers={Authorization:"Bearer "+localStorage.getItem("token")});var a=_()(c);return console.log("requestData:",c),console.log("result:",a),a},N=r(13),R="",T="/auth/register",I="/book",B="/auth/verify-otp",C="/auth/resend-verify-otp",D=y.a.mark(P),L=y.a.mark(z);function A(e){return S("post",R,e)}function P(e){var t,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(k.b)(A,t);case 4:return r=n.sent,console.info("response:",r),console.info("token:",r.headers.token),localStorage.removeItem("user"),localStorage.setItem("token",r.data.token),localStorage.setItem("user",JSON.stringify({id:r.data._id,firstName:r.data.firstName,lastName:r.data.lastName})),n.next=12,Object(k.c)(Object(u.h)());case 12:return n.next=14,Object(k.b)(N.a,"/");case 14:n.next=20;break;case 16:return n.prev=16,n.t0=n.catch(1),n.next=20,Object(k.c)(Object(u.e)(n.t0.response.data));case 20:case"end":return n.stop()}}),D,null,[[1,16]])}function z(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.d)(u.c,P)]);case 2:case"end":return e.stop()}}),L)}var G=y.a.mark(M),q=y.a.mark(J),K=y.a.mark(W);function F(e){return S("post",B,e)}function U(e){return S("post",C,e)}function M(e){var t,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(k.b)(F,t);case 4:return r=n.sent,n.next=7,Object(k.c)(Object(d.r)(r));case 7:return n.next=9,Object(k.b)(N.a,"/login");case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(1),n.next=15,Object(k.c)(Object(d.p)(n.t0.response.data));case 15:case"end":return n.stop()}}),G,null,[[1,11]])}function J(e){var t;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(k.b)(U,e);case 3:return t=r.sent,r.next=6,Object(k.c)(Object(d.o)(t));case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(k.c)(Object(d.m)(r.t0.response.data));case 12:case"end":return r.stop()}}),q,null,[[0,8]])}function W(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.d)(d.h,M),Object(k.d)(d.e,J)]);case 2:case"end":return e.stop()}}),K)}var Q=y.a.mark(H),V=y.a.mark(Z);function Y(e){return e.firstname=e.firstName,e.lastname=e.lastName,delete e.firstName,delete e.lastName,S("post",T,e)}function H(e){var t,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(k.b)(Y,t);case 4:return r=n.sent,n.next=7,Object(k.c)(Object(i.h)());case 7:return n.next=9,Object(k.c)(Object(d.l)(r.data.data.email));case 9:return n.next=11,Object(k.b)(N.a,"/confirm-account");case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(1),n.next=17,Object(k.c)(Object(i.e)(n.t0.response.data));case 17:case"end":return n.stop()}}),Q,null,[[1,13]])}function Z(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.d)(i.c,H),W()]);case 2:case"end":return e.stop()}}),V)}var X=y.a.mark(ne),$=y.a.mark(ce),ee=y.a.mark(ae);function te(e){return S("post",I,e)}function re(e,t){return S("put",I+"/"+t,e)}function ne(e){var t;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(k.b)(te,t);case 4:return r.next=6,Object(k.c)(Object(j.k)());case 6:return r.next=8,Object(k.b)(N.a,"/book");case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(1),r.next=14,Object(k.c)(Object(j.h)(r.t0.response.data));case 14:case"end":return r.stop()}}),X,null,[[1,10]])}function ce(e){var t,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,r=e.id,n.prev=1,n.next=4,Object(k.b)(re,t,r);case 4:return n.next=6,Object(k.c)(Object(j.n)());case 6:return n.next=8,Object(k.b)(N.a,"/book");case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(1),n.next=14,Object(k.c)(Object(j.l)(n.t0.response.data));case 14:case"end":return n.stop()}}),$,null,[[1,10]])}function ae(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.d)(j.c,ne),Object(k.d)(j.f,ce)]);case 2:case"end":return e.stop()}}),ee)}var oe=y.a.mark(Oe),ue=y.a.mark(je),se=y.a.mark(fe),ie=y.a.mark(pe);function de(){return S("get",I)}function be(e){return S("get",I+"/"+e)}function le(e){return S("delete",I+"/"+e)}function Oe(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(k.b)(de);case 3:return e=(e=t.sent).data.data,t.next=7,Object(k.c)(Object(O.u)(e));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(k.c)(Object(O.s)(t.t0.response.data.data));case 13:case"end":return t.stop()}}),oe,null,[[0,9]])}function je(e){var t;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(k.b)(be,e.id);case 3:return t=(t=r.sent).data.data,r.next=7,Object(k.c)(Object(O.r)(t));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(0),r.next=13,Object(k.c)(Object(O.p)(r.t0.response.data.data));case 13:case"end":return r.stop()}}),ue,null,[[0,9]])}function fe(e){var t;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(k.b)(le,e.id);case 3:return t=(t=r.sent).data,r.next=7,Object(k.c)(Object(O.n)(t));case 7:return r.next=9,Object(k.c)(Object(O.t)());case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(k.c)(Object(O.l)(r.t0.response.data));case 15:case"end":return r.stop()}}),se,null,[[0,11]])}function pe(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.d)(O.i,Oe),Object(k.d)(O.f,je),Object(k.d)(O.b,fe),ae()]);case 2:case"end":return e.stop()}}),ie)}r(29);var me=y.a.mark(he),ve=y.a.mark(xe);function he(e){var t;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=e.payload,console.log("Saga:",t);case 3:case"end":return r.stop()}}),me)}function xe(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.d)(v.a,he)]);case 2:case"end":return e.stop()}}),ve)}var ge=y.a.mark(ye);function ye(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([z(),Z(),pe(),xe()]);case 2:case"end":return e.stop()}}),ge)}var ke=Object(a.composeWithDevTools)({}),Ee=Object(c.a)(),_e=[Ee],we=Object(n.createStore)(x,ke(n.applyMiddleware.apply(void 0,_e)));Ee.run(ye);t.a=we},88:function(e,t,r){}},[[166,2,3]]]);
//# sourceMappingURL=main.7b6cdd01.chunk.js.map