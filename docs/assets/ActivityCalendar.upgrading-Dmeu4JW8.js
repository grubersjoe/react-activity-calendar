import{j as e,M as d}from"./iframe-Ci1dRKEi.js";import{useMDXComponents as i}from"./index-BaVMmwWb.js";import{S as o,r}from"./Source-CbZUrE9X.js";import"./preload-helper-PPVm8Dsz.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"React Activity Calendar/Upgrading to v3"}),`
`,e.jsx(n.h1,{id:"upgrading-to-v3",children:"Upgrading to v3"}),`
`,e.jsx(n.p,{children:`Version 3 of React Activity Calendar introduces several breaking changes and a introduces a new
approach to tooltips. Follow the guide below to upgrade your project from v2 to v3.`}),`
`,e.jsx(n.h2,{id:"breaking-changes",children:"Breaking changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`React Activity Calendar is now a
`,e.jsx(n.a,{href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c",rel:"nofollow",children:"pure ESM package"}),"."]}),`
`,e.jsxs(n.li,{children:["The default export has been ",e.jsx(n.strong,{children:"removed"}),". Use the named export instead:",`
`,e.jsx(o,{code:"import { ActivityCalendar } from 'react-activity-calendar'"}),`
`]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"eventHandlers"})," prop has been ",e.jsx(n.strong,{children:"removed"}),". Use the ",e.jsx(n.code,{children:"renderBlock"}),` prop with
`,e.jsx(n.code,{children:"React.cloneElement()"})," to ",e.jsx(r,{kind:"react-activity-calendar",name:"event-handlers",children:`attach
event handlers`}),"."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"totalCount"})," prop has been ",e.jsx(n.strong,{children:"removed"}),", overriding the total count is no longer supported."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"hideColorLegend"})," prop has been ",e.jsx(n.strong,{children:"renamed"})," to ",e.jsx(n.code,{children:"showColorLegend"}),"."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"hideMonthLabels"})," prop has been ",e.jsx(n.strong,{children:"renamed"})," to ",e.jsx(n.code,{children:"showMonthLabels"}),"."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"hideTotalCount"})," prop has been ",e.jsx(n.strong,{children:"renamed"})," to ",e.jsx(n.code,{children:"showTotalCount"}),"."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"<Skeleton />"})," component has been ",e.jsx(n.strong,{children:"removed"}),".",e.jsx("br",{}),` Render the calendar with empty data in
its loading state instead:`,`
`,e.jsx(o,{code:"<ActivityCalendar data={[]} loading />"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"tooltips",children:"Tooltips"}),`
`,e.jsxs(n.p,{children:[`Tooltips no longer depend on external libraries and are now integrated directly into this package.
Thanks to code-splitting, tooltips only affect your bundle size when you use them. They are
implemented using the `,e.jsx(n.a,{href:"https://floating-ui.com/",rel:"nofollow",children:"Floating UI"}),` library as a “headless” component,
meaning they come without predefined styles. This gives you full control over the appearance:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Import the default styles provided by this package, ",e.jsx(n.strong,{children:"or"})]}),`
`,e.jsx(n.li,{children:"Add your own custom CSS."}),`
`]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(r,{kind:"react-activity-calendar",name:"tooltips",children:"tooltips"}),` page for details
and examples.`]})]})}function p(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
