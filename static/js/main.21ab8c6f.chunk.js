(this["webpackJsonpciv-rnd"]=this["webpackJsonpciv-rnd"]||[]).push([[0],{29:function(e,t,a){e.exports=a(44)},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=a(12),l=a(16),s=(a(38),a(1)),u=a(4),m=(a(39),function(e){var t=e.data.map((function(e){return e.image})),a=Object(n.useState)(t[0]),c=Object(u.a)(a,2),i=c[0],o=c[1],l=Object(n.useState)(t[1]),s=Object(u.a)(l,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){var e=t.length-1,a=setInterval((function(){var a=Math.floor(Math.random()*(e-0+1))+0,n=Math.floor(Math.random()*(e-0+1))+0;o(t[a]),d(t[n])}),150);return function(){clearInterval(a)}}),[t]),r.a.createElement("div",{className:"random-spinner"},r.a.createElement("img",{className:"random-spinner__image",src:i,alt:""}),r.a.createElement("img",{className:"random-spinner__image",src:m,alt:""}))}),d=a(10),_=a(11),E=a(27),v=a(28),f=(a(40),function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"spinner"})}}]),a}(n.Component));var b=function(e){var t=e.data,a=t.isLoading,c=t.user,i=Object(n.useState)(!1),o=Object(u.a)(i,2),l=o[0],s=o[1],d=Object(n.useState)(),_=Object(u.a)(d,2),E=_[0],v=_[1],b=Object(n.useState)(),p=Object(u.a)(b,2),h=p[0],g=p[1],O=Object(n.useState)(!1),N=Object(u.a)(O,2),j=N[0],S=N[1],y=Object(n.useState)(),k=Object(u.a)(y,2),C=k[0],R=k[1],U=Object(n.useState)(!1),q=Object(u.a)(U,2),w=q[0],M=q[1],T=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(a||0===a){for(var n=Math.floor(Math.random()*(t-e+1))+e;a===n;)n=Math.floor(Math.random()*(t-e+1))+e;return n}var r=Math.floor(Math.random()*(t-e+1))+e;return r},L=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=0,a=c.nations.length-1;e||(v(),g(),s(!1),S(!1));var n=T(t,a),r=T(t,a,n);v(c.nations[n]),g(c.nations[r]),s(!0),S(!0),setTimeout((function(){S(!1)}),400)},I=function(e){var t=c.nations.find((function(t){return e===t.id}));R(t),M(!0)},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=e.name,n=e.image,c=e.unique,i=e.info,o=e.id;return r.a.createElement("div",{className:"nation ".concat(t?"nation--".concat(t):"")},r.a.createElement("div",{className:"nation__title",onClick:function(){return I(o)}},r.a.createElement("img",{className:"nation__title-image",src:n,alt:""}),a),r.a.createElement("div",{className:"nation__unique"},c.map((function(e,t){return r.a.createElement("div",{key:t,className:"nation__unique-item"},e)}))),e.buildings&&r.a.createElement("div",{className:"nation__unique nation__unique--nested"},e.buildings.map((function(e,t){return r.a.createElement("div",{key:t,className:"nation__unique-item"},r.a.createElement("div",{className:"nation__title nation__title--small"},r.a.createElement("img",{className:"nation__title-image",src:e.image,alt:""}),e.title,r.a.createElement("div",{className:"nation__sub-title"},e.desc)))}))),e.units&&r.a.createElement("div",{className:"nation__unique nation__unique--nested"},e.units.map((function(e,t){return r.a.createElement("div",{key:t,className:"nation__unique-item"},r.a.createElement("div",{className:"nation__title nation__title--small"},r.a.createElement("img",{className:"nation__title-image",src:e.image,alt:""}),e.title,r.a.createElement("div",{className:"nation__sub-title"},e.desc)))}))),r.a.createElement("div",{className:"nation__unique"},r.a.createElement("div",{className:"nation__unique-item"},i.type.map((function(e,t){return r.a.createElement("span",{key:t},e," ")}))),r.a.createElement("div",{className:"nation__unique-item"},i.boost)))};return r.a.createElement("div",{className:"homepage"},a&&r.a.createElement(f,null),!a&&!l&&r.a.createElement("div",{className:"homepage__random"},r.a.createElement("button",{className:"homepage__random-button",onClick:L},"Random")),!a&&l&&r.a.createElement("div",{className:"randomed"},r.a.createElement("div",{className:"randomed__column"},!j&&x(E,null)),r.a.createElement("div",{className:"randomed__column randomed__column--small"},!j&&r.a.createElement("button",{className:"homepage__random-button",onClick:function(){return L(!1)}},"Random"),j&&r.a.createElement(m,{data:c.nations})),r.a.createElement("div",{className:"randomed__column"},!j&&x(h,null))),w&&r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__close",onClick:function(){return M(!1)}},"\u2716"),x(C,"small")))},p=a(18),h=a.n(p),g=a(24),O=function(){function e(){Object(d.a)(this,e),this.API_URL="../nations.json"}return Object(_.a)(e,[{key:"getData",value:function(){var e=Object(g.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.API_URL));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not fetch, received ".concat(t.status));case 5:return e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),N=new O;a(42);var j=Object(o.b)((function(e){return{user:e.user}}),(function(e){return{getData:function(){return e((function(e){e({type:"GET_USER_REQUEST"}),N.getData().then((function(t){e({type:"GET_USER_SUCCESS",payload:t})})).catch((function(t){e({type:"GET_USER_FAIL",error:!0,payload:new Error("Fetch error")})}))}))}}}))((function(e){var t=e.user,a=e.getData;return Object(n.useEffect)((function(){a()}),[a]),r.a.createElement("div",{className:"app"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(b,{data:t}))))})),S=r.a.createContext(),y=S.Provider,k=(S.Consumer,a(5)),C=a(25),R=a.n(C),U=a(26),q=a(13),w={error:null,isLoading:!0,user:null};var M=Object(k.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_REQUEST":return Object(q.a)({},e,{isLoading:!0,error:null});case"GET_USER_SUCCESS":return Object(q.a)({},e,{isLoading:!1,user:t.payload});case"GET_USER_FAIL":return Object(q.a)({},e,{isLoading:!1,error:t.payload.message});default:return e}}}),T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,L=Object(k.e)(M,T(Object(k.a)(U.a,R.a))),I=new O;i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:L},r.a.createElement(y,{value:I},r.a.createElement(l.a,null,r.a.createElement(j,null))))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.21ab8c6f.chunk.js.map