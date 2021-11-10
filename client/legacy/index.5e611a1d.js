import{_ as n,a as e,b as t,c as a,i as r,s,d as c,S as i,e as l,f as o,g as u,h as f,j as h,k as v,l as d,m,n as p,t as g,o as $,p as b,q as E,r as w,u as x,v as I,w as D,x as z,y as A,M as y,z as C,A as k,B as L,C as N,D as S,E as V,F as P,G as T,H as R,I as _,J as B,K as M,L as F,N as H}from"./client.bc01fc0a.js";import"./asyncToGenerator.5229e80b.js";import{S as q,T as K}from"./Timetravel.fb7258da.js";function Z(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,s=e(n);if(a){var c=e(this).constructor;r=Reflect.construct(s,arguments,c)}else r=s.apply(this,arguments);return t(this,r)}}function G(n){var e,t;return{c:function(){e=l("svg"),t=l("path"),this.h()},l:function(n){e=o(n,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var a=u(e);t=o(a,"path",{d:!0,fill:!0},1),u(t).forEach(f),a.forEach(f),this.h()},h:function(){h(t,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),h(t,"fill","currentColor"),h(e,"class","danger-icon svelte-17zqpov"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),h(e,"aria-hidden","true"),h(e,"focusable","false"),h(e,"role","img"),h(e,"preserveAspectRatio","xMidYMid meet"),h(e,"viewBox","0 0 24 24"),v(e,"transform","rotate(360deg)")},m:function(n,a){d(n,e,a),m(e,t)},d:function(n){n&&f(e)}}}function O(n){var e,t,a,r=(n[0].betten_frei>0?"(".concat(Number(n[0].Anteil_betten_frei).toFixed(0),"%) ").concat(n[0].betten_frei):0)+"";return{c:function(){e=p("div"),t=g("Betten frei:\n            "),a=g(r),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var s=u(e);t=$(s,"Betten frei:\n            "),a=$(s,r),s.forEach(f),this.h()},h:function(){h(e,"class","cases svelte-17zqpov")},m:function(n,r){d(n,e,r),m(e,t),m(e,a)},p:function(n,e){1&e&&r!==(r=(n[0].betten_frei>0?"(".concat(Number(n[0].Anteil_betten_frei).toFixed(0),"%) ").concat(n[0].betten_frei):0)+"")&&b(a,r)},d:function(n){n&&f(e)}}}function j(n){var e,t;return{c:function(){e=p("div"),t=g("Keine Intensiv-Betten vorhanden"),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var a=u(e);t=$(a,"Keine Intensiv-Betten vorhanden"),a.forEach(f),this.h()},h:function(){h(e,"class","cases svelte-17zqpov")},m:function(n,a){d(n,e,a),m(e,t)},p:D,d:function(n){n&&f(e)}}}function W(n){var e,t,a,r,s,c,i,l,v=Number(n[0].Anteil_COVID_betten).toFixed(0)+"",x=n[0].faelle_covid_aktuell+"";return{c:function(){e=p("div"),t=g("Intensiv-Betten belegt mit Covid-19:\n            "),a=p("span"),r=g("("),s=g(v),c=g("%)"),i=E(),l=g(x),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var h=u(e);t=$(h,"Intensiv-Betten belegt mit Covid-19:\n            "),a=o(h,"SPAN",{class:!0});var d=u(a);r=$(d,"("),s=$(d,v),c=$(d,"%)"),d.forEach(f),i=w(h),l=$(h,x),h.forEach(f),this.h()},h:function(){h(a,"class","percent"),h(e,"class","cases svelte-17zqpov")},m:function(n,o){d(n,e,o),m(e,t),m(e,a),m(a,r),m(a,s),m(a,c),m(e,i),m(e,l)},p:function(n,e){1&e&&v!==(v=Number(n[0].Anteil_COVID_betten).toFixed(0)+"")&&b(s,v),1&e&&x!==(x=n[0].faelle_covid_aktuell+"")&&b(l,x)},d:function(n){n&&f(e)}}}function U(n){var e,t,a,r,s,c,i,v,z,A,y,C,k,L,N,S,V,P,T,R,_,B,M,F,H,q,K,Z,U,Q=Number(n[0].incidence).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"",Y=n[0].district+"",J=n[0].name+"",X=(n[0].newCases>0?n[0].newCases.toLocaleString("de-DE"):0)+"",nn=n[0].incidence>=200&&n[0].incidence<1e3&&G(),en=null!==n[0].faelle_covid_aktuell&&O(n);function tn(n,e){return null!==n[0].faelle_covid_aktuell?W:j}var an=tn(n),rn=an(n);return{c:function(){e=p("div"),t=p("canvas"),a=E(),r=p("div"),s=p("div"),c=p("div"),i=p("h3"),nn&&nn.c(),v=E(),z=g(Q),A=E(),y=p("div"),C=p("div"),k=g(Y),L=E(),N=p("div"),S=g(J),V=E(),P=p("div"),T=p("div"),R=p("div"),_=g("Neue Fälle:\n          "),B=g(X),M=E(),en&&en.c(),F=E(),H=p("div"),rn.c(),q=E(),K=l("svg"),Z=l("path"),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var l=u(e);t=o(l,"CANVAS",{class:!0}),u(t).forEach(f),a=w(l),r=o(l,"DIV",{class:!0});var h=u(r);s=o(h,"DIV",{class:!0});var d=u(s);c=o(d,"DIV",{class:!0});var m=u(c);i=o(m,"H3",{class:!0});var p=u(i);nn&&nn.l(p),v=w(p),z=$(p,Q),p.forEach(f),m.forEach(f),A=w(d),y=o(d,"DIV",{class:!0});var g=u(y);C=o(g,"DIV",{class:!0});var b=u(C);k=$(b,Y),b.forEach(f),L=w(g),N=o(g,"DIV",{class:!0});var E=u(N);S=$(E,J),E.forEach(f),g.forEach(f),d.forEach(f),V=w(h),P=o(h,"DIV",{class:!0});var x=u(P);T=o(x,"DIV",{class:!0});var I=u(T);R=o(I,"DIV",{class:!0});var D=u(R);_=$(D,"Neue Fälle:\n          "),B=$(D,X),D.forEach(f),M=w(I),en&&en.l(I),I.forEach(f),F=w(x),H=o(x,"DIV",{class:!0});var G=u(H);rn.l(G),G.forEach(f),x.forEach(f),q=w(h),K=o(h,"svg",{class:!0,viewBox:!0},1);var O=u(K);Z=o(O,"path",{d:!0},1),u(Z).forEach(f),O.forEach(f),h.forEach(f),l.forEach(f),this.h()},h:function(){h(t,"class","canvas svelte-17zqpov"),h(i,"class","number svelte-17zqpov"),h(c,"class","column svelte-17zqpov"),h(C,"class","area svelte-17zqpov"),h(N,"class","city svelte-17zqpov"),h(y,"class","column svelte-17zqpov"),h(s,"class","row svelte-17zqpov"),h(R,"class","cases svelte-17zqpov"),h(T,"class","column svelte-17zqpov"),h(H,"class","column svelte-17zqpov"),h(P,"class","row svelte-17zqpov"),h(Z,"d","M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"),h(K,"class","arrow-right-mini svelte-17zqpov"),h(K,"viewBox","-100.9 99.1 61.9 105.9"),h(r,"class","content svelte-17zqpov"),h(e,"class",U=x("card ".concat(n[2]))+" svelte-17zqpov")},m:function(l,o){d(l,e,o),m(e,t),n[5](t),m(e,a),m(e,r),m(r,s),m(s,c),m(c,i),nn&&nn.m(i,null),m(i,v),m(i,z),m(s,A),m(s,y),m(y,C),m(C,k),m(y,L),m(y,N),m(N,S),m(r,V),m(r,P),m(P,T),m(T,R),m(R,_),m(R,B),m(T,M),en&&en.m(T,null),m(P,F),m(P,H),rn.m(H,null),m(r,q),m(r,K),m(K,Z)},p:function(n,t){var a=I(t,1)[0];n[0].incidence>=200&&n[0].incidence<1e3?nn||((nn=G()).c(),nn.m(i,v)):nn&&(nn.d(1),nn=null),1&a&&Q!==(Q=Number(n[0].incidence).toLocaleString("de-DE",{minimumFractionDigits:1,maximumFractionDigits:1})+"")&&b(z,Q),1&a&&Y!==(Y=n[0].district+"")&&b(k,Y),1&a&&J!==(J=n[0].name+"")&&b(S,J),1&a&&X!==(X=(n[0].newCases>0?n[0].newCases.toLocaleString("de-DE"):0)+"")&&b(B,X),null!==n[0].faelle_covid_aktuell?en?en.p(n,a):((en=O(n)).c(),en.m(T,null)):en&&(en.d(1),en=null),an===(an=tn(n))&&rn?rn.p(n,a):(rn.d(1),(rn=an(n))&&(rn.c(),rn.m(H,null))),4&a&&U!==(U=x("card ".concat(n[2]))+" svelte-17zqpov")&&h(e,"class",U)},i:D,o:D,d:function(t){t&&f(e),n[5](null),nn&&nn.d(),en&&en.d(),rn.d()}}}function Q(n,e,t){var a,r,s,c=e.data,i="warning";return n.$$set=function(n){"data"in n&&t(0,c=n.data)},n.$$.update=function(){if(27&n.$$.dirty){t(2,i="warning"),c.incidence<35&&t(2,i="info"),c.incidence>=50&&c.incidence<100&&t(2,i="danger"),c.incidence>=100&&t(2,i="superdanger"),c.allIncidences&&(t(3,r=Array.from(c.allIncidences.incidences.datasets[0].data,(function(n){return n.y}))),t(4,s=100*Math.ceil(Math.max.apply(Math,z(r))/100))),"undefined"!=typeof window&&void 0!==a&&function(){if(a||a.getContext){var n=a.width,e=a.height,t=a.getContext("2d");t.clearRect(-10,0,n+10,e),c.allIncidences&&(t.fillStyle=c.incidence>=100?"rgba(255,100,100,0.1)":"rgba(0,0,0,0.1)",t.beginPath(),t.moveTo(-10,e),r.reverse().forEach((function(a,c){t.lineTo(n/(r.length-1)*c,e-a/(s/e))})),t.lineTo(610,e),t.strokeStyle=c.incidence>=100?"rgba(255,100,100,0.2)":"rgba(0,0,0,0.2)",t.lineWidth=1,t.stroke(),t.fill())}}()}},[c,a,i,r,s,function(n){A[n?"unshift":"push"]((function(){t(1,a=n)}))}]}var Y=function(e){n(l,i);var t=Z(l);function l(n){var e;return a(this,l),e=t.call(this),r(c(e),n,Q,U,s,{data:0}),e}return l}();function J(n){var e=[];n.sort((function(n,e){return n.name<e.name?-1:(n.name,e.name,0)})),n.sort((function(n,e){return(""+n.district).localeCompare(e.district)})),n.sort((function(n,e){return(""+n.name).localeCompare(e.name)})),n.forEach((function(n){n.name.toLowerCase()=="Coburg".toLowerCase()?e.unshift(n):e.push(n)}));var t=e[0];return e.splice(0,1),e.splice(1,0,t),e}function X(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,s=e(n);if(a){var c=e(this).constructor;r=Reflect.construct(s,arguments,c)}else r=s.apply(this,arguments);return t(this,r)}}function nn(n){var e,t,a,r,s,c,i,l,v,z,A,y,C,k,L,N,S,V,P,T,R,_,B,M,F,H,q,K,Z,G,O,j,W,U,Q,Y,J,X,nn,en,tn,an,rn,sn,cn,ln,on,un=n[0].hospitalizationLast7Days+"",fn=n[0].currentIntensiveCarePatients+"",hn=n[0].currentIntensiveCarePatients+"";return{c:function(){e=p("div"),t=p("div"),a=p("div"),r=E(),s=p("div"),c=p("div"),i=p("p"),l=p("span"),v=g("Keine Werte überschritten"),A=E(),y=p("div"),C=p("div"),k=E(),L=p("div"),N=p("div"),S=p("span"),V=g("Neue Krankenhaus-Corona-Einweisungen in den letzten 7 Tagen"),P=E(),T=p("span"),R=p("span"),_=g(un),B=g("\n          / 1200"),M=E(),F=p("div"),H=p("span"),q=g("COVID-19 Patienten auf Intensivstationen"),K=E(),Z=p("span"),G=p("span"),O=g(fn),j=g("\n          / 450"),U=E(),Q=p("div"),Y=p("div"),J=E(),X=p("div"),nn=p("div"),en=p("span"),tn=g("COVID-19 Patienten auf Intensivstationen"),an=E(),rn=p("span"),sn=p("span"),cn=g(hn),ln=g("\n          / 600"),this.h()},l:function(n){e=o(n,"DIV",{class:!0});var h=u(e);t=o(h,"DIV",{class:!0});var d=u(t);a=o(d,"DIV",{class:!0}),u(a).forEach(f),r=w(d),s=o(d,"DIV",{class:!0});var m=u(s);c=o(m,"DIV",{class:!0});var p=u(c);i=o(p,"P",{class:!0});var g=u(i);l=o(g,"SPAN",{class:!0});var b=u(l);v=$(b,"Keine Werte überschritten"),b.forEach(f),g.forEach(f),p.forEach(f),m.forEach(f),d.forEach(f),A=w(h),y=o(h,"DIV",{class:!0});var E=u(y);C=o(E,"DIV",{class:!0}),u(C).forEach(f),k=w(E),L=o(E,"DIV",{class:!0});var x=u(L);N=o(x,"DIV",{class:!0});var I=u(N);S=o(I,"SPAN",{class:!0});var D=u(S);V=$(D,"Neue Krankenhaus-Corona-Einweisungen in den letzten 7 Tagen"),D.forEach(f),P=w(I),T=o(I,"SPAN",{class:!0});var z=u(T);R=o(z,"SPAN",{class:!0});var W=u(R);_=$(W,un),W.forEach(f),B=$(z,"\n          / 1200"),z.forEach(f),I.forEach(f),M=w(x),F=o(x,"DIV",{class:!0});var on=u(F);H=o(on,"SPAN",{class:!0});var vn=u(H);q=$(vn,"COVID-19 Patienten auf Intensivstationen"),vn.forEach(f),K=w(on),Z=o(on,"SPAN",{class:!0});var dn=u(Z);G=o(dn,"SPAN",{class:!0});var mn=u(G);O=$(mn,fn),mn.forEach(f),j=$(dn,"\n          / 450"),dn.forEach(f),on.forEach(f),x.forEach(f),E.forEach(f),U=w(h),Q=o(h,"DIV",{class:!0});var pn=u(Q);Y=o(pn,"DIV",{class:!0}),u(Y).forEach(f),J=w(pn),X=o(pn,"DIV",{class:!0});var gn=u(X);nn=o(gn,"DIV",{class:!0});var $n=u(nn);en=o($n,"SPAN",{class:!0});var bn=u(en);tn=$(bn,"COVID-19 Patienten auf Intensivstationen"),bn.forEach(f),an=w($n),rn=o($n,"SPAN",{class:!0});var En=u(rn);sn=o(En,"SPAN",{class:!0});var wn=u(sn);cn=$(wn,hn),wn.forEach(f),ln=$(En,"\n          / 600"),En.forEach(f),$n.forEach(f),gn.forEach(f),pn.forEach(f),h.forEach(f),this.h()},h:function(){h(a,"class","circle svelte-3mnlbm"),h(l,"class","label svelte-3mnlbm"),h(i,"class","svelte-3mnlbm"),h(c,"class","text-column svelte-3mnlbm"),h(s,"class","text svelte-3mnlbm"),h(t,"class",z=x("card ".concat(n[0].hospitalizationLast7Days<1200&&n[0].currentIntensiveCarePatients<450?"active":""))+" svelte-3mnlbm"),h(C,"class","circle svelte-3mnlbm"),h(S,"class","label svelte-3mnlbm"),h(R,"class","light svelte-3mnlbm"),h(T,"class","number svelte-3mnlbm"),h(N,"class","text-column svelte-3mnlbm"),h(H,"class","label svelte-3mnlbm"),h(G,"class","light svelte-3mnlbm"),h(Z,"class","number svelte-3mnlbm"),h(F,"class","text-column svelte-3mnlbm"),h(L,"class","text svelte-3mnlbm"),h(y,"class",W=x("card yellow ".concat(n[0].hospitalizationLast7Days>1200&&n[0].currentIntensiveCarePatients<600||n[0].currentIntensiveCarePatients>=450&&n[0].currentIntensiveCarePatients<600?"active":""))+" svelte-3mnlbm"),h(Y,"class","circle svelte-3mnlbm"),h(en,"class","label svelte-3mnlbm"),h(sn,"class","light svelte-3mnlbm"),h(rn,"class","number svelte-3mnlbm"),h(nn,"class","text-column svelte-3mnlbm"),h(X,"class","text svelte-3mnlbm"),h(Q,"class",on=x("card red ".concat(n[0].currentIntensiveCarePatients>600?"active":""))+" svelte-3mnlbm"),h(e,"class","wrapper svelte-3mnlbm")},m:function(n,o){d(n,e,o),m(e,t),m(t,a),m(t,r),m(t,s),m(s,c),m(c,i),m(i,l),m(l,v),m(e,A),m(e,y),m(y,C),m(y,k),m(y,L),m(L,N),m(N,S),m(S,V),m(N,P),m(N,T),m(T,R),m(R,_),m(T,B),m(L,M),m(L,F),m(F,H),m(H,q),m(F,K),m(F,Z),m(Z,G),m(G,O),m(Z,j),m(e,U),m(e,Q),m(Q,Y),m(Q,J),m(Q,X),m(X,nn),m(nn,en),m(en,tn),m(nn,an),m(nn,rn),m(rn,sn),m(sn,cn),m(rn,ln)},p:function(n,e){var a=I(e,1)[0];1&a&&z!==(z=x("card ".concat(n[0].hospitalizationLast7Days<1200&&n[0].currentIntensiveCarePatients<450?"active":""))+" svelte-3mnlbm")&&h(t,"class",z),1&a&&un!==(un=n[0].hospitalizationLast7Days+"")&&b(_,un),1&a&&fn!==(fn=n[0].currentIntensiveCarePatients+"")&&b(O,fn),1&a&&W!==(W=x("card yellow ".concat(n[0].hospitalizationLast7Days>1200&&n[0].currentIntensiveCarePatients<600||n[0].currentIntensiveCarePatients>=450&&n[0].currentIntensiveCarePatients<600?"active":""))+" svelte-3mnlbm")&&h(y,"class",W),1&a&&hn!==(hn=n[0].currentIntensiveCarePatients+"")&&b(cn,hn),1&a&&on!==(on=x("card red ".concat(n[0].currentIntensiveCarePatients>600?"active":""))+" svelte-3mnlbm")&&h(Q,"class",on)},i:D,o:D,d:function(n){n&&f(e)}}}function en(n,e,t){var a=e.data;return n.$$set=function(n){"data"in n&&t(0,a=n.data)},[a]}var tn=function(e){n(l,i);var t=X(l);function l(n){var e;return a(this,l),e=t.call(this),r(c(e),n,en,nn,s,{data:0}),e}return l}();function an(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,s=e(n);if(a){var c=e(this).constructor;r=Reflect.construct(s,arguments,c)}else r=s.apply(this,arguments);return t(this,r)}}function rn(n,e,t){var a=n.slice();return a[11]=e[t],a[12]=e,a[13]=t,a}function sn(n){var e,t,a,r,s,c,i,l;return{c:function(){e=p("a"),t=p("div"),a=p("img"),r=E(),s=p("p"),c=p("small"),i=p("strong"),l=g("Zur App mit ALLEN Landkreisen ›"),this.h()},l:function(n){e=o(n,"A",{class:!0,href:!0});var h=u(e);t=o(h,"DIV",{class:!0});var v=u(t);a=o(v,"IMG",{src:!0,width:!0,height:!0,alt:!0,style:!0,class:!0}),v.forEach(f),r=w(h),s=o(h,"P",{class:!0});var d=u(s);c=o(d,"SMALL",{});var m=u(c);i=o(m,"STRONG",{});var p=u(i);l=$(p,"Zur App mit ALLEN Landkreisen ›"),p.forEach(f),m.forEach(f),d.forEach(f),h.forEach(f),this.h()},h:function(){a.src!=="https://www.corona-ampel.app/favicons/maskable_icon_x128.png"&&h(a,"src","https://www.corona-ampel.app/favicons/maskable_icon_x128.png"),h(a,"width","24"),h(a,"height","24"),h(a,"alt","Ampel-Icon"),v(a,"height","auto"),v(a,"max-width","100%"),h(a,"class","svelte-1hsxvnh"),h(t,"class","logo svelte-1hsxvnh"),h(s,"class","details svelte-1hsxvnh"),h(e,"class","list-tile svelte-1hsxvnh"),h(e,"href","https://corona-ampel.app/?coburg")},m:function(n,o){d(n,e,o),m(e,t),m(t,a),m(e,r),m(e,s),m(s,c),m(c,i),m(i,l)},d:function(n){n&&f(e)}}}function cn(n){var e,t,a,r,s,c;return{c:function(){e=p("small"),t=p("span"),a=g("💥 "),r=p("strong"),s=g("ACHTUNG!"),c=g(" Das RKI aktualisiert aktuell noch ihre Daten ...")},l:function(n){e=o(n,"SMALL",{});var i=u(e);t=o(i,"SPAN",{});var l=u(t);a=$(l,"💥 "),r=o(l,"STRONG",{});var h=u(r);s=$(h,"ACHTUNG!"),h.forEach(f),c=$(l," Das RKI aktualisiert aktuell noch ihre Daten ..."),l.forEach(f),i.forEach(f)},m:function(n,i){d(n,e,i),m(e,t),m(t,a),m(t,r),m(r,s),m(t,c)},d:function(n){n&&f(e)}}}function ln(n){var e,t,a,r,s,c,i,l,v;function b(e){n[6].call(null,e)}var x={};return void 0!==n[2][0]&&(x.data=n[2][0]),r=new tn({props:x}),A.push((function(){return B(r,"data",b)})),{c:function(){e=p("h2"),t=g("Hospitalisierung in Bayern"),a=E(),C(r.$$.fragment),c=E(),i=p("h2"),l=g("7 Tage Inzidenz"),this.h()},l:function(n){e=o(n,"H2",{class:!0});var s=u(e);t=$(s,"Hospitalisierung in Bayern"),s.forEach(f),a=w(n),k(r.$$.fragment,n),c=w(n),i=o(n,"H2",{class:!0});var h=u(i);l=$(h,"7 Tage Inzidenz"),h.forEach(f),this.h()},h:function(){h(e,"class","svelte-1hsxvnh"),h(i,"class","svelte-1hsxvnh")},m:function(n,s){d(n,e,s),m(e,t),d(n,a,s),L(r,n,s),d(n,c,s),d(n,i,s),m(i,l),v=!0},p:function(n,e){var t={};!s&&4&e&&(s=!0,t.data=n[2][0],M((function(){return s=!1}))),r.$set(t)},i:function(n){v||(N(r.$$.fragment,n),v=!0)},o:function(n){S(r.$$.fragment,n),v=!1},d:function(n){n&&f(e),n&&f(a),V(r,n),n&&f(c),n&&f(i)}}}function on(n){var e,t,a,r,s,c,i,l;function v(e){n[7].call(null,e,n[11],n[12],n[13])}var g={};return void 0!==n[11]&&(g.data=n[11]),a=new Y({props:g}),A.push((function(){return B(a,"data",v)})),{c:function(){e=p("li"),t=p("a"),C(a.$$.fragment),i=E(),this.h()},l:function(n){e=o(n,"LI",{class:!0});var r=u(e);t=o(r,"A",{rel:!0,href:!0,title:!0,class:!0});var s=u(t);k(a.$$.fragment,s),s.forEach(f),i=w(r),r.forEach(f),this.h()},h:function(){h(t,"rel","prefetch"),h(t,"href",s=n[11].slug+"/"),h(t,"title",c="Zu ".concat(n[11].district," ").concat(n[11].name," ›")),h(t,"class","svelte-1hsxvnh"),h(e,"class","svelte-1hsxvnh")},m:function(n,r){d(n,e,r),m(e,t),L(a,t,null),m(e,i),l=!0},p:function(e,i){n=e;var o={};!r&&8&i&&(r=!0,o.data=n[11],M((function(){return r=!1}))),a.$set(o),(!l||8&i&&s!==(s=n[11].slug+"/"))&&h(t,"href",s),(!l||8&i&&c!==(c="Zu ".concat(n[11].district," ").concat(n[11].name," ›")))&&h(t,"title",c)},i:function(n){l||(N(a.$$.fragment,n),l=!0)},o:function(n){S(a.$$.fragment,n),l=!1},d:function(n){n&&f(e),V(a)}}}function un(n){var e,t,a,r,s;return{c:function(){e=p("small"),t=p("span"),a=p("strong"),r=g("Hinweis"),s=g(": Alle Angaben sind ohne Gewähr. Dies ist nicht die offizielle\n        Corona-Ampel. Farben können eventuell abweichen und sind nur zur Orientierung gedacht.")},l:function(n){e=o(n,"SMALL",{});var c=u(e);t=o(c,"SPAN",{});var i=u(t);a=o(i,"STRONG",{});var l=u(a);r=$(l,"Hinweis"),l.forEach(f),s=$(i,": Alle Angaben sind ohne Gewähr. Dies ist nicht die offizielle\n        Corona-Ampel. Farben können eventuell abweichen und sind nur zur Orientierung gedacht."),i.forEach(f),c.forEach(f)},m:function(n,c){d(n,e,c),m(e,t),m(t,a),m(a,r),m(t,s)},d:function(n){n&&f(e)}}}function fn(n){var e,t,a,r,s,c,i,l;return{c:function(){e=p("small"),t=p("span"),a=p("strong"),r=g("Hinweis zur Krankenhausampel"),s=g(": Die wirklichen Zahlen zur\n        Krankenhausampel können nicht zu 100% korrekt angegeben werden, da es über Tage und Wochen\n        hinweg noch Nachmeldungen gibt. Ich kann hier leider nur die offiziellen Zahlen des LGLs\n        angeben, nach der sich unsere Regierung in Bayern orientiert.\n        "),c=p("a"),i=p("small"),l=g("Quelle: LGL"),this.h()},l:function(n){e=o(n,"SMALL",{});var h=u(e);t=o(h,"SPAN",{});var v=u(t);a=o(v,"STRONG",{});var d=u(a);r=$(d,"Hinweis zur Krankenhausampel"),d.forEach(f),s=$(v,": Die wirklichen Zahlen zur\n        Krankenhausampel können nicht zu 100% korrekt angegeben werden, da es über Tage und Wochen\n        hinweg noch Nachmeldungen gibt. Ich kann hier leider nur die offiziellen Zahlen des LGLs\n        angeben, nach der sich unsere Regierung in Bayern orientiert.\n        "),c=o(v,"A",{href:!0,target:!0,rel:!0,class:!0});var m=u(c);i=o(m,"SMALL",{});var p=u(i);l=$(p,"Quelle: LGL"),p.forEach(f),m.forEach(f),v.forEach(f),h.forEach(f),this.h()},h:function(){h(c,"href","https://www.lgl.bayern.de/gesundheit/infektionsschutz/infektionskrankheiten_a_z/coronavirus/karte_coronavirus/index.htm#wKennzahlen"),h(c,"target","_blank"),h(c,"rel","noopener noreferrer"),h(c,"class","svelte-1hsxvnh")},m:function(n,o){d(n,e,o),m(e,t),m(t,a),m(a,r),m(t,s),m(t,c),m(c,i),m(i,l)},d:function(n){n&&f(e)}}}function hn(n){var e,t,a,r,s,c;return{c:function(){e=p("small"),t=l("svg"),a=l("path"),r=E(),s=p("span"),c=g("Ab 200 gelten weitere Maßnahmen in Bayern!"),this.h()},l:function(n){e=o(n,"SMALL",{});var i=u(e);t=o(i,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0,style:!0},1);var l=u(t);a=o(l,"path",{d:!0,fill:!0},1),u(a).forEach(f),l.forEach(f),r=w(i),s=o(i,"SPAN",{});var h=u(s);c=$(h,"Ab 200 gelten weitere Maßnahmen in Bayern!"),h.forEach(f),i.forEach(f),this.h()},h:function(){h(a,"d","M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"),h(a,"fill","currentColor"),h(t,"class","danger-icon"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),h(t,"aria-hidden","true"),h(t,"focusable","false"),h(t,"role","img"),h(t,"width","1.5em"),h(t,"height","1.5em"),h(t,"preserveAspectRatio","xMidYMid meet"),h(t,"viewBox","0 0 24 24"),v(t,"transform","translate3d(0, -2px, 0)"),v(t,"vertical-align","middle")},m:function(n,i){d(n,e,i),m(e,t),m(t,a),m(e,r),m(e,s),m(s,c)},d:function(n){n&&f(e)}}}function vn(n){var e,t,a,r,s,c,i,l,v,x,D,z,A,_,B,M,H,Z,G,O,j,W,U,Q,Y,J,X,nn,en,tn,an,vn,dn,mn,pn,gn,$n,bn,En,wn,xn,In,Dn,zn,An,yn,Cn=(n[0]?n[0].toLocaleString("de",{maximumFractionDigits:1}):"0")+"",kn=(n[1]?n[1].toLocaleString("de",{maximumFractionDigits:1}):"0")+"";c=new y({props:{until:"2021-12-15T23:00:00Z",$$slots:{default:[sn]},$$scope:{ctx:n}}}),v=new y({props:{until:"2021-09-09T17:00:00Z",$$slots:{default:[cn]},$$scope:{ctx:n}}});for(var Ln=!!n[2]&&ln(n),Nn=n[3],Sn=[],Vn=0;Vn<Nn.length;Vn+=1)Sn[Vn]=on(rn(n,Nn,Vn));var Pn=function(n){return S(Sn[n],1,1,(function(){Sn[n]=null}))};return dn=new q({}),bn=new y({props:{until:"2024-09-09T17:00:00Z",left:!0,$$slots:{default:[un]},$$scope:{ctx:n}}}),wn=new y({props:{until:"2024-09-09T17:00:00Z",left:!0,$$slots:{default:[fn]},$$scope:{ctx:n}}}),In=new K({}),An=new y({props:{until:"2021-01-31T00:00:00Z",$$slots:{default:[hn]},$$scope:{ctx:n}}}),{c:function(){e=p("meta"),t=p("meta"),a=p("meta"),r=E(),s=p("center"),C(c.$$.fragment),i=E(),l=p("center"),C(v.$$.fragment),x=E(),D=p("section"),z=p("div"),A=p("h3"),_=g("Neue Fälle in Deutschland"),B=E(),M=p("div"),H=g("+"),Z=g(Cn),G=E(),O=p("div"),j=p("h3"),W=g("Neue Fälle in Bayern"),U=E(),Q=p("div"),Y=g("+"),J=g(kn),X=E(),Ln&&Ln.c(),nn=E(),en=p("nav"),tn=p("ul");for(var n=0;n<Sn.length;n+=1)Sn[n].c();an=E(),vn=p("div"),C(dn.$$.fragment),mn=E(),pn=p("br"),gn=E(),$n=p("center"),C(bn.$$.fragment),En=E(),C(wn.$$.fragment),xn=E(),C(In.$$.fragment),Dn=E(),zn=p("div"),C(An.$$.fragment),this.h()},l:function(n){var h=P('[data-svelte="svelte-cy433z"]',document.head);e=o(h,"META",{content:!0,name:!0}),t=o(h,"META",{property:!0,content:!0}),a=o(h,"META",{property:!0,content:!0}),h.forEach(f),r=w(n),s=o(n,"CENTER",{});var d=u(s);k(c.$$.fragment,d),d.forEach(f),i=w(n),l=o(n,"CENTER",{});var m=u(l);k(v.$$.fragment,m),m.forEach(f),x=w(n),D=o(n,"SECTION",{class:!0});var p=u(D);z=o(p,"DIV",{class:!0});var g=u(z);A=o(g,"H3",{class:!0});var b=u(A);_=$(b,"Neue Fälle in Deutschland"),b.forEach(f),B=w(g),M=o(g,"DIV",{class:!0});var E=u(M);H=$(E,"+"),Z=$(E,Cn),E.forEach(f),g.forEach(f),G=w(p),O=o(p,"DIV",{class:!0});var I=u(O);j=o(I,"H3",{class:!0});var y=u(j);W=$(y,"Neue Fälle in Bayern"),y.forEach(f),U=w(I),Q=o(I,"DIV",{class:!0});var C=u(Q);Y=$(C,"+"),J=$(C,kn),C.forEach(f),I.forEach(f),p.forEach(f),X=w(n),Ln&&Ln.l(n),nn=w(n),en=o(n,"NAV",{});var L=u(en);tn=o(L,"UL",{id:!0,class:!0});for(var N=u(tn),S=0;S<Sn.length;S+=1)Sn[S].l(N);N.forEach(f),L.forEach(f),an=w(n),vn=o(n,"DIV",{class:!0});var V=u(vn);k(dn.$$.fragment,V),V.forEach(f),mn=w(n),pn=o(n,"BR",{}),gn=w(n),$n=o(n,"CENTER",{});var T=u($n);k(bn.$$.fragment,T),En=w(T),k(wn.$$.fragment,T),T.forEach(f),xn=w(n),k(In.$$.fragment,n),Dn=w(n),zn=o(n,"DIV",{class:!0});var R=u(zn);k(An.$$.fragment,R),R.forEach(f),this.h()},h:function(){document.title="Corona-Ampel-Coburg: 🚦 Aktuelle Fälle und Zahlen",h(e,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),h(e,"name","description"),h(t,"property","og:title"),h(t,"content","Corona-Ampel Coburg und Umgebung: aktuelle 7 Tage Corona Inzidenz"),h(a,"property","og:description"),h(a,"content","🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"),h(A,"class","label svelte-1hsxvnh"),h(M,"class","cases svelte-1hsxvnh"),h(z,"class","column left svelte-1hsxvnh"),h(j,"class","label svelte-1hsxvnh"),h(Q,"class","cases svelte-1hsxvnh"),h(O,"class","column right svelte-1hsxvnh"),h(D,"class","statistics svelte-1hsxvnh"),h(tn,"id","hp-cardlist"),h(tn,"class","svelte-1hsxvnh"),h(vn,"class","social svelte-1hsxvnh"),h(zn,"class","hints svelte-1hsxvnh")},m:function(n,o){m(document.head,e),m(document.head,t),m(document.head,a),d(n,r,o),d(n,s,o),L(c,s,null),d(n,i,o),d(n,l,o),L(v,l,null),d(n,x,o),d(n,D,o),m(D,z),m(z,A),m(A,_),m(z,B),m(z,M),m(M,H),m(M,Z),m(D,G),m(D,O),m(O,j),m(j,W),m(O,U),m(O,Q),m(Q,Y),m(Q,J),d(n,X,o),Ln&&Ln.m(n,o),d(n,nn,o),d(n,en,o),m(en,tn);for(var u=0;u<Sn.length;u+=1)Sn[u].m(tn,null);d(n,an,o),d(n,vn,o),L(dn,vn,null),d(n,mn,o),d(n,pn,o),d(n,gn,o),d(n,$n,o),L(bn,$n,null),m($n,En),L(wn,$n,null),d(n,xn,o),L(In,n,o),d(n,Dn,o),d(n,zn,o),L(An,zn,null),yn=!0},p:function(n,e){var t=I(e,1)[0],a={};16384&t&&(a.$$scope={dirty:t,ctx:n}),c.$set(a);var r={};if(16384&t&&(r.$$scope={dirty:t,ctx:n}),v.$set(r),(!yn||1&t)&&Cn!==(Cn=(n[0]?n[0].toLocaleString("de",{maximumFractionDigits:1}):"0")+"")&&b(Z,Cn),(!yn||2&t)&&kn!==(kn=(n[1]?n[1].toLocaleString("de",{maximumFractionDigits:1}):"0")+"")&&b(J,kn),n[2]?Ln?(Ln.p(n,t),4&t&&N(Ln,1)):((Ln=ln(n)).c(),N(Ln,1),Ln.m(nn.parentNode,nn)):Ln&&(F(),S(Ln,1,1,(function(){Ln=null})),T()),8&t){var s;for(Nn=n[3],s=0;s<Nn.length;s+=1){var i=rn(n,Nn,s);Sn[s]?(Sn[s].p(i,t),N(Sn[s],1)):(Sn[s]=on(i),Sn[s].c(),N(Sn[s],1),Sn[s].m(tn,null))}for(F(),s=Nn.length;s<Sn.length;s+=1)Pn(s);T()}var l={};16384&t&&(l.$$scope={dirty:t,ctx:n}),bn.$set(l);var o={};16384&t&&(o.$$scope={dirty:t,ctx:n}),wn.$set(o);var u={};16384&t&&(u.$$scope={dirty:t,ctx:n}),An.$set(u)},i:function(n){if(!yn){N(c.$$.fragment,n),N(v.$$.fragment,n),N(Ln);for(var e=0;e<Nn.length;e+=1)N(Sn[e]);N(dn.$$.fragment,n),N(bn.$$.fragment,n),N(wn.$$.fragment,n),N(In.$$.fragment,n),N(An.$$.fragment,n),yn=!0}},o:function(n){S(c.$$.fragment,n),S(v.$$.fragment,n),S(Ln),Sn=Sn.filter(Boolean);for(var e=0;e<Sn.length;e+=1)S(Sn[e]);S(dn.$$.fragment,n),S(bn.$$.fragment,n),S(wn.$$.fragment,n),S(In.$$.fragment,n),S(An.$$.fragment,n),yn=!1},d:function(n){f(e),f(t),f(a),n&&f(r),n&&f(s),V(c),n&&f(i),n&&f(l),V(v),n&&f(x),n&&f(D),n&&f(X),Ln&&Ln.d(n),n&&f(nn),n&&f(en),R(Sn,n),n&&f(an),n&&f(vn),V(dn),n&&f(mn),n&&f(pn),n&&f(gn),n&&f($n),V(bn),V(wn),n&&f(xn),V(In,n),n&&f(Dn),n&&f(zn),V(An)}}}function dn(){this.fetch("sitemap.xml");return this.fetch("index.json").then((function(n){return n.json()})).then((function(n){return{data:n}}))}function mn(n,e,t){var a;_(n,H,(function(n){return t(5,a=n)}));var r=e.data,s=r,c=s.citys,i=s.germannew,l=s.bavarianew,o=(s.germanincidence,s.bavariaincidence,s.hospitalization),u=[];return u=J(c),n.$$set=function(n){"data"in n&&t(4,r=n.data)},n.$$.update=function(){32&n.$$.dirty&&a&&a.citys&&(t(3,u=J(a.citys)),t(0,i=a.germannew),t(1,l=a.bavarianew),a.germanincidence,a.bavariaincidence,t(2,o=a.hospitalization))},[i,l,o,u,r,a,function(n){o[0]=n,t(2,o),t(5,a)},function(n,e,r,s){r[s]=n,t(3,u),t(5,a)}]}var pn=function(e){n(l,i);var t=an(l);function l(n){var e;return a(this,l),e=t.call(this),r(c(e),n,mn,vn,s,{data:4}),e}return l}();export default pn;export{dn as preload};
