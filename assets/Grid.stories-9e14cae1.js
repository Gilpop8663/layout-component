import{j as o}from"./jsx-runtime-6eef64cc.js";import{r as k}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const t=k.forwardRef(function({css:r,rows:n=1,columns:a=1,gapX:s=0,gapY:i=0,children:e},Y){return o.jsx("div",{ref:Y,style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gridTemplateRows:`repeat(${n}, 1fr)`,gap:`${i}px ${s}px`,...r},children:e})}),j={title:"Grid",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{css:{control:"object"},columns:{control:"number",defaultValue:1},rows:{control:"number",defaultValue:1},gapX:{control:"number"},gapY:{control:"number"}}},d={render:({css:p,columns:r,gapX:n,gapY:a,rows:s})=>o.jsx(t,{css:p,rows:s,columns:r,gapX:n,gapY:a,children:new Array(9).fill(1).map((i,e)=>o.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},e))}),args:{rows:3,columns:3,gapX:30,gapY:30}},l={render:({css:p,columns:r,gapX:n,gapY:a,rows:s})=>o.jsx(t,{css:p,rows:s,columns:r,gapX:n,gapY:a,children:new Array(9).fill(1).map((i,e)=>o.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},e))}),args:{rows:3,gapY:30}},c={render:({css:p,columns:r,gapX:n,gapY:a,rows:s})=>o.jsx(t,{css:p,rows:s,columns:r,gapX:n,gapY:a,children:new Array(9).fill(1).map((i,e)=>o.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},e))}),args:{columns:5,gapX:30,gapY:30}};var g,m,u;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    css,
    columns,
    gapX,
    gapY,
    rows
  }) => <Grid css={css} rows={rows} columns={columns} gapX={gapX} gapY={gapY}>
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
    gapX: 30,
    gapY: 30
  }
}`,...(u=(m=d.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,w,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: ({
    css,
    columns,
    gapX,
    gapY,
    rows
  }) => <Grid css={css} rows={rows} columns={columns} gapX={gapX} gapY={gapY}>
      {new Array(9).fill(1).map((__, index) => <div key={index} style={{
      display: 'block',
      height: '200px',
      width: '200px',
      backgroundColor: 'aquamarine'
    }}></div>)}
    </Grid>,
  args: {
    rows: 3,
    gapY: 30
  }
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var h,b,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    css,
    columns,
    gapX,
    gapY,
    rows
  }) => <Grid css={css} rows={rows} columns={columns} gapX={gapX} gapY={gapY}>
      {new Array(9).fill(1).map((__, index) => <div key={index} style={{
      display: 'block',
      height: '200px',
      width: '200px',
      backgroundColor: 'aquamarine'
    }}></div>)}
    </Grid>,
  args: {
    columns: 5,
    gapX: 30,
    gapY: 30
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const v=["ThreeGrid","RowsGrid","ColumnsGrid"];export{c as ColumnsGrid,l as RowsGrid,d as ThreeGrid,v as __namedExportsOrder,j as default};
//# sourceMappingURL=Grid.stories-9e14cae1.js.map
