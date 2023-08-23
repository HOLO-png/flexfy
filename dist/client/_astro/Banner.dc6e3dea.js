import{r as m}from"./index.6460afdd.js";import{u as x}from"./index.9bf3d1a7.js";import{f}from"./api.eeeec7c9.js";import{a as w,I as h}from"./Image.968f2dea.js";import{j as a}from"./jsx-runtime.51014c9d.js";import{A as j}from"./index.1f58fc00.js";import{u as v}from"./use-animation.169a1666.js";import{m as y}from"./motion.a2ef69fa.js";const b=(s,e,n)=>{const i=e-s;return((n-s)%i+i)%i+s},I={enter:{opacity:0,translateX:"none"},center:{zIndex:1,opacity:1,translateX:"none"},exit:{zIndex:0,opacity:.5,translateX:"none"}},N=(s,e)=>Math.abs(s)*e,_=s=>{const{images:e,autoPlay:n,duration:i=5e3}=s,[[r,o],t]=m.useState([0,0]);if(!e)return a.jsx(a.Fragment,{});const p=b(0,e?.length,r),l=c=>{t([r+c,c])};return a.jsxs("div",{className:"carousel-wrapper",children:[a.jsx(j,{initial:!1,custom:o,children:a.jsx(w,{className:"carousel-img",alt:"carousel_image_with_animation",ariaLabel:"carousel_image_with_animation",src:e[p],custom:o,variants:I,initial:"enter",animate:"center",exit:"exit",transition:{opacity:{duration:.8,delay:.2}},drag:"x",dragElastic:1,onDragEnd:(c,{offset:g,velocity:u})=>{const d=N(g.x,u.y);d<=0?l(1):d>0&&l(-1)},loading:"eager"},r)}),a.jsx("div",{className:"next",onClick:()=>l(1),children:a.jsx(h,{alt:"arrow-right",ariaLabel:"arrow-right",src:"../assets/icons/arrow-left.svg",height:"50",width:"50"})}),a.jsx("div",{className:"prev",onClick:()=>l(-1),children:a.jsx(h,{alt:"arrow-right",ariaLabel:"arrow-right",src:"../assets/icons/arrow-left.svg",height:"50",width:"50"})})]})},E={visible:{opacity:1,y:0,transition:{duration:.5,delay:.2}},hidden:{opacity:0,y:10}},V=()=>{const s=v(),[e,n]=m.useState(null),[i,r]=x(),o=async()=>{const t=await f();t&&(n(t),document.head.innerHTML+=`<link rel="preload" as="image" href="${t[0].url}">`)};return m.useEffect(()=>{r&&(s.start("visible"),(!e||e.length==0)&&o())},[s,r]),a.jsx(y.div,{ref:i,variants:E,initial:"hidden",animate:s,children:e&&a.jsxs("div",{className:"home-banner",children:[a.jsx(_,{images:e.map(t=>t.url)}),a.jsx("a",{"aria-label":"shop-sales",href:"/collections/sales",children:a.jsx("div",{className:"link-shop-sale",children:a.jsx("div",{className:"shop-sale",children:"shop sale"})})})]})})};export{V as Banner};
