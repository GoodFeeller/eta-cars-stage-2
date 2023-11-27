import{j as e}from"./jsx-runtime-ffb262ed.js";import{s as y}from"./ProfileModal.module-86f43cba.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({coin:r})=>{const u=()=>{localStorage.removeItem(r.id);const n=localStorage.getItem("//profile//");if(n!=null){const i=JSON.parse(n),f=i.id.filter(g=>g!==r.id);localStorage.setItem("//profile//",JSON.stringify({id:f,totalPrice:i.totalPrice-r.totalPrice}))}window.dispatchEvent(new Event("storage"))};return e.jsx("div",{"data-testid":"profile-coin",className:y.coinItem,children:r?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("img",{src:`https://assets.coincap.io/assets/icons/${r.symbol.toLowerCase()}@2x.png`,alt:"Not found"}),e.jsx("span",{children:r.symbol})]}),e.jsxs("span",{children:["Price:"," ",Intl.NumberFormat("en",{style:"currency",currency:"USD"}).format(r.totalPrice)]}),e.jsxs("span",{children:["Count: ",r.count]})]}),e.jsx("button",{onClick:()=>u(),children:"remove"})]}):e.jsx("div",{children:"Coin Not Found!"})})};try{s.displayName="ProfileCoin",s.__docgenInfo={description:"",displayName:"ProfileCoin",props:{coin:{defaultValue:null,description:"",name:"coin",required:!0,type:{name:"IProfileCoin"}}}}}catch{}const C={component:s},t={},o={args:{coin:{id:"bitcoin",count:2,totalPrice:20313,symbol:"BTC"}}};var a,c,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    coin: {
      id: 'bitcoin',
      count: 2,
      totalPrice: 20313,
      symbol: 'BTC'
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const _=["Empty","Full"];export{t as Empty,o as Full,_ as __namedExportsOrder,C as default};
//# sourceMappingURL=profile-coin.stories-9d72522c.js.map
