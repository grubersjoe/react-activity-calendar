import{j as u,r as d,w as Cn,k as Nt,x as ge}from"./iframe-Ci1dRKEi.js";import{r as At,S as Se}from"./Source-CbZUrE9X.js";import{_ as rr}from"./preload-helper-PPVm8Dsz.js";const be=({children:e})=>u.jsx("div",{style:{margin:"1rem 0 2rem"},children:e});be.__docgenInfo={description:"",methods:[],displayName:"Container",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const or=`<ActivityCalendar
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
`,Gt=`import { cloneElement } from 'react'

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
`,ar=`import {
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

<ActivityCalendar data={data} labels={labels} showWeekdayLabels />`,sr=`<ActivityCalendar
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
`,ir=`import { useRef } from 'react'

const calendarRef = useRef<HTMLElement>(null)

if (calendar.current) {
  console.log(calendarRef.current)
}

<ActivityCalendar data={data} ref={calendarRef} />
`,lr=`<ActivityCalendar
  data={data}
  theme={{
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  }}
/>
`,Jt=`const explicitTheme: ThemeInput = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
}

<ActivityCalendar data={data} theme={explicitTheme} />

const minimalTheme: ThemeInput = {
  light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
  // for \`dark\` the default theme will be used
}

<ActivityCalendar data={data} theme={minimalTheme} />
`,cr=`<ActivityCalendar
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
`,ur=`<ActivityCalendar
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
`,dr=`.react-activity-calendar__tooltip {
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
`,fr=864e5,Rn=6e4,Ln=36e5,Xt=Symbol.for("constructDateFrom");function Pe(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Xt in e?e[Xt](t):e instanceof Date?new e.constructor(t):new Date(t)}function ee(e,t){return Pe(t||e,e)}function En(e,t,n){const r=ee(e,n?.in);return isNaN(t)?Pe(e,NaN):(t&&r.setDate(r.getDate()+t),r)}function Kt(e){const t=ee(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Tn(e,...t){const n=Pe.bind(null,t.find(r=>typeof r=="object"));return t.map(n)}function Zt(e,t){const n=ee(e,t?.in);return n.setHours(0,0,0,0),n}function mr(e,t,n){const[r,o]=Tn(n?.in,e,t),s=Zt(r),a=Zt(o),i=+s-Kt(s),l=+a-Kt(a);return Math.round((i-l)/fr)}function hr(e,t,n){return En(e,t*7,n)}function pr(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function gr(e){return!(!pr(e)&&typeof e!="number"||isNaN(+ee(e)))}function vr(e,t){const[n,r]=Tn(e,t.start,t.end);return{start:n,end:r}}function $t(e,t){const{start:n,end:r}=vr(t?.in,e);let o=+n>+r;const s=o?+n:+r,a=o?r:n;a.setHours(0,0,0,0);let i=1;const l=[];for(;+a<=s;)l.push(Pe(n,a)),a.setDate(a.getDate()+i),a.setHours(0,0,0,0);return o?l.reverse():l}function yr(e,t){const n=ee(e,t?.in),r=n.getFullYear();return n.setFullYear(r+1,0,0),n.setHours(23,59,59,999),n}function xr(e,t){const n=ee(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function de(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}function Wt(e,t){const n=ee(e,t?.in);if(isNaN(+n))throw new RangeError("Invalid time value");const r=t?.format??"extended",o=t?.representation??"complete";let s="",a="";const i=r==="extended"?"-":"",l=r==="extended"?":":"";if(o!=="time"){const c=de(n.getDate(),2),f=de(n.getMonth()+1,2);s=`${de(n.getFullYear(),4)}${i}${f}${i}${c}`}if(o!=="date"){const c=n.getTimezoneOffset();if(c!==0){const v=Math.abs(c),b=de(Math.trunc(v/60),2),w=de(v%60,2);a=`${c<0?"+":"-"}${b}:${w}`}else a="Z";const f=de(n.getHours(),2),h=de(n.getMinutes(),2),g=de(n.getSeconds(),2),m=s===""?"":"T",x=[f,h,g].join(l);s=`${s}${m}${x}${a}`}return s}function kn(e,t){return ee(e,t?.in).getDay()}function br(e,t){return ee(e,t?.in).getMonth()}function wr(e,t){return ee(e,t?.in).getFullYear()}function Sr(e,t,n){let r=t-kn(e,n);return r<=0&&(r+=7),En(e,r,n)}function Re(e,t){const n=()=>Pe(t?.in,NaN),o=Er(e);let s;if(o.date){const c=Tr(o.date,2);s=kr(c.restDateString,c.year)}if(!s||isNaN(+s))return n();const a=+s;let i=0,l;if(o.time&&(i=Ar(o.time),isNaN(i)))return n();if(o.timezone){if(l=Mr(o.timezone),isNaN(l))return n()}else{const c=new Date(a+i),f=ee(0,t?.in);return f.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),f.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),f}return ee(a+i+l,t?.in)}const $e={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Cr=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Rr=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Lr=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Er(e){const t={},n=e.split($e.dateTimeDelimiter);let r;if(n.length>2)return t;if(/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],$e.timeZoneDelimiter.test(t.date)&&(t.date=e.split($e.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length))),r){const o=$e.timezone.exec(r);o?(t.time=r.replace(o[1],""),t.timezone=o[1]):t.time=r}return t}function Tr(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};const o=r[1]?parseInt(r[1]):null,s=r[2]?parseInt(r[2]):null;return{year:s===null?o:s*100,restDateString:e.slice((r[1]||r[2]).length)}}function kr(e,t){if(t===null)return new Date(NaN);const n=e.match(Cr);if(!n)return new Date(NaN);const r=!!n[4],o=Ae(n[1]),s=Ae(n[2])-1,a=Ae(n[3]),i=Ae(n[4]),l=Ae(n[5])-1;if(r)return Fr(t,i,l)?Dr(t,i,l):new Date(NaN);{const c=new Date(0);return!Pr(t,s,a)||!Or(t,o)?new Date(NaN):(c.setUTCFullYear(t,s,Math.max(o,a)),c)}}function Ae(e){return e?parseInt(e):1}function Ar(e){const t=e.match(Rr);if(!t)return NaN;const n=xt(t[1]),r=xt(t[2]),o=xt(t[3]);return Ir(n,r,o)?n*Ln+r*Rn+o*1e3:NaN}function xt(e){return e&&parseFloat(e.replace(",","."))||0}function Mr(e){if(e==="Z")return 0;const t=e.match(Lr);if(!t)return 0;const n=t[1]==="+"?-1:1,r=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return Nr(r,o)?n*(r*Ln+o*Rn):NaN}function Dr(e,t,n){const r=new Date(0);r.setUTCFullYear(e,0,4);const o=r.getUTCDay()||7,s=(t-1)*7+n+1-o;return r.setUTCDate(r.getUTCDate()+s),r}const jr=[31,null,31,30,31,30,31,31,30,31,30,31];function An(e){return e%400===0||e%4===0&&e%100!==0}function Pr(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(jr[t]||(An(e)?29:28))}function Or(e,t){return t>=1&&t<=(An(e)?366:365)}function Fr(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}function Ir(e,t,n){return e===24?t===0&&n===0:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}function Nr(e,t){return t>=0&&t<=59}function $r(e,t,n){return hr(e,-1,n)}const Vt="react-activity-calendar",bt=8,Mn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Wr={months:Mn,weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],totalCount:"{{count}} activities in {{year}}",legend:{less:"Less",more:"More"}};function Vr(e,t){if(e.length===0)throw new Error("Activity data must not be empty.");for(const{date:n,level:r,count:o}of e){if(!gr(Re(n)))throw new Error(`Activity date '${n}' is not a valid ISO 8601 date string.`);if(o<0)throw new RangeError(`Activity count must not be negative, found ${o}.`);if(r<0||r>t)throw new RangeError(`Activity level ${r} for ${n} is out of range. It must be between 0 and ${t}.`)}}function _r(e,t=0){const n=qr(e),r=n[0],o=Re(r.date),s=kn(o)===t?o:$r(Sr(o,t)),a=[...Array(mr(o,s)).fill(void 0),...n],i=Math.ceil(a.length/7);return rt(i).map(l=>a.slice(l*7,l*7+7))}function qr(e){const t=new Map(e.map(o=>[o.date,o])),n=e[0],r=e[e.length-1];return $t({start:Re(n.date),end:Re(r.date)}).map(o=>{const s=Wt(o,{representation:"date"});return t.has(s)?t.get(s):{date:s,count:0,level:0}})}function se(e){return`${Vt}__${e}`}function rt(e){return[...Array(e).keys()]}function Hr(){const e=new Date().getFullYear();return $t({start:new Date(e,0,1),end:new Date(e,11,31)}).map(n=>({date:Wt(n,{representation:"date"}),count:0,level:0}))}function Y(e){const n=e.maxLevel?Math.max(1,e.maxLevel):4,r=new Date,o=$t(e.interval??{start:xr(r),end:yr(r)}),s=Br(o.length,n,a=>.9*Math.pow(a,2));return o.map((a,i)=>{const l=s[i];return{date:Wt(a,{representation:"date"}),count:Math.round(l*(20/n)),level:l}})}function Br(e,t,n=r=>r){const o=Ur(54321);return Array.from({length:e},()=>{const s=n(o());return Math.floor(s*(t+1))})}function Ur(e){let t=e>>>0;return()=>{t+=1831565813;let n=Math.imul(t^t>>>15,1|t);return n^=n+Math.imul(n^n>>>7,61|n),((n^n>>>14)>>>0)/4294967296}}function zr(){const[e,t]=d.useState("light"),n=r=>{t(r.matches?"dark":"light")};return d.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)");return t(r.matches?"dark":"light"),r.addEventListener("change",n),()=>{r.removeEventListener("change",n)}},[]),e}const Dn=`${Vt}--loading-animation`;function Yr(e,t){const[n,r]=d.useState(!1);return d.useEffect(()=>{const o=`oklab(from ${e} l a b)`,s=t==="light"?`oklab(from ${e} calc(l * 0.96) a b)`:`oklab(from ${e} calc(l * 1.08) a b)`,a=document.createElement("style");a.innerHTML=`
      @keyframes ${Dn} {
        0% {
          fill: ${o};
        }
        50% {
          fill: ${s};
        }
        100% {
          fill: ${o};
        }
      }
    `;const i=()=>{r(!0)};return document.head.appendChild(a),a.addEventListener("load",i),()=>{document.head.removeChild(a),a.removeEventListener("load",i),r(!1)}},[e,t]),n}const Gr="(prefers-reduced-motion: reduce)";function Jr(){const[e,t]=d.useState(!0);return d.useEffect(()=>{const n=window.matchMedia(Gr);t(n.matches);const r=o=>{t(o.matches)};return n.addEventListener("change",r),()=>{n.removeEventListener("change",r)}},[]),e}function Xr(e,t=Mn){return e.reduce((n,r,o)=>{const s=r.find(l=>l!==void 0);if(!s)throw new Error(`Unexpected error: Week ${o+1} is empty.`);const a=t[br(Re(s.date))];if(!a){const l=new Date(s.date).toLocaleString("en-US",{month:"short"});throw new Error(`Unexpected error: undefined month label for ${l}.`)}const i=n[n.length-1];return o===0||i?.label!==a?[...n,{weekIndex:o,label:a}]:n},[]).filter(({weekIndex:n},r,o)=>r===0?o[1]&&o[1].weekIndex-n>=3:r===o.length-1?e.slice(n).length>=3:!0)}function Kr(e,t,n){if(e.length!==7)throw new Error("Exactly 7 labels, one for each weekday must be passed.");return e.reduce((r,o,s)=>t.byDayIndex(s)?Math.max(r,Math.ceil(Zr(o,n).width)):r,0)}function Zr(e,t){if(typeof document>"u"||typeof window>"u")return{width:0,height:0};if(t<1)throw new RangeError("fontSize must be positive");if(e.length===0)return{width:0,height:0};const n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");r.style.position="absolute",r.style.visibility="hidden",r.style.fontFamily=window.getComputedStyle(document.body).fontFamily,r.style.fontSize=`${t}px`;const o=document.createElementNS(n,"text");o.textContent=e,r.appendChild(o),document.body.appendChild(r);const s=o.getBBox();return document.body.removeChild(r),{width:s.width,height:s.height}}function Qr(e,t){if(!e)return{byDayIndex:()=>!1,shouldShow:!1};if(e===!0)return{byDayIndex:r=>(7+r-t)%7%2!==0,shouldShow:!0};const n=[];for(const r of e){const o=eo[r.toLowerCase()];n[o]=!0}return{byDayIndex:r=>n[r]??!1,shouldShow:e.length>0}}const eo={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};function to(e,t=5){const n=no(t);return e?(ro(e,t),e.light=e.light??n.light,e.dark=e.dark??n.dark,{light:Qt(e.light)?ot(e.light,t):e.light,dark:Qt(e.dark)?ot(e.dark,t):e.dark}):n}function no(e){return{light:ot(["hsl(0, 0%, 92%)","hsl(0, 0%, 26%)"],e),dark:ot(["hsl(0, 0%, 22%)","hsl(0, 0%, 92%)"],e)}}function ro(e,t){const n='The number of colors is controlled by the "maxLevel" property.';if(typeof e!="object"||e.light===void 0&&e.dark===void 0)throw new Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${t} colors respectively. ${n}`);if(e.light){const{length:r}=e.light;if(r!==2&&r!==t)throw new Error(`theme.light must contain exactly 2 or ${t} colors, ${r} passed. ${n}`);for(const o of e.light)if(typeof window<"u"&&!CSS.supports("color",o))throw new Error(`Invalid color "${o}" passed. All CSS color formats are accepted.`)}if(e.dark){const{length:r}=e.dark;if(r!==2&&r!==t)throw new Error(`theme.dark must contain exactly 2 or ${t} colors, ${r} passed. ${n}`);for(const o of e.dark)if(typeof window<"u"&&!CSS.supports("color",o))throw new Error(`Invalid color "${o}" passed. All CSS color formats are accepted.`)}}function ot([e,t],n){return rt(n).map(r=>{switch(r){case 0:return e;case n-1:return t;default:{const o=r/(n-1)*100;return`color-mix(in oklab, ${t} ${parseFloat(o.toFixed(2))}%, ${e})`}}})}function Qt(e){return e.length===2}const pe={container:e=>({width:"max-content",maxWidth:"100%",display:"flex",flexDirection:"column",gap:"8px",fontSize:`${e}px`}),scrollContainer:e=>({maxWidth:"100%",overflowX:"auto",overflowY:"hidden",paddingTop:Math.ceil(.1*e)}),calendar:{display:"block",overflow:"visible"},rect:e=>({stroke:e==="light"?"rgba(0, 0, 0, 0.08)":"rgba(255, 255, 255, 0.04)"}),footer:{container:{display:"flex",flexWrap:"wrap",gap:"4px 16px",whiteSpace:"nowrap"},legend:{marginLeft:"auto",display:"flex",alignItems:"center",gap:"3px"}}};function dt(){return typeof window<"u"}function Ee(e){return _t(e)?(e.nodeName||"").toLowerCase():"#document"}function X(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ae(e){var t;return(t=(_t(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function _t(e){return dt()?e instanceof Node||e instanceof X(e).Node:!1}function V(e){return dt()?e instanceof Element||e instanceof X(e).Element:!1}function ne(e){return dt()?e instanceof HTMLElement||e instanceof X(e).HTMLElement:!1}function Mt(e){return!dt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof X(e).ShadowRoot}const oo=new Set(["inline","contents"]);function Oe(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Z(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!oo.has(o)}const ao=new Set(["table","td","th"]);function so(e){return ao.has(Ee(e))}const io=[":popover-open",":modal"];function ft(e){return io.some(t=>{try{return e.matches(t)}catch{return!1}})}const lo=["transform","translate","scale","rotate","perspective"],co=["transform","translate","scale","rotate","perspective","filter"],uo=["paint","layout","strict","content"];function qt(e){const t=mt(),n=V(e)?Z(e):e;return lo.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||co.some(r=>(n.willChange||"").includes(r))||uo.some(r=>(n.contain||"").includes(r))}function fo(e){let t=ce(e);for(;ne(t)&&!le(t);){if(qt(t))return t;if(ft(t))return null;t=ce(t)}return null}function mt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const mo=new Set(["html","body","#document"]);function le(e){return mo.has(Ee(e))}function Z(e){return X(e).getComputedStyle(e)}function ht(e){return V(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ce(e){if(Ee(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Mt(e)&&e.host||ae(e);return Mt(t)?t.host:t}function jn(e){const t=ce(e);return le(t)?e.ownerDocument?e.ownerDocument.body:e.body:ne(t)&&Oe(t)?t:jn(t)}function he(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=jn(e),s=o===((r=e.ownerDocument)==null?void 0:r.body),a=X(o);if(s){const i=Dt(a);return t.concat(a,a.visualViewport||[],Oe(o)?o:[],i&&n?he(i):[])}return t.concat(o,he(o,[],n))}function Dt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}const Le=Math.min,ve=Math.max,at=Math.round,We=Math.floor,oe=e=>({x:e,y:e}),ho={left:"right",right:"left",bottom:"top",top:"bottom"},po={start:"end",end:"start"};function jt(e,t,n){return ve(e,Le(t,n))}function Fe(e,t){return typeof e=="function"?e(t):e}function ye(e){return e.split("-")[0]}function Ie(e){return e.split("-")[1]}function Pn(e){return e==="x"?"y":"x"}function Ht(e){return e==="y"?"height":"width"}const go=new Set(["top","bottom"]);function fe(e){return go.has(ye(e))?"y":"x"}function Bt(e){return Pn(fe(e))}function vo(e,t,n){n===void 0&&(n=!1);const r=Ie(e),o=Bt(e),s=Ht(o);let a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=st(a)),[a,st(a)]}function yo(e){const t=st(e);return[Pt(e),t,Pt(t)]}function Pt(e){return e.replace(/start|end/g,t=>po[t])}const en=["left","right"],tn=["right","left"],xo=["top","bottom"],bo=["bottom","top"];function wo(e,t,n){switch(e){case"top":case"bottom":return n?t?tn:en:t?en:tn;case"left":case"right":return t?xo:bo;default:return[]}}function So(e,t,n,r){const o=Ie(e);let s=wo(ye(e),n==="start",r);return o&&(s=s.map(a=>a+"-"+o),t&&(s=s.concat(s.map(Pt)))),s}function st(e){return e.replace(/left|right|bottom|top/g,t=>ho[t])}function Co(e){return{top:0,right:0,bottom:0,left:0,...e}}function On(e){return typeof e!="number"?Co(e):{top:e,right:e,bottom:e,left:e}}function it(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}var Ro=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],Ot=Ro.join(","),Fn=typeof Element>"u",De=Fn?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,lt=!Fn&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e?.ownerDocument},je=function(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),s=o===""||o==="true",a=s||n&&t&&je(t.parentNode);return a},Lo=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},Eo=function(t,n,r){if(je(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(Ot));return n&&De.call(t,Ot)&&o.unshift(t),o=o.filter(r),o},Ft=function(t,n,r){for(var o=[],s=Array.from(t);s.length;){var a=s.shift();if(!je(a,!1))if(a.tagName==="SLOT"){var i=a.assignedElements(),l=i.length?i:a.children,c=Ft(l,!0,r);r.flatten?o.push.apply(o,c):o.push({scopeParent:a,candidates:c})}else{var f=De.call(a,Ot);f&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var h=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),g=!je(h,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(h&&g){var m=Ft(h===!0?a.children:h.children,!0,r);r.flatten?o.push.apply(o,m):o.push({scopeParent:a,candidates:m})}else s.unshift.apply(s,a.children)}}return o},In=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},Nn=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Lo(t))&&!In(t)?0:t.tabIndex},To=function(t,n){var r=Nn(t);return r<0&&n&&!In(t)?0:r},ko=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},$n=function(t){return t.tagName==="INPUT"},Ao=function(t){return $n(t)&&t.type==="hidden"},Mo=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},Do=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},jo=function(t){if(!t.name)return!0;var n=t.form||lt(t),r=function(i){return n.querySelectorAll('input[type="radio"][name="'+i+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var s=Do(o,t.form);return!s||s===t},Po=function(t){return $n(t)&&t.type==="radio"},Oo=function(t){return Po(t)&&!jo(t)},Fo=function(t){var n,r=t&&lt(t),o=(n=r)===null||n===void 0?void 0:n.host,s=!1;if(r&&r!==t){var a,i,l;for(s=!!((a=o)!==null&&a!==void 0&&(i=a.ownerDocument)!==null&&i!==void 0&&i.contains(o)||t!=null&&(l=t.ownerDocument)!==null&&l!==void 0&&l.contains(t));!s&&o;){var c,f,h;r=lt(o),o=(c=r)===null||c===void 0?void 0:c.host,s=!!((f=o)!==null&&f!==void 0&&(h=f.ownerDocument)!==null&&h!==void 0&&h.contains(o))}}return s},nn=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},Io=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(r==="full-native"&&"checkVisibility"in t){var s=t.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});return!s}if(getComputedStyle(t).visibility==="hidden")return!0;var a=De.call(t,"details>summary:first-of-type"),i=a?t.parentElement:t;if(De.call(i,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="full-native"||r==="legacy-full"){if(typeof o=="function"){for(var l=t;t;){var c=t.parentElement,f=lt(t);if(c&&!c.shadowRoot&&o(c)===!0)return nn(t);t.assignedSlot?t=t.assignedSlot:!c&&f!==t.ownerDocument?t=f.host:t=c}t=l}if(Fo(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return nn(t);return!1},No=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return De.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},$o=function(t,n){return!(n.disabled||je(n)||Ao(n)||Io(n,t)||Mo(n)||No(n))},rn=function(t,n){return!(Oo(n)||Nn(n)<0||!$o(t,n))},Wo=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Wn=function(t){var n=[],r=[];return t.forEach(function(o,s){var a=!!o.scopeParent,i=a?o.scopeParent:o,l=To(i,a),c=a?Wn(o.candidates):i;l===0?a?n.push.apply(n,c):n.push(i):r.push({documentOrder:s,tabIndex:l,item:o,isScope:a,content:c})}),r.sort(ko).reduce(function(o,s){return s.isScope?o.push.apply(o,s.content):o.push(s.content),o},[]).concat(n)},Vn=function(t,n){n=n||{};var r;return n.getShadowRoot?r=Ft([t],n.includeContainer,{filter:rn.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:Wo}):r=Eo(t,n.includeContainer,rn.bind(null,n)),Wn(r)};function Vo(){return/apple/i.test(navigator.vendor)}const on="data-floating-ui-focusable";function _o(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function ct(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Mt(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Me(e){return"composedPath"in e?e.composedPath()[0]:e.target}function wt(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function qo(e){return e.matches("html,body")}function ie(e){return e?.ownerDocument||document}function Ho(e){return e?e.hasAttribute(on)?e:e.querySelector("["+on+"]")||e:null}function tt(e,t,n){return n===void 0&&(n=!0),e.filter(o=>{var s;return o.parentId===t&&(!n||((s=o.context)==null?void 0:s.open))}).flatMap(o=>[o,...tt(e,o.id,n)])}function Bo(e){return"nativeEvent"in e}function It(e,t){const n=["mouse","pen"];return n.push("",void 0),n.includes(e)}var Uo=typeof document<"u",zo=function(){},K=Uo?d.useLayoutEffect:zo;const Yo={...Cn};function me(e){const t=d.useRef(e);return K(()=>{t.current=e}),t}const Go=Yo.useInsertionEffect,Jo=Go||(e=>e());function re(e){const t=d.useRef(()=>{});return Jo(()=>{t.current=e}),d.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}const _n=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function qn(e,t){const n=Vn(e,_n()),r=n.length;if(r===0)return;const o=_o(ie(e)),s=n.indexOf(o),a=s===-1?t===1?0:r-1:s+t;return n[a]}function Xo(e){return qn(ie(e).body,1)||e}function Ko(e){return qn(ie(e).body,-1)||e}function St(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!ct(n,r)}function Zo(e){Vn(e,_n()).forEach(n=>{n.dataset.tabindex=n.getAttribute("tabindex")||"",n.setAttribute("tabindex","-1")})}function an(e){e.querySelectorAll("[data-tabindex]").forEach(n=>{const r=n.dataset.tabindex;delete n.dataset.tabindex,r?n.setAttribute("tabindex",r):n.removeAttribute("tabindex")})}function sn(e,t,n){let{reference:r,floating:o}=e;const s=fe(t),a=Bt(t),i=Ht(a),l=ye(t),c=s==="y",f=r.x+r.width/2-o.width/2,h=r.y+r.height/2-o.height/2,g=r[i]/2-o[i]/2;let m;switch(l){case"top":m={x:f,y:r.y-o.height};break;case"bottom":m={x:f,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:h};break;case"left":m={x:r.x-o.width,y:h};break;default:m={x:r.x,y:r.y}}switch(Ie(t)){case"start":m[a]-=g*(n&&c?-1:1);break;case"end":m[a]+=g*(n&&c?-1:1);break}return m}const Qo=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:a}=n,i=s.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:h}=sn(c,r,l),g=r,m={},x=0;for(let v=0;v<i.length;v++){const{name:b,fn:w}=i[v],{x:y,y:S,data:L,reset:T}=await w({x:f,y:h,initialPlacement:r,placement:g,strategy:o,middlewareData:m,rects:c,platform:a,elements:{reference:e,floating:t}});f=y??f,h=S??h,m={...m,[b]:{...m[b],...L}},T&&x<=50&&(x++,typeof T=="object"&&(T.placement&&(g=T.placement),T.rects&&(c=T.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):T.rects),{x:f,y:h}=sn(c,g,l)),v=-1)}return{x:f,y:h,placement:g,strategy:o,middlewareData:m}};async function Hn(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:s,rects:a,elements:i,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:g=!1,padding:m=0}=Fe(t,e),x=On(m),b=i[g?h==="floating"?"reference":"floating":h],w=it(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(b)))==null||n?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(i.floating)),boundary:c,rootBoundary:f,strategy:l})),y=h==="floating"?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,S=await(s.getOffsetParent==null?void 0:s.getOffsetParent(i.floating)),L=await(s.isElement==null?void 0:s.isElement(S))?await(s.getScale==null?void 0:s.getScale(S))||{x:1,y:1}:{x:1,y:1},T=it(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:y,offsetParent:S,strategy:l}):y);return{top:(w.top-T.top+x.top)/L.y,bottom:(T.bottom-w.bottom+x.bottom)/L.y,left:(w.left-T.left+x.left)/L.x,right:(T.right-w.right+x.right)/L.x}}const ea=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:s,platform:a,elements:i,middlewareData:l}=t,{element:c,padding:f=0}=Fe(e,t)||{};if(c==null)return{};const h=On(f),g={x:n,y:r},m=Bt(o),x=Ht(m),v=await a.getDimensions(c),b=m==="y",w=b?"top":"left",y=b?"bottom":"right",S=b?"clientHeight":"clientWidth",L=s.reference[x]+s.reference[m]-g[m]-s.floating[x],T=g[m]-s.reference[m],j=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c));let A=j?j[S]:0;(!A||!await(a.isElement==null?void 0:a.isElement(j)))&&(A=i.floating[S]||s.floating[x]);const P=L/2-T/2,O=A/2-v[x]/2-1,F=Le(h[w],O),W=Le(h[y],O),N=F,$=A-v[x]-W,C=A/2-v[x]/2+P,M=jt(N,C,$),k=!l.arrow&&Ie(o)!=null&&C!==M&&s.reference[x]/2-(C<N?F:W)-v[x]/2<0,R=k?C<N?C-N:C-$:0;return{[m]:g[m]+R,data:{[m]:M,centerOffset:C-M-R,...k&&{alignmentOffset:R}},reset:k}}}),ta=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:s,rects:a,initialPlacement:i,platform:l,elements:c}=t,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:g,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:v=!0,...b}=Fe(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const w=ye(o),y=fe(i),S=ye(i)===i,L=await(l.isRTL==null?void 0:l.isRTL(c.floating)),T=g||(S||!v?[st(i)]:yo(i)),j=x!=="none";!g&&j&&T.push(...So(i,v,x,L));const A=[i,...T],P=await Hn(t,b),O=[];let F=((r=s.flip)==null?void 0:r.overflows)||[];if(f&&O.push(P[w]),h){const C=vo(o,a,L);O.push(P[C[0]],P[C[1]])}if(F=[...F,{placement:o,overflows:O}],!O.every(C=>C<=0)){var W,N;const C=(((W=s.flip)==null?void 0:W.index)||0)+1,M=A[C];if(M&&(!(h==="alignment"?y!==fe(M):!1)||F.every(p=>fe(p.placement)===y?p.overflows[0]>0:!0)))return{data:{index:C,overflows:F},reset:{placement:M}};let k=(N=F.filter(R=>R.overflows[0]<=0).sort((R,p)=>R.overflows[1]-p.overflows[1])[0])==null?void 0:N.placement;if(!k)switch(m){case"bestFit":{var $;const R=($=F.filter(p=>{if(j){const E=fe(p.placement);return E===y||E==="y"}return!0}).map(p=>[p.placement,p.overflows.filter(E=>E>0).reduce((E,D)=>E+D,0)]).sort((p,E)=>p[1]-E[1])[0])==null?void 0:$[0];R&&(k=R);break}case"initialPlacement":k=i;break}if(o!==k)return{reset:{placement:k}}}return{}}}},na=new Set(["left","top"]);async function ra(e,t){const{placement:n,platform:r,elements:o}=e,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=ye(n),i=Ie(n),l=fe(n)==="y",c=na.has(a)?-1:1,f=s&&l?-1:1,h=Fe(t,e);let{mainAxis:g,crossAxis:m,alignmentAxis:x}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return i&&typeof x=="number"&&(m=i==="end"?x*-1:x),l?{x:m*f,y:g*c}:{x:g*c,y:m*f}}const oa=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:s,placement:a,middlewareData:i}=t,l=await ra(t,e);return a===((n=i.offset)==null?void 0:n.placement)&&(r=i.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:s+l.y,data:{...l,placement:a}}}}},aa=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:i={fn:b=>{let{x:w,y}=b;return{x:w,y}}},...l}=Fe(e,t),c={x:n,y:r},f=await Hn(t,l),h=fe(ye(o)),g=Pn(h);let m=c[g],x=c[h];if(s){const b=g==="y"?"top":"left",w=g==="y"?"bottom":"right",y=m+f[b],S=m-f[w];m=jt(y,m,S)}if(a){const b=h==="y"?"top":"left",w=h==="y"?"bottom":"right",y=x+f[b],S=x-f[w];x=jt(y,x,S)}const v=i.fn({...t,[g]:m,[h]:x});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[g]:s,[h]:a}}}}}};function Bn(e){const t=Z(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=ne(e),s=o?e.offsetWidth:n,a=o?e.offsetHeight:r,i=at(n)!==s||at(r)!==a;return i&&(n=s,r=a),{width:n,height:r,$:i}}function Ut(e){return V(e)?e:e.contextElement}function Ce(e){const t=Ut(e);if(!ne(t))return oe(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:s}=Bn(t);let a=(s?at(n.width):n.width)/r,i=(s?at(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!i||!Number.isFinite(i))&&(i=1),{x:a,y:i}}const sa=oe(0);function Un(e){const t=X(e);return!mt()||!t.visualViewport?sa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ia(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==X(e)?!1:t}function xe(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),s=Ut(e);let a=oe(1);t&&(r?V(r)&&(a=Ce(r)):a=Ce(e));const i=ia(s,n,r)?Un(s):oe(0);let l=(o.left+i.x)/a.x,c=(o.top+i.y)/a.y,f=o.width/a.x,h=o.height/a.y;if(s){const g=X(s),m=r&&V(r)?X(r):r;let x=g,v=Dt(x);for(;v&&r&&m!==x;){const b=Ce(v),w=v.getBoundingClientRect(),y=Z(v),S=w.left+(v.clientLeft+parseFloat(y.paddingLeft))*b.x,L=w.top+(v.clientTop+parseFloat(y.paddingTop))*b.y;l*=b.x,c*=b.y,f*=b.x,h*=b.y,l+=S,c+=L,x=X(v),v=Dt(x)}}return it({width:f,height:h,x:l,y:c})}function pt(e,t){const n=ht(e).scrollLeft;return t?t.left+n:xe(ae(e)).left+n}function zn(e,t){const n=e.getBoundingClientRect(),r=n.left+t.scrollLeft-pt(e,n),o=n.top+t.scrollTop;return{x:r,y:o}}function la(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const s=o==="fixed",a=ae(r),i=t?ft(t.floating):!1;if(r===a||i&&s)return n;let l={scrollLeft:0,scrollTop:0},c=oe(1);const f=oe(0),h=ne(r);if((h||!h&&!s)&&((Ee(r)!=="body"||Oe(a))&&(l=ht(r)),ne(r))){const m=xe(r);c=Ce(r),f.x=m.x+r.clientLeft,f.y=m.y+r.clientTop}const g=a&&!h&&!s?zn(a,l):oe(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+f.x+g.x,y:n.y*c.y-l.scrollTop*c.y+f.y+g.y}}function ca(e){return Array.from(e.getClientRects())}function ua(e){const t=ae(e),n=ht(e),r=e.ownerDocument.body,o=ve(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=ve(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+pt(e);const i=-n.scrollTop;return Z(r).direction==="rtl"&&(a+=ve(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:a,y:i}}const ln=25;function da(e,t){const n=X(e),r=ae(e),o=n.visualViewport;let s=r.clientWidth,a=r.clientHeight,i=0,l=0;if(o){s=o.width,a=o.height;const f=mt();(!f||f&&t==="fixed")&&(i=o.offsetLeft,l=o.offsetTop)}const c=pt(r);if(c<=0){const f=r.ownerDocument,h=f.body,g=getComputedStyle(h),m=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,x=Math.abs(r.clientWidth-h.clientWidth-m);x<=ln&&(s-=x)}else c<=ln&&(s+=c);return{width:s,height:a,x:i,y:l}}const fa=new Set(["absolute","fixed"]);function ma(e,t){const n=xe(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,s=ne(e)?Ce(e):oe(1),a=e.clientWidth*s.x,i=e.clientHeight*s.y,l=o*s.x,c=r*s.y;return{width:a,height:i,x:l,y:c}}function cn(e,t,n){let r;if(t==="viewport")r=da(e,n);else if(t==="document")r=ua(ae(e));else if(V(t))r=ma(t,n);else{const o=Un(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return it(r)}function Yn(e,t){const n=ce(e);return n===t||!V(n)||le(n)?!1:Z(n).position==="fixed"||Yn(n,t)}function ha(e,t){const n=t.get(e);if(n)return n;let r=he(e,[],!1).filter(i=>V(i)&&Ee(i)!=="body"),o=null;const s=Z(e).position==="fixed";let a=s?ce(e):e;for(;V(a)&&!le(a);){const i=Z(a),l=qt(a);!l&&i.position==="fixed"&&(o=null),(s?!l&&!o:!l&&i.position==="static"&&!!o&&fa.has(o.position)||Oe(a)&&!l&&Yn(e,a))?r=r.filter(f=>f!==a):o=i,a=ce(a)}return t.set(e,r),r}function pa(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?ft(t)?[]:ha(t,this._c):[].concat(n),r],i=a[0],l=a.reduce((c,f)=>{const h=cn(t,f,o);return c.top=ve(h.top,c.top),c.right=Le(h.right,c.right),c.bottom=Le(h.bottom,c.bottom),c.left=ve(h.left,c.left),c},cn(t,i,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ga(e){const{width:t,height:n}=Bn(e);return{width:t,height:n}}function va(e,t,n){const r=ne(t),o=ae(t),s=n==="fixed",a=xe(e,!0,s,t);let i={scrollLeft:0,scrollTop:0};const l=oe(0);function c(){l.x=pt(o)}if(r||!r&&!s)if((Ee(t)!=="body"||Oe(o))&&(i=ht(t)),r){const m=xe(t,!0,s,t);l.x=m.x+t.clientLeft,l.y=m.y+t.clientTop}else o&&c();s&&!r&&o&&c();const f=o&&!r&&!s?zn(o,i):oe(0),h=a.left+i.scrollLeft-l.x-f.x,g=a.top+i.scrollTop-l.y-f.y;return{x:h,y:g,width:a.width,height:a.height}}function Ct(e){return Z(e).position==="static"}function un(e,t){if(!ne(e)||Z(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return ae(e)===n&&(n=n.ownerDocument.body),n}function Gn(e,t){const n=X(e);if(ft(e))return n;if(!ne(e)){let o=ce(e);for(;o&&!le(o);){if(V(o)&&!Ct(o))return o;o=ce(o)}return n}let r=un(e,t);for(;r&&so(r)&&Ct(r);)r=un(r,t);return r&&le(r)&&Ct(r)&&!qt(r)?n:r||fo(e)||n}const ya=async function(e){const t=this.getOffsetParent||Gn,n=this.getDimensions,r=await n(e.floating);return{reference:va(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function xa(e){return Z(e).direction==="rtl"}const ba={convertOffsetParentRelativeRectToViewportRelativeRect:la,getDocumentElement:ae,getClippingRect:pa,getOffsetParent:Gn,getElementRects:ya,getClientRects:ca,getDimensions:ga,getScale:Ce,isElement:V,isRTL:xa};function Jn(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function wa(e,t){let n=null,r;const o=ae(e);function s(){var i;clearTimeout(r),(i=n)==null||i.disconnect(),n=null}function a(i,l){i===void 0&&(i=!1),l===void 0&&(l=1),s();const c=e.getBoundingClientRect(),{left:f,top:h,width:g,height:m}=c;if(i||t(),!g||!m)return;const x=We(h),v=We(o.clientWidth-(f+g)),b=We(o.clientHeight-(h+m)),w=We(f),S={rootMargin:-x+"px "+-v+"px "+-b+"px "+-w+"px",threshold:ve(0,Le(1,l))||1};let L=!0;function T(j){const A=j[0].intersectionRatio;if(A!==l){if(!L)return a();A?a(!1,A):r=setTimeout(()=>{a(!1,1e-7)},1e3)}A===1&&!Jn(c,e.getBoundingClientRect())&&a(),L=!1}try{n=new IntersectionObserver(T,{...S,root:o.ownerDocument})}catch{n=new IntersectionObserver(T,S)}n.observe(e)}return a(!0),s}function Sa(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=Ut(e),f=o||s?[...c?he(c):[],...he(t)]:[];f.forEach(w=>{o&&w.addEventListener("scroll",n,{passive:!0}),s&&w.addEventListener("resize",n)});const h=c&&i?wa(c,n):null;let g=-1,m=null;a&&(m=new ResizeObserver(w=>{let[y]=w;y&&y.target===c&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var S;(S=m)==null||S.observe(t)})),n()}),c&&!l&&m.observe(c),m.observe(t));let x,v=l?xe(e):null;l&&b();function b(){const w=xe(e);v&&!Jn(v,w)&&n(),v=w,x=requestAnimationFrame(b)}return n(),()=>{var w;f.forEach(y=>{o&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),h?.(),(w=m)==null||w.disconnect(),m=null,l&&cancelAnimationFrame(x)}}const Ca=oa,Ra=aa,La=ta,dn=ea,Ea=(e,t,n)=>{const r=new Map,o={platform:ba,...n},s={...o.platform,_c:r};return Qo(e,t,{...o,platform:s})};var Ta=typeof document<"u",ka=function(){},nt=Ta?d.useLayoutEffect:ka;function ut(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!ut(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const s=o[r];if(!(s==="_owner"&&e.$$typeof)&&!ut(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function Xn(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function fn(e,t){const n=Xn(e);return Math.round(t*n)/n}function Rt(e){const t=d.useRef(e);return nt(()=>{t.current=e}),t}function Aa(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:s,floating:a}={},transform:i=!0,whileElementsMounted:l,open:c}=e,[f,h]=d.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[g,m]=d.useState(r);ut(g,r)||m(r);const[x,v]=d.useState(null),[b,w]=d.useState(null),y=d.useCallback(p=>{p!==j.current&&(j.current=p,v(p))},[]),S=d.useCallback(p=>{p!==A.current&&(A.current=p,w(p))},[]),L=s||x,T=a||b,j=d.useRef(null),A=d.useRef(null),P=d.useRef(f),O=l!=null,F=Rt(l),W=Rt(o),N=Rt(c),$=d.useCallback(()=>{if(!j.current||!A.current)return;const p={placement:t,strategy:n,middleware:g};W.current&&(p.platform=W.current),Ea(j.current,A.current,p).then(E=>{const D={...E,isPositioned:N.current!==!1};C.current&&!ut(P.current,D)&&(P.current=D,Nt.flushSync(()=>{h(D)}))})},[g,t,n,W,N]);nt(()=>{c===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,h(p=>({...p,isPositioned:!1})))},[c]);const C=d.useRef(!1);nt(()=>(C.current=!0,()=>{C.current=!1}),[]),nt(()=>{if(L&&(j.current=L),T&&(A.current=T),L&&T){if(F.current)return F.current(L,T,$);$()}},[L,T,$,F,O]);const M=d.useMemo(()=>({reference:j,floating:A,setReference:y,setFloating:S}),[y,S]),k=d.useMemo(()=>({reference:L,floating:T}),[L,T]),R=d.useMemo(()=>{const p={position:n,left:0,top:0};if(!k.floating)return p;const E=fn(k.floating,f.x),D=fn(k.floating,f.y);return i?{...p,transform:"translate("+E+"px, "+D+"px)",...Xn(k.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:E,top:D}},[n,i,k.floating,f.x,f.y]);return d.useMemo(()=>({...f,update:$,refs:M,elements:k,floatingStyles:R}),[f,$,M,k,R])}const Ma=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?dn({element:r.current,padding:o}).fn(n):{}:r?dn({element:r,padding:o}).fn(n):{}}}},Da=(e,t)=>({...Ca(e),options:[e,t]}),ja=(e,t)=>({...Ra(e),options:[e,t]}),Pa=(e,t)=>({...La(e),options:[e,t]}),Oa=(e,t)=>({...Ma(e),options:[e,t]}),Fa="data-floating-ui-focusable",mn="active",hn="selected",Ia={...Cn};let pn=!1,Na=0;const gn=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Na++;function $a(){const[e,t]=d.useState(()=>pn?gn():void 0);return K(()=>{e==null&&t(gn())},[]),d.useEffect(()=>{pn=!0},[]),e}const Wa=Ia.useId,gt=Wa||$a,Va=d.forwardRef(function(t,n){const{context:{placement:r,elements:{floating:o},middlewareData:{arrow:s,shift:a}},width:i=14,height:l=7,tipRadius:c=0,strokeWidth:f=0,staticOffset:h,stroke:g,d:m,style:{transform:x,...v}={},...b}=t,w=gt(),[y,S]=d.useState(!1);if(K(()=>{if(!o)return;Z(o).direction==="rtl"&&S(!0)},[o]),!o)return null;const[L,T]=r.split("-"),j=L==="top"||L==="bottom";let A=h;(j&&a!=null&&a.x||!j&&a!=null&&a.y)&&(A=null);const P=f*2,O=P/2,F=i/2*(c/-8+1),W=l/2*c/4,N=!!m,$=A&&T==="end"?"bottom":"top";let C=A&&T==="end"?"right":"left";A&&y&&(C=T==="end"?"left":"right");const M=s?.x!=null?A||s.x:"",k=s?.y!=null?A||s.y:"",R=m||"M0,0"+(" H"+i)+(" L"+(i-F)+","+(l-W))+(" Q"+i/2+","+l+" "+F+","+(l-W))+" Z",p={top:N?"rotate(180deg)":"",left:N?"rotate(90deg)":"rotate(-90deg)",bottom:N?"":"rotate(180deg)",right:N?"rotate(-90deg)":"rotate(90deg)"}[L];return u.jsxs("svg",{...b,"aria-hidden":!0,ref:n,width:N?i:i+P,height:i,viewBox:"0 0 "+i+" "+(l>i?l:i),style:{position:"absolute",pointerEvents:"none",[C]:M,[$]:k,[L]:j||N?"100%":"calc(100% - "+P/2+"px)",transform:[p,x].filter(E=>!!E).join(" "),...v},children:[P>0&&u.jsx("path",{clipPath:"url(#"+w+")",fill:"none",stroke:g,strokeWidth:P+(m?0:1),d:R}),u.jsx("path",{stroke:P&&!m?b.fill:"none",d:R}),u.jsx("clipPath",{id:w,children:u.jsx("rect",{x:-O,y:O*(N?-1:1),width:i+P,height:i})})]})});function _a(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){var r;(r=e.get(t))==null||r.delete(n)}}}const qa=d.createContext(null),Ha=d.createContext(null),zt=()=>{var e;return((e=d.useContext(qa))==null?void 0:e.id)||null},Yt=()=>d.useContext(Ha);function vt(e){return"data-floating-ui-"+e}function te(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const vn=vt("safe-polygon");function Lt(e,t,n){if(n&&!It(n))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const r=e();return typeof r=="number"?r:r?.[t]}return e?.[t]}function Et(e){return typeof e=="function"?e():e}function Ba(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,events:s,elements:a}=e,{enabled:i=!0,delay:l=0,handleClose:c=null,mouseOnly:f=!1,restMs:h=0,move:g=!0}=t,m=Yt(),x=zt(),v=me(c),b=me(l),w=me(n),y=me(h),S=d.useRef(),L=d.useRef(-1),T=d.useRef(),j=d.useRef(-1),A=d.useRef(!0),P=d.useRef(!1),O=d.useRef(()=>{}),F=d.useRef(!1),W=re(()=>{var R;const p=(R=o.current.openEvent)==null?void 0:R.type;return p?.includes("mouse")&&p!=="mousedown"});d.useEffect(()=>{if(!i)return;function R(p){let{open:E}=p;E||(te(L),te(j),A.current=!0,F.current=!1)}return s.on("openchange",R),()=>{s.off("openchange",R)}},[i,s]),d.useEffect(()=>{if(!i||!v.current||!n)return;function R(E){W()&&r(!1,E,"hover")}const p=ie(a.floating).documentElement;return p.addEventListener("mouseleave",R),()=>{p.removeEventListener("mouseleave",R)}},[a.floating,n,r,i,v,W]);const N=d.useCallback(function(R,p,E){p===void 0&&(p=!0),E===void 0&&(E="hover");const D=Lt(b.current,"close",S.current);D&&!T.current?(te(L),L.current=window.setTimeout(()=>r(!1,R,E),D)):p&&(te(L),r(!1,R,E))},[b,r]),$=re(()=>{O.current(),T.current=void 0}),C=re(()=>{if(P.current){const R=ie(a.floating).body;R.style.pointerEvents="",R.removeAttribute(vn),P.current=!1}}),M=re(()=>o.current.openEvent?["click","mousedown"].includes(o.current.openEvent.type):!1);d.useEffect(()=>{if(!i)return;function R(I){if(te(L),A.current=!1,f&&!It(S.current)||Et(y.current)>0&&!Lt(b.current,"open"))return;const q=Lt(b.current,"open",S.current);q?L.current=window.setTimeout(()=>{w.current||r(!0,I,"hover")},q):n||r(!0,I,"hover")}function p(I){if(M()){C();return}O.current();const q=ie(a.floating);if(te(j),F.current=!1,v.current&&o.current.floatingContext){n||te(L),T.current=v.current({...o.current.floatingContext,tree:m,x:I.clientX,y:I.clientY,onClose(){C(),$(),M()||N(I,!0,"safe-polygon")}});const B=T.current;q.addEventListener("mousemove",B),O.current=()=>{q.removeEventListener("mousemove",B)};return}(S.current!=="touch"||!ct(a.floating,I.relatedTarget))&&N(I)}function E(I){M()||o.current.floatingContext&&(v.current==null||v.current({...o.current.floatingContext,tree:m,x:I.clientX,y:I.clientY,onClose(){C(),$(),M()||N(I)}})(I))}function D(){te(L)}function z(I){M()||N(I,!1)}if(V(a.domReference)){const I=a.domReference,q=a.floating;return n&&I.addEventListener("mouseleave",E),g&&I.addEventListener("mousemove",R,{once:!0}),I.addEventListener("mouseenter",R),I.addEventListener("mouseleave",p),q&&(q.addEventListener("mouseleave",E),q.addEventListener("mouseenter",D),q.addEventListener("mouseleave",z)),()=>{n&&I.removeEventListener("mouseleave",E),g&&I.removeEventListener("mousemove",R),I.removeEventListener("mouseenter",R),I.removeEventListener("mouseleave",p),q&&(q.removeEventListener("mouseleave",E),q.removeEventListener("mouseenter",D),q.removeEventListener("mouseleave",z))}}},[a,i,e,f,g,N,$,C,r,n,w,m,b,v,o,M,y]),K(()=>{var R;if(i&&n&&(R=v.current)!=null&&(R=R.__options)!=null&&R.blockPointerEvents&&W()){P.current=!0;const E=a.floating;if(V(a.domReference)&&E){var p;const D=ie(a.floating).body;D.setAttribute(vn,"");const z=a.domReference,I=m==null||(p=m.nodesRef.current.find(q=>q.id===x))==null||(p=p.context)==null?void 0:p.elements.floating;return I&&(I.style.pointerEvents=""),D.style.pointerEvents="none",z.style.pointerEvents="auto",E.style.pointerEvents="auto",()=>{D.style.pointerEvents="",z.style.pointerEvents="",E.style.pointerEvents=""}}}},[i,n,x,a,m,v,W]),K(()=>{n||(S.current=void 0,F.current=!1,$(),C())},[n,$,C]),d.useEffect(()=>()=>{$(),te(L),te(j),C()},[i,a.domReference,$,C]);const k=d.useMemo(()=>{function R(p){S.current=p.pointerType}return{onPointerDown:R,onPointerEnter:R,onMouseMove(p){const{nativeEvent:E}=p;function D(){!A.current&&!w.current&&r(!0,E,"hover")}f&&!It(S.current)||n||Et(y.current)===0||F.current&&p.movementX**2+p.movementY**2<2||(te(j),S.current==="touch"?D():(F.current=!0,j.current=window.setTimeout(D,Et(y.current))))}}},[f,r,n,w,y]);return d.useMemo(()=>i?{reference:k}:{},[i,k])}const Kn={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0},yn=d.forwardRef(function(t,n){const[r,o]=d.useState();K(()=>{Vo()&&o("button")},[]);const s={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[vt("focus-guard")]:"",style:Kn};return u.jsx("span",{...t,...s})}),Zn=d.createContext(null),xn=vt("portal");function Ua(e){e===void 0&&(e={});const{id:t,root:n}=e,r=gt(),o=Ya(),[s,a]=d.useState(null),i=d.useRef(null);return K(()=>()=>{s?.remove(),queueMicrotask(()=>{i.current=null})},[s]),K(()=>{if(!r||i.current)return;const l=t?document.getElementById(t):null;if(!l)return;const c=document.createElement("div");c.id=r,c.setAttribute(xn,""),l.appendChild(c),i.current=c,a(c)},[t,r]),K(()=>{if(n===null||!r||i.current)return;let l=n||o?.portalNode;l&&!_t(l)&&(l=l.current),l=l||document.body;let c=null;t&&(c=document.createElement("div"),c.id=t,l.appendChild(c));const f=document.createElement("div");f.id=r,f.setAttribute(xn,""),l=c||l,l.appendChild(f),i.current=f,a(f)},[t,n,r,o]),s}function za(e){const{children:t,id:n,root:r,preserveTabOrder:o=!0}=e,s=Ua({id:n,root:r}),[a,i]=d.useState(null),l=d.useRef(null),c=d.useRef(null),f=d.useRef(null),h=d.useRef(null),g=a?.modal,m=a?.open,x=!!a&&!a.modal&&a.open&&o&&!!(r||s);return d.useEffect(()=>{if(!s||!o||g)return;function v(b){s&&St(b)&&(b.type==="focusin"?an:Zo)(s)}return s.addEventListener("focusin",v,!0),s.addEventListener("focusout",v,!0),()=>{s.removeEventListener("focusin",v,!0),s.removeEventListener("focusout",v,!0)}},[s,o,g]),d.useEffect(()=>{s&&(m||an(s))},[m,s]),u.jsxs(Zn.Provider,{value:d.useMemo(()=>({preserveTabOrder:o,beforeOutsideRef:l,afterOutsideRef:c,beforeInsideRef:f,afterInsideRef:h,portalNode:s,setFocusManagerState:i}),[o,s]),children:[x&&s&&u.jsx(yn,{"data-type":"outside",ref:l,onFocus:v=>{if(St(v,s)){var b;(b=f.current)==null||b.focus()}else{const w=a?a.domReference:null,y=Ko(w);y?.focus()}}}),x&&s&&u.jsx("span",{"aria-owns":s.id,style:Kn}),s&&Nt.createPortal(t,s),x&&s&&u.jsx(yn,{"data-type":"outside",ref:c,onFocus:v=>{if(St(v,s)){var b;(b=h.current)==null||b.focus()}else{const w=a?a.domReference:null,y=Xo(w);y?.focus(),a?.closeOnFocusOut&&a?.onOpenChange(!1,v.nativeEvent,"focus-out")}}})]})}const Ya=()=>d.useContext(Zn),Ga={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Ja={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},bn=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e?.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e?.outsidePress)!=null?n:!0}};function Xa(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,elements:o,dataRef:s}=e,{enabled:a=!0,escapeKey:i=!0,outsidePress:l=!0,outsidePressEvent:c="pointerdown",referencePress:f=!1,referencePressEvent:h="pointerdown",ancestorScroll:g=!1,bubbles:m,capture:x}=t,v=Yt(),b=re(typeof l=="function"?l:()=>!1),w=typeof l=="function"?b:l,y=d.useRef(!1),{escapeKey:S,outsidePress:L}=bn(m),{escapeKey:T,outsidePress:j}=bn(x),A=d.useRef(!1),P=re(C=>{var M;if(!n||!a||!i||C.key!=="Escape"||A.current)return;const k=(M=s.current.floatingContext)==null?void 0:M.nodeId,R=v?tt(v.nodesRef.current,k):[];if(!S&&(C.stopPropagation(),R.length>0)){let p=!0;if(R.forEach(E=>{var D;if((D=E.context)!=null&&D.open&&!E.context.dataRef.current.__escapeKeyBubbles){p=!1;return}}),!p)return}r(!1,Bo(C)?C.nativeEvent:C,"escape-key")}),O=re(C=>{var M;const k=()=>{var R;P(C),(R=Me(C))==null||R.removeEventListener("keydown",k)};(M=Me(C))==null||M.addEventListener("keydown",k)}),F=re(C=>{var M;const k=s.current.insideReactTree;s.current.insideReactTree=!1;const R=y.current;if(y.current=!1,c==="click"&&R||k||typeof w=="function"&&!w(C))return;const p=Me(C),E="["+vt("inert")+"]",D=ie(o.floating).querySelectorAll(E);let z=V(p)?p:null;for(;z&&!le(z);){const B=ce(z);if(le(B)||!V(B))break;z=B}if(D.length&&V(p)&&!qo(p)&&!ct(p,o.floating)&&Array.from(D).every(B=>!ct(z,B)))return;if(ne(p)&&$){const B=le(p),Q=Z(p),U=/auto|scroll/,H=B||U.test(Q.overflowX),J=B||U.test(Q.overflowY),ue=H&&p.clientWidth>0&&p.scrollWidth>p.clientWidth,yt=J&&p.clientHeight>0&&p.scrollHeight>p.clientHeight,Ne=Q.direction==="rtl",ke=yt&&(Ne?C.offsetX<=p.offsetWidth-p.clientWidth:C.offsetX>p.clientWidth),nr=ue&&C.offsetY>p.clientHeight;if(ke||nr)return}const I=(M=s.current.floatingContext)==null?void 0:M.nodeId,q=v&&tt(v.nodesRef.current,I).some(B=>{var Q;return wt(C,(Q=B.context)==null?void 0:Q.elements.floating)});if(wt(C,o.floating)||wt(C,o.domReference)||q)return;const Te=v?tt(v.nodesRef.current,I):[];if(Te.length>0){let B=!0;if(Te.forEach(Q=>{var U;if((U=Q.context)!=null&&U.open&&!Q.context.dataRef.current.__outsidePressBubbles){B=!1;return}}),!B)return}r(!1,C,"outside-press")}),W=re(C=>{var M;const k=()=>{var R;F(C),(R=Me(C))==null||R.removeEventListener(c,k)};(M=Me(C))==null||M.addEventListener(c,k)});d.useEffect(()=>{if(!n||!a)return;s.current.__escapeKeyBubbles=S,s.current.__outsidePressBubbles=L;let C=-1;function M(D){r(!1,D,"ancestor-scroll")}function k(){window.clearTimeout(C),A.current=!0}function R(){C=window.setTimeout(()=>{A.current=!1},mt()?5:0)}const p=ie(o.floating);i&&(p.addEventListener("keydown",T?O:P,T),p.addEventListener("compositionstart",k),p.addEventListener("compositionend",R)),w&&p.addEventListener(c,j?W:F,j);let E=[];return g&&(V(o.domReference)&&(E=he(o.domReference)),V(o.floating)&&(E=E.concat(he(o.floating))),!V(o.reference)&&o.reference&&o.reference.contextElement&&(E=E.concat(he(o.reference.contextElement)))),E=E.filter(D=>{var z;return D!==((z=p.defaultView)==null?void 0:z.visualViewport)}),E.forEach(D=>{D.addEventListener("scroll",M,{passive:!0})}),()=>{i&&(p.removeEventListener("keydown",T?O:P,T),p.removeEventListener("compositionstart",k),p.removeEventListener("compositionend",R)),w&&p.removeEventListener(c,j?W:F,j),E.forEach(D=>{D.removeEventListener("scroll",M)}),window.clearTimeout(C)}},[s,o,i,w,c,n,r,g,a,S,L,P,T,O,F,j,W]),d.useEffect(()=>{s.current.insideReactTree=!1},[s,w,c]);const N=d.useMemo(()=>({onKeyDown:P,...f&&{[Ga[h]]:C=>{r(!1,C.nativeEvent,"reference-press")},...h!=="click"&&{onClick(C){r(!1,C.nativeEvent,"reference-press")}}}}),[P,r,f,h]),$=d.useMemo(()=>({onKeyDown:P,onMouseDown(){y.current=!0},onMouseUp(){y.current=!0},[Ja[c]]:()=>{s.current.insideReactTree=!0}}),[P,c,s]);return d.useMemo(()=>a?{reference:N,floating:$}:{},[a,N,$])}function Ka(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=gt(),s=d.useRef({}),[a]=d.useState(()=>_a()),i=zt()!=null,[l,c]=d.useState(r.reference),f=re((m,x,v)=>{s.current.openEvent=m?x:void 0,a.emit("openchange",{open:m,event:x,reason:v,nested:i}),n?.(m,x,v)}),h=d.useMemo(()=>({setPositionReference:c}),[]),g=d.useMemo(()=>({reference:l||r.reference||null,floating:r.floating||null,domReference:r.reference}),[l,r.reference,r.floating]);return d.useMemo(()=>({dataRef:s,open:t,onOpenChange:f,elements:g,events:a,floatingId:o,refs:h}),[t,f,g,a,o,h])}function Za(e){e===void 0&&(e={});const{nodeId:t}=e,n=Ka({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[s,a]=d.useState(null),[i,l]=d.useState(null),f=o?.domReference||s,h=d.useRef(null),g=Yt();K(()=>{f&&(h.current=f)},[f]);const m=Aa({...e,elements:{...o,...i&&{reference:i}}}),x=d.useCallback(S=>{const L=V(S)?{getBoundingClientRect:()=>S.getBoundingClientRect(),getClientRects:()=>S.getClientRects(),contextElement:S}:S;l(L),m.refs.setReference(L)},[m.refs]),v=d.useCallback(S=>{(V(S)||S===null)&&(h.current=S,a(S)),(V(m.refs.reference.current)||m.refs.reference.current===null||S!==null&&!V(S))&&m.refs.setReference(S)},[m.refs]),b=d.useMemo(()=>({...m.refs,setReference:v,setPositionReference:x,domReference:h}),[m.refs,v,x]),w=d.useMemo(()=>({...m.elements,domReference:f}),[m.elements,f]),y=d.useMemo(()=>({...m,...r,refs:b,elements:w,nodeId:t}),[m,b,w,t,r]);return K(()=>{r.dataRef.current.floatingContext=y;const S=g?.nodesRef.current.find(L=>L.id===t);S&&(S.context=y)}),d.useMemo(()=>({...m,context:y,refs:b,elements:w}),[m,b,w,y])}function Tt(e,t,n){const r=new Map,o=n==="item";let s=e;if(o&&e){const{[mn]:a,[hn]:i,...l}=e;s=l}return{...n==="floating"&&{tabIndex:-1,[Fa]:""},...s,...t.map(a=>{const i=a?a[n]:null;return typeof i=="function"?e?i(e):null:i}).concat(e).reduce((a,i)=>(i&&Object.entries(i).forEach(l=>{let[c,f]=l;if(!(o&&[mn,hn].includes(c)))if(c.indexOf("on")===0){if(r.has(c)||r.set(c,[]),typeof f=="function"){var h;(h=r.get(c))==null||h.push(f),a[c]=function(){for(var g,m=arguments.length,x=new Array(m),v=0;v<m;v++)x[v]=arguments[v];return(g=r.get(c))==null?void 0:g.map(b=>b(...x)).find(b=>b!==void 0)}}}else a[c]=f}),a),{})}}function Qa(e){e===void 0&&(e=[]);const t=e.map(i=>i?.reference),n=e.map(i=>i?.floating),r=e.map(i=>i?.item),o=d.useCallback(i=>Tt(i,e,"reference"),t),s=d.useCallback(i=>Tt(i,e,"floating"),n),a=d.useCallback(i=>Tt(i,e,"item"),r);return d.useMemo(()=>({getReferenceProps:o,getFloatingProps:s,getItemProps:a}),[o,s,a])}const es=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function ts(e,t){var n,r;t===void 0&&(t={});const{open:o,elements:s,floatingId:a}=e,{enabled:i=!0,role:l="dialog"}=t,c=gt(),f=((n=s.domReference)==null?void 0:n.id)||c,h=d.useMemo(()=>{var y;return((y=Ho(s.floating))==null?void 0:y.id)||a},[s.floating,a]),g=(r=es.get(l))!=null?r:l,x=zt()!=null,v=d.useMemo(()=>g==="tooltip"||l==="label"?{["aria-"+(l==="label"?"labelledby":"describedby")]:o?h:void 0}:{"aria-expanded":o?"true":"false","aria-haspopup":g==="alertdialog"?"dialog":g,"aria-controls":o?h:void 0,...g==="listbox"&&{role:"combobox"},...g==="menu"&&{id:f},...g==="menu"&&x&&{role:"menuitem"},...l==="select"&&{"aria-autocomplete":"none"},...l==="combobox"&&{"aria-autocomplete":"list"}},[g,h,x,o,f,l]),b=d.useMemo(()=>{const y={id:h,...g&&{role:g}};return g==="tooltip"||l==="label"?y:{...y,...g==="menu"&&{"aria-labelledby":f}}},[g,h,f,l]),w=d.useCallback(y=>{let{active:S,selected:L}=y;const T={role:"option",...S&&{id:h+"-fui-option"}};switch(l){case"select":case"combobox":return{...T,"aria-selected":L}}return{}},[h,l]);return d.useMemo(()=>i?{reference:v,floating:b,item:w}:{},[i,v,b,w])}const wn=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(t,n)=>(n?"-":"")+t.toLowerCase());function we(e,t){return typeof e=="function"?e(t):e}function ns(e,t){const[n,r]=d.useState(e);return e&&!n&&r(!0),d.useEffect(()=>{if(!e&&n){const o=setTimeout(()=>r(!1),t);return()=>clearTimeout(o)}},[e,n,t]),n}function rs(e,t){t===void 0&&(t={});const{open:n,elements:{floating:r}}=e,{duration:o=250}=t,a=(typeof o=="number"?o:o.close)||0,[i,l]=d.useState("unmounted"),c=ns(n,a);return!c&&i==="close"&&l("unmounted"),K(()=>{if(r){if(n){l("initial");const f=requestAnimationFrame(()=>{Nt.flushSync(()=>{l("open")})});return()=>{cancelAnimationFrame(f)}}l("close")}},[n,r]),{isMounted:c,status:i}}function os(e,t){t===void 0&&(t={});const{initial:n={opacity:0},open:r,close:o,common:s,duration:a=250}=t,i=e.placement,l=i.split("-")[0],c=d.useMemo(()=>({side:l,placement:i}),[l,i]),f=typeof a=="number",h=(f?a:a.open)||0,g=(f?a:a.close)||0,[m,x]=d.useState(()=>({...we(s,c),...we(n,c)})),{isMounted:v,status:b}=rs(e,{duration:a}),w=me(n),y=me(r),S=me(o),L=me(s);return K(()=>{const T=we(w.current,c),j=we(S.current,c),A=we(L.current,c),P=we(y.current,c)||Object.keys(T).reduce((O,F)=>(O[F]="",O),{});if(b==="initial"&&x(O=>({transitionProperty:O.transitionProperty,...A,...T})),b==="open"&&x({transitionProperty:Object.keys(P).map(wn).join(","),transitionDuration:h+"ms",...A,...P}),b==="close"){const O=j||T;x({transitionProperty:Object.keys(O).map(wn).join(","),transitionDuration:g+"ms",...A,...O})}},[g,S,w,y,L,h,b,c]),{isMounted:v,styles:m}}function Qn({children:e,text:t,colorScheme:n,placement:r,offset:o=4,transitionStyles:s,hoverRestMs:a=150,withArrow:i=!1}){const[l,c]=d.useState(!1),f=d.useRef(null),{context:h,refs:g,floatingStyles:m}=Za({open:l,onOpenChange:c,placement:r,middleware:[Pa(),Da(o),ja({padding:8}),i?Oa({element:f}):null],whileElementsMounted:Sa}),x=Ba(h,{restMs:a}),v=Xa(h),b=ts(h,{role:"tooltip"}),{getReferenceProps:w,getFloatingProps:y}=Qa([x,v,b]),{isMounted:S,styles:L}=os(h,s);return u.jsxs(u.Fragment,{children:[d.cloneElement(e,{ref:g.setReference,...w()}),S&&u.jsx(za,{children:u.jsxs("div",{ref:g.setFloating,className:se("tooltip"),style:{...m,...L},"data-color-scheme":n,...y(),children:[t,i&&u.jsx(Va,{ref:f,context:h,className:se("tooltip-arrow")})]})})]})}Qn.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{placement:{required:!1,tsType:{name:"Placement"},description:""},offset:{required:!1,tsType:{name:"OffsetOptions"},description:"",defaultValue:{value:"4",computed:!1}},transitionStyles:{required:!1,tsType:{name:"UseTransitionStylesProps"},description:""},hoverRestMs:{required:!1,tsType:{name:"UseHoverProps['restMs']",raw:"UseHoverProps['restMs']"},description:"",defaultValue:{value:"150",computed:!1}},withArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactElement",elements:[{name:"signature",type:"object",raw:"{ ref: Ref<unknown> }",signature:{properties:[{key:"ref",value:{name:"Ref",elements:[{name:"unknown"}],raw:"Ref<unknown>",required:!0}}]}}],raw:"ReactElement<{ ref: Ref<unknown> }>"},description:""},text:{required:!0,tsType:{name:"string"},description:""},colorScheme:{required:!0,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""}}};const as=Object.freeze(Object.defineProperty({__proto__:null,Tooltip:Qn},Symbol.toStringTag,{value:"Module"})),Sn=d.lazy(()=>rr(()=>Promise.resolve().then(()=>as),void 0,import.meta.url).then(e=>({default:e.Tooltip}))),_=d.forwardRef(({data:e,blockMargin:t=4,blockRadius:n=2,blockSize:r=12,className:o,colorScheme:s,fontSize:a=14,labels:i,loading:l=!1,maxLevel:c=4,renderBlock:f,renderColorLegend:h,showColorLegend:g=!0,showMonthLabels:m=!0,showTotalCount:x=!0,showWeekdayLabels:v=!1,style:b={},theme:w,tooltips:y={},weekStart:S=0},L)=>{const[T,j]=d.useState(!1);d.useEffect(()=>{j(!0)},[]),c=Math.max(1,c);const A=to(w,c+1),P=zr(),O=s??P,F=A[O],W=Yr(F[0],O),N=!Jr();if(l){if(N&&!W)return null;e=Hr()}Vr(e,c);const $=e[0],C=wr(Re($.date)),M=_r(e,S),k=Object.assign({},Wr,i),R=m?a+bt:0,p=Qr(v,S),E=T&&p.shouldShow?Kr(k.weekdays,p,a)+bt:void 0;function D(){return{width:M.length*(r+t)-t,height:R+(r+t)*7-t}}function z(){return M.map((U,H)=>U.map((J,ue)=>{if(!J)return null;const yt=l&&N?{animation:`${Dn} 1.75s ease-in-out infinite`,animationDelay:`${H*20+ue*20}ms`}:void 0,Ne=u.jsx("rect",{x:0,y:R+(r+t)*ue,width:r,height:r,rx:n,ry:n,fill:F[J.level],"data-date":J.date,"data-level":J.level,style:{...pe.rect(O),...yt}}),ke=f?f(Ne,J):Ne;return u.jsx(d.Fragment,{children:y.activity?u.jsx(d.Suspense,{fallback:ke,children:u.jsx(Sn,{text:y.activity.text(J),colorScheme:O,placement:y.activity.placement??"top",hoverRestMs:y.activity.hoverRestMs,offset:y.activity.offset,transitionStyles:y.activity.transitionStyles,withArrow:y.activity.withArrow,children:ke})}):ke},J.date)})).map((U,H)=>u.jsx("g",{transform:`translate(${(r+t)*H}, 0)`,children:U},H))}function I(){if(!x&&!g)return null;const U=e.reduce((H,J)=>H+J.count,0);return u.jsxs("footer",{className:se("footer"),style:{...pe.footer.container,marginLeft:E},children:[l&&u.jsx("div",{children:" "}),!l&&x&&u.jsx("div",{className:se("count"),children:k.totalCount?k.totalCount.replace("{{count}}",String(U)).replace("{{year}}",String(C)):`${U} activities in ${C}`}),!l&&g&&u.jsxs("div",{className:se("legend-colors"),style:pe.footer.legend,children:[u.jsx("span",{style:{marginRight:"0.4em"},children:k.legend.less}),rt(c+1).map(H=>{const J=u.jsx("svg",{width:r,height:r,children:u.jsx("rect",{width:r,height:r,fill:F[H],rx:n,ry:n,style:pe.rect(O)})},H),ue=h?h(J,H):J;return u.jsx(d.Fragment,{children:y.colorLegend?u.jsx(d.Suspense,{fallback:ue,children:u.jsx(Sn,{text:y.colorLegend.text(H),colorScheme:O,placement:y.colorLegend.placement??"bottom",hoverRestMs:y.colorLegend.hoverRestMs,offset:y.colorLegend.offset,transitionStyles:y.colorLegend.transitionStyles,withArrow:y.colorLegend.withArrow,children:ue})}):ue},H)}),u.jsx("span",{style:{marginLeft:"0.4em"},children:k.legend.more})]})]})}function q(){return p.shouldShow?u.jsx("g",{className:se("legend-weekday"),children:rt(7).map(U=>{const H=(U+S)%7;return p.byDayIndex(H)?u.jsx("text",{x:-bt,y:R+(r+t)*U+r/2,dominantBaseline:"central",textAnchor:"end",fill:"currentColor",children:k.weekdays[H]},U):null})}):null}function Te(){return m?u.jsx("g",{className:se("legend-month"),children:Xr(M,k.months).map(({label:U,weekIndex:H})=>u.jsx("text",{x:(r+t)*H,y:0,dominantBaseline:"hanging",fill:"currentColor",children:U},H))}):null}const{width:B,height:Q}=D();return u.jsxs("article",{ref:L,className:`${Vt} ${o??""}`.trim(),style:{...b,...pe.container(a)},children:[u.jsx("div",{className:se("scroll-container"),style:pe.scrollContainer(a),children:u.jsxs("svg",{width:B,height:Q,viewBox:`0 0 ${B} ${Q}`,className:se("calendar"),style:{...pe.calendar,marginLeft:E},children:[!l&&q(),!l&&Te(),z()]})}),I()]})});_.displayName="ActivityCalendar";_.__docgenInfo={description:"",methods:[],displayName:"ActivityCalendar",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  date: string
  count: number
  level: number
}`,signature:{properties:[{key:"date",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}},{key:"level",value:{name:"number",required:!0}}]}}],raw:"Array<Activity>"},description:'List of calendar entries. Each `Activity` object requires an ISO 8601\n`date` string in the format `yyyy-MM-dd`, a `count` property with the\namount of tracked data, and a `level` property in the range `0-maxLevel`\nto specify activity intensity. The `maxLevel` prop defaults to 4.\n\nDates without corresponding entries are assumed to have no activity. This\nallows you to set arbitrary start and end dates for the calendar by passing\nempty entries as the first and last items.\n\nExample object:\n\n```\n{\n  date: "2021-02-20",\n  count: 16,\n  level: 3\n}\n```'},blockMargin:{required:!1,tsType:{name:"number"},description:"Margin between blocks in pixels.",defaultValue:{value:"4",computed:!1}},blockRadius:{required:!1,tsType:{name:"number"},description:"Border radius of blocks in pixels.",defaultValue:{value:"2",computed:!1}},blockSize:{required:!1,tsType:{name:"number"},description:"Block size in pixels.",defaultValue:{value:"12",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Class name to add to the component container."},colorScheme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Use the `'light'` or `'dark'` color scheme instead of the system one."},fontSize:{required:!1,tsType:{name:"number"},description:"Font size for text in pixels.",defaultValue:{value:"14",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  months: Array<string>
  weekdays: Array<string>
  totalCount: string
  legend: Partial<{
    less: string
    more: string
  }>
}`,signature:{properties:[{key:"months",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"weekdays",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"totalCount",value:{name:"string",required:!0}},{key:"legend",value:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  less: string
  more: string
}`,signature:{properties:[{key:"less",value:{name:"string",required:!0}},{key:"more",value:{name:"string",required:!0}}]}}],raw:`Partial<{
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
}>`},description:"Localization strings for all calendar labels.\n\n`totalCount` supports the placeholders `{{count}}` and `{{year}}`."},maxLevel:{required:!1,tsType:{name:"number"},description:'Maximum activity level (zero-indexed). 4 by default, 0 means "no activity".',defaultValue:{value:"4",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Toggle to display the calendar loading state. The `data` property is\nignored if set.",defaultValue:{value:"false",computed:!1}},ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLElement"}],raw:"ForwardedRef<HTMLElement>"},description:"Ref to access the calendar DOM node."},renderBlock:{required:!1,tsType:{name:"signature",type:"function",raw:"(block: BlockElement, activity: Activity) => ReactElement",signature:{arguments:[{type:{name:"ReactElement",elements:[{name:"intersection",raw:"SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>",elements:[{name:"SVGAttributes",elements:[{name:"SVGRectElement"}],raw:"SVGAttributes<SVGRectElement>"},{name:"HTMLAttributes",elements:[{name:"SVGRectElement"}],raw:"HTMLAttributes<SVGRectElement>"}]},{name:"JSXElementConstructor",elements:[{name:"SVGRectElement"}],raw:"JSXElementConstructor<SVGRectElement>"}],raw:`ReactElement<
  SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>,
  JSXElementConstructor<SVGRectElement>
>`},name:"block"},{type:{name:"signature",type:"object",raw:`{
  date: string
  count: number
  level: number
}`,signature:{properties:[{key:"date",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}},{key:"level",value:{name:"number",required:!0}}]}},name:"activity"}],return:{name:"ReactElement"}}},description:"Render prop for calendar blocks (activities). For example, useful to\nattach event handlers or to wrap the element with a link. Use\n`React.cloneElement` to pass additional props to the element if necessary."},renderColorLegend:{required:!1,tsType:{name:"signature",type:"function",raw:"(block: BlockElement, level: number) => ReactElement",signature:{arguments:[{type:{name:"ReactElement",elements:[{name:"intersection",raw:"SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>",elements:[{name:"SVGAttributes",elements:[{name:"SVGRectElement"}],raw:"SVGAttributes<SVGRectElement>"},{name:"HTMLAttributes",elements:[{name:"SVGRectElement"}],raw:"HTMLAttributes<SVGRectElement>"}]},{name:"JSXElementConstructor",elements:[{name:"SVGRectElement"}],raw:"JSXElementConstructor<SVGRectElement>"}],raw:`ReactElement<
  SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>,
  JSXElementConstructor<SVGRectElement>
>`},name:"block"},{type:{name:"number"},name:"level"}],return:{name:"ReactElement"}}},description:"Render prop for color legend blocks. Use `React.cloneElement` to pass\nadditional props to the element if necessary."},showColorLegend:{required:!1,tsType:{name:"boolean"},description:"Toggle to hide the color legend below the calendar.",defaultValue:{value:"true",computed:!1}},showMonthLabels:{required:!1,tsType:{name:"boolean"},description:"Toggle to hide the month labels above the calendar.",defaultValue:{value:"true",computed:!1}},showTotalCount:{required:!1,tsType:{name:"boolean"},description:"Toggle to hide the total count below the calendar.",defaultValue:{value:"true",computed:!1}},showWeekdayLabels:{required:!1,tsType:{name:"union",raw:"boolean | Array<DayName>",elements:[{name:"boolean"},{name:"Array",elements:[{name:"union",raw:"'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'",elements:[{name:"literal",value:"'sun'"},{name:"literal",value:"'mon'"},{name:"literal",value:"'tue'"},{name:"literal",value:"'wed'"},{name:"literal",value:"'thu'"},{name:"literal",value:"'fri'"},{name:"literal",value:"'sat'"}]}],raw:"Array<DayName>"}]},description:"Toggle to show weekday labels left to the calendar.\nAlternatively, provide an array of ISO 8601 weekday names to display.\nExample: `['mon', 'wed', 'fri']`.",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"Style object to pass to the component container.",defaultValue:{value:"{}",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:`| {
    light: ColorScale
    dark?: ColorScale
  }
| {
    light?: ColorScale
    dark: ColorScale
  }`,elements:[{name:"signature",type:"object",raw:`{
  light: ColorScale
  dark?: ColorScale
}`,signature:{properties:[{key:"light",value:{name:"Array",elements:[{name:"string"}],raw:"Array<Color>",required:!0}},{key:"dark",value:{name:"Array",elements:[{name:"string"}],raw:"Array<Color>",required:!0}}]}},{name:"signature",type:"object",raw:`{
  light?: ColorScale
  dark: ColorScale
}`,signature:{properties:[{key:"light",value:{name:"Array",elements:[{name:"string"}],raw:"Array<Color>",required:!0}},{key:"dark",value:{name:"Array",elements:[{name:"string"}],raw:"Array<Color>",required:!0}}]}}]},description:`Set the calendar colors for the light and dark color schemes. Provide
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
\`\`\``},tooltips:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  activity?: TooltipConfig & {
    text: (activity: Activity) => string
  }
  colorLegend?: TooltipConfig & {
    text: (level: number) => string
  }
}`,signature:{properties:[{key:"activity",value:{name:"intersection",raw:`TooltipConfig & {
  text: (activity: Activity) => string
}`,elements:[{name:"signature",type:"object",raw:`{
  placement?: Placement
  offset?: OffsetOptions
  transitionStyles?: UseTransitionStylesProps
  hoverRestMs?: UseHoverProps['restMs']
  withArrow?: boolean
}`,signature:{properties:[{key:"placement",value:{name:"Placement",required:!1}},{key:"offset",value:{name:"OffsetOptions",required:!1}},{key:"transitionStyles",value:{name:"UseTransitionStylesProps",required:!1}},{key:"hoverRestMs",value:{name:"UseHoverProps['restMs']",raw:"UseHoverProps['restMs']",required:!1}},{key:"withArrow",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  text: (activity: Activity) => string
}`,signature:{properties:[{key:"text",value:{name:"signature",type:"function",raw:"(activity: Activity) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  date: string
  count: number
  level: number
}`,signature:{properties:[{key:"date",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}},{key:"level",value:{name:"number",required:!0}}]}},name:"activity"}],return:{name:"string"}},required:!0}}]}}],required:!1}},{key:"colorLegend",value:{name:"intersection",raw:`TooltipConfig & {
  text: (level: number) => string
}`,elements:[{name:"signature",type:"object",raw:`{
  placement?: Placement
  offset?: OffsetOptions
  transitionStyles?: UseTransitionStylesProps
  hoverRestMs?: UseHoverProps['restMs']
  withArrow?: boolean
}`,signature:{properties:[{key:"placement",value:{name:"Placement",required:!1}},{key:"offset",value:{name:"OffsetOptions",required:!1}},{key:"transitionStyles",value:{name:"UseTransitionStylesProps",required:!1}},{key:"hoverRestMs",value:{name:"UseHoverProps['restMs']",raw:"UseHoverProps['restMs']",required:!1}},{key:"withArrow",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  text: (level: number) => string
}`,signature:{properties:[{key:"text",value:{name:"signature",type:"function",raw:"(level: number) => string",signature:{arguments:[{type:{name:"number"},name:"level"}],return:{name:"string"}},required:!0}}]}}],required:!1}}]}},description:`Tooltips to display when hovering over activity blocks or the color legend
below the calendar. See the story for details about tooltip configuration.`,defaultValue:{value:"{}",computed:!1}},weekStart:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Index of day to be used as start of week. 0 represents Sunday.",defaultValue:{value:"0",computed:!1}}}};const cs={title:"React Activity Calendar",component:_,argTypes:{data:{control:!1},blockMargin:{control:{type:"range",min:0,max:20}},blockRadius:{control:{type:"range",min:0,max:20}},blockSize:{control:{type:"range",min:4,max:30,step:1}},colorScheme:{control:!1},fontSize:{control:{type:"range",min:6,max:32,step:2}},maxLevel:{control:{type:"range",min:1,max:10}},ref:{control:!1},showWeekdayLabels:{control:"boolean"},style:{control:!1},tooltips:{control:!1},weekStart:{options:[0,1,2,3,4,5,6],control:{type:"select",labels:{0:"Sunday (0)",1:"Monday (1)",2:"Tuesday (2)",3:"Wednesday (3)",4:"Thursday (4)",5:"Friday (5)",6:"Saturday (6)"}}}},decorators:[(e,{args:t})=>(t.colorScheme=ge()?"dark":"light",u.jsx(e,{}))],parameters:{controls:{sort:"requiredFirst"},layout:"centered"},tags:["autodocs"]},G={blockMargin:4,blockRadius:2,blockSize:12,fontSize:14,loading:!1,maxLevel:4,showColorLegend:!0,showMonthLabels:!0,showTotalCount:!0,showWeekdayLabels:!1,weekStart:0},er={light:["#f0f0f0","#c4edde","#7ac7c4","#f73859","#384259"],dark:["hsl(0, 0%, 22%)","#4D455D","#7DB9B6","#F5E9CF","#E96479"]},Ve={args:G,render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsx(_,{...e,data:t})},parameters:{docs:{source:{code:"<ActivityCalendar data={data} />"}}}},_e={args:{...G,data:[],loading:!0},parameters:{docs:{source:{code:"<ActivityCalendar data={data} loading />"}}}},qe={args:{...G,maxLevel:2},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(be,{children:[u.jsx("h1",{children:"Activity levels"}),u.jsx(_,{...e,data:t,style:{margin:"1.5rem 0"}}),u.jsxs("p",{children:["Use the"," ",u.jsx("code",{children:u.jsx("b",{children:"maxLevel"})})," ","prop to control the number of activity levels. This value is zero indexed, where 0 represents no activity. ",u.jsx("code",{children:"maxLevel"})," is 4 by default, so this results in 5 activity levels. Each activity level must be in the interval from 0 to"," ",u.jsx("code",{children:"maxLevel"}),"."]})]})},parameters:{docs:{source:{code:"<ActivityCalendar data={data} maxLevel={2} loading />"}}}},He={args:G,render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel,interval:{start:new Date(2022,5,1),end:new Date(2023,4,31)}}),[e.maxLevel]),n=d.useMemo(()=>Y({maxLevel:e.maxLevel,interval:{start:new Date(2023,2,8),end:new Date(2023,7,1)}}),[e.maxLevel]),r=d.useMemo(()=>Y({maxLevel:e.maxLevel,interval:{start:new Date(2023,5,14),end:new Date(2023,6,17)}}),[e.maxLevel]);return u.jsxs(tr,{children:[u.jsx(_,{...e,data:t,labels:{totalCount:"{{count}} activities in 2022 & 2023"}}),u.jsx(_,{...e,data:n}),u.jsx(_,{...e,data:r})]})}},Be={args:{...G,theme:{light:["hsl(0, 0%, 92%)","rebeccapurple"],dark:["hsl(0, 0%, 22%)","hsl(225,92%,77%)"]}},parameters:{docs:{source:{code:Jt}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(be,{children:[u.jsx("h1",{children:"Color themes"}),u.jsx(_,{...e,data:t,style:{margin:"2rem 0"}}),u.jsxs("p",{children:["Use the"," ",u.jsx("code",{children:u.jsx("b",{children:"theme"})})," ","prop to configure the calendar colors for the light and dark"," ",u.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme",children:"color scheme"}),". Provide all colors per scheme"," ",u.jsx(At,{kind:"react-activity-calendar",name:"explicit-themes",children:"explicitly"})," ","(5 by default) or set exactly two colors (the lowest and highest intensity) to calculate a single-hue scale. For explicit themes the color count must match the number of activity levels, which is controlled by the"," ",u.jsx(At,{kind:"react-activity-calendar",name:"activity-levels",children:u.jsx("code",{children:"maxLevel"})})," ","prop. Colors can be specified in any valid CSS format."]}),u.jsxs("p",{children:["At least one scheme's colors must be set. If undefined, the default theme is used. By default, the calendar selects the current system color scheme, but you can enforce a specific scheme with the"," ",u.jsx("a",{href:"/?path=/docs/react-activity-calendar--docs",children:u.jsx("code",{children:"colorScheme"})})," ","prop."]}),u.jsx(Se,{code:Jt,isDarkMode:ge()})]})}},Ue={args:{...G,theme:er},parameters:{controls:{exclude:["maxLevel"]},docs:{source:{code:lr}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:4}),[]);return u.jsxs(be,{children:[u.jsx("h1",{children:"Explicit theme"}),u.jsx("p",{}),u.jsxs("p",{children:["See the"," ",u.jsx(At,{kind:"react-activity-calendar",name:"color-themes",children:"color themes"})," ","page for details how to use the ",u.jsx("code",{children:"theme"})," prop."]}),u.jsx(_,{...e,data:t,style:{marginTop:"2rem"}})]})}},ze={args:{...G,blockSize:14,blockRadius:7,blockMargin:5,fontSize:16,theme:er},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsx(_,{...e,data:t})},parameters:{controls:{exclude:["maxLevel"]},docs:{source:{code:or}}}},Ye={args:{...G,renderBlock:(e,t)=>d.cloneElement(e,{onClick:()=>{alert(JSON.stringify(t))},onMouseEnter:()=>{console.log("on mouse enter")}})},parameters:{docs:{source:{code:Gt}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(be,{children:[u.jsx("h1",{children:"Event Handlers"}),u.jsxs("p",{children:["Use the"," ",u.jsx("code",{children:u.jsx("b",{children:"renderBlock"})})," ","prop to attach event handlers to the SVG ",u.jsx("code",{children:"rect"})," elements that represent calendar days. Click on any block below to see it in action."]}),u.jsx(_,{...e,data:t,style:{margin:"2rem 0"}}),u.jsxs("p",{children:["Use the ",u.jsx("code",{children:"React.cloneElement()"})," function to assign the handlers:"]}),u.jsx(Se,{code:Gt,isDarkMode:ge()})]})}},Ge={args:{...G,tooltips:{activity:{text:e=>`${e.level} activities on ${e.date}`},colorLegend:{text:e=>`Activity level ${e+1}`}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(be,{children:[u.jsx("h1",{children:"Tooltips"}),u.jsxs("p",{children:["Use the"," ",u.jsx("code",{children:u.jsx("b",{children:"tooltips"})})," ","prop to show tooltips when hovering the calendar days or the color legend. Each tooltip's content is generated by a callback function, which receives either the activity data or level value of the hovered element."]}),u.jsx(_,{...e,data:t,style:{margin:"2rem 0"}}),u.jsxs("p",{children:["Tooltips no longer depend on external libraries and are now integrated directly into this package. Thanks to code-splitting, tooltips only affect your bundle size when you use them. Tooltips are implemented using the"," ",u.jsx("a",{href:"https://floating-ui.com/",children:"Floating UI"})," library as a “headless” component, meaning they come ",u.jsx("b",{children:"without predefined styles"}),". This gives you full control over the appearance:"]}),u.jsxs("ul",{children:[u.jsxs("li",{children:["Import the default styles provided by this package, ",u.jsx("b",{children:"or"})]}),u.jsx("li",{children:"Add your own custom CSS."})]}),u.jsx(Se,{code:"import 'react-activity-calendar/tooltips.css';",isDarkMode:ge()}),u.jsx(Se,{code:`/* Adapt to your needs */
${dr}`,isDarkMode:ge()}),u.jsx("h2",{children:"Tooltip configuration"}),u.jsx("p",{children:"You can configure the tooltips with the following optional settings:"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("a",{href:"https://floating-ui.com/docs/useFloating#placement",children:"placement"})," of the tooltip"]}),u.jsxs("li",{children:[u.jsx("a",{href:"https://floating-ui.com/docs/offset#options",children:"offset"})," to the element in pixels (4 by default)"]}),u.jsxs("li",{children:["the cursor “",u.jsx("a",{href:"https://floating-ui.com/docs/useHover#restms",children:"rest time"}),"” in milliseconds before opening a tooltip (150ms by default)"]}),u.jsxs("li",{children:[u.jsx("a",{href:"https://floating-ui.com/docs/useTransition#usetransitionstyles-props",children:"transition styles"})," ","to fine-tune CSS animations"]}),u.jsx("li",{children:"whether to draw an arrow (false by default)"})]}),u.jsx(Se,{code:cr,isDarkMode:ge()}),u.jsx(_,{...e,data:t,tooltips:{activity:{text:n=>`${n.level} activities on ${n.date}`,placement:"right",offset:8,transitionStyles:{duration:100,common:{fontFamily:"monospace"}},hoverRestMs:300,withArrow:!0}},style:{margin:"2rem 0"}})]})},parameters:{docs:{source:{code:ur}}}},Je={args:{...G,showMonthLabels:!1,showColorLegend:!1,showTotalCount:!1},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsx(_,{...e,data:t})},parameters:{docs:{source:{code:"<ActivityCalendar data={data} showMonthLabels={false} showColorLegend={false} showTotalCount={false} />"}}}},Xe={args:{...G,showWeekdayLabels:!0},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(tr,{children:[u.jsxs("div",{children:[u.jsx(kt,{code:"true",children:"Show every second weekday (default)"}),u.jsx(_,{...e,data:t})]}),u.jsxs("div",{children:[u.jsx(kt,{code:"['mon', 'fri']",children:"Show specific days"}),u.jsx(_,{...e,data:t,showWeekdayLabels:["mon","fri"]})]}),u.jsxs("div",{children:[u.jsx(kt,{code:"['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']",children:"Show every day"}),u.jsx(_,{...e,data:t,showWeekdayLabels:["sun","mon","tue","wed","thu","fri","sat"]})]})]})},parameters:{docs:{source:{code:"<ActivityCalendar data={data} showWeekdayLabels />"}}}},Ke={args:{...G,showWeekdayLabels:!0,labels:{months:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],weekdays:["So","Mo","Di","Mi","Do","Fr","Sa"],totalCount:"{{count}} Aktivitäten in {{year}}",legend:{less:"Weniger",more:"Mehr"}}},parameters:{docs:{source:{code:sr}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(be,{children:[u.jsx("h1",{children:"Localization"}),u.jsx("p",{children:"Example in German:"}),u.jsx(_,{...e,data:t,style:{margin:"2rem 0"}}),u.jsx(Se,{code:ar,isDarkMode:ge()})]})}},Ze={args:{...G,weekStart:1},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsx(_,{...e,data:t})},parameters:{docs:{source:{code:"<ActivityCalendar data={data} weekStart={1} />"}}}},Qe={args:G,parameters:{docs:{source:{code:"<ActivityCalendar data={data} />"}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsx("div",{style:{width:480,maxWidth:"100%",border:"dashed 1px #929292"},children:u.jsx(_,{...e,data:t})})}},et={args:G,parameters:{docs:{source:{code:ir}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]),n=d.useRef(null);return d.useEffect(()=>{console.log("calendar ref",n)},[n]),u.jsxs(u.Fragment,{children:[u.jsx(_,{...e,data:t,ref:n}),u.jsx("br",{}),u.jsx("p",{children:"Check the JavaScript console to see the ref logged."})]})}},tr=({children:e})=>u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:e}),kt=({children:e,code:t})=>u.jsxs("div",{role:"heading",style:{display:"flex",alignItems:"center",gap:12,marginBottom:16,fontSize:16,fontWeight:"bolder"},children:[e,t&&u.jsx("code",{style:{fontSize:13,fontWeight:"normal"},children:t})]});Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`{
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
}`,...Ve.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`{
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
}`,..._e.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`{
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
}`,...qe.parameters?.docs?.source}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`{
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
}`,...He.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`{
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
}`,...Be.parameters?.docs?.source}}};Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`{
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
}`,...Ue.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
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
}`,...ze.parameters?.docs?.source}}};Ye.parameters={...Ye.parameters,docs:{...Ye.parameters?.docs,source:{originalSource:`{
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
}`,...Ye.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`{
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
}`,...Ge.parameters?.docs?.source}}};Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`{
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
}`,...Je.parameters?.docs?.source}}};Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`{
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
}`,...Xe.parameters?.docs?.source}}};Ke.parameters={...Ke.parameters,docs:{...Ke.parameters?.docs,source:{originalSource:`{
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
}`,...Ke.parameters?.docs?.source}}};Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`{
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
}`,...Ze.parameters?.docs?.source}}};Qe.parameters={...Qe.parameters,docs:{...Qe.parameters?.docs,source:{originalSource:`{
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
}`,...Qe.parameters?.docs?.source}}};et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`{
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
}`,...et.parameters?.docs?.source}}};const us=["Default","Loading","ActivityLevels","DateRanges","ColorThemes","ExplicitThemes","Customization","EventHandlers","Tooltips","WithoutLabels","WeekdayLabels","LocalizedLabels","MondayAsWeekStart","NarrowScreens","ContainerRef"];export{qe as ActivityLevels,Be as ColorThemes,et as ContainerRef,ze as Customization,He as DateRanges,Ve as Default,Ye as EventHandlers,Ue as ExplicitThemes,_e as Loading,Ke as LocalizedLabels,Ze as MondayAsWeekStart,Qe as NarrowScreens,Ge as Tooltips,Xe as WeekdayLabels,Je as WithoutLabels,us as __namedExportsOrder,cs as default};
