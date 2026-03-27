const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Tooltip-BLjIvbYQ.js","./chunk-BneVvdWh.js","./iframe-Cs11f8PI.js","./preload-helper-CV6hqhE5.js","./react-DqMRxE9T.js","./components-BMv56Vyw.js","./theming-4bZ9-qzC.js","./iframe-BJpTEOw-.css"])))=>i.map(i=>d[i]);
import{a as e,n as t}from"./chunk-BneVvdWh.js";import{n,t as r}from"./preload-helper-CV6hqhE5.js";import{_ as i,p as a,tt as o,v as s}from"./iframe-Cs11f8PI.js";import{i as c,n as l,r as u,t as d}from"./Source-mH2xURQE.js";import{_ as ee,a as f,c as te,d as ne,f as re,g as ie,h as ae,i as p,l as oe,m as se,n as ce,o as le,p as m,r as ue,s as h,u as de}from"./Tooltip-BLjIvbYQ.js";var g,_,fe=t((()=>{g=a(),_=({children:e})=>(0,g.jsx)(`div`,{style:{margin:`1rem 0 2rem`},children:e}),_.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),pe,me=t((()=>{pe=`<ActivityCalendar
  data={data}
  blockSize={14}
  blockRadius={7}
  blockMargin={5}
  fontSize={16}
  theme={{
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  }}
/>
`})),v,y=t((()=>{v=`import { cloneElement } from 'react'

<ActivityCalendar
  data={data}
  renderBlock: (block, activity) =>
    cloneElement(block, {
      onClick: () => {
        alert(JSON.stringify(activity))
      },
      onMouseEnter: () => {
        console.log('on mouse enter')
      },
    })
/>
`})),b,he=t((()=>{b=`import {
  ActivityCalendar,
  Props as CalendarProps,
} from 'react-activity-calendar'

// Shape of \`labels\` property (default values).
// All properties are optional.
const labels = {
  months: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  weekdays: [
    'Sun', // Sunday first!
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ],
  totalCount: '{{count}} activities in {{year}}',
  legend: {
    less: 'Less',
    more: 'More',
  },
} satisfies CalendarProps['labels']

<ActivityCalendar data={data} labels={labels} showWeekdayLabels />`})),x,ge=t((()=>{x=`<ActivityCalendar
  data={data}
  labels={{
    months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    totalCount: '{{count}} Aktivitäten in {{year}}',
    legend: {
      less: 'Weniger',
      more: 'Mehr',
    },
  }}
/>
`})),S,C=t((()=>{S=`import { useRef } from 'react'

const calendarRef = useRef<HTMLElement>(null)

if (calendar.current) {
  console.log(calendarRef.current)
}

<ActivityCalendar data={data} ref={calendarRef} />
`})),w,T=t((()=>{w=`<ActivityCalendar
  data={data}
  theme={{
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  }}
/>
`})),E,_e=t((()=>{E=`const explicitTheme: ThemeInput = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
}

<ActivityCalendar data={data} theme={explicitTheme} />

const minimalTheme: ThemeInput = {
  light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
  // for \`dark\` the default theme will be used
}

<ActivityCalendar data={data} theme={minimalTheme} />
`})),ve,ye=t((()=>{ve=`<ActivityCalendar
  data={data}
  tooltips={{
    activity: {
      text: activity => \`\${activity.level} activities on \${activity.date}\`,
      placement: 'right',
      offset: 6,
      hoverRestMs: 300,
      transitionStyles: {
        duration: 100,
        common: { fontFamily: 'monospace' },
      },
      withArrow: true,
    },
  }}
/>
`})),be,xe=t((()=>{be=`<ActivityCalendar
  data={data}
  tooltips={{
    activity: {
      text: activity => \`\${activity.level} activities on \${activity.date}\`
    },
    colorLegend: {
      text: level => \`Activity level \${level + 1}\`
    },
  }}
/>
`})),Se,Ce=t((()=>{Se=`.react-activity-calendar__tooltip {
  width: max-content;
  max-width: calc(100vw - 20px);
  padding: 0.2em 0.5em;
  border-radius: 0.25em;
  background-color: hsl(0 0% 10%);
  color: hsl(0 0% 94%);
  font-size: 13px;

  /* See the \`withArrow\` setting. */
  .react-activity-calendar__tooltip-arrow {
    fill: hsl(0 0% 10%);
  }

  /* Use this instead of a media query - the component theme can be set */
  /* independent of the system color scheme. */
  &[data-color-scheme='dark'] {
    background-color: hsl(0 0% 94%);
    color: hsl(0 0% 6%);

    .react-activity-calendar__tooltip-arrow {
      fill: hsl(0 0% 94%);
    }
  }
}
`}));function we(){let[e,t]=(0,D.useState)(()=>typeof window>`u`?`light`:window.matchMedia(O).matches?`dark`:`light`),n=e=>{t(e.matches?`dark`:`light`)};return(0,D.useEffect)(()=>{let e=window.matchMedia(O);return t(e.matches?`dark`:`light`),e.addEventListener(`change`,n),()=>{e.removeEventListener(`change`,n)}},[]),e}var D,O,Te=t((()=>{D=e(o(),1),O=`(prefers-color-scheme: dark)`}));function Ee(e,t){let[n,r]=(0,k.useState)(!1);return(0,k.useEffect)(()=>{let n=`oklab(from ${e} l a b)`,i=t===`light`?`oklab(from ${e} calc(l * 0.96) a b)`:`oklab(from ${e} calc(l * 1.08) a b)`,a=document.createElement(`style`);a.innerHTML=`
      @keyframes ${De} {
        0% {
          fill: ${n};
        }
        50% {
          fill: ${i};
        }
        100% {
          fill: ${n};
        }
      }
    `;let o=()=>{r(!0)};return document.head.appendChild(a),a.addEventListener(`load`,o),()=>{document.head.removeChild(a),a.removeEventListener(`load`,o),r(!1)}},[e,t]),n}var k,De,Oe=t((()=>{k=e(o(),1),m(),De=`${re}--loading-animation`}));function ke(){let[e,t]=(0,Ae.useState)(()=>typeof window>`u`?!0:window.matchMedia(je).matches);return(0,Ae.useEffect)(()=>{let e=window.matchMedia(je);t(e.matches);let n=e=>{t(e.matches)};return e.addEventListener(`change`,n),()=>{e.removeEventListener(`change`,n)}},[]),e}var Ae,je,Me=t((()=>{Ae=e(o(),1),je=`(prefers-reduced-motion: reduce)`}));function Ne(e,t=ne){return e.reduce((e,n,r)=>{let i=n.find(e=>e!==void 0);if(!i)throw Error(`Unexpected error: Week ${r+1} is empty.`);let a=t[ee(ae(i.date))];if(!a){let e=new Date(i.date).toLocaleString(`en-US`,{month:`short`});throw Error(`Unexpected error: undefined month label for ${e}.`)}let o=e[e.length-1];return r===0||o?.label!==a?[...e,{weekIndex:r,label:a}]:e},[]).filter(({weekIndex:t},n,r)=>n===0?r[1]&&r[1].weekIndex-t>=3:n===r.length-1?e.slice(t).length>=3:!0)}function Pe(e,t,n){if(e.length!==7)throw Error(`Exactly 7 labels, one for each weekday must be passed.`);return e.reduce((e,r,i)=>t.byDayIndex(i)?Math.max(e,Math.ceil(Fe(r,n).width)):e,0)}function Fe(e,t){if(typeof document>`u`||typeof window>`u`)return{width:0,height:0};if(t<1)throw RangeError(`fontSize must be positive`);if(e.length===0)return{width:0,height:0};let n=`http://www.w3.org/2000/svg`,r=document.createElementNS(n,`svg`);r.style.position=`absolute`,r.style.visibility=`hidden`,r.style.fontFamily=window.getComputedStyle(document.body).fontFamily,r.style.fontSize=`${t}px`;let i=document.createElementNS(n,`text`);i.textContent=e,r.appendChild(i),document.body.appendChild(r);let a=i.getBBox();return document.body.removeChild(r),{width:a.width,height:a.height}}function Ie(e,t){if(!e)return{byDayIndex:()=>!1,shouldShow:!1};if(e===!0)return{byDayIndex:e=>(7+e-t)%7%2!=0,shouldShow:!0};let n=[];for(let t of e){let e=Le[t.toLowerCase()];n[e]=!0}return{byDayIndex:e=>n[e]??!1,shouldShow:e.length>0}}var Le,Re=t((()=>{se(),m(),Le={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}}));function ze(e,t=5){let n=Be(t);return e?(Ve(e,t),e.light=e.light??n.light,e.dark=e.dark??n.dark,{light:He(e.light)?A(e.light,t):e.light,dark:He(e.dark)?A(e.dark,t):e.dark}):n}function Be(e){return{light:A([`hsl(0, 0%, 92%)`,`hsl(0, 0%, 26%)`],e),dark:A([`hsl(0, 0%, 22%)`,`hsl(0, 0%, 92%)`],e)}}function Ve(e,t){let n=`The number of colors is controlled by the "maxLevel" property.`;if(typeof e!=`object`||e.light===void 0&&e.dark===void 0)throw Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${t} colors respectively. ${n}`);if(e.light){let{length:r}=e.light;if(r!==2&&r!==t)throw Error(`theme.light must contain exactly 2 or ${t} colors, ${r} passed. ${n}`);for(let t of e.light)if(typeof window<`u`&&!CSS.supports(`color`,t))throw Error(`Invalid color "${t}" passed. All CSS color formats are accepted.`)}if(e.dark){let{length:r}=e.dark;if(r!==2&&r!==t)throw Error(`theme.dark must contain exactly 2 or ${t} colors, ${r} passed. ${n}`);for(let t of e.dark)if(typeof window<`u`&&!CSS.supports(`color`,t))throw Error(`Invalid color "${t}" passed. All CSS color formats are accepted.`)}}function A([e,t],n){return te(n).map(r=>{switch(r){case 0:return e;case n-1:return t;default:{let i=r/(n-1)*100;return`color-mix(in oklab, ${t} ${parseFloat(i.toFixed(2))}%, ${e})`}}})}function He(e){return e.length===2}var Ue=t((()=>{h()})),j,We=t((()=>{j={container:e=>({width:`max-content`,maxWidth:`100%`,display:`flex`,flexDirection:`column`,gap:`8px`,fontSize:`${e}px`}),scrollContainer:e=>({maxWidth:`100%`,overflowX:`auto`,overflowY:`hidden`,paddingTop:Math.ceil(.1*e)}),calendar:{display:`block`,overflow:`visible`},rect:e=>({stroke:e===`light`?`rgba(0, 0, 0, 0.08)`:`rgba(255, 255, 255, 0.04)`}),footer:{container:{display:`flex`,flexWrap:`wrap`,gap:`4px 16px`,whiteSpace:`nowrap`},legend:{marginLeft:`auto`,display:`flex`,alignItems:`center`,gap:`3px`}}}})),M,N,Ge,P,Ke=t((()=>{M=e(o(),1),se(),m(),Te(),Oe(),Me(),h(),Re(),Ue(),We(),ce(),N=a(),n(),Ge=(0,M.lazy)(()=>r(()=>import(`./Tooltip-BLjIvbYQ.js`).then(e=>(e.n(),e.t)).then(e=>({default:e.Tooltip})),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)),P=(0,M.forwardRef)(({data:e,blockMargin:t=4,blockRadius:n=2,blockSize:r=12,className:i,colorScheme:a,fontSize:o=14,labels:s,loading:c=!1,maxLevel:l=4,renderBlock:u,renderColorLegend:d,showColorLegend:ee=!0,showMonthLabels:ne=!0,showTotalCount:p=!0,showWeekdayLabels:se=!1,style:ce={},theme:m,tooltips:h={},weekStart:g=0},_)=>{let[fe,pe]=(0,M.useState)(!1);(0,M.useEffect)(()=>{pe(!0)},[]),l=Math.max(1,l);let me=ze(m,l+1),v=we(),y=a??v,b=me[y],he=Ee(b[0],y),x=!ke();if(c){if(x&&!he)return null;e=ue()}oe(e,l);let ge=e[0],S=ie(ae(ge.date)),C=le(e,g),w=Object.assign({},de,s),T=ne?o+8:0,E=Ie(se,g),_e=fe&&E.shouldShow?Pe(w.weekdays,E,o)+8:void 0;function ve(){return{width:C.length*(r+t)-t,height:T+(r+t)*7-t}}function ye(){return C.map((e,i)=>e.map((e,a)=>{if(!e)return null;let o=c&&x?{animation:`${De} 1.75s ease-in-out infinite`,animationDelay:`${i*20+a*20}ms`}:void 0,s=(0,N.jsx)(`rect`,{x:0,y:T+(r+t)*a,width:r,height:r,rx:n,ry:n,fill:b[e.level],"data-date":e.date,"data-level":e.level,style:{...j.rect(y),...o}}),l=u?u(s,e):s;return(0,N.jsx)(M.Fragment,{children:h.activity?(0,N.jsx)(M.Suspense,{fallback:l,children:(0,N.jsx)(Ge,{text:h.activity.text(e),colorScheme:y,placement:h.activity.placement??`top`,hoverRestMs:h.activity.hoverRestMs,offset:h.activity.offset,transitionStyles:h.activity.transitionStyles,withArrow:h.activity.withArrow,children:l})}):l},e.date)})).map((e,n)=>(0,N.jsx)(`g`,{transform:`translate(${(r+t)*n}, 0)`,children:e},n))}function be(){if(!p&&!ee)return null;let t=e.reduce((e,t)=>e+t.count,0);return(0,N.jsxs)(`footer`,{className:f(`footer`),style:{...j.footer.container,marginLeft:_e},children:[c&&(0,N.jsx)(`div`,{children:`\xA0`}),!c&&p&&(0,N.jsx)(`div`,{className:f(`count`),children:w.totalCount?w.totalCount.replace(`{{count}}`,String(t)).replace(`{{year}}`,String(S)):`${t} activities in ${S}`}),!c&&ee&&(0,N.jsxs)(`div`,{className:f(`legend-colors`),style:j.footer.legend,children:[(0,N.jsx)(`span`,{style:{marginRight:`0.4em`},children:w.legend.less}),te(l+1).map(e=>{let t=(0,N.jsx)(`svg`,{width:r,height:r,children:(0,N.jsx)(`rect`,{width:r,height:r,fill:b[e],rx:n,ry:n,style:j.rect(y)})},e),i=d?d(t,e):t;return(0,N.jsx)(M.Fragment,{children:h.colorLegend?(0,N.jsx)(M.Suspense,{fallback:i,children:(0,N.jsx)(Ge,{text:h.colorLegend.text(e),colorScheme:y,placement:h.colorLegend.placement??`bottom`,hoverRestMs:h.colorLegend.hoverRestMs,offset:h.colorLegend.offset,transitionStyles:h.colorLegend.transitionStyles,withArrow:h.colorLegend.withArrow,children:i})}):i},e)}),(0,N.jsx)(`span`,{style:{marginLeft:`0.4em`},children:w.legend.more})]})]})}function xe(){return E.shouldShow?(0,N.jsx)(`g`,{className:f(`legend-weekday`),children:te(7).map(e=>{let n=(e+g)%7;return E.byDayIndex(n)?(0,N.jsx)(`text`,{x:-8,y:T+(r+t)*e+r/2,dominantBaseline:`central`,textAnchor:`end`,fill:`currentColor`,children:w.weekdays[n]},e):null})}):null}function Se(){return ne?(0,N.jsx)(`g`,{className:f(`legend-month`),children:Ne(C,w.months).map(({label:e,weekIndex:n})=>(0,N.jsx)(`text`,{x:(r+t)*n,y:0,dominantBaseline:`hanging`,fill:`currentColor`,children:e},n))}):null}let{width:Ce,height:D}=ve();return(0,N.jsxs)(`article`,{ref:_,className:`${re} ${i??``}`.trim(),style:{...ce,...j.container(o)},children:[(0,N.jsx)(`div`,{className:f(`scroll-container`),style:j.scrollContainer(o),children:(0,N.jsxs)(`svg`,{width:Ce,height:D,viewBox:`0 0 ${Ce} ${D}`,className:f(`calendar`),style:{...j.calendar,marginLeft:_e},children:[!c&&xe(),!c&&Se(),ye()]})}),be()]})}),P.displayName=`ActivityCalendar`,P.__docgenInfo={description:``,methods:[],displayName:`ActivityCalendar`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  date: string
  count: number
  level: number
}`,signature:{properties:[{key:`date`,value:{name:`string`,required:!0}},{key:`count`,value:{name:`number`,required:!0}},{key:`level`,value:{name:`number`,required:!0}}]}}],raw:`Array<Activity>`},description:'List of calendar entries. Each `Activity` object requires an ISO 8601\n`date` string in the format `yyyy-MM-dd`, a `count` property with the\namount of tracked data, and a `level` property in the range `0-maxLevel`\nto specify activity intensity. The `maxLevel` prop defaults to 4.\n\nDates without corresponding entries are assumed to have no activity. This\nallows you to set arbitrary start and end dates for the calendar by passing\nempty entries as the first and last items.\n\nExample object:\n\n```\n{\n  date: "2021-02-20",\n  count: 16,\n  level: 3\n}\n```'},blockMargin:{required:!1,tsType:{name:`number`},description:`Margin between blocks in pixels.`,defaultValue:{value:`4`,computed:!1}},blockRadius:{required:!1,tsType:{name:`number`},description:`Border radius of blocks in pixels.`,defaultValue:{value:`2`,computed:!1}},blockSize:{required:!1,tsType:{name:`number`},description:`Block size in pixels.`,defaultValue:{value:`12`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Class name to add to the component container.`},colorScheme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:"Use the `'light'` or `'dark'` color scheme instead of the system one."},fontSize:{required:!1,tsType:{name:`number`},description:`Font size for text in pixels.`,defaultValue:{value:`14`,computed:!1}},labels:{required:!1,tsType:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{
  months: Array<string>
  weekdays: Array<string>
  totalCount: string
  legend: Partial<{
    less: string
    more: string
  }>
}`,signature:{properties:[{key:`months`,value:{name:`Array`,elements:[{name:`string`}],raw:`Array<string>`,required:!0}},{key:`weekdays`,value:{name:`Array`,elements:[{name:`string`}],raw:`Array<string>`,required:!0}},{key:`totalCount`,value:{name:`string`,required:!0}},{key:`legend`,value:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{
  less: string
  more: string
}`,signature:{properties:[{key:`less`,value:{name:`string`,required:!0}},{key:`more`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{
  less: string
  more: string
}>`,required:!0}}]}}],raw:`Partial<{
  months: Array<string>
  weekdays: Array<string>
  totalCount: string
  legend: Partial<{
    less: string
    more: string
  }>
}>`},description:"Localization strings for all calendar labels.\n\n`totalCount` supports the placeholders `{{count}}` and `{{year}}`."},maxLevel:{required:!1,tsType:{name:`number`},description:`Maximum activity level (zero-indexed). 4 by default, 0 means "no activity".`,defaultValue:{value:`4`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:"Toggle to display the calendar loading state. The `data` property is\nignored if set.",defaultValue:{value:`false`,computed:!1}},ref:{required:!1,tsType:{name:`ForwardedRef`,elements:[{name:`HTMLElement`}],raw:`ForwardedRef<HTMLElement>`},description:`Ref to access the calendar DOM node.`},renderBlock:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(block: BlockElement, activity: Activity) => ReactElement`,signature:{arguments:[{type:{name:`ReactElement`,elements:[{name:`intersection`,raw:`SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>`,elements:[{name:`SVGAttributes`,elements:[{name:`SVGRectElement`}],raw:`SVGAttributes<SVGRectElement>`},{name:`HTMLAttributes`,elements:[{name:`SVGRectElement`}],raw:`HTMLAttributes<SVGRectElement>`}]},{name:`JSXElementConstructor`,elements:[{name:`SVGRectElement`}],raw:`JSXElementConstructor<SVGRectElement>`}],raw:`ReactElement<
  SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>,
  JSXElementConstructor<SVGRectElement>
>`},name:`block`},{type:{name:`signature`,type:`object`,raw:`{
  date: string
  count: number
  level: number
}`,signature:{properties:[{key:`date`,value:{name:`string`,required:!0}},{key:`count`,value:{name:`number`,required:!0}},{key:`level`,value:{name:`number`,required:!0}}]}},name:`activity`}],return:{name:`ReactElement`}}},description:`Render prop for calendar blocks (activities). For example, useful to
attach event handlers or to wrap the element with a link. Use
\`React.cloneElement\` to pass additional props to the element if necessary.`},renderColorLegend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(block: BlockElement, level: number) => ReactElement`,signature:{arguments:[{type:{name:`ReactElement`,elements:[{name:`intersection`,raw:`SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>`,elements:[{name:`SVGAttributes`,elements:[{name:`SVGRectElement`}],raw:`SVGAttributes<SVGRectElement>`},{name:`HTMLAttributes`,elements:[{name:`SVGRectElement`}],raw:`HTMLAttributes<SVGRectElement>`}]},{name:`JSXElementConstructor`,elements:[{name:`SVGRectElement`}],raw:`JSXElementConstructor<SVGRectElement>`}],raw:`ReactElement<
  SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>,
  JSXElementConstructor<SVGRectElement>
>`},name:`block`},{type:{name:`number`},name:`level`}],return:{name:`ReactElement`}}},description:"Render prop for color legend blocks. Use `React.cloneElement` to pass\nadditional props to the element if necessary."},showColorLegend:{required:!1,tsType:{name:`boolean`},description:`Toggle to hide the color legend below the calendar.`,defaultValue:{value:`true`,computed:!1}},showMonthLabels:{required:!1,tsType:{name:`boolean`},description:`Toggle to hide the month labels above the calendar.`,defaultValue:{value:`true`,computed:!1}},showTotalCount:{required:!1,tsType:{name:`boolean`},description:`Toggle to hide the total count below the calendar.`,defaultValue:{value:`true`,computed:!1}},showWeekdayLabels:{required:!1,tsType:{name:`union`,raw:`boolean | Array<DayName>`,elements:[{name:`boolean`},{name:`Array`,elements:[{name:`union`,raw:`'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'`,elements:[{name:`literal`,value:`'sun'`},{name:`literal`,value:`'mon'`},{name:`literal`,value:`'tue'`},{name:`literal`,value:`'wed'`},{name:`literal`,value:`'thu'`},{name:`literal`,value:`'fri'`},{name:`literal`,value:`'sat'`}]}],raw:`Array<DayName>`}]},description:`Toggle to show weekday labels left to the calendar.
Alternatively, provide an array of ISO 8601 weekday names to display.
Example: \`['mon', 'wed', 'fri']\`.`,defaultValue:{value:`false`,computed:!1}},style:{required:!1,tsType:{name:`CSSProperties`},description:`Style object to pass to the component container.`,defaultValue:{value:`{}`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`| {
    light: ColorScale
    dark?: ColorScale
  }
| {
    light?: ColorScale
    dark: ColorScale
  }`,elements:[{name:`signature`,type:`object`,raw:`{
  light: ColorScale
  dark?: ColorScale
}`,signature:{properties:[{key:`light`,value:{name:`Array`,elements:[{name:`string`}],raw:`Array<Color>`,required:!0}},{key:`dark`,value:{name:`Array`,elements:[{name:`string`}],raw:`Array<Color>`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  light?: ColorScale
  dark: ColorScale
}`,signature:{properties:[{key:`light`,value:{name:`Array`,elements:[{name:`string`}],raw:`Array<Color>`,required:!0}},{key:`dark`,value:{name:`Array`,elements:[{name:`string`}],raw:`Array<Color>`,required:!0}}]}}]},description:`Set the calendar colors for the light and dark color schemes. Provide
all colors per scheme explicitly (5 by default) or specify exactly two colors
(the lowest and highest intensity) to calculate a single-hue scale. The
number of colors is controlled by the \`maxLevel\` property. Colors can be
specified in any valid CSS format.

At least one scheme's colors must be set. If undefined, the default
theme is used. By default, the calendar selects the current system color
scheme, but you can enforce a specific scheme with the \`colorScheme\` prop.

Example:

\`\`\`tsx
<ActivityCalendar
  data={data}
  theme={{
    light: ['hsl(0, 0%, 92%)', 'firebrick'],
    dark: ['#333', 'rgb(214, 16, 174)'],
  }}
/>
\`\`\``},tooltips:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  activity?: TooltipConfig & {
    text: (activity: Activity) => string
  }
  colorLegend?: TooltipConfig & {
    text: (level: number) => string
  }
}`,signature:{properties:[{key:`activity`,value:{name:`intersection`,raw:`TooltipConfig & {
  text: (activity: Activity) => string
}`,elements:[{name:`signature`,type:`object`,raw:`{
  placement?: Placement
  offset?: OffsetOptions
  transitionStyles?: UseTransitionStylesProps
  hoverRestMs?: UseHoverProps['restMs']
  withArrow?: boolean
}`,signature:{properties:[{key:`placement`,value:{name:`Placement`,required:!1}},{key:`offset`,value:{name:`OffsetOptions`,required:!1}},{key:`transitionStyles`,value:{name:`UseTransitionStylesProps`,required:!1}},{key:`hoverRestMs`,value:{name:`UseHoverProps['restMs']`,raw:`UseHoverProps['restMs']`,required:!1}},{key:`withArrow`,value:{name:`boolean`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{
  text: (activity: Activity) => string
}`,signature:{properties:[{key:`text`,value:{name:`signature`,type:`function`,raw:`(activity: Activity) => string`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  date: string
  count: number
  level: number
}`,signature:{properties:[{key:`date`,value:{name:`string`,required:!0}},{key:`count`,value:{name:`number`,required:!0}},{key:`level`,value:{name:`number`,required:!0}}]}},name:`activity`}],return:{name:`string`}},required:!0}}]}}],required:!1}},{key:`colorLegend`,value:{name:`intersection`,raw:`TooltipConfig & {
  text: (level: number) => string
}`,elements:[{name:`signature`,type:`object`,raw:`{
  placement?: Placement
  offset?: OffsetOptions
  transitionStyles?: UseTransitionStylesProps
  hoverRestMs?: UseHoverProps['restMs']
  withArrow?: boolean
}`,signature:{properties:[{key:`placement`,value:{name:`Placement`,required:!1}},{key:`offset`,value:{name:`OffsetOptions`,required:!1}},{key:`transitionStyles`,value:{name:`UseTransitionStylesProps`,required:!1}},{key:`hoverRestMs`,value:{name:`UseHoverProps['restMs']`,raw:`UseHoverProps['restMs']`,required:!1}},{key:`withArrow`,value:{name:`boolean`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{
  text: (level: number) => string
}`,signature:{properties:[{key:`text`,value:{name:`signature`,type:`function`,raw:`(level: number) => string`,signature:{arguments:[{type:{name:`number`},name:`level`}],return:{name:`string`}},required:!0}}]}}],required:!1}}]}},description:`Tooltips to display when hovering over activity blocks or the color legend
below the calendar. See the story for details about tooltip configuration.`,defaultValue:{value:`{}`,computed:!1}},weekStart:{required:!1,tsType:{name:`union`,raw:`0 | 1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:`Index of day to be used as start of week. 0 represents Sunday.`,defaultValue:{value:`0`,computed:!1}}}}})),qe=t((()=>{})),F,I,Je,L,Ye,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Xe,$,Ze;t((()=>{F=e(o(),1),u(),i(),fe(),me(),y(),he(),ge(),C(),T(),_e(),ye(),xe(),Ce(),l(),h(),Ke(),qe(),I=a(),Je={title:`React Activity Calendar`,component:P,argTypes:{data:{control:!1},blockMargin:{control:{type:`range`,min:0,max:20}},blockRadius:{control:{type:`range`,min:0,max:20}},blockSize:{control:{type:`range`,min:4,max:30,step:1}},colorScheme:{control:!1},fontSize:{control:{type:`range`,min:6,max:32,step:2}},maxLevel:{control:{type:`range`,min:1,max:10}},ref:{control:!1},showWeekdayLabels:{control:`boolean`},style:{control:!1},tooltips:{control:!1},weekStart:{options:[0,1,2,3,4,5,6],control:{type:`select`,labels:{0:`Sunday (0)`,1:`Monday (1)`,2:`Tuesday (2)`,3:`Wednesday (3)`,4:`Thursday (4)`,5:`Friday (5)`,6:`Saturday (6)`}}}},decorators:[(e,{args:t})=>(t.colorScheme=s()?`dark`:`light`,(0,I.jsx)(e,{}))],parameters:{controls:{sort:`requiredFirst`},layout:`centered`},tags:[`autodocs`]},L={blockMargin:4,blockRadius:2,blockSize:12,fontSize:14,loading:!1,maxLevel:4,showColorLegend:!0,showMonthLabels:!0,showTotalCount:!0,showWeekdayLabels:!1,weekStart:0},Ye={light:[`#f0f0f0`,`#c4edde`,`#7ac7c4`,`#f73859`,`#384259`],dark:[`hsl(0, 0%, 22%)`,`#4D455D`,`#7DB9B6`,`#F5E9CF`,`#E96479`]},R={args:L,render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,I.jsx)(P,{...e,data:t})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} />`}}}},z={args:{...L,data:[],loading:!0},parameters:{docs:{source:{code:`<ActivityCalendar data={data} loading />`}}}},B={args:{...L,maxLevel:2},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,I.jsxs)(_,{children:[(0,I.jsx)(`h1`,{children:`Activity levels`}),(0,I.jsx)(P,{...e,data:t,style:{margin:`1.5rem 0`}}),(0,I.jsxs)(`p`,{children:[`Use the`,` `,(0,I.jsx)(`code`,{children:(0,I.jsx)(`b`,{children:`maxLevel`})}),` `,`prop to control the number of activity levels. This value is zero indexed, where 0 represents no activity. `,(0,I.jsx)(`code`,{children:`maxLevel`}),` is 4 by default, so this results in 5 activity levels. Each activity level must be in the interval from 0 to`,` `,(0,I.jsx)(`code`,{children:`maxLevel`}),`.`]})]})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} maxLevel={2} loading />`}}}},V={args:L,render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel,interval:{start:new Date(2022,5,1),end:new Date(2023,4,31)}}),[e.maxLevel]),n=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel,interval:{start:new Date(2023,2,8),end:new Date(2023,7,1)}}),[e.maxLevel]),r=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel,interval:{start:new Date(2023,5,14),end:new Date(2023,6,17)}}),[e.maxLevel]);return(0,I.jsxs)(Xe,{children:[(0,I.jsx)(P,{...e,data:t,labels:{totalCount:`{{count}} activities in 2022 & 2023`}}),(0,I.jsx)(P,{...e,data:n}),(0,I.jsx)(P,{...e,data:r})]})}},H={args:{...L,theme:{light:[`hsl(0, 0%, 92%)`,`rebeccapurple`],dark:[`hsl(0, 0%, 22%)`,`hsl(225,92%,77%)`]}},parameters:{docs:{source:{code:E}}},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,I.jsxs)(_,{children:[(0,I.jsx)(`h1`,{children:`Color themes`}),(0,I.jsx)(P,{...e,data:t,style:{margin:`2rem 0`}}),(0,I.jsxs)(`p`,{children:[`Use the`,` `,(0,I.jsx)(`code`,{children:(0,I.jsx)(`b`,{children:`theme`})}),` `,`prop to configure the calendar colors for the light and dark`,` `,(0,I.jsx)(`a`,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme`,children:`color scheme`}),`. Provide all colors per scheme`,` `,(0,I.jsx)(c,{kind:`react-activity-calendar`,name:`explicit-themes`,children:`explicitly`}),` `,`(5 by default) or set exactly two colors (the lowest and highest intensity) to calculate a single-hue scale. For explicit themes the color count must match the number of activity levels, which is controlled by the`,` `,(0,I.jsx)(c,{kind:`react-activity-calendar`,name:`activity-levels`,children:(0,I.jsx)(`code`,{children:`maxLevel`})}),` `,`prop. Colors can be specified in any valid CSS format.`]}),(0,I.jsxs)(`p`,{children:[`At least one scheme's colors must be set. If undefined, the default theme is used. By default, the calendar selects the current system color scheme, but you can enforce a specific scheme with the`,` `,(0,I.jsx)(`a`,{href:`/?path=/docs/react-activity-calendar--docs`,children:(0,I.jsx)(`code`,{children:`colorScheme`})}),` `,`prop.`]}),(0,I.jsx)(d,{code:E,isDarkMode:s()})]})}},U={args:{...L,theme:Ye},parameters:{controls:{exclude:[`maxLevel`]},docs:{source:{code:w}}},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:4}),[]);return(0,I.jsxs)(_,{children:[(0,I.jsx)(`h1`,{children:`Explicit theme`}),(0,I.jsx)(`p`,{}),(0,I.jsxs)(`p`,{children:[`See the`,` `,(0,I.jsx)(c,{kind:`react-activity-calendar`,name:`color-themes`,children:`color themes`}),` `,`page for details how to use the `,(0,I.jsx)(`code`,{children:`theme`}),` prop.`]}),(0,I.jsx)(P,{...e,data:t,style:{marginTop:`2rem`}})]})}},W={args:{...L,blockSize:14,blockRadius:7,blockMargin:5,fontSize:16,theme:Ye},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,I.jsx)(P,{...e,data:t})},parameters:{controls:{exclude:[`maxLevel`]},docs:{source:{code:pe}}}},G={args:{...L,renderBlock:(e,t)=>(0,F.cloneElement)(e,{onClick:()=>{alert(JSON.stringify(t))},onMouseEnter:()=>{console.log(`on mouse enter`)}})},parameters:{docs:{source:{code:v}}},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,I.jsxs)(_,{children:[(0,I.jsx)(`h1`,{children:`Event Handlers`}),(0,I.jsxs)(`p`,{children:[`Use the`,` `,(0,I.jsx)(`code`,{children:(0,I.jsx)(`b`,{children:`renderBlock`})}),` `,`prop to attach event handlers to the SVG `,(0,I.jsx)(`code`,{children:`rect`}),` elements that represent calendar days. Click on any block below to see it in action.`]}),(0,I.jsx)(P,{...e,data:t,style:{margin:`2rem 0`}}),(0,I.jsxs)(`p`,{children:[`Use the `,(0,I.jsx)(`code`,{children:`React.cloneElement()`}),` function to assign the handlers:`]}),(0,I.jsx)(d,{code:v,isDarkMode:s()})]})}},K={args:{...L,tooltips:{activity:{text:e=>`${e.level} activities on ${e.date}`},colorLegend:{text:e=>`Activity level ${e+1}`}}},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,I.jsxs)(_,{children:[(0,I.jsx)(`h1`,{children:`Tooltips`}),(0,I.jsxs)(`p`,{children:[`Use the`,` `,(0,I.jsx)(`code`,{children:(0,I.jsx)(`b`,{children:`tooltips`})}),` `,`prop to show tooltips when hovering the calendar days or the color legend. Each tooltip's content is generated by a callback function, which receives either the activity data or level value of the hovered element.`]}),(0,I.jsx)(P,{...e,data:t,style:{margin:`2rem 0`}}),(0,I.jsxs)(`p`,{children:[`Tooltips no longer depend on external libraries and are now integrated directly into this package. Thanks to code-splitting, tooltips only affect your bundle size when you use them. Tooltips are implemented using the`,` `,(0,I.jsx)(`a`,{href:`https://floating-ui.com/`,children:`Floating UI`}),` library as a “headless” component, meaning they come `,(0,I.jsx)(`b`,{children:`without predefined styles`}),`. This gives you full control over the appearance:`]}),(0,I.jsxs)(`ul`,{children:[(0,I.jsxs)(`li`,{children:[`Import the default styles provided by this package, `,(0,I.jsx)(`b`,{children:`or`})]}),(0,I.jsx)(`li`,{children:`Add your own custom CSS.`})]}),(0,I.jsx)(d,{code:`import 'react-activity-calendar/tooltips.css';`,isDarkMode:s()}),(0,I.jsx)(d,{code:`/* Adapt to your needs */\n${Se}`,isDarkMode:s()}),(0,I.jsx)(`h2`,{children:`Tooltip configuration`}),(0,I.jsx)(`p`,{children:`You can configure the tooltips with the following optional settings:`}),(0,I.jsxs)(`ul`,{children:[(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`a`,{href:`https://floating-ui.com/docs/useFloating#placement`,children:`placement`}),` of the tooltip`]}),(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`a`,{href:`https://floating-ui.com/docs/offset#options`,children:`offset`}),` to the element in pixels (4 by default)`]}),(0,I.jsxs)(`li`,{children:[`the cursor “`,(0,I.jsx)(`a`,{href:`https://floating-ui.com/docs/useHover#restms`,children:`rest time`}),`” in milliseconds before opening a tooltip (150ms by default)`]}),(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`a`,{href:`https://floating-ui.com/docs/useTransition#usetransitionstyles-props`,children:`transition styles`}),` `,`to fine-tune CSS animations`]}),(0,I.jsx)(`li`,{children:`whether to draw an arrow (false by default)`})]}),(0,I.jsx)(d,{code:ve,isDarkMode:s()}),(0,I.jsx)(P,{...e,data:t,tooltips:{activity:{text:e=>`${e.level} activities on ${e.date}`,placement:`right`,offset:8,transitionStyles:{duration:100,common:{fontFamily:`monospace`}},hoverRestMs:300,withArrow:!0}},style:{margin:`2rem 0`}})]})},parameters:{docs:{source:{code:be}}}},q={args:{...L,showMonthLabels:!1,showColorLegend:!1,showTotalCount:!1},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,I.jsx)(P,{...e,data:t})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} showMonthLabels={false} showColorLegend={false} showTotalCount={false} />`}}}},J={args:{...L,showWeekdayLabels:!0},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,I.jsxs)(Xe,{children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)($,{code:`true`,children:`Show every second weekday (default)`}),(0,I.jsx)(P,{...e,data:t})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)($,{code:`['mon', 'fri']`,children:`Show specific days`}),(0,I.jsx)(P,{...e,data:t,showWeekdayLabels:[`mon`,`fri`]})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)($,{code:`['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']`,children:`Show every day`}),(0,I.jsx)(P,{...e,data:t,showWeekdayLabels:[`sun`,`mon`,`tue`,`wed`,`thu`,`fri`,`sat`]})]})]})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} showWeekdayLabels />`}}}},Y={args:{...L,showWeekdayLabels:!0,labels:{months:[`Jan`,`Feb`,`Mär`,`Apr`,`Mai`,`Jun`,`Jul`,`Aug`,`Sep`,`Okt`,`Nov`,`Dez`],weekdays:[`So`,`Mo`,`Di`,`Mi`,`Do`,`Fr`,`Sa`],totalCount:`{{count}} Aktivitäten in {{year}}`,legend:{less:`Weniger`,more:`Mehr`}}},parameters:{docs:{source:{code:x}}},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,I.jsxs)(_,{children:[(0,I.jsx)(`h1`,{children:`Localization`}),(0,I.jsx)(`p`,{children:`Example in German:`}),(0,I.jsx)(P,{...e,data:t,style:{margin:`2rem 0`}}),(0,I.jsx)(d,{code:b,isDarkMode:s()})]})}},X={args:{...L,weekStart:1},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,I.jsx)(P,{...e,data:t})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} weekStart={1} />`}}}},Z={args:L,parameters:{docs:{source:{code:`<ActivityCalendar data={data} />`}}},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,I.jsx)(`div`,{style:{width:480,maxWidth:`100%`,border:`dashed 1px #929292`},children:(0,I.jsx)(P,{...e,data:t})})}},Q={args:L,parameters:{docs:{source:{code:S}}},render:e=>{let t=(0,F.useMemo)(()=>p({maxLevel:e.maxLevel}),[e.maxLevel]),n=(0,F.useRef)(null);return(0,F.useEffect)(()=>{console.log(`calendar ref`,n)},[n]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(P,{...e,data:t,ref:n}),(0,I.jsx)(`br`,{}),(0,I.jsx)(`p`,{children:`Check the JavaScript console to see the ref logged.`})]})}},Xe=({children:e})=>(0,I.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`3rem`},children:e}),$=({children:e,code:t})=>(0,I.jsxs)(`div`,{role:`heading`,style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16,fontSize:16,fontWeight:`bolder`},children:[e,t&&(0,I.jsx)(`code`,{style:{fontSize:13,fontWeight:`normal`},children:t})]}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: defaultProps,
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} />'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    data: [],
    loading: true
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} loading />'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    maxLevel: 2
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    return <Container>
        <h1>Activity levels</h1>
        <ActivityCalendar {...args} data={data} style={{
        margin: '1.5rem 0'
      }} />
        <p>
          Use the{' '}
          <code>
            <b>maxLevel</b>
          </code>{' '}
          prop to control the number of activity levels. This value is zero indexed, where 0
          represents no activity. <code>maxLevel</code> is 4 by default, so this results in 5
          activity levels. Each activity level must be in the interval from 0 to{' '}
          <code>maxLevel</code>.
        </p>
      </Container>;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} maxLevel={2} loading />'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: defaultProps,
  render: args => {
    const dataLong = useMemo(() => generateTestData({
      maxLevel: args.maxLevel,
      interval: {
        start: new Date(2022, 5, 1),
        end: new Date(2023, 4, 31)
      }
    }), [args.maxLevel]);
    const dataMedium = useMemo(() => generateTestData({
      maxLevel: args.maxLevel,
      interval: {
        start: new Date(2023, 2, 8),
        end: new Date(2023, 7, 1)
      }
    }), [args.maxLevel]);
    const dataShort = useMemo(() => generateTestData({
      maxLevel: args.maxLevel,
      interval: {
        start: new Date(2023, 5, 14),
        end: new Date(2023, 6, 17)
      }
    }), [args.maxLevel]);
    return <Stack>
        <ActivityCalendar {...args} data={dataLong} labels={{
        totalCount: '{{count}} activities in 2022 & 2023'
      }} />
        <ActivityCalendar {...args} data={dataMedium} />
        <ActivityCalendar {...args} data={dataShort} />
      </Stack>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    theme: {
      light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
      dark: ['hsl(0, 0%, 22%)', 'hsl(225,92%,77%)']
    }
  },
  parameters: {
    docs: {
      source: {
        code: exampleTheme
      }
    }
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    return <Container>
        <h1>Color themes</h1>
        <ActivityCalendar {...args} data={data} style={{
        margin: '2rem 0'
      }} />
        <p>
          Use the{' '}
          <code>
            <b>theme</b>
          </code>{' '}
          prop to configure the calendar colors for the light and dark{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme">color scheme</a>.
          Provide all colors per scheme{' '}
          <LinkTo kind="react-activity-calendar" name="explicit-themes">
            explicitly
          </LinkTo>{' '}
          (5 by default) or set exactly two colors (the lowest and highest intensity) to calculate a
          single-hue scale. For explicit themes the color count must match the number of activity
          levels, which is controlled by the{' '}
          <LinkTo kind="react-activity-calendar" name="activity-levels">
            <code>maxLevel</code>
          </LinkTo>{' '}
          prop. Colors can be specified in any valid CSS format.
        </p>
        <p>
          At least one scheme's colors must be set. If undefined, the default theme is used. By
          default, the calendar selects the current system color scheme, but you can enforce a
          specific scheme with the{' '}
          <a href="/?path=/docs/react-activity-calendar--docs">
            <code>colorScheme</code>
          </a>{' '}
          prop.
        </p>
        <Source code={exampleTheme} isDarkMode={useDarkMode()} />
      </Container>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    theme: explicitTheme
  },
  parameters: {
    // maxLevel cannot be used for a static explicit theme
    controls: {
      exclude: ['maxLevel']
    },
    docs: {
      source: {
        code: exampleThemeExplicit
      }
    }
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: 4
    }), []);
    return <Container>
        <h1>Explicit theme</h1>
        <p></p>
        <p>
          See the{' '}
          <LinkTo kind="react-activity-calendar" name="color-themes">
            color themes
          </LinkTo>{' '}
          page for details how to use the <code>theme</code> prop.
        </p>
        <ActivityCalendar {...args} data={data} style={{
        marginTop: '2rem'
      }} />
      </Container>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    blockSize: 14,
    blockRadius: 7,
    blockMargin: 5,
    fontSize: 16,
    theme: explicitTheme
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    // maxLevel cannot be used for a static explicit theme
    controls: {
      exclude: ['maxLevel']
    },
    docs: {
      source: {
        code: exampleCustomization
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    renderBlock: (block, activity) => cloneElement(block, {
      onClick: () => {
        alert(JSON.stringify(activity));
      },
      onMouseEnter: () => {
        // eslint-disable-next-line no-console
        console.log('on mouse enter');
      }
    })
  },
  parameters: {
    docs: {
      source: {
        code: exampleEventHandlers
      }
    }
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    return <Container>
        <h1>Event Handlers</h1>
        <p>
          Use the{' '}
          <code>
            <b>renderBlock</b>
          </code>{' '}
          prop to attach event handlers to the SVG <code>rect</code> elements that represent
          calendar days. Click on any block below to see it in action.
        </p>
        <ActivityCalendar {...args} data={data} style={{
        margin: '2rem 0'
      }} />
        <p>
          Use the <code>React.cloneElement()</code> function to assign the handlers:
        </p>
        <Source code={exampleEventHandlers} isDarkMode={useDarkMode()} />
      </Container>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    tooltips: {
      activity: {
        text: activity => \`\${activity.level} activities on \${activity.date}\`
      },
      colorLegend: {
        text: level => \`Activity level \${level + 1}\`
      }
    }
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    return <Container>
        <h1>Tooltips</h1>
        <p>
          Use the{' '}
          <code>
            <b>tooltips</b>
          </code>{' '}
          prop to show tooltips when hovering the calendar days or the color legend. Each tooltip's
          content is generated by a callback function, which receives either the activity data or
          level value of the hovered element.
        </p>
        <ActivityCalendar {...args} data={data} style={{
        margin: '2rem 0'
      }} />
        <p>
          Tooltips no longer depend on external libraries and are now integrated directly into this
          package. Thanks to code-splitting, tooltips only affect your bundle size when you use
          them. Tooltips are implemented using the{' '}
          <a href="https://floating-ui.com/">Floating UI</a> library as a “headless” component,
          meaning they come <b>without predefined styles</b>. This gives you full control over the
          appearance:
        </p>
        <ul>
          <li>
            Import the default styles provided by this package, <b>or</b>
          </li>
          <li>Add your own custom CSS.</li>
        </ul>
        <Source code="import 'react-activity-calendar/tooltips.css';" isDarkMode={useDarkMode()} />
        <Source code={\`/* Adapt to your needs */\\n\${exampleTooltipsCSS}\`} isDarkMode={useDarkMode()} />

        <h2>Tooltip configuration</h2>
        <p>You can configure the tooltips with the following optional settings:</p>
        <ul>
          <li>
            <a href="https://floating-ui.com/docs/useFloating#placement">placement</a> of the
            tooltip
          </li>
          <li>
            <a href="https://floating-ui.com/docs/offset#options">offset</a> to the element in
            pixels (4 by default)
          </li>
          <li>
            the cursor “<a href="https://floating-ui.com/docs/useHover#restms">rest time</a>” in
            milliseconds before opening a tooltip (150ms by default)
          </li>
          <li>
            <a href="https://floating-ui.com/docs/useTransition#usetransitionstyles-props">
              transition styles
            </a>{' '}
            to fine-tune CSS animations
          </li>
          <li>whether to draw an arrow (false by default)</li>
        </ul>
        <Source code={exampleTooltipsConfig} isDarkMode={useDarkMode()} />
        <ActivityCalendar {...args} data={data} tooltips={{
        activity: {
          text: activity => \`\${activity.level} activities on \${activity.date}\`,
          placement: 'right',
          offset: 8,
          transitionStyles: {
            duration: 100,
            common: {
              fontFamily: 'monospace'
            }
          },
          hoverRestMs: 300,
          withArrow: true
        }
      }} style={{
        margin: '2rem 0'
      }} />
      </Container>;
  },
  parameters: {
    docs: {
      source: {
        code: exampleTooltips
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showMonthLabels: false,
    showColorLegend: false,
    showTotalCount: false
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} showMonthLabels={false} showColorLegend={false} showTotalCount={false} />'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showWeekdayLabels: true
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    return <Stack>
        <div>
          <StackHeading code="true">Show every second weekday (default)</StackHeading>
          <ActivityCalendar {...args} data={data} />
        </div>

        <div>
          <StackHeading code="['mon', 'fri']">Show specific days</StackHeading>
          <ActivityCalendar {...args} data={data} showWeekdayLabels={['mon', 'fri']} />
        </div>

        <div>
          <StackHeading code="['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']">
            Show every day
          </StackHeading>
          <ActivityCalendar {...args} data={data} showWeekdayLabels={['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']} />
        </div>
      </Stack>;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} showWeekdayLabels />'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showWeekdayLabels: true,
    labels: {
      months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      totalCount: '{{count}} Aktivitäten in {{year}}',
      legend: {
        less: 'Weniger',
        more: 'Mehr'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        code: exampleLabels
      }
    }
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    return <Container>
        <h1>Localization</h1>
        <p>Example in German:</p>
        <ActivityCalendar {...args} data={data} style={{
        margin: '2rem 0'
      }} />
        <Source code={exampleLabelsShape} isDarkMode={useDarkMode()} />
      </Container>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    weekStart: 1
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} weekStart={1} />'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: defaultProps,
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} />'
      }
    }
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    return <div style={{
      width: 480,
      maxWidth: '100%',
      border: 'dashed 1px #929292'
    }}>
        <ActivityCalendar {...args} data={data} />
      </div>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: defaultProps,
  parameters: {
    docs: {
      source: {
        code: exampleRef
      }
    }
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      maxLevel: args.maxLevel
    }), [args.maxLevel]);
    const calendarRef = useRef<HTMLElement>(null);
    useEffect(() => {
      // eslint-disable-next-line no-console
      console.log('calendar ref', calendarRef);
    }, [calendarRef]);
    return <>
        <ActivityCalendar {...args} data={data} ref={calendarRef} />
        <br />
        <p>Check the JavaScript console to see the ref logged.</p>
      </>;
  }
}`,...Q.parameters?.docs?.source}}},Ze=[`Default`,`Loading`,`ActivityLevels`,`DateRanges`,`ColorThemes`,`ExplicitThemes`,`Customization`,`EventHandlers`,`Tooltips`,`WithoutLabels`,`WeekdayLabels`,`LocalizedLabels`,`MondayAsWeekStart`,`NarrowScreens`,`ContainerRef`]}))();export{B as ActivityLevels,H as ColorThemes,Q as ContainerRef,W as Customization,V as DateRanges,R as Default,G as EventHandlers,U as ExplicitThemes,z as Loading,Y as LocalizedLabels,X as MondayAsWeekStart,Z as NarrowScreens,K as Tooltips,J as WeekdayLabels,q as WithoutLabels,Ze as __namedExportsOrder,Je as default};