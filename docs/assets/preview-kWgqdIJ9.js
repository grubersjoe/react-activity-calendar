import{N as e,j as d}from"./index-Dja51o-9.js";import{r as s}from"./index-CZMpeKRu.js";import{b as l}from"./index-B3aGVSpJ.js";import{D as n}from"./index-BwhLTrJS.js";import"./index-D-TIQtLp.js";import"./iframe-CRqfH5py.js";import"./index-BfiLiMku.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";const r={base:"light",brandTitle:"React Activity Calendar",brandUrl:"https://github.com/grubersjoe/react-activity-calendar"},a={fontBase:"ui-sans-serif, sans-serif",fontCode:"ui-monospace, monospace"},u=t=>{const i=window.matchMedia("(prefers-color-scheme: dark)").matches,[c,m]=s.useState(i?e.dark:e.light);return s.useEffect(()=>{const o=h=>{m(h?e.dark:e.light)};return t.context.channel.on(n,o),()=>{t.context.channel.removeListener(n,o)}},[t.context.channel]),d.jsx(l,{...t,theme:{...r,...c,...a}})},j={parameters:{docs:{toc:!0,container:u,source:{language:"tsx"}},darkMode:{stylePreview:!0,dark:{...r,...e.dark,...a},light:{...r,...e.light,...a}}}};export{j as default,j as preview};
