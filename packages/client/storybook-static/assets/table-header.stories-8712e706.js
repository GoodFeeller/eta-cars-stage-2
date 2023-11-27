import{j as r}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{s as l}from"./CoinTable.module-1d8a9963.js";import"./_commonjsHelpers-de833af9.js";const s=({sort:e,setSort:o})=>{const t=a=>{e.property===a?e.to==="up"?o({property:a,to:"down"}):o({property:a,to:"up"}):o({property:a,to:"up"})};return r.jsx("thead",{"data-testid":"thead",children:r.jsxs("tr",{children:[r.jsx("th",{onClick:()=>t("rank"),children:e.property==="rank"?e.to==="up"?"# (up)":"# (down)":"#"}),r.jsx("th",{className:l.imgTd,children:"Name"}),r.jsx("th",{onClick:()=>t("priceUsd"),children:e.property==="priceUsd"?e.to==="up"?"Price (up)":"Price (down)":"Price"}),r.jsx("th",{onClick:()=>t("marketCapUsd"),children:e.property==="marketCapUsd"?e.to==="up"?"Market Cap (up)":"Market Cap (down)":"Market Cap"}),r.jsx("th",{onClick:()=>t("changePercent24Hr"),children:e.property==="changePercent24Hr"?e.to==="up"?"24h% (up)":"24h% (down)":"24h%"}),r.jsx("th",{})]})})},u=i.memo(s);try{s.displayName="TableHeader",s.__docgenInfo={description:"",displayName:"TableHeader",props:{sort:{defaultValue:null,description:"",name:"sort",required:!0,type:{name:"sortType"}},setSort:{defaultValue:null,description:"",name:"setSort",required:!0,type:{name:"Dispatch<SetStateAction<sortType>>"}}}}}catch{}const j={component:u,decorators:[e=>r.jsx("table",{style:{display:"flex",width:"50vw",justifyContent:"space-around"},children:r.jsx(e,{})})]},n={args:{setSort:()=>null,sort:{property:"changePercent24Hr",to:"down"}}};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    setSort: () => null,
    sort: {
      property: 'changePercent24Hr',
      to: 'down'
    }
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const g=["WithSort"];export{n as WithSort,g as __namedExportsOrder,j as default};
//# sourceMappingURL=table-header.stories-8712e706.js.map
