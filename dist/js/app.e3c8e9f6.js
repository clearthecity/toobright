(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],d=0,l=[];d<i.length;d++)s=i[d],o[s]&&l.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},s={app:0},o={app:0},a=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a1c160b6","chunk-2d0a3acc":"be9ee791","chunk-4b05cf58":"8f4a3c0a","chunk-7d04ae50":"24b972ae"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,"chunk-4b05cf58":1,"chunk-7d04ae50":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"08904422","chunk-2d0a3acc":"31d6cfe0","chunk-4b05cf58":"4cc1e7f5","chunk-7d04ae50":"afe7644b"}[e]+".css",o=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){c=l[i],d=c.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete s[e],f.parentNode.removeChild(f),n(a)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)}).then(function(){s[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=a);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e),c=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");a.type=r,a.request=s,n[1](a)}o[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-container",{attrs:{fluid:""}},[n("router-view")],1)],1)},o=[],a={name:"App",components:{},data(){return{appStyle:{backgroundColor:"lightgrey"}}}},i=a,u=(n("034f"),n("2877")),c=Object(u["a"])(i,s,o,!1,null,null,null),d=c.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("b-container",[0==e.step?r("div",{staticClass:"row home-text",attrs:{id:"no-coords-row"}},[r("NoCoordinates",{attrs:{insecure:e.insecure}})],1):e._e(),r("transition",{attrs:{name:"fade05"}},[1==e.step?r("div",{staticClass:"row home-text",attrs:{id:"start-btn-row"}},[r("div",{staticClass:"col"},[r("b-button",{attrs:{pill:"",variant:"outline-danger",id:"start-btn"},on:{click:e.runProgram}},[e._v("don’t drive into the sun")])],1)]):e._e()]),r("div",{staticClass:"home-text",attrs:{id:"output"}},[r("transition",{attrs:{name:"fade05"}},[e.step>=2?r("p",[r("span",[e._v(e._s(e.userCoordinateString))]),e._v("\n     \n    "),r("a",{staticClass:"link-underline",attrs:{href:e.mapHref,target:"blank"}},[r("img",{staticStyle:{height:"0.9rem"},attrs:{src:n("b2e9"),alt:""}}),e._v("\n        map\n    ")])]):e._e()]),r("transition",{attrs:{name:"fade05"}},[e.step>=3?r("p",[r("span",{attrs:{id:"altitude"}},[e._v(" "+e._s(e.altitudeString)+" ")])]):e._e()]),r("transition",{attrs:{name:"fade05"}},[e.step>=4?r("div",[r("SafeToDrive",{attrs:{sunAltitude:e.sunAltitude,sunAzimuth:e.sunAzimuth,userLatitude:e.userLatitude,userLongitude:e.userLongitude}})],1):e._e()])],1)],1)],1)},b=[];const j=1,h=2,p=3,m=4,g=0,v=()=>{return"localhost"===location.hostname||"127.0.0.1"===location.hostname},k=()=>{return"https"!==location.protocol&&"https:"!==location.protocol};var y={name:"home",components:{SafeToDrive:()=>n.e("chunk-2d0a3acc").then(n.bind(null,"02d8")),NoCoordinates:()=>n.e("chunk-4b05cf58").then(n.bind(null,"f8fb"))},data(){return{step:j,insecure:!1,userLatitude:null,userLongitude:null,sunAltitude:null,sunAzimuth:null}},computed:{userCoordinateString:function(){if(this.userLatitude&&this.userLongitude){let e="you are here: ("+this.userLatitude.toFixed(2)+String.fromCharCode("176");return e+=", "+this.userLongitude.toFixed(2)+String.fromCharCode("176")+")",e}return""},mapHref:function(){return this.userLatitude&&this.userLongitude?"https://www.openstreetmap.org/#map=14/"+this.userLatitude+"/"+this.userLongitude:""},altitudeString:function(){return this.sunAltitude?"altitude of the sun: "+this.sunAltitude.toFixed(2)+String.fromCharCode("176"):""}},methods:{runProgram:function(){if(!v()&&k())return this.insecure=!0,void(this.step=g);const e=this;e.getGPSCoordinates().then(function(t){return e.updateUserCoords(t),e.step=h,t},function(t){e.step=g}).then(function(t){e.getSunPosition(t.latitude,t.longitude).then(function(t){e.updateSunPosition(t),setTimeout(()=>{e.step=p},1e3),setTimeout(()=>{e.step=m},1500)},function(e){console.log(e)})})},getGPSCoordinates:function(){return new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){let n=t.coords;e(n)},function(e){switch(e.code){case e.PERMISSION_DENIED:t(Error("Permission denied"));break;case e.PERMISSION_UNAVAILABLE:t(Error("Permission unavailable"));break;case e.TIMEOUT:t(Error("Timeout"));break;default:t(Error("Unknown geolocation error"));break}}):t(Error("No navigator"))})},getAltitude:function(e,t){return new Promise((n,r)=>{setTimeout(()=>{e&&t||r(Error("Cannot read coordinates"));var s=this.$suncalc;let o=new Date,a=s.getPosition(o,e,t);a||r(Error("getAltitude: Cannot get sun position"));let i=180*a.altitude/Math.PI;n(i)},1e3)})},getSunPosition:function(e,t){return new Promise((n,r)=>{setTimeout(()=>{e&&t||r(Error("Cannot read coordinates"));var s=this.$suncalc;let o=new Date,a=s.getPosition(o,e,t);a||r(Error("Cannot get sun position")),n(a)},1e3)})},updateUserCoords:function(e){this.userLatitude=e.latitude,this.userLongitude=e.longitude},updateSunPosition:function(e){this.sunAltitude=180*e.altitude/Math.PI,this.sunAzimuth=180*e.azimuth/Math.PI}}},w=y,C=(n("b450"),Object(u["a"])(w,f,b,!1,null,"15b35d09",null)),S=C.exports;r["default"].use(l["a"]);var P=new l["a"]({mode:"history",routes:[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),_=n("9483");Object(_["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var E=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(E["a"]);const z=n("c956");Object.defineProperty(r["default"].prototype,"$suncalc",{value:z});const A=n("c1df");Object.defineProperty(r["default"].prototype,"$moment",{value:A}),r["default"].config.productionTip=!1,new r["default"]({router:P,render:e=>e(d)}).$mount("#app")},"64a9":function(e,t,n){},b2e9:function(e,t,n){e.exports=n.p+"img/new_window.a302627e.svg"},b450:function(e,t,n){"use strict";var r=n("b7dd"),s=n.n(r);s.a},b7dd:function(e,t,n){}});
//# sourceMappingURL=app.e3c8e9f6.js.map