"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9629:(y,f,a)=>{a.d(f,{c:()=>r});var v=a(5349),c=a(967),d=a(9203);const r=(o,s)=>{let t,e;const u=(i,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(i,p);E&&s(E)?E!==t&&(n(),l(E,w)):n()},l=(i,p)=>{t=i,e||(e=t);const w=t;(0,v.w)(()=>w.classList.add("ion-activated")),p()},n=(i=!1)=>{if(!t)return;const p=t;(0,v.w)(()=>p.classList.remove("ion-activated")),i&&e!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:i=>u(i.currentX,i.currentY,c.a),onMove:i=>u(i.currentX,i.currentY,c.b),onEnd:()=>{n(!0),(0,c.h)(),e=void 0}})}},4874:(y,f,a)=>{a.d(f,{g:()=>c});var v=a(6225);const c=()=>{if(void 0!==v.w)return v.w.Capacitor}},5149:(y,f,a)=>{a.d(f,{g:()=>v});const v=(s,t,e,u,l)=>d(s[1],t[1],e[1],u[1],l).map(n=>c(s[0],t[0],e[0],u[0],n)),c=(s,t,e,u,l)=>l*(3*t*Math.pow(l-1,2)+l*(-3*e*l+3*e+u*l))-s*Math.pow(l-1,3),d=(s,t,e,u,l)=>o((u-=l)-3*(e-=l)+3*(t-=l)-(s-=l),3*e-6*t+3*s,3*t-3*s,s).filter(i=>i>=0&&i<=1),o=(s,t,e,u)=>{if(0===s)return((s,t,e)=>{const u=t*t-4*s*e;return u<0?[]:[(-t+Math.sqrt(u))/(2*s),(-t-Math.sqrt(u))/(2*s)]})(t,e,u);const l=(3*(e/=s)-(t/=s)*t)/3,n=(2*t*t*t-9*t*e+27*(u/=s))/27;if(0===l)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-l),-Math.sqrt(-l)];const i=Math.pow(n/2,2)+Math.pow(l/3,3);if(0===i)return[Math.pow(n/2,.5)-t/3];if(i>0)return[Math.pow(-n/2+Math.sqrt(i),1/3)-Math.pow(n/2+Math.sqrt(i),1/3)-t/3];const p=Math.sqrt(Math.pow(-l/3,3)),w=Math.acos(-n/(2*Math.sqrt(Math.pow(-l/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-t/3,E*Math.cos((w+2*Math.PI)/3)-t/3,E*Math.cos((w+4*Math.PI)/3)-t/3]}},5085:(y,f,a)=>{a.d(f,{i:()=>v});const v=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(y,f,a)=>{a.r(f),a.d(f,{startFocusVisible:()=>r});const v="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let s=[],t=!0;const e=o?o.shadowRoot:document,u=o||document.body,l=M=>{s.forEach(g=>g.classList.remove(v)),M.forEach(g=>g.classList.add(v)),s=M},n=()=>{t=!1,l([])},i=M=>{t=d.includes(M.key),t||l([])},p=M=>{if(t&&void 0!==M.composedPath){const g=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));l(g)}},w=()=>{e.activeElement===u&&l([])};return e.addEventListener("keydown",i),e.addEventListener("focusin",p),e.addEventListener("focusout",w),e.addEventListener("touchstart",n,{passive:!0}),e.addEventListener("mousedown",n),{destroy:()=>{e.removeEventListener("keydown",i),e.removeEventListener("focusin",p),e.removeEventListener("focusout",w),e.removeEventListener("touchstart",n),e.removeEventListener("mousedown",n)},setFocus:l}}},9988:(y,f,a)=>{a.d(f,{c:()=>c});var v=a(839);const c=s=>{const t=s;let e;return{hasLegacyControl:()=>{if(void 0===e){const l=void 0!==t.label||d(t),n=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,i=(0,v.h)(t);e=!0===t.legacy||!l&&!n&&null!==i}return e}}},d=s=>!!(r.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||o.includes(s.tagName)&&""!==s.textContent),r=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},967:(y,f,a)=>{a.d(f,{I:()=>c,a:()=>t,b:()=>e,c:()=>s,d:()=>l,h:()=>u});var v=a(4874),c=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(c||{});const r={getEngine(){const n=window.TapticEngine;if(n)return n;const i=(0,v.g)();return null!=i&&i.isPluginAvailable("Haptics")?i.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const i=(0,v.g)();return"web"!==(null==i?void 0:i.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,v.g)(),impact(n){const i=this.getEngine();if(!i)return;const p=this.isCapacitor()?n.style:n.style.toLowerCase();i.impact({style:p})},notification(n){const i=this.getEngine();if(!i)return;const p=this.isCapacitor()?n.type:n.type.toLowerCase();i.notification({type:p})},selection(){const n=this.isCapacitor()?c.Light:"light";this.impact({style:n})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},o=()=>r.available(),s=()=>{o()&&r.selection()},t=()=>{o()&&r.selectionStart()},e=()=>{o()&&r.selectionChanged()},u=()=>{o()&&r.selectionEnd()},l=n=>{o()&&r.impact(n)}},2874:(y,f,a)=>{a.d(f,{I:()=>s,a:()=>l,b:()=>o,c:()=>p,d:()=>E,f:()=>n,g:()=>u,i:()=>e,p:()=>w,r:()=>M,s:()=>i});var v=a(5861),c=a(839),d=a(6710);const o="ion-content",s=".ion-content-scroll-host",t=`${o}, ${s}`,e=g=>"ION-CONTENT"===g.tagName,u=function(){var g=(0,v.Z)(function*(m){return e(m)?(yield new Promise(_=>(0,c.c)(m,_)),m.getScrollElement()):m});return function(_){return g.apply(this,arguments)}}(),l=g=>g.querySelector(s)||g.querySelector(t),n=g=>g.closest(t),i=(g,m)=>e(g)?g.scrollToTop(m):Promise.resolve(g.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),p=(g,m,_,O)=>e(g)?g.scrollByPoint(m,_,O):Promise.resolve(g.scrollBy({top:_,left:m,behavior:O>0?"smooth":"auto"})),w=g=>(0,d.b)(g,o),E=g=>{if(e(g)){const _=g.scrollY;return g.scrollY=!1,_}return g.style.setProperty("overflow","hidden"),!0},M=(g,m)=>{e(g)?g.scrollY=m:g.style.removeProperty("overflow")}},5307:(y,f,a)=>{a.d(f,{a:()=>v,b:()=>p,c:()=>t,d:()=>w,e:()=>L,f:()=>s,g:()=>E,h:()=>d,i:()=>c,j:()=>O,k:()=>C,l:()=>e,m:()=>n,n:()=>M,o:()=>l,p:()=>o,q:()=>r,r:()=>_,s:()=>h,t:()=>i,u:()=>g,v:()=>m,w:()=>u});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(y,f,a)=>{a.d(f,{c:()=>r,g:()=>o});var v=a(6225),c=a(839),d=a(6710);const r=(t,e,u)=>{let l,n;void 0!==v.w&&"MutationObserver"in v.w&&(l=new MutationObserver(E=>{for(const M of E)for(const g of M.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&g.slot===e)return u(),void(0,c.r)(()=>i(g))}),l.observe(t,{childList:!0}));const i=E=>{var M;n&&(n.disconnect(),n=void 0),n=new MutationObserver(g=>{u();for(const m of g)for(const _ of m.removedNodes)_.nodeType===Node.ELEMENT_NODE&&_.slot===e&&w()}),n.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},w=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),w()}}},o=(t,e,u)=>{const l=null==t?0:t.toString().length,n=s(l,e);if(void 0===u)return n;try{return u(l,e)}catch(i){return(0,d.a)("Exception in provided `counterFormatter`.",i),n}},s=(t,e)=>`${t} / ${e}`},7484:(y,f,a)=>{a.d(f,{K:()=>r,a:()=>d});var v=a(4874),c=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(c||{}),d=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(d||{});const r={getEngine(){const o=(0,v.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==c.Unimplemented)throw s}):Promise.resolve(void 0)}}},1612:(y,f,a)=>{a.r(f),a.d(f,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>g,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>l,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>n,trackViewportChanges:()=>O});var v=a(7484);a(4874),a(6225);const r="ionKeyboardDidShow",o="ionKeyboardDidHide";let t={},e={},u=!1;const l=()=>{t={},e={},u=!1},n=h=>{if(v.K.getEngine())i(h);else{if(!h.visualViewport)return;e=C(h.visualViewport),h.visualViewport.onresize=()=>{O(h),E()||M(h)?p(h):g(h)&&w(h)}}},i=h=>{h.addEventListener("keyboardDidShow",L=>p(h,L)),h.addEventListener("keyboardDidHide",()=>w(h))},p=(h,L)=>{m(h,L),u=!0},w=h=>{_(h),u=!1},E=()=>!u&&t.width===e.width&&(t.height-e.height)*e.scale>150,M=h=>u&&!g(h),g=h=>u&&e.height===h.innerHeight,m=(h,L)=>{const D=new CustomEvent(r,{detail:{keyboardHeight:L?L.keyboardHeight:h.innerHeight-e.height}});h.dispatchEvent(D)},_=h=>{const L=new CustomEvent(o);h.dispatchEvent(L)},O=h=>{t=Object.assign({},e),e=C(h.visualViewport)},C=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},3459:(y,f,a)=>{a.d(f,{c:()=>s});var v=a(5861),c=a(6225),d=a(7484);const r=t=>{if(void 0===c.d||t===d.a.None||void 0===t)return null;const e=c.d.querySelector("ion-app");return null!=e?e:c.d.body},o=t=>{const e=r(t);return null===e?0:e.clientHeight},s=function(){var t=(0,v.Z)(function*(e){let u,l,n,i;const p=function(){var m=(0,v.Z)(function*(){const _=yield d.K.getResizeMode(),O=void 0===_?void 0:_.mode;u=()=>{void 0===i&&(i=o(O)),n=!0,w(n,O)},l=()=>{n=!1,w(n,O)},null==c.w||c.w.addEventListener("keyboardWillShow",u),null==c.w||c.w.addEventListener("keyboardWillHide",l)});return function(){return m.apply(this,arguments)}}(),w=(m,_)=>{e&&e(m,E(_))},E=m=>{if(0===i||i===o(m))return;const _=r(m);return null!==_?new Promise(O=>{const h=new ResizeObserver(()=>{_.clientHeight===i&&(h.disconnect(),O())});h.observe(_)}):void 0};return yield p(),{init:p,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",u),null==c.w||c.w.removeEventListener("keyboardWillHide",l),u=l=void 0},isKeyboardVisible:()=>n}});return function(u){return t.apply(this,arguments)}}()},3830:(y,f,a)=>{a.d(f,{c:()=>c});var v=a(5861);const c=()=>{let d;return{lock:function(){var o=(0,v.Z)(function*(){const s=d;let t;return d=new Promise(e=>t=e),void 0!==s&&(yield s),t});return function(){return o.apply(this,arguments)}}()}}},5857:(y,f,a)=>{a.d(f,{c:()=>d});var v=a(6225),c=a(839);const d=(r,o,s)=>{let t;const e=()=>!(void 0===o()||void 0!==r.label||null===s()),l=()=>{const i=o();if(void 0===i)return;if(!e())return void i.style.removeProperty("width");const p=s().scrollWidth;if(0===p&&null===i.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==t)return;const w=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(l(),w.disconnect(),t=void 0)},{threshold:.01,root:r});w.observe(i)}else i.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{e()&&(0,c.r)(()=>{l()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},3781:(y,f,a)=>{a.d(f,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(d,r,o)=>{const s=d*r/o-d+"ms",t=2*Math.PI*r/o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(d,r,o)=>{const s=r/o,t=d*s-d+"ms",e=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})}}},8663:(y,f,a)=>{a.r(f),a.d(f,{createSwipeBackGesture:()=>o});var v=a(839),c=a(5085),d=a(9203);a(619);const o=(s,t,e,u,l)=>{const n=s.ownerDocument.defaultView;let i=(0,c.i)(s);const w=_=>i?-_.deltaX:_.deltaX;return(0,d.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:_=>(i=(0,c.i)(s),(_=>{const{startX:C}=_;return i?C>=n.innerWidth-50:C<=50})(_)&&t()),onStart:e,onMove:_=>{const C=w(_)/n.innerWidth;u(C)},onEnd:_=>{const O=w(_),C=n.innerWidth,h=O/C,L=(_=>i?-_.velocityX:_.velocityX)(_),D=L>=0&&(L>.2||O>C/2),P=(D?1-h:h)*C;let A=0;if(P>5){const T=P/Math.abs(L);A=Math.min(T,540)}l(D,h<=0?.01:(0,v.l)(0,h,.9999),A)}})}},5564:(y,f,a)=>{a.d(f,{w:()=>v});const v=(r,o,s)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{s(c(e,o))});return t.observe(r,{childList:!0,subtree:!0}),t},c=(r,o)=>{let s;return r.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)s=d(t.addedNodes[e],o)||s}),s},d=(r,o)=>{if(1!==r.nodeType)return;const s=r;return(s.tagName===o.toUpperCase()?[s]:Array.from(s.querySelectorAll(o))).find(e=>e.value===s.value)}},2999:(y,f,a)=>{a.d(f,{a:()=>d});var v=a(2029),c=a(9862);let d=(()=>{var r;class o{constructor(t){this.http=t,this.apiURL="https://django-rest-p9b6.onrender.com/api"}postData(t){return this.http.post(this.apiURL+"/users/",t)}putPass(t){return this.http.put(this.apiURL+"/users/",t)}postAsis(t){return this.http.post(this.apiURL+"/asistencia/",t)}putAsis(t){return this.http.put(this.apiURL+"/asistencia/",t)}putAsisA(t){return this.http.put(this.apiURL+"/asistenciaA/",t)}postAsisA(t){return this.http.post(this.apiURL+"/asistenciaA/",t)}}return(r=o).\u0275fac=function(t){return new(t||r)(v.LFG(c.eN))},r.\u0275prov=v.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),o})()}}]);