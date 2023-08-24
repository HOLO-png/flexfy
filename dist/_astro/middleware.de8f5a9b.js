import{r as w,g as P}from"./jsx-runtime.33c17f51.js";const D=e=>{let r;const n=new Set,s=(l,c)=>{const h=typeof l=="function"?l(r):l;if(!Object.is(h,r)){const p=r;r=c??typeof h!="object"?h:Object.assign({},r,h),n.forEach(y=>y(r,p))}},o=()=>r,d={setState:s,getState:o,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{n.clear()}};return r=e(s,o,d),d},T=e=>e?D(e):D;var _={exports:{}},F={},O={exports:{}},A={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=w;function H(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var j=typeof Object.is=="function"?Object.is:H,L=g.useState,$=g.useEffect,q=g.useLayoutEffect,z=g.useDebugValue;function U(e,r){var n=r(),s=L({inst:{value:n,getSnapshot:r}}),o=s[0].inst,t=s[1];return q(function(){o.value=n,o.getSnapshot=r,b(o)&&t({inst:o})},[e,n,r]),$(function(){return b(o)&&t({inst:o}),e(function(){b(o)&&t({inst:o})})},[e]),z(n),n}function b(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!j(e,n)}catch{return!0}}function C(e,r){return r()}var W=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?C:U;A.useSyncExternalStore=g.useSyncExternalStore!==void 0?g.useSyncExternalStore:W;O.exports=A;var k=O.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=w,B=k;function J(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var M=typeof Object.is=="function"?Object.is:J,N=B.useSyncExternalStore,X=R.useRef,G=R.useEffect,K=R.useMemo,Q=R.useDebugValue;F.useSyncExternalStoreWithSelector=function(e,r,n,s,o){var t=X(null);if(t.current===null){var f={hasValue:!1,value:null};t.current=f}else f=t.current;t=K(function(){function l(v){if(!c){if(c=!0,h=v,v=s(v),o!==void 0&&f.hasValue){var m=f.value;if(o(m,v))return p=m}return p=v}if(m=p,M(h,v))return m;var u=s(v);return o!==void 0&&o(m,u)?m:(h=v,p=u)}var c=!1,h,p,y=n===void 0?null:n;return[function(){return l(r())},y===null?void 0:function(){return l(y())}]},[r,n,s,o]);var d=N(e,t[0],t[1]);return G(function(){f.hasValue=!0,f.value=d},[d]),Q(d),d};_.exports=F;var Y=_.exports;const Z=P(Y),{useSyncExternalStoreWithSelector:V}=Z;function ee(e,r=e.getState,n){const s=V(e.subscribe,e.getState,e.getServerState||e.getState,r,n);return w.useDebugValue(s),s}const x=e=>{const r=typeof e=="function"?T(e):e,n=(s,o)=>ee(r,s,o);return Object.assign(n,r),n},ie=e=>e?x(e):x;function te(e,r){let n;try{n=e()}catch{return}return{getItem:o=>{var t;const f=l=>l===null?null:JSON.parse(l,r?.reviver),d=(t=n.getItem(o))!=null?t:null;return d instanceof Promise?d.then(f):f(d)},setItem:(o,t)=>n.setItem(o,JSON.stringify(t,r?.replacer)),removeItem:o=>n.removeItem(o)}}const I=e=>r=>{try{const n=e(r);return n instanceof Promise?n:{then(s){return I(s)(n)},catch(s){return this}}}catch(n){return{then(s){return this},catch(s){return I(s)(n)}}}},re=(e,r)=>(n,s,o)=>{let t={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:a=>a,version:0,merge:(a,S)=>({...S,...a}),...r},f=!1;const d=new Set,l=new Set;let c;try{c=t.getStorage()}catch{}if(!c)return e((...a)=>{console.warn(`[zustand persist middleware] Unable to update item '${t.name}', the given storage is currently unavailable.`),n(...a)},s,o);const h=I(t.serialize),p=()=>{const a=t.partialize({...s()});let S;const i=h({state:a,version:t.version}).then(E=>c.setItem(t.name,E)).catch(E=>{S=E});if(S)throw S;return i},y=o.setState;o.setState=(a,S)=>{y(a,S),p()};const v=e((...a)=>{n(...a),p()},s,o);let m;const u=()=>{var a;if(!c)return;f=!1,d.forEach(i=>i(s()));const S=((a=t.onRehydrateStorage)==null?void 0:a.call(t,s()))||void 0;return I(c.getItem.bind(c))(t.name).then(i=>{if(i)return t.deserialize(i)}).then(i=>{if(i)if(typeof i.version=="number"&&i.version!==t.version){if(t.migrate)return t.migrate(i.state,i.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return i.state}).then(i=>{var E;return m=t.merge(i,(E=s())!=null?E:v),n(m,!0),p()}).then(()=>{S?.(m,void 0),f=!0,l.forEach(i=>i(m))}).catch(i=>{S?.(void 0,i)})};return o.persist={setOptions:a=>{t={...t,...a},a.getStorage&&(c=a.getStorage())},clearStorage:()=>{c?.removeItem(t.name)},getOptions:()=>t,rehydrate:()=>u(),hasHydrated:()=>f,onHydrate:a=>(d.add(a),()=>{d.delete(a)}),onFinishHydration:a=>(l.add(a),()=>{l.delete(a)})},u(),m||v},ne=(e,r)=>(n,s,o)=>{let t={storage:te(()=>localStorage),partialize:u=>u,version:0,merge:(u,a)=>({...a,...u}),...r},f=!1;const d=new Set,l=new Set;let c=t.storage;if(!c)return e((...u)=>{console.warn(`[zustand persist middleware] Unable to update item '${t.name}', the given storage is currently unavailable.`),n(...u)},s,o);const h=()=>{const u=t.partialize({...s()});return c.setItem(t.name,{state:u,version:t.version})},p=o.setState;o.setState=(u,a)=>{p(u,a),h()};const y=e((...u)=>{n(...u),h()},s,o);let v;const m=()=>{var u,a;if(!c)return;f=!1,d.forEach(i=>{var E;return i((E=s())!=null?E:y)});const S=((a=t.onRehydrateStorage)==null?void 0:a.call(t,(u=s())!=null?u:y))||void 0;return I(c.getItem.bind(c))(t.name).then(i=>{if(i)if(typeof i.version=="number"&&i.version!==t.version){if(t.migrate)return t.migrate(i.state,i.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return i.state}).then(i=>{var E;return v=t.merge(i,(E=s())!=null?E:y),n(v,!0),h()}).then(()=>{S?.(v,void 0),v=s(),f=!0,l.forEach(i=>i(v))}).catch(i=>{S?.(void 0,i)})};return o.persist={setOptions:u=>{t={...t,...u},u.storage&&(c=u.storage)},clearStorage:()=>{c?.removeItem(t.name)},getOptions:()=>t,rehydrate:()=>m(),hasHydrated:()=>f,onHydrate:u=>(d.add(u),()=>{d.delete(u)}),onFinishHydration:u=>(l.add(u),()=>{l.delete(u)})},t.skipHydration||m(),v||y},oe=(e,r)=>"getStorage"in r||"serialize"in r||"deserialize"in r?re(e,r):ne(e,r),ae=oe;export{te as a,ie as c,ae as p};