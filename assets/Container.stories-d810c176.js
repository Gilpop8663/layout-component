import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as C}from"./index-c013ead5.js";import{s as h,C as f}from"./common-ebccdf28.js";import"./_commonjsHelpers-725317a4.js";const y=h(f)`
  min-width: ${({minWidth:n})=>n};
  max-width: ${({maxWidth:n})=>n};
`,t=C.forwardRef(function({css:l,as:x,children:m,...g},u){return e.jsx(y,{ref:u,as:x,style:{...l},...g,children:e.jsx(e.Fragment,{children:m})})});try{t.displayName="Container",t.__docgenInfo={description:"",displayName:"Container",props:{}}}catch{}const _={title:"Container",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text",defaultValue:"100%",description:"컴포넌트의 너비를 조정할 수 있습니다."},as:{control:"text",defaultValue:"div",description:"HTML 태그를 문자열로 입력해 원하는 HTML 태그로 사용할 수 있습니다."},fullScreen:{control:"boolean",description:"true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)"},css:{control:"object",description:"디테일 한 CSS 속성을 지정해야 할 경우 직접 CSS를 입력할 수 있습니다."},maxWidth:{control:"text",description:"컴포넌트의 최소 너비를 지정하는 옵션입니다. 500px, 50%와 같이 문자열로 사용할 수 있습니다."},minWidth:{control:"text",description:"컴포넌트의 최대 너비를 지정하는 옵션입니다. 500px, 50%와 같이 문자열로 사용할 수 있습니다."}}},r={render:n=>e.jsx(t,{css:{backgroundColor:"rgb(250,224,240)",justifyContent:"center",display:"flex"},children:e.jsx(t,{...n,children:e.jsx("div",{style:{height:"600px",background:"rgb(253,247,251)",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"28px"},children:"maxWidth:500"})})}),args:{css:{backgroundColor:"rgb(250,224,240)",justifyContent:"center",display:"flex"},width:"1000px",maxWidth:"500px"}},o={render:n=>e.jsx(t,{...n,children:e.jsx("div",{style:{backgroundColor:"rgb(253,247,251)",height:"600px",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"28px"},children:"minWidth:300"})}),args:{width:"100px",minWidth:"300px"}};var i,s,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: props => <Container css={{
    backgroundColor: 'rgb(250,224,240)',
    justifyContent: 'center',
    display: 'flex'
  }}>
      <Container {...props}>
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
    width: '1000px',
    maxWidth: '500px'
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Container {...props}>
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
    width: '100px',
    minWidth: '300px'
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const w=["MaxContainer","MinContainer"];export{r as MaxContainer,o as MinContainer,w as __namedExportsOrder,_ as default};
//# sourceMappingURL=Container.stories-d810c176.js.map
