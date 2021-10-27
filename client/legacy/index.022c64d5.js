import{_ as e,a as n,b as t,c as a,i as r,s as c,d as s,S as i,e as l,f as o,g as f,h as u,j as h,k as v,l as d,m,n as g,t as p,o as $,p as E,q as w,r as b,u as k,v as x,w as A,x as D,y as I,M as y,z as L,A as z,B as C,C as S,D as N,E as V,F as _,G as j,H as B,I as M,J as R,K as T,L as F,N as H}from"./client.ae17aca7.js";import"./asyncToGenerator.5229e80b.js";import{S as P,T as Z}from"./Timetravel.8050986a.js";function G(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,c=n(e);if(a){var s=n(this).constructor;r=Reflect.construct(c,arguments,s)}else r=c.apply(this,arguments);return t(this,r)}}function K(e){var n,t;return{c:function(){n=l("svg"),t=l("path"),this.h()},l:function(e){n=o(e,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var a=f(n);t=o(a,"path",{d:!0,fill:!0},1),f(t).forEach(u),a.forEach(u),this.h()},h:function(){h(t,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),h(t,"fill","currentColor"),h(n,"class","danger-icon svelte-11gnjhe"),h(n,"xmlns","http://www.w3.org/2000/svg"),h(n,"xmlns:xlink","http://www.w3.org/1999/xlink"),h(n,"aria-hidden","true"),h(n,"focusable","false"),h(n,"role","img"),h(n,"preserveAspectRatio","xMidYMid meet"),h(n,"viewBox","0 0 24 24"),v(n,"transform","rotate(360deg)")},m:function(e,a){d(e,n,a),m(n,t)},d:function(e){e&&u(n)}}}function O(e){var n,t,a,r=(e[0].betten_frei>0?"(".concat(Number(e[0].Anteil_betten_frei).toFixed(0),"%) ").concat(e[0].betten_frei):0)+"";return{c:function(){n=g("div"),t=p("Betten frei:\n            "),a=p(r),this.h()},l:function(e){n=o(e,"DIV",{class:!0});var c=f(n);t=$(c,"Betten frei:\n            "),a=$(c,r),c.forEach(u),this.h()},h:function(){h(n,"class","cases svelte-11gnjhe")},m:function(e,r){d(e,n,r),m(n,t),m(n,a)},p:function(e,n){1&n&&r!==(r=(e[0].betten_frei>0?"(".concat(Number(e[0].Anteil_betten_frei).toFixed(0),"%) ").concat(e[0].betten_frei):0)+"")&&E(a,r)},d:function(e){e&&u(n)}}}function U(e){var n,t;return{c:function(){n=g("div"),t=p("Keine Intensiv-Betten vorhanden"),this.h()},l:function(e){n=o(e,"DIV",{class:!0});var a=f(n);t=$(a,"Keine Intensiv-Betten vorhanden"),a.forEach(u),this.h()},h:function(){h(n,"class","cases svelte-11gnjhe")},m:function(e,a){d(e,n,a),m(n,t)},p:A,d:function(e){e&&u(n)}}}function J(e){var n,t,a,r,c,s,i,l,v=Number(e[0].Anteil_COVID_betten).toFixed(0)+"",k=e[0].faelle_covid_aktuell+"";return{c:function(){n=g("div"),t=p("Intensiv-Betten belegt mit Covid-19:\n            "),a=g("span"),r=p("("),c=p(v),s=p("%)"),i=w(),l=p(k),this.h()},l:function(e){n=o(e,"DIV",{class:!0});var h=f(n);t=$(h,"Intensiv-Betten belegt mit Covid-19:\n            "),a=o(h,"SPAN",{class:!0});var d=f(a);r=$(d,"("),c=$(d,v),s=$(d,"%)"),d.forEach(u),i=b(h),l=$(h,k),h.forEach(u),this.h()},h:function(){h(a,"class","percent"),h(n,"class","cases svelte-11gnjhe")},m:function(e,o){d(e,n,o),m(n,t),m(n,a),m(a,r),m(a,c),m(a,s),m(n,i),m(n,l)},p:function(e,n){1&n&&v!==(v=Number(e[0].Anteil_COVID_betten).toFixed(0)+"")&&E(c,v),1&n&&k!==(k=e[0].faelle_covid_aktuell+"")&&E(l,k)},d:function(e){e&&u(n)}}}function W(e){var n,t,a,r,c,s,i,v,D,I,y,L,z,C,S,N,V,_,j,B,M,R,T,F,H,P,Z,G,W,Y=Number(e[0].incidence).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"",q=e[0].district+"",Q=e[0].name+"",X=(e[0].newCases>0?e[0].newCases.toLocaleString("de-DE"):0)+"",ee=e[0].incidence>=200&&e[0].incidence<1e3&&K(),ne=null!==e[0].faelle_covid_aktuell&&O(e);function te(e,n){return null!==e[0].faelle_covid_aktuell?J:U}var ae=te(e),re=ae(e);return{c:function(){n=g("div"),t=g("canvas"),a=w(),r=g("div"),c=g("div"),s=g("div"),i=g("h3"),ee&&ee.c(),v=w(),D=p(Y),I=w(),y=g("div"),L=g("div"),z=p(q),C=w(),S=g("div"),N=p(Q),V=w(),_=g("div"),j=g("div"),B=g("div"),M=p("Neue Fälle:\n          "),R=p(X),T=w(),ne&&ne.c(),F=w(),H=g("div"),re.c(),P=w(),Z=l("svg"),G=l("path"),this.h()},l:function(e){n=o(e,"DIV",{class:!0});var l=f(n);t=o(l,"CANVAS",{class:!0}),f(t).forEach(u),a=b(l),r=o(l,"DIV",{class:!0});var h=f(r);c=o(h,"DIV",{class:!0});var d=f(c);s=o(d,"DIV",{class:!0});var m=f(s);i=o(m,"H3",{class:!0});var g=f(i);ee&&ee.l(g),v=b(g),D=$(g,Y),g.forEach(u),m.forEach(u),I=b(d),y=o(d,"DIV",{class:!0});var p=f(y);L=o(p,"DIV",{class:!0});var E=f(L);z=$(E,q),E.forEach(u),C=b(p),S=o(p,"DIV",{class:!0});var w=f(S);N=$(w,Q),w.forEach(u),p.forEach(u),d.forEach(u),V=b(h),_=o(h,"DIV",{class:!0});var k=f(_);j=o(k,"DIV",{class:!0});var x=f(j);B=o(x,"DIV",{class:!0});var A=f(B);M=$(A,"Neue Fälle:\n          "),R=$(A,X),A.forEach(u),T=b(x),ne&&ne.l(x),x.forEach(u),F=b(k),H=o(k,"DIV",{class:!0});var K=f(H);re.l(K),K.forEach(u),k.forEach(u),P=b(h),Z=o(h,"svg",{class:!0,viewBox:!0},1);var O=f(Z);G=o(O,"path",{d:!0},1),f(G).forEach(u),O.forEach(u),h.forEach(u),l.forEach(u),this.h()},h:function(){h(t,"class","canvas svelte-11gnjhe"),h(i,"class","number svelte-11gnjhe"),h(s,"class","column svelte-11gnjhe"),h(L,"class","area svelte-11gnjhe"),h(S,"class","city svelte-11gnjhe"),h(y,"class","column svelte-11gnjhe"),h(c,"class","row svelte-11gnjhe"),h(B,"class","cases svelte-11gnjhe"),h(j,"class","column svelte-11gnjhe"),h(H,"class","column svelte-11gnjhe"),h(_,"class","row svelte-11gnjhe"),h(G,"d","M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"),h(Z,"class","arrow-right-mini svelte-11gnjhe"),h(Z,"viewBox","-100.9 99.1 61.9 105.9"),h(r,"class","content svelte-11gnjhe"),h(n,"class",W=k("card ".concat(e[2]))+" svelte-11gnjhe")},m:function(l,o){d(l,n,o),m(n,t),e[5](t),m(n,a),m(n,r),m(r,c),m(c,s),m(s,i),ee&&ee.m(i,null),m(i,v),m(i,D),m(c,I),m(c,y),m(y,L),m(L,z),m(y,C),m(y,S),m(S,N),m(r,V),m(r,_),m(_,j),m(j,B),m(B,M),m(B,R),m(j,T),ne&&ne.m(j,null),m(_,F),m(_,H),re.m(H,null),m(r,P),m(r,Z),m(Z,G)},p:function(e,t){var a=x(t,1)[0];e[0].incidence>=200&&e[0].incidence<1e3?ee||((ee=K()).c(),ee.m(i,v)):ee&&(ee.d(1),ee=null),1&a&&Y!==(Y=Number(e[0].incidence).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"")&&E(D,Y),1&a&&q!==(q=e[0].district+"")&&E(z,q),1&a&&Q!==(Q=e[0].name+"")&&E(N,Q),1&a&&X!==(X=(e[0].newCases>0?e[0].newCases.toLocaleString("de-DE"):0)+"")&&E(R,X),null!==e[0].faelle_covid_aktuell?ne?ne.p(e,a):((ne=O(e)).c(),ne.m(j,null)):ne&&(ne.d(1),ne=null),ae===(ae=te(e))&&re?re.p(e,a):(re.d(1),(re=ae(e))&&(re.c(),re.m(H,null))),4&a&&W!==(W=k("card ".concat(e[2]))+" svelte-11gnjhe")&&h(n,"class",W)},i:A,o:A,d:function(t){t&&u(n),e[5](null),ee&&ee.d(),ne&&ne.d(),re.d()}}}function Y(e,n,t){var a,r,c,s=n.data,i="warning";return e.$$set=function(e){"data"in e&&t(0,s=e.data)},e.$$.update=function(){if(27&e.$$.dirty){t(2,i="warning"),s.incidence<35&&t(2,i="info"),s.incidence>=50&&s.incidence<100&&t(2,i="danger"),s.incidence>=100&&t(2,i="superdanger"),s.allIncidences&&(t(3,r=Array.from(s.allIncidences.incidences.datasets[0].data,(function(e){return e.y}))),t(4,c=100*Math.ceil(Math.max.apply(Math,D(r))/100))),"undefined"!=typeof window&&void 0!==a&&function(){if(a||a.getContext){var e=a.width,n=a.height,t=a.getContext("2d");t.clearRect(-10,0,e+10,n),s.allIncidences&&(t.fillStyle="rgba(0,0,0,0.14)",t.beginPath(),t.moveTo(-10,n),r.reverse().forEach((function(a,s){t.lineTo(e/(r.length-1)*s,n-a/(c/n))})),t.lineTo(610,n),t.strokeStyle="rgba(0,0,0,0.3)",t.lineWidth=1,t.stroke(),t.fill())}}()}},[s,a,i,r,c,function(e){I[e?"unshift":"push"]((function(){t(1,a=e)}))}]}var q=function(n){e(l,i);var t=G(l);function l(e){var n;return a(this,l),n=t.call(this),r(s(n),e,Y,W,c,{data:0}),n}return l}();function Q(e){var n=[];e.sort((function(e,n){return e.name<n.name?-1:(e.name,n.name,0)})),e.sort((function(e,n){return(""+e.district).localeCompare(n.district)})),e.sort((function(e,n){return(""+e.name).localeCompare(n.name)})),e.forEach((function(e){e.name.toLowerCase()=="Coburg".toLowerCase()?n.unshift(e):n.push(e)}));var t=n[0];return n.splice(0,1),n.splice(1,0,t),n}function X(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,c=n(e);if(a){var s=n(this).constructor;r=Reflect.construct(c,arguments,s)}else r=c.apply(this,arguments);return t(this,r)}}function ee(e,n,t){var a=e.slice();return a[7]=n[t],a[8]=n,a[9]=t,a}function ne(e){var n,t,a,r,c,s,i,l,E,k,x,A,D,I;return{c:function(){n=g("a"),t=g("div"),a=g("img"),r=w(),c=g("p"),s=g("small"),i=g("strong"),l=p("Jetzt als App mit ALLEN Landkreisen ›"),E=w(),k=g("br"),x=w(),A=g("small"),D=g("span"),I=p("⭐️ Eigene Landkreise speichern ⭐️ Impfstatistik ⭐️ Bundesländer\n            ⭐️ Weltweit"),this.h()},l:function(e){n=o(e,"A",{class:!0,href:!0});var h=f(n);t=o(h,"DIV",{class:!0});var v=f(t);a=o(v,"IMG",{src:!0,width:!0,height:!0,alt:!0,style:!0,class:!0}),v.forEach(u),r=b(h),c=o(h,"P",{class:!0});var d=f(c);s=o(d,"SMALL",{});var m=f(s);i=o(m,"STRONG",{});var g=f(i);l=$(g,"Jetzt als App mit ALLEN Landkreisen ›"),g.forEach(u),m.forEach(u),E=b(d),k=o(d,"BR",{}),x=b(d),A=o(d,"SMALL",{});var p=f(A);D=o(p,"SPAN",{});var w=f(D);I=$(w,"⭐️ Eigene Landkreise speichern ⭐️ Impfstatistik ⭐️ Bundesländer\n            ⭐️ Weltweit"),w.forEach(u),p.forEach(u),d.forEach(u),h.forEach(u),this.h()},h:function(){a.src!=="https://www.corona-ampel.app/favicons/maskable_icon_x128.png"&&h(a,"src","https://www.corona-ampel.app/favicons/maskable_icon_x128.png"),h(a,"width","64"),h(a,"height","64"),h(a,"alt","Ampel-Icon"),v(a,"height","auto"),v(a,"max-width","100%"),h(a,"class","svelte-kn43tz"),h(t,"class","logo svelte-kn43tz"),h(c,"class","details svelte-kn43tz"),h(n,"class","list-tile svelte-kn43tz"),h(n,"href","https://corona-ampel.app/?coburg")},m:function(e,o){d(e,n,o),m(n,t),m(t,a),m(n,r),m(n,c),m(c,s),m(s,i),m(i,l),m(c,E),m(c,k),m(c,x),m(c,A),m(A,D),m(D,I)},d:function(e){e&&u(n)}}}function te(e){var n,t,a,r,c,s;return{c:function(){n=g("small"),t=g("span"),a=p("💥 "),r=g("strong"),c=p("ACHTUNG!"),s=p(" Das RKI aktualisiert aktuell noch ihre Daten ...")},l:function(e){n=o(e,"SMALL",{});var i=f(n);t=o(i,"SPAN",{});var l=f(t);a=$(l,"💥 "),r=o(l,"STRONG",{});var h=f(r);c=$(h,"ACHTUNG!"),h.forEach(u),s=$(l," Das RKI aktualisiert aktuell noch ihre Daten ..."),l.forEach(u),i.forEach(u)},m:function(e,i){d(e,n,i),m(n,t),m(t,a),m(t,r),m(r,c),m(t,s)},d:function(e){e&&u(n)}}}function ae(e){var n,t,a,r,c,s,i,l;function v(n){e[5].call(null,n,e[7],e[8],e[9])}var p={};return void 0!==e[7]&&(p.data=e[7]),a=new q({props:p}),I.push((function(){return R(a,"data",v)})),{c:function(){n=g("li"),t=g("a"),L(a.$$.fragment),i=w(),this.h()},l:function(e){n=o(e,"LI",{class:!0});var r=f(n);t=o(r,"A",{rel:!0,href:!0,title:!0,class:!0});var c=f(t);z(a.$$.fragment,c),c.forEach(u),i=b(r),r.forEach(u),this.h()},h:function(){h(t,"rel","prefetch"),h(t,"href",c=e[7].slug+"/"),h(t,"title",s="Zu ".concat(e[7].district," ").concat(e[7].name," ›")),h(t,"class","svelte-kn43tz"),h(n,"class","svelte-kn43tz")},m:function(e,r){d(e,n,r),m(n,t),C(a,t,null),m(n,i),l=!0},p:function(n,i){e=n;var o={};!r&&4&i&&(r=!0,o.data=e[7],T((function(){return r=!1}))),a.$set(o),(!l||4&i&&c!==(c=e[7].slug+"/"))&&h(t,"href",c),(!l||4&i&&s!==(s="Zu ".concat(e[7].district," ").concat(e[7].name," ›")))&&h(t,"title",s)},i:function(e){l||(S(a.$$.fragment,e),l=!0)},o:function(e){N(a.$$.fragment,e),l=!1},d:function(e){e&&u(n),V(a)}}}function re(e){var n,t,a,r,c,s;return{c:function(){n=g("small"),t=l("svg"),a=l("path"),r=w(),c=g("span"),s=p("Ab 200 gelten weitere Maßnahmen in Bayern!"),this.h()},l:function(e){n=o(e,"SMALL",{});var i=f(n);t=o(i,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var l=f(t);a=o(l,"path",{d:!0,fill:!0},1),f(a).forEach(u),l.forEach(u),r=b(i),c=o(i,"SPAN",{});var h=f(c);s=$(h,"Ab 200 gelten weitere Maßnahmen in Bayern!"),h.forEach(u),i.forEach(u),this.h()},h:function(){h(a,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),h(a,"fill","currentColor"),h(t,"class","danger-icon"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),h(t,"aria-hidden","true"),h(t,"focusable","false"),h(t,"role","img"),h(t,"width","1.5em"),h(t,"height","1.5em"),h(t,"preserveAspectRatio","xMidYMid meet"),h(t,"viewBox","0 0 24 24"),v(t,"transform","translate3d(0, -2px, 0)"),v(t,"vertical-align","middle")},m:function(e,i){d(e,n,i),m(n,t),m(t,a),m(n,r),m(n,c),m(c,s)},d:function(e){e&&u(n)}}}function ce(e){var n,t,a,r,c,s,i,l,v,k,A,D,I,M,R,T,H,G,K,O,U,J,W,Y,q,Q,X,ce,se,ie,le,oe,fe,ue,he,ve,de,me,ge=(e[0]?e[0].toLocaleString("de"):"0")+"",pe=(e[1]?e[1].toLocaleString("de"):"0")+"";s=new y({props:{until:"2020-12-15T23:00:00Z",$$slots:{default:[ne]},$$scope:{ctx:e}}}),v=new y({props:{until:"2021-09-09T17:00:00Z",$$slots:{default:[te]},$$scope:{ctx:e}}});for(var $e=e[2],Ee=[],we=0;we<$e.length;we+=1)Ee[we]=ae(ee(e,$e,we));var be=function(e){return N(Ee[e],1,1,(function(){Ee[e]=null}))};return oe=new P({}),ue=new Z({}),de=new y({props:{until:"2021-01-31T00:00:00Z",$$slots:{default:[re]},$$scope:{ctx:e}}}),{c:function(){n=g("meta"),t=g("meta"),a=g("meta"),r=w(),c=g("center"),L(s.$$.fragment),i=w(),l=g("center"),L(v.$$.fragment),k=w(),A=g("section"),D=g("div"),I=g("h3"),M=p("Neue Fälle in Deutschland"),R=w(),T=g("div"),H=p("+"),G=p(ge),K=w(),O=g("div"),U=g("h3"),J=p("Neue Fälle in Bayern"),W=w(),Y=g("div"),q=p("+"),Q=p(pe),X=w(),ce=g("nav"),se=g("ul");for(var e=0;e<Ee.length;e+=1)Ee[e].c();ie=w(),le=g("div"),L(oe.$$.fragment),fe=w(),L(ue.$$.fragment),he=w(),ve=g("div"),L(de.$$.fragment),this.h()},l:function(e){var h=_('[data-svelte="svelte-cy433z"]',document.head);n=o(h,"META",{content:!0,name:!0}),t=o(h,"META",{property:!0,content:!0}),a=o(h,"META",{property:!0,content:!0}),h.forEach(u),r=b(e),c=o(e,"CENTER",{});var d=f(c);z(s.$$.fragment,d),d.forEach(u),i=b(e),l=o(e,"CENTER",{});var m=f(l);z(v.$$.fragment,m),m.forEach(u),k=b(e),A=o(e,"SECTION",{class:!0});var g=f(A);D=o(g,"DIV",{class:!0});var p=f(D);I=o(p,"H3",{class:!0});var E=f(I);M=$(E,"Neue Fälle in Deutschland"),E.forEach(u),R=b(p),T=o(p,"DIV",{class:!0});var w=f(T);H=$(w,"+"),G=$(w,ge),w.forEach(u),p.forEach(u),K=b(g),O=o(g,"DIV",{class:!0});var x=f(O);U=o(x,"H3",{class:!0});var y=f(U);J=$(y,"Neue Fälle in Bayern"),y.forEach(u),W=b(x),Y=o(x,"DIV",{class:!0});var L=f(Y);q=$(L,"+"),Q=$(L,pe),L.forEach(u),x.forEach(u),g.forEach(u),X=b(e),ce=o(e,"NAV",{});var C=f(ce);se=o(C,"UL",{id:!0,class:!0});for(var S=f(se),N=0;N<Ee.length;N+=1)Ee[N].l(S);S.forEach(u),C.forEach(u),ie=b(e),le=o(e,"DIV",{class:!0});var V=f(le);z(oe.$$.fragment,V),V.forEach(u),fe=b(e),z(ue.$$.fragment,e),he=b(e),ve=o(e,"DIV",{class:!0});var j=f(ve);z(de.$$.fragment,j),j.forEach(u),this.h()},h:function(){document.title="Corona-Ampel-Coburg: 🚦 Aktuelle Fälle und Zahlen",h(n,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),h(n,"name","description"),h(t,"property","og:title"),h(t,"content","Corona-Ampel Coburg und Umgebung: aktuelle 7 Tage Corona Inzidenz"),h(a,"property","og:description"),h(a,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),h(I,"class","label svelte-kn43tz"),h(T,"class","cases svelte-kn43tz"),h(D,"class","column left svelte-kn43tz"),h(U,"class","label svelte-kn43tz"),h(Y,"class","cases svelte-kn43tz"),h(O,"class","column right svelte-kn43tz"),h(A,"class","statistics svelte-kn43tz"),h(se,"id","hp-cardlist"),h(se,"class","svelte-kn43tz"),h(le,"class","social svelte-kn43tz"),h(ve,"class","hints svelte-kn43tz")},m:function(e,o){m(document.head,n),m(document.head,t),m(document.head,a),d(e,r,o),d(e,c,o),C(s,c,null),d(e,i,o),d(e,l,o),C(v,l,null),d(e,k,o),d(e,A,o),m(A,D),m(D,I),m(I,M),m(D,R),m(D,T),m(T,H),m(T,G),m(A,K),m(A,O),m(O,U),m(U,J),m(O,W),m(O,Y),m(Y,q),m(Y,Q),d(e,X,o),d(e,ce,o),m(ce,se);for(var f=0;f<Ee.length;f+=1)Ee[f].m(se,null);d(e,ie,o),d(e,le,o),C(oe,le,null),d(e,fe,o),C(ue,e,o),d(e,he,o),d(e,ve,o),C(de,ve,null),me=!0},p:function(e,n){var t=x(n,1)[0],a={};1024&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a);var r={};if(1024&t&&(r.$$scope={dirty:t,ctx:e}),v.$set(r),(!me||1&t)&&ge!==(ge=(e[0]?e[0].toLocaleString("de"):"0")+"")&&E(G,ge),(!me||2&t)&&pe!==(pe=(e[1]?e[1].toLocaleString("de"):"0")+"")&&E(Q,pe),4&t){var c;for($e=e[2],c=0;c<$e.length;c+=1){var i=ee(e,$e,c);Ee[c]?(Ee[c].p(i,t),S(Ee[c],1)):(Ee[c]=ae(i),Ee[c].c(),S(Ee[c],1),Ee[c].m(se,null))}for(F(),c=$e.length;c<Ee.length;c+=1)be(c);j()}var l={};1024&t&&(l.$$scope={dirty:t,ctx:e}),de.$set(l)},i:function(e){if(!me){S(s.$$.fragment,e),S(v.$$.fragment,e);for(var n=0;n<$e.length;n+=1)S(Ee[n]);S(oe.$$.fragment,e),S(ue.$$.fragment,e),S(de.$$.fragment,e),me=!0}},o:function(e){N(s.$$.fragment,e),N(v.$$.fragment,e),Ee=Ee.filter(Boolean);for(var n=0;n<Ee.length;n+=1)N(Ee[n]);N(oe.$$.fragment,e),N(ue.$$.fragment,e),N(de.$$.fragment,e),me=!1},d:function(e){u(n),u(t),u(a),e&&u(r),e&&u(c),V(s),e&&u(i),e&&u(l),V(v),e&&u(k),e&&u(A),e&&u(X),e&&u(ce),B(Ee,e),e&&u(ie),e&&u(le),V(oe),e&&u(fe),V(ue,e),e&&u(he),e&&u(ve),V(de)}}}function se(){this.fetch("sitemap.xml");return this.fetch("index.json").then((function(e){return e.json()})).then((function(e){return{data:e}}))}function ie(e,n,t){var a;M(e,H,(function(e){return t(4,a=e)}));var r=n.data,c=r,s=c.citys,i=c.germannew,l=c.bavarianew,o=[];return o=Q(s),e.$$set=function(e){"data"in e&&t(3,r=e.data)},e.$$.update=function(){16&e.$$.dirty&&a&&a.citys&&(t(2,o=Q(a.citys)),t(0,i=a.germannew),t(1,l=a.bavarianew))},[i,l,o,r,a,function(e,n,r,c){r[c]=e,t(2,o),t(4,a)}]}var le=function(n){e(l,i);var t=X(l);function l(e){var n;return a(this,l),n=t.call(this),r(s(n),e,ie,ce,c,{data:3}),n}return l}();export default le;export{se as preload};
