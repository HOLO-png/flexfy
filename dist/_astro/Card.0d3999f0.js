import{j as e,r as d}from"./jsx-runtime.33c17f51.js";import{a as N,c as f}from"./index.a93e95c3.js";import{I as o,a as y}from"./Image.81d07615.js";import{S}from"./icon.54790e39.js";import{i as q,j as F,k as R}from"./api.eeeec7c9.js";import{r as x,s as b,b as w}from"./app.5d84f5d9.js";import{SelectBox as p}from"./SelectBox.508b9173.js";import{m as u}from"./motion.07eef3f2.js";import{A as g}from"./index.26529326.js";const _=({dataQuestion:s})=>e.jsxs("div",{className:"stamped-question-comment",children:[e.jsxs("div",{className:"question-comment-head",children:[e.jsx("div",{className:"question-comment-head-wrap",children:e.jsx("div",{className:"question-comment-name",children:s.name})}),e.jsx("div",{className:"question-comment-time",children:N(s.createdAt.toString())})]}),e.jsx("p",{className:"question-comment-content",children:s.question}),e.jsxs("p",{className:"question-comment-name",children:["Answers (",s.answers.length||0,")"]}),s.answers.length>0&&e.jsx("div",{children:s.answers.map((a,i)=>e.jsxs("div",{className:"question-answers",children:[e.jsxs("div",{className:"answers-header",children:[e.jsx("p",{className:"question-comment-name",children:a.name}),e.jsx("p",{className:"question-comment-time",children:N(a?.createdAt?.toString())})]}),e.jsx("p",{className:"question-comment-content",children:a.answers})]},a.name+i))}),e.jsx("div",{className:"question-comment-bot",children:e.jsxs("div",{className:"stamped-question-rating",children:[e.jsx("p",{children:"Was this helpful?"}),e.jsxs("div",{className:"button-rate-question",children:[e.jsx(o,{ariaLabel:"icon_like",alt:"Icon",src:"/assets/icons/like.svg"}),e.jsx("div",{className:"text-wrapper-3",children:s.like})]}),e.jsxs("div",{className:"button-rate-question",children:[e.jsx(o,{ariaLabel:"icon_dislike",alt:"Icon",src:"/assets/icons/dislike.svg"}),e.jsx("div",{className:"text-wrapper-3",children:s.dislike})]})]})})]}),L=()=>{d.useState(!0);const s=a=>{console.log(a)};return e.jsxs("div",{className:"question-filter-wrap",children:[e.jsxs("div",{className:"search-form",children:[e.jsx(o,{ariaLabel:"search_icon",src:"/assets/icons/search.svg",alt:""}),e.jsx("input",{type:"text"})]}),e.jsx(p,{IconEnd:e.jsx(o,{ariaLabel:"end_icon",src:"/assets/icons/left.svg",alt:"end_icon"}),onChange:s,className:"filter-option-item",defaultValue:x[1].value,items:x})]})},O={visible:{opacity:1},hidden:{opacity:0}},T=s=>{const{slug:a,showForm:i}=s,[l,t]=d.useState(null),c=async()=>{const r=await q(a);t(r)};return d.useEffect(()=>{a&&c()},[a]),e.jsxs("div",{className:"question-wrap-list",children:[i&&e.jsx(z,{}),e.jsx(L,{}),l?.data.map((r,n)=>e.jsx("div",{children:e.jsx(_,{dataQuestion:r})},"question-"+n))]})},z=()=>e.jsxs(u.form,{method:"post",id:"review-form",className:"new-review-form stamped-visible form-question","aria-expanded":"true",variants:O,initial:"hidden",animate:"visible",exit:"hidden",children:[e.jsxs("fieldset",{className:"stamped-form-contact",children:[e.jsxs("div",{className:"stamped-form-contact-name",children:[e.jsx("label",{className:"stamped-form-label",htmlFor:"review_author",children:"Name"}),e.jsx("input",{className:"stamped-form-input stamped-form-input-text ",id:"review_author",type:"text",defaultValue:"",autoComplete:"name",required:!0})]}),e.jsxs("div",{className:"stamped-form-contact-email",children:[e.jsx("label",{className:"stamped-form-label",htmlFor:"review_email",children:"Email"}),e.jsx("input",{className:"stamped-form-input stamped-form-input-email ",id:"review_email",type:"email",autoComplete:"email",required:!0})]})]}),e.jsx("fieldset",{className:"stamped-form-review",children:e.jsxs("div",{className:"stamped-form-review-body",children:[e.jsx("label",{className:"stamped-form-label",htmlFor:"review_body",children:"question"}),e.jsx("div",{className:"stamped-form-input",children:e.jsx("textarea",{className:"stamped-form-input stamped-form-input-textarea",id:"review_body",name:"reviewMessage",rows:10,maxLength:5e3})})]})}),e.jsx("button",{id:"stamped-button-submit",type:"submit",className:"stamped-button",children:"submit"})]}),I=({data:s})=>e.jsxs("div",{className:"review-option",children:[e.jsxs("div",{className:"review-option-list",children:[s.purchasedSize&&e.jsxs("div",{className:"review-option-item",children:[e.jsx("div",{className:"review-option-title",children:e.jsx("div",{className:"text-wrapper",children:"size purchased"})}),e.jsx("div",{className:"review-option-content",children:`${s.purchasedSize}${s.cup}`})]}),s.purchasedSize&&e.jsxs("div",{className:"review-option-item",children:[e.jsx("div",{className:"review-option-title",children:e.jsx("div",{className:"text-wrapper",children:"usual size"})}),e.jsx("div",{className:"review-option-content",children:`${s.purchasedSize}${s.cup}`})]}),e.jsx(v,{text:["Small","True to Size","Large"],rating:s.trueToSize,children:"true to size"}),e.jsx(v,{text:["Small","True to Size","Large"],rating:s.trueToSizeCup,children:"true to size - cup"}),e.jsx(v,{text:["Tight","True to Band","Loose"],rating:s.trueToSizeBand,children:"true to size - band"})]}),e.jsxs("div",{className:"review-option-item",children:[e.jsx("div",{className:"review-option-title",children:e.jsx("div",{className:"text-wrapper",children:"PAIRS WELL WITH"})}),e.jsx("div",{className:"review-option-content",children:s.pairsWellWith})]})]}),C=({data:s})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"review-comment-head",children:[e.jsxs("div",{className:"review-comment-head-wrap",children:[e.jsx("div",{className:"review-comment-name",children:s.name}),e.jsx("div",{className:"review-comment-title",children:s.status})]}),e.jsx("div",{className:"review-comment-time",children:N(s.createdAt)})]}),e.jsx(m,{rating:s.rating,width:9.605,height:9.605}),e.jsx("p",{className:"heading-great",children:s.pairsWellWith}),e.jsx("p",{className:"review-comment-content",children:s.description.slice(0,20)})]}),V=({dataComment:s})=>e.jsxs("div",{className:"stamped-review-comment",children:[e.jsx(C,{data:s}),e.jsxs("div",{className:"review-comment-bot",children:[e.jsx(I,{data:s}),e.jsxs("div",{className:"stamped-review-rating",children:[e.jsx("p",{children:"Was this helpful?"}),e.jsxs("div",{className:"button-rate-review",children:[e.jsx(o,{ariaLabel:"icon_like",alt:"Icon",src:"/assets/icons/like.svg"}),e.jsx("div",{className:"text-wrapper-3",children:s.like})]}),e.jsxs("div",{className:"button-rate-review",children:[e.jsx(o,{ariaLabel:"icon_dislike",alt:"Icon",src:"/assets/icons/dislike.svg"}),e.jsx("div",{className:"text-wrapper-3",children:s.dislike})]})]})]})]}),k=()=>{const[s,a]=d.useState(!0),i=l=>{console.log(l)};return e.jsxs("div",{className:"review-filter-wrap",children:[e.jsx("div",{className:"filter-title",children:"Filter Reviews:"}),e.jsxs("div",{className:"search-form",children:[e.jsx(o,{ariaLabel:"search_icon",src:"/assets/icons/search.svg",alt:""}),e.jsx("input",{type:"text"})]}),e.jsx(g,{initial:!0,children:s&&e.jsxs(u.div,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.2},className:"filter-option-wrap",children:[e.jsx(p,{IconEnd:e.jsx(o,{ariaLabel:"end_icon",src:"/assets/icons/left.svg",alt:"end_icon"}),onChange:i,className:"filter-option-item",defaultValue:b[1].value,items:b}),e.jsx(p,{IconEnd:e.jsx(o,{ariaLabel:"end_icon",src:"/assets/icons/left.svg",alt:"end_icon"}),onChange:i,className:"filter-option-item",defaultValue:w[1].value,items:w}),e.jsx(p,{IconEnd:e.jsx(o,{ariaLabel:"end_icon",src:"/assets/icons/left.svg",alt:"end_icon"}),onChange:i,className:"filter-option-item",defaultValue:x[1].value,items:x})]})}),e.jsxs("button",{onClick:()=>a(!s),children:[e.jsx(o,{ariaLabel:"filter_icon",src:"/assets/icons/filter.svg",alt:""}),e.jsx("span",{children:s?"Hide Filters":"More Filters"})]})]})},E={visible:{opacity:1},hidden:{opacity:0}},A=s=>{const{slug:a,showForm:i}=s,[l,t]=d.useState(null),c=async()=>{const r=await F(a);t(r)};return d.useEffect(()=>{a&&c()},[a]),l?e.jsxs("div",{className:"review-wrap-list",children:[i&&e.jsx(P,{}),e.jsx(k,{}),l?.data?.map((r,n)=>e.jsx("div",{children:e.jsx(V,{dataComment:r})},"review-comment"+n))]}):e.jsx(e.Fragment,{})},P=()=>e.jsxs(u.form,{method:"post",id:"review-form",className:"new-review-form stamped-visible","aria-expanded":"true",variants:E,initial:"hidden",animate:"visible",exit:"hidden",children:[e.jsxs("fieldset",{className:"stamped-form-contact",children:[e.jsxs("div",{className:"stamped-form-contact-name",children:[e.jsx("label",{className:"stamped-form-label",htmlFor:"review_author",children:"Name"}),e.jsx("input",{className:"stamped-form-input stamped-form-input-text ",id:"review_author",type:"text",defaultValue:"",autoComplete:"name",required:!0})]}),e.jsxs("div",{className:"stamped-form-contact-email",children:[e.jsx("label",{className:"stamped-form-label",htmlFor:"review_email",children:"Email"}),e.jsx("input",{className:"stamped-form-input stamped-form-input-email ",id:"review_email",type:"email",autoComplete:"email",required:!0})]})]}),e.jsxs("fieldset",{className:"stamped-form-review",children:[e.jsxs("div",{className:"stamped-form-review-rating",children:[e.jsx("label",{className:"stamped-form-label",htmlFor:"reviewRating",children:"Rating"}),e.jsx(m,{rating:0})]}),e.jsxs("div",{className:"stamped-form-review-title",children:[e.jsx("label",{className:"stamped-form-label",htmlFor:"review_title",children:"Title of Review"}),e.jsx("input",{className:"stamped-form-input stamped-form-input-text",id:"review_title",type:"text",name:"reviewTitle",required:!0})]}),e.jsxs("div",{className:"stamped-form-review-body",children:[e.jsx("label",{className:"stamped-form-label",htmlFor:"review_body",children:"How was your overall experience?"}),e.jsx("div",{className:"stamped-form-input",children:e.jsx("textarea",{className:"stamped-form-input stamped-form-input-textarea",id:"review_body",name:"reviewMessage",rows:10,maxLength:5e3})})]})]}),e.jsxs("fieldset",{className:"stamped-form-custom-questions",children:[e.jsx("div",{className:"stamped-form-custom-question","data-type":"textfield",children:e.jsxs("label",{className:"stamped-form-label",children:["SIZE PURCHASED",e.jsx("input",{type:"text",name:"customFormOption",defaultValue:"",className:"stamped-form-input stamped-form-input-text"})]})}),e.jsx("div",{className:"stamped-form-custom-question","data-type":"textfield",children:e.jsxs("label",{className:"stamped-form-label",children:["USUAL SIZE",e.jsx("input",{type:"text",name:"customFormOption",defaultValue:"",className:"stamped-form-input stamped-form-input-text"})]})}),e.jsxs("div",{className:"stamped-form-custom-question","data-type":"scale",children:[e.jsx("label",{className:"stamped-form-label",children:"TRUE TO SIZE (CUP)"}),e.jsxs("div",{className:"stamped-form-custom-option-scale",children:[e.jsx("label",{className:"label-form-scale",children:e.jsx("input",{type:"radio",name:"customFormOption",defaultValue:1})}),e.jsx("div",{className:"line"}),e.jsx("label",{className:"label-form-scale",children:e.jsx("input",{type:"radio",name:"customFormOption",defaultValue:2})}),e.jsx("div",{className:"line"}),e.jsx("label",{className:"label-form-scale",children:e.jsx("input",{type:"radio",name:"customFormOption",defaultValue:3})}),e.jsx("div",{className:"line"}),e.jsx("label",{className:"label-form-scale",children:e.jsx("input",{type:"radio",name:"customFormOption",defaultValue:4})}),e.jsx("div",{className:"line"}),e.jsx("label",{className:"label-form-scale",children:e.jsx("input",{type:"radio",name:"customFormOption",defaultValue:5})})]}),e.jsxs("div",{className:"form-label-custom",children:[e.jsx("div",{className:"form-label-radio",children:"Small"}),e.jsx("div",{className:"form-label-radio",children:"True to Size"}),e.jsx("div",{className:"form-label-radio",children:"Large"})]})]}),e.jsxs("div",{className:"stamped-form-custom-question","data-type":"scale",children:[e.jsx("label",{className:"stamped-form-label",children:"TRUE TO SIZE (BAND)"}),e.jsxs("div",{className:"stamped-form-custom-option-scale",children:[e.jsx("label",{className:"label-form-scale",children:e.jsx("input",{type:"radio",name:"customFormOption",defaultValue:1})}),e.jsx("div",{className:"line"}),e.jsx("label",{className:"label-form-scale",children:e.jsx("input",{type:"radio",name:"customFormOption",defaultValue:2})}),e.jsx("div",{className:"line"}),e.jsx("label",{className:"label-form-scale",children:e.jsx("input",{type:"radio",name:"customFormOption",defaultValue:3})}),e.jsx("div",{className:"line"}),e.jsx("label",{className:"label-form-scale",children:e.jsx("input",{type:"radio",name:"customFormOption",defaultValue:4})}),e.jsx("div",{className:"line"}),e.jsx("label",{className:"label-form-scale",children:e.jsx("input",{type:"radio",name:"customFormOption",defaultValue:5})})]}),e.jsxs("div",{className:"form-label-custom",children:[e.jsx("div",{className:"form-label-radio",children:"tight"}),e.jsx("div",{className:"form-label-radio",children:"True to Size"}),e.jsx("div",{className:"form-label-radio",children:"loose"})]})]}),e.jsx("div",{className:"stamped-form-custom-question","data-type":"textfield",children:e.jsxs("label",{className:"stamped-form-label",children:["PAIRS WELL WITH:",e.jsx("input",{type:"text",name:"customFormOption",defaultValue:"",className:"stamped-form-input stamped-form-input-text"})]})})]}),e.jsx("button",{id:"stamped-button-submit",type:"submit",className:"stamped-button",children:"submit"})]});function W(s){const{tabs:a,defaultValue:i=0,handleChangeTab:l,className:t}=s,[c,r]=d.useState(a[i]);return d.useEffect(()=>{r(a[i])},[a,i]),e.jsxs("div",{className:t,children:[e.jsx("div",{className:"tabs-container",children:e.jsx("nav",{children:e.jsx("ul",{children:a.map((n,h)=>e.jsxs("li",{className:n===c?"selected":"",onClick:()=>{r(n),l&&l(h)},children:[n.label,e.jsx("div",{className:"header-value",children:e.jsx("span",{className:"total-value",children:n.value||0})}),n===c?e.jsx(u.div,{className:"underline",layoutId:"underline"}):null]},n.label))})})}),e.jsx(g,{mode:"wait",children:e.jsx(u.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:c.render},c?c.label:"empty")})]})}const m=s=>{const{rating:a,color:i="#ffb4b4",width:l,height:t}=s;return e.jsx("ul",{className:"product-rating",children:Array.from(Array(5)).map((c,r)=>e.jsx("li",{className:"rating-list",children:e.jsx(S,{width:l,height:t,fill:r<a?i:"transparent",stroke:i})},"star_"+r))})},v=({children:s,rating:a,text:i})=>e.jsxs("div",{className:"review-option-item",children:[e.jsx("div",{className:"review-option-title",children:e.jsx("div",{className:"text-wrapper",children:s})}),e.jsxs("div",{children:[e.jsx("div",{className:"stamped-review-2",children:Array(5).fill(0).map((l,t)=>e.jsx("div",{className:`stamped-review-item ${a>t&&"active"}`},t))}),e.jsx("div",{className:"review-size-wrap",children:i.map((l,t)=>e.jsx("span",{children:l},t))})]})]}),G=({slug:s})=>{const[a,i]=d.useState(null),[l,t]=d.useState({review:!1,question:!1,defaultValue:0}),c=async()=>{const r=await R(s);i(r)};return d.useEffect(()=>{s&&c()},[s]),console.log("%cRating.tsx line:85 reviewOverview","color: #007acc;",a),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rating-header",children:[e.jsx("h3",{className:"component-title",children:"customer review"}),e.jsx("div",{className:"box",children:e.jsx("span",{className:"customer-say",children:"Customers say: If you’re between sizes, size up in band and size down in cup!"})})]}),e.jsxs("div",{className:"rating-overview-wrap",children:[e.jsxs("div",{className:"container-1",children:[e.jsxs("div",{className:"star-number-wrapper",children:[e.jsxs("div",{className:"star-number",children:[e.jsx("h2",{children:a?.averageReviews.toFixed(1)}),e.jsx(m,{rating:a?.averageReviews,width:28,height:28})]}),e.jsxs("p",{children:["based on ",a?.totalRecords?.reviews||0," reviews"]})]}),e.jsx("div",{className:"rating-count-wrap",children:a?.totalRatings?.map(({value:r,count:n},h)=>e.jsxs("div",{className:"review-wrapper",children:[e.jsx(m,{rating:r,color:"#777",width:15,height:15}),e.jsxs("div",{className:"chart-number-wrapper",children:[e.jsx("div",{className:"chart-number-bg",children:e.jsx("div",{className:"chart-main",style:{width:n/Number(a?.totalRecords.reviews||0)*100+"%"}})}),e.jsxs("span",{children:["(",n,")"]})]})]},"rating_overview_"+h))})]}),e.jsxs("div",{className:"container-2",children:[e.jsxs("div",{className:"review-size",children:[e.jsx(j,{value:a?.totalTrueToSize||0,title:"true to size",maxLabel:"large",minLabel:"small"}),e.jsx(j,{value:a?.totalTrueToBand||0,title:"true to size - band",maxLabel:"tight",minLabel:"loose"}),e.jsx(j,{value:a?.totalTrueToCup||0,title:"true to size - cup",maxLabel:"large",minLabel:"small"})]}),e.jsxs("div",{className:"review-button",children:[e.jsx("button",{onClick:()=>t({review:!0,defaultValue:0}),className:"review",children:e.jsx("span",{children:"write a review"})}),e.jsx("button",{onClick:()=>t({question:!0,defaultValue:1}),className:"question",children:e.jsx("span",{children:"ask a question"})})]})]})]}),e.jsx(W,{defaultValue:l.defaultValue,handleChangeTab:r=>{t(n=>({defaultValue:r,question:!1,review:!1}))},tabs:[{label:"Reviews",render:e.jsx(A,{showForm:l.review,slug:s}),value:a?.totalRecords?.reviews||0},{label:"Questions",render:e.jsx(T,{showForm:l.question,slug:s}),value:a?.totalRecords?.questions||0}],className:"rating-box"})]})},j=s=>{const{title:a,maxLabel:i,minLabel:l,value:t=0}=s;return e.jsxs("div",{className:"container",children:[e.jsx("span",{className:"title",children:a}),e.jsxs("span",{className:"option",children:[e.jsx("div",{className:"value",style:{left:`calc(${t>4?100:25*(t-1)}% - 12px)`}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsxs("div",{className:"description",children:[e.jsx("span",{children:l}),e.jsx("span",{children:i})]})]})},$={enter:{opacity:0,translateX:"none"},center:{zIndex:1,opacity:1},exit:{zIndex:0,opacity:.5,translateX:"none"}},J=s=>{const{className:a,product:i,extraComponent:l}=s,[t,c]=d.useState(0);return e.jsxs("div",{id:"product",className:a,children:[e.jsx("div",{className:"product-thumbnail",children:e.jsxs("a",{href:"/products/"+i.slug,children:[i?.options&&e.jsx("div",{className:"product-image",children:e.jsx(y,{src:i?.options[t]?.thumbnail??"",ariaLabel:"product-thumbnail",alt:`thumbnail_${i.name}_${t}`,transition:{opacity:{duration:.5,delay:.2}},initial:"enter",animate:"center",variants:$},t)}),i.isNew&&e.jsx("div",{className:"product-new-arrival",children:e.jsx("span",{children:"NEW ARRIVAL"})})]})}),e.jsxs("div",{className:"product-content",children:[i.rating&&e.jsxs("div",{className:"product-star",children:[e.jsx(m,{rating:i.rating}),e.jsxs("span",{className:"product-review",children:[i.totalRating," Reviews"]})]}),e.jsx("div",{className:"product-title",children:e.jsx("span",{children:i.name})}),e.jsxs("div",{className:"product-price",children:[i.originalPrice&&e.jsx("span",{className:"original-price",children:f(i.originalPrice,"USD")}),e.jsx("span",{children:f(i.price,"USD")})]}),e.jsx("div",{className:"product-options",children:e.jsx("ul",{className:"product-options-list",children:i?.options?.map((r,n)=>e.jsx("li",{children:e.jsx("div",{className:`circle ${n===t&&"active"}`,style:{background:r.color},onClick:()=>c(n)})},"product_options_"+r.code))})}),l]})]})},K=s=>{const{category:a}=s;return e.jsxs("div",{id:"category",className:"card-category category-section",children:[e.jsx("div",{className:"card-image",children:e.jsx(o,{src:a.url,ariaLabel:"card-thumbnail",alt:a.name})}),e.jsx("a",{className:"card-button",href:"collections"+a.path,children:e.jsx("span",{children:a.name})})]})},ee=s=>{const{item:a}=s;return e.jsxs("div",{className:"product-raving",children:[e.jsx("div",{className:"product-thumbnail",children:e.jsx("a",{href:"/products/"+a.product.slug,children:e.jsx("div",{className:"product-image",children:e.jsx(o,{src:a.product.thumbnail,ariaLabel:"product-thumbnail",alt:a.product.name})})})}),e.jsxs("div",{className:"product-content",children:[e.jsx("div",{className:"product-star",children:e.jsx(m,{rating:a.rating})}),e.jsx("div",{className:"product-rate",children:e.jsxs("span",{children:["“",a.comment,"”"]})}),e.jsx("div",{className:"product-author",children:e.jsx("span",{children:a.name})}),e.jsx("a",{href:"/products/"+a.product.slug,className:"product-shop-style",children:"SHOP STYLE"})]})]})};export{J as C,m as R,K as a,ee as b,G as c};
