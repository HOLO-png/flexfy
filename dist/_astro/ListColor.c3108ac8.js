import{r as i}from"./index.6460afdd.js";import{u as p}from"./index.9bf3d1a7.js";import{m as x}from"./api.eeeec7c9.js";import{u}from"./product-option-store.4a93098e.js";import{j as s}from"./jsx-runtime.51014c9d.js";import{u as f}from"./use-animation.169a1666.js";import{m as h}from"./motion.a2ef69fa.js";import"./middleware.ce65d969.js";const j={visible:{opacity:1,x:0,transition:{duration:.5,delay:.6}},hidden:{opacity:0,x:-30}},w=({slug:b})=>{const t=f(),{addOption:n,colors:r}=u(),[e,c]=i.useState(),[l,a]=p(),m=async()=>{const o=await x();n("colors",o)};return i.useEffect(()=>{a&&(t.start("visible"),(!r||r.length==0)&&m())},[t,a]),s.jsxs(h.div,{ref:l,variants:j,initial:"hidden",animate:t,className:"color-container",children:[s.jsx("div",{className:"header",children:s.jsx("span",{children:"FILTER BY COLOR"})}),s.jsx("div",{className:"content",children:r?.map((o,d)=>s.jsxs("div",{onClick:()=>{c(o)},className:"item",children:[s.jsx("span",{className:"item-color",style:{backgroundColor:o.color,borderColor:e?.color==o.color?"black":""}}),s.jsx("span",{style:{fontWeight:e?.color==o.color?"bold":""},className:"item-text",children:o.name})]},"color_"+d))})]})};export{w as Color};
