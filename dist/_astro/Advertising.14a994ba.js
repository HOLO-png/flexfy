import{r as a,j as e}from"./jsx-runtime.33c17f51.js";import{u as m}from"./index.6bc0e3f1.js";import{a as d}from"./api.eeeec7c9.js";import{I as l}from"./Image.81d07615.js";import{m as p}from"./motion.07eef3f2.js";const x=()=>{const[r,i]=m(),[s,n]=a.useState(null),o=async()=>{const t=await d();n(t)};return a.useEffect(()=>{i&&!s&&o()},[i]),e.jsx("div",{className:"home-advertising",ref:r,children:s&&s.length!==0&&s.map((t,c)=>e.jsxs(p.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.2},className:"home-advertising-image",children:[e.jsx(l,{src:t.url,alt:"Advertising",ariaLabel:"Advertising"}),e.jsx("p",{className:"home-advertising-text",children:"no slip, no sweat."}),e.jsx("button",{children:e.jsx("a",{href:"/collections"+t.path,children:t.name})})]},"home_advertising_"+c))})};export{x as Advertising};
