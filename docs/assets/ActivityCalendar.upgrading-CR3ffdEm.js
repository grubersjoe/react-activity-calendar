import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{r as n,t as r}from"./react-DtJvCZNS.js";import{a as i,o as a}from"./iframe-DE_t8-kT.js";import{i as o,n as s,r as c,t as l}from"./Source-Dym3Y9iG.js";var u=e((()=>{r()}));function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{title:`React Activity Calendar/Upgrading to v3`}),`
`,(0,p.jsx)(t.h1,{id:`upgrading-to-v3`,children:`Upgrading to v3`}),`
`,(0,p.jsx)(t.p,{children:`Version 3 of React Activity Calendar introduces several breaking changes and a introduces a new
approach to tooltips. Follow the guide below to upgrade your project from v2 to v3.`}),`
`,(0,p.jsx)(t.h2,{id:`breaking-changes`,children:`Breaking changes`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`React Activity Calendar is now a
`,(0,p.jsx)(t.a,{href:`https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c`,rel:`nofollow`,children:`pure ESM package`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`The default export has been `,(0,p.jsx)(t.strong,{children:`removed`}),`. Use the named export instead:`,`
`,(0,p.jsx)(l,{code:`import { ActivityCalendar } from 'react-activity-calendar'`}),`
`]}),`
`,(0,p.jsxs)(t.li,{children:[`The `,(0,p.jsx)(t.code,{children:`eventHandlers`}),` prop has been `,(0,p.jsx)(t.strong,{children:`removed`}),`. Use the `,(0,p.jsx)(t.code,{children:`renderBlock`}),` prop with
`,(0,p.jsx)(t.code,{children:`React.cloneElement()`}),` to `,(0,p.jsx)(o,{kind:`react-activity-calendar`,name:`event-handlers`,children:`attach
event handlers`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`The `,(0,p.jsx)(t.code,{children:`totalCount`}),` prop has been `,(0,p.jsx)(t.strong,{children:`removed`}),`, overriding the total count is no longer supported.`]}),`
`,(0,p.jsxs)(t.li,{children:[`The `,(0,p.jsx)(t.code,{children:`hideColorLegend`}),` prop has been `,(0,p.jsx)(t.strong,{children:`renamed`}),` to `,(0,p.jsx)(t.code,{children:`showColorLegend`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`The `,(0,p.jsx)(t.code,{children:`hideMonthLabels`}),` prop has been `,(0,p.jsx)(t.strong,{children:`renamed`}),` to `,(0,p.jsx)(t.code,{children:`showMonthLabels`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`The `,(0,p.jsx)(t.code,{children:`hideTotalCount`}),` prop has been `,(0,p.jsx)(t.strong,{children:`renamed`}),` to `,(0,p.jsx)(t.code,{children:`showTotalCount`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`The `,(0,p.jsx)(t.code,{children:`<Skeleton />`}),` component has been `,(0,p.jsx)(t.strong,{children:`removed`}),`.`,(0,p.jsx)(`br`,{}),` Render the calendar with empty data in
its loading state instead:`,`
`,(0,p.jsx)(l,{code:`<ActivityCalendar data={[]} loading />`}),`
`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`tooltips`,children:`Tooltips`}),`
`,(0,p.jsxs)(t.p,{children:[`Tooltips no longer depend on external libraries and are now integrated directly into this package.
Thanks to code-splitting, tooltips only affect your bundle size when you use them. They are
implemented using the `,(0,p.jsx)(t.a,{href:`https://floating-ui.com/`,rel:`nofollow`,children:`Floating UI`}),` library as a “headless” component,
meaning they come without predefined styles. This gives you full control over the appearance:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Import the default styles provided by this package, `,(0,p.jsx)(t.strong,{children:`or`})]}),`
`,(0,p.jsx)(t.li,{children:`Add your own custom CSS.`}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`See the `,(0,p.jsx)(o,{kind:`react-activity-calendar`,name:`tooltips`,children:`tooltips`}),` page for details
and examples.`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),u(),a(),c(),s()}))();export{f as default};