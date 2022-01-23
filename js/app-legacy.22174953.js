(function(){"use strict";var e={2545:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(9963),o=n(6252),u=n(9109),i=n(8142),a=n(2262),s={class:"bg-silver fixed w-full flex justify-center items-center h-14 gap-4 text-white border-b border-gray-200"},l=(0,o.Uk)("Pomodoro"),c=(0,o.Uk)("Custom"),f={key:0,src:u,alt:"volume off"},d={key:1,src:i,alt:"volume on"},v={class:"h-screen pt-14"},m=(0,o.aZ)({setup:function(e){var t=(0,a.iH)(!0);return(0,o.JJ)("sound",t),(0,o.YP)(t,(function(e){(0,o.JJ)("sound",e)})),console.log(""),function(e,n){var r=(0,o.up)("router-link"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",s,[(0,o.Wm)(r,{to:"/pomodoro",class:"nav-element"},{default:(0,o.w5)((function(){return[l]})),_:1}),(0,o.Wm)(r,{to:"/custom",class:"nav-element"},{default:(0,o.w5)((function(){return[c]})),_:1}),(0,o._)("div",{onClick:n[0]||(n[0]=function(e){return t.value=!t.value}),class:"sound w-10 fixed right-1"},[t.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("img",f)),t.value?((0,o.wg)(),(0,o.iD)("img",d)):(0,o.kq)("",!0)])]),(0,o._)("main",v,[(0,o.Wm)(u,{sound:t.value},null,8,["sound"])])],64)}}}),p=n(3744);const g=(0,p.Z)(m,[["__scopeId","data-v-28f1d198"]]);var h=g,b=(n(1539),n(8783),n(3948),n(2119)),w=n(6422),y=(0,o.aZ)({setup:function(e){return function(e,t){return(0,o.wg)(),(0,o.j4)(w.Z,{worktime:{minutes:25,seconds:0},breaktime:{minutes:5,seconds:0}})}}});const k=y;var x=k,_=[{path:"/",redirect:"/pomodoro"},{path:"/pomodoro",name:"Pomodoro",component:x},{path:"/custom",name:"Custom",component:function(){return n.e(153).then(n.bind(n,2153))}}],C=(0,b.p7)({history:(0,b.PO)(""),routes:_}),j=C;(0,r.ri)(h).use(j).mount("#app")},6422:function(e,t,n){n.d(t,{Z:function(){return T}});n(2222);var r=n(6252),o=n(3577),u=n(2262),i=n(275),a=n(4355),s=n(8831),l=n(9349),c=function(e){return(0,r.dD)("data-v-0d35dc27"),e=e(),(0,r.Cn)(),e},f={id:"status"},d={key:0,class:"text-4xl sm:text-5xl text-gray-600 text-center"},v={key:1,class:"status"},m={key:2,class:"status"},p={id:"minutes"},g=(0,r.Uk)(" : "),h={id:"seconds"},b={id:"controls",class:"flex flex-col justify-center items-center gap-2 bg-silver border-2 border-gray-800 p-2 text-xl rounded-lg text-gray-100"},w={id:"sessions"},y={id:"modifysessions",class:"bg-gray-400 rounded-full"},k=c((function(){return(0,r._)("img",{src:i,alt:"-"},null,-1)})),x=[k],_={class:"px-2"},C=c((function(){return(0,r._)("img",{src:a,alt:"+"},null,-1)})),j=[C],O={id:"totaltime",class:"text-center"},D={key:0,class:"w-5",src:s,alt:"start"},S={key:1,class:"w-5",src:l,alt:"pause"},E=(0,r.aZ)({props:{breaktime:null,worktime:null},setup:function(e){var t=e;function n(e){return""+e}var i=new Audio(n("sound/end-of-work.mp3")),a=new Audio(n("sound/end-of-pause.mp3")),s=(0,u.iH)(!1),l=(0,u.iH)(!0),c=(0,u.iH)(4),k=(0,u.iH)(t.worktime.minutes),C=(0,u.iH)(t.worktime.seconds),E=(0,r.f3)("sound")||(0,u.iH)(!1),A=(0,u.Fl)((function(){var e=[];return s.value?l.value?e.push("bg-gradient-to-t","from-[#A46843]","to-[#BD8E63]"):e.push("bg-gradient-to-t","from-[#698561]","to-[#E9E5B8]"):e.push("bg-pastel"),e}));function P(){k.value=t.worktime.minutes,C.value=t.worktime.seconds,l.value=!0}function T(){k.value=t.breaktime.minutes,C.value=t.breaktime.seconds,l.value=!1}var H=(0,u.Fl)((function(){return U(c.value*(60*t.worktime.minutes+t.worktime.seconds+60*t.breaktime.minutes+t.breaktime.seconds))}));function U(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60;return"".concat(t,"h").concat(n,"m").concat(r,"s")}var F=-1,N=(0,u.Fl)((function(){return"".concat(s.value?"Stop":"Start"," Timer")}));function Z(e){return e<10?"0".concat(e):e}function q(){console.log("Timer started"),s.value?B():z()}function z(){s.value||(s.value=!0),F=setInterval((function(){if(0===C.value){if(0===k.value)return B(),void(l.value?(E.value&&i.play(),T(),z()):(E.value&&a.play(),P(),c.value>0&&(c.value--,z())));k.value--,C.value=59}else C.value--}),1e3)}function B(){clearInterval(F),s.value=!1}return(0,r.Ah)((function(){return B()})),function(e,t){return(0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)(["wrapper font-roboto h-full w-full flex flex-col justify-center gap-20 items-center",(0,u.SU)(A)])},[(0,r._)("div",f,[s.value?l.value?((0,r.wg)(),(0,r.iD)("h1",v,"work")):((0,r.wg)(),(0,r.iD)("h1",m,"pause")):((0,r.wg)(),(0,r.iD)("h1",d," Start when ready! "))]),(0,r._)("div",{id:"time",class:(0,o.C_)(["text-6xl sm:text-9xl mx-auto text-center",{"text-white":s.value,"text-gray-600":!s.value}])},[(0,r._)("span",p,(0,o.zw)(Z(k.value)),1),g,(0,r._)("span",h,(0,o.zw)(Z(C.value)),1)],2),(0,r._)("div",b,[(0,r._)("div",w,[(0,r._)("div",y,[s.value?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",{key:0,class:"button",onClick:t[0]||(t[0]=function(e){c.value>1&&c.value--})},x)),(0,r._)("span",_,[(0,r._)("b",null,(0,o.zw)(c.value),1),(0,r.Uk)(" study session"+(0,o.zw)(c.value>1?"s":""),1)]),s.value?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",{key:1,class:"button",onClick:t[1]||(t[1]=function(e){return c.value++})},j))])]),(0,r._)("div",O,(0,o.zw)((0,u.SU)(H)),1),(0,r._)("button",{class:"p-2 bg-primary rounded-xl text-white flex gap-4",onClick:q},[(0,r.Uk)((0,o.zw)((0,u.SU)(N))+" ",1),s.value?((0,r.wg)(),(0,r.iD)("img",S)):((0,r.wg)(),(0,r.iD)("img",D))])])],2)}}}),A=n(3744);const P=(0,A.Z)(E,[["__scopeId","data-v-0d35dc27"]]);var T=P},275:function(e,t,n){e.exports=n.p+"img/minus.92646b05.svg"},9349:function(e,t,n){e.exports=n.p+"img/pause.a3e7e5ce.svg"},8831:function(e,t,n){e.exports=n.p+"img/play.90eaeecf.svg"},4355:function(e,t,n){e.exports=n.p+"img/plus.d69b87fa.svg"},9109:function(e,t,n){e.exports=n.p+"img/volume-off.3cf7555a.svg"},8142:function(e,t,n){e.exports=n.p+"img/volume-up.e2fecb12.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,u){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],u=e[c][2];for(var a=!0,s=0;s<r.length;s++)(!1&u||i>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,u<i&&(i=u));if(a){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[r,o,u]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy.e6bbc6f8.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".1b5d7e90.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="pomodoro:";n.l=function(r,o,u,i){if(e[r])e[r].push(o);else{var a,s;if(void 0!==u)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+u){a=f;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+u),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)n();else{var i=u&&("load"===u.type?"missing":u.type),a=u&&u.target&&u.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=a,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=u,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],u=o.getAttribute("data-href");if(u===e||u===t)return o}},r=function(r){return new Promise((function(o,u){var i=n.miniCssF(r),a=n.p+i;if(t(i,a))return o();e(r,a,o,u)}))},o={143:0};n.f.miniCss=function(e,t){var n={153:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=u);var i=n.p+n.u(t),a=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,i=r[0],a=r[1],s=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var c=s(n)}for(t&&t(r);l<i.length;l++)u=i[l],n.o(e,u)&&e[u]&&e[u][0](),e[i[l]]=0;return n.O(c)},r=self["webpackChunkpomodoro"]=self["webpackChunkpomodoro"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2545)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.22174953.js.map