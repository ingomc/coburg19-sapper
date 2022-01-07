import{_ as n,a as e,b as t,c as a,i as c,s as r,d as i,S as s,e as l,f as o,g as u,h as f,j as h,k as v,l as d,m,n as g,t as p,o as $,p as w,q as E,r as b,u as x,v as I,w as D,x as y,y as k,z as A,A as C,M as z,B as L,C as V,D as S,E as N,F as R,G as P,H as _,I as T,J as M,K as B,L as H,N as F,O as Z}from"./client.567ca5f3.js";import"./asyncToGenerator.5229e80b.js";import{t as G,S as O,T as K}from"./Timetravel.ff1b0607.js";function j(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,r=e(n);if(a){var i=e(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return t(this,c)}}function W(n){var e,t;return{c:function(){e=l("svg"),t=l("path"),this.h()},l:function(n){e=o(n,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var a=u(e);t=o(a,"path",{d:!0,fill:!0},1),u(t).forEach(f),a.forEach(f),this.h()},h:function(){h(t,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),h(t,"fill","currentColor"),h(e,"class","danger-icon svelte-13r15sk"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),h(e,"aria-hidden","true"),h(e,"focusable","false"),h(e,"role","img"),h(e,"preserveAspectRatio","xMidYMid meet"),h(e,"viewBox","0 0 24 24"),v(e,"transform","rotate(360deg)")},m:function(n,a){d(n,e,a),m(e,t)},d:function(n){n&&f(e)}}}function U(n){var e,t,a=n[0].district+"";return{c:function(){e=g("div"),t=p(a),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var c=u(e);t=$(c,a),c.forEach(f),this.h()},h:function(){h(e,"class","area svelte-13r15sk")},m:function(n,a){d(n,e,a),m(e,t)},p:function(n,e){1&e&&a!==(a=n[0].district+"")&&w(t,a)},d:function(n){n&&f(e)}}}function Y(n){var e,t,a,c=(n[0].betten_frei>0?"(".concat(Number(n[0].Anteil_betten_frei).toFixed(0),"%) ").concat(n[0].betten_frei):0)+"";return{c:function(){e=g("div"),t=p("Betten frei:\n            "),a=p(c),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var r=u(e);t=$(r,"Betten frei:\n            "),a=$(r,c),r.forEach(f),this.h()},h:function(){h(e,"class","cases svelte-13r15sk")},m:function(n,c){d(n,e,c),m(e,t),m(e,a)},p:function(n,e){1&e&&c!==(c=(n[0].betten_frei>0?"(".concat(Number(n[0].Anteil_betten_frei).toFixed(0),"%) ").concat(n[0].betten_frei):0)+"")&&w(a,c)},d:function(n){n&&f(e)}}}function Q(n){var e,t;return{c:function(){e=g("div"),t=p("Keine Intensiv-Betten vorhanden"),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var a=u(e);t=$(a,"Keine Intensiv-Betten vorhanden"),a.forEach(f),this.h()},h:function(){h(e,"class","cases svelte-13r15sk")},m:function(n,a){d(n,e,a),m(e,t)},p:D,d:function(n){n&&f(e)}}}function q(n){var e,t,a,c,r,i,s,l,v=Number(n[0].Anteil_COVID_betten).toFixed(0)+"",x=n[0].faelle_covid_aktuell+"";return{c:function(){e=g("div"),t=p("Intensiv-Betten belegt mit Covid-19:\n            "),a=g("span"),c=p("("),r=p(v),i=p("%)"),s=E(),l=p(x),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var h=u(e);t=$(h,"Intensiv-Betten belegt mit Covid-19:\n            "),a=o(h,"SPAN",{class:!0});var d=u(a);c=$(d,"("),r=$(d,v),i=$(d,"%)"),d.forEach(f),s=b(h),l=$(h,x),h.forEach(f),this.h()},h:function(){h(a,"class","percent"),h(e,"class","cases svelte-13r15sk")},m:function(n,o){d(n,e,o),m(e,t),m(e,a),m(a,c),m(a,r),m(a,i),m(e,s),m(e,l)},p:function(n,e){1&e&&v!==(v=Number(n[0].Anteil_COVID_betten).toFixed(0)+"")&&w(r,v),1&e&&x!==(x=n[0].faelle_covid_aktuell+"")&&w(l,x)},d:function(n){n&&f(e)}}}function J(n){var e,t;return{c:function(){e=l("svg"),t=l("path"),this.h()},l:function(n){e=o(n,"svg",{class:!0,viewBox:!0},1);var a=u(e);t=o(a,"path",{d:!0},1),u(t).forEach(f),a.forEach(f),this.h()},h:function(){h(t,"d","M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"),h(e,"class","arrow-right-mini svelte-13r15sk"),h(e,"viewBox","-100.9 99.1 61.9 105.9")},m:function(n,a){d(n,e,a),m(e,t)},d:function(n){n&&f(e)}}}function X(n){var e,t,a,c,r,i,s,l,v,y,k,A,C,z,L,V,S,N,R,P,_,T,M,B,H,F=Number(n[0].incidence).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"",Z=n[0].name+"",G=(n[0].newCases>0?n[0].newCases.toLocaleString("de-DE"):0)+"",O=n[0].incidence>=200&&n[0].incidence<1e3&&W(),K=void 0!==n[0].district&&U(n),j=null!==n[0].faelle_covid_aktuell&&void 0!==n[0].faelle_covid_aktuell&&Y(n);function X(n,e){return null!==n[0].faelle_covid_aktuell&&void 0!==n[0].faelle_covid_aktuell?q:void 0!==n[0].faelle_covid_aktuell?Q:void 0}var nn=X(n),en=nn&&nn(n),tn=void 0!==n[0].slug&&J();return{c:function(){e=g("div"),t=g("canvas"),a=E(),c=g("div"),r=g("div"),i=g("div"),s=g("h3"),O&&O.c(),l=E(),v=p(F),y=E(),k=g("div"),K&&K.c(),A=E(),C=g("div"),z=p(Z),L=E(),V=g("div"),S=g("div"),N=g("div"),R=p("Neue Fälle:\n          "),P=p(G),_=E(),j&&j.c(),T=E(),M=g("div"),en&&en.c(),B=E(),tn&&tn.c(),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var h=u(e);t=o(h,"CANVAS",{class:!0}),u(t).forEach(f),a=b(h),c=o(h,"DIV",{class:!0});var d=u(c);r=o(d,"DIV",{class:!0});var m=u(r);i=o(m,"DIV",{class:!0});var g=u(i);s=o(g,"H3",{class:!0});var p=u(s);O&&O.l(p),l=b(p),v=$(p,F),p.forEach(f),g.forEach(f),y=b(m),k=o(m,"DIV",{class:!0});var w=u(k);K&&K.l(w),A=b(w),C=o(w,"DIV",{class:!0});var E=u(C);z=$(E,Z),E.forEach(f),w.forEach(f),m.forEach(f),L=b(d),V=o(d,"DIV",{class:!0});var x=u(V);S=o(x,"DIV",{class:!0});var I=u(S);N=o(I,"DIV",{class:!0});var D=u(N);R=$(D,"Neue Fälle:\n          "),P=$(D,G),D.forEach(f),_=b(I),j&&j.l(I),I.forEach(f),T=b(x),M=o(x,"DIV",{class:!0});var H=u(M);en&&en.l(H),H.forEach(f),x.forEach(f),B=b(d),tn&&tn.l(d),d.forEach(f),h.forEach(f),this.h()},h:function(){h(t,"class","canvas svelte-13r15sk"),h(s,"class","number svelte-13r15sk"),h(i,"class","column svelte-13r15sk"),h(C,"class","city svelte-13r15sk"),h(k,"class","column svelte-13r15sk"),h(r,"class","row svelte-13r15sk"),h(N,"class","cases svelte-13r15sk"),h(S,"class","column svelte-13r15sk"),h(M,"class","column svelte-13r15sk"),h(V,"class","row svelte-13r15sk"),h(c,"class","content svelte-13r15sk"),h(e,"class",H=x("card ".concat(n[2]))+" svelte-13r15sk")},m:function(o,u){d(o,e,u),m(e,t),n[5](t),m(e,a),m(e,c),m(c,r),m(r,i),m(i,s),O&&O.m(s,null),m(s,l),m(s,v),m(r,y),m(r,k),K&&K.m(k,null),m(k,A),m(k,C),m(C,z),m(c,L),m(c,V),m(V,S),m(S,N),m(N,R),m(N,P),m(S,_),j&&j.m(S,null),m(V,T),m(V,M),en&&en.m(M,null),m(c,B),tn&&tn.m(c,null)},p:function(n,t){var a=I(t,1)[0];n[0].incidence>=200&&n[0].incidence<1e3?O||((O=W()).c(),O.m(s,l)):O&&(O.d(1),O=null),1&a&&F!==(F=Number(n[0].incidence).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"")&&w(v,F),void 0!==n[0].district?K?K.p(n,a):((K=U(n)).c(),K.m(k,A)):K&&(K.d(1),K=null),1&a&&Z!==(Z=n[0].name+"")&&w(z,Z),1&a&&G!==(G=(n[0].newCases>0?n[0].newCases.toLocaleString("de-DE"):0)+"")&&w(P,G),null!==n[0].faelle_covid_aktuell&&void 0!==n[0].faelle_covid_aktuell?j?j.p(n,a):((j=Y(n)).c(),j.m(S,null)):j&&(j.d(1),j=null),nn===(nn=X(n))&&en?en.p(n,a):(en&&en.d(1),(en=nn&&nn(n))&&(en.c(),en.m(M,null))),void 0!==n[0].slug?tn||((tn=J()).c(),tn.m(c,null)):tn&&(tn.d(1),tn=null),4&a&&H!==(H=x("card ".concat(n[2]))+" svelte-13r15sk")&&h(e,"class",H)},i:D,o:D,d:function(t){t&&f(e),n[5](null),O&&O.d(),K&&K.d(),j&&j.d(),en&&en.d(),tn&&tn.d()}}}function nn(n,e,t){var a,c,r,i=e.data,s="warning";return n.$$set=function(n){"data"in n&&t(0,i=n.data)},n.$$.update=function(){if(27&n.$$.dirty){t(2,s="warning"),i.incidence<35&&t(2,s="info"),i.incidence>=50&&i.incidence<100&&t(2,s="danger"),i.incidence>=100&&t(2,s="superdanger"),i.allIncidences&&(t(3,c=Array.from(i.allIncidences.incidences.datasets[0].data,(function(n){return n.y}))),t(4,r=100*Math.ceil(Math.max.apply(Math,y(c))/100))),"undefined"!=typeof window&&void 0!==a&&function(){if(a||a.getContext){var n=a.width,e=a.height,t=a.getContext("2d");t.clearRect(-10,0,n+10,e),i.allIncidences&&(t.fillStyle=i.incidence>=100?"rgba(255,100,100,0.1)":"rgba(0,0,0,0.1)",t.beginPath(),t.moveTo(-10,e),c.reverse().forEach((function(a,i){t.lineTo(n/(c.length-1)*i,e-a/(r/e))})),t.lineTo(610,e),t.strokeStyle=i.incidence>=100?"rgba(255,100,100,0.2)":"rgba(0,0,0,0.2)",t.lineWidth=1,t.stroke(),t.fill())}}()}},[i,a,s,c,r,function(n){k[n?"unshift":"push"]((function(){t(1,a=n)}))}]}var en=function(e){n(l,s);var t=j(l);function l(n){var e;return a(this,l),e=t.call(this),c(i(e),n,nn,X,r,{data:0}),e}return l}();function tn(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,r=e(n);if(a){var i=e(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return t(this,c)}}function an(n){var e,t;return{c:function(){e=l("svg"),t=l("path"),this.h()},l:function(n){e=o(n,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var a=u(e);t=o(a,"path",{d:!0,fill:!0},1),u(t).forEach(f),a.forEach(f),this.h()},h:function(){h(t,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),h(t,"fill","currentColor"),h(e,"class","danger-icon svelte-10dxt8h"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),h(e,"aria-hidden","true"),h(e,"focusable","false"),h(e,"role","img"),h(e,"preserveAspectRatio","xMidYMid meet"),h(e,"viewBox","0 0 24 24"),v(e,"transform","rotate(360deg)")},m:function(n,a){d(n,e,a),m(e,t)},d:function(n){n&&f(e)}}}function cn(n){var e,t,a=n[0].district+"";return{c:function(){e=g("div"),t=p(a),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var c=u(e);t=$(c,a),c.forEach(f),this.h()},h:function(){h(e,"class","area svelte-10dxt8h")},m:function(n,a){d(n,e,a),m(e,t)},p:function(n,e){1&e&&a!==(a=n[0].district+"")&&w(t,a)},d:function(n){n&&f(e)}}}function rn(n){var e,t,a,c,r,i,s,l,v,y,k,A,C,z,L,V,S,N,R,P=Number(n[3]).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"",_=n[0].name+"",T=(n[0].newCases>0?n[0].newCases.toLocaleString("de-DE"):0)+"",M=n[0].incidence>=200&&n[0].incidence<1e3&&an(),B=void 0!==n[0].district&&cn(n);return{c:function(){e=g("div"),t=g("canvas"),a=E(),c=g("div"),r=g("div"),i=g("div"),s=g("h3"),M&&M.c(),l=E(),v=p(P),y=E(),k=g("div"),B&&B.c(),A=E(),C=g("div"),z=p(_),L=E(),V=g("div"),S=p("Neue Fälle: +"),N=p(T),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var h=u(e);t=o(h,"CANVAS",{class:!0}),u(t).forEach(f),a=b(h),c=o(h,"DIV",{class:!0});var d=u(c);r=o(d,"DIV",{class:!0});var m=u(r);i=o(m,"DIV",{class:!0});var g=u(i);s=o(g,"H3",{class:!0});var p=u(s);M&&M.l(p),l=b(p),v=$(p,P),p.forEach(f),g.forEach(f),y=b(m),k=o(m,"DIV",{class:!0});var w=u(k);B&&B.l(w),A=b(w),C=o(w,"DIV",{class:!0});var E=u(C);z=$(E,_),E.forEach(f),L=b(w),V=o(w,"DIV",{class:!0});var x=u(V);S=$(x,"Neue Fälle: +"),N=$(x,T),x.forEach(f),w.forEach(f),m.forEach(f),d.forEach(f),h.forEach(f),this.h()},h:function(){h(t,"class","canvas svelte-10dxt8h"),h(s,"class","number svelte-10dxt8h"),h(i,"class","column svelte-10dxt8h"),h(C,"class","city svelte-10dxt8h"),h(V,"class","cases svelte-10dxt8h"),h(k,"class","column svelte-10dxt8h"),h(r,"class","row svelte-10dxt8h"),h(c,"class","content svelte-10dxt8h"),h(e,"class",R=x("card ".concat(n[2]))+" svelte-10dxt8h")},m:function(o,u){d(o,e,u),m(e,t),n[7](t),m(e,a),m(e,c),m(c,r),m(r,i),m(i,s),M&&M.m(s,null),m(s,l),m(s,v),m(r,y),m(r,k),B&&B.m(k,null),m(k,A),m(k,C),m(C,z),m(k,L),m(k,V),m(V,S),m(V,N)},p:function(n,t){var a=I(t,1)[0];n[0].incidence>=200&&n[0].incidence<1e3?M||((M=an()).c(),M.m(s,l)):M&&(M.d(1),M=null),8&a&&P!==(P=Number(n[3]).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"")&&w(v,P),void 0!==n[0].district?B?B.p(n,a):((B=cn(n)).c(),B.m(k,A)):B&&(B.d(1),B=null),1&a&&_!==(_=n[0].name+"")&&w(z,_),1&a&&T!==(T=(n[0].newCases>0?n[0].newCases.toLocaleString("de-DE"):0)+"")&&w(N,T),4&a&&R!==(R=x("card ".concat(n[2]))+" svelte-10dxt8h")&&h(e,"class",R)},i:D,o:D,d:function(t){t&&f(e),n[7](null),M&&M.d(),B&&B.d()}}}function sn(n,e,t){var a,c,r=e.data,i=G(0,{duration:2e3,easing:C});A(n,i,(function(n){return t(3,a=n)}));var s,l,o="warning";return n.$$set=function(n){"data"in n&&t(0,r=n.data)},n.$$.update=function(){if(99&n.$$.dirty){i.set(r.incidence),t(2,o="warning"),r.incidence<35&&t(2,o="info"),r.incidence>=50&&r.incidence<100&&t(2,o="danger"),r.incidence>=100&&t(2,o="superdanger"),r.allIncidences&&(t(5,s=Array.from(r.allIncidences.incidences.datasets[0].data,(function(n){return n.y}))),t(6,l=100*Math.ceil(Math.max.apply(Math,y(s))/100))),"undefined"!=typeof window&&void 0!==c&&function(){if(c||c.getContext){var n=c.width,e=c.height,t=c.getContext("2d");t.clearRect(-10,0,n+10,e),r.allIncidences&&(t.fillStyle=r.incidence>=100?"rgba(255,100,100,0.1)":"rgba(0,0,0,0.1)",t.beginPath(),t.moveTo(-10,e),s.reverse().forEach((function(a,c){t.lineTo(n/(s.length-1)*c,e-a/(l/e))})),t.lineTo(610,e),t.strokeStyle=r.incidence>=100?"rgba(255,100,100,0.2)":"rgba(0,0,0,0.2)",t.lineWidth=1,t.stroke(),t.fill())}}()}},[r,c,o,a,i,s,l,function(n){k[n?"unshift":"push"]((function(){t(1,c=n)}))}]}var ln=function(e){n(l,s);var t=tn(l);function l(n){var e;return a(this,l),e=t.call(this),c(i(e),n,sn,rn,r,{data:0}),e}return l}();function on(n){var e=[];n.sort((function(n,e){return n.name<e.name?-1:(n.name,e.name,0)})),n.sort((function(n,e){return(""+n.district).localeCompare(e.district)})),n.sort((function(n,e){return(""+n.name).localeCompare(e.name)})),n.forEach((function(n){n.name.toLowerCase()=="Coburg".toLowerCase()?e.unshift(n):e.push(n)}));var t=e[0];return e.splice(0,1),e.splice(1,0,t),e}function un(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,r=e(n);if(a){var i=e(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return t(this,c)}}function fn(n){var e,t,a,c,r,i,s,l,v,y,k,A,C,z,L,V,S,N,R,P,_,T,M,B,H,F,Z,G,O,K,j,W,U,Y,Q,q,J,X,nn,en,tn,an,cn,rn,sn,ln,on,un=n[0].hospitalizationLast7Days+"",fn=n[0].currentIntensiveCarePatients+"",hn=n[0].currentIntensiveCarePatients+"";return{c:function(){e=g("div"),t=g("div"),a=g("div"),c=E(),r=g("div"),i=g("div"),s=g("p"),l=g("span"),v=p("Keine Werte überschritten"),k=E(),A=g("div"),C=g("div"),z=E(),L=g("div"),V=g("div"),S=g("span"),N=p("Neue Krankenhaus-Corona-Einweisungen in den letzten 7 Tagen"),R=E(),P=g("span"),_=g("span"),T=p(un),M=p("\n          / 1200"),B=E(),H=g("div"),F=g("span"),Z=p("COVID-19 Patienten auf Intensivstationen"),G=E(),O=g("span"),K=g("span"),j=p(fn),W=p("\n          / 450"),Y=E(),Q=g("div"),q=g("div"),J=E(),X=g("div"),nn=g("div"),en=g("span"),tn=p("COVID-19 Patienten auf Intensivstationen"),an=E(),cn=g("span"),rn=g("span"),sn=p(hn),ln=p("\n          / 600"),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var h=u(e);t=o(h,"DIV",{class:!0});var d=u(t);a=o(d,"DIV",{class:!0}),u(a).forEach(f),c=b(d),r=o(d,"DIV",{class:!0});var m=u(r);i=o(m,"DIV",{class:!0});var g=u(i);s=o(g,"P",{class:!0});var p=u(s);l=o(p,"SPAN",{class:!0});var w=u(l);v=$(w,"Keine Werte überschritten"),w.forEach(f),p.forEach(f),g.forEach(f),m.forEach(f),d.forEach(f),k=b(h),A=o(h,"DIV",{class:!0});var E=u(A);C=o(E,"DIV",{class:!0}),u(C).forEach(f),z=b(E),L=o(E,"DIV",{class:!0});var x=u(L);V=o(x,"DIV",{class:!0});var I=u(V);S=o(I,"SPAN",{class:!0});var D=u(S);N=$(D,"Neue Krankenhaus-Corona-Einweisungen in den letzten 7 Tagen"),D.forEach(f),R=b(I),P=o(I,"SPAN",{class:!0});var y=u(P);_=o(y,"SPAN",{class:!0});var U=u(_);T=$(U,un),U.forEach(f),M=$(y,"\n          / 1200"),y.forEach(f),I.forEach(f),B=b(x),H=o(x,"DIV",{class:!0});var on=u(H);F=o(on,"SPAN",{class:!0});var vn=u(F);Z=$(vn,"COVID-19 Patienten auf Intensivstationen"),vn.forEach(f),G=b(on),O=o(on,"SPAN",{class:!0});var dn=u(O);K=o(dn,"SPAN",{class:!0});var mn=u(K);j=$(mn,fn),mn.forEach(f),W=$(dn,"\n          / 450"),dn.forEach(f),on.forEach(f),x.forEach(f),E.forEach(f),Y=b(h),Q=o(h,"DIV",{class:!0});var gn=u(Q);q=o(gn,"DIV",{class:!0}),u(q).forEach(f),J=b(gn),X=o(gn,"DIV",{class:!0});var pn=u(X);nn=o(pn,"DIV",{class:!0});var $n=u(nn);en=o($n,"SPAN",{class:!0});var wn=u(en);tn=$(wn,"COVID-19 Patienten auf Intensivstationen"),wn.forEach(f),an=b($n),cn=o($n,"SPAN",{class:!0});var En=u(cn);rn=o(En,"SPAN",{class:!0});var bn=u(rn);sn=$(bn,hn),bn.forEach(f),ln=$(En,"\n          / 600"),En.forEach(f),$n.forEach(f),pn.forEach(f),gn.forEach(f),h.forEach(f),this.h()},h:function(){h(a,"class","circle svelte-1h9n4cc"),h(l,"class","label svelte-1h9n4cc"),h(s,"class","svelte-1h9n4cc"),h(i,"class","text-column svelte-1h9n4cc"),h(r,"class","text svelte-1h9n4cc"),h(t,"class",y=x("card ".concat(n[0].hospitalizationLast7Days<1200&&n[0].currentIntensiveCarePatients<450?"active":""))+" svelte-1h9n4cc"),h(C,"class","circle svelte-1h9n4cc"),h(S,"class","label svelte-1h9n4cc"),h(_,"class","light svelte-1h9n4cc"),h(P,"class","number svelte-1h9n4cc"),h(V,"class","text-column svelte-1h9n4cc"),h(F,"class","label svelte-1h9n4cc"),h(K,"class","light svelte-1h9n4cc"),h(O,"class","number svelte-1h9n4cc"),h(H,"class","text-column svelte-1h9n4cc"),h(L,"class","text svelte-1h9n4cc"),h(A,"class",U=x("card yellow ".concat(n[0].hospitalizationLast7Days>1200&&n[0].currentIntensiveCarePatients<600||n[0].currentIntensiveCarePatients>=450&&n[0].currentIntensiveCarePatients<600?"active":""))+" svelte-1h9n4cc"),h(q,"class","circle svelte-1h9n4cc"),h(en,"class","label svelte-1h9n4cc"),h(rn,"class","light svelte-1h9n4cc"),h(cn,"class","number svelte-1h9n4cc"),h(nn,"class","text-column svelte-1h9n4cc"),h(X,"class","text svelte-1h9n4cc"),h(Q,"class",on=x("card red ".concat(n[0].currentIntensiveCarePatients>600?"active":""))+" svelte-1h9n4cc"),h(e,"class","wrapper svelte-1h9n4cc")},m:function(n,o){d(n,e,o),m(e,t),m(t,a),m(t,c),m(t,r),m(r,i),m(i,s),m(s,l),m(l,v),m(e,k),m(e,A),m(A,C),m(A,z),m(A,L),m(L,V),m(V,S),m(S,N),m(V,R),m(V,P),m(P,_),m(_,T),m(P,M),m(L,B),m(L,H),m(H,F),m(F,Z),m(H,G),m(H,O),m(O,K),m(K,j),m(O,W),m(e,Y),m(e,Q),m(Q,q),m(Q,J),m(Q,X),m(X,nn),m(nn,en),m(en,tn),m(nn,an),m(nn,cn),m(cn,rn),m(rn,sn),m(cn,ln)},p:function(n,e){var a=I(e,1)[0];1&a&&y!==(y=x("card ".concat(n[0].hospitalizationLast7Days<1200&&n[0].currentIntensiveCarePatients<450?"active":""))+" svelte-1h9n4cc")&&h(t,"class",y),1&a&&un!==(un=n[0].hospitalizationLast7Days+"")&&w(T,un),1&a&&fn!==(fn=n[0].currentIntensiveCarePatients+"")&&w(j,fn),1&a&&U!==(U=x("card yellow ".concat(n[0].hospitalizationLast7Days>1200&&n[0].currentIntensiveCarePatients<600||n[0].currentIntensiveCarePatients>=450&&n[0].currentIntensiveCarePatients<600?"active":""))+" svelte-1h9n4cc")&&h(A,"class",U),1&a&&hn!==(hn=n[0].currentIntensiveCarePatients+"")&&w(sn,hn),1&a&&on!==(on=x("card red ".concat(n[0].currentIntensiveCarePatients>600?"active":""))+" svelte-1h9n4cc")&&h(Q,"class",on)},i:D,o:D,d:function(n){n&&f(e)}}}function hn(n,e,t){var a=e.data;return n.$$set=function(n){"data"in n&&t(0,a=n.data)},[a]}var vn=function(e){n(l,s);var t=un(l);function l(n){var e;return a(this,l),e=t.call(this),c(i(e),n,hn,fn,r,{data:0}),e}return l}();function dn(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,r=e(n);if(a){var i=e(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return t(this,c)}}function mn(n,e,t){var a=n.slice();return a[15]=e[t],a[16]=e,a[17]=t,a}function gn(n){var e,t,a,c,r,i,s,l;return{c:function(){e=g("a"),t=g("div"),a=g("img"),c=E(),r=g("p"),i=g("small"),s=g("strong"),l=p("Zur App mit ALLEN Landkreisen ›"),this.h()},l:function(n){e=o(n,"A",{class:!0,href:!0});var h=u(e);t=o(h,"DIV",{class:!0});var v=u(t);a=o(v,"IMG",{src:!0,width:!0,height:!0,alt:!0,style:!0,class:!0}),v.forEach(f),c=b(h),r=o(h,"P",{class:!0});var d=u(r);i=o(d,"SMALL",{});var m=u(i);s=o(m,"STRONG",{});var g=u(s);l=$(g,"Zur App mit ALLEN Landkreisen ›"),g.forEach(f),m.forEach(f),d.forEach(f),h.forEach(f),this.h()},h:function(){a.src!=="https://www.corona-ampel.app/favicons/maskable_icon_x128.png"&&h(a,"src","https://www.corona-ampel.app/favicons/maskable_icon_x128.png"),h(a,"width","24"),h(a,"height","24"),h(a,"alt","Ampel-Icon"),v(a,"height","auto"),v(a,"max-width","100%"),h(a,"class","svelte-zbwvgp"),h(t,"class","logo svelte-zbwvgp"),h(r,"class","details svelte-zbwvgp"),h(e,"class","list-tile svelte-zbwvgp"),h(e,"href","https://corona-ampel.app/?coburg")},m:function(n,o){d(n,e,o),m(e,t),m(t,a),m(e,c),m(e,r),m(r,i),m(i,s),m(s,l)},d:function(n){n&&f(e)}}}function pn(n){var e,t,a,c,r,i;return{c:function(){e=g("small"),t=g("span"),a=p("💥 "),c=g("strong"),r=p("ACHTUNG!"),i=p(" Das RKI aktualisiert aktuell noch ihre Daten ...")},l:function(n){e=o(n,"SMALL",{});var s=u(e);t=o(s,"SPAN",{});var l=u(t);a=$(l,"💥 "),c=o(l,"STRONG",{});var h=u(c);r=$(h,"ACHTUNG!"),h.forEach(f),i=$(l," Das RKI aktualisiert aktuell noch ihre Daten ..."),l.forEach(f),s.forEach(f)},m:function(n,s){d(n,e,s),m(e,t),m(t,a),m(t,c),m(c,r),m(t,i)},d:function(n){n&&f(e)}}}function $n(n){var e,t,a,c,r,i,s,l,v,w,x,I,D,y;function A(e){n[8].call(null,e)}var C={};return void 0!==n[0][0]&&(C.data=n[0][0]),c=new vn({props:C}),k.push((function(){return B(c,"data",A)})),w=new z({props:{until:"2022-12-15T23:00:00Z",$$slots:{default:[wn]},$$scope:{ctx:n}}}),{c:function(){e=g("h2"),t=p("Hospitalisierung in Bayern"),a=E(),L(c.$$.fragment),i=E(),s=g("br"),l=E(),v=g("center"),L(w.$$.fragment),x=E(),I=g("h2"),D=p("7 Tage Inzidenz"),this.h()},l:function(n){e=o(n,"H2",{class:!0});var r=u(e);t=$(r,"Hospitalisierung in Bayern"),r.forEach(f),a=b(n),V(c.$$.fragment,n),i=b(n),s=o(n,"BR",{}),l=b(n),v=o(n,"CENTER",{});var h=u(v);V(w.$$.fragment,h),h.forEach(f),x=b(n),I=o(n,"H2",{class:!0});var d=u(I);D=$(d,"7 Tage Inzidenz"),d.forEach(f),this.h()},h:function(){h(e,"class","svelte-zbwvgp"),h(I,"class","svelte-zbwvgp")},m:function(n,r){d(n,e,r),m(e,t),d(n,a,r),S(c,n,r),d(n,i,r),d(n,s,r),d(n,l,r),d(n,v,r),S(w,v,null),d(n,x,r),d(n,I,r),m(I,D),y=!0},p:function(n,e){var t={};!r&&1&e&&(r=!0,t.data=n[0][0],H((function(){return r=!1}))),c.$set(t);var a={};262144&e&&(a.$$scope={dirty:e,ctx:n}),w.$set(a)},i:function(n){y||(N(c.$$.fragment,n),N(w.$$.fragment,n),y=!0)},o:function(n){R(c.$$.fragment,n),R(w.$$.fragment,n),y=!1},d:function(n){n&&f(e),n&&f(a),P(c,n),n&&f(i),n&&f(s),n&&f(l),n&&f(v),P(w),n&&f(x),n&&f(I)}}}function wn(n){var e,t,a,c;return{c:function(){e=g("p"),t=g("small"),a=g("strong"),c=p("Erweiterte Maßnahmen seit 28.12.2021"),this.h()},l:function(n){e=o(n,"P",{style:!0});var r=u(e);t=o(r,"SMALL",{});var i=u(t);a=o(i,"STRONG",{});var s=u(a);c=$(s,"Erweiterte Maßnahmen seit 28.12.2021"),s.forEach(f),i.forEach(f),r.forEach(f),this.h()},h:function(){v(e,"margin","0 .5rem")},m:function(n,r){d(n,e,r),m(e,t),m(t,a),m(a,c)},d:function(n){n&&f(e)}}}function En(n){var e,t,a,c,r,i,s,l;function v(e){n[9].call(null,e,n[15],n[16],n[17])}var p={};return void 0!==n[15]&&(p.data=n[15]),a=new en({props:p}),k.push((function(){return B(a,"data",v)})),{c:function(){e=g("li"),t=g("a"),L(a.$$.fragment),s=E(),this.h()},l:function(n){e=o(n,"LI",{class:!0});var c=u(e);t=o(c,"A",{rel:!0,href:!0,title:!0,class:!0});var r=u(t);V(a.$$.fragment,r),r.forEach(f),s=b(c),c.forEach(f),this.h()},h:function(){h(t,"rel","prefetch"),h(t,"href",r=n[15].slug+"/"),h(t,"title",i="Zu ".concat(n[15].district," ").concat(n[15].name," ›")),h(t,"class","svelte-zbwvgp"),h(e,"class","svelte-zbwvgp")},m:function(n,c){d(n,e,c),m(e,t),S(a,t,null),m(e,s),l=!0},p:function(e,s){n=e;var o={};!c&&2&s&&(c=!0,o.data=n[15],H((function(){return c=!1}))),a.$set(o),(!l||2&s&&r!==(r=n[15].slug+"/"))&&h(t,"href",r),(!l||2&s&&i!==(i="Zu ".concat(n[15].district," ").concat(n[15].name," ›")))&&h(t,"title",i)},i:function(n){l||(N(a.$$.fragment,n),l=!0)},o:function(n){R(a.$$.fragment,n),l=!1},d:function(n){n&&f(e),P(a)}}}function bn(n){var e,t,a,c,r;return{c:function(){e=g("small"),t=g("span"),a=g("strong"),c=p("Hinweis"),r=p(": Alle Angaben sind ohne Gewähr. Dies ist nicht die offizielle\n          Corona-Ampel. Farben können eventuell abweichen und sind nur zur Orientierung gedacht.")},l:function(n){e=o(n,"SMALL",{});var i=u(e);t=o(i,"SPAN",{});var s=u(t);a=o(s,"STRONG",{});var l=u(a);c=$(l,"Hinweis"),l.forEach(f),r=$(s,": Alle Angaben sind ohne Gewähr. Dies ist nicht die offizielle\n          Corona-Ampel. Farben können eventuell abweichen und sind nur zur Orientierung gedacht."),s.forEach(f),i.forEach(f)},m:function(n,i){d(n,e,i),m(e,t),m(t,a),m(a,c),m(t,r)},d:function(n){n&&f(e)}}}function xn(n){var e,t,a,c,r,i,s,l;return{c:function(){e=g("small"),t=g("span"),a=g("strong"),c=p("Hinweis zur Hospitalisierung"),r=p(": Die wirklichen Zahlen zur\n          Hospitalisierung können nicht zu 100% korrekt angegeben werden, da es über Tage und Wochen\n          hinweg noch Nachmeldungen gibt. Ich kann hier leider nur die offiziellen Zahlen des LGLs\n          angeben, nach der sich unsere Regierung in Bayern orientiert.\n          "),i=g("a"),s=g("small"),l=p("Quelle: LGL"),this.h()},l:function(n){e=o(n,"SMALL",{});var h=u(e);t=o(h,"SPAN",{});var v=u(t);a=o(v,"STRONG",{});var d=u(a);c=$(d,"Hinweis zur Hospitalisierung"),d.forEach(f),r=$(v,": Die wirklichen Zahlen zur\n          Hospitalisierung können nicht zu 100% korrekt angegeben werden, da es über Tage und Wochen\n          hinweg noch Nachmeldungen gibt. Ich kann hier leider nur die offiziellen Zahlen des LGLs\n          angeben, nach der sich unsere Regierung in Bayern orientiert.\n          "),i=o(v,"A",{href:!0,target:!0,rel:!0,class:!0});var m=u(i);s=o(m,"SMALL",{});var g=u(s);l=$(g,"Quelle: LGL"),g.forEach(f),m.forEach(f),v.forEach(f),h.forEach(f),this.h()},h:function(){h(i,"href","https://www.lgl.bayern.de/gesundheit/infektionsschutz/infektionskrankheiten_a_z/coronavirus/karte_coronavirus/index.htm#wKennzahlen"),h(i,"target","_blank"),h(i,"rel","noopener noreferrer"),h(i,"class","svelte-zbwvgp")},m:function(n,o){d(n,e,o),m(e,t),m(t,a),m(a,c),m(t,r),m(t,i),m(i,s),m(s,l)},d:function(n){n&&f(e)}}}function In(n){var e,t,a,c,r,i;return{c:function(){e=g("small"),t=l("svg"),a=l("path"),c=E(),r=g("span"),i=p("Ab 200 gelten weitere Maßnahmen in Bayern!"),this.h()},l:function(n){e=o(n,"SMALL",{});var s=u(e);t=o(s,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var l=u(t);a=o(l,"path",{d:!0,fill:!0},1),u(a).forEach(f),l.forEach(f),c=b(s),r=o(s,"SPAN",{});var h=u(r);i=$(h,"Ab 200 gelten weitere Maßnahmen in Bayern!"),h.forEach(f),s.forEach(f),this.h()},h:function(){h(a,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),h(a,"fill","currentColor"),h(t,"class","danger-icon"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),h(t,"aria-hidden","true"),h(t,"focusable","false"),h(t,"role","img"),h(t,"width","1.5em"),h(t,"height","1.5em"),h(t,"preserveAspectRatio","xMidYMid meet"),h(t,"viewBox","0 0 24 24"),v(t,"transform","translate3d(0, -2px, 0)"),v(t,"vertical-align","middle")},m:function(n,s){d(n,e,s),m(e,t),m(t,a),m(e,c),m(e,r),m(r,i)},d:function(n){n&&f(e)}}}function Dn(n){var e,t,a,c,r,i,s,l,p,$,w,x,D,y,A,C,Z,G,j,W,U,Y,Q,q,J,X,nn,en,tn,an,cn,rn,sn,on,un,fn,hn,vn,dn,wn;function Dn(e){n[6].call(null,e)}s=new z({props:{until:"2022-12-15T23:00:00Z",$$slots:{default:[gn]},$$scope:{ctx:n}}}),$=new z({props:{until:"2021-09-09T17:00:00Z",$$slots:{default:[pn]},$$scope:{ctx:n}}});var yn={};function kn(e){n[7].call(null,e)}void 0!==n[2]&&(yn.data=n[2]),A=new ln({props:yn}),k.push((function(){return B(A,"data",Dn)}));var An={};void 0!==n[3]&&(An.data=n[3]),j=new ln({props:An}),k.push((function(){return B(j,"data",kn)}));for(var Cn=!!n[0]&&$n(n),zn=n[1],Ln=[],Vn=0;Vn<zn.length;Vn+=1)Ln[Vn]=En(mn(n,zn,Vn));var Sn=function(n){return R(Ln[n],1,1,(function(){Ln[n]=null}))};return nn=new O({}),rn=new z({props:{until:"2024-09-09T17:00:00Z",left:!0,$$slots:{default:[bn]},$$scope:{ctx:n}}}),on=new z({props:{until:"2024-09-09T17:00:00Z",left:!0,$$slots:{default:[xn]},$$scope:{ctx:n}}}),fn=new K({}),dn=new z({props:{until:"2021-01-31T00:00:00Z",$$slots:{default:[In]},$$scope:{ctx:n}}}),{c:function(){e=g("meta"),t=g("meta"),a=g("meta"),c=E(),r=g("div"),i=g("center"),L(s.$$.fragment),l=E(),p=g("center"),L($.$$.fragment),w=E(),x=g("div"),D=g("ul"),y=g("li"),L(A.$$.fragment),Z=E(),G=g("li"),L(j.$$.fragment),U=E(),Cn&&Cn.c(),Y=E(),Q=g("nav"),q=g("ul");for(var n=0;n<Ln.length;n+=1)Ln[n].c();J=E(),X=g("div"),L(nn.$$.fragment),en=E(),tn=g("br"),an=E(),cn=g("center"),L(rn.$$.fragment),sn=E(),L(on.$$.fragment),un=E(),L(fn.$$.fragment),hn=E(),vn=g("div"),L(dn.$$.fragment),this.h()},l:function(n){var h=_('[data-svelte="svelte-cy433z"]',document.head);e=o(h,"META",{content:!0,name:!0}),t=o(h,"META",{property:!0,content:!0}),a=o(h,"META",{property:!0,content:!0}),h.forEach(f),c=b(n),r=o(n,"DIV",{class:!0});var v=u(r);i=o(v,"CENTER",{});var d=u(i);V(s.$$.fragment,d),d.forEach(f),l=b(v),p=o(v,"CENTER",{});var m=u(p);V($.$$.fragment,m),m.forEach(f),w=b(v),x=o(v,"DIV",{style:!0});var g=u(x);D=o(g,"UL",{class:!0});var E=u(D);y=o(E,"LI",{class:!0});var I=u(y);V(A.$$.fragment,I),I.forEach(f),Z=b(E),G=o(E,"LI",{class:!0});var k=u(G);V(j.$$.fragment,k),k.forEach(f),E.forEach(f),g.forEach(f),U=b(v),Cn&&Cn.l(v),Y=b(v),Q=o(v,"NAV",{});var C=u(Q);q=o(C,"UL",{id:!0,class:!0});for(var z=u(q),L=0;L<Ln.length;L+=1)Ln[L].l(z);z.forEach(f),C.forEach(f),J=b(v),X=o(v,"DIV",{class:!0});var S=u(X);V(nn.$$.fragment,S),S.forEach(f),en=b(v),tn=o(v,"BR",{}),an=b(v),cn=o(v,"CENTER",{});var N=u(cn);V(rn.$$.fragment,N),sn=b(N),V(on.$$.fragment,N),N.forEach(f),un=b(v),V(fn.$$.fragment,v),hn=b(v),vn=o(v,"DIV",{class:!0});var R=u(vn);V(dn.$$.fragment,R),R.forEach(f),v.forEach(f),this.h()},h:function(){document.title="Corona-Ampel-Coburg: 🚦 Aktuelle Fälle und Zahlen",h(e,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),h(e,"name","description"),h(t,"property","og:title"),h(t,"content","Corona-Ampel Coburg und Umgebung: aktuelle 7 Tage Corona Inzidenz"),h(a,"property","og:description"),h(a,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),h(y,"class","svelte-zbwvgp"),h(G,"class","svelte-zbwvgp"),h(D,"class","cols2 svelte-zbwvgp"),v(x,"margin-top","10px"),h(q,"id","hp-cardlist"),h(q,"class","svelte-zbwvgp"),h(X,"class","social svelte-zbwvgp"),h(vn,"class","hints svelte-zbwvgp"),h(r,"class","homepage svelte-zbwvgp")},m:function(n,o){m(document.head,e),m(document.head,t),m(document.head,a),d(n,c,o),d(n,r,o),m(r,i),S(s,i,null),m(r,l),m(r,p),S($,p,null),m(r,w),m(r,x),m(x,D),m(D,y),S(A,y,null),m(D,Z),m(D,G),S(j,G,null),m(r,U),Cn&&Cn.m(r,null),m(r,Y),m(r,Q),m(Q,q);for(var u=0;u<Ln.length;u+=1)Ln[u].m(q,null);m(r,J),m(r,X),S(nn,X,null),m(r,en),m(r,tn),m(r,an),m(r,cn),S(rn,cn,null),m(cn,sn),S(on,cn,null),m(r,un),S(fn,r,null),m(r,hn),m(r,vn),S(dn,vn,null),wn=!0},p:function(n,e){var t=I(e,1)[0],a={};262144&t&&(a.$$scope={dirty:t,ctx:n}),s.$set(a);var c={};262144&t&&(c.$$scope={dirty:t,ctx:n}),$.$set(c);var i={};!C&&4&t&&(C=!0,i.data=n[2],H((function(){return C=!1}))),A.$set(i);var l={};if(!W&&8&t&&(W=!0,l.data=n[3],H((function(){return W=!1}))),j.$set(l),n[0]?Cn?(Cn.p(n,t),1&t&&N(Cn,1)):((Cn=$n(n)).c(),N(Cn,1),Cn.m(r,Y)):Cn&&(F(),R(Cn,1,1,(function(){Cn=null})),T()),2&t){var o;for(zn=n[1],o=0;o<zn.length;o+=1){var u=mn(n,zn,o);Ln[o]?(Ln[o].p(u,t),N(Ln[o],1)):(Ln[o]=En(u),Ln[o].c(),N(Ln[o],1),Ln[o].m(q,null))}for(F(),o=zn.length;o<Ln.length;o+=1)Sn(o);T()}var f={};262144&t&&(f.$$scope={dirty:t,ctx:n}),rn.$set(f);var h={};262144&t&&(h.$$scope={dirty:t,ctx:n}),on.$set(h);var v={};262144&t&&(v.$$scope={dirty:t,ctx:n}),dn.$set(v)},i:function(n){if(!wn){N(s.$$.fragment,n),N($.$$.fragment,n),N(A.$$.fragment,n),N(j.$$.fragment,n),N(Cn);for(var e=0;e<zn.length;e+=1)N(Ln[e]);N(nn.$$.fragment,n),N(rn.$$.fragment,n),N(on.$$.fragment,n),N(fn.$$.fragment,n),N(dn.$$.fragment,n),wn=!0}},o:function(n){R(s.$$.fragment,n),R($.$$.fragment,n),R(A.$$.fragment,n),R(j.$$.fragment,n),R(Cn),Ln=Ln.filter(Boolean);for(var e=0;e<Ln.length;e+=1)R(Ln[e]);R(nn.$$.fragment,n),R(rn.$$.fragment,n),R(on.$$.fragment,n),R(fn.$$.fragment,n),R(dn.$$.fragment,n),wn=!1},d:function(n){f(e),f(t),f(a),n&&f(c),n&&f(r),P(s),P($),P(A),P(j),Cn&&Cn.d(),M(Ln,n),P(nn),P(rn),P(on),P(fn),P(dn)}}}function yn(){this.fetch("sitemap.xml");return this.fetch("index.json").then((function(n){return n.json()})).then((function(n){return{data:n}}))}function kn(n,e,t){var a;A(n,Z,(function(n){return t(5,a=n)}));var c=e.data,r=c,i=r.citys,s=r.germannew,l=r.bavarianew,o=r.germanincidence,u=r.bavariaincidence,f=r.hospitalization,h=[];h=on(i);var v={name:"Deutschland",incidence:o,newCases:s},d={name:"Bayern",incidence:u,newCases:l};return n.$$set=function(n){"data"in n&&t(4,c=n.data)},n.$$.update=function(){32&n.$$.dirty&&a&&a.citys&&(t(1,h=on(a.citys)),s=a.germannew,l=a.bavarianew,t(2,v.incidence=a.germanincidence,v),t(3,d.incidence=a.bavariaincidence,d),t(2,v.newCases=a.germannew,v),t(3,d.newCases=a.bavarianew,d),t(0,f=a.hospitalization))},[f,h,v,d,c,a,function(n){t(2,v=n),t(5,a)},function(n){t(3,d=n),t(5,a)},function(n){f[0]=n,t(0,f),t(5,a)},function(n,e,c,r){c[r]=n,t(1,h),t(5,a)}]}var An=function(e){n(l,s);var t=dn(l);function l(n){var e;return a(this,l),e=t.call(this),c(i(e),n,kn,Dn,r,{data:4}),e}return l}();export default An;export{yn as preload};
