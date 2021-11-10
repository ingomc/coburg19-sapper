import{S as e,i as a,s as n,a as t,c as s,b as l,d as r,e as c,f as i,g as o,h,j as v,t as d,k as u,l as f,m,n as g,o as p,p as $,q as E,M as w,r as x,u as b,v as I,w as D,x as A,y as k,z as C,A as L,B as z,C as N,D as V,E as S,F as y,G as P}from"./client.a5c0e84b.js";import{S as T,T as _}from"./Timetravel.dc63ae64.js";function B(e){let a,n;return{c(){a=t("svg"),n=t("path"),this.h()},l(e){a=s(e,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var t=l(a);n=s(t,"path",{d:!0,fill:!0},1),l(n).forEach(r),t.forEach(r),this.h()},h(){c(n,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),c(n,"fill","currentColor"),c(a,"class","danger-icon svelte-11gnjhe"),c(a,"xmlns","http://www.w3.org/2000/svg"),c(a,"xmlns:xlink","http://www.w3.org/1999/xlink"),c(a,"aria-hidden","true"),c(a,"focusable","false"),c(a,"role","img"),c(a,"preserveAspectRatio","xMidYMid meet"),c(a,"viewBox","0 0 24 24"),i(a,"transform","rotate(360deg)")},m(e,t){o(e,a,t),h(a,n)},d(e){e&&r(a)}}}function j(e){let a,n,t,i=(e[0].betten_frei>0?`(${Number(e[0].Anteil_betten_frei).toFixed(0)}%) ${e[0].betten_frei}`:0)+"";return{c(){a=v("div"),n=d("Betten frei:\n            "),t=d(i),this.h()},l(e){a=s(e,"DIV",{class:!0});var c=l(a);n=u(c,"Betten frei:\n            "),t=u(c,i),c.forEach(r),this.h()},h(){c(a,"class","cases svelte-11gnjhe")},m(e,s){o(e,a,s),h(a,n),h(a,t)},p(e,a){1&a&&i!==(i=(e[0].betten_frei>0?`(${Number(e[0].Anteil_betten_frei).toFixed(0)}%) ${e[0].betten_frei}`:0)+"")&&f(t,i)},d(e){e&&r(a)}}}function F(e){let a,n;return{c(){a=v("div"),n=d("Keine Intensiv-Betten vorhanden"),this.h()},l(e){a=s(e,"DIV",{class:!0});var t=l(a);n=u(t,"Keine Intensiv-Betten vorhanden"),t.forEach(r),this.h()},h(){c(a,"class","cases svelte-11gnjhe")},m(e,t){o(e,a,t),h(a,n)},p:$,d(e){e&&r(a)}}}function M(e){let a,n,t,i,p,$,E,w,x=Number(e[0].Anteil_COVID_betten).toFixed(0)+"",b=e[0].faelle_covid_aktuell+"";return{c(){a=v("div"),n=d("Intensiv-Betten belegt mit Covid-19:\n            "),t=v("span"),i=d("("),p=d(x),$=d("%)"),E=m(),w=d(b),this.h()},l(e){a=s(e,"DIV",{class:!0});var c=l(a);n=u(c,"Intensiv-Betten belegt mit Covid-19:\n            "),t=s(c,"SPAN",{class:!0});var o=l(t);i=u(o,"("),p=u(o,x),$=u(o,"%)"),o.forEach(r),E=g(c),w=u(c,b),c.forEach(r),this.h()},h(){c(t,"class","percent"),c(a,"class","cases svelte-11gnjhe")},m(e,s){o(e,a,s),h(a,n),h(a,t),h(t,i),h(t,p),h(t,$),h(a,E),h(a,w)},p(e,a){1&a&&x!==(x=Number(e[0].Anteil_COVID_betten).toFixed(0)+"")&&f(p,x),1&a&&b!==(b=e[0].faelle_covid_aktuell+"")&&f(w,b)},d(e){e&&r(a)}}}function H(e){let a,n,i,E,w,x,b,I,D,A,k,C,L,z,N,V,S,y,P,T,_,H,K,R,Z,G,O,W,U,Q=Number(e[0].incidence).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"",Y=e[0].district+"",q=e[0].name+"",J=(e[0].newCases>0?e[0].newCases.toLocaleString("de-DE"):0)+"",X=e[0].incidence>=200&&e[0].incidence<1e3&&B(),ee=null!==e[0].faelle_covid_aktuell&&j(e);function ae(e,a){return null!==e[0].faelle_covid_aktuell?M:F}let ne=ae(e),te=ne(e);return{c(){a=v("div"),n=v("canvas"),i=m(),E=v("div"),w=v("div"),x=v("div"),b=v("h3"),X&&X.c(),I=m(),D=d(Q),A=m(),k=v("div"),C=v("div"),L=d(Y),z=m(),N=v("div"),V=d(q),S=m(),y=v("div"),P=v("div"),T=v("div"),_=d("Neue Fälle:\n          "),H=d(J),K=m(),ee&&ee.c(),R=m(),Z=v("div"),te.c(),G=m(),O=t("svg"),W=t("path"),this.h()},l(e){a=s(e,"DIV",{class:!0});var t=l(a);n=s(t,"CANVAS",{class:!0}),l(n).forEach(r),i=g(t),E=s(t,"DIV",{class:!0});var c=l(E);w=s(c,"DIV",{class:!0});var o=l(w);x=s(o,"DIV",{class:!0});var h=l(x);b=s(h,"H3",{class:!0});var v=l(b);X&&X.l(v),I=g(v),D=u(v,Q),v.forEach(r),h.forEach(r),A=g(o),k=s(o,"DIV",{class:!0});var d=l(k);C=s(d,"DIV",{class:!0});var f=l(C);L=u(f,Y),f.forEach(r),z=g(d),N=s(d,"DIV",{class:!0});var m=l(N);V=u(m,q),m.forEach(r),d.forEach(r),o.forEach(r),S=g(c),y=s(c,"DIV",{class:!0});var p=l(y);P=s(p,"DIV",{class:!0});var $=l(P);T=s($,"DIV",{class:!0});var B=l(T);_=u(B,"Neue Fälle:\n          "),H=u(B,J),B.forEach(r),K=g($),ee&&ee.l($),$.forEach(r),R=g(p),Z=s(p,"DIV",{class:!0});var j=l(Z);te.l(j),j.forEach(r),p.forEach(r),G=g(c),O=s(c,"svg",{class:!0,viewBox:!0},1);var F=l(O);W=s(F,"path",{d:!0},1),l(W).forEach(r),F.forEach(r),c.forEach(r),t.forEach(r),this.h()},h(){c(n,"class","canvas svelte-11gnjhe"),c(b,"class","number svelte-11gnjhe"),c(x,"class","column svelte-11gnjhe"),c(C,"class","area svelte-11gnjhe"),c(N,"class","city svelte-11gnjhe"),c(k,"class","column svelte-11gnjhe"),c(w,"class","row svelte-11gnjhe"),c(T,"class","cases svelte-11gnjhe"),c(P,"class","column svelte-11gnjhe"),c(Z,"class","column svelte-11gnjhe"),c(y,"class","row svelte-11gnjhe"),c(W,"d","M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"),c(O,"class","arrow-right-mini svelte-11gnjhe"),c(O,"viewBox","-100.9 99.1 61.9 105.9"),c(E,"class","content svelte-11gnjhe"),c(a,"class",U=p(`card ${e[2]}`)+" svelte-11gnjhe")},m(t,s){o(t,a,s),h(a,n),e[5](n),h(a,i),h(a,E),h(E,w),h(w,x),h(x,b),X&&X.m(b,null),h(b,I),h(b,D),h(w,A),h(w,k),h(k,C),h(C,L),h(k,z),h(k,N),h(N,V),h(E,S),h(E,y),h(y,P),h(P,T),h(T,_),h(T,H),h(P,K),ee&&ee.m(P,null),h(y,R),h(y,Z),te.m(Z,null),h(E,G),h(E,O),h(O,W)},p(e,[n]){e[0].incidence>=200&&e[0].incidence<1e3?X||(X=B(),X.c(),X.m(b,I)):X&&(X.d(1),X=null),1&n&&Q!==(Q=Number(e[0].incidence).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"")&&f(D,Q),1&n&&Y!==(Y=e[0].district+"")&&f(L,Y),1&n&&q!==(q=e[0].name+"")&&f(V,q),1&n&&J!==(J=(e[0].newCases>0?e[0].newCases.toLocaleString("de-DE"):0)+"")&&f(H,J),null!==e[0].faelle_covid_aktuell?ee?ee.p(e,n):(ee=j(e),ee.c(),ee.m(P,null)):ee&&(ee.d(1),ee=null),ne===(ne=ae(e))&&te?te.p(e,n):(te.d(1),te=ne(e),te&&(te.c(),te.m(Z,null))),4&n&&U!==(U=p(`card ${e[2]}`)+" svelte-11gnjhe")&&c(a,"class",U)},i:$,o:$,d(n){n&&r(a),e[5](null),X&&X.d(),ee&&ee.d(),te.d()}}}function K(e,a,n){let t,s,l,{data:r}=a,c="warning";return e.$$set=e=>{"data"in e&&n(0,r=e.data)},e.$$.update=()=>{if(27&e.$$.dirty){n(2,c="warning"),r.incidence<35&&n(2,c="info"),r.incidence>=50&&r.incidence<100&&n(2,c="danger"),r.incidence>=100&&n(2,c="superdanger"),r.allIncidences&&(n(3,s=Array.from(r.allIncidences.incidences.datasets[0].data,(e=>e.y))),n(4,l=100*Math.ceil(Math.max(...s)/100))),"undefined"!=typeof window&&void 0!==t&&function(){if(!t&&!t.getContext)return;const e=t.width,a=t.height,n=t.getContext("2d");n.clearRect(-10,0,e+10,a),r.allIncidences&&(n.fillStyle=r.incidence>=100?"rgba(255,100,100,0.1)":"rgba(0,0,0,0.1)",n.beginPath(),n.moveTo(-10,a),s.reverse().forEach(((t,r)=>{n.lineTo(e/(s.length-1)*r,a-t/(l/a))})),n.lineTo(610,a),n.strokeStyle=r.incidence>=100?"rgba(255,100,100,0.2)":"rgba(0,0,0,0.2)",n.lineWidth=1,n.stroke(),n.fill())}()}},[r,t,c,s,l,function(e){E[e?"unshift":"push"]((()=>{t=e,n(1,t)}))}]}class R extends e{constructor(e){super(),a(this,e,K,H,n,{data:0})}}function Z(e){let a=[];e.sort(((e,a)=>e.name<a.name?-1:(e.name,a.name,0))),e.sort(((e,a)=>(""+e.district).localeCompare(a.district))),e.sort(((e,a)=>(""+e.name).localeCompare(a.name))),e.forEach((e=>{e.name.toLowerCase()=="Coburg".toLowerCase()?a.unshift(e):a.push(e)}));const n=a[0];return a.splice(0,1),a.splice(1,0,n),a}function G(e){let a,n,t,i,E,w,x,b,I,D,A,k,C,L,z,N,V,S,y,P,T,_,B,j,F,M,H,K,R,Z,G,O,W,U,Q,Y,q,J,X,ee,ae,ne,te,se,le,re,ce,ie=e[0].hospitalizationLast7Days+"",oe=e[0].currentIntensiveCarePatients+"",he=e[0].currentIntensiveCarePatients+"";return{c(){a=v("div"),n=v("div"),t=v("div"),i=m(),E=v("div"),w=v("div"),x=v("p"),b=v("span"),I=d("Keine Werte überschritten"),A=m(),k=v("div"),C=v("div"),L=m(),z=v("div"),N=v("div"),V=v("span"),S=d("Neue Krankenhaus-Corona-Einweisungen in den letzten 7 Tagen"),y=m(),P=v("span"),T=v("span"),_=d(ie),B=d("\n          / 1200"),j=m(),F=v("div"),M=v("span"),H=d("COVID-19 Patienten auf Intensivstationen"),K=m(),R=v("span"),Z=v("span"),G=d(oe),O=d("\n          / 450"),U=m(),Q=v("div"),Y=v("div"),q=m(),J=v("div"),X=v("div"),ee=v("span"),ae=d("COVID-19 Patienten auf Intensivstationen"),ne=m(),te=v("span"),se=v("span"),le=d(he),re=d("\n          / 600"),this.h()},l(e){a=s(e,"DIV",{class:!0});var c=l(a);n=s(c,"DIV",{class:!0});var o=l(n);t=s(o,"DIV",{class:!0}),l(t).forEach(r),i=g(o),E=s(o,"DIV",{class:!0});var h=l(E);w=s(h,"DIV",{class:!0});var v=l(w);x=s(v,"P",{class:!0});var d=l(x);b=s(d,"SPAN",{class:!0});var f=l(b);I=u(f,"Keine Werte überschritten"),f.forEach(r),d.forEach(r),v.forEach(r),h.forEach(r),o.forEach(r),A=g(c),k=s(c,"DIV",{class:!0});var m=l(k);C=s(m,"DIV",{class:!0}),l(C).forEach(r),L=g(m),z=s(m,"DIV",{class:!0});var p=l(z);N=s(p,"DIV",{class:!0});var $=l(N);V=s($,"SPAN",{class:!0});var D=l(V);S=u(D,"Neue Krankenhaus-Corona-Einweisungen in den letzten 7 Tagen"),D.forEach(r),y=g($),P=s($,"SPAN",{class:!0});var W=l(P);T=s(W,"SPAN",{class:!0});var ce=l(T);_=u(ce,ie),ce.forEach(r),B=u(W,"\n          / 1200"),W.forEach(r),$.forEach(r),j=g(p),F=s(p,"DIV",{class:!0});var ve=l(F);M=s(ve,"SPAN",{class:!0});var de=l(M);H=u(de,"COVID-19 Patienten auf Intensivstationen"),de.forEach(r),K=g(ve),R=s(ve,"SPAN",{class:!0});var ue=l(R);Z=s(ue,"SPAN",{class:!0});var fe=l(Z);G=u(fe,oe),fe.forEach(r),O=u(ue,"\n          / 450"),ue.forEach(r),ve.forEach(r),p.forEach(r),m.forEach(r),U=g(c),Q=s(c,"DIV",{class:!0});var me=l(Q);Y=s(me,"DIV",{class:!0}),l(Y).forEach(r),q=g(me),J=s(me,"DIV",{class:!0});var ge=l(J);X=s(ge,"DIV",{class:!0});var pe=l(X);ee=s(pe,"SPAN",{class:!0});var $e=l(ee);ae=u($e,"COVID-19 Patienten auf Intensivstationen"),$e.forEach(r),ne=g(pe),te=s(pe,"SPAN",{class:!0});var Ee=l(te);se=s(Ee,"SPAN",{class:!0});var we=l(se);le=u(we,he),we.forEach(r),re=u(Ee,"\n          / 600"),Ee.forEach(r),pe.forEach(r),ge.forEach(r),me.forEach(r),c.forEach(r),this.h()},h(){c(t,"class","circle svelte-mt7pg5"),c(b,"class","label svelte-mt7pg5"),c(x,"class","svelte-mt7pg5"),c(w,"class","text-column svelte-mt7pg5"),c(E,"class","text"),c(n,"class",D=p("card "+(e[0].hospitalizationLast7Days<1200&&e[0].currentIntensiveCarePatients<450?"active":""))+" svelte-mt7pg5"),c(C,"class","circle svelte-mt7pg5"),c(V,"class","label svelte-mt7pg5"),c(T,"class","light svelte-mt7pg5"),c(P,"class","number svelte-mt7pg5"),c(N,"class","text-column svelte-mt7pg5"),c(M,"class","label svelte-mt7pg5"),c(Z,"class","light svelte-mt7pg5"),c(R,"class","number svelte-mt7pg5"),c(F,"class","text-column svelte-mt7pg5"),c(z,"class","text"),c(k,"class",W=p("card yellow "+(e[0].hospitalizationLast7Days>1200&&e[0].currentIntensiveCarePatients<600||e[0].currentIntensiveCarePatients>=450&&e[0].currentIntensiveCarePatients<600?"active":""))+" svelte-mt7pg5"),c(Y,"class","circle svelte-mt7pg5"),c(ee,"class","label svelte-mt7pg5"),c(se,"class","light svelte-mt7pg5"),c(te,"class","number svelte-mt7pg5"),c(X,"class","text-column svelte-mt7pg5"),c(J,"class","text"),c(Q,"class",ce=p("card red "+(e[0].currentIntensiveCarePatients>600?"active":""))+" svelte-mt7pg5"),c(a,"class","wrapper svelte-mt7pg5")},m(e,s){o(e,a,s),h(a,n),h(n,t),h(n,i),h(n,E),h(E,w),h(w,x),h(x,b),h(b,I),h(a,A),h(a,k),h(k,C),h(k,L),h(k,z),h(z,N),h(N,V),h(V,S),h(N,y),h(N,P),h(P,T),h(T,_),h(P,B),h(z,j),h(z,F),h(F,M),h(M,H),h(F,K),h(F,R),h(R,Z),h(Z,G),h(R,O),h(a,U),h(a,Q),h(Q,Y),h(Q,q),h(Q,J),h(J,X),h(X,ee),h(ee,ae),h(X,ne),h(X,te),h(te,se),h(se,le),h(te,re)},p(e,[a]){1&a&&D!==(D=p("card "+(e[0].hospitalizationLast7Days<1200&&e[0].currentIntensiveCarePatients<450?"active":""))+" svelte-mt7pg5")&&c(n,"class",D),1&a&&ie!==(ie=e[0].hospitalizationLast7Days+"")&&f(_,ie),1&a&&oe!==(oe=e[0].currentIntensiveCarePatients+"")&&f(G,oe),1&a&&W!==(W=p("card yellow "+(e[0].hospitalizationLast7Days>1200&&e[0].currentIntensiveCarePatients<600||e[0].currentIntensiveCarePatients>=450&&e[0].currentIntensiveCarePatients<600?"active":""))+" svelte-mt7pg5")&&c(k,"class",W),1&a&&he!==(he=e[0].currentIntensiveCarePatients+"")&&f(le,he),1&a&&ce!==(ce=p("card red "+(e[0].currentIntensiveCarePatients>600?"active":""))+" svelte-mt7pg5")&&c(Q,"class",ce)},i:$,o:$,d(e){e&&r(a)}}}function O(e,a,n){let{data:t}=a;return e.$$set=e=>{"data"in e&&n(0,t=e.data)},[t]}class W extends e{constructor(e){super(),a(this,e,O,G,n,{data:0})}}function U(e,a,n){const t=e.slice();return t[11]=a[n],t[12]=a,t[13]=n,t}function Q(e){let a,n,t,f,p,$,E,w,x;return{c(){a=v("a"),n=v("div"),t=v("img"),p=m(),$=v("p"),E=v("small"),w=v("strong"),x=d("Zur App mit ALLEN Landkreisen ›"),this.h()},l(e){a=s(e,"A",{class:!0,href:!0});var c=l(a);n=s(c,"DIV",{class:!0});var i=l(n);t=s(i,"IMG",{src:!0,width:!0,height:!0,alt:!0,style:!0,class:!0}),i.forEach(r),p=g(c),$=s(c,"P",{class:!0});var o=l($);E=s(o,"SMALL",{});var h=l(E);w=s(h,"STRONG",{});var v=l(w);x=u(v,"Zur App mit ALLEN Landkreisen ›"),v.forEach(r),h.forEach(r),o.forEach(r),c.forEach(r),this.h()},h(){t.src!==(f="https://www.corona-ampel.app/favicons/maskable_icon_x128.png")&&c(t,"src","https://www.corona-ampel.app/favicons/maskable_icon_x128.png"),c(t,"width","24"),c(t,"height","24"),c(t,"alt","Ampel-Icon"),i(t,"height","auto"),i(t,"max-width","100%"),c(t,"class","svelte-1hsxvnh"),c(n,"class","logo svelte-1hsxvnh"),c($,"class","details svelte-1hsxvnh"),c(a,"class","list-tile svelte-1hsxvnh"),c(a,"href","https://corona-ampel.app/?coburg")},m(e,s){o(e,a,s),h(a,n),h(n,t),h(a,p),h(a,$),h($,E),h(E,w),h(w,x)},d(e){e&&r(a)}}}function Y(e){let a,n,t,c,i,f;return{c(){a=v("small"),n=v("span"),t=d("💥 "),c=v("strong"),i=d("ACHTUNG!"),f=d(" Das RKI aktualisiert aktuell noch ihre Daten ...")},l(e){a=s(e,"SMALL",{});var o=l(a);n=s(o,"SPAN",{});var h=l(n);t=u(h,"💥 "),c=s(h,"STRONG",{});var v=l(c);i=u(v,"ACHTUNG!"),v.forEach(r),f=u(h," Das RKI aktualisiert aktuell noch ihre Daten ..."),h.forEach(r),o.forEach(r)},m(e,s){o(e,a,s),h(a,n),h(n,t),h(n,c),h(c,i),h(n,f)},d(e){e&&r(a)}}}function q(e){let a,n,t,i,f,p,$,w,C;function L(a){e[6].call(null,a)}let z={};return void 0!==e[2][0]&&(z.data=e[2][0]),i=new W({props:z}),E.push((()=>V(i,"data",L))),{c(){a=v("h2"),n=d("Krankenhausampel Bayern"),t=m(),x(i.$$.fragment),p=m(),$=v("h2"),w=d("7 Tage Inzidenz"),this.h()},l(e){a=s(e,"H2",{class:!0});var c=l(a);n=u(c,"Krankenhausampel Bayern"),c.forEach(r),t=g(e),b(i.$$.fragment,e),p=g(e),$=s(e,"H2",{class:!0});var o=l($);w=u(o,"7 Tage Inzidenz"),o.forEach(r),this.h()},h(){c(a,"class","svelte-1hsxvnh"),c($,"class","svelte-1hsxvnh")},m(e,s){o(e,a,s),h(a,n),o(e,t,s),I(i,e,s),o(e,p,s),o(e,$,s),h($,w),C=!0},p(e,a){const n={};!f&&4&a&&(f=!0,n.data=e[2][0],S((()=>f=!1))),i.$set(n)},i(e){C||(D(i.$$.fragment,e),C=!0)},o(e){A(i.$$.fragment,e),C=!1},d(e){e&&r(a),e&&r(t),k(i,e),e&&r(p),e&&r($)}}}function J(e){let a,n,t,i,d,u,f,p;function $(a){e[7].call(null,a,e[11],e[12],e[13])}let w={};return void 0!==e[11]&&(w.data=e[11]),t=new R({props:w}),E.push((()=>V(t,"data",$))),{c(){a=v("li"),n=v("a"),x(t.$$.fragment),f=m(),this.h()},l(e){a=s(e,"LI",{class:!0});var c=l(a);n=s(c,"A",{rel:!0,href:!0,title:!0,class:!0});var i=l(n);b(t.$$.fragment,i),i.forEach(r),f=g(c),c.forEach(r),this.h()},h(){c(n,"rel","prefetch"),c(n,"href",d=e[11].slug+"/"),c(n,"title",u=`Zu ${e[11].district} ${e[11].name} ›`),c(n,"class","svelte-1hsxvnh"),c(a,"class","svelte-1hsxvnh")},m(e,s){o(e,a,s),h(a,n),I(t,n,null),h(a,f),p=!0},p(a,s){e=a;const l={};!i&&8&s&&(i=!0,l.data=e[11],S((()=>i=!1))),t.$set(l),(!p||8&s&&d!==(d=e[11].slug+"/"))&&c(n,"href",d),(!p||8&s&&u!==(u=`Zu ${e[11].district} ${e[11].name} ›`))&&c(n,"title",u)},i(e){p||(D(t.$$.fragment,e),p=!0)},o(e){A(t.$$.fragment,e),p=!1},d(e){e&&r(a),k(t)}}}function X(e){let a,n,t,c,i;return{c(){a=v("small"),n=v("span"),t=v("strong"),c=d("Hinweis"),i=d(": Alle Angaben sind ohne Gewähr. Dies ist nicht die offizielle\n        Corona-Ampel. Farben können eventuell abweichen und sind nur zur Orientierung gedacht.")},l(e){a=s(e,"SMALL",{});var o=l(a);n=s(o,"SPAN",{});var h=l(n);t=s(h,"STRONG",{});var v=l(t);c=u(v,"Hinweis"),v.forEach(r),i=u(h,": Alle Angaben sind ohne Gewähr. Dies ist nicht die offizielle\n        Corona-Ampel. Farben können eventuell abweichen und sind nur zur Orientierung gedacht."),h.forEach(r),o.forEach(r)},m(e,s){o(e,a,s),h(a,n),h(n,t),h(t,c),h(n,i)},d(e){e&&r(a)}}}function ee(e){let a,n,t,i,f,m,g,p;return{c(){a=v("small"),n=v("span"),t=v("strong"),i=d("Hinweis zur Krankenhausampel"),f=d(": Die wirklichen Zahlen zur\n        Krankenhausampel können nicht zu 100% korrekt angegeben werden, da es über Tage und Wochen\n        hinweg noch Nachmeldungen gibt. Ich kann hier leider nur die offiziellen Zahlen des LGLs\n        angeben, nach der sich unsere Regierung in Bayern orientiert.\n        "),m=v("a"),g=v("small"),p=d("Quelle: LGL"),this.h()},l(e){a=s(e,"SMALL",{});var c=l(a);n=s(c,"SPAN",{});var o=l(n);t=s(o,"STRONG",{});var h=l(t);i=u(h,"Hinweis zur Krankenhausampel"),h.forEach(r),f=u(o,": Die wirklichen Zahlen zur\n        Krankenhausampel können nicht zu 100% korrekt angegeben werden, da es über Tage und Wochen\n        hinweg noch Nachmeldungen gibt. Ich kann hier leider nur die offiziellen Zahlen des LGLs\n        angeben, nach der sich unsere Regierung in Bayern orientiert.\n        "),m=s(o,"A",{href:!0,target:!0,rel:!0,class:!0});var v=l(m);g=s(v,"SMALL",{});var d=l(g);p=u(d,"Quelle: LGL"),d.forEach(r),v.forEach(r),o.forEach(r),c.forEach(r),this.h()},h(){c(m,"href","https://www.lgl.bayern.de/gesundheit/infektionsschutz/infektionskrankheiten_a_z/coronavirus/karte_coronavirus/index.htm#wKennzahlen"),c(m,"target","_blank"),c(m,"rel","noopener noreferrer"),c(m,"class","svelte-1hsxvnh")},m(e,s){o(e,a,s),h(a,n),h(n,t),h(t,i),h(n,f),h(n,m),h(m,g),h(g,p)},d(e){e&&r(a)}}}function ae(e){let a,n,f,p,$,E;return{c(){a=v("small"),n=t("svg"),f=t("path"),p=m(),$=v("span"),E=d("Ab 200 gelten weitere Maßnahmen in Bayern!"),this.h()},l(e){a=s(e,"SMALL",{});var t=l(a);n=s(t,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var c=l(n);f=s(c,"path",{d:!0,fill:!0},1),l(f).forEach(r),c.forEach(r),p=g(t),$=s(t,"SPAN",{});var i=l($);E=u(i,"Ab 200 gelten weitere Maßnahmen in Bayern!"),i.forEach(r),t.forEach(r),this.h()},h(){c(f,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),c(f,"fill","currentColor"),c(n,"class","danger-icon"),c(n,"xmlns","http://www.w3.org/2000/svg"),c(n,"xmlns:xlink","http://www.w3.org/1999/xlink"),c(n,"aria-hidden","true"),c(n,"focusable","false"),c(n,"role","img"),c(n,"width","1.5em"),c(n,"height","1.5em"),c(n,"preserveAspectRatio","xMidYMid meet"),c(n,"viewBox","0 0 24 24"),i(n,"transform","translate3d(0, -2px, 0)"),i(n,"vertical-align","middle")},m(e,t){o(e,a,t),h(a,n),h(n,f),h(a,p),h(a,$),h($,E)},d(e){e&&r(a)}}}function ne(e){let a,n,t,i,p,$,E,N,V,S,P,B,j,F,M,H,K,R,Z,G,O,W,ne,te,se,le,re,ce,ie,oe,he,ve,de,ue,fe,me,ge,pe,$e,Ee,we,xe,be,Ie,De,Ae,ke=(e[0]?e[0].toLocaleString("de",{maximumFractionDigits:1}):"0")+"",Ce=(e[1]?e[1].toLocaleString("de",{maximumFractionDigits:1}):"0")+"";$=new w({props:{until:"2021-12-15T23:00:00Z",$$slots:{default:[Q]},$$scope:{ctx:e}}}),V=new w({props:{until:"2021-09-09T17:00:00Z",$$slots:{default:[Y]},$$scope:{ctx:e}}});let Le=!!e[2]&&q(e),ze=e[3],Ne=[];for(let a=0;a<ze.length;a+=1)Ne[a]=J(U(e,ze,a));const Ve=e=>A(Ne[e],1,1,(()=>{Ne[e]=null}));return de=new T({}),pe=new w({props:{until:"2024-09-09T17:00:00Z",left:!0,$$slots:{default:[X]},$$scope:{ctx:e}}}),Ee=new w({props:{until:"2024-09-09T17:00:00Z",left:!0,$$slots:{default:[ee]},$$scope:{ctx:e}}}),xe=new _({}),De=new w({props:{until:"2021-01-31T00:00:00Z",$$slots:{default:[ae]},$$scope:{ctx:e}}}),{c(){a=v("meta"),n=v("meta"),t=v("meta"),i=m(),p=v("center"),x($.$$.fragment),E=m(),N=v("center"),x(V.$$.fragment),S=m(),P=v("section"),B=v("div"),j=v("h3"),F=d("Neue Fälle in Deutschland"),M=m(),H=v("div"),K=d("+"),R=d(ke),Z=m(),G=v("div"),O=v("h3"),W=d("Neue Fälle in Bayern"),ne=m(),te=v("div"),se=d("+"),le=d(Ce),re=m(),Le&&Le.c(),ce=m(),ie=v("nav"),oe=v("ul");for(let e=0;e<Ne.length;e+=1)Ne[e].c();he=m(),ve=v("div"),x(de.$$.fragment),ue=m(),fe=v("br"),me=m(),ge=v("center"),x(pe.$$.fragment),$e=m(),x(Ee.$$.fragment),we=m(),x(xe.$$.fragment),be=m(),Ie=v("div"),x(De.$$.fragment),this.h()},l(e){const c=C('[data-svelte="svelte-cy433z"]',document.head);a=s(c,"META",{content:!0,name:!0}),n=s(c,"META",{property:!0,content:!0}),t=s(c,"META",{property:!0,content:!0}),c.forEach(r),i=g(e),p=s(e,"CENTER",{});var o=l(p);b($.$$.fragment,o),o.forEach(r),E=g(e),N=s(e,"CENTER",{});var h=l(N);b(V.$$.fragment,h),h.forEach(r),S=g(e),P=s(e,"SECTION",{class:!0});var v=l(P);B=s(v,"DIV",{class:!0});var d=l(B);j=s(d,"H3",{class:!0});var f=l(j);F=u(f,"Neue Fälle in Deutschland"),f.forEach(r),M=g(d),H=s(d,"DIV",{class:!0});var m=l(H);K=u(m,"+"),R=u(m,ke),m.forEach(r),d.forEach(r),Z=g(v),G=s(v,"DIV",{class:!0});var w=l(G);O=s(w,"H3",{class:!0});var x=l(O);W=u(x,"Neue Fälle in Bayern"),x.forEach(r),ne=g(w),te=s(w,"DIV",{class:!0});var I=l(te);se=u(I,"+"),le=u(I,Ce),I.forEach(r),w.forEach(r),v.forEach(r),re=g(e),Le&&Le.l(e),ce=g(e),ie=s(e,"NAV",{});var D=l(ie);oe=s(D,"UL",{id:!0,class:!0});var A=l(oe);for(let e=0;e<Ne.length;e+=1)Ne[e].l(A);A.forEach(r),D.forEach(r),he=g(e),ve=s(e,"DIV",{class:!0});var k=l(ve);b(de.$$.fragment,k),k.forEach(r),ue=g(e),fe=s(e,"BR",{}),me=g(e),ge=s(e,"CENTER",{});var L=l(ge);b(pe.$$.fragment,L),$e=g(L),b(Ee.$$.fragment,L),L.forEach(r),we=g(e),b(xe.$$.fragment,e),be=g(e),Ie=s(e,"DIV",{class:!0});var z=l(Ie);b(De.$$.fragment,z),z.forEach(r),this.h()},h(){document.title="Corona-Ampel-Coburg: 🚦 Aktuelle Fälle und Zahlen",c(a,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),c(a,"name","description"),c(n,"property","og:title"),c(n,"content","Corona-Ampel Coburg und Umgebung: aktuelle 7 Tage Corona Inzidenz"),c(t,"property","og:description"),c(t,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),c(j,"class","label svelte-1hsxvnh"),c(H,"class","cases svelte-1hsxvnh"),c(B,"class","column left svelte-1hsxvnh"),c(O,"class","label svelte-1hsxvnh"),c(te,"class","cases svelte-1hsxvnh"),c(G,"class","column right svelte-1hsxvnh"),c(P,"class","statistics svelte-1hsxvnh"),c(oe,"id","hp-cardlist"),c(oe,"class","svelte-1hsxvnh"),c(ve,"class","social svelte-1hsxvnh"),c(Ie,"class","hints svelte-1hsxvnh")},m(e,s){h(document.head,a),h(document.head,n),h(document.head,t),o(e,i,s),o(e,p,s),I($,p,null),o(e,E,s),o(e,N,s),I(V,N,null),o(e,S,s),o(e,P,s),h(P,B),h(B,j),h(j,F),h(B,M),h(B,H),h(H,K),h(H,R),h(P,Z),h(P,G),h(G,O),h(O,W),h(G,ne),h(G,te),h(te,se),h(te,le),o(e,re,s),Le&&Le.m(e,s),o(e,ce,s),o(e,ie,s),h(ie,oe);for(let e=0;e<Ne.length;e+=1)Ne[e].m(oe,null);o(e,he,s),o(e,ve,s),I(de,ve,null),o(e,ue,s),o(e,fe,s),o(e,me,s),o(e,ge,s),I(pe,ge,null),h(ge,$e),I(Ee,ge,null),o(e,we,s),I(xe,e,s),o(e,be,s),o(e,Ie,s),I(De,Ie,null),Ae=!0},p(e,[a]){const n={};16384&a&&(n.$$scope={dirty:a,ctx:e}),$.$set(n);const t={};if(16384&a&&(t.$$scope={dirty:a,ctx:e}),V.$set(t),(!Ae||1&a)&&ke!==(ke=(e[0]?e[0].toLocaleString("de",{maximumFractionDigits:1}):"0")+"")&&f(R,ke),(!Ae||2&a)&&Ce!==(Ce=(e[1]?e[1].toLocaleString("de",{maximumFractionDigits:1}):"0")+"")&&f(le,Ce),e[2]?Le?(Le.p(e,a),4&a&&D(Le,1)):(Le=q(e),Le.c(),D(Le,1),Le.m(ce.parentNode,ce)):Le&&(y(),A(Le,1,1,(()=>{Le=null})),L()),8&a){let n;for(ze=e[3],n=0;n<ze.length;n+=1){const t=U(e,ze,n);Ne[n]?(Ne[n].p(t,a),D(Ne[n],1)):(Ne[n]=J(t),Ne[n].c(),D(Ne[n],1),Ne[n].m(oe,null))}for(y(),n=ze.length;n<Ne.length;n+=1)Ve(n);L()}const s={};16384&a&&(s.$$scope={dirty:a,ctx:e}),pe.$set(s);const l={};16384&a&&(l.$$scope={dirty:a,ctx:e}),Ee.$set(l);const r={};16384&a&&(r.$$scope={dirty:a,ctx:e}),De.$set(r)},i(e){if(!Ae){D($.$$.fragment,e),D(V.$$.fragment,e),D(Le);for(let e=0;e<ze.length;e+=1)D(Ne[e]);D(de.$$.fragment,e),D(pe.$$.fragment,e),D(Ee.$$.fragment,e),D(xe.$$.fragment,e),D(De.$$.fragment,e),Ae=!0}},o(e){A($.$$.fragment,e),A(V.$$.fragment,e),A(Le),Ne=Ne.filter(Boolean);for(let e=0;e<Ne.length;e+=1)A(Ne[e]);A(de.$$.fragment,e),A(pe.$$.fragment,e),A(Ee.$$.fragment,e),A(xe.$$.fragment,e),A(De.$$.fragment,e),Ae=!1},d(e){r(a),r(n),r(t),e&&r(i),e&&r(p),k($),e&&r(E),e&&r(N),k(V),e&&r(S),e&&r(P),e&&r(re),Le&&Le.d(e),e&&r(ce),e&&r(ie),z(Ne,e),e&&r(he),e&&r(ve),k(de),e&&r(ue),e&&r(fe),e&&r(me),e&&r(ge),k(pe),k(Ee),e&&r(we),k(xe,e),e&&r(be),e&&r(Ie),k(De)}}}function te(){this.fetch("sitemap.xml");return this.fetch("index.json").then((e=>e.json())).then((e=>({data:e})))}function se(e,a,n){let t;N(e,P,(e=>n(5,t=e)));let{data:s}=a,{citys:l,germannew:r,bavarianew:c,germanincidence:i,bavariaincidence:o,hospitalization:h}=s,v=[];return v=Z(l),e.$$set=e=>{"data"in e&&n(4,s=e.data)},e.$$.update=()=>{32&e.$$.dirty&&t&&t.citys&&(n(3,v=Z(t.citys)),n(0,r=t.germannew),n(1,c=t.bavarianew),i=t.germanincidence,o=t.bavariaincidence,n(2,h=t.hospitalization))},[r,c,h,v,s,t,function(e){h[0]=e,n(2,h),n(5,t)},function(e,a,s,l){s[l]=e,n(3,v),n(5,t)}]}export default class extends e{constructor(e){super(),a(this,e,se,ne,n,{data:4})}}export{te as preload};
