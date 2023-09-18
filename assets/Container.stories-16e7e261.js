import{r as _}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";var g={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=_,W=Symbol.for("react.element"),v=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,w=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function C(t,e,s){var n,r={},c=null,p=null;s!==void 0&&(c=""+s),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(p=e.ref);for(n in e)j.call(e,n)&&!S.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:W,type:t,key:c,ref:p,props:r,_owner:w.current}}l.Fragment=v;l.jsx=C;l.jsxs=C;g.exports=l;var i=g.exports;function o({ref:t,css:e,minWidth:s=0,maxWidth:n=0,children:r}){return i.jsx("div",{ref:t,style:{width:"100vw",minWidth:s?`${s}px`:"",maxWidth:n?`${n}px`:"",...e},children:r})}try{o.displayName="Container",o.__docgenInfo={description:"This is the container layout",displayName:"Container",props:{ref:{defaultValue:null,description:"This prop is used when the container needs events",name:"ref",required:!1,type:{name:"MutableRefObject<HTMLDivElement> | null"}},css:{defaultValue:null,description:"This prop is used when you want to set CSS options",name:"css",required:!1,type:{name:"CSSProperties"}},minWidth:{defaultValue:{value:"0"},description:"This prop is used when you want to specify the minimum width\n${minWidth}px",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"0"},description:"This prop is used when you want to specify the maximum width\n${manWidth}px",name:"maxWidth",required:!1,type:{name:"number"}}}}}catch{}const O={title:"Container",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{css:{control:"object"},maxWidth:{control:"number",defaultValue:"0"},minWidth:{control:"number",defaultValue:"0"}}},a={render:({css:t,maxWidth:e})=>i.jsx(o,{css:t,children:i.jsx(o,{maxWidth:e,children:i.jsx("div",{style:{height:"600px",background:"rgb(253,247,251)",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"28px"},children:"maxWidth:500"})})}),args:{css:{backgroundColor:"rgb(250,224,240)",justifyContent:"center",display:"flex"},maxWidth:500}},d={render:({minWidth:t})=>i.jsx(o,{minWidth:t,children:i.jsx("div",{style:{backgroundColor:"rgb(253,247,251)",height:"600px",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"28px"},children:"minWidth:300"})}),args:{minWidth:300}};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    css,
    maxWidth
  }) => <Container css={css}>
      <Container maxWidth={maxWidth}>
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
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,x,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    minWidth
  }) => <Container minWidth={minWidth}>
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
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const T=["MaxContainer","MinContainer"];export{a as MaxContainer,d as MinContainer,T as __namedExportsOrder,O as default};
//# sourceMappingURL=Container.stories-16e7e261.js.map
