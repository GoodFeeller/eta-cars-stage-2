import{j as r}from"./jsx-runtime-ffb262ed.js";import{r as j}from"./index-76fb7be0.js";import{s,B as C}from"./BuyCoin-45df2f48.js";import{A as u}from"./AddContext-9725df13.js";import"./_commonjsHelpers-de833af9.js";const a=()=>{const{coin:o}=j.useContext(u);return r.jsx(r.Fragment,{children:o?r.jsxs("div",{onClick:t=>t.stopPropagation(),className:s.content,children:[r.jsx("span",{className:s.title,children:"BUY COINS"}),r.jsxs("div",{className:s.coinName,children:[r.jsx("img",{src:`https://assets.coincap.io/assets/icons/${o.symbol.toLowerCase()}@2x.png`,alt:"Not found"}),r.jsx("span",{children:o.symbol})]}),r.jsx("span",{className:s.price,children:Intl.NumberFormat("en",{style:"currency",currency:"USD"}).format(Number(o.priceUsd))}),r.jsx(C,{coin:o})]}):r.jsx("div",{children:"Coin Not Found!"})})};try{a.displayName="AddCoinModal",a.__docgenInfo={description:"",displayName:"AddCoinModal",props:{}}}catch{}const x=({addOptions:o,children:t})=>{const y=()=>null;return r.jsx(u.Provider,{value:{coin:o,setCoin:y},children:t})},S={component:a,parameters:{addOptions:{id:"bitcoin"}}},e={decorators:[o=>r.jsx(x,{addOptions:{id:"bitcoin",name:"Bitcoin",rank:"1",priceUsd:"20000",symbol:"BTC",supply:"200",maxSupply:"200000",marketCapUsd:"2000000000",changePercent24Hr:"2"},children:r.jsx(o,{})})]},n={decorators:[o=>r.jsx(x,{addOptions:null,children:r.jsx(o,{})})]};var d,c,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  decorators: [Story => <AddProvider addOptions={{
    id: 'bitcoin',
    name: 'Bitcoin',
    rank: '1',
    priceUsd: '20000',
    symbol: 'BTC',
    supply: '200',
    maxSupply: '200000',
    marketCapUsd: '2000000000',
    changePercent24Hr: '2'
  }}>\r
        <Story />\r
      </AddProvider>]
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <AddProvider addOptions={null}>\r
        <Story />\r
      </AddProvider>]
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const _=["Full","Empty"];export{n as Empty,e as Full,_ as __namedExportsOrder,S as default};
//# sourceMappingURL=add-coin-modal.stories-eec69ab3.js.map
