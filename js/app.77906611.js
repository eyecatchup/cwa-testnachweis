(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],u=0,v=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"afc9756c"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"53f5":function(t,e,n){t.exports=n.p+"img/ic_test_result_illustration_negative.d641a084.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{staticClass:"elevation-1",attrs:{app:"",color:"toolbar",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://www.coronawarn.app/assets/img/icons/favicon-192x192.png",transition:"scale-transition",width:"40"}}),n("v-toolbar-title",{staticClass:"app-bar-title"},[n("span",{staticClass:"top"},[t._v("CORONA")]),n("span",{staticClass:"bottom"},[t._v("WARN-APP")])])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"contrasttext"}},[t._v("mdi-share-variant")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"contrasttext"}},[t._v("mdi-dots-vertical")])],1)],1),n("v-main",[n("HelloWorld")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"cwa_low_risk",dark:""}},[a("v-card-title",{staticClass:"text-h5 mb-4"},[t._v("\n            Niedriges Risiko\n          ")]),a("v-card-subtitle",[a("ul",[a("li",[t._v("Keine Risiko-Begegnungen")]),a("li",[t._v("Aktualisiert: Heute, 06:30")])])])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{light:""},on:{click:function(e){return t.toggleResultOverlay()}}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between mr-12"},[a("div",[a("v-card-title",{staticClass:"text-h5 mb-4"},[t._v("\n                Schnelltest\n              ")]),a("v-card-subtitle",[a("div",{staticClass:"befund"},[a("span",{},[t._v("Befund")]),a("span",{staticClass:"text-h5"},[t._v("SARS-CoV-2")]),a("span",{staticClass:"text-h6 mb-4 clr-negative"},[t._v("Negativ")]),a("span",{},[t._v("Das Virus SARS-CoV-2 wurde bei Ihnen nicht nachgewiesen.")]),a("br"),a("span",{},[t._v("Durchgeführt am "+t._s(t.testDate))])])])],1),a("img",{staticClass:"ma-3 card-image",attrs:{alt:"",src:n("53f5")}})])])],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{light:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between mb-1 mr-12"},[a("div",[a("v-card-title",{staticClass:"text-h5 mb-4"},[t._v("\n                Test registrieren\n              ")]),a("v-card-subtitle",[t._v("\n                Nutzen Sie die App, um Ihre Testergebnisse abrufen und schneller warnen zu können.\n              ")])],1),a("img",{staticClass:"ma-3 card-image",attrs:{alt:"",src:n("cecd")}})]),a("v-btn",{staticClass:"my-botton mb-4",attrs:{elevation:"0",color:"btn_primary",dark:""}},[t._v("NÄCHSTE SCHRITTE")])],1)],1)],1)],1),t.resultOverlayOpen?a("div",{staticClass:"result-overlay"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.toggleResultOverlay()}}},[a("v-icon",{attrs:{color:"contrasttext"}},[t._v("mdi-close")])],1),a("h3",{staticClass:"text-h6"},[t._v("Ihr Testergebnis")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{light:""}},[a("v-card-title",{staticClass:"text-h5 mb-4"},[t._v("\n              Schnelltest\n            ")]),a("v-card-subtitle",[a("div",{staticClass:"befund"},[a("span",{},[t._v("Befund")]),a("span",{staticClass:"text-h5"},[t._v("SARS-CoV-2")]),a("span",{staticClass:"text-h6 mb-4 clr-negative"},[t._v("Negativ")]),a("span",{},[t._v("Das Virus SARS-CoV-2 wurde bei Ihnen nicht nachgewiesen.")]),a("br"),a("div",{staticClass:"timer text-center"},[a("div",{staticClass:"counter"},[a("span",{staticClass:"pt-2"},[t._v("Ergebnis liegt vor seit")]),a("span",{staticClass:"mt-1 text-h4 ellapsed-time",staticStyle:{width:"135px",display:"inline-block"}},[t._v("21:07:15")]),a("div",{staticClass:"d-flex flex-no-wrap justify-space-between pb-2",staticStyle:{color:"rgba(255, 255, 255, 0.6)",width:"135px","margin-left":"calc(100% - 225.5px)"}},[a("div",[t._v("Std")]),a("div",[t._v("Min")]),a("div",[t._v("Sek")])])]),a("div",{staticClass:"ausgestellt"},[a("span",{staticClass:"pt-2 pb-2"},[t._v("Ausgestellt: "+t._s(t.testDate)+", 01:32 Uhr")])])])])])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text-h5 pb-2"},[t._v("\n            Nachweis-Funktion\n          ")]),a("p",[t._v("Sie können den hier angezeigten Befund auch als Nachweisi für das Vorliegen eines negativen Schnelltest-Ergebnisses verwenden.")]),a("v-btn",{staticClass:"my-botton full-width mb-4",attrs:{elevation:"0",color:"btn_primary",dark:""}},[t._v("TEST ENTFERNEN")])],1)],1)],1)],1):t._e()],1)},i=[],c={name:"HelloWorld",data:function(){return{resultOverlayOpen:!1}},computed:{testDate:function(){return(new Date).toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})}},methods:{toggleResultOverlay:function(){this.resultOverlayOpen=!this.resultOverlayOpen}}},l=c,u=(n("a60d"),n("2877")),d=n("6544"),v=n.n(d),p=n("8336"),f=n("b0af"),g=n("99d9"),b=n("62ad"),h=n("a523"),m=n("132d"),_=n("0fd9"),w=Object(u["a"])(l,o,i,!1,null,"320303f4",null),C=w.exports;v()(w,{VBtn:p["a"],VCard:f["a"],VCardSubtitle:g["a"],VCardTitle:g["b"],VCol:b["a"],VContainer:h["a"],VIcon:m["a"],VRow:_["a"]});var y={name:"App",components:{HelloWorld:C},data:function(){return{}}},x=y,k=(n("5c00"),n("7496")),F=n("40dc"),S=n("adda"),O=n("f6c4"),A=n("2fa4"),V=n("2a7f"),j=Object(u["a"])(x,r,s,!1,null,"778a8b74",null),B=j.exports;v()(j,{VApp:k["a"],VAppBar:F["a"],VBtn:p["a"],VIcon:m["a"],VImg:S["a"],VMain:O["a"],VSpacer:A["a"],VToolbarTitle:V["a"]});var T=n("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},D=[],N={name:"home",components:{HelloWorld:C}},R=N,P=Object(u["a"])(R,E,D,!1,null,null,null),H=P.exports;a["a"].use(T["a"]);var I=new T["a"]({routes:[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),W=n("9483");Object(W["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var M=n("f309");a["a"].use(M["a"]);var L={icons:{iconfont:"mdi"},theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",toolbar:"#fff",contrasttext:"#212121",cwa_green:"#6ACC8B",cwa_grey:"#B8C8D9",cwa_dark_grey:"#3F3F43",cwa_pink:"#FF919A",cwa_high_risk:"#BD1200",cwa_low_risk:"#2E854B",btn_primary:"#007FAD"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",toolbar:"#212121",contrasttext:"#fff",cwa_green:"#6ACC8B",cwa_grey:"#B8C8D9",cwa_dark_grey:"#3F3F43",cwa_pink:"#FF919A",cwa_high_risk:"#BD1200",cwa_low_risk:"#6ACC8B",btn_primary:"#007FAD"}}}},$=new M["a"](L);a["a"].config.productionTip=!1,new a["a"]({router:I,vuetify:$,render:function(t){return t(B)}}).$mount("#app")},"5c00":function(t,e,n){"use strict";n("651b")},"651b":function(t,e,n){},9876:function(t,e,n){},a60d:function(t,e,n){"use strict";n("9876")},cecd:function(t,e,n){t.exports=n.p+"img/ic_main_illustration_warnende_personen.ccdd17ba.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.77906611.js.map