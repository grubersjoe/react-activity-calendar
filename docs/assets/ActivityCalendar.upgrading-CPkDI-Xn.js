import{n as e}from"./chunk-BneVvdWh.js";import{r as t,t as n}from"./react-CRjV-JFB.js";import{a as r,o as i,p as a}from"./iframe-C6Ygjoiw.js";import{i as o,n as s,r as c,t as l}from"./Source-BUWCd34A.js";var u=e((()=>{n()}));function d(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`React Activity Calendar/Upgrading to v3`}),`
`,(0,p.jsx)(n.h1,{id:`upgrading-to-v3`,children:`Upgrading to v3`}),`
`,(0,p.jsx)(n.p,{children:`Version 3 of React Activity Calendar introduces several breaking changes and a introduces a new
approach to tooltips. Follow the guide below to upgrade your project from v2 to v3.`}),`
`,(0,p.jsx)(n.h2,{id:`breaking-changes`,children:`Breaking changes`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`React Activity Calendar is now a
`,(0,p.jsx)(n.a,{href:`https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c`,rel:`nofollow`,children:`pure ESM package`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[`The default export has been `,(0,p.jsx)(n.strong,{children:`removed`}),`. Use the named export instead:`,`
`,(0,p.jsx)(l,{code:`import { ActivityCalendar } from 'react-activity-calendar'`}),`
`]}),`
`,(0,p.jsxs)(n.li,{children:[`The `,(0,p.jsx)(n.code,{children:`eventHandlers`}),` prop has been `,(0,p.jsx)(n.strong,{children:`removed`}),`. Use the `,(0,p.jsx)(n.code,{children:`renderBlock`}),` prop with
`,(0,p.jsx)(n.code,{children:`React.cloneElement()`}),` to `,(0,p.jsx)(o,{kind:`react-activity-calendar`,name:`event-handlers`,children:`attach
event handlers`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[`The `,(0,p.jsx)(n.code,{children:`totalCount`}),` prop has been `,(0,p.jsx)(n.strong,{children:`removed`}),`, overriding the total count is no longer supported.`]}),`
`,(0,p.jsxs)(n.li,{children:[`The `,(0,p.jsx)(n.code,{children:`hideColorLegend`}),` prop has been `,(0,p.jsx)(n.strong,{children:`renamed`}),` to `,(0,p.jsx)(n.code,{children:`showColorLegend`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[`The `,(0,p.jsx)(n.code,{children:`hideMonthLabels`}),` prop has been `,(0,p.jsx)(n.strong,{children:`renamed`}),` to `,(0,p.jsx)(n.code,{children:`showMonthLabels`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[`The `,(0,p.jsx)(n.code,{children:`hideTotalCount`}),` prop has been `,(0,p.jsx)(n.strong,{children:`renamed`}),` to `,(0,p.jsx)(n.code,{children:`showTotalCount`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[`The `,(0,p.jsx)(n.code,{children:`<Skeleton />`}),` component has been `,(0,p.jsx)(n.strong,{children:`removed`}),`.`,(0,p.jsx)(`br`,{}),` Render the calendar with empty data in
its loading state instead:`,`
`,(0,p.jsx)(l,{code:`<ActivityCalendar data={[]} loading />`}),`
`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`tooltips`,children:`Tooltips`}),`
`,(0,p.jsxs)(n.p,{children:[`Tooltips no longer depend on external libraries and are now integrated directly into this package.
Thanks to code-splitting, tooltips only affect your bundle size when you use them. They are
implemented using the `,(0,p.jsx)(n.a,{href:`https://floating-ui.com/`,rel:`nofollow`,children:`Floating UI`}),` library as a “headless” component,
meaning they come without predefined styles. This gives you full control over the appearance:`]}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`Import the default styles provided by this package, `,(0,p.jsx)(n.strong,{children:`or`})]}),`
`,(0,p.jsx)(n.li,{children:`Add your own custom CSS.`}),`
`]}),`
`,(0,p.jsxs)(n.p,{children:[`See the `,(0,p.jsx)(o,{kind:`react-activity-calendar`,name:`tooltips`,children:`tooltips`}),` page for details
and examples.`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=a(),u(),i(),c(),s()}))();export{f as default};