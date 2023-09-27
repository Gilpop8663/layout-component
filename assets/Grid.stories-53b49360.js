import{j as t}from"./jsx-runtime-6eef64cc.js";import{r as G}from"./index-c013ead5.js";import{s as E,C as k}from"./common-ebccdf28.js";import"./_commonjsHelpers-725317a4.js";const s=r=>typeof r=="number"?`repeat(${r}, 1fr)`:r,X=E(k)`
  display: grid;
  grid-template-columns: ${({columns:r=1})=>s(r)};
  grid-template-rows: ${({rows:r=1})=>s(r)};

  gap: ${({gap:r})=>r};
  row-gap: ${({rowGap:r})=>r};
  column-gap: ${({columnGap:r})=>r};
`,a=G.forwardRef(function({css:e,as:o,children:h,...f},b){return t.jsx(X,{as:o,ref:b,style:e,...f,children:h})}),A={title:"Grid",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text",defaultValue:"100%",description:"컴포넌트의 너비를 조정할 수 있습니다."},as:{control:"text",defaultValue:"div",description:"HTML 태그를 문자열로 입력해 원하는 HTML 태그로 사용할 수 있습니다."},fullScreen:{control:"boolean",description:"true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)"},css:{control:"object",description:"디테일 한 CSS 속성을 지정해야 할 경우 직접 CSS를 입력할 수 있습니다."},columns:{control:"text",description:"숫자 혹은 문자열을 넣어 grid-template-columns를 조정할 수 있습니다. 숫자를 넣었을 때는 repeat(columns, 1fr)로 설정되고, 문자열에서 설정한 값 그대로 적용됩니다."},rows:{control:"text",description:"숫자 혹은 문자열을 넣어 grid-template-rows 조정할 수 있습니다. 숫자를 넣었을 때는 repeat(rows, 1fr)로 설정되고, 문자열에서 설정한 값 그대로 적용됩니다."},gap:{control:"text",description:"Grid 안의 자식들의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다."},rowGap:{control:"text",description:"row 방향의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다."},columnGap:{control:"text",description:"column 방향의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다."},m:{control:"text",description:"margin 옵션을 조정할 수 있습니다. EX) 10px, 10%"},ml:{control:"text",description:"margin-left 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mr:{control:"text",description:"margin-right 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mb:{control:"text",description:"margin-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mt:{control:"text",description:"margin-top 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mx:{control:"text",description:"margin에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},my:{control:"text",description:"margin에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mxAuto:{control:"boolean",description:"margin에서 가로 옵션을 auto로 조정할 수 있습니다."},myAuto:{control:"boolean",description:"margin에서 세로 옵션을 auto로 조정할 수 있습니다."},p:{control:"text",description:"padding 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pl:{control:"text",description:"padding-left 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pr:{control:"text",description:"padding-right 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pt:{control:"text",description:"padding-top 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pb:{control:"text",description:"padding-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%"},px:{control:"text",description:"padding에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},py:{control:"text",description:"padding에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%"}}},n={render:r=>t.jsx(a,{...r,children:new Array(9).fill(1).map((e,o)=>t.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},o))}),args:{rows:3,columns:3,gap:"30px"}},i={render:r=>t.jsx(a,{...r,children:new Array(9).fill(1).map((e,o)=>t.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},o))}),args:{rows:3,rowGap:"30px"}},p={render:r=>t.jsx(a,{...r,children:new Array(9).fill(1).map((e,o)=>t.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},o))}),args:{columns:5,gap:"30px"}};var d,c,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Grid {...props}>
      {new Array(9).fill(1).map((__, index) => <div key={index} style={{
      display: 'block',
      height: '200px',
      width: '200px',
      backgroundColor: 'aquamarine'
    }}></div>)}
    </Grid>,
  args: {
    rows: 3,
    columns: 3,
    gap: '30px'
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,x,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <Grid {...props}>
      {new Array(9).fill(1).map((__, index) => <div key={index} style={{
      display: 'block',
      height: '200px',
      width: '200px',
      backgroundColor: 'aquamarine'
    }}></div>)}
    </Grid>,
  args: {
    rows: 3,
    rowGap: '30px'
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var u,w,y;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Grid {...props}>
      {new Array(9).fill(1).map((__, index) => <div key={index} style={{
      display: 'block',
      height: '200px',
      width: '200px',
      backgroundColor: 'aquamarine'
    }}></div>)}
    </Grid>,
  args: {
    columns: 5,
    gap: '30px'
  }
}`,...(y=(w=p.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const S=["ThreeGrid","RowsGrid","ColumnsGrid"];export{p as ColumnsGrid,i as RowsGrid,n as ThreeGrid,S as __namedExportsOrder,A as default};
//# sourceMappingURL=Grid.stories-53b49360.js.map
