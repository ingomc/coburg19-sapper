import{_ as e,a as n,b as t,c as a,i as r,s as c,d as s,S as i,e as l,f as o,g as f,h as u,j as h,k as d,l as v,m as g,n as m,o as p,t as $,p as w,q as E,r as b,u as x,v as k,w as y,x as A,y as z,M as I,z as L,A as C,B as D,C as S,D as j,E as M,F as N,G as V,H as R,I as T,J as B,K as F,L as H,N as Z}from"./client.291d2853.js";import"./asyncToGenerator.5229e80b.js";import{S as G,T as P}from"./Timetravel.cbd7a228.js";function K(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,c=n(e);if(a){var s=n(this).constructor;r=Reflect.construct(c,arguments,s)}else r=c.apply(this,arguments);return t(this,r)}}function W(e){var n,t;return{c:function(){n=l("svg"),t=l("path"),this.h()},l:function(e){n=o(e,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var a=f(n);t=o(a,"path",{d:!0,fill:!0},1),f(t).forEach(u),a.forEach(u),this.h()},h:function(){h(t,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),h(t,"fill","currentColor"),h(n,"class","danger-icon svelte-11gnjhe"),h(n,"xmlns","http://www.w3.org/2000/svg"),h(n,"xmlns:xlink","http://www.w3.org/1999/xlink"),h(n,"aria-hidden","true"),h(n,"focusable","false"),h(n,"role","img"),h(n,"preserveAspectRatio","xMidYMid meet"),h(n,"viewBox","0 0 24 24"),d(n,"transform","rotate(360deg)")},m:function(e,a){v(e,n,a),g(n,t)},d:function(e){e&&u(n)}}}function _(e){var n,t,a,r,c,s,i,d,A,z,I,L,C,D,S,j,M,N,V,R,T,B,F,H,Z,G,P,K,_,U,J,O=Number(e[0].incidence).toFixed(1)+"",Y=e[0].district+"",q=e[0].name+"",Q=(e[0].newCases>0?e[0].newCases:0)+"",X=e[0].cases+"",ee=e[0].incidence>=200&&e[0].incidence<1e3&&W();return{c:function(){n=m("div"),t=m("canvas"),a=p(),r=m("div"),c=m("div"),s=m("div"),i=m("h3"),ee&&ee.c(),d=p(),A=$(O),z=p(),I=m("div"),L=m("div"),C=$(Y),D=p(),S=m("div"),j=$(q),M=p(),N=m("div"),V=m("div"),R=m("div"),T=$("Neue Fälle: "),B=$(Q),F=p(),H=m("div"),Z=m("div"),G=$("Fälle insgesamt: "),P=$(X),K=p(),_=l("svg"),U=l("path"),this.h()},l:function(e){n=o(e,"DIV",{class:!0});var l=f(n);t=o(l,"CANVAS",{class:!0}),f(t).forEach(u),a=w(l),r=o(l,"DIV",{class:!0});var h=f(r);c=o(h,"DIV",{class:!0});var v=f(c);s=o(v,"DIV",{class:!0});var g=f(s);i=o(g,"H3",{class:!0});var m=f(i);ee&&ee.l(m),d=w(m),A=E(m,O),m.forEach(u),g.forEach(u),z=w(v),I=o(v,"DIV",{class:!0});var p=f(I);L=o(p,"DIV",{class:!0});var $=f(L);C=E($,Y),$.forEach(u),D=w(p),S=o(p,"DIV",{class:!0});var b=f(S);j=E(b,q),b.forEach(u),p.forEach(u),v.forEach(u),M=w(h),N=o(h,"DIV",{class:!0});var x=f(N);V=o(x,"DIV",{class:!0});var k=f(V);R=o(k,"DIV",{class:!0});var y=f(R);T=E(y,"Neue Fälle: "),B=E(y,Q),y.forEach(u),k.forEach(u),F=w(x),H=o(x,"DIV",{class:!0});var W=f(H);Z=o(W,"DIV",{class:!0});var J=f(Z);G=E(J,"Fälle insgesamt: "),P=E(J,X),J.forEach(u),W.forEach(u),x.forEach(u),K=w(h),_=o(h,"svg",{class:!0,viewBox:!0},1);var ne=f(_);U=o(ne,"path",{d:!0},1),f(U).forEach(u),ne.forEach(u),h.forEach(u),l.forEach(u),this.h()},h:function(){h(t,"class","canvas svelte-11gnjhe"),h(i,"class","number svelte-11gnjhe"),h(s,"class","column svelte-11gnjhe"),h(L,"class","area svelte-11gnjhe"),h(S,"class","city svelte-11gnjhe"),h(I,"class","column svelte-11gnjhe"),h(c,"class","row svelte-11gnjhe"),h(R,"class","cases svelte-11gnjhe"),h(V,"class","column svelte-11gnjhe"),h(Z,"class","cases svelte-11gnjhe"),h(H,"class","column svelte-11gnjhe"),h(N,"class","row svelte-11gnjhe"),h(U,"d","M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"),h(_,"class","arrow-right-mini svelte-11gnjhe"),h(_,"viewBox","-100.9 99.1 61.9 105.9"),h(r,"class","content svelte-11gnjhe"),h(n,"class",J=b("card ".concat(e[2]))+" svelte-11gnjhe")},m:function(l,o){v(l,n,o),g(n,t),e[5](t),g(n,a),g(n,r),g(r,c),g(c,s),g(s,i),ee&&ee.m(i,null),g(i,d),g(i,A),g(c,z),g(c,I),g(I,L),g(L,C),g(I,D),g(I,S),g(S,j),g(r,M),g(r,N),g(N,V),g(V,R),g(R,T),g(R,B),g(N,F),g(N,H),g(H,Z),g(Z,G),g(Z,P),g(r,K),g(r,_),g(_,U)},p:function(e,t){var a=x(t,1)[0];e[0].incidence>=200&&e[0].incidence<1e3?ee||((ee=W()).c(),ee.m(i,d)):ee&&(ee.d(1),ee=null),1&a&&O!==(O=Number(e[0].incidence).toFixed(1)+"")&&k(A,O),1&a&&Y!==(Y=e[0].district+"")&&k(C,Y),1&a&&q!==(q=e[0].name+"")&&k(j,q),1&a&&Q!==(Q=(e[0].newCases>0?e[0].newCases:0)+"")&&k(B,Q),1&a&&X!==(X=e[0].cases+"")&&k(P,X),4&a&&J!==(J=b("card ".concat(e[2]))+" svelte-11gnjhe")&&h(n,"class",J)},i:y,o:y,d:function(t){t&&u(n),e[5](null),ee&&ee.d()}}}function U(e,n,t){var a,r,c,s=n.data,i="warning";return e.$$set=function(e){"data"in e&&t(0,s=e.data)},e.$$.update=function(){if(27&e.$$.dirty){t(2,i="warning"),s.incidence<35&&t(2,i="info"),s.incidence>=50&&s.incidence<100&&t(2,i="danger"),s.incidence>=100&&t(2,i="superdanger"),s.allIncidences&&(t(3,r=Array.from(s.allIncidences.incidences.datasets[0].data,(function(e){return e.y}))),t(4,c=100*Math.ceil(Math.max.apply(Math,A(r))/100))),"undefined"!=typeof window&&void 0!==a&&function(){if(a||a.getContext){var e=a.width,n=a.height,t=a.getContext("2d");t.clearRect(-10,0,e+10,n),s.allIncidences&&(t.fillStyle=s.incidence>=100?"rgba(255,100,100,0.1)":"rgba(0,0,0,0.1)",t.beginPath(),t.moveTo(-10,n),r.reverse().forEach((function(a,s){t.lineTo(e/(r.length-1)*s,n-a/(c/n))})),t.lineTo(610,n),t.strokeStyle=s.incidence>=100?"rgba(255,100,100,0.2)":"rgba(0,0,0,0.2)",t.lineWidth=1,t.stroke(),t.fill())}}()}},[s,a,i,r,c,function(e){z[e?"unshift":"push"]((function(){t(1,a=e)}))}]}var J=function(n){e(l,i);var t=K(l);function l(e){var n;return a(this,l),n=t.call(this),r(s(n),e,U,_,c,{data:0}),n}return l}();function O(e){var n=[];e.sort((function(e,n){return e.name<n.name?-1:(e.name,n.name,0)})),e.sort((function(e,n){return(""+e.district).localeCompare(n.district)})),e.sort((function(e,n){return(""+e.name).localeCompare(n.name)})),e.forEach((function(e){e.name.toLowerCase()=="Coburg".toLowerCase()?n.unshift(e):n.push(e)}));var t=n[0];return n.splice(0,1),n.splice(1,0,t),n}function Y(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,c=n(e);if(a){var s=n(this).constructor;r=Reflect.construct(c,arguments,s)}else r=c.apply(this,arguments);return t(this,r)}}function q(e,n,t){var a=e.slice();return a[7]=n[t],a[8]=n,a[9]=t,a}function Q(e){var n,t,a,r,c,s,i,l,b,x,k,y,A,z;return{c:function(){n=m("a"),t=m("div"),a=m("img"),r=p(),c=m("p"),s=m("small"),i=m("strong"),l=$("Jetzt als App mit ALLEN Landkreisen ›"),b=p(),x=m("br"),k=p(),y=m("small"),A=m("span"),z=$("⭐️ Eigene Landkreise speichern ⭐️ Impfstatistik ⭐️ Bundesländer\n            ⭐️ Weltweit"),this.h()},l:function(e){n=o(e,"A",{class:!0,href:!0});var h=f(n);t=o(h,"DIV",{class:!0});var d=f(t);a=o(d,"IMG",{src:!0,width:!0,height:!0,alt:!0,style:!0,class:!0}),d.forEach(u),r=w(h),c=o(h,"P",{class:!0});var v=f(c);s=o(v,"SMALL",{});var g=f(s);i=o(g,"STRONG",{});var m=f(i);l=E(m,"Jetzt als App mit ALLEN Landkreisen ›"),m.forEach(u),g.forEach(u),b=w(v),x=o(v,"BR",{}),k=w(v),y=o(v,"SMALL",{});var p=f(y);A=o(p,"SPAN",{});var $=f(A);z=E($,"⭐️ Eigene Landkreise speichern ⭐️ Impfstatistik ⭐️ Bundesländer\n            ⭐️ Weltweit"),$.forEach(u),p.forEach(u),v.forEach(u),h.forEach(u),this.h()},h:function(){a.src!=="https://www.corona-ampel.app/favicons/maskable_icon_x128.png"&&h(a,"src","https://www.corona-ampel.app/favicons/maskable_icon_x128.png"),h(a,"width","64"),h(a,"height","64"),h(a,"alt","Ampel-Icon"),d(a,"height","auto"),d(a,"max-width","100%"),h(a,"class","svelte-kn43tz"),h(t,"class","logo svelte-kn43tz"),h(c,"class","details svelte-kn43tz"),h(n,"class","list-tile svelte-kn43tz"),h(n,"href","https://corona-ampel.app/?coburg")},m:function(e,o){v(e,n,o),g(n,t),g(t,a),g(n,r),g(n,c),g(c,s),g(s,i),g(i,l),g(c,b),g(c,x),g(c,k),g(c,y),g(y,A),g(A,z)},d:function(e){e&&u(n)}}}function X(e){var n,t,a,r,c,s;return{c:function(){n=m("small"),t=m("span"),a=$("🥳\n        "),r=m("strong"),c=$("ACHTUNG!"),s=$("\n        RKI verbreitet gerade falsche Zahlen, sobald die richtigen Zahlen veröffentlicht werden\n        aktualisiere ich die Webseite wieder.")},l:function(e){n=o(e,"SMALL",{});var i=f(n);t=o(i,"SPAN",{});var l=f(t);a=E(l,"🥳\n        "),r=o(l,"STRONG",{});var h=f(r);c=E(h,"ACHTUNG!"),h.forEach(u),s=E(l,"\n        RKI verbreitet gerade falsche Zahlen, sobald die richtigen Zahlen veröffentlicht werden\n        aktualisiere ich die Webseite wieder."),l.forEach(u),i.forEach(u)},m:function(e,i){v(e,n,i),g(n,t),g(t,a),g(t,r),g(r,c),g(t,s)},d:function(e){e&&u(n)}}}function ee(e){var n,t,a,r,c,s,i,l;function d(n){e[5].call(null,n,e[7],e[8],e[9])}var $={};return void 0!==e[7]&&($.data=e[7]),a=new J({props:$}),z.push((function(){return B(a,"data",d)})),{c:function(){n=m("li"),t=m("a"),L(a.$$.fragment),i=p(),this.h()},l:function(e){n=o(e,"LI",{class:!0});var r=f(n);t=o(r,"A",{rel:!0,href:!0,title:!0,class:!0});var c=f(t);C(a.$$.fragment,c),c.forEach(u),i=w(r),r.forEach(u),this.h()},h:function(){h(t,"rel","prefetch"),h(t,"href",c=e[7].slug+"/"),h(t,"title",s="Zu ".concat(e[7].district," ").concat(e[7].name," ›")),h(t,"class","svelte-kn43tz"),h(n,"class","svelte-kn43tz")},m:function(e,r){v(e,n,r),g(n,t),D(a,t,null),g(n,i),l=!0},p:function(n,i){e=n;var o={};!r&&4&i&&(r=!0,o.data=e[7],F((function(){return r=!1}))),a.$set(o),(!l||4&i&&c!==(c=e[7].slug+"/"))&&h(t,"href",c),(!l||4&i&&s!==(s="Zu ".concat(e[7].district," ").concat(e[7].name," ›")))&&h(t,"title",s)},i:function(e){l||(S(a.$$.fragment,e),l=!0)},o:function(e){j(a.$$.fragment,e),l=!1},d:function(e){e&&u(n),M(a)}}}function ne(e){var n,t,a,r,c,s;return{c:function(){n=m("small"),t=l("svg"),a=l("path"),r=p(),c=m("span"),s=$("Ab 200 gelten weitere Maßnahmen in Bayern!"),this.h()},l:function(e){n=o(e,"SMALL",{});var i=f(n);t=o(i,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var l=f(t);a=o(l,"path",{d:!0,fill:!0},1),f(a).forEach(u),l.forEach(u),r=w(i),c=o(i,"SPAN",{});var h=f(c);s=E(h,"Ab 200 gelten weitere Maßnahmen in Bayern!"),h.forEach(u),i.forEach(u),this.h()},h:function(){h(a,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),h(a,"fill","currentColor"),h(t,"class","danger-icon"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),h(t,"aria-hidden","true"),h(t,"focusable","false"),h(t,"role","img"),h(t,"width","1.5em"),h(t,"height","1.5em"),h(t,"preserveAspectRatio","xMidYMid meet"),h(t,"viewBox","0 0 24 24"),d(t,"transform","translate3d(0, -2px, 0)"),d(t,"vertical-align","middle")},m:function(e,i){v(e,n,i),g(n,t),g(t,a),g(n,r),g(n,c),g(c,s)},d:function(e){e&&u(n)}}}function te(e){var n,t,a,r,c,s,i,l,d,b,y,A,z,T,B,F,Z,K,W,_,U,J,O,Y,te,ae,re,ce,se,ie,le,oe,fe,ue,he,de,ve,ge,me=(e[0]?e[0].toLocaleString("de"):"0")+"",pe=(e[1]?e[1].toLocaleString("de"):"0")+"";s=new I({props:{until:"2021-12-15T23:00:00Z",$$slots:{default:[Q]},$$scope:{ctx:e}}}),d=new I({props:{until:"2021-07-29T16:00:00Z",$$slots:{default:[X]},$$scope:{ctx:e}}});for(var $e=e[2],we=[],Ee=0;Ee<$e.length;Ee+=1)we[Ee]=ee(q(e,$e,Ee));var be=function(e){return j(we[e],1,1,(function(){we[e]=null}))};return oe=new G({}),ue=new P({}),ve=new I({props:{until:"2021-01-31T00:00:00Z",$$slots:{default:[ne]},$$scope:{ctx:e}}}),{c:function(){n=m("meta"),t=m("meta"),a=m("meta"),r=p(),c=m("center"),L(s.$$.fragment),i=p(),l=m("center"),L(d.$$.fragment),b=p(),y=m("section"),A=m("div"),z=m("h3"),T=$("Neue Fälle in Deutschland"),B=p(),F=m("div"),Z=$("+"),K=$(me),W=p(),_=m("div"),U=m("h3"),J=$("Neue Fälle in Bayern"),O=p(),Y=m("div"),te=$("+"),ae=$(pe),re=p(),ce=m("nav"),se=m("ul");for(var e=0;e<we.length;e+=1)we[e].c();ie=p(),le=m("div"),L(oe.$$.fragment),fe=p(),L(ue.$$.fragment),he=p(),de=m("div"),L(ve.$$.fragment),this.h()},l:function(e){var h=N('[data-svelte="svelte-cy433z"]',document.head);n=o(h,"META",{content:!0,name:!0}),t=o(h,"META",{property:!0,content:!0}),a=o(h,"META",{property:!0,content:!0}),h.forEach(u),r=w(e),c=o(e,"CENTER",{});var v=f(c);C(s.$$.fragment,v),v.forEach(u),i=w(e),l=o(e,"CENTER",{});var g=f(l);C(d.$$.fragment,g),g.forEach(u),b=w(e),y=o(e,"SECTION",{class:!0});var m=f(y);A=o(m,"DIV",{class:!0});var p=f(A);z=o(p,"H3",{class:!0});var $=f(z);T=E($,"Neue Fälle in Deutschland"),$.forEach(u),B=w(p),F=o(p,"DIV",{class:!0});var x=f(F);Z=E(x,"+"),K=E(x,me),x.forEach(u),p.forEach(u),W=w(m),_=o(m,"DIV",{class:!0});var k=f(_);U=o(k,"H3",{class:!0});var I=f(U);J=E(I,"Neue Fälle in Bayern"),I.forEach(u),O=w(k),Y=o(k,"DIV",{class:!0});var L=f(Y);te=E(L,"+"),ae=E(L,pe),L.forEach(u),k.forEach(u),m.forEach(u),re=w(e),ce=o(e,"NAV",{});var D=f(ce);se=o(D,"UL",{id:!0,class:!0});for(var S=f(se),j=0;j<we.length;j+=1)we[j].l(S);S.forEach(u),D.forEach(u),ie=w(e),le=o(e,"DIV",{class:!0});var M=f(le);C(oe.$$.fragment,M),M.forEach(u),fe=w(e),C(ue.$$.fragment,e),he=w(e),de=o(e,"DIV",{class:!0});var V=f(de);C(ve.$$.fragment,V),V.forEach(u),this.h()},h:function(){document.title="Corona-Ampel-Coburg: 🚦 Aktuelle Fälle und Zahlen",h(n,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),h(n,"name","description"),h(t,"property","og:title"),h(t,"content","Corona-Ampel Coburg und Umgebung: aktuelle 7 Tage Corona Inzidenz"),h(a,"property","og:description"),h(a,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),h(z,"class","label svelte-kn43tz"),h(F,"class","cases svelte-kn43tz"),h(A,"class","column left svelte-kn43tz"),h(U,"class","label svelte-kn43tz"),h(Y,"class","cases svelte-kn43tz"),h(_,"class","column right svelte-kn43tz"),h(y,"class","statistics svelte-kn43tz"),h(se,"id","hp-cardlist"),h(se,"class","svelte-kn43tz"),h(le,"class","social svelte-kn43tz"),h(de,"class","hints svelte-kn43tz")},m:function(e,o){g(document.head,n),g(document.head,t),g(document.head,a),v(e,r,o),v(e,c,o),D(s,c,null),v(e,i,o),v(e,l,o),D(d,l,null),v(e,b,o),v(e,y,o),g(y,A),g(A,z),g(z,T),g(A,B),g(A,F),g(F,Z),g(F,K),g(y,W),g(y,_),g(_,U),g(U,J),g(_,O),g(_,Y),g(Y,te),g(Y,ae),v(e,re,o),v(e,ce,o),g(ce,se);for(var f=0;f<we.length;f+=1)we[f].m(se,null);v(e,ie,o),v(e,le,o),D(oe,le,null),v(e,fe,o),D(ue,e,o),v(e,he,o),v(e,de,o),D(ve,de,null),ge=!0},p:function(e,n){var t=x(n,1)[0],a={};1024&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a);var r={};if(1024&t&&(r.$$scope={dirty:t,ctx:e}),d.$set(r),(!ge||1&t)&&me!==(me=(e[0]?e[0].toLocaleString("de"):"0")+"")&&k(K,me),(!ge||2&t)&&pe!==(pe=(e[1]?e[1].toLocaleString("de"):"0")+"")&&k(ae,pe),4&t){var c;for($e=e[2],c=0;c<$e.length;c+=1){var i=q(e,$e,c);we[c]?(we[c].p(i,t),S(we[c],1)):(we[c]=ee(i),we[c].c(),S(we[c],1),we[c].m(se,null))}for(H(),c=$e.length;c<we.length;c+=1)be(c);V()}var l={};1024&t&&(l.$$scope={dirty:t,ctx:e}),ve.$set(l)},i:function(e){if(!ge){S(s.$$.fragment,e),S(d.$$.fragment,e);for(var n=0;n<$e.length;n+=1)S(we[n]);S(oe.$$.fragment,e),S(ue.$$.fragment,e),S(ve.$$.fragment,e),ge=!0}},o:function(e){j(s.$$.fragment,e),j(d.$$.fragment,e),we=we.filter(Boolean);for(var n=0;n<we.length;n+=1)j(we[n]);j(oe.$$.fragment,e),j(ue.$$.fragment,e),j(ve.$$.fragment,e),ge=!1},d:function(e){u(n),u(t),u(a),e&&u(r),e&&u(c),M(s),e&&u(i),e&&u(l),M(d),e&&u(b),e&&u(y),e&&u(re),e&&u(ce),R(we,e),e&&u(ie),e&&u(le),M(oe),e&&u(fe),M(ue,e),e&&u(he),e&&u(de),M(ve)}}}function ae(){this.fetch("sitemap.xml");return this.fetch("index.json").then((function(e){return e.json()})).then((function(e){return{data:e}}))}function re(e,n,t){var a;T(e,Z,(function(e){return t(4,a=e)}));var r=n.data,c=r,s=c.citys,i=c.germannew,l=c.bavarianew,o=[];return o=O(s),e.$$set=function(e){"data"in e&&t(3,r=e.data)},e.$$.update=function(){16&e.$$.dirty&&a&&a.citys&&(t(2,o=O(a.citys)),t(0,i=a.germannew),t(1,l=a.bavarianew))},[i,l,o,r,a,function(e,n,r,c){r[c]=e,t(2,o),t(4,a)}]}var ce=function(n){e(l,i);var t=Y(l);function l(e){var n;return a(this,l),n=t.call(this),r(s(n),e,re,te,c,{data:3}),n}return l}();export default ce;export{ae as preload};
