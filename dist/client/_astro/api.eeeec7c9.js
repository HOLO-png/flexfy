const o="https://be-flexfy.nani.digital/landing";async function s(){try{const r=await fetch(o+"/home/menu"),n=await r.json();return r.ok?n:null}catch(r){return console.error("error",r),null}}async function c(){try{const r=await fetch(o+"/home/banner"),n=await r.json();return r.ok?n:null}catch(r){return console.error("error",r),null}}async function a(){try{const r=await fetch(o+"/home/promotion"),n=await r.json();return r.ok?n:null}catch(r){return console.error("error",r),null}}async function u(){try{const r=await fetch(o+"/home/community"),n=await r.json();return r.ok?n:null}catch(r){return console.error("error",r),null}}async function l(){try{const r=await fetch(o+"/home/advertising"),n=await r.json();return r.ok?n:null}catch(r){return console.error("error",r),null}}async function i(r){try{const n=await fetch(o+r),t=await n.json();return n.ok?t:null}catch(r){return console.error("error",r),null}}async function h(){try{const r=await fetch(o+"/product-option/color"),n=await r.json();return r.ok?n:null}catch(r){return console.error("error",r),null}}async function f(){try{const r=await fetch(o+"/product-option/size"),n=await r.json();return r.ok?n:null}catch(r){return console.error("error",r),null}}async function y(r){try{const n="?"+new URLSearchParams(r).toString(),t=await fetch(o+"/product/find"+n),c=await t.json();return t.ok?c:null}catch(r){return console.error("error",r),null}}async function w(r){try{const n=await fetch(o+"/product/find/"+r),t=await n.json();return n.ok?t:null}catch(r){return console.error("error",r),null}}async function j(r){try{const n=await fetch(o+"/product/feedback/"+r),t=await n.json();return n.ok?t:null}catch(r){return console.error("error",r),null}}async function p(r){try{const n=await fetch(o+"/review/product/"+r),t=await n.json();return n.ok?t:null}catch(r){return console.error("error",r),null}}async function g(r){try{const n=await fetch(o+"/question/product/"+r),t=await n.json();return n.ok?t:null}catch(r){return console.error("error",r),null}}async function d(){try{const r=await fetch(o+"/country"),n=await r.json();return r.ok?n:null}catch(r){return console.error("error",r),null}}export{l as a,a as b,u as c,d,w as e,c as f,i as g,y as h,g as i,p as j,j as k,s as l,h as m,f as n};