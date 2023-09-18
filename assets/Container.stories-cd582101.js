import{j as t}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function i({ref:e,css:r,minWidth:n=0,maxWidth:o=0,children:h}){return t.jsx("div",{ref:e,style:{width:"100vw",minWidth:n?`${n}px`:"",maxWidth:o?`${o}px`:"",...r},children:h})}try{i.displayName="Container",i.__docgenInfo={description:"This is the container layout",displayName:"Container",props:{ref:{defaultValue:null,description:"This prop is used when the container needs events",name:"ref",required:!1,type:{name:"MutableRefObject<HTMLDivElement> | null"}},css:{defaultValue:null,description:"This prop is used when you want to set CSS options",name:"css",required:!1,type:{name:"CSSProperties"}},minWidth:{defaultValue:{value:"0"},description:"This prop is used when you want to specify the minimum width\n${minWidth}px",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"0"},description:"This prop is used when you want to specify the maximum width\n${manWidth}px",name:"maxWidth",required:!1,type:{name:"number"}}}}}catch{}const g={title:"Container",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{css:{control:"object"},maxWidth:{control:"number",defaultValue:"0"},minWidth:{control:"number",defaultValue:"0"}}},a={render:({css:e,maxWidth:r,minWidth:n})=>t.jsx(i,{css:e,children:t.jsx(i,{maxWidth:r,minWidth:n,children:t.jsx("div",{style:{height:"600px",background:"rgb(253,247,251)",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"28px"},children:"maxWidth:500"})})}),args:{css:{backgroundColor:"rgb(250,224,240)",justifyContent:"center",display:"flex"},maxWidth:500}},s={render:({css:e,maxWidth:r,minWidth:n})=>t.jsx(i,{css:e,maxWidth:r,minWidth:n,children:t.jsx("div",{style:{backgroundColor:"rgb(253,247,251)",height:"600px",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"28px"},children:"minWidth:300"})}),args:{minWidth:300}};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    css,
    maxWidth,
    minWidth
  }) => <Container css={css}>
      <Container maxWidth={maxWidth} minWidth={minWidth}>
        <div style={{
        height: '600px',
        background: 'rgb(253,247,251)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        fontSize: '28px'
      }}>
          maxWidth:500
        </div>
      </Container>
    </Container>,
  args: {
    css: {
      backgroundColor: 'rgb(250,224,240)',
      justifyContent: 'center',
      display: 'flex'
    },
    maxWidth: 500
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    css,
    maxWidth,
    minWidth
  }) => <Container css={css} maxWidth={maxWidth} minWidth={minWidth}>
      <div style={{
      backgroundColor: 'rgb(253,247,251)',
      height: '600px',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      fontSize: '28px'
    }}>
        minWidth:300
      </div>
    </Container>,
  args: {
    minWidth: 300
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const W=["MaxContainer","MinContainer"];export{a as MaxContainer,s as MinContainer,W as __namedExportsOrder,g as default};
//# sourceMappingURL=Container.stories-cd582101.js.map
