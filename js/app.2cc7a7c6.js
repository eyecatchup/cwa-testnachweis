(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/cwa-testnachweis/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3f5d":function(t,e,n){"use strict";n("ce53")},4597:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{staticClass:"elevation-1",attrs:{app:"",color:"toolbar",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Corona Warn App Logo",contain:"",src:"https://www.coronawarn.app/assets/img/icons/favicon-192x192.png",transition:"scale-transition",width:"40"}}),n("v-toolbar-title",{staticClass:"app-bar-title"},[n("span",{staticClass:"top"},[t._v("CORONA")]),n("span",{staticClass:"bottom"},[t._v("WARN-APP")])])],1),n("v-spacer"),n("v-btn",{attrs:{"x-small":"",icon:""}},[n("v-icon",{attrs:{color:"contrasttext"}},[t._v("mdi-share-variant")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"contrasttext"}},[t._v("mdi-dots-vertical")])],1)],1),n("v-main",[n("CWA")],1),n("v-bottom-navigation",{staticClass:"justify-space-between",model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-btn",{attrs:{value:"recent"}},[n("span",{staticStyle:{color:"#007FAD","padding-left":"16px","padding-right":"16px"}},[t._v("Startseite")]),n("v-icon",{attrs:{color:"#007FAD"}},[t._v("mdi-home")])],1),n("v-btn",{attrs:{value:"favorites"}},[n("span",{staticStyle:{color:"#999999","padding-left":"16px","padding-right":"16px"}},[t._v("Check-In")]),n("v-icon",{attrs:{color:"#999999"}},[t._v("mdi-qrcode")])],1),n("v-btn",{attrs:{value:"nearby"}},[n("span",{staticStyle:{color:"#999999","padding-left":"16px","padding-right":"16px"}},[t._v("Tagebuch")]),n("v-icon",{attrs:{color:"#999999"}},[t._v("mdi-book")])],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"cwa_low_risk",dark:""}},[a("v-card-title",{staticClass:"text-h5 mb-5 pt-5"},[t._v("\n            Niedriges Risiko\n\n            "),a("v-icon",{staticStyle:{position:"absolute",right:"16px"},attrs:{dark:""}},[t._v("mdi-arrow-right")])],1),a("v-card-subtitle",[a("ul",{staticClass:"risk mb-2"},[a("li",[t._v("Keine Risiko-Begegnungen")]),a("li",[t._v("Aktualisiert: Heute, 06:30")])])])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{light:""},on:{click:function(e){return e.preventDefault(),t.toggleResultOverlay()}}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between mr-12"},[a("div",[a("v-card-title",{staticClass:"text-h5 mb-4"},[t._v("\n                Schnelltest\n              ")]),a("v-card-subtitle",[a("div",{staticClass:"befund"},[a("span",{},[t._v("Befund")]),a("span",{staticClass:"text-h6 text-black"},[t._v("SARS-CoV-2")]),a("span",{staticClass:"text-h6 mb-4 clr-negative"},[t._v("Negativ")]),a("span",{},[t._v("Das Virus SARS-CoV-2 wurde bei Ihnen nicht nachgewiesen.")]),a("br"),a("span",{},[t._v("Durchgeführt am "+t._s(t.testDate))])])])],1),a("img",{staticClass:"ma-3 card-image elevation-0",attrs:{alt:"",src:n("c5cb")}})])])],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{light:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between mb-1 mr-12"},[a("div",[a("v-card-title",{staticClass:"text-h5 mb-4"},[t._v("\n                Test registrieren\n              ")]),a("v-card-subtitle",[t._v("\n                Nutzen Sie die App, um Ihre Testergebnisse abrufen und schneller warnen zu können.\n              ")])],1),a("img",{staticClass:"ma-3 card-image",attrs:{alt:"",src:n("dc80")}})]),a("v-btn",{staticClass:"my-botton mb-4",attrs:{elevation:"0",color:"btn_primary",dark:""}},[t._v("NÄCHSTE SCHRITTE")])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{light:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between mb-1"},[a("div",[a("v-card-title",{staticClass:"text-h5 mb-4"},[t._v("\n                Was ist das hier?\n              ")]),a("v-card-subtitle",[t._v("\n                Keine Zeit gehabt, zum Testzentrum zu gehen? Kein Problem! Benutzen Sie einfach diesen schlechten Web-Klon der offiziellen deutschen Corona Warn App, um jederzeit ein aktuelles, negatives Testergebnis vorlegen zu können. Den Unterschied merkt eh keiner.\n              ")])],1)]),a("v-btn",{staticClass:"my-botton mb-4",attrs:{elevation:"0",color:"btn_primary",dark:""},on:{click:function(e){e.preventDefault(),t.settingsDialogOpen=!0}}},[t._v("ERGEBNIS PERSONALISIEREN")])],1)],1),a("v-col",{staticClass:"mb-16",attrs:{cols:"12"}},[a("v-card",{attrs:{light:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between mb-1"},[a("div",[a("v-card-title",{staticClass:"text-h5 mb-4"},[t._v("\n                Disclaimer\n              ")]),a("v-card-subtitle",[a("p",[t._v("Ich will ausdrücklich niemanden dazu ermutigen, diese Seite zu missbrauchen, um sich unrechtmäßig Zutritt zu Angeboten zu verschaffen, bei denen der Zutritt nach der Coronaschutzverordnung an einen Negativtest geknüpft ist.")]),a("p",[t._v("Es soll lediglich "),a("b",[t._v("anschaulich")]),t._v(" demonstriert werden, dass die Implementierung der Schnelltestergebnisse in der CWA im aktuellen Stand noch weniger als sicherer Nachweis dienen kann, wie ein Impfausweis aus Papier.")]),a("p",[t._v("Beides ist nicht im Ansatz (fälschungs)sicher!")]),a("p",[t._v("Wenn ich diese Webseite auf einem Smartphone im Vollbildmodus aufrufe, wird kaum jemand den Unterschied zur echten CWA erkennen (können).")])])],1)]),a("v-btn",{staticClass:"my-botton mb-4",attrs:{elevation:"0",color:"btn_primary",dark:""},on:{click:function(e){return t.goToGithub()}}},[t._v("SOURCE CODE")])],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.settingsDialogOpen,callback:function(e){t.settingsDialogOpen=e},expression:"settingsDialogOpen"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Persönliche Daten")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Vor- und Nachname*",hint:"Zum Beispiel: Max Mustermann","persistent-hint":"",required:""},model:{value:t.nameInput,callback:function(e){t.nameInput=e},expression:"nameInput"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Geburtsdatum*",hint:"Format: 01.10.1967","persistent-hint":"",required:""},model:{value:t.bornInput,callback:function(e){t.bornInput=e},expression:"bornInput"}})],1)],1)],1),a("small",[t._v("*Pflichtfelder, wird nur lokal gespeichert")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){e.preventDefault(),t.settingsDialogOpen=!1}}},[t._v("\n            Abbrechen\n          ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.preventDefault(),t.saveSettingsDialog()}}},[t._v("\n            Speichern\n          ")])],1)],1)],1)],1),t.resultOverlayOpen?a("div",{staticClass:"result-overlay"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return e.preventDefault(),t.toggleResultOverlay()}}},[a("v-icon",{attrs:{color:"contrasttext"}},[t._v("mdi-close")])],1),a("h3",{staticClass:"text-h6"},[t._v("Ihr Testergebnis")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"#F1F2F4"}},[a("v-card-title",{staticClass:"text-h5 mb-4"},[t._v("\n              Schnelltest\n            ")]),a("v-card-subtitle",[a("div",{staticClass:"befund"},[a("span",{},[t._v("Befund")]),a("span",{staticClass:"text-h6 text-black"},[t._v("SARS-CoV-2")]),a("span",{staticClass:"text-h6 mb-4 clr-negative"},[t._v("Negativ")]),t.hasName?a("div",[a("span",{staticClass:"pb-2"},[a("b",[t._v(t._s(t.name))]),t._v(", geb. "+t._s(t.born))])]):t._e(),a("span",{},[t._v("Das Virus SARS-CoV-2 wurde bei Ihnen nicht nachgewiesen.")]),a("br"),a("div",{staticClass:"timer text-center"},[a("div",{staticClass:"counter"},[a("span",{staticClass:"pt-2"},[t._v("Ergebnis liegt vor seit")]),a("span",{staticClass:"mt-1 text-h4 ellapsed-time"},[t._v(t._s(t.getHours)+":"+t._s(t.getMinutes)+":"+t._s(t.getSeconds))]),a("div",{staticClass:"d-flex flex-no-wrap justify-space-between pb-2",staticStyle:{color:"rgba(255, 255, 255, 0.6)",width:"135px","margin-left":"calc(50% - 67.5px)"}},[a("div",[t._v("Std")]),a("div",[t._v("Min")]),a("div",[t._v("Sek")])])]),a("div",{staticClass:"ausgestellt"},[a("span",{staticClass:"pt-2 pb-2"},[t._v("Ausgestellt: "+t._s(t.testDate)+", 01:32 Uhr")])])])])])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text-h5 pb-2"},[t._v("\n            Nachweis-Funktion\n          ")]),a("p",[t._v("Sie können den hier angezeigten Befund auch als Nachweis für das Vorliegen eines negativen Schnelltest-Ergebnisses verwenden.")]),a("v-btn",{staticClass:"my-botton full-width mb-4",attrs:{elevation:"0",color:"btn_primary",dark:""}},[t._v("TEST ENTFERNEN")])],1)],1)],1)],1):t._e()],1)},o=[],c=(n("f576"),{name:"CWA",data:function(){return{resultOverlayOpen:!1,settingsDialogOpen:!1,currentSeconds:0,bornInput:"",nameInput:""}},computed:{testDate:function(){return(new Date).toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})},getSeconds:function(){return(""+this.currentSeconds).padStart(2,"0")},getMinutes:function(){var t=this.$date(),e=t.format("YYYY-MM-DD"),n=t.format("HH:mm:ss"),a=this.$date(e+" 01:32:00"),r=this.$date(e+" "+n),s=-1*a.diff(r,"minutes"),i=Math.floor(s/60),o=s-60*i;return(""+o).padStart(2,"0")},getHours:function(){var t=this.$date(),e=t.format("YYYY-MM-DD"),n=t.format("HH:mm:ss"),a=this.$date(e+" 01:32:00"),r=this.$date(e+" "+n);return(""+-1*a.diff(r,"hours")).padStart(2,"0")},hasName:function(){try{var t=localStorage.getItem("nameInput");return!(!t||!t.length)}catch(e){return!1}},name:function(){return this.nameInput},born:function(){return this.bornInput}},methods:{toggleResultOverlay:function(){this.resultOverlayOpen=!this.resultOverlayOpen},goToGithub:function(){location.href="https://github.com/eyecatchup/cwa-testnachweis"},saveSettingsDialog:function(){this.bornInput.length&&this.nameInput.length&&(localStorage.setItem("bornInput",this.bornInput),localStorage.setItem("nameInput",this.nameInput)),location.reload()}},mounted:function(){var t=this;setInterval((function(){59===t.currentSeconds?t.currentSeconds=0:t.currentSeconds++}),1e3),this.hasName&&(this.bornInput=localStorage.getItem("bornInput"),this.nameInput=localStorage.getItem("nameInput"))}}),l=c,u=(n("3f5d"),n("2877")),d=n("6544"),v=n.n(d),p=n("8336"),f=n("b0af"),h=n("99d9"),g=n("62ad"),m=n("a523"),b=n("169a"),_=n("132d"),w=n("0fd9"),C=n("2fa4"),x=n("8654"),k=Object(u["a"])(l,i,o,!1,null,"318f6b0c",null),y=k.exports;v()(k,{VBtn:p["a"],VCard:f["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VCol:g["a"],VContainer:m["a"],VDialog:b["a"],VIcon:_["a"],VRow:w["a"],VSpacer:C["a"],VTextField:x["a"]});var S={name:"App",components:{CWA:y},data:function(){return{value:"recent"}}},I=S,D=(n("8a76"),n("7496")),A=n("40dc"),F=n("b81c"),O=n("adda"),V=n("f6c4"),N=n("2a7f"),B=Object(u["a"])(I,r,s,!1,null,"255c7c37",null),T=B.exports;v()(B,{VApp:D["a"],VAppBar:A["a"],VBottomNavigation:F["a"],VBtn:p["a"],VIcon:_["a"],VImg:O["a"],VMain:V["a"],VSpacer:C["a"],VToolbarTitle:N["a"]});var j=n("9483");Object(j["a"])("".concat("/cwa-testnachweis/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var E=n("f309");a["a"].use(E["a"]);var R={icons:{iconfont:"mdi"},theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",toolbar:"#fff",contrasttext:"#212121",cwa_green:"#6ACC8B",cwa_grey:"#B8C8D9",cwa_dark_grey:"#3F3F43",cwa_pink:"#FF919A",cwa_high_risk:"#BD1200",cwa_low_risk:"#2E854B",btn_primary:"#007FAD"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",toolbar:"#212121",contrasttext:"#fff",cwa_green:"#6ACC8B",cwa_grey:"#B8C8D9",cwa_dark_grey:"#3F3F43",cwa_pink:"#FF919A",cwa_high_risk:"#BD1200",cwa_low_risk:"#6ACC8B",btn_primary:"#007FAD"}}}},z=new E["a"](R),M=n("9035");a["a"].use(M["a"]),a["a"].config.productionTip=!1,new a["a"]({vuetify:z,render:function(t){return t(T)}}).$mount("#app")},"8a76":function(t,e,n){"use strict";n("4597")},c5cb:function(t,e,n){t.exports=n.p+"img/ic_test_result_illustration_negative.b7d9ad34.png"},ce53:function(t,e,n){},dc80:function(t,e,n){t.exports=n.p+"img/ic_main_illustration_untested.47c431d8.png"}});
//# sourceMappingURL=app.2cc7a7c6.js.map