(function(e,t,r,n,a,i){i=0,a=function(e){return e.id||(e.id="mx_n_"+ ++i)},n.add("magix/magix",function(r){var n=[].slice,a=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,i=/\/[^\/]*$/,o=/[#?].*$/,s="",c=/([^=&?\/#]+)=?([^&=#?]*)/g,f="pathname",u=/^https?:\/\//i,v=0,h="/",m="vframe",d="\n",l=t.console,g=l&&l.error,p=function(){},x={tagName:m,rootId:"magix_vf_root",coded:1,execError:function(e){g&&l.error(e)}},$=x.hasOwnProperty,y=function(e,t){return e&&$.call(e,t)},w=function(t){return function(r,n,a){switch(arguments.length){case 0:a=t;break;case 1:a=T._o(r)?M(t,r):y(t,r)?t[r]:e;break;case 2:n===e?(delete t[r],a=n):t[r]=a=n}return a}},b=function(e,t){return t.f-e.f||t.t-e.t},C=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(0|t||5)):r=new C(e,t),r},M=function(e,t,r){for(var n in t)r&&y(r,n)||(e[n]=t[n]);return e};M(C.prototype,{get:function(e){var t,r=this,n=r.c;return e=f+e,y(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=v++,t=t.v)),t},list:function(){return this.c},set:function(e,t,r){var n=this,a=n.c,i=f+e,o=a[i];if(!y(a,i)){if(a.length>=n.b){a.sort(b);for(var s=n.b-n.x;s--;)o=a.pop(),delete a[o.k],o.m&&O(o.m,o.o,o)}o={},a.push(o),a[i]=o}return o.o=e,o.k=i,o.v=t,o.f=1,o.t=v++,o.m=r,t},del:function(e){e=f+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=s,delete t[e],r.m&&(O(r.m,r.o,r),r.m=s))},has:function(e){return e=f+e,y(this.c,e)}});var P=C(40),E=C(),O=function(e,t,r,n,a,i){for(T._a(e)||(e=[e]),t&&(T._a(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{i=e[n],a=i&&i.apply(r,t)}catch(o){x.execError(o)}return a},T={mix:M,has:y,safeExec:O,noop:p,config:w(x),start:function(e){var t=this;M(x,e),t.use(["magix/router","magix/vom",e.iniFile],function(r,n,a){x=M(x,a,e),x["!tnc"]=x.tagName!=m,r.on("!ul",n.locChged),r.on("changed",n.locChged),t.use(x.extensions,r.start)})},keys:Object.keys||function(e){var t=[];for(var r in e)y(e,r)&&t.push(r);return t},local:w({}),path:function(e,t){var r=e+d+t,n=E.get(r);if(!n){if(u.test(t))n=t;else if(e=e.replace(o,s).replace(i,s)+h,t.charAt(0)==h){var c=u.test(e)?8:0,f=e.indexOf(h,c);n=e.substring(0,f)+t}else n=e+t;for(;a.test(n);)n=n.replace(a,"$1/");E.set(r,n)}return n},pathToObject:function(e,t){var r=e+d+t,n=P.get(r);if(!n){n={};var a={},i=s;o.test(e)?i=e.replace(o,s):~e.indexOf("=")||(i=e);var v=e.replace(i,s);if(i&&u.test(i)){var m=i.indexOf(h,8);i=~m?i.substring(m):h}v.replace(c,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}a[r]=n}),n[f]=i,n.params=a,P.set(r,n)}return n},objectToPath:function(e,t,r){var n,a=e[f],i=[],o=e.params;for(var s in o)n=o[s],(!r||n||y(r,s))&&(t&&(n=encodeURIComponent(n)),i.push(s+"="+n));return i.length&&(a=a+"?"+i.join("&")),a},listToMap:function(e,t){var r,n,a,i={};if(T._s(e)&&(e=e.split(",")),e&&(a=e.length))for(r=0;a>r;r++)n=e[r],i[t?n[t]:n]=t?n:1;return i},cache:C};return M(T,{use:function(e,t){r.use(e&&e+s,function(e){t&&t.apply(e,n.call(arguments,1))})},_a:r.isArray,_f:r.isFunction,_o:r.isObject,_s:r.isString,_n:r.isNumber})}),n.add("magix/router",function(e,r,n,a){var i,o,s,c,f,u,v="",h="pathname",m="view",d=r.has,l=r.mix,g=r.keys,p=r.config(),x=r.cache(),$=r.cache(40),y={params:{},href:v},w=/#.*$/,b=/^[^#]*#?!?/,C="params",M=function(e,t,r){if(e){r=this[C],e=(e+v).split(",");for(var n=0;e.length>n&&!(t=d(r,e[n]));n++);}return t},P=function(){return this[h]},E=function(){return this[m]},O=function(e,t,r,n){return r=this,n=r[C],arguments.length>1?n[e]=t:n[e]},T=function(e){var n=r.pathToObject(e,c),a=n[h];return a&&u&&(n[h]=r.path(t.location[h],a)),n},q=l({viewInfo:function(e,t){var n,a;if(!o){o={rs:p.routes||{},nf:p.notFoundView};var i=p.defaultView;o.dv=i;var s=p.defaultPathname||v;n=o.rs,o.f=r._f(n),o.f||n[s]||!i||(n[s]=i),o[h]=s}return e||(e=o[h]),n=o.rs,a=o.f?n.call(p,e,t):n[e],{view:a||o.nf||o.dv,pathname:e}},start:function(){var e=t.history;s=p.nativeHistory,c=p.coded,f=s&&e.pushState,u=s&&!f,f?q.useState():q.useHash(),q.route()},parseQH:function(e,r){e=e||t.location.href;var n=x.get(e);if(!n){var a=e.replace(w,v),i=e.replace(b,v),o=T(a),c=T(i),f={};l(f,o[C]),l(f,c[C]),n={get:O,set:O,href:e,refHref:y.href,srcQuery:a,srcHash:i,query:o,hash:c,params:f},x.set(e,n)}if(r&&!n[m]){var u;u=n.hash[h]||s&&n.query[h];var d=q.viewInfo(u,n);l(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,a=r+"\n"+n,i=$.get(a);if(!i){var o,s,c;i={},i[m]=c,i[h]=c,i[C]={};var f,u,v=[h,m];for(f=1;f>=0;f--)u=v[f],s=e[u],c=t[u],s!=c&&(i[u]={from:s,to:c},o=1);var d=e[C],l=t[C];for(v=g(d).concat(g(l)),f=v.length-1;f>=0;f--)u=v[f],s=d[u],c=l[u],s!=c&&(i[C][u]={from:s,to:c},o=1);i.occur=o,i.isParam=M,i.isPathname=P,i.isView=E,$.set(a,i)}return i},route:function(){var e=q.parseQH(0,1),t=!y.get,r=q.getChged(y,e);y=e,r.occur&&(i=e,q.fire("changed",{location:e,changed:r,force:t}))},navigate:function(e,t,n){if(!t&&r._o(e)&&(t=e,e=v),t&&(e=r.objectToPath({params:t,pathname:e},c)),e){var a=T(e),o={};if(o[C]=l({},a[C]),o[h]=a[h],o[h]){if(u){var s=i.query[C];for(var m in s)d(s,m)&&!d(o[C],m)&&(o[C][m]=v)}}else{var g=l({},i[C]);o[C]=l(g,o[C]),o[h]=i[h]}var p,x=r.objectToPath(o,c,i.query[C]);p=x!=i[f?"srcQuery":"srcHash"],p&&(f?(q.poped=1,history[n?"replaceState":"pushState"](v,v,x),q.route()):(l(o,i,o),o.srcHash=x,o.hash={params:o[C],pathname:o[h]},q.fire("!ul",{loc:i=o}),x="#!"+x,n?location.replace(x):location.hash=x))}}},n);return q.useState=function(){var e=location.href;a.on(t,"popstate",function(){var t=location.href==e;(q.poped||!t)&&(q.poped=1,q.route())})},q.useHash=function(){a.on(t,"hashchange",q.route)},q},{requires:["magix/magix","magix/event","event"]}),n.add("magix/body",function(t,n){var i,o=n.has,s={},c=String.fromCharCode(26),f="mx-ei",u="mx-owner",v=r.body,h="parentNode",m={},d="on",l=",",g=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},p=function(){this.prevent(),this.stop()},x={process:function(t){if(t&&!t[d]){var r=t.target||t.srcElement||v;for(t[d]=1;r&&1!=r.nodeType;)r=r[h];for(var n,s,x=r,$=t.type,y=m[$]||(m[$]=RegExp(l+$+"(?:,|$)")),w="mx-"+$,b=[];x&&1==x.nodeType&&(n=g(x,w),s=g(x,f),!n&&!y.test(s));)b.push(x),x=x[h];if(n){var C,M=n.split(c);if(M.length>1&&(C=M[0],n=M.pop()),C=C||g(x,u),!C)for(var P=x,E=i.all();P;){if(o(E,P.id)){g(x,u,C=P.id);break}P=P[h]}if(!C)throw Error("bad:"+n);var O=i.get(C),T=O&&O.view;T&&(t.currentId=a(x),t.targetId=a(r),t.prevent=t.preventDefault,t.stop=t.stopPropagation,t.halt=p,T.pEvt(n,$,t))}else{for(var q;b.length;)q=b.pop(),s=g(q,f)||d,y.test(s)||(s=s+l+$,g(q,f,s));q=e}x=r=e}},act:function(e,t,r){var n=s[e]||0,a=n>0?1:0,o=x.process;n+=t?-a:a,n||(r&&(i=r),x.lib(v,e,o,t),t||(n=1)),s[e]=n}},$={mouseenter:2,mouseleave:2};return x.lib=function(e,r,n,a,i,o){t.use("event",function(t,s){var c=$[r];o||2!=c?(c=a?"detach":"on",s[c](e,r,n,i)):(c=(a?"un":"")+"delegate",s[c](e,r,"[mx-"+r+"]",n))})},x},{requires:["magix/magix"]}),n.add("magix/event",function(e,t){var r=function(e){return"~"+e},n=t.safeExec,a={fire:function(e,t,a,i){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,v=c.length,h=v-1;v--;)f=i?v:h-v,u=c[f],(u.d||u.r)&&(c.splice(f,1),h--),u.d||n(u.f,t,s);a=a||0>h}a&&delete s[o]},on:function(e,t,n){var a=r(e),i=this[a]||(this[a]=[]),o={f:t};isNaN(n)?(o.r=n,i.push(o)):i.splice(0|n,0,o)},rely:function(e,t,n,a,i){var o=this;o.on(e,t,i),n.on(a,function(){o.off(e,t)},r)},off:function(e,t){var n=r(e),a=this[n];if(a)if(t){for(var i,o=a.length-1;o>=0;o--)if(i=a[o],i.f==t&&!i.d){i.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,r)}};return t.mix(t.local,a),a},{requires:["magix/magix"]}),n.add("magix/vframe",function(t,n,i,o){var s,c,f,u,v,h,m,d,l,g,p,x=n.safeExec,$=[],y=n.mix,w=n.config(),b=n.has,C="querySelectorAll",M="alter",P="created",E=function(e){return"object"==typeof e?e:r.getElementById(e)},O=function(e,t,n){return t=E(e),t&&(n=f?r[C]("#"+a(t)+u):t.getElementsByTagName(s)),n||$},T=function(e,t,r){if(e=E(e),t=E(t),e&&t)if(e!==t)try{r=h?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},q=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.ns={},t.owner=p,p.add(e,t)};return q.root=function(t,n,a){if(!m){s=w.tagName,c=w["!tnc"],v=c?"mx-vframe":"mx-defer",f=c&&r[C],u=" "+s+"[mx-vframe]";var i=r.body;h=i.contains,l=n,g=a,p=t;var o=w.rootId,d=E(o);d||(d=r.createElement(s),d.id=o,i.appendChild(d),d=e),m=new q(o)}return m},y(y(q.prototype,i),{mountView:function(e,t){var r=this,a=E(r.id);if(r._a||(r._a=1,r._t=a.innerHTML),r.unmountView(),e){var i=n.pathToObject(e,w.coded),s=i.pathname,c=--r.sign;n.use(s,function(e){if(c==r.sign){o.prepare(e);var n=new e({owner:r,id:r.id,$:E,$c:T,path:s,vom:p,location:l});r.view=n;var f=function(e){r.mountZoneVframes(e.id)};n.on("interact",function(e){e.tmpl||(a.innerHTML=r._t,f(E)),n.on("primed",function(){r.viewPrimed=1,r.fire("viewMounted")}),n.on("rendered",f),n.on("prerender",function(e){r.unmountZoneVframes(e.id,1)||r.cAlter()})},0),t=t||{},n.load(y(t,i.params,t),g)}})}},unmountView:function(){var e=this,t=e.view;if(t){d||(d={}),e.unmountZoneVframes(0,1),e.cAlter(d),e.view=0,t.oust();var r=E(e.id);r&&e._a&&(r.innerHTML=e._t),e.viewInited=0,e.viewPrimed&&(e.viewPrimed=0,e.fire("viewUnmounted")),d=0}e.sign--},mountVframe:function(e,t,r){var n=this;n.fcc&&n.cAlter();var a=p.get(e);return a||(a=new q(e),a.pId=n.id,b(n.cM,e)||n.cC++,n.cM[e]=1),a.mountView(t,r),a},mountZoneVframes:function(e,t){var r=this;e=e||r.id,r.unmountZoneVframes(e,1);var n=O(e),i=n.length,o={};if(i)for(var s,f,u,h,m=0;i>m;m++)if(s=n[m],f=a(s),!b(o,f)&&(u=s.getAttribute("mx-view"),h=!s.getAttribute(v),h=h!=c,h||u)){r.mountVframe(f,u,t);for(var d,l=O(s),g=0,p=l.length;p>g;g++)d=l[g],o[a(d)]=1}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=p.get(e);if(n){var a=n.fcc;n.unmountView(),p.remove(e,a);var i=p.get(n.pId);i&&b(i.cM,e)&&(delete i.cM[e],i.cC--,t||i.cCreated())}},unmountZoneVframes:function(e,t){var r,n,a=this,i=a.cM;for(n in i)(!e||T(n,e))&&a.unmountVframe(n,r=1);return t||a.cCreated(),r},invokeView:function(e,t){var r,n=this;if(n.viewInited){var a=n.view,i=a&&a[e];i&&(r=x(i,t||$,a))}return r},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,t.fca=0,r.fire(P,e),t.fire(P,e));var n=t.id,a=p.get(t.pId);a&&!b(a.rM,n)&&(a.rM[n]=a.cM[n],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var r=t.fcc;if(t.fcc=0,!t.fca&&r){var n=t.view,a=t.id;n&&(t.fca=1,n.fire(M,e),t.fire(M,e));var i=p.get(t.pId);i&&b(i.rM,a)&&(i.rC--,delete i.rM[a],i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t&&t.sign>0){var r=t.olChg(g),a={location:l,changed:g,prevent:function(){this.cs=$},to:function(e){n._s(e)&&(e=e.split(",")),this.cs=e||$}};r&&t.render(a);for(var i,o=a.cs||n.keys(e.cM),s=0,c=o.length;c>s;s++)i=p.get(o[s]),i&&i.locChged()}}}),q},{requires:["magix/magix","magix/event","magix/view"]}),n.add("magix/view",function(n,a,i,o,s,c){var f=a.safeExec,u=a.has,v=",",h=[],m=a.noop,d=a.mix,l=window,g=0,p="~",x="destroy",$=function(e){return function(){var t=this,r=t.notifyUpdate();r>0&&f(e,arguments,t)}},y=function(e){var t=e&&e[x];t&&f(t,h,e)},w=function(e){l.clearTimeout(e),l.clearInterval(e)},b=function(e,t){var r=this,n=r.$res;for(var a in n){var i=n[a];(!e||i.mr)&&r.destroyManaged(a,t)}},C=a.cache(40),M="<",P=">",E=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,O=String.fromCharCode(26),T=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,q=/(\w+):([^,]+)/g,_=/([$\w]+)<([\w,]+)>/,k=function(e){var t=this;d(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),f(k.ms,[e],t)},A=k.prototype,I={$host:t,$root:r};k.ms=[],k.prepare=function(e){if(!e[p]){e[p]=1;var t,r,n,a,i,o,s=e.prototype,c={},f=[];for(var u in s)if(t=s[u],r=u.match(_))for(n=r[1],a=r[2],a=a.split(v),i=a.length-1;i>-1;i--)r=a[i],o=I[n],o?f.push({n:n,t:r,h:o,f:t}):(c[r]=1,s[n+M+r+P]=t);else"render"==u&&t!=m&&(s[u]=$(t));s.$evts=c,s.$sevts=f}},k.mixin=function(e,t){t&&k.ms.push(t),d(A,e)},d(d(A,i),{render:m,init:m,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=function(n){t&&(e.template=e.wrapMxEvent(n)),e.dEvts(),e.fire("interact",{tmpl:t},1),f(e.init,r,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var a=!t&&!e.rendered;a&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(n)):n()},beginUpdate:function(e){var t=this;t.sign>0&&t.rendered&&(t.fire("prerender",{id:e}),b(0,1))},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e}))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall"),b(1,1)),e.sign},wrapMxEvent:function(e){return(e+"").replace(E,"$&"+this.id+O)},wrapAsync:function(e){var t=this,r=t.sign;return function(){r>0&&r==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e,t){var r,n=this;n.beginUpdate(e),n.sign>0&&(r=n.$(e),r&&(r.innerHTML=t)),n.endUpdate(e)},observeLocation:function(e){var t,r=this;t=r.$ol,t.f=1;var n=t.ks;a._o(e)&&(t.pn=e.pathname,e=e.keys),e&&(t.ks=n.concat((e+"").split(v)))},olChg:function(e){var t,r=this,n=r.$ol;return n.f&&(n.pn&&(t=e.pathname),t||(t=e.isParam(n.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(x,0,1,1),b(),e.dEvts(1)),e.sign--},parentView:function(){var t=this,r=t.vom,n=t.owner,a=r.get(n.pId),i=e;return a&&a.viewInited&&(i=a.view),i},pEvt:function(e,t,r){var n=this;if(n.sign>0){var a=C.get(e);a||(a=e.match(T),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(q,function(e,t,r){a.p[t]=r}),C.set(e,a));var i=a.n+M+t+P,o=n[i];if(o){var s=r[a.f];s&&s.call(r),r.params=a.p,f(o,r,n)}}},dEvts:function(e){var t=this,r=t.$evts,n=t.vom;for(var a in r)o.act(a,e,n);for(r=t.$sevts,a=r.length;a-->0;)n=r[a],o.lib(n.h,n.t,n.f,e,t,1)},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e){var t,r=this;for(var n in r.$ns)if(t=r.$c(e,n))break;if(!t)for(var a in r.cM){var i=r.owner.get(a);if(t=i.inside(e))break}return t},navigate:s.navigate,manage:function(e,t,r){var n=this,i=arguments,o=1,s=n.$res;1==i.length?(t=e,e="res_"+g++,o=0):n.destroyManaged(e);var c;c=a._n(t)?w:y;var f={hk:o,res:t,ol:r,mr:t&&t.$reqs,oust:c};return s[e]=f,t},getManaged:function(t,r){var n=this,a=n.$res,i=e;if(u(a,t)){var o=a[t];i=o.res,r&&delete a[t]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var r,n=this,a=n.$res,i=a[e];return!i||t&&i.ol||(r=i.res,i.oust(r),i.hk&&t||delete a[e]),r}});var V="?t="+n.now(),N=n.Env.mods,S={},U={};return A.fetchTmpl=function(e,t){var r=this,n="template"in r;if(n)t(r.template);else if(u(S,e))t(S[e]);else{var a,i=N[e];i&&(a=i.uri||i.fullpath,a=a.slice(0,a.indexOf(e)+e.length));var o=a+".html",s=U[o],v=function(r){t(S[e]=r)};s?s.push(v):(s=U[o]=[v],c({url:o+V,complete:function(e,t){f(s,e||t),delete U[o]}}))}},k.extend=function(e,t,r){var a=this,i=function(){i.superclass.constructor.apply(this,arguments),t&&f(t,arguments,this)};return i.extend=a.extend,n.extend(i,a,e,r)},k},{requires:["magix/magix","magix/event","magix/body","magix/router","ajax"]}),n.add("magix/vom",function(e,t,r,n){var a=r.has,i=r.mix,o={},s={},c={},f=r.mix({all:function(){return o},add:function(e,t){a(o,e)||(o[e]=t,f.fire("add",{vframe:t}))},get:function(e){return o[e]},remove:function(e,t){var r=o[e];r&&(delete o[e],f.fire("remove",{vframe:r,fcc:t}))},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,i(s,n),!r){i(c,e.changed);var a=t.root(f,s,c);c.view?a.mountView(n.view):a.locChged()}}},n);return f},{requires:["magix/vframe","magix/magix","magix/event"]}),n.add("magix/mmanager",function(t,r,n){var a=r.has,i=r.safeExec,o=r._a,s=r._f,c=r.mix,f="mr",u=String.fromCharCode(26),v=12e5,h=function(e,t,r){if(t=[],s(e))t=i(e);else for(r in e)t.push(r,f,e[r]);return t},m=function(e,t,r){for(var n,a=[t.name],i={},o=e.length-1;o>-1;o--)n=e[o],i[n]?e.splice(o,1):a.push(i[n]=h(t[n]),h(r[n]));return a.join(u)},d=function(e){var t=e.cache;if(t){var r=0|e.cacheTime;t=r?r:t===!0?v:0|t}return t},l=Date.now||function(){return+new Date},g=l(),p=function(e){throw Error(e)},x=function(e,t){var n=this;n.$mClass=e,n.$mCache=r.cache(),n.$mCacheKeys={},n.$mMetas={},t=t?o(t)?t:[t]:[],n.$sKeys=["postParams","urlParams"].concat(t),n.id="mm"+g--,i(x.ms,arguments,n)},$=[].slice,y=function(e,t,r,n){return function(){return e.apply(t,[r,n].concat($.call(arguments)))}},w=function(e,t){var r=t.b,n=t.a,a=n[r];if(a){var o=a.q;delete n[r],i(o,e,a.e)}},b=function(t,r,n){var a,o=this,s=r.a,c=r.c,f=r.d,u=r.g,v=r.i,h=r.j,m=r.k,d=r.l,g=r.m,p=r.n,x=r.o;r.b++,delete c[o.id];var $=o.$mm,y=$.key,w=$.meta;if(f[t]=o,n)r.e=1,a=1,r.f=n,u.msg=n,u[t]=n,h.fire("fail",{model:o,meta:w,msg:n});else{if(!y||y&&!v.has(y)){y&&v.set(y,o),$.done=l();var b=$.after;b&&i(b,[o,w]),h.fire("done",{model:o,meta:w})}$.used>0&&(o.fromCache=1),$.used++}if(!s.$oust){if(m==P.ONE){var C=d?g[t]:g;C&&(p[t]=i(C,[a?u:e,o,u],s))}else if(m==P.ORDER){x[t]={m:o,e:a,s:n};for(var M,E,O=x.i||0;M=x[O];O++)E=d?g[O]:g,M.e&&(u.msg=M.s,u[O]=M.s),p[O]=i(E,[M.e?u:e,M.m,u].concat(p),s);x.i=O}r.b==r.h&&(r.e||(u=e),m==P.ALL?(f.unshift(u),p[0]=u,p[1]=i(g,f,s)):p.unshift(u),s.$ntId=setTimeout(function(){s.doNext(p)},30))}},C=function(e){return function(){var t=new E(this),r=arguments,n=r[r.length-1];return n&&n.manage&&(n.manage(t),r=$.call(r,0,-1)),t[e].apply(t,r)}},M=function(e,t){return function(r,n){var a=$.call(arguments,1);return this.send(r,a.length>1?a:n,e,t)}};c(x,{create:function(e,t){return new x(e,t)},mixin:function(e,t){t&&x.ms.push(t),c(x.prototype,e)},ms:[]});var P={ALL:1,ONE:2,ORDER:4},E=function(e){var t=this;t.$host=e,t.$reqs={},t.id=f+g--,t.$queue=[]};return c(E.prototype,{send:function(e,t,r,n){var i=this;if(i.$busy)return i.next(function(){this.send(e,t,r,n)}),i;i.$busy=1;var s=i.$host,c=s.$mCache,f=s.$mCacheKeys,u=i.$reqs;o(e)||(e=[e]);var v=e.length,h=[],m=o(t);m&&(h=Array(t.length));for(var d,l={a:i,b:0,c:i.$reqs,d:Array(v),g:{},h:v,i:c,j:s,k:r,l:m,m:t,n:h,o:[]},g=0;e.length>g;g++)if(d=e[g]){var x=s.getModel(d,n),$=x.cKey,C=x.entity,M=y(b,C,g,l);M.id=i.id,$&&a(f,$)?f[$].q.push(M):x.update?(u[C.id]=C,$&&(f[$]={q:[M],e:C},M=w),C.request(M,{a:f,b:$})):M()}else p("empty model");return i},fetchAll:function(e,t){return this.send(e,t,P.ALL)},saveAll:function(e,t){return this.send(e,t,P.ALL,1)},fetchOrder:M(P.ORDER),saveOrder:M(P.ORDER,1),saveOne:M(P.ONE,1),fetchOne:M(P.ONE),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,n=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.key;if(c&&a(n,c)){for(var f,u=n[c],v=u.q,h=[],m=[],d=0;v.length>d;d++)f=v[d],f.id!=e.id?h.push(f):m.push(f);h.length?(i(m,"abort",u.e),u.q=h):s.abort()}else s.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue.push(e),!t.$busy){var r=t.$args;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$args=e},destroy:function(){var e=this;e.$oust=1,e.stop()}}),c(c(x.prototype,n),{registerModels:function(e){var t=this,r=t.$mMetas;o(e)||(e=[e]);for(var n,a,i=0;e.length>i;i++)n=e[i],n&&(a=n.name,a?r[a]&&p("already exist:"+a):p("miss name"),n.cache=d(n),r[a]=n)},registerMethods:function(e){c(this,e)},createModel:function(e){var t,r=this,n=r.getModelMeta(e),a=d(e)||n.cache,o=new r.$mClass;o.set(n),o.$mm=t={used:0};var s=e.before||n.before;s&&i(s,[o,n]);var c=e.after||n.after;return t.after=c,a&&(t.key=m(r.$sKeys,n,e)),t.meta=n,e.name&&o.set(e),o.setUrlParams(n.urlParams),o.setPostParams(n.postParams),o.setUrlParams(e.urlParams),o.setPostParams(e.postParams),r.fire("inited",{model:o,meta:n}),o},getModelMeta:function(e){var t=this,r=t.$mMetas,n=e.name||e,a=r[n];return a||p("Unfound:"+n),a},getModel:function(e,t){var r,n,a=this;return t||(r=a.getCachedModel(e)),r||(n=1,r=a.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:C("saveAll"),fetchAll:C("fetchAll"),saveOrder:C("saveOrder"),fetchOrder:C("fetchOrder"),saveOne:C("saveOne"),fetchOne:C("fetchOne"),createMRequest:function(e){var t=new E(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.list(),a=0;n.length>a;a++){var i=n[a],o=i.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(t){var r,n=this,a=n.$mCache,i=e,o=n.getModelMeta(t),s=d(t)||o.cache;if(s&&(r=m(n.$sKeys,o,t)),r){var c=n.$mCacheKeys,f=c[r];f?i=f.e:(i=a.get(r),i&&s>0&&l()-i.$mm.done>s&&(n.clearCacheByKey(r),i=0))}return i}}),x},{requires:["magix/magix","magix/event"]}),n.add("magix/model",function(e,t){var r=function(r,n){var a=function(){a.superclass.constructor.apply(this,arguments),n&&t.safeExec(n,[],this)};return e.extend(a,this,r)},n=+new Date,a=encodeURIComponent,i=t.has,o=t._o,s=t.toString,c=function(e){this.set(e),this.id="m"+n--};return t.mix(c,{GET:"GET",POST:"POST",extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(c.POST)},getUrlParams:function(){return this.getParams(c.GET)},getParams:function(e){var r=this;e||(e=c.GET);var n,i="$"+e,o=r[i],s=[];for(var f in o){n=o[f],t._a(n)||(n=[n]);for(var u=0;n.length>u;u++)s.push(f+"="+a(n[u]))}return s.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,c.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,c.POST,!0)},setParams:function(e,t,r,n){var a=this,s="$"+r;a[s]||(a[s]={});var c=a[s];if(!o(e)&&e){var f={};f[e]=t,e=f}for(var u in e)n&&i(c,u)||(c[u]=e[u])},setPostParams:function(e,t){var r=this;r.setParams(e,t,c.POST)},setUrlParams:function(e,t){this.setParams(e,t,c.GET)},get:function(e,t,r){var n=this,a=arguments.length,i=2==a,o=n.$attrs;if(a){for(var c=(e+"").split(".");o&&c[0];)o=o[c.shift()];c[0]&&(o=r)}return i&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,a){r.$abt||(o(a)||(a={data:a}),r.set(a),e(n,t))};r.$trans=r.sync(r.$temp=n)},abort:function(){var e=this,t=e.$trans,r=e.$temp;r&&r("abort"),e.$abt=1,t&&t.abort&&t.abort(),e.$trans=0},isAborted:function(){return this.$abt}}),c},{requires:["magix/magix"]}),r.createElement("vframe")})(null,this,document,KISSY);