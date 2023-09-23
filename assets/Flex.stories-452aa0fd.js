import{j as n}from"./jsx-runtime-6eef64cc.js";import{r as k}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const c=k.forwardRef(function({css:e,direction:t="row",alignItems:r="start",flexWrap:o="nowrap",justifyContent:s="start",gap:w=0,children:b},j){return n.jsx("div",{ref:j,style:{display:"flex",justifyContent:s,alignItems:r,flexWrap:o,flexDirection:t,gap:`${w}px`,...e},children:b})}),W={title:"Flex",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{css:{control:"object"},direction:{control:"text",defaultValue:"row"},alignItems:{control:"text",defaultValue:"start"},flexWrap:{control:"text",defaultValue:"nowrap"},justifyContent:{control:"text",defaultValue:"start"},gap:{control:"number",defaultValue:0}}},a={render:({css:i,justifyContent:e,direction:t,alignItems:r,flexWrap:o,gap:s})=>n.jsxs(c,{css:i,justifyContent:e,direction:t,alignItems:r,flexWrap:o,gap:s,children:[n.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"pink"}}),n.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellow"}}),n.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellowgreen"}})]}),args:{css:{backgroundColor:"rgb(255,255,255)"},direction:"row",gap:30}},l={render:({css:i,justifyContent:e,direction:t,alignItems:r,flexWrap:o,gap:s})=>n.jsxs(c,{css:i,justifyContent:e,direction:t,alignItems:r,flexWrap:o,gap:s,children:[n.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"pink"}}),n.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellow"}}),n.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellowgreen"}})]}),args:{css:{backgroundColor:"rgb(255,255,255)"},direction:"column",gap:30}},d={render:({css:i,justifyContent:e,direction:t,alignItems:r,flexWrap:o,gap:s})=>n.jsx(c,{css:i,justifyContent:e,direction:t,alignItems:r,flexWrap:o,gap:s,children:n.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"gray"}})}),args:{css:{border:"1px",backgroundColor:"pink",width:"100vw",height:"100vh"},alignItems:"center",justifyContent:"center"}};var p,g,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    css,
    justifyContent,
    direction,
    alignItems,
    flexWrap,
    gap
  }) => <Flex css={css} justifyContent={justifyContent} direction={direction} alignItems={alignItems} flexWrap={flexWrap} gap={gap}>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'pink'
    }}></div>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'yellow'
    }}></div>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'yellowgreen'
    }}></div>
    </Flex>,
  args: {
    css: {
      backgroundColor: 'rgb(255,255,255)'
    },
    direction: 'row',
    gap: 30
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,h,y;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    css,
    justifyContent,
    direction,
    alignItems,
    flexWrap,
    gap
  }) => <Flex css={css} justifyContent={justifyContent} direction={direction} alignItems={alignItems} flexWrap={flexWrap} gap={gap}>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'pink'
    }}></div>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'yellow'
    }}></div>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'yellowgreen'
    }}></div>
    </Flex>,
  args: {
    css: {
      backgroundColor: 'rgb(255,255,255)'
    },
    direction: 'column',
    gap: 30
  }
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var m,C,f;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    css,
    justifyContent,
    direction,
    alignItems,
    flexWrap,
    gap
  }) => <Flex css={css} justifyContent={justifyContent} direction={direction} alignItems={alignItems} flexWrap={flexWrap} gap={gap}>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'gray'
    }}></div>
    </Flex>,
  args: {
    css: {
      border: '1px',
      backgroundColor: 'pink',
      width: '100vw',
      height: '100vh'
    },
    alignItems: 'center',
    justifyContent: 'center'
  }
}`,...(f=(C=d.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const V=["RowFlex","ColumnFlex","CenterFlex"];export{d as CenterFlex,l as ColumnFlex,a as RowFlex,V as __namedExportsOrder,W as default};
//# sourceMappingURL=Flex.stories-452aa0fd.js.map
