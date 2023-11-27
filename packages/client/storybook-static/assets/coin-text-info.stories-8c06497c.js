import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as l}from"./index-76fb7be0.js";import{s as u}from"./CoinTable.module-1d8a9963.js";import{A as y}from"./AddContext-9725df13.js";import"./_commonjsHelpers-de833af9.js";const x="_body_11mru_1",_="_nameBody_11mru_8",h="_priceBody_11mru_31",b="_otherInfo_11mru_40",n={body:x,nameBody:_,priceBody:h,otherInfo:b},o=({coin:r})=>{const{setCoin:d}=l.useContext(y),m=()=>{d(r)};return e.jsx("button",{onClick:p=>{p.stopPropagation(),m()},className:u.addButton,children:"ADD"})};try{o.displayName="AddCoin",o.__docgenInfo={description:"",displayName:"AddCoin",props:{coin:{defaultValue:null,description:"",name:"coin",required:!0,type:{name:"ICoin"}}}}}catch{}const t=({coin:r})=>e.jsxs("div",{className:n.body,children:[e.jsxs("div",{className:n.nameBody,children:[e.jsx("span",{children:r.name}),e.jsx("span",{children:r.symbol}),e.jsx("img",{src:`https://assets.coincap.io/assets/icons/${r.symbol.toLowerCase()}@2x.png`,alt:"Not found"}),e.jsx(o,{coin:r})]}),e.jsxs("div",{className:n.priceBody,children:[e.jsx("span",{children:Intl.NumberFormat("en",{style:"currency",currency:"USD"}).format(Number(r.priceUsd))}),e.jsx("span",{children:Intl.NumberFormat("en",{maximumFractionDigits:2}).format(Number(r.changePercent24Hr))+"% (1d)"})]}),e.jsxs("div",{className:n.otherInfo,children:[e.jsx("span",{children:"Market Cap"}),e.jsx("span",{children:Intl.NumberFormat("en",{style:"currency",currency:"USD"}).format(Number(r.marketCapUsd))}),e.jsx("span",{children:"Rank"}),e.jsx("span",{children:r.rank}),e.jsx("span",{children:"Supply"}),e.jsx("span",{children:`${Intl.NumberFormat("en",{maximumFractionDigits:2}).format(Number(r.changePercent24Hr))} ${r.symbol}`}),e.jsx("span",{children:"Max Supply"}),e.jsx("span",{children:`${Number(r.maxSupply)} ${r.symbol}`})]})]});try{t.displayName="CoinTextInfo",t.__docgenInfo={description:"",displayName:"CoinTextInfo",props:{coin:{defaultValue:null,description:"",name:"coin",required:!0,type:{name:"ICoin"}}}}}catch{}const I={component:t},s={args:{coin:{id:"bitcoin",name:"Bitcoin",rank:"1",priceUsd:"20000",symbol:"BTC",supply:"200",maxSupply:"200000",marketCapUsd:"2000000000",changePercent24Hr:"2"}}};var a,c,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    coin: {
      id: 'bitcoin',
      name: 'Bitcoin',
      rank: '1',
      priceUsd: '20000',
      symbol: 'BTC',
      supply: '200',
      maxSupply: '200000',
      marketCapUsd: '2000000000',
      changePercent24Hr: '2'
    }
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const B=["FirstStory"];export{s as FirstStory,B as __namedExportsOrder,I as default};
//# sourceMappingURL=coin-text-info.stories-8c06497c.js.map
