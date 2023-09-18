import{j as e}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function s({ref:n,css:t,direction:r="row",alignItems:a="start",flexWrap:o="nowrap",justifyContent:i="start",gap:w=0,children:C}){return e.jsx("div",{ref:n,style:{display:"flex",justifyContent:i,alignItems:a,flexWrap:o,flexDirection:r,gap:`${w}px`,...t},children:C})}try{s.displayName="Flex",s.__docgenInfo={description:"",displayName:"Flex",props:{ref:{defaultValue:null,description:"This prop is used when the container needs events",name:"ref",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}},css:{defaultValue:null,description:"This prop is used when you want to set CSS options",name:"css",required:!1,type:{name:"CSSProperties"}},justifyContent:{defaultValue:{value:"start"},description:"This prop is used when you want to specify the justify-content\n${minWidth}px",name:"justifyContent",required:!1,type:{name:"JustifyContent"}},alignItems:{defaultValue:{value:"start"},description:"This prop is used when you want to specify the align-items",name:"alignItems",required:!1,type:{name:"AlignItems"}},direction:{defaultValue:{value:"row"},description:"This prop is used when you want to specify the flex-direction",name:"direction",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row"'},{value:'"row-reverse"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"This prop is used when you want to specify the flex-wrap",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"nowrap"'},{value:'"wrap"'},{value:'"wrap-reverse"'}]}},gap:{defaultValue:{value:"0"},description:"This prop is used when you want to specify the gap",name:"gap",required:!1,type:{name:"number"}}}}}catch{}const F={title:"Flex",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{css:{control:"object"},direction:{control:"text",defaultValue:"row"},alignItems:{control:"text",defaultValue:"start"},flexWrap:{control:"text",defaultValue:"nowrap"},justifyContent:{control:"text",defaultValue:"start"},gap:{control:"number",defaultValue:0}}},l={render:({css:n,justifyContent:t,direction:r,alignItems:a,flexWrap:o,gap:i})=>e.jsxs(s,{css:n,justifyContent:t,direction:r,alignItems:a,flexWrap:o,gap:i,children:[e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"pink"}}),e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellow"}}),e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellowgreen"}})]}),args:{css:{backgroundColor:"rgb(255,255,255)"},direction:"row",gap:30}},d={render:({css:n,justifyContent:t,direction:r,alignItems:a,flexWrap:o,gap:i})=>e.jsxs(s,{css:n,justifyContent:t,direction:r,alignItems:a,flexWrap:o,gap:i,children:[e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"pink"}}),e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellow"}}),e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellowgreen"}})]}),args:{css:{backgroundColor:"rgb(255,255,255)"},direction:"column",gap:30}},p={render:({css:n,justifyContent:t,direction:r,alignItems:a,flexWrap:o,gap:i})=>e.jsx(s,{css:n,justifyContent:t,direction:r,alignItems:a,flexWrap:o,gap:i,children:e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"gray"}})}),args:{css:{border:"1px",backgroundColor:"pink",width:"100vw",height:"100vh"},alignItems:"center",justifyContent:"center"}};var u,c,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(c=l.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,h,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var m,f,v;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(f=p.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const I=["RowFlex","ColumnFlex","CenterFlex"];export{p as CenterFlex,d as ColumnFlex,l as RowFlex,I as __namedExportsOrder,F as default};
//# sourceMappingURL=Flex.stories-bb2fb170.js.map
