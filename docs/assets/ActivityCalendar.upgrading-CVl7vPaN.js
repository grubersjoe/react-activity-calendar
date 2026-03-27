import{n as e}from"./chunk-BneVvdWh.js";import{r as t,t as n}from"./react-DqMRxE9T.js";import{_ as r,a as i,o as a,p as o,v as s}from"./iframe-Cs11f8PI.js";import{i as c,n as l,r as u,t as d}from"./Source-mH2xURQE.js";var f=e((()=>{n()}));function p(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{title:`React Activity Calendar/Upgrading to v3`}),`
`,(0,h.jsx)(n.h1,{id:`upgrading-to-v3`,children:`Upgrading to v3`}),`
`,(0,h.jsx)(n.p,{children:`Version 3 of React Activity Calendar introduces several breaking changes and a introduces a new
approach to tooltips. Follow the guide below to upgrade your project from v2 to v3.`}),`
`,(0,h.jsx)(n.h2,{id:`breaking-changes`,children:`Breaking changes`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[`React Activity Calendar is now a
`,(0,h.jsx)(n.a,{href:`https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c`,rel:`nofollow`,children:`pure ESM package`}),`.`]}),`
`,(0,h.jsxs)(n.li,{children:[`The default export has been `,(0,h.jsx)(n.strong,{children:`removed`}),`. Use the named export instead:`,`
`,(0,h.jsx)(d,{code:`import { ActivityCalendar } from 'react-activity-calendar'`,isDarkMode:s()}),`
`]}),`
`,(0,h.jsxs)(n.li,{children:[`The `,(0,h.jsx)(n.code,{children:`eventHandlers`}),` prop has been `,(0,h.jsx)(n.strong,{children:`removed`}),`. Use the `,(0,h.jsx)(n.code,{children:`renderBlock`}),` prop with
`,(0,h.jsx)(n.code,{children:`React.cloneElement()`}),` to `,(0,h.jsx)(c,{kind:`react-activity-calendar`,name:`event-handlers`,children:`attach
event handlers`}),`.`]}),`
`,(0,h.jsxs)(n.li,{children:[`The `,(0,h.jsx)(n.code,{children:`totalCount`}),` prop has been `,(0,h.jsx)(n.strong,{children:`removed`}),`, overriding the total count is no longer supported.`]}),`
`,(0,h.jsxs)(n.li,{children:[`The `,(0,h.jsx)(n.code,{children:`hideColorLegend`}),` prop has been `,(0,h.jsx)(n.strong,{children:`renamed`}),` to `,(0,h.jsx)(n.code,{children:`showColorLegend`}),`.`]}),`
`,(0,h.jsxs)(n.li,{children:[`The `,(0,h.jsx)(n.code,{children:`hideMonthLabels`}),` prop has been `,(0,h.jsx)(n.strong,{children:`renamed`}),` to `,(0,h.jsx)(n.code,{children:`showMonthLabels`}),`.`]}),`
`,(0,h.jsxs)(n.li,{children:[`The `,(0,h.jsx)(n.code,{children:`hideTotalCount`}),` prop has been `,(0,h.jsx)(n.strong,{children:`renamed`}),` to `,(0,h.jsx)(n.code,{children:`showTotalCount`}),`.`]}),`
`,(0,h.jsxs)(n.li,{children:[`The `,(0,h.jsx)(n.code,{children:`<Skeleton />`}),` component has been `,(0,h.jsx)(n.strong,{children:`removed`}),`.`,(0,h.jsx)(`br`,{}),` Render the calendar with empty data in
its loading state instead:`,`
`,(0,h.jsx)(d,{code:`<ActivityCalendar data={[]} loading />`,isDarkMode:s()}),`
`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`tooltips`,children:`Tooltips`}),`
`,(0,h.jsxs)(n.p,{children:[`Tooltips no longer depend on external libraries and are now integrated directly into this package.
Thanks to code-splitting, tooltips only affect your bundle size when you use them. They are
implemented using the `,(0,h.jsx)(n.a,{href:`https://floating-ui.com/`,rel:`nofollow`,children:`Floating UI`}),` library as a “headless” component,
meaning they come without predefined styles. This gives you full control over the appearance:`]}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[`Import the default styles provided by this package, `,(0,h.jsx)(n.strong,{children:`or`})]}),`
`,(0,h.jsx)(n.li,{children:`Add your own custom CSS.`}),`
`]}),`
`,(0,h.jsxs)(n.p,{children:[`See the `,(0,h.jsx)(c,{kind:`react-activity-calendar`,name:`tooltips`,children:`tooltips`}),` page for details
and examples.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=o(),f(),a(),r(),u(),l()}))();export{m as default};