import{r as x,j as s}from"./jsx-runtime.33c17f51.js";import{e as v}from"./api.eeeec7c9.js";import{u as o}from"./cart-store.4e3c5da6.js";import{c as m,g as f}from"./index.a93e95c3.js";import{C as g}from"./Carousel.2a52f11c.js";import{I as h}from"./Image.81d07615.js";import{SelectBox as y}from"./SelectBox.508b9173.js";import{M as b}from"./index.6d618868.js";import{m as j}from"./motion.07eef3f2.js";import"./middleware.de8f5a9b.js";import"./index.26529326.js";const N={visible:{opacity:1},hidden:{opacity:0}},R=()=>{const t=o(e=>e.isShowModal),{items:c,totalPrice:a}=o(e=>e.cart),i=o(e=>e.showModal),r=o(e=>e.onRemoveToCart),[l,u]=x.useState(null),n=document.querySelector(".cart-toggle"),p=async e=>{const d=await v(e);u(d?.completeLook)};return x.useEffect(()=>{if(c.length&&!l){const e=c[0].slug??"";e&&p(e)}},[c.length]),x.useEffect(()=>{n&&n.addEventListener("click",()=>i(!t))},[n]),s.jsx(b,{showModal:t,className:"cart-modal-container",children:s.jsxs("div",{className:"cart-modal",children:[s.jsxs("header",{className:"cart-header",children:[s.jsx("div",{className:"header-text",children:s.jsx("span",{children:"your cart"})}),s.jsx(h,{className:"x-icon cart-toggle",alt:"x-icon",src:"/assets/icons/x.svg",ariaLabel:"x_icon_menu",onClick:()=>i(!1)})]}),c.length?s.jsxs("div",{className:"cart-content",children:[s.jsx("div",{className:"cart-items",children:c.map((e,d)=>s.jsxs(j.div,{className:"cart-item",variants:N,initial:"hidden",animate:"visible",children:[s.jsx("div",{className:"item-thumbnail",children:s.jsx("a",{href:e.slug,children:s.jsx(h,{className:"item-img",alt:"thumbnail",src:e.thumbnail??"",ariaLabel:"thumbnail_"+e.name+d})})}),s.jsxs("div",{className:"information-container",children:[s.jsxs("div",{className:"information-main",children:[s.jsx("div",{className:"item-name",children:e.name}),s.jsxs("div",{className:"item-category",children:[e.option?.size,"/ ",e.option?.color]})]}),s.jsxs("div",{className:"information-discounts",children:[s.jsx("button",{className:"discounts",children:s.jsx("span",{children:"Discounts"})}),s.jsx("span",{className:"remove",onClick:()=>r({key:e.key,price:e.price}),children:"remove"})]})]}),s.jsxs("div",{className:"item-right",children:[s.jsxs("div",{className:"item-price",children:[s.jsx("div",{className:"after-seller",children:m((e.price??0)*e.quantity,"USD",2)}),e.originalPrice&&s.jsx("div",{className:"before-seller",children:m(e.originalPrice,"USD",2)})]}),s.jsx(S,{productKey:e.key,quantity:e.quantity??0,price:e.price})]})]},"product_"+e.name+d))}),s.jsx("div",{className:"product-slider",id:"product-list",children:l&&s.jsx(C,{products:l})}),s.jsxs("div",{className:"estimated",children:[s.jsxs("div",{className:"estimated-total",children:[s.jsxs("h3",{className:"estimated-total-text",children:["Estimated Total: ",m(a||0,"USD",2)]}),s.jsx("h3",{className:"estimated-total-description",children:"score! you earned free shipping"}),s.jsx("div",{className:"line"})]}),s.jsxs("div",{className:"cart-checkout",children:[s.jsx("a",{className:"checkout-link",href:"/payment",children:"checkout"}),s.jsx("h3",{children:"or pay in 4 interest-free installments of ₱12 with Shopay lear more"})]})]})]}):s.jsx(L,{})]})})},k=(t,c)=>t.map((a,i)=>{const{band:r,cup:l,sizes:u}=a,n=[{label:"choose size",value:"choose_size"},...f({band:r,cup:l,sizes:u})];return s.jsxs("div",{className:"product-detail-match-back-card",children:[s.jsx("a",{href:a.slug,className:"product-detail-thumbnail",children:s.jsx(h,{src:a.thumbnail,className:"product-detail-card-img",ariaLabel:"thumbnail_product_1",alt:"thumbnail_"+a.name})}),s.jsx("span",{className:"product-detail-card-title",children:a.name+a.name}),s.jsx("span",{className:"product-detail-card-price",children:m(a.price??0,"PHP")}),s.jsx(y,{className:"product-detail-add-now",items:n,defaultValue:n[0].value,onChange:p=>c(p,a)})]},"cart-item_"+a.name+i)}),C=({products:t})=>{const c=o(i=>i.onAddToCart),a=(i,r)=>{i.value!=="choose_size"&&c(r,1,{size:i.label,color:r.colors[0].code??""})};return t?s.jsxs("div",{className:"product-list-container",children:[s.jsx("div",{className:"product-list-header",children:s.jsx("div",{className:"list-title",children:s.jsx("h1",{className:"heading-best",children:"complete picks for you"})})}),s.jsx("div",{style:{zIndex:2},className:"home-product",children:s.jsx(g,{items:k(t,a),className:"cart-complete-slider",smooth:2})})]}):s.jsx(s.Fragment,{})},S=({quantity:t,productKey:c,price:a})=>{const i=o(l=>l.onUpdateQuantity),r=l=>i({key:c,price:a,quantity:l});return s.jsxs("div",{className:"quantity",children:[s.jsx("div",{className:"minus",onClick:()=>r(t>0?t-1:t),children:"–"}),s.jsx("span",{className:"value",children:t}),s.jsx("div",{className:"icon-plus",onClick:()=>r(t+1),children:"+"})]})},L=()=>s.jsxs(j.div,{variants:N,initial:"hidden",animate:"visible",exit:"hidden",className:"cart-empty",children:[s.jsx(h,{className:"cart-image",src:"/assets/icons/cart-1.svg",alt:"cart-empty",ariaLabel:"cart-empty"}),s.jsx("h3",{className:"title-empty",children:"Your cart is EMPTY"}),s.jsx("h3",{className:"title-error",children:"That isn't right."}),s.jsx("a",{href:"/collections/sales","aria-label":"shop-now-link",className:"btn-link",children:"SHOP NOW"})]});export{R as CartModal};
