"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{179:function(e,r,t){t.d(r,{Z:function(){return l}});var s=t(7437);function l(e){let{children:r,image:t,title:l}=e;return(0,s.jsxs)("div",{className:"w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ",children:[l&&(0,s.jsx)("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-black",children:l}),t,r]})}},4543:function(e,r,t){t.d(r,{Z:function(){return l}});var s=t(7437);function l(e){let{href:r,children:t,block:l,bgColor:a}=e;return(0,s.jsxs)("a",{href:r,className:"mt-4 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"+(l?" w-full":"")+(a?"":" bg-primary hover:bg-accentOrange"),style:{backgroundColor:a},children:[t,(0,s.jsx)("svg",{className:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10",children:(0,s.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})})]})}},5635:function(e,r,t){t.d(r,{Z:function(){return n}});var s=t(7437),l=t(8087),a=t(2265),i=t(1770);function c(e){let{text:r}=e;return(0,s.jsxs)("div",{className:"relative flex py-5 items-center",children:[(0,s.jsx)("div",{className:"flex-grow border-t border-white"}),(0,s.jsx)("span",{className:"flex-shrink mx-4 text-white",children:r}),(0,s.jsx)("div",{className:"flex-[20] border-t border-white"})]})}var d=t(4543);function n(e){let{voucher:r=!1,flightKey:t}=e,n=(0,l.useTranslations)("BookingForm"),o=(0,l.useTranslations)("Flights"),u=null!=t?t:i.P[0].key,[m,b]=(0,a.useState)(()=>u),[x,h]=(0,a.useState)(),f=(0,a.useMemo)(()=>i.P.find(e=>e.key===m),[m]),[g,p]=(0,a.useState)(()=>r),[j,k]=(0,a.useState)([{}]);(0,a.useEffect)(()=>{let e=i.P.find(e=>e.key===m);if(e){var r,t;h(null===(r=null!==(t=e.variations.find(e=>e.default))&&void 0!==t?t:e.variations[0])||void 0===r?void 0:r.key)}},[m]);let y=e=>{let r=e-j.length;r<0?k(e=>e.slice(0,r)):k(e=>[...e,...Array.from(Array(r).keys()).map(()=>({}))])};return(0,s.jsxs)("div",{id:"request",className:"scroll-mt-[115px] p-5 rounded-lg"+(g?" bg-[#8b0000]":" bg-[#9696dc1a]"),children:[(0,s.jsx)("div",{className:"text-white",children:n("headline")}),(0,s.jsxs)("form",{children:[(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsxs)("label",{className:"inline-flex items-center cursor-pointer my-3",children:[(0,s.jsx)("span",{className:"mr-3 text-sm font-medium text-white ",children:n("voucher.no")}),(0,s.jsx)("input",{type:"checkbox",value:"",checked:g,className:"sr-only peer",onChange:e=>p(e.target.checked)}),(0,s.jsx)("div",{className:"relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"}),(0,s.jsx)("span",{className:"ml-3 text-sm font-medium text-white ",children:n("voucher.yes")})]})}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("label",{htmlFor:"flight",className:"block mb-2 text-sm font-medium text-white ",children:n("select-flight")}),(0,s.jsx)("select",{id:"flight",onChange:e=>b(e.target.value),className:"bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      ",children:i.P.map(e=>(0,s.jsx)("option",{value:e.key,selected:m===e.key,children:o(e.titleKey)},e.key))})]}),f&&!!f.variations.length&&(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:f.variations.map(e=>{let r=e.key===x;return(0,s.jsxs)("div",{className:"text-black cursor-pointer rounded-lg p-3 flex justify-between items-center"+(r?" bg-orange-200 border border-accentOrange":" bg-white border border-gray-500"),onClick:()=>h(e.key),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"font-medium",children:n("expected-duration",{duration:e.expectedDuration})}),(0,s.jsx)("div",{className:"font-light",children:"".concat(e.price,",-€")})]}),r&&(0,s.jsx)("div",{className:"text-xl",children:"✓"})]},e.key)})}),(0,s.jsx)(c,{text:n("passenger-details")}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("label",{htmlFor:"flight",className:"block mb-2 text-sm font-medium text-white ",children:n("number-passengers")}),(0,s.jsx)("select",{value:j.length,id:"number-passenger",onChange:e=>y(Number(e.target.value)),className:"bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",children:Array.from([,,,,,].keys()).map((e,r)=>(0,s.jsx)("option",{value:r+1,selected:r+1===j.length,children:r+1},r))})]}),(0,s.jsxs)("table",{className:"table-fixed w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"w-28"}),(0,s.jsx)("th",{className:"text-left",children:(0,s.jsx)("label",{htmlFor:"first_name",className:"block mb-2 text-sm font-medium text-white required",children:n("age")})}),(0,s.jsx)("th",{className:"text-left",children:(0,s.jsx)("label",{htmlFor:"first_name",className:"block mb-2 text-sm font-medium text-white  required",children:n("weight")})})]})}),(0,s.jsx)("tbody",{children:j.map((e,r)=>(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{className:"text-white",children:[n("passenger")," ",r+1]}),(0,s.jsx)("td",{className:"p-2",children:(0,s.jsx)("input",{min:14,max:80,type:"number",id:"first_name",className:"w-full bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5      ",placeholder:"35",required:!0})}),(0,s.jsx)("td",{className:"px-2",children:(0,s.jsx)("input",{min:35,max:100,type:"number",id:"first_name",className:"w-full bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5      ",placeholder:"80",required:!0})})]},r))})]}),(0,s.jsx)(c,{text:n("contact-details")}),(0,s.jsxs)("div",{className:"grid gap-6 mb-6 md:grid-cols-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"first_name",className:"block mb-2 text-sm font-medium text-white  required",children:n("first-name")}),(0,s.jsx)("input",{type:"text",id:"first_name",className:"bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      ",placeholder:"Erika",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"last_name",className:"block mb-2 text-sm font-medium text-white  required",children:"Last name"}),(0,s.jsx)("input",{type:"text",id:"last_name",className:"bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      ",placeholder:"Musterfrau",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"phone",className:"block mb-2 text-sm font-medium text-white  required",children:n("phone")}),(0,s.jsx)("input",{type:"tel",id:"phone",className:"bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      ",placeholder:"+49 123 456 6789",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-white  required",children:n("email")}),(0,s.jsx)("input",{type:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      ",placeholder:"erika.musterfrau@muster.com",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"arrival_date",className:"block mb-2 text-sm font-medium text-white ",children:n("arrival-date")}),(0,s.jsx)("input",{className:"bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      ",type:"date",id:"start",name:"arrival_date",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"departure_date",className:"block mb-2 text-sm font-medium text-white ",children:n("departure-date")}),(0,s.jsx)("input",{className:"bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",type:"date",id:"end",name:"departure_date",required:!0})]})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium text-white ",children:n("further-details")}),(0,s.jsx)("textarea",{id:"message",rows:4,className:"block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      ",placeholder:n("further-details-placeholder")})]}),(0,s.jsxs)("div",{className:"flex items-start mb-6",children:[(0,s.jsx)("div",{className:"flex items-center h-5",children:(0,s.jsx)("input",{id:"remember",type:"checkbox",value:"",className:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300   dark:focus:ring-blue-600 dark:ring-offset-gray-800",required:!0})}),(0,s.jsx)("label",{htmlFor:"remember",className:"ms-2 text-sm font-medium text-white ",children:n.rich("read-confirmation",{link:e=>(0,s.jsx)("a",{href:"/",className:"font-bold text-blue-400 hover:text-accentOrange",children:e})})})]}),(0,s.jsx)(d.Z,{href:"",bgColor:"#ed8005",children:n("submit")})]})]})}},1070:function(e,r,t){t.d(r,{Z:function(){return l}});var s=t(7437);function l(e){let{title:r,children:t,bgColor:l,color:a}=e;return(0,s.jsxs)("div",{style:{backgroundColor:l,color:a},className:"w-screen py-8"+(l?"":" bg-white"),children:[r&&(0,s.jsx)("h3",{className:"text-4xl text-center mb-8",children:r}),(0,s.jsx)("div",{className:"w-screen max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8",children:t})]})}t(2265)},1770:function(e,r,t){t.d(r,{p:function(){return s},P:function(){return l}});let s="Flights",l=[{key:"classic-flight",titleKey:"classic-flight.title",alias:"classic-flight.alias",subtitleKey:"classic-flight.subtitle",descriptionShortKey:"classic-flight.description-short",locationKey:"classic-flight.location",headerImage:"/flights/classic/classic-header.jpg",images:["/flights/classic/classic-header.jpg","/flights/classic/classic-1.jpg","/flights/classic/classic-2.png","/flights/classic/classic-3.png","/flights/classic/classic-4.png","/flights/classic/classic-5.png"],youTubeLink:"https://www.youtube.com/embed/7OgRNMtREYk",variations:[{key:"short",price:179,expectedDuration:15,default:!0},{key:"medium",price:42,expectedDuration:69,default:!0}]}]}}]);