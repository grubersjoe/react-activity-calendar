const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Tooltip-B-sB60zi.js","./Tooltip-f-vvlv1L.js","./chunk-BneVvdWh.js","./react-dom-E4_F96WB.js","./react-B_0iYUWB.js","./jsx-runtime-D16BNjX-.js"])))=>i.map(i=>d[i]);
import{a as e,n as t}from"./chunk-BneVvdWh.js";import{n,t as r}from"./preload-helper-CV6hqhE5.js";import{t as i}from"./react-B_0iYUWB.js";import{t as a}from"./jsx-runtime-D16BNjX-.js";import{l as o,u as s}from"./iframe-DE_t8-kT.js";import{i as c,n as l,r as ee,t as u}from"./Source-Dym3Y9iG.js";import{_ as te,a as d,c as ne,d as re,f as ie,g as ae,h as oe,i as f,l as se,m as ce,n as le,o as ue,p,r as de,s as m,u as fe}from"./Tooltip-f-vvlv1L.js";var h,g,pe=t((()=>{h=a(),g=({children:e})=>(0,h.jsx)(`div`,{style:{margin:`1rem 0 2rem`},children:e}),g.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),_,me=t((()=>{_=`.react-activity-calendar__tooltip {
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
`})),he,v=t((()=>{he=`<ActivityCalendar
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
`})),y,ge=t((()=>{y=`import { cloneElement } from 'react'

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
`})),b,_e=t((()=>{b=`import {
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

<ActivityCalendar data={data} labels={labels} showWeekdayLabels />`})),x,S=t((()=>{x=`<ActivityCalendar
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
`})),C,w=t((()=>{C=`import { useRef } from 'react'

const calendarRef = useRef<HTMLElement>(null)

if (calendar.current) {
  console.log(calendarRef.current)
}

<ActivityCalendar data={data} ref={calendarRef} />
`})),T,ve=t((()=>{T=`<ActivityCalendar
  data={data}
  theme={{
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  }}
/>
`})),E,ye=t((()=>{E=`const explicitTheme: ThemeInput = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
}

<ActivityCalendar data={data} theme={explicitTheme} />

const minimalTheme: ThemeInput = {
  light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
  // for \`dark\` the default theme will be used
}

<ActivityCalendar data={data} theme={minimalTheme} />
`})),be,xe=t((()=>{be=`<ActivityCalendar
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
`})),Se,Ce=t((()=>{Se=`<ActivityCalendar
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
`}));function we(){let[e,t]=(0,D.useState)(()=>typeof window>`u`?`light`:window.matchMedia(Te).matches?`dark`:`light`),n=e=>{t(e.matches?`dark`:`light`)};return(0,D.useEffect)(()=>{let e=window.matchMedia(Te);return t(e.matches?`dark`:`light`),e.addEventListener(`change`,n),()=>{e.removeEventListener(`change`,n)}},[]),e}var D,Te,Ee=t((()=>{D=e(i(),1),Te=`(prefers-color-scheme: dark)`}));function De(e,t){let[n,r]=(0,Oe.useState)(!1);return(0,Oe.useEffect)(()=>{let n=`oklab(from ${e} l a b)`,i=t===`light`?`oklab(from ${e} calc(l * 0.96) a b)`:`oklab(from ${e} calc(l * 1.08) a b)`,a=document.createElement(`style`);a.innerHTML=`
      @keyframes ${O} {
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
    `;let o=()=>{r(!0)};return document.head.appendChild(a),a.addEventListener(`load`,o),()=>{document.head.removeChild(a),a.removeEventListener(`load`,o),r(!1)}},[e,t]),n}var Oe,O,ke=t((()=>{Oe=e(i(),1),p(),O=`${ie}--loading-animation`}));function Ae(){let[e,t]=(0,je.useState)(()=>typeof window>`u`?!0:window.matchMedia(Me).matches);return(0,je.useEffect)(()=>{let e=window.matchMedia(Me);t(e.matches);let n=e=>{t(e.matches)};return e.addEventListener(`change`,n),()=>{e.removeEventListener(`change`,n)}},[]),e}var je,Me,Ne=t((()=>{je=e(i(),1),Me=`(prefers-reduced-motion: reduce)`}));function Pe(e,t=re){return e.reduce((e,n,r)=>{let i=n.find(e=>e!==void 0);if(!i)throw Error(`Unexpected error: Week ${r+1} is empty.`);let a=t[te(oe(i.date))];if(!a){let e=new Date(i.date).toLocaleString(`en-US`,{month:`short`});throw Error(`Unexpected error: undefined month label for ${e}.`)}let o=e[e.length-1];return r===0||o?.label!==a?[...e,{weekIndex:r,label:a}]:e},[]).filter(({weekIndex:t},n,r)=>n===0?r[1]&&r[1].weekIndex-t>=3:n===r.length-1?e.slice(t).length>=3:!0)}function Fe(e,t,n){if(e.length!==7)throw Error(`Exactly 7 labels, one for each weekday must be passed.`);return e.reduce((e,r,i)=>t.byDayIndex(i)?Math.max(e,Math.ceil(Ie(r,n).width)):e,0)}function Ie(e,t){if(typeof document>`u`||typeof window>`u`)return{width:0,height:0};if(t<1)throw RangeError(`fontSize must be positive`);if(e.length===0)return{width:0,height:0};let n=`http://www.w3.org/2000/svg`,r=document.createElementNS(n,`svg`);r.style.position=`absolute`,r.style.visibility=`hidden`,r.style.fontFamily=window.getComputedStyle(document.body).fontFamily,r.style.fontSize=`${t}px`;let i=document.createElementNS(n,`text`);i.textContent=e,r.appendChild(i),document.body.appendChild(r);let a=i.getBBox();return document.body.removeChild(r),{width:a.width,height:a.height}}function Le(e,t){if(!e)return{byDayIndex:()=>!1,shouldShow:!1};if(e===!0)return{byDayIndex:e=>(7+e-t)%7%2!=0,shouldShow:!0};let n=[];for(let t of e){let e=Re[t.toLowerCase()];n[e]=!0}return{byDayIndex:e=>n[e]??!1,shouldShow:e.length>0}}var Re,ze=t((()=>{ce(),p(),Re={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}}));function Be(e,t=5){let n=Ve(t);return e?(He(e,t),e.light=e.light??n.light,e.dark=e.dark??n.dark,{light:Ue(e.light)?k(e.light,t):e.light,dark:Ue(e.dark)?k(e.dark,t):e.dark}):n}function Ve(e){return{light:k([`hsl(0, 0%, 92%)`,`hsl(0, 0%, 26%)`],e),dark:k([`hsl(0, 0%, 22%)`,`hsl(0, 0%, 92%)`],e)}}function He(e,t){let n=`The number of colors is controlled by the "maxLevel" property.`;if(typeof e!=`object`||e.light===void 0&&e.dark===void 0)throw Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${t} colors respectively. ${n}`);if(e.light){let{length:r}=e.light;if(r!==2&&r!==t)throw Error(`theme.light must contain exactly 2 or ${t} colors, ${r} passed. ${n}`);for(let t of e.light)if(typeof window<`u`&&!CSS.supports(`color`,t))throw Error(`Invalid color "${t}" passed. All CSS color formats are accepted.`)}if(e.dark){let{length:r}=e.dark;if(r!==2&&r!==t)throw Error(`theme.dark must contain exactly 2 or ${t} colors, ${r} passed. ${n}`);for(let t of e.dark)if(typeof window<`u`&&!CSS.supports(`color`,t))throw Error(`Invalid color "${t}" passed. All CSS color formats are accepted.`)}}function k([e,t],n){return ne(n).map(r=>{switch(r){case 0:return e;case n-1:return t;default:{let i=r/(n-1)*100;return`color-mix(in oklab, ${t} ${parseFloat(i.toFixed(2))}%, ${e})`}}})}function Ue(e){return e.length===2}var We=t((()=>{m()})),A,Ge=t((()=>{A={container:e=>({width:`max-content`,maxWidth:`100%`,display:`flex`,flexDirection:`column`,gap:`8px`,fontSize:`${e}px`}),scrollContainer:e=>({maxWidth:`100%`,overflowX:`auto`,overflowY:`hidden`,paddingTop:Math.ceil(.1*e)}),calendar:{display:`block`,overflow:`visible`},rect:e=>({stroke:e===`light`?`rgba(0, 0, 0, 0.08)`:`rgba(255, 255, 255, 0.04)`}),footer:{container:{display:`flex`,flexWrap:`wrap`,gap:`4px 16px`,whiteSpace:`nowrap`},legend:{marginLeft:`auto`,display:`flex`,alignItems:`center`,gap:`3px`}}}})),j,M,Ke,N,qe=t((()=>{j=e(i(),1),ce(),p(),Ee(),ke(),Ne(),m(),ze(),We(),Ge(),le(),M=a(),n(),Ke=(0,j.lazy)(()=>r(()=>import(`./Tooltip-B-sB60zi.js`).then(e=>({default:e.Tooltip})),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),N=(0,j.forwardRef)(({data:e,blockMargin:t=4,blockRadius:n=2,blockSize:r=12,className:i,colorScheme:a,fontSize:o=14,labels:s,loading:c=!1,maxLevel:l=4,renderBlock:ee,renderColorLegend:u,showColorLegend:te=!0,showMonthLabels:re=!0,showTotalCount:f=!0,showWeekdayLabels:ce=!1,style:le={},theme:p,tooltips:m={},weekStart:h=0},g)=>{let[pe,_]=(0,j.useState)(!1);(0,j.useEffect)(()=>{_(!0)},[]),l=Math.max(1,l);let me=Be(p,l+1),he=we(),v=a??he,y=me[v],ge=De(y[0],v),b=!Ae();if(c){if(b&&!ge)return null;e=de()}se(e,l);let _e=e[0],x=ae(oe(_e.date)),S=ue(e,h),C=Object.assign({},fe,s),w=re?o+8:0,T=Le(ce,h),ve=pe&&T.shouldShow?Fe(C.weekdays,T,o)+8:void 0;function E(){return{width:S.length*(r+t)-t,height:w+(r+t)*7-t}}function ye(){return S.map((e,i)=>e.map((e,a)=>{if(!e)return null;let o=c&&b?{animation:`${O} 1.75s ease-in-out infinite`,animationDelay:`${i*20+a*20}ms`}:void 0,s=(0,M.jsx)(`rect`,{x:0,y:w+(r+t)*a,width:r,height:r,rx:n,ry:n,fill:y[e.level],"data-date":e.date,"data-level":e.level,style:{...A.rect(v),...o}}),l=ee?ee(s,e):s;return(0,M.jsx)(j.Fragment,{children:m.activity?(0,M.jsx)(j.Suspense,{fallback:l,children:(0,M.jsx)(Ke,{text:m.activity.text(e),colorScheme:v,placement:m.activity.placement??`top`,hoverRestMs:m.activity.hoverRestMs,offset:m.activity.offset,transitionStyles:m.activity.transitionStyles,withArrow:m.activity.withArrow,children:l})}):l},e.date)})).map((e,n)=>(0,M.jsx)(`g`,{transform:`translate(${(r+t)*n}, 0)`,children:e},n))}function be(){if(!f&&!te)return null;let t=e.reduce((e,t)=>e+t.count,0);return(0,M.jsxs)(`footer`,{className:d(`footer`),style:{...A.footer.container,marginLeft:ve},children:[c&&(0,M.jsx)(`div`,{children:`\xA0`}),!c&&f&&(0,M.jsx)(`div`,{className:d(`count`),children:C.totalCount?C.totalCount.replace(`{{count}}`,String(t)).replace(`{{year}}`,String(x)):`${t} activities in ${x}`}),!c&&te&&(0,M.jsxs)(`div`,{className:d(`legend-colors`),style:A.footer.legend,children:[(0,M.jsx)(`span`,{style:{marginRight:`0.4em`},children:C.legend.less}),ne(l+1).map(e=>{let t=(0,M.jsx)(`svg`,{width:r,height:r,children:(0,M.jsx)(`rect`,{width:r,height:r,fill:y[e],rx:n,ry:n,style:A.rect(v)})},e),i=u?u(t,e):t;return(0,M.jsx)(j.Fragment,{children:m.colorLegend?(0,M.jsx)(j.Suspense,{fallback:i,children:(0,M.jsx)(Ke,{text:m.colorLegend.text(e),colorScheme:v,placement:m.colorLegend.placement??`bottom`,hoverRestMs:m.colorLegend.hoverRestMs,offset:m.colorLegend.offset,transitionStyles:m.colorLegend.transitionStyles,withArrow:m.colorLegend.withArrow,children:i})}):i},e)}),(0,M.jsx)(`span`,{style:{marginLeft:`0.4em`},children:C.legend.more})]})]})}function xe(){return T.shouldShow?(0,M.jsx)(`g`,{className:d(`legend-weekday`),children:ne(7).map(e=>{let n=(e+h)%7;return T.byDayIndex(n)?(0,M.jsx)(`text`,{x:-8,y:w+(r+t)*e+r/2,dominantBaseline:`central`,textAnchor:`end`,fill:`currentColor`,children:C.weekdays[n]},e):null})}):null}function Se(){return re?(0,M.jsx)(`g`,{className:d(`legend-month`),children:Pe(S,C.months).map(({label:e,weekIndex:n})=>(0,M.jsx)(`text`,{x:(r+t)*n,y:0,dominantBaseline:`hanging`,fill:`currentColor`,children:e},n))}):null}let{width:Ce,height:D}=E();return(0,M.jsxs)(`article`,{ref:g,className:`${ie} ${i??``}`.trim(),style:{...le,...A.container(o)},children:[(0,M.jsx)(`div`,{className:d(`scroll-container`),style:A.scrollContainer(o),children:(0,M.jsxs)(`svg`,{width:Ce,height:D,viewBox:`0 0 ${Ce} ${D}`,className:d(`calendar`),style:{...A.calendar,marginLeft:ve},children:[!c&&xe(),!c&&Se(),ye()]})}),be()]})}),N.displayName=`ActivityCalendar`,N.__docgenInfo={description:``,methods:[],displayName:`ActivityCalendar`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
below the calendar. See the story for details about tooltip configuration.`,defaultValue:{value:`{}`,computed:!1}},weekStart:{required:!1,tsType:{name:`union`,raw:`0 | 1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:`Index of day to be used as start of week. 0 represents Sunday.`,defaultValue:{value:`0`,computed:!1}}}}})),Je=t((()=>{})),P,F,Ye,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Xe,$,Ze;t((()=>{P=e(i(),1),ee(),o(),pe(),me(),v(),ge(),_e(),S(),w(),ve(),ye(),xe(),Ce(),l(),m(),qe(),Je(),F=a(),Ye={title:`React Activity Calendar`,component:N,argTypes:{data:{control:!1},blockMargin:{control:{type:`range`,min:0,max:20}},blockRadius:{control:{type:`range`,min:0,max:20}},blockSize:{control:{type:`range`,min:4,max:30,step:1}},colorScheme:{control:!1},fontSize:{control:{type:`range`,min:6,max:32,step:2}},maxLevel:{control:{type:`range`,min:1,max:10}},ref:{control:!1},showWeekdayLabels:{control:`boolean`},style:{control:!1},tooltips:{control:!1},weekStart:{options:[0,1,2,3,4,5,6],control:{type:`select`,labels:{0:`Sunday (0)`,1:`Monday (1)`,2:`Tuesday (2)`,3:`Wednesday (3)`,4:`Thursday (4)`,5:`Friday (5)`,6:`Saturday (6)`}}}},decorators:[(e,{args:t})=>(t.colorScheme=s()?`dark`:`light`,(0,F.jsx)(e,{}))],parameters:{controls:{sort:`requiredFirst`},layout:`centered`},tags:[`autodocs`]},I={blockMargin:4,blockRadius:2,blockSize:12,fontSize:14,loading:!1,maxLevel:4,showColorLegend:!0,showMonthLabels:!0,showTotalCount:!0,showWeekdayLabels:!1,weekStart:0},L={light:[`#f0f0f0`,`#c4edde`,`#7ac7c4`,`#f73859`,`#384259`],dark:[`hsl(0, 0%, 22%)`,`#4D455D`,`#7DB9B6`,`#F5E9CF`,`#E96479`]},R={args:I,render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,F.jsx)(N,{...e,data:t})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} />`}}}},z={args:{...I,data:[],loading:!0},parameters:{docs:{source:{code:`<ActivityCalendar data={data} loading />`}}}},B={args:{...I,maxLevel:2},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,F.jsxs)(g,{children:[(0,F.jsx)(`h1`,{children:`Activity levels`}),(0,F.jsx)(N,{...e,data:t,style:{margin:`1.5rem 0`}}),(0,F.jsxs)(`p`,{children:[`Use the`,` `,(0,F.jsx)(`code`,{children:(0,F.jsx)(`b`,{children:`maxLevel`})}),` `,`prop to control the number of activity levels. This value is zero indexed, where 0 represents no activity. `,(0,F.jsx)(`code`,{children:`maxLevel`}),` is 4 by default, so this results in 5 activity levels. Each activity level must be in the interval from 0 to`,` `,(0,F.jsx)(`code`,{children:`maxLevel`}),`.`]})]})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} maxLevel={2} loading />`}}}},V={args:I,render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel,interval:{start:new Date(2022,5,1),end:new Date(2023,4,31)}}),[e.maxLevel]),n=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel,interval:{start:new Date(2023,2,8),end:new Date(2023,7,1)}}),[e.maxLevel]),r=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel,interval:{start:new Date(2023,5,14),end:new Date(2023,6,17)}}),[e.maxLevel]);return(0,F.jsxs)(Xe,{children:[(0,F.jsx)(N,{...e,data:t,labels:{totalCount:`{{count}} activities in 2022 & 2023`}}),(0,F.jsx)(N,{...e,data:n}),(0,F.jsx)(N,{...e,data:r})]})}},H={args:{...I,theme:{light:[`hsl(0, 0%, 92%)`,`rebeccapurple`],dark:[`hsl(0, 0%, 22%)`,`hsl(225,92%,77%)`]}},parameters:{docs:{source:{code:E}}},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,F.jsxs)(g,{children:[(0,F.jsx)(`h1`,{children:`Color themes`}),(0,F.jsx)(N,{...e,data:t,style:{margin:`2rem 0`}}),(0,F.jsxs)(`p`,{children:[`Use the`,` `,(0,F.jsx)(`code`,{children:(0,F.jsx)(`b`,{children:`theme`})}),` `,`prop to configure the calendar colors for the light and dark`,` `,(0,F.jsx)(`a`,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme`,children:`color scheme`}),`. Provide all colors per scheme`,` `,(0,F.jsx)(c,{kind:`react-activity-calendar`,name:`explicit-themes`,children:`explicitly`}),` `,`(5 by default) or set exactly two colors (the lowest and highest intensity) to calculate a single-hue scale. For explicit themes the color count must match the number of activity levels, which is controlled by the`,` `,(0,F.jsx)(c,{kind:`react-activity-calendar`,name:`activity-levels`,children:(0,F.jsx)(`code`,{children:`maxLevel`})}),` `,`prop. Colors can be specified in any valid CSS format.`]}),(0,F.jsxs)(`p`,{children:[`At least one scheme's colors must be set. If undefined, the default theme is used. By default, the calendar selects the current system color scheme, but you can enforce a specific scheme with the`,` `,(0,F.jsx)(`a`,{href:`/?path=/docs/react-activity-calendar--docs`,children:(0,F.jsx)(`code`,{children:`colorScheme`})}),` `,`prop.`]}),(0,F.jsx)(u,{code:E,isDarkMode:s()})]})}},U={args:{...I,theme:L},parameters:{controls:{exclude:[`maxLevel`]},docs:{source:{code:T}}},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:4}),[]);return(0,F.jsxs)(g,{children:[(0,F.jsx)(`h1`,{children:`Explicit theme`}),(0,F.jsx)(`p`,{}),(0,F.jsxs)(`p`,{children:[`See the`,` `,(0,F.jsx)(c,{kind:`react-activity-calendar`,name:`color-themes`,children:`color themes`}),` `,`page for details how to use the `,(0,F.jsx)(`code`,{children:`theme`}),` prop.`]}),(0,F.jsx)(N,{...e,data:t,style:{marginTop:`2rem`}})]})}},W={args:{...I,blockSize:14,blockRadius:7,blockMargin:5,fontSize:16,theme:L},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,F.jsx)(N,{...e,data:t})},parameters:{controls:{exclude:[`maxLevel`]},docs:{source:{code:he}}}},G={args:{...I,renderBlock:(e,t)=>(0,P.cloneElement)(e,{onClick:()=>{alert(JSON.stringify(t))},onMouseEnter:()=>{console.log(`on mouse enter`)}})},parameters:{docs:{source:{code:y}}},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,F.jsxs)(g,{children:[(0,F.jsx)(`h1`,{children:`Event Handlers`}),(0,F.jsxs)(`p`,{children:[`Use the`,` `,(0,F.jsx)(`code`,{children:(0,F.jsx)(`b`,{children:`renderBlock`})}),` `,`prop to attach event handlers to the SVG `,(0,F.jsx)(`code`,{children:`rect`}),` elements that represent calendar days. Click on any block below to see it in action.`]}),(0,F.jsx)(N,{...e,data:t,style:{margin:`2rem 0`}}),(0,F.jsxs)(`p`,{children:[`Use the `,(0,F.jsx)(`code`,{children:`React.cloneElement()`}),` function to assign the handlers:`]}),(0,F.jsx)(u,{code:y,isDarkMode:s()})]})}},K={args:{...I,tooltips:{activity:{text:e=>`${e.level} activities on ${e.date}`},colorLegend:{text:e=>`Activity level ${e+1}`}}},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,F.jsxs)(g,{children:[(0,F.jsx)(`h1`,{children:`Tooltips`}),(0,F.jsxs)(`p`,{children:[`Use the`,` `,(0,F.jsx)(`code`,{children:(0,F.jsx)(`b`,{children:`tooltips`})}),` `,`prop to show tooltips when hovering the calendar days or the color legend. Each tooltip's content is generated by a callback function, which receives either the activity data or level value of the hovered element.`]}),(0,F.jsx)(N,{...e,data:t,style:{margin:`2rem 0`}}),(0,F.jsxs)(`p`,{children:[`Tooltips no longer depend on external libraries and are now integrated directly into this package. Thanks to code-splitting, tooltips only affect your bundle size when you use them. Tooltips are implemented using the`,` `,(0,F.jsx)(`a`,{href:`https://floating-ui.com/`,children:`Floating UI`}),` library as a “headless” component, meaning they come `,(0,F.jsx)(`b`,{children:`without predefined styles`}),`. This gives you full control over the appearance:`]}),(0,F.jsxs)(`ul`,{children:[(0,F.jsxs)(`li`,{children:[`Import the default styles provided by this package, `,(0,F.jsx)(`b`,{children:`or`})]}),(0,F.jsx)(`li`,{children:`Add your own custom CSS.`})]}),(0,F.jsx)(u,{code:`import 'react-activity-calendar/tooltips.css';`,isDarkMode:s()}),(0,F.jsx)(u,{code:`/* Adapt to your needs */\n${_}`,isDarkMode:s()}),(0,F.jsx)(`h2`,{children:`Tooltip configuration`}),(0,F.jsx)(`p`,{children:`You can configure the tooltips with the following optional settings:`}),(0,F.jsxs)(`ul`,{children:[(0,F.jsxs)(`li`,{children:[(0,F.jsx)(`a`,{href:`https://floating-ui.com/docs/useFloating#placement`,children:`placement`}),` of the tooltip`]}),(0,F.jsxs)(`li`,{children:[(0,F.jsx)(`a`,{href:`https://floating-ui.com/docs/offset#options`,children:`offset`}),` to the element in pixels (4 by default)`]}),(0,F.jsxs)(`li`,{children:[`the cursor “`,(0,F.jsx)(`a`,{href:`https://floating-ui.com/docs/useHover#restms`,children:`rest time`}),`” in milliseconds before opening a tooltip (150ms by default)`]}),(0,F.jsxs)(`li`,{children:[(0,F.jsx)(`a`,{href:`https://floating-ui.com/docs/useTransition#usetransitionstyles-props`,children:`transition styles`}),` `,`to fine-tune CSS animations`]}),(0,F.jsx)(`li`,{children:`whether to draw an arrow (false by default)`})]}),(0,F.jsx)(u,{code:be,isDarkMode:s()}),(0,F.jsx)(N,{...e,data:t,tooltips:{activity:{text:e=>`${e.level} activities on ${e.date}`,placement:`right`,offset:8,transitionStyles:{duration:100,common:{fontFamily:`monospace`}},hoverRestMs:300,withArrow:!0}},style:{margin:`2rem 0`}})]})},parameters:{docs:{source:{code:Se}}}},q={args:{...I,showMonthLabels:!1,showColorLegend:!1,showTotalCount:!1},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,F.jsx)(N,{...e,data:t})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} showMonthLabels={false} showColorLegend={false} showTotalCount={false} />`}}}},J={args:{...I,showWeekdayLabels:!0},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,F.jsxs)(Xe,{children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)($,{code:`true`,children:`Show every second weekday (default)`}),(0,F.jsx)(N,{...e,data:t})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)($,{code:`['mon', 'fri']`,children:`Show specific days`}),(0,F.jsx)(N,{...e,data:t,showWeekdayLabels:[`mon`,`fri`]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)($,{code:`['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']`,children:`Show every day`}),(0,F.jsx)(N,{...e,data:t,showWeekdayLabels:[`sun`,`mon`,`tue`,`wed`,`thu`,`fri`,`sat`]})]})]})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} showWeekdayLabels />`}}}},Y={args:{...I,showWeekdayLabels:!0,labels:{months:[`Jan`,`Feb`,`Mär`,`Apr`,`Mai`,`Jun`,`Jul`,`Aug`,`Sep`,`Okt`,`Nov`,`Dez`],weekdays:[`So`,`Mo`,`Di`,`Mi`,`Do`,`Fr`,`Sa`],totalCount:`{{count}} Aktivitäten in {{year}}`,legend:{less:`Weniger`,more:`Mehr`}}},parameters:{docs:{source:{code:x}}},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,F.jsxs)(g,{children:[(0,F.jsx)(`h1`,{children:`Localization`}),(0,F.jsx)(`p`,{children:`Example in German:`}),(0,F.jsx)(N,{...e,data:t,style:{margin:`2rem 0`}}),(0,F.jsx)(u,{code:b,isDarkMode:s()})]})}},X={args:{...I,weekStart:1},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,F.jsx)(N,{...e,data:t})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} weekStart={1} />`}}}},Z={args:I,parameters:{docs:{source:{code:`<ActivityCalendar data={data} />`}}},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]);return(0,F.jsx)(`div`,{style:{width:480,maxWidth:`100%`,border:`dashed 1px #929292`},children:(0,F.jsx)(N,{...e,data:t})})}},Q={args:I,parameters:{docs:{source:{code:C}}},render:e=>{let t=(0,P.useMemo)(()=>f({maxLevel:e.maxLevel}),[e.maxLevel]),n=(0,P.useRef)(null);return(0,P.useEffect)(()=>{console.log(`calendar ref`,n)},[n]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(N,{...e,data:t,ref:n}),(0,F.jsx)(`br`,{}),(0,F.jsx)(`p`,{children:`Check the JavaScript console to see the ref logged.`})]})}},Xe=({children:e})=>(0,F.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`3rem`},children:e}),$=({children:e,code:t})=>(0,F.jsxs)(`div`,{role:`heading`,style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:16,fontSize:16,fontWeight:`bolder`},children:[e,t&&(0,F.jsx)(`code`,{style:{fontSize:13,fontWeight:`normal`},children:t})]}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},Ze=[`Default`,`Loading`,`ActivityLevels`,`DateRanges`,`ColorThemes`,`ExplicitThemes`,`Customization`,`EventHandlers`,`Tooltips`,`WithoutLabels`,`WeekdayLabels`,`LocalizedLabels`,`MondayAsWeekStart`,`NarrowScreens`,`ContainerRef`]}))();export{B as ActivityLevels,H as ColorThemes,Q as ContainerRef,W as Customization,V as DateRanges,R as Default,G as EventHandlers,U as ExplicitThemes,z as Loading,Y as LocalizedLabels,X as MondayAsWeekStart,Z as NarrowScreens,K as Tooltips,J as WeekdayLabels,q as WithoutLabels,Ze as __namedExportsOrder,Ye as default};