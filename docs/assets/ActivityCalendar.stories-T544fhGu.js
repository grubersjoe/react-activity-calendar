const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Tooltip-DDS0ks-C.js","./rolldown-runtime-DaJ6WEGw.js","./react-DvlgmmzG.js","./react-dom-ua_76iqd.js","./jsx-runtime-cM__dR4X.js"])))=>i.map(i=>d[i]);
import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{n,t as r}from"./preload-helper-si3HNj2m.js";import{t as i}from"./react-DvlgmmzG.js";import{t as a}from"./jsx-runtime-cM__dR4X.js";import{n as o,t as s}from"./iframe-kXpwseO2.js";import{i as c,n as l,r as u,t as d}from"./Source-DQ-QLTjT.js";import{_ as ee,a as f,c as te,d as p,f as ne,g as re,i as m,l as ie,m as h,n as ae,o as oe,p as g,r as se,s as _,u as ce,y as le}from"./Tooltip-DDS0ks-C.js";var v,y,ue=t((()=>{v=a(),y=({children:e})=>(0,v.jsx)(`div`,{style:{margin:`1rem 0 2rem`},children:e}),y.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),de,fe=t((()=>{de=`<ActivityCalendar
  data={data}
  minLevel={-6}
  maxLevel={3}
  labels={{
    legend: { less: '-6', more: '3' },
  }}
  theme={{
    // Red for negative levels, gray for zero, green for positive ones.
    light: ['red', 'hsl(0, 0%, 92%\`)', 'green'],
    dark: ['red', 'hsl(0, 0%, 92%\`)', 'green'],
  }}
  tooltips={{
    activity: {
      text: ({ count, level }) => \`Level \${level} (\${count} activities)\`,
      withArrow: true,
    },
  }}
  style={{ margin: '1.5rem 0' }}
/>`})),b,pe=t((()=>{b=`<ActivityCalendar
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
`})),x,S=t((()=>{x=`import { cloneElement } from 'react'

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
`})),C,me=t((()=>{C=`import {
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

<ActivityCalendar data={data} labels={labels} showWeekdayLabels />`})),w,he=t((()=>{w=`<ActivityCalendar
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
`})),T,E=t((()=>{T=`import { useRef } from 'react'

const calendarRef = useRef<HTMLElement>(null)

if (calendar.current) {
  console.log(calendarRef.current)
}

<ActivityCalendar data={data} ref={calendarRef} />
`})),D,O=t((()=>{D=`<ActivityCalendar
  data={data}
  theme={{
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  }}
/>
`})),k,ge=t((()=>{k=`// For five activity levels
const explicitTheme: ThemeInput = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
}

<ActivityCalendar data={data} theme={explicitTheme} />

// A scale for any number of activity levels going from light gray to purple.
const twoColorTheme: ThemeInput = {
  light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
  // for \`dark\` the default theme will be used
}

<ActivityCalendar data={data} theme={twoColorTheme} />

// A scale going from red (negative values) to light gray (zero) to green
// (positive values). Useful for negative activity levels.
const threeColorTheme: ThemeInput = {
  light: ['red', 'hsl(0, 0%, 92%)', 'green'],
}

<ActivityCalendar
  data={data}
  minLevel={-3}
  maxLevel={3}
  theme={threeColorTheme}
/>
`})),_e,ve=t((()=>{_e=`<ActivityCalendar
  data={data}
  tooltips={{
    activity: {
      text: ({level, date}) =>
        \`\${level} activities on \${new Date(date).toLocaleDateString('en-US')}\`,
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
`})),ye,be=t((()=>{ye=`<ActivityCalendar
  data={data}
  tooltips={{
    activity: {
      text: ({level, date}) => \`\${level} activities on \${new Date(date).toLocaleDateString('en-US')}\`
    },
    colorLegend: {
      text: level => \`Activity level \${level + 1}\`
    },
  }}
/>
`})),xe,Se=t((()=>{xe=`<ActivityCalendar
  data={data}
  showWeekdayLabels={['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']}
/>`})),A,Ce=t((()=>{A=`.react-activity-calendar__tooltip {
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
`}));function we(){let[e,t]=(0,Te.useState)(()=>typeof window>`u`?`light`:window.matchMedia(Ee).matches?`dark`:`light`),n=e=>{t(e.matches?`dark`:`light`)};return(0,Te.useEffect)(()=>{let e=window.matchMedia(Ee);return t(e.matches?`dark`:`light`),e.addEventListener(`change`,n),()=>{e.removeEventListener(`change`,n)}},[]),e}var Te,Ee,De=t((()=>{Te=e(i(),1),Ee=`(prefers-color-scheme: dark)`}));function Oe(e,t){let[n,r]=(0,ke.useState)(!1);return(0,ke.useEffect)(()=>{let n=`oklab(from ${e} l a b)`,i=t===`light`?`oklab(from ${e} calc(l * 0.96) a b)`:`oklab(from ${e} calc(l * 1.08) a b)`,a=document.createElement(`style`);a.innerHTML=`
      @keyframes ${Ae} {
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
    `;let o=()=>{r(!0)};return document.head.appendChild(a),a.addEventListener(`load`,o),()=>{document.head.removeChild(a),a.removeEventListener(`load`,o),r(!1)}},[e,t]),n}var ke,Ae,je=t((()=>{ke=e(i(),1),g(),Ae=`${ne}--loading-animation`}));function Me(){let[e,t]=(0,Ne.useState)(()=>typeof window>`u`||window.matchMedia(Pe).matches);return(0,Ne.useEffect)(()=>{let e=window.matchMedia(Pe);t(e.matches);let n=e=>{t(e.matches)};return e.addEventListener(`change`,n),()=>{e.removeEventListener(`change`,n)}},[]),e}var Ne,Pe,Fe=t((()=>{Ne=e(i(),1),Pe=`(prefers-reduced-motion: reduce)`}));function Ie(e,t=p){return e.reduce((e,n,r)=>{let i=n.find(e=>e!==void 0);if(!i)throw Error(`Unexpected error: Week ${r+1} is empty.`);let a=t[le(re(i.date))];if(!a){let e=new Date(i.date).toLocaleString(`en-US`,{month:`short`});throw Error(`Unexpected error: undefined month label for ${e}.`)}let o=e[e.length-1];return r===0||o?.label!==a?[...e,{weekIndex:r,label:a}]:e},[]).filter(({weekIndex:t},n,r)=>n===0?r[1]&&r[1].weekIndex-t>=3:n!==r.length-1||e.slice(t).length>=3)}function Le(e,t,n){if(e.length!==7)throw Error(`Exactly 7 labels, one for each weekday must be passed.`);return e.reduce((e,r,i)=>t.byDayIndex(i)?Math.max(e,Math.ceil(Re(r,n).width)):e,0)}function Re(e,t){if(typeof document>`u`||typeof window>`u`)return{width:0,height:0};if(t<1)throw RangeError(`fontSize must be positive`);if(e.length===0)return{width:0,height:0};let n=`http://www.w3.org/2000/svg`,r=document.createElementNS(n,`svg`);r.style.position=`absolute`,r.style.visibility=`hidden`,r.style.fontFamily=window.getComputedStyle(document.body).fontFamily,r.style.fontSize=`${t}px`;let i=document.createElementNS(n,`text`);i.textContent=e,r.appendChild(i),document.body.appendChild(r);let a=i.getBBox();return document.body.removeChild(r),{width:a.width,height:a.height}}function ze(e,t){if(!e)return{byDayIndex:()=>!1,shouldShow:!1};if(e===!0)return{byDayIndex:e=>(7+e-t)%7%2!=0,shouldShow:!0};let n=[];for(let t of e){let e=Be[t.toLowerCase()];n[e]=!0}return{byDayIndex:e=>n[e]??!1,shouldShow:e.length>0}}var Be,Ve=t((()=>{h(),g(),Be={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}}));function He(e,t={minLevel:0,maxLevel:4}){let n=Ue(t);return e?(We(e,t.maxLevel-t.minLevel+1),e.light=e.light??n.light,e.dark=e.dark??n.dark,{light:Ge(e.light)?j([e.light[1],e.light[0],e.light[1]],t):Ke(e.light)?j(e.light,t):e.light,dark:Ge(e.dark)?j([e.dark[1],e.dark[0],e.dark[1]],t):Ke(e.dark)?j(e.dark,t):e.dark}):n}function Ue(e){return{light:j([`hsl(0, 0%, 26%)`,`hsl(0, 0%, 92%)`,`hsl(0, 0%, 26%)`],e),dark:j([`hsl(0, 0%, 92%)`,`hsl(0, 0%, 22%)`,`hsl(0, 0%, 92%)`],e)}}function We(e,t){let n="The number of colors must match the number of activity levels controlled by the `minLevel` and `maxLevel` props.";if(typeof e!=`object`||e.light===void 0&&e.dark===void 0)throw Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${t} colors respectively. ${n}`);if(e.light){let{length:r}=e.light;if(r!==2&&r!==3&&r!==t)throw Error(`theme.light must contain exactly 2 or 3 or ${t} colors, ${r} passed. ${n}`);for(let t of e.light)if(typeof window<`u`&&!CSS.supports(`color`,t))throw Error(`Invalid color "${t}" passed. All CSS color formats are accepted.`)}if(e.dark){let{length:r}=e.dark;if(r!==2&&r!==3&&r!==t)throw Error(`theme.dark must contain exactly 2 or 3 or ${t} colors, ${r} passed. ${n}`);for(let t of e.dark)if(typeof window<`u`&&!CSS.supports(`color`,t))throw Error(`Invalid color "${t}" passed. All CSS color formats are accepted.`)}}function j([e,t,n],{minLevel:r,maxLevel:i}){return te(r,i+1).map(a=>{if(a<0){if(a===r)return e;let n=(1-a/r)*100;return`color-mix(in oklab, ${t} ${parseFloat(n.toFixed(2))}%, ${e})`}if(a===0)return t;if(a===i)return n;let o=a/i*100;return`color-mix(in oklab, ${n} ${parseFloat(o.toFixed(2))}%, ${t})`})}function Ge(e){return e.length===2}function Ke(e){return e.length===3}var qe=t((()=>{_()})),M,Je=t((()=>{M={container:e=>({width:`max-content`,maxWidth:`100%`,display:`flex`,flexDirection:`column`,gap:`8px`,fontSize:`${e}px`}),scrollContainer:e=>({maxWidth:`100%`,overflowX:`auto`,overflowY:`hidden`,paddingTop:Math.ceil(.1*e)}),calendar:{display:`block`,overflow:`visible`},rect:e=>({stroke:e===`light`?`rgba(0, 0, 0, 0.08)`:`rgba(255, 255, 255, 0.04)`}),footer:{container:{display:`flex`,flexWrap:`wrap`,gap:`4px 16px`,whiteSpace:`nowrap`},legend:{marginLeft:`auto`,display:`flex`,alignItems:`center`,gap:`3px`}}}})),N,P,Ye,F,Xe=t((()=>{N=e(i(),1),h(),g(),De(),je(),Fe(),_(),Ve(),qe(),Je(),ae(),P=a(),n(),Ye=(0,N.lazy)(()=>r(()=>import(`./Tooltip-DDS0ks-C.js`).then(e=>(e.n(),e.t)).then(e=>({default:e.Tooltip})),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),F=(0,N.forwardRef)(({data:e,blockMargin:t=4,blockRadius:n=2,blockSize:r=12,className:i,colorScheme:a,fontSize:o=14,labels:s,loading:c=!1,minLevel:l=0,maxLevel:u=4,renderBlock:d,renderColorLegend:p,showColorLegend:m=!0,showMonthLabels:h=!0,showTotalCount:ae=!0,showWeekdayLabels:g=!1,style:_={},theme:le,tooltips:v={},weekStart:y=0},ue)=>{let[de,fe]=(0,N.useState)(!1);if((0,N.useEffect)(()=>{fe(!0)},[]),l>=u)throw RangeError(`Minimum activity level must be less than maximum level. Got ${l} and ${u}.`);let b={minLevel:l,maxLevel:u},pe=He(le,b),x=we(),S=a??x,C=pe[S],me=Oe(C[0],S),w=!Me();if(c){if(w&&!me)return null;e=se()}ie(e,b);let he=e[0],T=ee(re(he.date)),E=oe(e,y),D=Object.assign({},ce,s),O=h?o+8:0,k=ze(g,y),ge=de&&k.shouldShow?Le(D.weekdays,k,o)+8:void 0;function _e(){return{width:E.length*(r+t)-t,height:O+(r+t)*7-t}}function ve(){return E.map((e,i)=>e.map((e,a)=>{if(!e)return null;let o=c&&w?{animation:`${Ae} 1.75s ease-in-out infinite`,animationDelay:`${i*20+a*20}ms`}:void 0,s=(0,P.jsx)(`rect`,{x:0,y:O+(r+t)*a,width:r,height:r,rx:n,ry:n,fill:Se(e.level),"data-date":e.date,"data-level":e.level,style:{...M.rect(S),...o}}),l=d?d(s,e):s;return(0,P.jsx)(N.Fragment,{children:v.activity?(0,P.jsx)(N.Suspense,{fallback:l,children:(0,P.jsx)(Ye,{text:v.activity.text(e),colorScheme:S,placement:v.activity.placement??`top`,hoverRestMs:v.activity.hoverRestMs,offset:v.activity.offset,transitionStyles:v.activity.transitionStyles,withArrow:v.activity.withArrow,children:l})}):l},e.date)})).map((e,n)=>(0,P.jsx)(`g`,{transform:`translate(${(r+t)*n}, 0)`,children:e},n))}function ye(){if(!ae&&!m)return null;let t=e.reduce((e,t)=>e+t.count,0);return(0,P.jsxs)(`footer`,{className:f(`footer`),style:{...M.footer.container,marginLeft:ge},children:[c&&(0,P.jsx)(`div`,{children:`\xA0`}),!c&&ae&&(0,P.jsx)(`div`,{className:f(`count`),children:D.totalCount?D.totalCount.replace(`{{count}}`,String(t)).replace(`{{year}}`,String(T)):`${t} activities in ${T}`}),!c&&m&&(0,P.jsxs)(`div`,{className:f(`legend-colors`),style:M.footer.legend,children:[D.legend.less&&(0,P.jsx)(`span`,{style:{marginRight:`0.4em`},children:D.legend.less}),te(l,u+1).map(e=>{let t=(0,P.jsx)(`svg`,{width:r,height:r,children:(0,P.jsx)(`rect`,{width:r,height:r,fill:Se(e),rx:n,ry:n,style:M.rect(S)})},e),i=p?p(t,e):t;return(0,P.jsx)(N.Fragment,{children:v.colorLegend?(0,P.jsx)(N.Suspense,{fallback:i,children:(0,P.jsx)(Ye,{text:v.colorLegend.text(e),colorScheme:S,placement:v.colorLegend.placement??`bottom`,hoverRestMs:v.colorLegend.hoverRestMs,offset:v.colorLegend.offset,transitionStyles:v.colorLegend.transitionStyles,withArrow:v.colorLegend.withArrow,children:i})}):i},e)}),D.legend.more&&(0,P.jsx)(`span`,{style:{marginLeft:`0.4em`},children:D.legend.more})]})]})}function be(){return k.shouldShow?(0,P.jsx)(`g`,{className:f(`legend-weekday`),children:te(7).map(e=>{let n=(e+y)%7;return k.byDayIndex(n)?(0,P.jsx)(`text`,{x:-8,y:O+(r+t)*e+r/2,dominantBaseline:`central`,textAnchor:`end`,fill:`currentColor`,children:D.weekdays[n]},e):null})}):null}function xe(){return h?(0,P.jsx)(`g`,{className:f(`legend-month`),children:Ie(E,D.months).map(({label:e,weekIndex:n})=>(0,P.jsx)(`text`,{x:(r+t)*n,y:0,dominantBaseline:`hanging`,fill:`currentColor`,children:e},n))}):null}function Se(e){return C[e-l]}let{width:A,height:Ce}=_e();return(0,P.jsxs)(`article`,{ref:ue,className:`${ne} ${i??``}`.trim(),style:{..._,...M.container(o)},children:[(0,P.jsx)(`div`,{className:f(`scroll-container`),style:M.scrollContainer(o),children:(0,P.jsxs)(`svg`,{width:A,height:Ce,viewBox:`0 0 ${A} ${Ce}`,className:f(`calendar`),style:{...M.calendar,marginLeft:ge},children:[!c&&be(),!c&&xe(),ve()]})}),ye()]})}),F.displayName=`ActivityCalendar`,F.__docgenInfo={description:``,methods:[],displayName:`ActivityCalendar`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  date: string
  count: number
  level: number
}`,signature:{properties:[{key:`date`,value:{name:`string`,required:!0}},{key:`count`,value:{name:`number`,required:!0}},{key:`level`,value:{name:`number`,required:!0}}]}}],raw:`Array<Activity>`},description:`List of calendar entries. Each Activity object requires an ISO 8601 date
string in the \`yyyy-MM-dd\` format, a \`count\` property indicating the amount
of tracked data, and a \`level\` property in the range \`[minLevel, maxLevel]\`
representing activity intensity. By default, \`minLevel\` is 0 and \`maxLevel\`
is 4, resulting in five activity levels.

Dates without corresponding entries are assumed to have no activity. This
allows you to set arbitrary start and end dates for the calendar by passing
empty entries as the first and last items.

@example
{
  date: "2021-02-20",
  count: 16,
  level: 3
}`},blockMargin:{required:!1,tsType:{name:`number`},description:`Margin between blocks in pixels.`,defaultValue:{value:`4`,computed:!1}},blockRadius:{required:!1,tsType:{name:`number`},description:`Border radius of blocks in pixels.`,defaultValue:{value:`2`,computed:!1}},blockSize:{required:!1,tsType:{name:`number`},description:`Block size in pixels.`,defaultValue:{value:`12`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Class name to add to the component container.`},colorScheme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:"Use the `'light'` or `'dark'` color scheme instead of the system one."},fontSize:{required:!1,tsType:{name:`number`},description:`Font size for text in pixels.`,defaultValue:{value:`14`,computed:!1}},labels:{required:!1,tsType:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},description:"Localization strings for all calendar labels.\n`totalCount` supports the placeholders `{{count}}` and `{{year}}`."},maxLevel:{required:!1,tsType:{name:`number`},description:`Maximum activity level, 4 by default.
@see minLevel`,defaultValue:{value:`4`,computed:!1}},minLevel:{required:!1,tsType:{name:`number`},description:`Minimum activity level, 0 by default.
@see maxLevel`,defaultValue:{value:`0`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:"Toggle to display the calendar loading state. The `data` property is\nignored if set.",defaultValue:{value:`false`,computed:!1}},ref:{required:!1,tsType:{name:`ForwardedRef`,elements:[{name:`HTMLElement`}],raw:`ForwardedRef<HTMLElement>`},description:`Ref to access the calendar DOM node.`},renderBlock:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(block: BlockElement, activity: Activity) => ReactElement`,signature:{arguments:[{type:{name:`ReactElement`,elements:[{name:`intersection`,raw:`SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>`,elements:[{name:`SVGAttributes`,elements:[{name:`SVGRectElement`}],raw:`SVGAttributes<SVGRectElement>`},{name:`HTMLAttributes`,elements:[{name:`SVGRectElement`}],raw:`HTMLAttributes<SVGRectElement>`}]},{name:`JSXElementConstructor`,elements:[{name:`SVGRectElement`}],raw:`JSXElementConstructor<SVGRectElement>`}],raw:`ReactElement<
  SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>,
  JSXElementConstructor<SVGRectElement>
>`},name:`block`},{type:{name:`signature`,type:`object`,raw:`{
  date: string
  count: number
  level: number
}`,signature:{properties:[{key:`date`,value:{name:`string`,required:!0}},{key:`count`,value:{name:`number`,required:!0}},{key:`level`,value:{name:`number`,required:!0}}]}},name:`activity`}],return:{name:`ReactElement`}}},description:`Render prop for calendar blocks (activities). Useful to attach event
handlers or to wrap the element with a link. Use \`React.cloneElement\` to
pass additional props to the element if necessary.`},renderColorLegend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(block: BlockElement, level: number) => ReactElement`,signature:{arguments:[{type:{name:`ReactElement`,elements:[{name:`intersection`,raw:`SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>`,elements:[{name:`SVGAttributes`,elements:[{name:`SVGRectElement`}],raw:`SVGAttributes<SVGRectElement>`},{name:`HTMLAttributes`,elements:[{name:`SVGRectElement`}],raw:`HTMLAttributes<SVGRectElement>`}]},{name:`JSXElementConstructor`,elements:[{name:`SVGRectElement`}],raw:`JSXElementConstructor<SVGRectElement>`}],raw:`ReactElement<
  SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>,
  JSXElementConstructor<SVGRectElement>
>`},name:`block`},{type:{name:`number`},name:`level`}],return:{name:`ReactElement`}}},description:"Render prop for color legend blocks. Use `React.cloneElement` to pass\nadditional props to the element if necessary."},showColorLegend:{required:!1,tsType:{name:`boolean`},description:`Toggle to hide the color legend below the calendar.`,defaultValue:{value:`true`,computed:!1}},showMonthLabels:{required:!1,tsType:{name:`boolean`},description:`Toggle to hide the month labels above the calendar.`,defaultValue:{value:`true`,computed:!1}},showTotalCount:{required:!1,tsType:{name:`boolean`},description:`Toggle to hide the total count below the calendar.`,defaultValue:{value:`true`,computed:!1}},showWeekdayLabels:{required:!1,tsType:{name:`union`,raw:`boolean | Array<DayName>`,elements:[{name:`boolean`},{name:`Array`,elements:[{name:`union`,raw:`'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'`,elements:[{name:`literal`,value:`'sun'`},{name:`literal`,value:`'mon'`},{name:`literal`,value:`'tue'`},{name:`literal`,value:`'wed'`},{name:`literal`,value:`'thu'`},{name:`literal`,value:`'fri'`},{name:`literal`,value:`'sat'`}]}],raw:`Array<DayName>`}]},description:`Toggle to show weekday labels left to the calendar.
Alternatively, provide an array of ISO 8601 weekday names to display.

@example ['mon', 'wed', 'fri']`,defaultValue:{value:`false`,computed:!1}},style:{required:!1,tsType:{name:`CSSProperties`},description:`Style object to pass to the component container.`,defaultValue:{value:`{}`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`| {
    light: Array<Color>
    dark?: Array<Color>
  }
| {
    light?: Array<Color>
    dark: Array<Color>
  }`,elements:[{name:`signature`,type:`object`,raw:`{
  light: Array<Color>
  dark?: Array<Color>
}`,signature:{properties:[{key:`light`,value:{name:`Array`,elements:[{name:`string`}],raw:`Array<Color>`,required:!0}},{key:`dark`,value:{name:`Array`,elements:[{name:`string`}],raw:`Array<Color>`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{
  light?: Array<Color>
  dark: Array<Color>
}`,signature:{properties:[{key:`light`,value:{name:`Array`,elements:[{name:`string`}],raw:`Array<Color>`,required:!1}},{key:`dark`,value:{name:`Array`,elements:[{name:`string`}],raw:`Array<Color>`,required:!0}}]}}]},description:`Set the calendar colors for the light and dark color schemes. Provide
the colors for all activity levels per scheme explicitly or specify two
colors (the zero and maximum intensity) to calculate a scale automatically.
The number of activity levels is controlled by the \`minLevel\` and
\`maxLevel\` props.
If you have negative activity levels, you can also pass three colors,
representing the negative, zero, and positive levels, to calculate a
corresponding scale. For explicit themes the color count must match the
number of activity levels. Colors can be specified in any valid CSS format.

For undefined color schemes the default theme is used. By default, the
current system color scheme is applied, but you can enforce a specific
scheme with the \`colorScheme\` prop.

Example:

\`\`\`tsx
<ActivityCalendar
  data={data}
  theme={{
    light: ['hsl(0, 0%, 92%)', 'firebrick'],
    dark: ['#333', 'rgb(214, 16, 174)'],
  }}
/>
\`\`\`

@see colorScheme
@see minLevel
@see maxLevel`},tooltips:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
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
below the calendar.

@see [Documentation](https://grubersjoe.github.io/react-activity-calendar/?path=/story/react-activity-calendar--tooltips)`,defaultValue:{value:`{}`,computed:!1}},weekStart:{required:!1,tsType:{name:`union`,raw:`0 | 1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:`Index of day to be used as the week start. 0 represents Sunday.`,defaultValue:{value:`0`,computed:!1}}}}})),Ze=t((()=>{})),I,L,Qe,R,$e,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,et,tt;t((()=>{I=e(i(),1),u(),s(),ue(),fe(),pe(),S(),me(),he(),E(),O(),ge(),ve(),be(),Se(),Ce(),l(),_(),Xe(),Ze(),L=a(),Qe={title:`React Activity Calendar`,component:F,argTypes:{data:{control:!1},blockMargin:{control:{type:`range`,min:0,max:20}},blockRadius:{control:{type:`range`,min:0,max:20}},blockSize:{control:{type:`range`,min:4,max:30}},colorScheme:{control:!1},fontSize:{control:{type:`range`,min:6,max:32,step:2}},minLevel:{control:{type:`range`,min:-10,max:5}},maxLevel:{control:{type:`range`,min:-5,max:10}},ref:{control:!1},showWeekdayLabels:{control:`boolean`},style:{control:!1},tooltips:{control:!1},weekStart:{options:[0,1,2,3,4,5,6],control:{type:`select`,labels:{0:`Sunday (0)`,1:`Monday (1)`,2:`Tuesday (2)`,3:`Wednesday (3)`,4:`Thursday (4)`,5:`Friday (5)`,6:`Saturday (6)`}}}},decorators:[(e,{args:t})=>(t.colorScheme=o()?`dark`:`light`,(0,L.jsx)(e,{}))],parameters:{controls:{sort:`requiredFirst`},layout:`centered`},tags:[`autodocs`]},R={blockMargin:4,blockRadius:2,blockSize:12,fontSize:14,loading:!1,minLevel:0,maxLevel:4,showColorLegend:!0,showMonthLabels:!0,showTotalCount:!0,showWeekdayLabels:!1,weekStart:0},$e={light:[`#f0f0f0`,`#c4edde`,`#7ac7c4`,`#f73859`,`#384259`],dark:[`hsl(0, 0%, 22%)`,`#4D455D`,`#7DB9B6`,`#F5E9CF`,`#E96479`]},z={args:R,render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]);return(0,L.jsx)(F,{...e,data:t})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} />`}}}},B={args:{...R,data:[],loading:!0},parameters:{docs:{source:{code:`<ActivityCalendar data={data} loading />`}}}},V={args:{...R,minLevel:0,maxLevel:2},render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]);return(0,L.jsxs)(y,{children:[(0,L.jsx)(`h1`,{children:`Activity levels`}),(0,L.jsxs)(`p`,{children:[`Use the `,(0,L.jsx)(`code`,{children:`minLevel`}),` and `,(0,L.jsx)(`code`,{children:`maxLevel`}),` props to control the range of activity levels. By default, the range is `,(0,L.jsx)(`code`,{children:`[0, 4]`}),`, resulting in 5 activity levels (0 through 4, inclusive). All activity data must fall within these bounds. The following example uses the range`,` `,(0,L.jsxs)(`code`,{children:[`[`,e.minLevel,`, `,e.maxLevel,`]`]}),`:`]}),(0,L.jsx)(F,{...e,data:t,labels:{legend:{less:String(e.minLevel),more:String(e.maxLevel)}},style:{margin:`1.5rem 0`}}),(0,L.jsxs)(`p`,{children:[`Activity levels support any range, including negative ones like `,(0,L.jsx)(`code`,{children:`[-6, 3]`}),` `,`below. To calculate a scale automatically pass exactly three colors representing the negative, zero and positive color (see`,` `,(0,L.jsx)(c,{kind:`react-activity-calendar`,name:`color-themes`,children:`color themes`}),`):`]}),(0,L.jsx)(F,{...e,data:m({minLevel:-6,maxLevel:3}),minLevel:-6,maxLevel:3,labels:{legend:{less:`-6`,more:`3`}},theme:{light:[`red`,`hsl(0, 0%, 92%)`,`#4ac26b`],dark:[`red`,`hsl(0, 0%, 22%)`,`#4ac26b`]},tooltips:{activity:{text:({count:e,level:t})=>`Level ${t} (${e} activities)`,withArrow:!0}},style:{margin:`1.5rem 0`}}),(0,L.jsx)(d,{code:de,isDarkMode:o()})]})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} levels={{min: 0, max: 2}} />`}}}},H={args:R,render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel,interval:{start:new Date(2022,5,1),end:new Date(2023,4,31)}}),[e.minLevel,e.maxLevel]),n=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel,interval:{start:new Date(2023,2,8),end:new Date(2023,7,1)}}),[e.minLevel,e.maxLevel]),r=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel,interval:{start:new Date(2023,5,14),end:new Date(2023,6,17)}}),[e.minLevel,e.maxLevel]);return(0,L.jsxs)(et,{children:[(0,L.jsx)(F,{...e,data:t,labels:{totalCount:`{{count}} activities in 2022 & 2023`}}),(0,L.jsx)(F,{...e,data:n}),(0,L.jsx)(F,{...e,data:r})]})}},U={args:{...R,theme:{light:[`hsl(0, 0%, 92%)`,`rebeccapurple`],dark:[`hsl(0, 0%, 22%)`,`hsl(225,92%,77%)`]}},parameters:{docs:{source:{code:k}}},render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]);return(0,L.jsxs)(y,{children:[(0,L.jsx)(`h1`,{children:`Color themes`}),(0,L.jsx)(F,{...e,data:t,style:{margin:`2rem 0`}}),(0,L.jsxs)(`p`,{children:[`Use the `,(0,L.jsx)(`code`,{children:`theme`}),` prop to configure the calendar colors for the light and dark`,` `,(0,L.jsx)(`a`,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme`,children:`color scheme`}),`. Provide the colors for all activity levels per scheme`,` `,(0,L.jsx)(c,{kind:`react-activity-calendar`,name:`explicit-themes`,children:`explicitly`}),` `,`or specify two colors (the zero and maximum intensity) to calculate a scale automatically. The number of activity levels is controlled by the minLevel and maxLevel props, see`,` `,(0,L.jsx)(c,{kind:`react-activity-calendar`,name:`activity-levels`,children:`activity levels`}),`. If you have negative activity levels, you can also pass three colors, representing the negative, zero, and positive levels, to calculate a corresponding scale. For explicit themes the color count must match the number of activity levels. Colors can be specified in any valid CSS format.`]}),(0,L.jsxs)(`p`,{children:[`For undefined color schemes the default theme is used. By default, the current system color scheme is applied, but you can enforce a specific scheme with the`,` `,(0,L.jsx)(`a`,{href:`/?path=/docs/react-activity-calendar--docs`,children:(0,L.jsx)(`code`,{children:`colorScheme`})}),` `,`prop.`]}),(0,L.jsx)(d,{code:k,isDarkMode:o()})]})}},W={args:{...R,theme:$e},parameters:{controls:{exclude:[`minLevel`,`maxLevel`]},docs:{source:{code:D}}},render:e=>{let t=(0,I.useMemo)(()=>m(),[]);return(0,L.jsxs)(y,{children:[(0,L.jsx)(`h1`,{children:`Explicit theme`}),(0,L.jsx)(`p`,{}),(0,L.jsxs)(`p`,{children:[`See the`,` `,(0,L.jsx)(c,{kind:`react-activity-calendar`,name:`color-themes`,children:`color themes`}),` `,`page for details how to use the `,(0,L.jsx)(`code`,{children:`theme`}),` prop.`]}),(0,L.jsx)(F,{...e,data:t,style:{marginBlock:`2rem`}}),(0,L.jsx)(d,{code:D,isDarkMode:o()})]})}},G={args:{...R,blockSize:14,blockRadius:7,blockMargin:5,fontSize:16,theme:$e},render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]);return(0,L.jsx)(F,{...e,data:t})},parameters:{controls:{exclude:[`minLevel`,`maxLevel`]},docs:{source:{code:b}}}},K={args:{...R,renderBlock:(e,t)=>(0,I.cloneElement)(e,{onClick:()=>{alert(JSON.stringify(t))},onMouseEnter:()=>{console.log(`on mouse enter`)}})},parameters:{docs:{source:{code:x}}},render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]);return(0,L.jsxs)(y,{children:[(0,L.jsx)(`h1`,{children:`Event Handlers`}),(0,L.jsxs)(`p`,{children:[`Use the `,(0,L.jsx)(`code`,{children:`renderBlock`}),` prop to attach event handlers to the SVG`,` `,(0,L.jsx)(`code`,{children:`rect`}),` elements that represent calendar days. Click on any block below to see it in action.`]}),(0,L.jsx)(F,{...e,data:t,style:{margin:`2rem 0`}}),(0,L.jsxs)(`p`,{children:[`Use the `,(0,L.jsx)(`code`,{children:`React.cloneElement()`}),` function to assign the handlers:`]}),(0,L.jsx)(d,{code:x,isDarkMode:o()})]})}},q={args:{...R,tooltips:{activity:{text:({count:e,date:t})=>`${e} activities on ${new Date(t).toLocaleDateString(`en-US`)}`},colorLegend:{text:e=>`Activity level ${e}`}}},render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]);return(0,L.jsxs)(y,{children:[(0,L.jsx)(`h1`,{children:`Tooltips`}),(0,L.jsxs)(`p`,{children:[`Use the `,(0,L.jsx)(`code`,{children:`tooltips`}),` prop to show tooltips when hovering the calendar days or the color legend. Each tooltip's content is generated by a callback function, which receives either the activity data or level value of the hovered element.`]}),(0,L.jsx)(F,{...e,data:t,style:{margin:`2rem 0`}}),(0,L.jsxs)(`p`,{children:[`Tooltips no longer depend on external libraries and are now integrated directly into this package. Thanks to code-splitting, tooltips only affect your bundle size when you use them. Tooltips are implemented using the`,` `,(0,L.jsx)(`a`,{href:`https://floating-ui.com/`,children:`Floating UI`}),` library as a “headless” component, meaning they come `,(0,L.jsx)(`b`,{children:`without predefined styles`}),`. This gives you full control over the appearance:`]}),(0,L.jsxs)(`ul`,{children:[(0,L.jsxs)(`li`,{children:[`Import the default styles provided by this package, `,(0,L.jsx)(`b`,{children:`or`})]}),(0,L.jsx)(`li`,{children:`Add your own custom CSS.`})]}),(0,L.jsx)(d,{code:`import 'react-activity-calendar/tooltips.css';`,isDarkMode:o()}),(0,L.jsx)(d,{code:`/* Adapt to your needs */\n${A}`,isDarkMode:o()}),(0,L.jsx)(`h2`,{children:`Tooltip configuration`}),(0,L.jsx)(`p`,{children:`You can configure the tooltips with the following optional settings:`}),(0,L.jsxs)(`ul`,{children:[(0,L.jsxs)(`li`,{children:[(0,L.jsx)(`a`,{href:`https://floating-ui.com/docs/useFloating#placement`,children:`placement`}),` of the tooltip`]}),(0,L.jsxs)(`li`,{children:[(0,L.jsx)(`a`,{href:`https://floating-ui.com/docs/offset#options`,children:`offset`}),` to the element in pixels (4 by default)`]}),(0,L.jsxs)(`li`,{children:[`the cursor “`,(0,L.jsx)(`a`,{href:`https://floating-ui.com/docs/useHover#restms`,children:`rest time`}),`” in milliseconds before opening a tooltip (150ms by default)`]}),(0,L.jsxs)(`li`,{children:[(0,L.jsx)(`a`,{href:`https://floating-ui.com/docs/useTransition#usetransitionstyles-props`,children:`transition styles`}),` `,`to fine-tune CSS animations`]}),(0,L.jsx)(`li`,{children:`whether to draw an arrow (false by default)`})]}),(0,L.jsx)(d,{code:_e,isDarkMode:o()}),(0,L.jsx)(F,{...e,data:t,tooltips:{activity:{text:({level:e,date:t})=>`${e} activities on ${new Date(t).toLocaleDateString(`en-US`)}`,placement:`right`,offset:8,transitionStyles:{duration:100,common:{fontFamily:`monospace`}},hoverRestMs:300,withArrow:!0}},style:{margin:`2rem 0`}})]})},parameters:{docs:{source:{code:ye}}}},J={args:{...R,showMonthLabels:!1,showColorLegend:!1,showTotalCount:!1},render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]);return(0,L.jsx)(F,{...e,data:t})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} showMonthLabels={false} showColorLegend={false} showTotalCount={false} />`}}}},Y={args:{...R,showWeekdayLabels:!0},render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`h1`,{children:`Weekday labels`}),(0,L.jsx)(`h2`,{style:{fontSize:`inherit`,fontWeight:600},children:`Show label for every second weekday (default)`}),(0,L.jsx)(F,{...e,data:t,style:{marginBlock:`1rem`}}),(0,L.jsx)(d,{code:`<ActivityCalendar data={data} showWeekdayLabels />`,isDarkMode:o(),style:{marginBottom:`2rem`}}),(0,L.jsx)(`h2`,{style:{fontSize:`inherit`,fontWeight:600},children:`Show labels for Monday and Friday only`}),(0,L.jsx)(F,{...e,data:t,showWeekdayLabels:[`mon`,`fri`],style:{marginBlock:`1rem`}}),(0,L.jsx)(d,{code:`<ActivityCalendar data={data} showWeekdayLabels={['mon', 'fri']} />`,isDarkMode:o(),style:{marginBottom:`2rem`}}),(0,L.jsx)(`h2`,{style:{fontSize:`inherit`,fontWeight:600},children:`Show labels for all weekdays`}),(0,L.jsx)(F,{...e,data:t,showWeekdayLabels:[`sun`,`mon`,`tue`,`wed`,`thu`,`fri`,`sat`],style:{marginBlock:`1rem`}}),(0,L.jsx)(d,{code:xe,isDarkMode:o(),style:{marginBottom:`2rem`}})]})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} showWeekdayLabels />`}}}},X={args:{...R,showWeekdayLabels:!0,labels:{months:[`Jan`,`Feb`,`Mär`,`Apr`,`Mai`,`Jun`,`Jul`,`Aug`,`Sep`,`Okt`,`Nov`,`Dez`],weekdays:[`So`,`Mo`,`Di`,`Mi`,`Do`,`Fr`,`Sa`],totalCount:`{{count}} Aktivitäten in {{year}}`,legend:{less:`Weniger`,more:`Mehr`}}},parameters:{docs:{source:{code:w}}},render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]);return(0,L.jsxs)(y,{children:[(0,L.jsx)(`h1`,{children:`Localization`}),(0,L.jsx)(`p`,{children:`Example in German:`}),(0,L.jsx)(F,{...e,data:t,style:{margin:`2rem 0`}}),(0,L.jsx)(d,{code:C,isDarkMode:o()})]})}},Z={args:{...R,weekStart:1},render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]);return(0,L.jsx)(F,{...e,data:t})},parameters:{docs:{source:{code:`<ActivityCalendar data={data} weekStart={1} />`}}}},Q={args:R,parameters:{docs:{source:{code:`<ActivityCalendar data={data} />`}}},render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]);return(0,L.jsx)(`div`,{style:{width:480,maxWidth:`100%`,border:`dashed 1px #929292`},children:(0,L.jsx)(F,{...e,data:t})})}},$={args:R,parameters:{docs:{source:{code:T}}},render:e=>{let t=(0,I.useMemo)(()=>m({minLevel:e.minLevel,maxLevel:e.maxLevel}),[e.minLevel,e.maxLevel]),n=(0,I.useRef)(null);return(0,I.useEffect)(()=>{console.log(`calendar ref`,n)},[n]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(F,{...e,data:t,ref:n}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:`Check the JavaScript console to see the ref logged.`})]})}},et=({children:e,gap:t=`3rem`})=>(0,L.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:t},children:e}),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: defaultProps,
  render: args => {
    const data = useMemo(() => generateTestData({
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} />'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    minLevel: 0,
    maxLevel: 2
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
    return <Container>
        <h1>Activity levels</h1>
        <p>
          Use the <code>minLevel</code> and <code>maxLevel</code> props to control the range of
          activity levels. By default, the range is <code>[0, 4]</code>, resulting in 5 activity
          levels (0 through 4, inclusive). All activity data must fall within these bounds. The
          following example uses the range{' '}
          <code>
            [{args.minLevel}, {args.maxLevel}]
          </code>
          :
        </p>
        <ActivityCalendar {...args} data={data} labels={{
        legend: {
          less: String(args.minLevel),
          more: String(args.maxLevel)
        }
      }} style={{
        margin: '1.5rem 0'
      }} />
        <p>
          Activity levels support any range, including negative ones like <code>[-6, 3]</code>{' '}
          below. To calculate a scale automatically pass exactly three colors representing the
          negative, zero and positive color (see{' '}
          <LinkTo kind="react-activity-calendar" name="color-themes">
            color themes
          </LinkTo>
          ):
        </p>
        <ActivityCalendar {...args} data={generateTestData({
        minLevel: -6,
        maxLevel: 3
      })} minLevel={-6} maxLevel={3} labels={{
        legend: {
          less: '-6',
          more: '3'
        }
      }} theme={{
        light: ['red', 'hsl(0, 0%, 92%)', '#4ac26b'],
        dark: ['red', 'hsl(0, 0%, 22%)', '#4ac26b']
      }} tooltips={{
        activity: {
          text: ({
            count,
            level
          }) => \`Level \${level} (\${count} activities)\`,
          withArrow: true
        }
      }} style={{
        margin: '1.5rem 0'
      }} />
        <Source code={exampleActivityLevels} isDarkMode={useDarkMode()} />
      </Container>;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} levels={{min: 0, max: 2}} />'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: defaultProps,
  render: args => {
    const dataLong = useMemo(() => generateTestData({
      minLevel: args.minLevel,
      maxLevel: args.maxLevel,
      interval: {
        start: new Date(2022, 5, 1),
        end: new Date(2023, 4, 31)
      }
    }), [args.minLevel, args.maxLevel]);
    const dataMedium = useMemo(() => generateTestData({
      minLevel: args.minLevel,
      maxLevel: args.maxLevel,
      interval: {
        start: new Date(2023, 2, 8),
        end: new Date(2023, 7, 1)
      }
    }), [args.minLevel, args.maxLevel]);
    const dataShort = useMemo(() => generateTestData({
      minLevel: args.minLevel,
      maxLevel: args.maxLevel,
      interval: {
        start: new Date(2023, 5, 14),
        end: new Date(2023, 6, 17)
      }
    }), [args.minLevel, args.maxLevel]);
    return <Stack>
        <ActivityCalendar {...args} data={dataLong} labels={{
        totalCount: '{{count}} activities in 2022 & 2023'
      }} />
        <ActivityCalendar {...args} data={dataMedium} />
        <ActivityCalendar {...args} data={dataShort} />
      </Stack>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
    return <Container>
        <h1>Color themes</h1>
        <ActivityCalendar {...args} data={data} style={{
        margin: '2rem 0'
      }} />
        <p>
          Use the <code>theme</code> prop to configure the calendar colors for the light and dark{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme">color scheme</a>.
          Provide the colors for all activity levels per scheme{' '}
          <LinkTo kind="react-activity-calendar" name="explicit-themes">
            explicitly
          </LinkTo>{' '}
          or specify two colors (the zero and maximum intensity) to calculate a scale automatically.
          The number of activity levels is controlled by the minLevel and maxLevel props, see{' '}
          <LinkTo kind="react-activity-calendar" name="activity-levels">
            activity levels
          </LinkTo>
          . If you have negative activity levels, you can also pass three colors, representing the
          negative, zero, and positive levels, to calculate a corresponding scale. For explicit
          themes the color count must match the number of activity levels. Colors can be specified
          in any valid CSS format.
        </p>
        <p>
          For undefined color schemes the default theme is used. By default, the current system
          color scheme is applied, but you can enforce a specific scheme with the{' '}
          <a href="/?path=/docs/react-activity-calendar--docs">
            <code>colorScheme</code>
          </a>{' '}
          prop.
        </p>
        <Source code={exampleTheme} isDarkMode={useDarkMode()} />
      </Container>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    theme: explicitTheme
  },
  parameters: {
    // Levels must not be set when using a static theme
    controls: {
      exclude: ['minLevel', 'maxLevel']
    },
    docs: {
      source: {
        code: exampleThemeExplicit
      }
    }
  },
  render: args => {
    const data = useMemo(() => generateTestData(), []);
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
        marginBlock: '2rem'
      }} />
        <Source code={exampleThemeExplicit} isDarkMode={useDarkMode()} />
      </Container>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    // Levels must not be set when using a static theme
    controls: {
      exclude: ['minLevel', 'maxLevel']
    },
    docs: {
      source: {
        code: exampleCustomization
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
    return <Container>
        <h1>Event Handlers</h1>
        <p>
          Use the <code>renderBlock</code> prop to attach event handlers to the SVG{' '}
          <code>rect</code> elements that represent calendar days. Click on any block below to see
          it in action.
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    tooltips: {
      activity: {
        text: ({
          count,
          date
        }) => \`\${count} activities on \${new Date(date).toLocaleDateString('en-US')}\`
      },
      colorLegend: {
        text: level => \`Activity level \${level}\`
      }
    }
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
    return <Container>
        <h1>Tooltips</h1>
        <p>
          Use the <code>tooltips</code> prop to show tooltips when hovering the calendar days or the
          color legend. Each tooltip's content is generated by a callback function, which receives
          either the activity data or level value of the hovered element.
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
          text: ({
            level,
            date
          }) => \`\${level} activities on \${new Date(date).toLocaleDateString('en-US')}\`,
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showMonthLabels: false,
    showColorLegend: false,
    showTotalCount: false
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} showMonthLabels={false} showColorLegend={false} showTotalCount={false} />'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showWeekdayLabels: true
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
    return <>
        <h1>Weekday labels</h1>
        <h2 style={{
        fontSize: 'inherit',
        fontWeight: 600
      }}>
          Show label for every second weekday (default)
        </h2>
        <ActivityCalendar {...args} data={data} style={{
        marginBlock: '1rem'
      }} />
        <Source code={\`<ActivityCalendar data={data} showWeekdayLabels />\`} isDarkMode={useDarkMode()} style={{
        marginBottom: '2rem'
      }} />

        <h2 style={{
        fontSize: 'inherit',
        fontWeight: 600
      }}>
          Show labels for Monday and Friday only
        </h2>
        <ActivityCalendar {...args} data={data} showWeekdayLabels={['mon', 'fri']} style={{
        marginBlock: '1rem'
      }} />
        <Source code={\`<ActivityCalendar data={data} showWeekdayLabels={['mon', 'fri']} />\`} isDarkMode={useDarkMode()} style={{
        marginBottom: '2rem'
      }} />

        <h2 style={{
        fontSize: 'inherit',
        fontWeight: 600
      }}>Show labels for all weekdays</h2>
        <ActivityCalendar {...args} data={data} showWeekdayLabels={['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']} style={{
        marginBlock: '1rem'
      }} />
        <Source code={exampleWeekdaysAll} isDarkMode={useDarkMode()} style={{
        marginBottom: '2rem'
      }} />
      </>;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} showWeekdayLabels />'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
    return <Container>
        <h1>Localization</h1>
        <p>Example in German:</p>
        <ActivityCalendar {...args} data={data} style={{
        margin: '2rem 0'
      }} />
        <Source code={exampleLabelsShape} isDarkMode={useDarkMode()} />
      </Container>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    weekStart: 1
  },
  render: args => {
    const data = useMemo(() => generateTestData({
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} weekStart={1} />'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
    return <div style={{
      width: 480,
      maxWidth: '100%',
      border: 'dashed 1px #929292'
    }}>
        <ActivityCalendar {...args} data={data} />
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
      minLevel: args.minLevel,
      maxLevel: args.maxLevel
    }), [args.minLevel, args.maxLevel]);
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
}`,...$.parameters?.docs?.source}}},tt=[`Default`,`Loading`,`ActivityLevels`,`DateRanges`,`ColorThemes`,`ExplicitTheme`,`Customization`,`EventHandlers`,`Tooltips`,`WithoutLabels`,`WeekdayLabels`,`LocalizedLabels`,`MondayAsWeekStart`,`NarrowScreens`,`ContainerRef`]}))();export{V as ActivityLevels,U as ColorThemes,$ as ContainerRef,G as Customization,H as DateRanges,z as Default,K as EventHandlers,W as ExplicitTheme,B as Loading,X as LocalizedLabels,Z as MondayAsWeekStart,Q as NarrowScreens,q as Tooltips,Y as WeekdayLabels,J as WithoutLabels,tt as __namedExportsOrder,Qe as default};