import{j as p}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function i({ref:e,css:r,rows:n=1,columns:a=1,gapX:s=0,gapY:t=0,children:o}){return p.jsx("div",{ref:e,style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gridTemplateRows:`repeat(${n}, 1fr)`,gap:`${t}px ${s}px`,...r},children:o})}try{i.displayName="Grid",i.__docgenInfo={description:"",displayName:"Grid",props:{ref:{defaultValue:null,description:"This prop is used when the container needs events",name:"ref",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}},css:{defaultValue:null,description:"This prop is used when you want to set CSS options",name:"css",required:!1,type:{name:"CSSProperties"}},rows:{defaultValue:{value:"1"},description:"This prop is used when you want to specify the rows,\nrepeat(${rows}, 1fr)",name:"rows",required:!1,type:{name:"number"}},columns:{defaultValue:{value:"1"},description:"This prop is used when you want to specify the columns,\nrepeat(${columns}, 1fr)",name:"columns",required:!1,type:{name:"number"}},gapX:{defaultValue:{value:"0"},description:"This prop is used when you want to specify the columns,\n${gapX}px",name:"gapX",required:!1,type:{name:"number"}},gapY:{defaultValue:{value:"0"},description:"This prop is used when you want to specify the columns,\n${gapY}px",name:"gapY",required:!1,type:{name:"number"}}}}}catch{}const v={title:"Grid",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{css:{control:"object"},columns:{control:"number",defaultValue:1},rows:{control:"number",defaultValue:1},gapX:{control:"number"},gapY:{control:"number"}}},l={render:({css:e,columns:r,gapX:n,gapY:a,rows:s})=>p.jsx(i,{css:e,rows:s,columns:r,gapX:n,gapY:a,children:new Array(9).fill(1).map((t,o)=>p.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},o))}),args:{rows:3,columns:3,gapX:30,gapY:30}},d={render:({css:e,columns:r,gapX:n,gapY:a,rows:s})=>p.jsx(i,{css:e,rows:s,columns:r,gapX:n,gapY:a,children:new Array(9).fill(1).map((t,o)=>p.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},o))}),args:{rows:3,gapY:30}},c={render:({css:e,columns:r,gapX:n,gapY:a,rows:s})=>p.jsx(i,{css:e,rows:s,columns:r,gapX:n,gapY:a,children:new Array(9).fill(1).map((t,o)=>p.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},o))}),args:{columns:5,gapX:30,gapY:30}};var u,m,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var w,y,h;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(y=d.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,x,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const G=["ThreeGrid","RowsGrid","ColumnsGrid"];export{c as ColumnsGrid,d as RowsGrid,l as ThreeGrid,G as __namedExportsOrder,v as default};
//# sourceMappingURL=Grid.stories-a3487fe3.js.map
