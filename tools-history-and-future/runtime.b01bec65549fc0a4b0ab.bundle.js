(()=>{"use strict";var e,t,r,n,o,a,d,i={},l={};function f(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return i[e].call(r.exports,r,r.exports,f),r.exports}f.m=i,e=[],f.O=(t,r,n,o)=>{if(!r){var a=1/0;for(l=0;l<e.length;l++){for(var[r,n,o]=e[l],d=!0,i=0;i<r.length;i++)(!1&o||a>=o)&&Object.keys(f.O).every((e=>f.O[e](r[i])))?r.splice(i--,1):(d=!1,o<a&&(a=o));d&&(e.splice(l--,1),t=n())}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},f.F={},f.E=e=>{Object.keys(f.F).map((t=>{f.F[t](e)}))},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var d=2&n&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,f.d(o,a),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>e+"."+{209:"d4d2fde945ef1bf17c12",352:"d62854e7b820f93c9dcd",568:"96e0193dc449221dafa0",582:"81397c1dc5c3b8c39d8d",626:"5b3a751081e6d0afa45d",846:"f267444c28e866a0a907",869:"b3c81ae2f06a700877a2",901:"2e57de88c9d88cf44357",921:"5c3cf7f19a3546b38d58"}[e]+".bundle.js",f.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{179:"286c9cbdffc80a73d78f",209:"d4d2fde945ef1bf17c12",352:"d62854e7b820f93c9dcd",626:"5b3a751081e6d0afa45d",736:"05edb1f36c3d332e7617",846:"f267444c28e866a0a907"}[e]+".css"),f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="slides:",f.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var d,i;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var s=l[c];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+r){d=s;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.setAttribute("data-webpack",o+r),d.src=e),n[e]=[t];var u=(t,r)=>{d.onerror=d.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),i&&document.head.appendChild(d)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/tools-history-and-future/",a=e=>new Promise(((t,r)=>{var n=f.miniCssF(e),o=f.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(d=r[n]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(o===e||o===t))return d}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var d;if((o=(d=a[n]).getAttribute("data-href"))===e||o===t)return d}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var d=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=d,l.request=i,o.parentNode.removeChild(o),n(l)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),d={666:0},f.f.miniCss=(e,t)=>{d[e]?t.push(d[e]):0!==d[e]&&{209:1,352:1,626:1,846:1}[e]&&t.push(d[e]=a(e).then((()=>{d[e]=0}),(t=>{throw delete d[e],t})))},(()=>{var e={666:0};f.f.j=(t,r)=>{var n=f.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(209|626|666)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=f.p+f.u(t),d=new Error;f.l(a,(r=>{if(f.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}}),"chunk-"+t,t)}},f.F.j=t=>{if(!(f.o(e,t)&&void 0!==e[t]||/^(209|626|666)$/.test(t))){e[t]=null;var r=document.createElement("link");f.nc&&r.setAttribute("nonce",f.nc),r.rel="prefetch",r.as="script",r.href=f.p+f.u(t),document.head.appendChild(r)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,d,i]=r,l=0;for(n in d)f.o(d,n)&&(f.m[n]=d[n]);if(i)var c=i(f);for(t&&t(r);l<a.length;l++)o=a[l],f.o(e,o)&&e[o]&&e[o][0](),e[a[l]]=0;return f.O(c)},r=self.webpackChunkslides=self.webpackChunkslides||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();