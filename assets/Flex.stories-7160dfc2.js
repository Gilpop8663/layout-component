import{j as e}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function s({ref:n,css:t,direction:r="row",alignItems:o="start",flexWrap:i="nowrap",justifyContent:f="start",children:w}){return e.jsx("div",{ref:n,style:{display:"flex",justifyContent:f,alignItems:o,flexWrap:i,flexDirection:r,...t},children:w})}try{s.displayName="Flex",s.__docgenInfo={description:"",displayName:"Flex",props:{ref:{defaultValue:null,description:"This prop is used when the container needs events",name:"ref",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}},css:{defaultValue:null,description:"This prop is used when you want to set CSS options",name:"css",required:!1,type:{name:"CSSProperties"}},justifyContent:{defaultValue:{value:"start"},description:"This prop is used when you want to specify the justify-content\n${minWidth}px",name:"justifyContent",required:!1,type:{name:"JustifyContent"}},alignItems:{defaultValue:{value:"start"},description:"This prop is used when you want to specify the align-items",name:"alignItems",required:!1,type:{name:"AlignItems"}},direction:{defaultValue:{value:"row"},description:"This prop is used when you want to specify the flex-direction",name:"direction",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row"'},{value:'"row-reverse"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"This prop is used when you want to specify the flex-wrap",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"nowrap"'},{value:'"wrap"'},{value:'"wrap-reverse"'}]}}}}}catch{}const k={title:"Flex",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{css:{control:"object"},direction:{control:"text",defaultValue:"row"},alignItems:{control:"text",defaultValue:"start"},flexWrap:{control:"text",defaultValue:"nowrap"},justifyContent:{control:"text",defaultValue:"start"}}},a={render:({css:n,justifyContent:t,direction:r,alignItems:o,flexWrap:i})=>e.jsxs(s,{css:n,justifyContent:t,direction:r,alignItems:o,flexWrap:i,children:[e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"pink"}}),e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellow"}}),e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellowgreen"}})]}),args:{css:{backgroundColor:"rgb(255,255,255)",gap:"30px"},direction:"row"}},l={render:({css:n,justifyContent:t,direction:r,alignItems:o,flexWrap:i})=>e.jsxs(s,{css:n,justifyContent:t,direction:r,alignItems:o,flexWrap:i,children:[e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"pink"}}),e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellow"}}),e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellowgreen"}})]}),args:{css:{backgroundColor:"rgb(255,255,255)",gap:"30px"},direction:"column"}},d={render:({css:n,justifyContent:t,direction:r,alignItems:o,flexWrap:i})=>e.jsx(s,{css:n,justifyContent:t,direction:r,alignItems:o,flexWrap:i,children:e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"gray"}})}),args:{css:{border:"1px",backgroundColor:"pink",width:"100vw",height:"100vh"},alignItems:"center",justifyContent:"center"}};var u,p,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    css,
    justifyContent,
    direction,
    alignItems,
    flexWrap
  }) => <Flex css={css} justifyContent={justifyContent} direction={direction} alignItems={alignItems} flexWrap={flexWrap}>
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
      backgroundColor: 'rgb(255,255,255)',
      gap: '30px'
    },
    direction: 'row'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var x,g,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: ({
    css,
    justifyContent,
    direction,
    alignItems,
    flexWrap
  }) => <Flex css={css} justifyContent={justifyContent} direction={direction} alignItems={alignItems} flexWrap={flexWrap}>
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
      backgroundColor: 'rgb(255,255,255)',
      gap: '30px'
    },
    direction: 'column'
  }
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,m,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    css,
    justifyContent,
    direction,
    alignItems,
    flexWrap
  }) => <Flex css={css} justifyContent={justifyContent} direction={direction} alignItems={alignItems} flexWrap={flexWrap}>
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
}`,...(v=(m=d.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const F=["RowFlex","ColumnFlex","CenterFlex"];export{d as CenterFlex,l as ColumnFlex,a as RowFlex,F as __namedExportsOrder,k as default};
//# sourceMappingURL=Flex.stories-7160dfc2.js.map
