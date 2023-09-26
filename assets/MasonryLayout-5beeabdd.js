import{j as n}from"./jsx-runtime-6eef64cc.js";import{u as a}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function o(t){const e=Object.assign({h3:"h3",pre:"pre",code:"code"},a(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{id:"masonrylayout-사용-방법",children:"MasonryLayout 사용 방법"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function MasonryLayout({ itemSize, gap }: ComponentProps) {
  return (
    <MasonryLayout item={itemSize} gap={gap}>
      {MOCK_RANDOM_IMAGE_LIST.map((item) => {
        return <Image loading="lazy" src={item} alt="랜덤 이미지" />;
      })}
    </MasonryLayout>
  );
}
`})})]})}function m(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(o,t)})):o(t)}export{m as default};
//# sourceMappingURL=MasonryLayout-5beeabdd.js.map
