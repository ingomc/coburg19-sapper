import{S as e,i as a,s as n,a as t,c as s,b as l,d as r,e as i,f as c,g as o,h,j as d,t as u,k as f,l as v,m as g,n as m,o as p,p as $,q as w,r as E,u as x,M as b,v as k,w as I,x as D,y as A,z as C,A as y,B as L,C as z,D as V,E as S,F as N,G as _,H as T}from"./client.85fbf3cc.js";import{t as M,S as H,T as B}from"./Timetravel.0749787a.js";function F(e){let a,n;return{c(){a=t("svg"),n=t("path"),this.h()},l(e){a=s(e,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var t=l(a);n=s(t,"path",{d:!0,fill:!0},1),l(n).forEach(r),t.forEach(r),this.h()},h(){i(n,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),i(n,"fill","currentColor"),i(a,"class","danger-icon svelte-13r15sk"),i(a,"xmlns","http://www.w3.org/2000/svg"),i(a,"xmlns:xlink","http://www.w3.org/1999/xlink"),i(a,"aria-hidden","true"),i(a,"focusable","false"),i(a,"role","img"),i(a,"preserveAspectRatio","xMidYMid meet"),i(a,"viewBox","0 0 24 24"),c(a,"transform","rotate(360deg)")},m(e,t){o(e,a,t),h(a,n)},d(e){e&&r(a)}}}function P(e){let a,n,t=e[0].district+"";return{c(){a=d("div"),n=u(t),this.h()},l(e){a=s(e,"DIV",{class:!0});var i=l(a);n=f(i,t),i.forEach(r),this.h()},h(){i(a,"class","area svelte-13r15sk")},m(e,t){o(e,a,t),h(a,n)},p(e,a){1&a&&t!==(t=e[0].district+"")&&v(n,t)},d(e){e&&r(a)}}}function R(e){let a,n,t,c=(e[0].betten_frei>0?`(${Number(e[0].Anteil_betten_frei).toFixed(0)}%) ${e[0].betten_frei}`:0)+"";return{c(){a=d("div"),n=u("Betten frei:\n            "),t=u(c),this.h()},l(e){a=s(e,"DIV",{class:!0});var i=l(a);n=f(i,"Betten frei:\n            "),t=f(i,c),i.forEach(r),this.h()},h(){i(a,"class","cases svelte-13r15sk")},m(e,s){o(e,a,s),h(a,n),h(a,t)},p(e,a){1&a&&c!==(c=(e[0].betten_frei>0?`(${Number(e[0].Anteil_betten_frei).toFixed(0)}%) ${e[0].betten_frei}`:0)+"")&&v(t,c)},d(e){e&&r(a)}}}function Z(e){let a,n;return{c(){a=d("div"),n=u("Keine Intensiv-Betten vorhanden"),this.h()},l(e){a=s(e,"DIV",{class:!0});var t=l(a);n=f(t,"Keine Intensiv-Betten vorhanden"),t.forEach(r),this.h()},h(){i(a,"class","cases svelte-13r15sk")},m(e,t){o(e,a,t),h(a,n)},p:$,d(e){e&&r(a)}}}function G(e){let a,n,t,c,p,$,w,E,x=Number(e[0].Anteil_COVID_betten).toFixed(0)+"",b=e[0].faelle_covid_aktuell+"";return{c(){a=d("div"),n=u("Intensiv-Betten belegt mit Covid-19:\n            "),t=d("span"),c=u("("),p=u(x),$=u("%)"),w=g(),E=u(b),this.h()},l(e){a=s(e,"DIV",{class:!0});var i=l(a);n=f(i,"Intensiv-Betten belegt mit Covid-19:\n            "),t=s(i,"SPAN",{class:!0});var o=l(t);c=f(o,"("),p=f(o,x),$=f(o,"%)"),o.forEach(r),w=m(i),E=f(i,b),i.forEach(r),this.h()},h(){i(t,"class","percent"),i(a,"class","cases svelte-13r15sk")},m(e,s){o(e,a,s),h(a,n),h(a,t),h(t,c),h(t,p),h(t,$),h(a,w),h(a,E)},p(e,a){1&a&&x!==(x=Number(e[0].Anteil_COVID_betten).toFixed(0)+"")&&v(p,x),1&a&&b!==(b=e[0].faelle_covid_aktuell+"")&&v(E,b)},d(e){e&&r(a)}}}function O(e){let a,n;return{c(){a=t("svg"),n=t("path"),this.h()},l(e){a=s(e,"svg",{class:!0,viewBox:!0},1);var t=l(a);n=s(t,"path",{d:!0},1),l(n).forEach(r),t.forEach(r),this.h()},h(){i(n,"d","M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"),i(a,"class","arrow-right-mini svelte-13r15sk"),i(a,"viewBox","-100.9 99.1 61.9 105.9")},m(e,t){o(e,a,t),h(a,n)},d(e){e&&r(a)}}}function K(e){let a,n,t,c,w,E,x,b,k,I,D,A,C,y,L,z,V,S,N,_,T,M,H,B,K,j=Number(e[0].incidence).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"",U=e[0].name+"",W=(e[0].newCases>0?e[0].newCases.toLocaleString("de-DE"):0)+"",Y=e[0].incidence>=200&&e[0].incidence<1e3&&F(),Q=void 0!==e[0].district&&P(e),q=null!==e[0].faelle_covid_aktuell&&void 0!==e[0].faelle_covid_aktuell&&R(e);function J(e,a){return null!==e[0].faelle_covid_aktuell&&void 0!==e[0].faelle_covid_aktuell?G:void 0!==e[0].faelle_covid_aktuell?Z:void 0}let X=J(e),ee=X&&X(e),ae=void 0!==e[0].slug&&O();return{c(){a=d("div"),n=d("canvas"),t=g(),c=d("div"),w=d("div"),E=d("div"),x=d("h3"),Y&&Y.c(),b=g(),k=u(j),I=g(),D=d("div"),Q&&Q.c(),A=g(),C=d("div"),y=u(U),L=g(),z=d("div"),V=d("div"),S=d("div"),N=u("Neue Fälle:\n          "),_=u(W),T=g(),q&&q.c(),M=g(),H=d("div"),ee&&ee.c(),B=g(),ae&&ae.c(),this.h()},l(e){a=s(e,"DIV",{class:!0});var i=l(a);n=s(i,"CANVAS",{class:!0}),l(n).forEach(r),t=m(i),c=s(i,"DIV",{class:!0});var o=l(c);w=s(o,"DIV",{class:!0});var h=l(w);E=s(h,"DIV",{class:!0});var d=l(E);x=s(d,"H3",{class:!0});var u=l(x);Y&&Y.l(u),b=m(u),k=f(u,j),u.forEach(r),d.forEach(r),I=m(h),D=s(h,"DIV",{class:!0});var v=l(D);Q&&Q.l(v),A=m(v),C=s(v,"DIV",{class:!0});var g=l(C);y=f(g,U),g.forEach(r),v.forEach(r),h.forEach(r),L=m(o),z=s(o,"DIV",{class:!0});var p=l(z);V=s(p,"DIV",{class:!0});var $=l(V);S=s($,"DIV",{class:!0});var F=l(S);N=f(F,"Neue Fälle:\n          "),_=f(F,W),F.forEach(r),T=m($),q&&q.l($),$.forEach(r),M=m(p),H=s(p,"DIV",{class:!0});var P=l(H);ee&&ee.l(P),P.forEach(r),p.forEach(r),B=m(o),ae&&ae.l(o),o.forEach(r),i.forEach(r),this.h()},h(){i(n,"class","canvas svelte-13r15sk"),i(x,"class","number svelte-13r15sk"),i(E,"class","column svelte-13r15sk"),i(C,"class","city svelte-13r15sk"),i(D,"class","column svelte-13r15sk"),i(w,"class","row svelte-13r15sk"),i(S,"class","cases svelte-13r15sk"),i(V,"class","column svelte-13r15sk"),i(H,"class","column svelte-13r15sk"),i(z,"class","row svelte-13r15sk"),i(c,"class","content svelte-13r15sk"),i(a,"class",K=p(`card ${e[2]}`)+" svelte-13r15sk")},m(s,l){o(s,a,l),h(a,n),e[5](n),h(a,t),h(a,c),h(c,w),h(w,E),h(E,x),Y&&Y.m(x,null),h(x,b),h(x,k),h(w,I),h(w,D),Q&&Q.m(D,null),h(D,A),h(D,C),h(C,y),h(c,L),h(c,z),h(z,V),h(V,S),h(S,N),h(S,_),h(V,T),q&&q.m(V,null),h(z,M),h(z,H),ee&&ee.m(H,null),h(c,B),ae&&ae.m(c,null)},p(e,[n]){e[0].incidence>=200&&e[0].incidence<1e3?Y||(Y=F(),Y.c(),Y.m(x,b)):Y&&(Y.d(1),Y=null),1&n&&j!==(j=Number(e[0].incidence).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"")&&v(k,j),void 0!==e[0].district?Q?Q.p(e,n):(Q=P(e),Q.c(),Q.m(D,A)):Q&&(Q.d(1),Q=null),1&n&&U!==(U=e[0].name+"")&&v(y,U),1&n&&W!==(W=(e[0].newCases>0?e[0].newCases.toLocaleString("de-DE"):0)+"")&&v(_,W),null!==e[0].faelle_covid_aktuell&&void 0!==e[0].faelle_covid_aktuell?q?q.p(e,n):(q=R(e),q.c(),q.m(V,null)):q&&(q.d(1),q=null),X===(X=J(e))&&ee?ee.p(e,n):(ee&&ee.d(1),ee=X&&X(e),ee&&(ee.c(),ee.m(H,null))),void 0!==e[0].slug?ae||(ae=O(),ae.c(),ae.m(c,null)):ae&&(ae.d(1),ae=null),4&n&&K!==(K=p(`card ${e[2]}`)+" svelte-13r15sk")&&i(a,"class",K)},i:$,o:$,d(n){n&&r(a),e[5](null),Y&&Y.d(),Q&&Q.d(),q&&q.d(),ee&&ee.d(),ae&&ae.d()}}}function j(e,a,n){let t,s,l,{data:r}=a,i="warning";return e.$$set=e=>{"data"in e&&n(0,r=e.data)},e.$$.update=()=>{if(27&e.$$.dirty){n(2,i="warning"),r.incidence<35&&n(2,i="info"),r.incidence>=50&&r.incidence<100&&n(2,i="danger"),r.incidence>=100&&n(2,i="superdanger"),r.allIncidences&&(n(3,s=Array.from(r.allIncidences.incidences.datasets[0].data,(e=>e.y))),n(4,l=100*Math.ceil(Math.max(...s)/100))),"undefined"!=typeof window&&void 0!==t&&function(){if(!t&&!t.getContext)return;const e=t.width,a=t.height,n=t.getContext("2d");n.clearRect(-10,0,e+10,a),r.allIncidences&&(n.fillStyle=r.incidence>=100?"rgba(255,100,100,0.1)":"rgba(0,0,0,0.1)",n.beginPath(),n.moveTo(-10,a),s.reverse().forEach(((t,r)=>{n.lineTo(e/(s.length-1)*r,a-t/(l/a))})),n.lineTo(610,a),n.strokeStyle=r.incidence>=100?"rgba(255,100,100,0.2)":"rgba(0,0,0,0.2)",n.lineWidth=1,n.stroke(),n.fill())}()}},[r,t,i,s,l,function(e){w[e?"unshift":"push"]((()=>{t=e,n(1,t)}))}]}class U extends e{constructor(e){super(),a(this,e,j,K,n,{data:0})}}function W(e){let a,n;return{c(){a=t("svg"),n=t("path"),this.h()},l(e){a=s(e,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var t=l(a);n=s(t,"path",{d:!0,fill:!0},1),l(n).forEach(r),t.forEach(r),this.h()},h(){i(n,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),i(n,"fill","currentColor"),i(a,"class","danger-icon svelte-10dxt8h"),i(a,"xmlns","http://www.w3.org/2000/svg"),i(a,"xmlns:xlink","http://www.w3.org/1999/xlink"),i(a,"aria-hidden","true"),i(a,"focusable","false"),i(a,"role","img"),i(a,"preserveAspectRatio","xMidYMid meet"),i(a,"viewBox","0 0 24 24"),c(a,"transform","rotate(360deg)")},m(e,t){o(e,a,t),h(a,n)},d(e){e&&r(a)}}}function Y(e){let a,n,t=e[0].district+"";return{c(){a=d("div"),n=u(t),this.h()},l(e){a=s(e,"DIV",{class:!0});var i=l(a);n=f(i,t),i.forEach(r),this.h()},h(){i(a,"class","area svelte-10dxt8h")},m(e,t){o(e,a,t),h(a,n)},p(e,a){1&a&&t!==(t=e[0].district+"")&&v(n,t)},d(e){e&&r(a)}}}function Q(e){let a,n,t,c,w,E,x,b,k,I,D,A,C,y,L,z,V,S,N,_=Number(e[3]).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"",T=e[0].name+"",M=(e[0].newCases>0?e[0].newCases.toLocaleString("de-DE"):0)+"",H=e[0].incidence>=200&&e[0].incidence<1e3&&W(),B=void 0!==e[0].district&&Y(e);return{c(){a=d("div"),n=d("canvas"),t=g(),c=d("div"),w=d("div"),E=d("div"),x=d("h3"),H&&H.c(),b=g(),k=u(_),I=g(),D=d("div"),B&&B.c(),A=g(),C=d("div"),y=u(T),L=g(),z=d("div"),V=u("Neue Fälle: +"),S=u(M),this.h()},l(e){a=s(e,"DIV",{class:!0});var i=l(a);n=s(i,"CANVAS",{class:!0}),l(n).forEach(r),t=m(i),c=s(i,"DIV",{class:!0});var o=l(c);w=s(o,"DIV",{class:!0});var h=l(w);E=s(h,"DIV",{class:!0});var d=l(E);x=s(d,"H3",{class:!0});var u=l(x);H&&H.l(u),b=m(u),k=f(u,_),u.forEach(r),d.forEach(r),I=m(h),D=s(h,"DIV",{class:!0});var v=l(D);B&&B.l(v),A=m(v),C=s(v,"DIV",{class:!0});var g=l(C);y=f(g,T),g.forEach(r),L=m(v),z=s(v,"DIV",{class:!0});var p=l(z);V=f(p,"Neue Fälle: +"),S=f(p,M),p.forEach(r),v.forEach(r),h.forEach(r),o.forEach(r),i.forEach(r),this.h()},h(){i(n,"class","canvas svelte-10dxt8h"),i(x,"class","number svelte-10dxt8h"),i(E,"class","column svelte-10dxt8h"),i(C,"class","city svelte-10dxt8h"),i(z,"class","cases svelte-10dxt8h"),i(D,"class","column svelte-10dxt8h"),i(w,"class","row svelte-10dxt8h"),i(c,"class","content svelte-10dxt8h"),i(a,"class",N=p(`card ${e[2]}`)+" svelte-10dxt8h")},m(s,l){o(s,a,l),h(a,n),e[7](n),h(a,t),h(a,c),h(c,w),h(w,E),h(E,x),H&&H.m(x,null),h(x,b),h(x,k),h(w,I),h(w,D),B&&B.m(D,null),h(D,A),h(D,C),h(C,y),h(D,L),h(D,z),h(z,V),h(z,S)},p(e,[n]){e[0].incidence>=200&&e[0].incidence<1e3?H||(H=W(),H.c(),H.m(x,b)):H&&(H.d(1),H=null),8&n&&_!==(_=Number(e[3]).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"")&&v(k,_),void 0!==e[0].district?B?B.p(e,n):(B=Y(e),B.c(),B.m(D,A)):B&&(B.d(1),B=null),1&n&&T!==(T=e[0].name+"")&&v(y,T),1&n&&M!==(M=(e[0].newCases>0?e[0].newCases.toLocaleString("de-DE"):0)+"")&&v(S,M),4&n&&N!==(N=p(`card ${e[2]}`)+" svelte-10dxt8h")&&i(a,"class",N)},i:$,o:$,d(n){n&&r(a),e[7](null),H&&H.d(),B&&B.d()}}}function q(e,a,n){let t,{data:s}=a;const l=M(0,{duration:2e3,easing:x});let r;E(e,l,(e=>n(3,t=e)));let i,c,o="warning";return e.$$set=e=>{"data"in e&&n(0,s=e.data)},e.$$.update=()=>{if(99&e.$$.dirty){l.set(s.incidence),n(2,o="warning"),s.incidence<35&&n(2,o="info"),s.incidence>=50&&s.incidence<100&&n(2,o="danger"),s.incidence>=100&&n(2,o="superdanger"),s.allIncidences&&(n(5,i=Array.from(s.allIncidences.incidences.datasets[0].data,(e=>e.y))),n(6,c=100*Math.ceil(Math.max(...i)/100))),"undefined"!=typeof window&&void 0!==r&&function(){if(!r&&!r.getContext)return;const e=r.width,a=r.height,n=r.getContext("2d");n.clearRect(-10,0,e+10,a),s.allIncidences&&(n.fillStyle=s.incidence>=100?"rgba(255,100,100,0.1)":"rgba(0,0,0,0.1)",n.beginPath(),n.moveTo(-10,a),i.reverse().forEach(((t,s)=>{n.lineTo(e/(i.length-1)*s,a-t/(c/a))})),n.lineTo(610,a),n.strokeStyle=s.incidence>=100?"rgba(255,100,100,0.2)":"rgba(0,0,0,0.2)",n.lineWidth=1,n.stroke(),n.fill())}()}},[s,r,o,t,l,i,c,function(e){w[e?"unshift":"push"]((()=>{r=e,n(1,r)}))}]}class J extends e{constructor(e){super(),a(this,e,q,Q,n,{data:0})}}function X(e){let a=[];e.sort(((e,a)=>e.name<a.name?-1:(e.name,a.name,0))),e.sort(((e,a)=>(""+e.district).localeCompare(a.district))),e.sort(((e,a)=>(""+e.name).localeCompare(a.name))),e.forEach((e=>{e.name.toLowerCase()=="Coburg".toLowerCase()?a.unshift(e):a.push(e)}));const n=a[0];return a.splice(0,1),a.splice(1,0,n),a}function ee(e){let a,n,t,c,w,E,x,b,k,I,D,A,C,y,L,z,V,S,N,_,T=e[0].hospitalizationLast7Days+"",M=e[0].currentIntensiveCarePatients+"";return{c(){a=d("div"),n=d("div"),t=d("div"),c=d("div"),w=g(),E=d("div"),x=d("div"),b=d("span"),k=u("Neue Krankenhaus-Corona-Einweisungen in den letzten 7 Tagen"),I=g(),D=d("span"),A=u(T),C=g(),y=d("div"),L=d("span"),z=u("COVID-19 Patienten auf Intensivstationen"),V=g(),S=d("span"),N=u(M),this.h()},l(e){a=s(e,"DIV",{class:!0});var i=l(a);n=s(i,"DIV",{class:!0});var o=l(n);t=s(o,"DIV",{class:!0});var h=l(t);c=s(h,"DIV",{class:!0}),l(c).forEach(r),w=m(h),E=s(h,"DIV",{class:!0});var d=l(E);x=s(d,"DIV",{class:!0});var u=l(x);b=s(u,"SPAN",{class:!0});var v=l(b);k=f(v,"Neue Krankenhaus-Corona-Einweisungen in den letzten 7 Tagen"),v.forEach(r),I=m(u),D=s(u,"SPAN",{class:!0});var g=l(D);A=f(g,T),g.forEach(r),u.forEach(r),C=m(d),y=s(d,"DIV",{class:!0});var p=l(y);L=s(p,"SPAN",{class:!0});var $=l(L);z=f($,"COVID-19 Patienten auf Intensivstationen"),$.forEach(r),V=m(p),S=s(p,"SPAN",{class:!0});var _=l(S);N=f(_,M),_.forEach(r),p.forEach(r),d.forEach(r),h.forEach(r),o.forEach(r),i.forEach(r),this.h()},h(){i(c,"class","circle svelte-uynxfv"),i(b,"class","label svelte-uynxfv"),i(D,"class","number svelte-uynxfv"),i(x,"class","text-column svelte-uynxfv"),i(L,"class","label svelte-uynxfv"),i(S,"class","number svelte-uynxfv"),i(y,"class","text-column svelte-uynxfv"),i(E,"class","text"),i(t,"class",_=p(`stage-wrapper stage-${e[1]()}`)+" svelte-uynxfv"),i(n,"class","card svelte-uynxfv"),i(a,"class","wrapper svelte-uynxfv")},m(e,s){o(e,a,s),h(a,n),h(n,t),h(t,c),h(t,w),h(t,E),h(E,x),h(x,b),h(b,k),h(x,I),h(x,D),h(D,A),h(E,C),h(E,y),h(y,L),h(L,z),h(y,V),h(y,S),h(S,N)},p(e,[a]){1&a&&T!==(T=e[0].hospitalizationLast7Days+"")&&v(A,T),1&a&&M!==(M=e[0].currentIntensiveCarePatients+"")&&v(N,M),2&a&&_!==(_=p(`stage-wrapper stage-${e[1]()}`)+" svelte-uynxfv")&&i(t,"class",_)},i:$,o:$,d(e){e&&r(a)}}}const ae=600,ne=1200,te=450;function se(e,a,n){let{data:t}=a,{getStage:s=(()=>t.currentIntensiveCarePatients>=ae?2:t.hospitalizationLast7Days>=ne&&t.currentIntensiveCarePatients<ae||t.currentIntensiveCarePatients>=te&&t.currentIntensiveCarePatients<ae?1:0)}=a;return e.$$set=e=>{"data"in e&&n(0,t=e.data),"getStage"in e&&n(1,s=e.getStage)},[t,s]}class le extends e{constructor(e){super(),a(this,e,se,ee,n,{data:0,getStage:1})}}function re(e,a,n){const t=e.slice();return t[15]=a[n],t[16]=a,t[17]=n,t}function ie(e){let a,n,t,v,p,$,w,E,x;return{c(){a=d("a"),n=d("div"),t=d("img"),p=g(),$=d("p"),w=d("small"),E=d("strong"),x=u("Zur App mit ALLEN Landkreisen ›"),this.h()},l(e){a=s(e,"A",{class:!0,href:!0});var i=l(a);n=s(i,"DIV",{class:!0});var c=l(n);t=s(c,"IMG",{src:!0,width:!0,height:!0,alt:!0,style:!0,class:!0}),c.forEach(r),p=m(i),$=s(i,"P",{class:!0});var o=l($);w=s(o,"SMALL",{});var h=l(w);E=s(h,"STRONG",{});var d=l(E);x=f(d,"Zur App mit ALLEN Landkreisen ›"),d.forEach(r),h.forEach(r),o.forEach(r),i.forEach(r),this.h()},h(){t.src!==(v="https://www.corona-ampel.app/favicons/maskable_icon_x128.png")&&i(t,"src","https://www.corona-ampel.app/favicons/maskable_icon_x128.png"),i(t,"width","24"),i(t,"height","24"),i(t,"alt","Ampel-Icon"),c(t,"height","auto"),c(t,"max-width","100%"),i(t,"class","svelte-33g6ew"),i(n,"class","logo svelte-33g6ew"),i($,"class","details svelte-33g6ew"),i(a,"class","list-tile svelte-33g6ew"),i(a,"href","https://corona-ampel.app/?coburg")},m(e,s){o(e,a,s),h(a,n),h(n,t),h(a,p),h(a,$),h($,w),h(w,E),h(E,x)},d(e){e&&r(a)}}}function ce(e){let a,n,t,i,c,v;return{c(){a=d("small"),n=d("span"),t=u("💥 "),i=d("strong"),c=u("ACHTUNG!"),v=u(" Das RKI aktualisiert aktuell noch ihre Daten ...")},l(e){a=s(e,"SMALL",{});var o=l(a);n=s(o,"SPAN",{});var h=l(n);t=f(h,"💥 "),i=s(h,"STRONG",{});var d=l(i);c=f(d,"ACHTUNG!"),d.forEach(r),v=f(h," Das RKI aktualisiert aktuell noch ihre Daten ..."),h.forEach(r),o.forEach(r)},m(e,s){o(e,a,s),h(a,n),h(n,t),h(n,i),h(i,c),h(n,v)},d(e){e&&r(a)}}}function oe(e){let a,n,t,c,v,p,$,E,x;function b(a){e[8].call(null,a)}let L={};return void 0!==e[0][0]&&(L.data=e[0][0]),c=new le({props:L}),w.push((()=>S(c,"data",b))),{c(){a=d("h2"),n=u("Hospitalisierung in Bayern"),t=g(),k(c.$$.fragment),p=g(),$=d("h2"),E=u("7 Tage Inzidenz"),this.h()},l(e){a=s(e,"H2",{class:!0});var i=l(a);n=f(i,"Hospitalisierung in Bayern"),i.forEach(r),t=m(e),I(c.$$.fragment,e),p=m(e),$=s(e,"H2",{class:!0});var o=l($);E=f(o,"7 Tage Inzidenz"),o.forEach(r),this.h()},h(){i(a,"class","svelte-33g6ew"),i($,"class","svelte-33g6ew")},m(e,s){o(e,a,s),h(a,n),o(e,t,s),D(c,e,s),o(e,p,s),o(e,$,s),h($,E),x=!0},p(e,a){const n={};!v&&1&a&&(v=!0,n.data=e[0][0],N((()=>v=!1))),c.$set(n)},i(e){x||(A(c.$$.fragment,e),x=!0)},o(e){C(c.$$.fragment,e),x=!1},d(e){e&&r(a),e&&r(t),y(c,e),e&&r(p),e&&r($)}}}function he(e){let a,n,t,c,u,f,v,p;function $(a){e[9].call(null,a,e[15],e[16],e[17])}let E={};return void 0!==e[15]&&(E.data=e[15]),t=new U({props:E}),w.push((()=>S(t,"data",$))),{c(){a=d("li"),n=d("a"),k(t.$$.fragment),v=g(),this.h()},l(e){a=s(e,"LI",{class:!0});var i=l(a);n=s(i,"A",{rel:!0,href:!0,title:!0,class:!0});var c=l(n);I(t.$$.fragment,c),c.forEach(r),v=m(i),i.forEach(r),this.h()},h(){i(n,"rel","prefetch"),i(n,"href",u=e[15].slug+"/"),i(n,"title",f=`Zu ${e[15].district} ${e[15].name} ›`),i(n,"class","svelte-33g6ew"),i(a,"class","svelte-33g6ew")},m(e,s){o(e,a,s),h(a,n),D(t,n,null),h(a,v),p=!0},p(a,s){e=a;const l={};!c&&2&s&&(c=!0,l.data=e[15],N((()=>c=!1))),t.$set(l),(!p||2&s&&u!==(u=e[15].slug+"/"))&&i(n,"href",u),(!p||2&s&&f!==(f=`Zu ${e[15].district} ${e[15].name} ›`))&&i(n,"title",f)},i(e){p||(A(t.$$.fragment,e),p=!0)},o(e){C(t.$$.fragment,e),p=!1},d(e){e&&r(a),y(t)}}}function de(e){let a,n,t,i,c;return{c(){a=d("small"),n=d("span"),t=d("strong"),i=u("Hinweis"),c=u(": Alle Angaben sind ohne Gewähr. Dies ist nicht die offizielle\n          Corona-Ampel. Farben können eventuell abweichen und sind nur zur Orientierung gedacht.")},l(e){a=s(e,"SMALL",{});var o=l(a);n=s(o,"SPAN",{});var h=l(n);t=s(h,"STRONG",{});var d=l(t);i=f(d,"Hinweis"),d.forEach(r),c=f(h,": Alle Angaben sind ohne Gewähr. Dies ist nicht die offizielle\n          Corona-Ampel. Farben können eventuell abweichen und sind nur zur Orientierung gedacht."),h.forEach(r),o.forEach(r)},m(e,s){o(e,a,s),h(a,n),h(n,t),h(t,i),h(n,c)},d(e){e&&r(a)}}}function ue(e){let a,n,t,c,v,g,m,p;return{c(){a=d("small"),n=d("span"),t=d("strong"),c=u("Hinweis zur Hospitalisierung"),v=u(": Die wirklichen Zahlen zur\n          Hospitalisierung können nicht zu 100% korrekt angegeben werden, da es über Tage und Wochen\n          hinweg noch Nachmeldungen gibt. Ich kann hier leider nur die offiziellen Zahlen des LGLs\n          angeben, nach der sich unsere Regierung in Bayern orientiert.\n          "),g=d("a"),m=d("small"),p=u("Quelle: LGL"),this.h()},l(e){a=s(e,"SMALL",{});var i=l(a);n=s(i,"SPAN",{});var o=l(n);t=s(o,"STRONG",{});var h=l(t);c=f(h,"Hinweis zur Hospitalisierung"),h.forEach(r),v=f(o,": Die wirklichen Zahlen zur\n          Hospitalisierung können nicht zu 100% korrekt angegeben werden, da es über Tage und Wochen\n          hinweg noch Nachmeldungen gibt. Ich kann hier leider nur die offiziellen Zahlen des LGLs\n          angeben, nach der sich unsere Regierung in Bayern orientiert.\n          "),g=s(o,"A",{href:!0,target:!0,rel:!0,class:!0});var d=l(g);m=s(d,"SMALL",{});var u=l(m);p=f(u,"Quelle: LGL"),u.forEach(r),d.forEach(r),o.forEach(r),i.forEach(r),this.h()},h(){i(g,"href","https://www.lgl.bayern.de/gesundheit/infektionsschutz/infektionskrankheiten_a_z/coronavirus/karte_coronavirus/index.htm#wKennzahlen"),i(g,"target","_blank"),i(g,"rel","noopener noreferrer"),i(g,"class","svelte-33g6ew")},m(e,s){o(e,a,s),h(a,n),h(n,t),h(t,c),h(n,v),h(n,g),h(g,m),h(m,p)},d(e){e&&r(a)}}}function fe(e){let a,n,v,p,$,w;return{c(){a=d("small"),n=t("svg"),v=t("path"),p=g(),$=d("span"),w=u("Ab 200 gelten weitere Maßnahmen in Bayern!"),this.h()},l(e){a=s(e,"SMALL",{});var t=l(a);n=s(t,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var i=l(n);v=s(i,"path",{d:!0,fill:!0},1),l(v).forEach(r),i.forEach(r),p=m(t),$=s(t,"SPAN",{});var c=l($);w=f(c,"Ab 200 gelten weitere Maßnahmen in Bayern!"),c.forEach(r),t.forEach(r),this.h()},h(){i(v,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),i(v,"fill","currentColor"),i(n,"class","danger-icon"),i(n,"xmlns","http://www.w3.org/2000/svg"),i(n,"xmlns:xlink","http://www.w3.org/1999/xlink"),i(n,"aria-hidden","true"),i(n,"focusable","false"),i(n,"role","img"),i(n,"width","1.5em"),i(n,"height","1.5em"),i(n,"preserveAspectRatio","xMidYMid meet"),i(n,"viewBox","0 0 24 24"),c(n,"transform","translate3d(0, -2px, 0)"),c(n,"vertical-align","middle")},m(e,t){o(e,a,t),h(a,n),h(n,v),h(a,p),h(a,$),h($,w)},d(e){e&&r(a)}}}function ve(e){let a,n,t,u,f,v,p,$,E,x,T,M,F,P,R,Z,G,O,K,j,U,W,Y,Q,q,X,ee,ae,ne,te,se,le,ve,ge,me,pe,$e,we,Ee,xe;function be(a){e[6].call(null,a)}p=new b({props:{until:"2022-12-15T23:00:00Z",$$slots:{default:[ie]},$$scope:{ctx:e}}}),x=new b({props:{until:"2021-09-09T17:00:00Z",$$slots:{default:[ce]},$$scope:{ctx:e}}});let ke={};function Ie(a){e[7].call(null,a)}void 0!==e[2]&&(ke.data=e[2]),R=new J({props:ke}),w.push((()=>S(R,"data",be)));let De={};void 0!==e[3]&&(De.data=e[3]),K=new J({props:De}),w.push((()=>S(K,"data",Ie)));let Ae=!!e[0]&&oe(e),Ce=e[1],ye=[];for(let a=0;a<Ce.length;a+=1)ye[a]=he(re(e,Ce,a));const Le=e=>C(ye[e],1,1,(()=>{ye[e]=null}));return ee=new H({}),le=new b({props:{until:"2024-09-09T17:00:00Z",left:!0,$$slots:{default:[de]},$$scope:{ctx:e}}}),ge=new b({props:{until:"2024-09-09T17:00:00Z",left:!0,$$slots:{default:[ue]},$$scope:{ctx:e}}}),pe=new B({}),Ee=new b({props:{until:"2021-01-31T00:00:00Z",$$slots:{default:[fe]},$$scope:{ctx:e}}}),{c(){a=d("meta"),n=d("meta"),t=d("meta"),u=g(),f=d("div"),v=d("center"),k(p.$$.fragment),$=g(),E=d("center"),k(x.$$.fragment),T=g(),M=d("div"),F=d("ul"),P=d("li"),k(R.$$.fragment),G=g(),O=d("li"),k(K.$$.fragment),U=g(),Ae&&Ae.c(),W=g(),Y=d("nav"),Q=d("ul");for(let e=0;e<ye.length;e+=1)ye[e].c();q=g(),X=d("div"),k(ee.$$.fragment),ae=g(),ne=d("br"),te=g(),se=d("center"),k(le.$$.fragment),ve=g(),k(ge.$$.fragment),me=g(),k(pe.$$.fragment),$e=g(),we=d("div"),k(Ee.$$.fragment),this.h()},l(e){const i=L('[data-svelte="svelte-cy433z"]',document.head);a=s(i,"META",{content:!0,name:!0}),n=s(i,"META",{property:!0,content:!0}),t=s(i,"META",{property:!0,content:!0}),i.forEach(r),u=m(e),f=s(e,"DIV",{class:!0});var c=l(f);v=s(c,"CENTER",{});var o=l(v);I(p.$$.fragment,o),o.forEach(r),$=m(c),E=s(c,"CENTER",{});var h=l(E);I(x.$$.fragment,h),h.forEach(r),T=m(c),M=s(c,"DIV",{style:!0});var d=l(M);F=s(d,"UL",{class:!0});var g=l(F);P=s(g,"LI",{class:!0});var w=l(P);I(R.$$.fragment,w),w.forEach(r),G=m(g),O=s(g,"LI",{class:!0});var b=l(O);I(K.$$.fragment,b),b.forEach(r),g.forEach(r),d.forEach(r),U=m(c),Ae&&Ae.l(c),W=m(c),Y=s(c,"NAV",{});var k=l(Y);Q=s(k,"UL",{id:!0,class:!0});var D=l(Q);for(let e=0;e<ye.length;e+=1)ye[e].l(D);D.forEach(r),k.forEach(r),q=m(c),X=s(c,"DIV",{class:!0});var A=l(X);I(ee.$$.fragment,A),A.forEach(r),ae=m(c),ne=s(c,"BR",{}),te=m(c),se=s(c,"CENTER",{});var C=l(se);I(le.$$.fragment,C),ve=m(C),I(ge.$$.fragment,C),C.forEach(r),me=m(c),I(pe.$$.fragment,c),$e=m(c),we=s(c,"DIV",{class:!0});var y=l(we);I(Ee.$$.fragment,y),y.forEach(r),c.forEach(r),this.h()},h(){document.title="Corona-Ampel-Coburg: 🚦 Aktuelle Fälle und Zahlen",i(a,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),i(a,"name","description"),i(n,"property","og:title"),i(n,"content","Corona-Ampel Coburg und Umgebung: aktuelle 7 Tage Corona Inzidenz"),i(t,"property","og:description"),i(t,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),i(P,"class","svelte-33g6ew"),i(O,"class","svelte-33g6ew"),i(F,"class","cols2 svelte-33g6ew"),c(M,"margin-top","10px"),i(Q,"id","hp-cardlist"),i(Q,"class","svelte-33g6ew"),i(X,"class","social svelte-33g6ew"),i(we,"class","hints svelte-33g6ew"),i(f,"class","homepage")},m(e,s){h(document.head,a),h(document.head,n),h(document.head,t),o(e,u,s),o(e,f,s),h(f,v),D(p,v,null),h(f,$),h(f,E),D(x,E,null),h(f,T),h(f,M),h(M,F),h(F,P),D(R,P,null),h(F,G),h(F,O),D(K,O,null),h(f,U),Ae&&Ae.m(f,null),h(f,W),h(f,Y),h(Y,Q);for(let e=0;e<ye.length;e+=1)ye[e].m(Q,null);h(f,q),h(f,X),D(ee,X,null),h(f,ae),h(f,ne),h(f,te),h(f,se),D(le,se,null),h(se,ve),D(ge,se,null),h(f,me),D(pe,f,null),h(f,$e),h(f,we),D(Ee,we,null),xe=!0},p(e,[a]){const n={};262144&a&&(n.$$scope={dirty:a,ctx:e}),p.$set(n);const t={};262144&a&&(t.$$scope={dirty:a,ctx:e}),x.$set(t);const s={};!Z&&4&a&&(Z=!0,s.data=e[2],N((()=>Z=!1))),R.$set(s);const l={};if(!j&&8&a&&(j=!0,l.data=e[3],N((()=>j=!1))),K.$set(l),e[0]?Ae?(Ae.p(e,a),1&a&&A(Ae,1)):(Ae=oe(e),Ae.c(),A(Ae,1),Ae.m(f,W)):Ae&&(_(),C(Ae,1,1,(()=>{Ae=null})),z()),2&a){let n;for(Ce=e[1],n=0;n<Ce.length;n+=1){const t=re(e,Ce,n);ye[n]?(ye[n].p(t,a),A(ye[n],1)):(ye[n]=he(t),ye[n].c(),A(ye[n],1),ye[n].m(Q,null))}for(_(),n=Ce.length;n<ye.length;n+=1)Le(n);z()}const r={};262144&a&&(r.$$scope={dirty:a,ctx:e}),le.$set(r);const i={};262144&a&&(i.$$scope={dirty:a,ctx:e}),ge.$set(i);const c={};262144&a&&(c.$$scope={dirty:a,ctx:e}),Ee.$set(c)},i(e){if(!xe){A(p.$$.fragment,e),A(x.$$.fragment,e),A(R.$$.fragment,e),A(K.$$.fragment,e),A(Ae);for(let e=0;e<Ce.length;e+=1)A(ye[e]);A(ee.$$.fragment,e),A(le.$$.fragment,e),A(ge.$$.fragment,e),A(pe.$$.fragment,e),A(Ee.$$.fragment,e),xe=!0}},o(e){C(p.$$.fragment,e),C(x.$$.fragment,e),C(R.$$.fragment,e),C(K.$$.fragment,e),C(Ae),ye=ye.filter(Boolean);for(let e=0;e<ye.length;e+=1)C(ye[e]);C(ee.$$.fragment,e),C(le.$$.fragment,e),C(ge.$$.fragment,e),C(pe.$$.fragment,e),C(Ee.$$.fragment,e),xe=!1},d(e){r(a),r(n),r(t),e&&r(u),e&&r(f),y(p),y(x),y(R),y(K),Ae&&Ae.d(),V(ye,e),y(ee),y(le),y(ge),y(pe),y(Ee)}}}function ge(){this.fetch("sitemap.xml");return this.fetch("index.json").then((e=>e.json())).then((e=>({data:e})))}function me(e,a,n){let t;E(e,T,(e=>n(5,t=e)));let{data:s}=a,{citys:l,germannew:r,bavarianew:i,germanincidence:c,bavariaincidence:o,hospitalization:h}=s,d=[];d=X(l);let u={name:"Deutschland",incidence:c,newCases:r},f={name:"Bayern",incidence:o,newCases:i};return e.$$set=e=>{"data"in e&&n(4,s=e.data)},e.$$.update=()=>{32&e.$$.dirty&&t&&t.citys&&(n(1,d=X(t.citys)),r=t.germannew,i=t.bavarianew,n(2,u.incidence=t.germanincidence,u),n(3,f.incidence=t.bavariaincidence,f),n(2,u.newCases=t.germannew,u),n(3,f.newCases=t.bavarianew,f),n(0,h=t.hospitalization))},[h,d,u,f,s,t,function(e){u=e,n(2,u),n(5,t)},function(e){f=e,n(3,f),n(5,t)},function(e){h[0]=e,n(0,h),n(5,t)},function(e,a,s,l){s[l]=e,n(1,d),n(5,t)}]}export default class extends e{constructor(e){super(),a(this,e,me,ve,n,{data:4})}}export{ge as preload};