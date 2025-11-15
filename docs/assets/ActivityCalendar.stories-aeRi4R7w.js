import{j as u,r as d,w as wn,x as Ft,y as he}from"./iframe-DsoOgWbB.js";import{r as Tt,S as we}from"./Source-BB8DBfqd.js";import{_ as rr}from"./preload-helper-PPVm8Dsz.js";const ye=({children:e})=>u.jsx("div",{style:{margin:"1rem 0 2rem"},children:e});ye.__docgenInfo={description:"",methods:[],displayName:"Container",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const or=`<ActivityCalendar
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
`,zt=`import { cloneElement } from 'react'

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
`,Yt=`const explicitTheme: ThemeInput = {
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
`,fr=864e5,Sn=6e4,Cn=36e5,Gt=Symbol.for("constructDateFrom");function De(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Gt in e?e[Gt](t):e instanceof Date?new e.constructor(t):new Date(t)}function Z(e,t){return De(t||e,e)}function Rn(e,t,n){const r=Z(e,n?.in);return isNaN(t)?De(e,NaN):(t&&r.setDate(r.getDate()+t),r)}function Jt(e){const t=Z(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Ln(e,...t){const n=De.bind(null,t.find(r=>typeof r=="object"));return t.map(n)}function Xt(e,t){const n=Z(e,t?.in);return n.setHours(0,0,0,0),n}function mr(e,t,n){const[r,o]=Ln(n?.in,e,t),a=Xt(r),s=Xt(o),i=+a-Jt(a),l=+s-Jt(s);return Math.round((i-l)/fr)}function hr(e,t,n){return Rn(e,t*7,n)}function pr(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function gr(e){return!(!pr(e)&&typeof e!="number"||isNaN(+Z(e)))}function vr(e,t){const[n,r]=Ln(e,t.start,t.end);return{start:n,end:r}}function It(e,t){const{start:n,end:r}=vr(t?.in,e);let o=+n>+r;const a=o?+n:+r,s=o?r:n;s.setHours(0,0,0,0);let i=1;const l=[];for(;+s<=a;)l.push(De(n,s)),s.setDate(s.getDate()+i),s.setHours(0,0,0,0);return o?l.reverse():l}function yr(e,t){const n=Z(e,t?.in),r=n.getFullYear();return n.setFullYear(r+1,0,0),n.setHours(23,59,59,999),n}function xr(e,t){const n=Z(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function ce(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}function Nt(e,t){const n=Z(e,t?.in);if(isNaN(+n))throw new RangeError("Invalid time value");const r=t?.format??"extended",o=t?.representation??"complete";let a="",s="";const i=r==="extended"?"-":"",l=r==="extended"?":":"";if(o!=="time"){const c=ce(n.getDate(),2),f=ce(n.getMonth()+1,2);a=`${ce(n.getFullYear(),4)}${i}${f}${i}${c}`}if(o!=="date"){const c=n.getTimezoneOffset();if(c!==0){const v=Math.abs(c),b=ce(Math.trunc(v/60),2),y=ce(v%60,2);s=`${c<0?"+":"-"}${b}:${y}`}else s="Z";const f=ce(n.getHours(),2),h=ce(n.getMinutes(),2),p=ce(n.getSeconds(),2),m=a===""?"":"T",x=[f,h,p].join(l);a=`${a}${m}${x}${s}`}return a}function En(e,t){return Z(e,t?.in).getDay()}function br(e,t){return Z(e,t?.in).getMonth()}function wr(e,t){return Z(e,t?.in).getFullYear()}function Sr(e,t,n){let r=t-En(e,n);return r<=0&&(r+=7),Rn(e,r,n)}function Ce(e,t){const n=()=>De(t?.in,NaN),o=Er(e);let a;if(o.date){const c=Tr(o.date,2);a=kr(c.restDateString,c.year)}if(!a||isNaN(+a))return n();const s=+a;let i=0,l;if(o.time&&(i=Ar(o.time),isNaN(i)))return n();if(o.timezone){if(l=Mr(o.timezone),isNaN(l))return n()}else{const c=new Date(s+i),f=Z(0,t?.in);return f.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),f.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),f}return Z(s+i+l,t?.in)}const Ie={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Cr=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Rr=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Lr=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Er(e){const t={},n=e.split(Ie.dateTimeDelimiter);let r;if(n.length>2)return t;if(/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],Ie.timeZoneDelimiter.test(t.date)&&(t.date=e.split(Ie.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length))),r){const o=Ie.timezone.exec(r);o?(t.time=r.replace(o[1],""),t.timezone=o[1]):t.time=r}return t}function Tr(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};const o=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:a===null?o:a*100,restDateString:e.slice((r[1]||r[2]).length)}}function kr(e,t){if(t===null)return new Date(NaN);const n=e.match(Cr);if(!n)return new Date(NaN);const r=!!n[4],o=Te(n[1]),a=Te(n[2])-1,s=Te(n[3]),i=Te(n[4]),l=Te(n[5])-1;if(r)return Fr(t,i,l)?Dr(t,i,l):new Date(NaN);{const c=new Date(0);return!Pr(t,a,s)||!Or(t,o)?new Date(NaN):(c.setUTCFullYear(t,a,Math.max(o,s)),c)}}function Te(e){return e?parseInt(e):1}function Ar(e){const t=e.match(Rr);if(!t)return NaN;const n=vt(t[1]),r=vt(t[2]),o=vt(t[3]);return Ir(n,r,o)?n*Cn+r*Sn+o*1e3:NaN}function vt(e){return e&&parseFloat(e.replace(",","."))||0}function Mr(e){if(e==="Z")return 0;const t=e.match(Lr);if(!t)return 0;const n=t[1]==="+"?-1:1,r=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return Nr(r,o)?n*(r*Cn+o*Sn):NaN}function Dr(e,t,n){const r=new Date(0);r.setUTCFullYear(e,0,4);const o=r.getUTCDay()||7,a=(t-1)*7+n+1-o;return r.setUTCDate(r.getUTCDate()+a),r}const jr=[31,null,31,30,31,30,31,31,30,31,30,31];function Tn(e){return e%400===0||e%4===0&&e%100!==0}function Pr(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(jr[t]||(Tn(e)?29:28))}function Or(e,t){return t>=1&&t<=(Tn(e)?366:365)}function Fr(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}function Ir(e,t,n){return e===24?t===0&&n===0:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}function Nr(e,t){return t>=0&&t<=59}function $r(e,t,n){return hr(e,-1,n)}const $t="react-activity-calendar",yt=8,kn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Vr={months:kn,weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],totalCount:"{{count}} activities in {{year}}",legend:{less:"Less",more:"More"}};function Wr(e,t){if(e.length===0)throw new Error("Activity data must not be empty.");for(const{date:n,level:r,count:o}of e){if(!gr(Ce(n)))throw new Error(`Activity date '${n}' is not a valid ISO 8601 date string.`);if(o<0)throw new RangeError(`Activity count must not be negative, found ${o}.`);if(r<0||r>t)throw new RangeError(`Activity level ${r} for ${n} is out of range. It must be between 0 and ${t}.`)}}function _r(e,t=0){const n=qr(e),r=n[0],o=Ce(r.date),a=En(o)===t?o:$r(Sr(o,t)),s=[...Array(mr(o,a)).fill(void 0),...n],i=Math.ceil(s.length/7);return tt(i).map(l=>s.slice(l*7,l*7+7))}function qr(e){const t=new Map(e.map(o=>[o.date,o])),n=e[0],r=e[e.length-1];return It({start:Ce(n.date),end:Ce(r.date)}).map(o=>{const a=Nt(o,{representation:"date"});return t.has(a)?t.get(a):{date:a,count:0,level:0}})}function oe(e){return`${$t}__${e}`}function tt(e){return[...Array(e).keys()]}function Hr(){const e=new Date().getFullYear();return It({start:new Date(e,0,1),end:new Date(e,11,31)}).map(n=>({date:Nt(n,{representation:"date"}),count:0,level:0}))}function Y(e){const n=e.maxLevel?Math.max(1,e.maxLevel):4,r=new Date,o=It(e.interval??{start:xr(r),end:yr(r)}),a=Br(o.length,n,s=>.9*Math.pow(s,2));return o.map((s,i)=>{const l=a[i];return{date:Nt(s,{representation:"date"}),count:Math.round(l*(20/n)),level:l}})}function Br(e,t,n=r=>r){const o=Ur(54321);return Array.from({length:e},()=>{const a=n(o());return Math.floor(a*(t+1))})}function Ur(e){let t=e>>>0;return()=>{t+=1831565813;let n=Math.imul(t^t>>>15,1|t);return n^=n+Math.imul(n^n>>>7,61|n),((n^n>>>14)>>>0)/4294967296}}function zr(){const[e,t]=d.useState("light"),n=r=>{t(r.matches?"dark":"light")};return d.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)");return t(r.matches?"dark":"light"),r.addEventListener("change",n),()=>{r.removeEventListener("change",n)}},[]),e}const An=`${$t}--loading-animation`;function Yr(e,t){d.useEffect(()=>{const n=`oklab(from ${e} l a b)`,r=t==="light"?`oklab(from ${e} calc(l * 0.96) a b)`:`oklab(from ${e} calc(l * 1.08) a b)`,o=document.createElement("style");return o.innerHTML=`
      @keyframes ${An} {
        0% {
          fill: ${n};
        }
        50% {
          fill: ${r};
        }
        100% {
          fill: ${n};
        }
      }
    `,document.head.appendChild(o),()=>{document.head.removeChild(o)}},[e,t])}const Gr="(prefers-reduced-motion: reduce)";function Jr(){const[e,t]=d.useState(!0);return d.useEffect(()=>{const n=window.matchMedia(Gr);t(n.matches);const r=o=>{t(o.matches)};return n.addEventListener("change",r),()=>{n.removeEventListener("change",r)}},[]),e}function Xr(e,t=kn){return e.reduce((n,r,o)=>{const a=r.find(l=>l!==void 0);if(!a)throw new Error(`Unexpected error: Week ${o+1} is empty.`);const s=t[br(Ce(a.date))];if(!s){const l=new Date(a.date).toLocaleString("en-US",{month:"short"});throw new Error(`Unexpected error: undefined month label for ${l}.`)}const i=n[n.length-1];return o===0||i?.label!==s?[...n,{weekIndex:o,label:s}]:n},[]).filter(({weekIndex:n},r,o)=>r===0?o[1]&&o[1].weekIndex-n>=3:r===o.length-1?e.slice(n).length>=3:!0)}function Kr(e,t,n){if(e.length!==7)throw new Error("Exactly 7 labels, one for each weekday must be passed.");return e.reduce((r,o,a)=>t.byDayIndex(a)?Math.max(r,Math.ceil(Zr(o,n).width)):r,0)}function Zr(e,t){if(typeof document>"u"||typeof window>"u")return{width:0,height:0};if(t<1)throw new RangeError("fontSize must be positive");if(e.length===0)return{width:0,height:0};const n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");r.style.position="absolute",r.style.visibility="hidden",r.style.fontFamily=window.getComputedStyle(document.body).fontFamily,r.style.fontSize=`${t}px`;const o=document.createElementNS(n,"text");o.textContent=e,r.appendChild(o),document.body.appendChild(r);const a=o.getBBox();return document.body.removeChild(r),{width:a.width,height:a.height}}function Qr(e,t){if(!e)return{byDayIndex:()=>!1,shouldShow:!1};if(e===!0)return{byDayIndex:r=>(7+r-t)%7%2!==0,shouldShow:!0};const n=[];for(const r of e){const o=eo[r.toLowerCase()];n[o]=!0}return{byDayIndex:r=>n[r]??!1,shouldShow:e.length>0}}const eo={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};function to(e,t=5){const n=no(t);return e?(ro(e,t),e.light=e.light??n.light,e.dark=e.dark??n.dark,{light:Kt(e.light)?nt(e.light,t):e.light,dark:Kt(e.dark)?nt(e.dark,t):e.dark}):n}function no(e){return{light:nt(["hsl(0, 0%, 92%)","hsl(0, 0%, 26%)"],e),dark:nt(["hsl(0, 0%, 22%)","hsl(0, 0%, 92%)"],e)}}function ro(e,t){const n='The number of colors is controlled by the "maxLevel" property.';if(typeof e!="object"||e.light===void 0&&e.dark===void 0)throw new Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${t} colors respectively. ${n}`);if(e.light){const{length:r}=e.light;if(r!==2&&r!==t)throw new Error(`theme.light must contain exactly 2 or ${t} colors, ${r} passed. ${n}`);for(const o of e.light)if(typeof window<"u"&&!CSS.supports("color",o))throw new Error(`Invalid color "${o}" passed. All CSS color formats are accepted.`)}if(e.dark){const{length:r}=e.dark;if(r!==2&&r!==t)throw new Error(`theme.dark must contain exactly 2 or ${t} colors, ${r} passed. ${n}`);for(const o of e.dark)if(typeof window<"u"&&!CSS.supports("color",o))throw new Error(`Invalid color "${o}" passed. All CSS color formats are accepted.`)}}function nt([e,t],n){return tt(n).map(r=>{switch(r){case 0:return e;case n-1:return t;default:{const o=r/(n-1)*100;return`color-mix(in oklab, ${t} ${parseFloat(o.toFixed(2))}%, ${e})`}}})}function Kt(e){return e.length===2}const me={container:e=>({width:"max-content",maxWidth:"100%",display:"flex",flexDirection:"column",gap:"8px",fontSize:`${e}px`}),scrollContainer:e=>({maxWidth:"100%",overflowX:"auto",overflowY:"hidden",paddingTop:Math.ceil(.1*e)}),calendar:{display:"block",overflow:"visible"},rect:e=>({stroke:e==="light"?"rgba(0, 0, 0, 0.08)":"rgba(255, 255, 255, 0.04)"}),footer:{container:{display:"flex",flexWrap:"wrap",gap:"4px 16px",whiteSpace:"nowrap"},legend:{marginLeft:"auto",display:"flex",alignItems:"center",gap:"3px"}}};function ct(){return typeof window<"u"}function Le(e){return Vt(e)?(e.nodeName||"").toLowerCase():"#document"}function J(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function re(e){var t;return(t=(Vt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Vt(e){return ct()?e instanceof Node||e instanceof J(e).Node:!1}function q(e){return ct()?e instanceof Element||e instanceof J(e).Element:!1}function ee(e){return ct()?e instanceof HTMLElement||e instanceof J(e).HTMLElement:!1}function kt(e){return!ct()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof J(e).ShadowRoot}const oo=new Set(["inline","contents"]);function je(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=K(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!oo.has(o)}const ao=new Set(["table","td","th"]);function so(e){return ao.has(Le(e))}const io=[":popover-open",":modal"];function ut(e){return io.some(t=>{try{return e.matches(t)}catch{return!1}})}const lo=["transform","translate","scale","rotate","perspective"],co=["transform","translate","scale","rotate","perspective","filter"],uo=["paint","layout","strict","content"];function Wt(e){const t=dt(),n=q(e)?K(e):e;return lo.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||co.some(r=>(n.willChange||"").includes(r))||uo.some(r=>(n.contain||"").includes(r))}function fo(e){let t=ie(e);for(;ee(t)&&!se(t);){if(Wt(t))return t;if(ut(t))return null;t=ie(t)}return null}function dt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const mo=new Set(["html","body","#document"]);function se(e){return mo.has(Le(e))}function K(e){return J(e).getComputedStyle(e)}function ft(e){return q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ie(e){if(Le(e)==="html")return e;const t=e.assignedSlot||e.parentNode||kt(e)&&e.host||re(e);return kt(t)?t.host:t}function Mn(e){const t=ie(e);return se(t)?e.ownerDocument?e.ownerDocument.body:e.body:ee(t)&&je(t)?t:Mn(t)}function fe(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Mn(e),a=o===((r=e.ownerDocument)==null?void 0:r.body),s=J(o);if(a){const i=At(s);return t.concat(s,s.visualViewport||[],je(o)?o:[],i&&n?fe(i):[])}return t.concat(o,fe(o,[],n))}function At(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}const Re=Math.min,pe=Math.max,rt=Math.round,Ne=Math.floor,ne=e=>({x:e,y:e}),ho={left:"right",right:"left",bottom:"top",top:"bottom"},po={start:"end",end:"start"};function Mt(e,t,n){return pe(e,Re(t,n))}function Pe(e,t){return typeof e=="function"?e(t):e}function ge(e){return e.split("-")[0]}function Oe(e){return e.split("-")[1]}function Dn(e){return e==="x"?"y":"x"}function _t(e){return e==="y"?"height":"width"}const go=new Set(["top","bottom"]);function ue(e){return go.has(ge(e))?"y":"x"}function qt(e){return Dn(ue(e))}function vo(e,t,n){n===void 0&&(n=!1);const r=Oe(e),o=qt(e),a=_t(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(s=ot(s)),[s,ot(s)]}function yo(e){const t=ot(e);return[Dt(e),t,Dt(t)]}function Dt(e){return e.replace(/start|end/g,t=>po[t])}const Zt=["left","right"],Qt=["right","left"],xo=["top","bottom"],bo=["bottom","top"];function wo(e,t,n){switch(e){case"top":case"bottom":return n?t?Qt:Zt:t?Zt:Qt;case"left":case"right":return t?xo:bo;default:return[]}}function So(e,t,n,r){const o=Oe(e);let a=wo(ge(e),n==="start",r);return o&&(a=a.map(s=>s+"-"+o),t&&(a=a.concat(a.map(Dt)))),a}function ot(e){return e.replace(/left|right|bottom|top/g,t=>ho[t])}function Co(e){return{top:0,right:0,bottom:0,left:0,...e}}function jn(e){return typeof e!="number"?Co(e):{top:e,right:e,bottom:e,left:e}}function at(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}var Ro=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],jt=Ro.join(","),Pn=typeof Element>"u",Ae=Pn?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,st=!Pn&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e?.ownerDocument},Me=function(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),a=o===""||o==="true",s=a||n&&t&&Me(t.parentNode);return s},Lo=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},Eo=function(t,n,r){if(Me(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(jt));return n&&Ae.call(t,jt)&&o.unshift(t),o=o.filter(r),o},Pt=function(t,n,r){for(var o=[],a=Array.from(t);a.length;){var s=a.shift();if(!Me(s,!1))if(s.tagName==="SLOT"){var i=s.assignedElements(),l=i.length?i:s.children,c=Pt(l,!0,r);r.flatten?o.push.apply(o,c):o.push({scopeParent:s,candidates:c})}else{var f=Ae.call(s,jt);f&&r.filter(s)&&(n||!t.includes(s))&&o.push(s);var h=s.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(s),p=!Me(h,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(s));if(h&&p){var m=Pt(h===!0?s.children:h.children,!0,r);r.flatten?o.push.apply(o,m):o.push({scopeParent:s,candidates:m})}else a.unshift.apply(a,s.children)}}return o},On=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},Fn=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Lo(t))&&!On(t)?0:t.tabIndex},To=function(t,n){var r=Fn(t);return r<0&&n&&!On(t)?0:r},ko=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},In=function(t){return t.tagName==="INPUT"},Ao=function(t){return In(t)&&t.type==="hidden"},Mo=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},Do=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},jo=function(t){if(!t.name)return!0;var n=t.form||st(t),r=function(i){return n.querySelectorAll('input[type="radio"][name="'+i+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var a=Do(o,t.form);return!a||a===t},Po=function(t){return In(t)&&t.type==="radio"},Oo=function(t){return Po(t)&&!jo(t)},Fo=function(t){var n,r=t&&st(t),o=(n=r)===null||n===void 0?void 0:n.host,a=!1;if(r&&r!==t){var s,i,l;for(a=!!((s=o)!==null&&s!==void 0&&(i=s.ownerDocument)!==null&&i!==void 0&&i.contains(o)||t!=null&&(l=t.ownerDocument)!==null&&l!==void 0&&l.contains(t));!a&&o;){var c,f,h;r=st(o),o=(c=r)===null||c===void 0?void 0:c.host,a=!!((f=o)!==null&&f!==void 0&&(h=f.ownerDocument)!==null&&h!==void 0&&h.contains(o))}}return a},en=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},Io=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(r==="full-native"&&"checkVisibility"in t){var a=t.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});return!a}if(getComputedStyle(t).visibility==="hidden")return!0;var s=Ae.call(t,"details>summary:first-of-type"),i=s?t.parentElement:t;if(Ae.call(i,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="full-native"||r==="legacy-full"){if(typeof o=="function"){for(var l=t;t;){var c=t.parentElement,f=st(t);if(c&&!c.shadowRoot&&o(c)===!0)return en(t);t.assignedSlot?t=t.assignedSlot:!c&&f!==t.ownerDocument?t=f.host:t=c}t=l}if(Fo(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return en(t);return!1},No=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return Ae.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},$o=function(t,n){return!(n.disabled||Me(n)||Ao(n)||Io(n,t)||Mo(n)||No(n))},tn=function(t,n){return!(Oo(n)||Fn(n)<0||!$o(t,n))},Vo=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Nn=function(t){var n=[],r=[];return t.forEach(function(o,a){var s=!!o.scopeParent,i=s?o.scopeParent:o,l=To(i,s),c=s?Nn(o.candidates):i;l===0?s?n.push.apply(n,c):n.push(i):r.push({documentOrder:a,tabIndex:l,item:o,isScope:s,content:c})}),r.sort(ko).reduce(function(o,a){return a.isScope?o.push.apply(o,a.content):o.push(a.content),o},[]).concat(n)},$n=function(t,n){n=n||{};var r;return n.getShadowRoot?r=Pt([t],n.includeContainer,{filter:tn.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:Vo}):r=Eo(t,n.includeContainer,tn.bind(null,n)),Nn(r)};function Wo(){return/apple/i.test(navigator.vendor)}const nn="data-floating-ui-focusable";function _o(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function it(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&kt(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function ke(e){return"composedPath"in e?e.composedPath()[0]:e.target}function xt(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function qo(e){return e.matches("html,body")}function ae(e){return e?.ownerDocument||document}function Ho(e){return e?e.hasAttribute(nn)?e:e.querySelector("["+nn+"]")||e:null}function Qe(e,t,n){return n===void 0&&(n=!0),e.filter(o=>{var a;return o.parentId===t&&(!n||((a=o.context)==null?void 0:a.open))}).flatMap(o=>[o,...Qe(e,o.id,n)])}function Bo(e){return"nativeEvent"in e}function Ot(e,t){const n=["mouse","pen"];return n.push("",void 0),n.includes(e)}var Uo=typeof document<"u",zo=function(){},X=Uo?d.useLayoutEffect:zo;const Yo={...wn};function de(e){const t=d.useRef(e);return X(()=>{t.current=e}),t}const Go=Yo.useInsertionEffect,Jo=Go||(e=>e());function te(e){const t=d.useRef(()=>{});return Jo(()=>{t.current=e}),d.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}const Vn=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Wn(e,t){const n=$n(e,Vn()),r=n.length;if(r===0)return;const o=_o(ae(e)),a=n.indexOf(o),s=a===-1?t===1?0:r-1:a+t;return n[s]}function Xo(e){return Wn(ae(e).body,1)||e}function Ko(e){return Wn(ae(e).body,-1)||e}function bt(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!it(n,r)}function Zo(e){$n(e,Vn()).forEach(n=>{n.dataset.tabindex=n.getAttribute("tabindex")||"",n.setAttribute("tabindex","-1")})}function rn(e){e.querySelectorAll("[data-tabindex]").forEach(n=>{const r=n.dataset.tabindex;delete n.dataset.tabindex,r?n.setAttribute("tabindex",r):n.removeAttribute("tabindex")})}function on(e,t,n){let{reference:r,floating:o}=e;const a=ue(t),s=qt(t),i=_t(s),l=ge(t),c=a==="y",f=r.x+r.width/2-o.width/2,h=r.y+r.height/2-o.height/2,p=r[i]/2-o[i]/2;let m;switch(l){case"top":m={x:f,y:r.y-o.height};break;case"bottom":m={x:f,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:h};break;case"left":m={x:r.x-o.width,y:h};break;default:m={x:r.x,y:r.y}}switch(Oe(t)){case"start":m[s]-=p*(n&&c?-1:1);break;case"end":m[s]+=p*(n&&c?-1:1);break}return m}const Qo=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:a=[],platform:s}=n,i=a.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:h}=on(c,r,l),p=r,m={},x=0;for(let v=0;v<i.length;v++){const{name:b,fn:y}=i[v],{x:w,y:C,data:L,reset:T}=await y({x:f,y:h,initialPlacement:r,placement:p,strategy:o,middlewareData:m,rects:c,platform:s,elements:{reference:e,floating:t}});f=w??f,h=C??h,m={...m,[b]:{...m[b],...L}},T&&x<=50&&(x++,typeof T=="object"&&(T.placement&&(p=T.placement),T.rects&&(c=T.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):T.rects),{x:f,y:h}=on(c,p,l)),v=-1)}return{x:f,y:h,placement:p,strategy:o,middlewareData:m}};async function _n(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:a,rects:s,elements:i,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:p=!1,padding:m=0}=Pe(t,e),x=jn(m),b=i[p?h==="floating"?"reference":"floating":h],y=at(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(b)))==null||n?b:b.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(i.floating)),boundary:c,rootBoundary:f,strategy:l})),w=h==="floating"?{x:r,y:o,width:s.floating.width,height:s.floating.height}:s.reference,C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(i.floating)),L=await(a.isElement==null?void 0:a.isElement(C))?await(a.getScale==null?void 0:a.getScale(C))||{x:1,y:1}:{x:1,y:1},T=at(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:w,offsetParent:C,strategy:l}):w);return{top:(y.top-T.top+x.top)/L.y,bottom:(T.bottom-y.bottom+x.bottom)/L.y,left:(y.left-T.left+x.left)/L.x,right:(T.right-y.right+x.right)/L.x}}const ea=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:a,platform:s,elements:i,middlewareData:l}=t,{element:c,padding:f=0}=Pe(e,t)||{};if(c==null)return{};const h=jn(f),p={x:n,y:r},m=qt(o),x=_t(m),v=await s.getDimensions(c),b=m==="y",y=b?"top":"left",w=b?"bottom":"right",C=b?"clientHeight":"clientWidth",L=a.reference[x]+a.reference[m]-p[m]-a.floating[x],T=p[m]-a.reference[m],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let A=P?P[C]:0;(!A||!await(s.isElement==null?void 0:s.isElement(P)))&&(A=i.floating[C]||a.floating[x]);const k=L/2-T/2,O=A/2-v[x]/2-1,I=Re(h[y],O),_=Re(h[w],O),N=I,$=A-v[x]-_,S=A/2-v[x]/2+k,D=Mt(N,S,$),M=!l.arrow&&Oe(o)!=null&&S!==D&&a.reference[x]/2-(S<N?I:_)-v[x]/2<0,R=M?S<N?S-N:S-$:0;return{[m]:p[m]+R,data:{[m]:D,centerOffset:S-D-R,...M&&{alignmentOffset:R}},reset:M}}}),ta=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:a,rects:s,initialPlacement:i,platform:l,elements:c}=t,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:v=!0,...b}=Pe(e,t);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const y=ge(o),w=ue(i),C=ge(i)===i,L=await(l.isRTL==null?void 0:l.isRTL(c.floating)),T=p||(C||!v?[ot(i)]:yo(i)),P=x!=="none";!p&&P&&T.push(...So(i,v,x,L));const A=[i,...T],k=await _n(t,b),O=[];let I=((r=a.flip)==null?void 0:r.overflows)||[];if(f&&O.push(k[y]),h){const S=vo(o,s,L);O.push(k[S[0]],k[S[1]])}if(I=[...I,{placement:o,overflows:O}],!O.every(S=>S<=0)){var _,N;const S=(((_=a.flip)==null?void 0:_.index)||0)+1,D=A[S];if(D&&(!(h==="alignment"?w!==ue(D):!1)||I.every(g=>ue(g.placement)===w?g.overflows[0]>0:!0)))return{data:{index:S,overflows:I},reset:{placement:D}};let M=(N=I.filter(R=>R.overflows[0]<=0).sort((R,g)=>R.overflows[1]-g.overflows[1])[0])==null?void 0:N.placement;if(!M)switch(m){case"bestFit":{var $;const R=($=I.filter(g=>{if(P){const E=ue(g.placement);return E===w||E==="y"}return!0}).map(g=>[g.placement,g.overflows.filter(E=>E>0).reduce((E,j)=>E+j,0)]).sort((g,E)=>g[1]-E[1])[0])==null?void 0:$[0];R&&(M=R);break}case"initialPlacement":M=i;break}if(o!==M)return{reset:{placement:M}}}return{}}}},na=new Set(["left","top"]);async function ra(e,t){const{placement:n,platform:r,elements:o}=e,a=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=ge(n),i=Oe(n),l=ue(n)==="y",c=na.has(s)?-1:1,f=a&&l?-1:1,h=Pe(t,e);let{mainAxis:p,crossAxis:m,alignmentAxis:x}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return i&&typeof x=="number"&&(m=i==="end"?x*-1:x),l?{x:m*f,y:p*c}:{x:p*c,y:m*f}}const oa=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:a,placement:s,middlewareData:i}=t,l=await ra(t,e);return s===((n=i.offset)==null?void 0:n.placement)&&(r=i.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:a+l.y,data:{...l,placement:s}}}}},aa=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:a=!0,crossAxis:s=!1,limiter:i={fn:b=>{let{x:y,y:w}=b;return{x:y,y:w}}},...l}=Pe(e,t),c={x:n,y:r},f=await _n(t,l),h=ue(ge(o)),p=Dn(h);let m=c[p],x=c[h];if(a){const b=p==="y"?"top":"left",y=p==="y"?"bottom":"right",w=m+f[b],C=m-f[y];m=Mt(w,m,C)}if(s){const b=h==="y"?"top":"left",y=h==="y"?"bottom":"right",w=x+f[b],C=x-f[y];x=Mt(w,x,C)}const v=i.fn({...t,[p]:m,[h]:x});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[p]:a,[h]:s}}}}}};function qn(e){const t=K(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=ee(e),a=o?e.offsetWidth:n,s=o?e.offsetHeight:r,i=rt(n)!==a||rt(r)!==s;return i&&(n=a,r=s),{width:n,height:r,$:i}}function Ht(e){return q(e)?e:e.contextElement}function Se(e){const t=Ht(e);if(!ee(t))return ne(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:a}=qn(t);let s=(a?rt(n.width):n.width)/r,i=(a?rt(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!i||!Number.isFinite(i))&&(i=1),{x:s,y:i}}const sa=ne(0);function Hn(e){const t=J(e);return!dt()||!t.visualViewport?sa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ia(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==J(e)?!1:t}function ve(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),a=Ht(e);let s=ne(1);t&&(r?q(r)&&(s=Se(r)):s=Se(e));const i=ia(a,n,r)?Hn(a):ne(0);let l=(o.left+i.x)/s.x,c=(o.top+i.y)/s.y,f=o.width/s.x,h=o.height/s.y;if(a){const p=J(a),m=r&&q(r)?J(r):r;let x=p,v=At(x);for(;v&&r&&m!==x;){const b=Se(v),y=v.getBoundingClientRect(),w=K(v),C=y.left+(v.clientLeft+parseFloat(w.paddingLeft))*b.x,L=y.top+(v.clientTop+parseFloat(w.paddingTop))*b.y;l*=b.x,c*=b.y,f*=b.x,h*=b.y,l+=C,c+=L,x=J(v),v=At(x)}}return at({width:f,height:h,x:l,y:c})}function mt(e,t){const n=ft(e).scrollLeft;return t?t.left+n:ve(re(e)).left+n}function Bn(e,t){const n=e.getBoundingClientRect(),r=n.left+t.scrollLeft-mt(e,n),o=n.top+t.scrollTop;return{x:r,y:o}}function la(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const a=o==="fixed",s=re(r),i=t?ut(t.floating):!1;if(r===s||i&&a)return n;let l={scrollLeft:0,scrollTop:0},c=ne(1);const f=ne(0),h=ee(r);if((h||!h&&!a)&&((Le(r)!=="body"||je(s))&&(l=ft(r)),ee(r))){const m=ve(r);c=Se(r),f.x=m.x+r.clientLeft,f.y=m.y+r.clientTop}const p=s&&!h&&!a?Bn(s,l):ne(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+f.x+p.x,y:n.y*c.y-l.scrollTop*c.y+f.y+p.y}}function ca(e){return Array.from(e.getClientRects())}function ua(e){const t=re(e),n=ft(e),r=e.ownerDocument.body,o=pe(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=pe(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+mt(e);const i=-n.scrollTop;return K(r).direction==="rtl"&&(s+=pe(t.clientWidth,r.clientWidth)-o),{width:o,height:a,x:s,y:i}}const an=25;function da(e,t){const n=J(e),r=re(e),o=n.visualViewport;let a=r.clientWidth,s=r.clientHeight,i=0,l=0;if(o){a=o.width,s=o.height;const f=dt();(!f||f&&t==="fixed")&&(i=o.offsetLeft,l=o.offsetTop)}const c=mt(r);if(c<=0){const f=r.ownerDocument,h=f.body,p=getComputedStyle(h),m=f.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,x=Math.abs(r.clientWidth-h.clientWidth-m);x<=an&&(a-=x)}else c<=an&&(a+=c);return{width:a,height:s,x:i,y:l}}const fa=new Set(["absolute","fixed"]);function ma(e,t){const n=ve(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,a=ee(e)?Se(e):ne(1),s=e.clientWidth*a.x,i=e.clientHeight*a.y,l=o*a.x,c=r*a.y;return{width:s,height:i,x:l,y:c}}function sn(e,t,n){let r;if(t==="viewport")r=da(e,n);else if(t==="document")r=ua(re(e));else if(q(t))r=ma(t,n);else{const o=Hn(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return at(r)}function Un(e,t){const n=ie(e);return n===t||!q(n)||se(n)?!1:K(n).position==="fixed"||Un(n,t)}function ha(e,t){const n=t.get(e);if(n)return n;let r=fe(e,[],!1).filter(i=>q(i)&&Le(i)!=="body"),o=null;const a=K(e).position==="fixed";let s=a?ie(e):e;for(;q(s)&&!se(s);){const i=K(s),l=Wt(s);!l&&i.position==="fixed"&&(o=null),(a?!l&&!o:!l&&i.position==="static"&&!!o&&fa.has(o.position)||je(s)&&!l&&Un(e,s))?r=r.filter(f=>f!==s):o=i,s=ie(s)}return t.set(e,r),r}function pa(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const s=[...n==="clippingAncestors"?ut(t)?[]:ha(t,this._c):[].concat(n),r],i=s[0],l=s.reduce((c,f)=>{const h=sn(t,f,o);return c.top=pe(h.top,c.top),c.right=Re(h.right,c.right),c.bottom=Re(h.bottom,c.bottom),c.left=pe(h.left,c.left),c},sn(t,i,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ga(e){const{width:t,height:n}=qn(e);return{width:t,height:n}}function va(e,t,n){const r=ee(t),o=re(t),a=n==="fixed",s=ve(e,!0,a,t);let i={scrollLeft:0,scrollTop:0};const l=ne(0);function c(){l.x=mt(o)}if(r||!r&&!a)if((Le(t)!=="body"||je(o))&&(i=ft(t)),r){const m=ve(t,!0,a,t);l.x=m.x+t.clientLeft,l.y=m.y+t.clientTop}else o&&c();a&&!r&&o&&c();const f=o&&!r&&!a?Bn(o,i):ne(0),h=s.left+i.scrollLeft-l.x-f.x,p=s.top+i.scrollTop-l.y-f.y;return{x:h,y:p,width:s.width,height:s.height}}function wt(e){return K(e).position==="static"}function ln(e,t){if(!ee(e)||K(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return re(e)===n&&(n=n.ownerDocument.body),n}function zn(e,t){const n=J(e);if(ut(e))return n;if(!ee(e)){let o=ie(e);for(;o&&!se(o);){if(q(o)&&!wt(o))return o;o=ie(o)}return n}let r=ln(e,t);for(;r&&so(r)&&wt(r);)r=ln(r,t);return r&&se(r)&&wt(r)&&!Wt(r)?n:r||fo(e)||n}const ya=async function(e){const t=this.getOffsetParent||zn,n=this.getDimensions,r=await n(e.floating);return{reference:va(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function xa(e){return K(e).direction==="rtl"}const ba={convertOffsetParentRelativeRectToViewportRelativeRect:la,getDocumentElement:re,getClippingRect:pa,getOffsetParent:zn,getElementRects:ya,getClientRects:ca,getDimensions:ga,getScale:Se,isElement:q,isRTL:xa};function Yn(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function wa(e,t){let n=null,r;const o=re(e);function a(){var i;clearTimeout(r),(i=n)==null||i.disconnect(),n=null}function s(i,l){i===void 0&&(i=!1),l===void 0&&(l=1),a();const c=e.getBoundingClientRect(),{left:f,top:h,width:p,height:m}=c;if(i||t(),!p||!m)return;const x=Ne(h),v=Ne(o.clientWidth-(f+p)),b=Ne(o.clientHeight-(h+m)),y=Ne(f),C={rootMargin:-x+"px "+-v+"px "+-b+"px "+-y+"px",threshold:pe(0,Re(1,l))||1};let L=!0;function T(P){const A=P[0].intersectionRatio;if(A!==l){if(!L)return s();A?s(!1,A):r=setTimeout(()=>{s(!1,1e-7)},1e3)}A===1&&!Yn(c,e.getBoundingClientRect())&&s(),L=!1}try{n=new IntersectionObserver(T,{...C,root:o.ownerDocument})}catch{n=new IntersectionObserver(T,C)}n.observe(e)}return s(!0),a}function Sa(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=Ht(e),f=o||a?[...c?fe(c):[],...fe(t)]:[];f.forEach(y=>{o&&y.addEventListener("scroll",n,{passive:!0}),a&&y.addEventListener("resize",n)});const h=c&&i?wa(c,n):null;let p=-1,m=null;s&&(m=new ResizeObserver(y=>{let[w]=y;w&&w.target===c&&m&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(t)})),n()}),c&&!l&&m.observe(c),m.observe(t));let x,v=l?ve(e):null;l&&b();function b(){const y=ve(e);v&&!Yn(v,y)&&n(),v=y,x=requestAnimationFrame(b)}return n(),()=>{var y;f.forEach(w=>{o&&w.removeEventListener("scroll",n),a&&w.removeEventListener("resize",n)}),h?.(),(y=m)==null||y.disconnect(),m=null,l&&cancelAnimationFrame(x)}}const Ca=oa,Ra=aa,La=ta,cn=ea,Ea=(e,t,n)=>{const r=new Map,o={platform:ba,...n},a={...o.platform,_c:r};return Qo(e,t,{...o,platform:a})};var Ta=typeof document<"u",ka=function(){},et=Ta?d.useLayoutEffect:ka;function lt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!lt(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const a=o[r];if(!(a==="_owner"&&e.$$typeof)&&!lt(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function Gn(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function un(e,t){const n=Gn(e);return Math.round(t*n)/n}function St(e){const t=d.useRef(e);return et(()=>{t.current=e}),t}function Aa(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:a,floating:s}={},transform:i=!0,whileElementsMounted:l,open:c}=e,[f,h]=d.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,m]=d.useState(r);lt(p,r)||m(r);const[x,v]=d.useState(null),[b,y]=d.useState(null),w=d.useCallback(g=>{g!==P.current&&(P.current=g,v(g))},[]),C=d.useCallback(g=>{g!==A.current&&(A.current=g,y(g))},[]),L=a||x,T=s||b,P=d.useRef(null),A=d.useRef(null),k=d.useRef(f),O=l!=null,I=St(l),_=St(o),N=St(c),$=d.useCallback(()=>{if(!P.current||!A.current)return;const g={placement:t,strategy:n,middleware:p};_.current&&(g.platform=_.current),Ea(P.current,A.current,g).then(E=>{const j={...E,isPositioned:N.current!==!1};S.current&&!lt(k.current,j)&&(k.current=j,Ft.flushSync(()=>{h(j)}))})},[p,t,n,_,N]);et(()=>{c===!1&&k.current.isPositioned&&(k.current.isPositioned=!1,h(g=>({...g,isPositioned:!1})))},[c]);const S=d.useRef(!1);et(()=>(S.current=!0,()=>{S.current=!1}),[]),et(()=>{if(L&&(P.current=L),T&&(A.current=T),L&&T){if(I.current)return I.current(L,T,$);$()}},[L,T,$,I,O]);const D=d.useMemo(()=>({reference:P,floating:A,setReference:w,setFloating:C}),[w,C]),M=d.useMemo(()=>({reference:L,floating:T}),[L,T]),R=d.useMemo(()=>{const g={position:n,left:0,top:0};if(!M.floating)return g;const E=un(M.floating,f.x),j=un(M.floating,f.y);return i?{...g,transform:"translate("+E+"px, "+j+"px)",...Gn(M.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:E,top:j}},[n,i,M.floating,f.x,f.y]);return d.useMemo(()=>({...f,update:$,refs:D,elements:M,floatingStyles:R}),[f,$,D,M,R])}const Ma=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?cn({element:r.current,padding:o}).fn(n):{}:r?cn({element:r,padding:o}).fn(n):{}}}},Da=(e,t)=>({...Ca(e),options:[e,t]}),ja=(e,t)=>({...Ra(e),options:[e,t]}),Pa=(e,t)=>({...La(e),options:[e,t]}),Oa=(e,t)=>({...Ma(e),options:[e,t]}),Fa="data-floating-ui-focusable",dn="active",fn="selected",Ia={...wn};let mn=!1,Na=0;const hn=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Na++;function $a(){const[e,t]=d.useState(()=>mn?hn():void 0);return X(()=>{e==null&&t(hn())},[]),d.useEffect(()=>{mn=!0},[]),e}const Va=Ia.useId,ht=Va||$a,Wa=d.forwardRef(function(t,n){const{context:{placement:r,elements:{floating:o},middlewareData:{arrow:a,shift:s}},width:i=14,height:l=7,tipRadius:c=0,strokeWidth:f=0,staticOffset:h,stroke:p,d:m,style:{transform:x,...v}={},...b}=t,y=ht(),[w,C]=d.useState(!1);if(X(()=>{if(!o)return;K(o).direction==="rtl"&&C(!0)},[o]),!o)return null;const[L,T]=r.split("-"),P=L==="top"||L==="bottom";let A=h;(P&&s!=null&&s.x||!P&&s!=null&&s.y)&&(A=null);const k=f*2,O=k/2,I=i/2*(c/-8+1),_=l/2*c/4,N=!!m,$=A&&T==="end"?"bottom":"top";let S=A&&T==="end"?"right":"left";A&&w&&(S=T==="end"?"left":"right");const D=a?.x!=null?A||a.x:"",M=a?.y!=null?A||a.y:"",R=m||"M0,0"+(" H"+i)+(" L"+(i-I)+","+(l-_))+(" Q"+i/2+","+l+" "+I+","+(l-_))+" Z",g={top:N?"rotate(180deg)":"",left:N?"rotate(90deg)":"rotate(-90deg)",bottom:N?"":"rotate(180deg)",right:N?"rotate(-90deg)":"rotate(90deg)"}[L];return u.jsxs("svg",{...b,"aria-hidden":!0,ref:n,width:N?i:i+k,height:i,viewBox:"0 0 "+i+" "+(l>i?l:i),style:{position:"absolute",pointerEvents:"none",[S]:D,[$]:M,[L]:P||N?"100%":"calc(100% - "+k/2+"px)",transform:[g,x].filter(E=>!!E).join(" "),...v},children:[k>0&&u.jsx("path",{clipPath:"url(#"+y+")",fill:"none",stroke:p,strokeWidth:k+(m?0:1),d:R}),u.jsx("path",{stroke:k&&!m?b.fill:"none",d:R}),u.jsx("clipPath",{id:y,children:u.jsx("rect",{x:-O,y:O*(N?-1:1),width:i+k,height:i})})]})});function _a(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){var r;(r=e.get(t))==null||r.delete(n)}}}const qa=d.createContext(null),Ha=d.createContext(null),Bt=()=>{var e;return((e=d.useContext(qa))==null?void 0:e.id)||null},Ut=()=>d.useContext(Ha);function pt(e){return"data-floating-ui-"+e}function Q(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const pn=pt("safe-polygon");function Ct(e,t,n){if(n&&!Ot(n))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const r=e();return typeof r=="number"?r:r?.[t]}return e?.[t]}function Rt(e){return typeof e=="function"?e():e}function Ba(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,events:a,elements:s}=e,{enabled:i=!0,delay:l=0,handleClose:c=null,mouseOnly:f=!1,restMs:h=0,move:p=!0}=t,m=Ut(),x=Bt(),v=de(c),b=de(l),y=de(n),w=de(h),C=d.useRef(),L=d.useRef(-1),T=d.useRef(),P=d.useRef(-1),A=d.useRef(!0),k=d.useRef(!1),O=d.useRef(()=>{}),I=d.useRef(!1),_=te(()=>{var R;const g=(R=o.current.openEvent)==null?void 0:R.type;return g?.includes("mouse")&&g!=="mousedown"});d.useEffect(()=>{if(!i)return;function R(g){let{open:E}=g;E||(Q(L),Q(P),A.current=!0,I.current=!1)}return a.on("openchange",R),()=>{a.off("openchange",R)}},[i,a]),d.useEffect(()=>{if(!i||!v.current||!n)return;function R(E){_()&&r(!1,E,"hover")}const g=ae(s.floating).documentElement;return g.addEventListener("mouseleave",R),()=>{g.removeEventListener("mouseleave",R)}},[s.floating,n,r,i,v,_]);const N=d.useCallback(function(R,g,E){g===void 0&&(g=!0),E===void 0&&(E="hover");const j=Ct(b.current,"close",C.current);j&&!T.current?(Q(L),L.current=window.setTimeout(()=>r(!1,R,E),j)):g&&(Q(L),r(!1,R,E))},[b,r]),$=te(()=>{O.current(),T.current=void 0}),S=te(()=>{if(k.current){const R=ae(s.floating).body;R.style.pointerEvents="",R.removeAttribute(pn),k.current=!1}}),D=te(()=>o.current.openEvent?["click","mousedown"].includes(o.current.openEvent.type):!1);d.useEffect(()=>{if(!i)return;function R(F){if(Q(L),A.current=!1,f&&!Ot(C.current)||Rt(w.current)>0&&!Ct(b.current,"open"))return;const B=Ct(b.current,"open",C.current);B?L.current=window.setTimeout(()=>{y.current||r(!0,F,"hover")},B):n||r(!0,F,"hover")}function g(F){if(D()){S();return}O.current();const B=ae(s.floating);if(Q(P),I.current=!1,v.current&&o.current.floatingContext){n||Q(L),T.current=v.current({...o.current.floatingContext,tree:m,x:F.clientX,y:F.clientY,onClose(){S(),$(),D()||N(F,!0,"safe-polygon")}});const V=T.current;B.addEventListener("mousemove",V),O.current=()=>{B.removeEventListener("mousemove",V)};return}(C.current==="touch"?!it(s.floating,F.relatedTarget):!0)&&N(F)}function E(F){D()||o.current.floatingContext&&(v.current==null||v.current({...o.current.floatingContext,tree:m,x:F.clientX,y:F.clientY,onClose(){S(),$(),D()||N(F)}})(F))}function j(){Q(L)}function z(F){D()||N(F,!1)}if(q(s.domReference)){const F=s.domReference,B=s.floating;return n&&F.addEventListener("mouseleave",E),p&&F.addEventListener("mousemove",R,{once:!0}),F.addEventListener("mouseenter",R),F.addEventListener("mouseleave",g),B&&(B.addEventListener("mouseleave",E),B.addEventListener("mouseenter",j),B.addEventListener("mouseleave",z)),()=>{n&&F.removeEventListener("mouseleave",E),p&&F.removeEventListener("mousemove",R),F.removeEventListener("mouseenter",R),F.removeEventListener("mouseleave",g),B&&(B.removeEventListener("mouseleave",E),B.removeEventListener("mouseenter",j),B.removeEventListener("mouseleave",z))}}},[s,i,e,f,p,N,$,S,r,n,y,m,b,v,o,D,w]),X(()=>{var R;if(i&&n&&(R=v.current)!=null&&(R=R.__options)!=null&&R.blockPointerEvents&&_()){k.current=!0;const E=s.floating;if(q(s.domReference)&&E){var g;const j=ae(s.floating).body;j.setAttribute(pn,"");const z=s.domReference,F=m==null||(g=m.nodesRef.current.find(B=>B.id===x))==null||(g=g.context)==null?void 0:g.elements.floating;return F&&(F.style.pointerEvents=""),j.style.pointerEvents="none",z.style.pointerEvents="auto",E.style.pointerEvents="auto",()=>{j.style.pointerEvents="",z.style.pointerEvents="",E.style.pointerEvents=""}}}},[i,n,x,s,m,v,_]),X(()=>{n||(C.current=void 0,I.current=!1,$(),S())},[n,$,S]),d.useEffect(()=>()=>{$(),Q(L),Q(P),S()},[i,s.domReference,$,S]);const M=d.useMemo(()=>{function R(g){C.current=g.pointerType}return{onPointerDown:R,onPointerEnter:R,onMouseMove(g){const{nativeEvent:E}=g;function j(){!A.current&&!y.current&&r(!0,E,"hover")}f&&!Ot(C.current)||n||Rt(w.current)===0||I.current&&g.movementX**2+g.movementY**2<2||(Q(P),C.current==="touch"?j():(I.current=!0,P.current=window.setTimeout(j,Rt(w.current))))}}},[f,r,n,y,w]);return d.useMemo(()=>i?{reference:M}:{},[i,M])}const Jn={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0},gn=d.forwardRef(function(t,n){const[r,o]=d.useState();X(()=>{Wo()&&o("button")},[]);const a={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[pt("focus-guard")]:"",style:Jn};return u.jsx("span",{...t,...a})}),Xn=d.createContext(null),vn=pt("portal");function Ua(e){e===void 0&&(e={});const{id:t,root:n}=e,r=ht(),o=Ya(),[a,s]=d.useState(null),i=d.useRef(null);return X(()=>()=>{a?.remove(),queueMicrotask(()=>{i.current=null})},[a]),X(()=>{if(!r||i.current)return;const l=t?document.getElementById(t):null;if(!l)return;const c=document.createElement("div");c.id=r,c.setAttribute(vn,""),l.appendChild(c),i.current=c,s(c)},[t,r]),X(()=>{if(n===null||!r||i.current)return;let l=n||o?.portalNode;l&&!Vt(l)&&(l=l.current),l=l||document.body;let c=null;t&&(c=document.createElement("div"),c.id=t,l.appendChild(c));const f=document.createElement("div");f.id=r,f.setAttribute(vn,""),l=c||l,l.appendChild(f),i.current=f,s(f)},[t,n,r,o]),a}function za(e){const{children:t,id:n,root:r,preserveTabOrder:o=!0}=e,a=Ua({id:n,root:r}),[s,i]=d.useState(null),l=d.useRef(null),c=d.useRef(null),f=d.useRef(null),h=d.useRef(null),p=s?.modal,m=s?.open,x=!!s&&!s.modal&&s.open&&o&&!!(r||a);return d.useEffect(()=>{if(!a||!o||p)return;function v(b){a&&bt(b)&&(b.type==="focusin"?rn:Zo)(a)}return a.addEventListener("focusin",v,!0),a.addEventListener("focusout",v,!0),()=>{a.removeEventListener("focusin",v,!0),a.removeEventListener("focusout",v,!0)}},[a,o,p]),d.useEffect(()=>{a&&(m||rn(a))},[m,a]),u.jsxs(Xn.Provider,{value:d.useMemo(()=>({preserveTabOrder:o,beforeOutsideRef:l,afterOutsideRef:c,beforeInsideRef:f,afterInsideRef:h,portalNode:a,setFocusManagerState:i}),[o,a]),children:[x&&a&&u.jsx(gn,{"data-type":"outside",ref:l,onFocus:v=>{if(bt(v,a)){var b;(b=f.current)==null||b.focus()}else{const y=s?s.domReference:null,w=Ko(y);w?.focus()}}}),x&&a&&u.jsx("span",{"aria-owns":a.id,style:Jn}),a&&Ft.createPortal(t,a),x&&a&&u.jsx(gn,{"data-type":"outside",ref:c,onFocus:v=>{if(bt(v,a)){var b;(b=h.current)==null||b.focus()}else{const y=s?s.domReference:null,w=Xo(y);w?.focus(),s?.closeOnFocusOut&&s?.onOpenChange(!1,v.nativeEvent,"focus-out")}}})]})}const Ya=()=>d.useContext(Xn),Ga={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Ja={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},yn=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e?.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e?.outsidePress)!=null?n:!0}};function Xa(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,elements:o,dataRef:a}=e,{enabled:s=!0,escapeKey:i=!0,outsidePress:l=!0,outsidePressEvent:c="pointerdown",referencePress:f=!1,referencePressEvent:h="pointerdown",ancestorScroll:p=!1,bubbles:m,capture:x}=t,v=Ut(),b=te(typeof l=="function"?l:()=>!1),y=typeof l=="function"?b:l,w=d.useRef(!1),{escapeKey:C,outsidePress:L}=yn(m),{escapeKey:T,outsidePress:P}=yn(x),A=d.useRef(!1),k=te(S=>{var D;if(!n||!s||!i||S.key!=="Escape"||A.current)return;const M=(D=a.current.floatingContext)==null?void 0:D.nodeId,R=v?Qe(v.nodesRef.current,M):[];if(!C&&(S.stopPropagation(),R.length>0)){let g=!0;if(R.forEach(E=>{var j;if((j=E.context)!=null&&j.open&&!E.context.dataRef.current.__escapeKeyBubbles){g=!1;return}}),!g)return}r(!1,Bo(S)?S.nativeEvent:S,"escape-key")}),O=te(S=>{var D;const M=()=>{var R;k(S),(R=ke(S))==null||R.removeEventListener("keydown",M)};(D=ke(S))==null||D.addEventListener("keydown",M)}),I=te(S=>{var D;const M=a.current.insideReactTree;a.current.insideReactTree=!1;const R=w.current;if(w.current=!1,c==="click"&&R||M||typeof y=="function"&&!y(S))return;const g=ke(S),E="["+pt("inert")+"]",j=ae(o.floating).querySelectorAll(E);let z=q(g)?g:null;for(;z&&!se(z);){const V=ie(z);if(se(V)||!q(V))break;z=V}if(j.length&&q(g)&&!qo(g)&&!it(g,o.floating)&&Array.from(j).every(V=>!it(z,V)))return;if(ee(g)&&$){const V=se(g),W=K(g),U=/auto|scroll/,le=V||U.test(W.overflowX),gt=V||U.test(W.overflowY),Fe=le&&g.clientWidth>0&&g.scrollWidth>g.clientWidth,Ee=gt&&g.clientHeight>0&&g.scrollHeight>g.clientHeight,er=W.direction==="rtl",tr=Ee&&(er?S.offsetX<=g.offsetWidth-g.clientWidth:S.offsetX>g.clientWidth),nr=Fe&&S.offsetY>g.clientHeight;if(tr||nr)return}const F=(D=a.current.floatingContext)==null?void 0:D.nodeId,B=v&&Qe(v.nodesRef.current,F).some(V=>{var W;return xt(S,(W=V.context)==null?void 0:W.elements.floating)});if(xt(S,o.floating)||xt(S,o.domReference)||B)return;const xe=v?Qe(v.nodesRef.current,F):[];if(xe.length>0){let V=!0;if(xe.forEach(W=>{var U;if((U=W.context)!=null&&U.open&&!W.context.dataRef.current.__outsidePressBubbles){V=!1;return}}),!V)return}r(!1,S,"outside-press")}),_=te(S=>{var D;const M=()=>{var R;I(S),(R=ke(S))==null||R.removeEventListener(c,M)};(D=ke(S))==null||D.addEventListener(c,M)});d.useEffect(()=>{if(!n||!s)return;a.current.__escapeKeyBubbles=C,a.current.__outsidePressBubbles=L;let S=-1;function D(j){r(!1,j,"ancestor-scroll")}function M(){window.clearTimeout(S),A.current=!0}function R(){S=window.setTimeout(()=>{A.current=!1},dt()?5:0)}const g=ae(o.floating);i&&(g.addEventListener("keydown",T?O:k,T),g.addEventListener("compositionstart",M),g.addEventListener("compositionend",R)),y&&g.addEventListener(c,P?_:I,P);let E=[];return p&&(q(o.domReference)&&(E=fe(o.domReference)),q(o.floating)&&(E=E.concat(fe(o.floating))),!q(o.reference)&&o.reference&&o.reference.contextElement&&(E=E.concat(fe(o.reference.contextElement)))),E=E.filter(j=>{var z;return j!==((z=g.defaultView)==null?void 0:z.visualViewport)}),E.forEach(j=>{j.addEventListener("scroll",D,{passive:!0})}),()=>{i&&(g.removeEventListener("keydown",T?O:k,T),g.removeEventListener("compositionstart",M),g.removeEventListener("compositionend",R)),y&&g.removeEventListener(c,P?_:I,P),E.forEach(j=>{j.removeEventListener("scroll",D)}),window.clearTimeout(S)}},[a,o,i,y,c,n,r,p,s,C,L,k,T,O,I,P,_]),d.useEffect(()=>{a.current.insideReactTree=!1},[a,y,c]);const N=d.useMemo(()=>({onKeyDown:k,...f&&{[Ga[h]]:S=>{r(!1,S.nativeEvent,"reference-press")},...h!=="click"&&{onClick(S){r(!1,S.nativeEvent,"reference-press")}}}}),[k,r,f,h]),$=d.useMemo(()=>({onKeyDown:k,onMouseDown(){w.current=!0},onMouseUp(){w.current=!0},[Ja[c]]:()=>{a.current.insideReactTree=!0}}),[k,c,a]);return d.useMemo(()=>s?{reference:N,floating:$}:{},[s,N,$])}function Ka(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=ht(),a=d.useRef({}),[s]=d.useState(()=>_a()),i=Bt()!=null,[l,c]=d.useState(r.reference),f=te((m,x,v)=>{a.current.openEvent=m?x:void 0,s.emit("openchange",{open:m,event:x,reason:v,nested:i}),n?.(m,x,v)}),h=d.useMemo(()=>({setPositionReference:c}),[]),p=d.useMemo(()=>({reference:l||r.reference||null,floating:r.floating||null,domReference:r.reference}),[l,r.reference,r.floating]);return d.useMemo(()=>({dataRef:a,open:t,onOpenChange:f,elements:p,events:s,floatingId:o,refs:h}),[t,f,p,s,o,h])}function Za(e){e===void 0&&(e={});const{nodeId:t}=e,n=Ka({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[a,s]=d.useState(null),[i,l]=d.useState(null),f=o?.domReference||a,h=d.useRef(null),p=Ut();X(()=>{f&&(h.current=f)},[f]);const m=Aa({...e,elements:{...o,...i&&{reference:i}}}),x=d.useCallback(C=>{const L=q(C)?{getBoundingClientRect:()=>C.getBoundingClientRect(),getClientRects:()=>C.getClientRects(),contextElement:C}:C;l(L),m.refs.setReference(L)},[m.refs]),v=d.useCallback(C=>{(q(C)||C===null)&&(h.current=C,s(C)),(q(m.refs.reference.current)||m.refs.reference.current===null||C!==null&&!q(C))&&m.refs.setReference(C)},[m.refs]),b=d.useMemo(()=>({...m.refs,setReference:v,setPositionReference:x,domReference:h}),[m.refs,v,x]),y=d.useMemo(()=>({...m.elements,domReference:f}),[m.elements,f]),w=d.useMemo(()=>({...m,...r,refs:b,elements:y,nodeId:t}),[m,b,y,t,r]);return X(()=>{r.dataRef.current.floatingContext=w;const C=p?.nodesRef.current.find(L=>L.id===t);C&&(C.context=w)}),d.useMemo(()=>({...m,context:w,refs:b,elements:y}),[m,b,y,w])}function Lt(e,t,n){const r=new Map,o=n==="item";let a=e;if(o&&e){const{[dn]:s,[fn]:i,...l}=e;a=l}return{...n==="floating"&&{tabIndex:-1,[Fa]:""},...a,...t.map(s=>{const i=s?s[n]:null;return typeof i=="function"?e?i(e):null:i}).concat(e).reduce((s,i)=>(i&&Object.entries(i).forEach(l=>{let[c,f]=l;if(!(o&&[dn,fn].includes(c)))if(c.indexOf("on")===0){if(r.has(c)||r.set(c,[]),typeof f=="function"){var h;(h=r.get(c))==null||h.push(f),s[c]=function(){for(var p,m=arguments.length,x=new Array(m),v=0;v<m;v++)x[v]=arguments[v];return(p=r.get(c))==null?void 0:p.map(b=>b(...x)).find(b=>b!==void 0)}}}else s[c]=f}),s),{})}}function Qa(e){e===void 0&&(e=[]);const t=e.map(i=>i?.reference),n=e.map(i=>i?.floating),r=e.map(i=>i?.item),o=d.useCallback(i=>Lt(i,e,"reference"),t),a=d.useCallback(i=>Lt(i,e,"floating"),n),s=d.useCallback(i=>Lt(i,e,"item"),r);return d.useMemo(()=>({getReferenceProps:o,getFloatingProps:a,getItemProps:s}),[o,a,s])}const es=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function ts(e,t){var n,r;t===void 0&&(t={});const{open:o,elements:a,floatingId:s}=e,{enabled:i=!0,role:l="dialog"}=t,c=ht(),f=((n=a.domReference)==null?void 0:n.id)||c,h=d.useMemo(()=>{var w;return((w=Ho(a.floating))==null?void 0:w.id)||s},[a.floating,s]),p=(r=es.get(l))!=null?r:l,x=Bt()!=null,v=d.useMemo(()=>p==="tooltip"||l==="label"?{["aria-"+(l==="label"?"labelledby":"describedby")]:o?h:void 0}:{"aria-expanded":o?"true":"false","aria-haspopup":p==="alertdialog"?"dialog":p,"aria-controls":o?h:void 0,...p==="listbox"&&{role:"combobox"},...p==="menu"&&{id:f},...p==="menu"&&x&&{role:"menuitem"},...l==="select"&&{"aria-autocomplete":"none"},...l==="combobox"&&{"aria-autocomplete":"list"}},[p,h,x,o,f,l]),b=d.useMemo(()=>{const w={id:h,...p&&{role:p}};return p==="tooltip"||l==="label"?w:{...w,...p==="menu"&&{"aria-labelledby":f}}},[p,h,f,l]),y=d.useCallback(w=>{let{active:C,selected:L}=w;const T={role:"option",...C&&{id:h+"-fui-option"}};switch(l){case"select":case"combobox":return{...T,"aria-selected":L}}return{}},[h,l]);return d.useMemo(()=>i?{reference:v,floating:b,item:y}:{},[i,v,b,y])}const xn=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(t,n)=>(n?"-":"")+t.toLowerCase());function be(e,t){return typeof e=="function"?e(t):e}function ns(e,t){const[n,r]=d.useState(e);return e&&!n&&r(!0),d.useEffect(()=>{if(!e&&n){const o=setTimeout(()=>r(!1),t);return()=>clearTimeout(o)}},[e,n,t]),n}function rs(e,t){t===void 0&&(t={});const{open:n,elements:{floating:r}}=e,{duration:o=250}=t,s=(typeof o=="number"?o:o.close)||0,[i,l]=d.useState("unmounted"),c=ns(n,s);return!c&&i==="close"&&l("unmounted"),X(()=>{if(r){if(n){l("initial");const f=requestAnimationFrame(()=>{Ft.flushSync(()=>{l("open")})});return()=>{cancelAnimationFrame(f)}}l("close")}},[n,r]),{isMounted:c,status:i}}function os(e,t){t===void 0&&(t={});const{initial:n={opacity:0},open:r,close:o,common:a,duration:s=250}=t,i=e.placement,l=i.split("-")[0],c=d.useMemo(()=>({side:l,placement:i}),[l,i]),f=typeof s=="number",h=(f?s:s.open)||0,p=(f?s:s.close)||0,[m,x]=d.useState(()=>({...be(a,c),...be(n,c)})),{isMounted:v,status:b}=rs(e,{duration:s}),y=de(n),w=de(r),C=de(o),L=de(a);return X(()=>{const T=be(y.current,c),P=be(C.current,c),A=be(L.current,c),k=be(w.current,c)||Object.keys(T).reduce((O,I)=>(O[I]="",O),{});if(b==="initial"&&x(O=>({transitionProperty:O.transitionProperty,...A,...T})),b==="open"&&x({transitionProperty:Object.keys(k).map(xn).join(","),transitionDuration:h+"ms",...A,...k}),b==="close"){const O=P||T;x({transitionProperty:Object.keys(O).map(xn).join(","),transitionDuration:p+"ms",...A,...O})}},[p,C,y,w,L,h,b,c]),{isMounted:v,styles:m}}function Kn({children:e,text:t,colorScheme:n,placement:r,offset:o=4,transitionStyles:a,hoverRestMs:s=150,withArrow:i=!1}){const[l,c]=d.useState(!1),f=d.useRef(null),{context:h,refs:p,floatingStyles:m}=Za({open:l,onOpenChange:c,placement:r,middleware:[Pa(),Da(o),ja({padding:8}),i?Oa({element:f}):null],whileElementsMounted:Sa}),x=Ba(h,{restMs:s}),v=Xa(h),b=ts(h,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:w}=Qa([x,v,b]),{isMounted:C,styles:L}=os(h,a);return u.jsxs(u.Fragment,{children:[d.cloneElement(e,{ref:p.setReference,...y()}),u.jsx(za,{children:C&&u.jsxs("div",{ref:p.setFloating,className:oe("tooltip"),style:{...m,...L},"data-color-scheme":n,...w(),children:[t,i&&u.jsx(Wa,{ref:f,context:h,className:oe("tooltip-arrow")})]})})]})}Kn.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{placement:{required:!1,tsType:{name:"Placement"},description:""},offset:{required:!1,tsType:{name:"OffsetOptions"},description:"",defaultValue:{value:"4",computed:!1}},transitionStyles:{required:!1,tsType:{name:"UseTransitionStylesProps"},description:""},hoverRestMs:{required:!1,tsType:{name:"UseHoverProps['restMs']",raw:"UseHoverProps['restMs']"},description:"",defaultValue:{value:"150",computed:!1}},withArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactElement",elements:[{name:"signature",type:"object",raw:"{ ref: Ref<unknown> }",signature:{properties:[{key:"ref",value:{name:"Ref",elements:[{name:"unknown"}],raw:"Ref<unknown>",required:!0}}]}}],raw:"ReactElement<{ ref: Ref<unknown> }>"},description:""},text:{required:!0,tsType:{name:"string"},description:""},colorScheme:{required:!0,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""}}};const as=Object.freeze(Object.defineProperty({__proto__:null,Tooltip:Kn},Symbol.toStringTag,{value:"Module"})),bn=d.lazy(()=>rr(()=>Promise.resolve().then(()=>as),void 0,import.meta.url).then(e=>({default:e.Tooltip}))),H=d.forwardRef(({data:e,blockMargin:t=4,blockRadius:n=2,blockSize:r=12,colorScheme:o=void 0,fontSize:a=14,labels:s=void 0,loading:i=!1,maxLevel:l=4,renderBlock:c=void 0,renderColorLegend:f=void 0,showColorLegend:h=!0,showMonthLabels:p=!0,showTotalCount:m=!0,showWeekdayLabels:x=!1,style:v={},theme:b=void 0,tooltips:y={},weekStart:w=0},C)=>{const[L,T]=d.useState(!1);d.useEffect(()=>{T(!0)},[]),l=Math.max(1,l);const P=to(b,l+1),A=zr(),k=o??A,O=P[k];Yr(O[0],k);const I=!Jr();i&&(e=Hr()),Wr(e,l);const _=e[0],N=wr(Ce(_.date)),$=_r(e,w),S=Object.assign({},Vr,s),D=p?a+yt:0,M=Qr(x,w),R=L&&M.shouldShow?Kr(S.weekdays,M,a)+yt:void 0;function g(){return{width:$.length*(r+t)-t,height:D+(r+t)*7-t}}function E(){return $.map((V,W)=>V.map((U,le)=>{if(!U)return null;const gt=i&&I?{animation:`${An} 1.75s ease-in-out infinite`,animationDelay:`${W*20+le*20}ms`}:void 0,Fe=u.jsx("rect",{x:0,y:D+(r+t)*le,width:r,height:r,rx:n,ry:n,fill:O[U.level],"data-date":U.date,"data-level":U.level,style:{...me.rect(k),...gt}}),Ee=c?c(Fe,U):Fe;return u.jsx(d.Fragment,{children:y.activity?u.jsx(d.Suspense,{fallback:Ee,children:u.jsx(bn,{text:y.activity.text(U),colorScheme:k,placement:y.activity.placement??"top",hoverRestMs:y.activity.hoverRestMs,offset:y.activity.offset,transitionStyles:y.activity.transitionStyles,withArrow:y.activity.withArrow,children:Ee})}):Ee},U.date)})).map((V,W)=>u.jsx("g",{transform:`translate(${(r+t)*W}, 0)`,children:V},W))}function j(){if(!m&&!h)return null;const V=e.reduce((W,U)=>W+U.count,0);return u.jsxs("footer",{className:oe("footer"),style:{...me.footer.container,marginLeft:R},children:[i&&u.jsx("div",{children:" "}),!i&&m&&u.jsx("div",{className:oe("count"),children:S.totalCount?S.totalCount.replace("{{count}}",String(V)).replace("{{year}}",String(N)):`${V} activities in ${N}`}),!i&&h&&u.jsxs("div",{className:oe("legend-colors"),style:me.footer.legend,children:[u.jsx("span",{style:{marginRight:"0.4em"},children:S.legend.less}),tt(l+1).map(W=>{const U=u.jsx("svg",{width:r,height:r,children:u.jsx("rect",{width:r,height:r,fill:O[W],rx:n,ry:n,style:me.rect(k)})},W),le=f?f(U,W):U;return u.jsx(d.Fragment,{children:y.colorLegend?u.jsx(d.Suspense,{fallback:le,children:u.jsx(bn,{text:y.colorLegend.text(W),colorScheme:k,placement:y.colorLegend.placement??"bottom",hoverRestMs:y.colorLegend.hoverRestMs,offset:y.colorLegend.offset,transitionStyles:y.colorLegend.transitionStyles,withArrow:y.colorLegend.withArrow,children:le})}):le},W)}),u.jsx("span",{style:{marginLeft:"0.4em"},children:S.legend.more})]})]})}function z(){return M.shouldShow?u.jsx("g",{className:oe("legend-weekday"),children:tt(7).map(V=>{const W=(V+w)%7;return M.byDayIndex(W)?u.jsx("text",{x:-yt,y:D+(r+t)*V+r/2,dominantBaseline:"central",textAnchor:"end",fill:"currentColor",children:S.weekdays[W]},V):null})}):null}function F(){return p?u.jsx("g",{className:oe("legend-month"),children:Xr($,S.months).map(({label:V,weekIndex:W})=>u.jsx("text",{x:(r+t)*W,y:0,dominantBaseline:"hanging",fill:"currentColor",children:V},W))}):null}const{width:B,height:xe}=g();return u.jsxs("article",{ref:C,className:$t,style:{...v,...me.container(a)},children:[u.jsx("div",{className:oe("scroll-container"),style:me.scrollContainer(a),children:u.jsxs("svg",{width:B,height:xe,viewBox:`0 0 ${B} ${xe}`,className:oe("calendar"),style:{...me.calendar,marginLeft:R},children:[!i&&z(),!i&&F(),E()]})}),j()]})});H.displayName="ActivityCalendar";H.__docgenInfo={description:"",methods:[],displayName:"ActivityCalendar",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  date: string
  count: number
  level: number
}`,signature:{properties:[{key:"date",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}},{key:"level",value:{name:"number",required:!0}}]}}],raw:"Array<Activity>"},description:'List of calendar entries. Each `Activity` object requires an ISO 8601\n`date` string in the format `yyyy-MM-dd`, a `count` property with the\namount of tracked data, and a `level` property in the range `0-maxLevel`\nto specify activity intensity. The `maxLevel` prop defaults to 4.\n\nDates without corresponding entries are assumed to have no activity. This\nallows you to set arbitrary start and end dates for the calendar by passing\nempty entries as the first and last items.\n\nExample object:\n\n```\n{\n  date: "2021-02-20",\n  count: 16,\n  level: 3\n}\n```'},blockMargin:{required:!1,tsType:{name:"number"},description:"Margin between blocks in pixels.",defaultValue:{value:"4",computed:!1}},blockRadius:{required:!1,tsType:{name:"number"},description:"Border radius of blocks in pixels.",defaultValue:{value:"2",computed:!1}},blockSize:{required:!1,tsType:{name:"number"},description:"Block size in pixels.",defaultValue:{value:"12",computed:!1}},colorScheme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Use the `'light'` or `'dark'` color scheme instead of the system one.",defaultValue:{value:"undefined",computed:!0}},fontSize:{required:!1,tsType:{name:"number"},description:"Font size for text in pixels.",defaultValue:{value:"14",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:"Localization strings for all calendar labels.\n\n`totalCount` supports the placeholders `{{count}}` and `{{year}}`.",defaultValue:{value:"undefined",computed:!0}},maxLevel:{required:!1,tsType:{name:"number"},description:'Maximum activity level (zero-indexed). 4 by default, 0 means "no activity".',defaultValue:{value:"4",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Toggle to display the calendar loading state. The `data` property is\nignored if set.",defaultValue:{value:"false",computed:!1}},ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLElement"}],raw:"ForwardedRef<HTMLElement>"},description:"Ref to access the calendar DOM node."},renderBlock:{required:!1,tsType:{name:"signature",type:"function",raw:"(block: BlockElement, activity: Activity) => ReactElement",signature:{arguments:[{type:{name:"ReactElement",elements:[{name:"intersection",raw:"SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>",elements:[{name:"SVGAttributes",elements:[{name:"SVGRectElement"}],raw:"SVGAttributes<SVGRectElement>"},{name:"HTMLAttributes",elements:[{name:"SVGRectElement"}],raw:"HTMLAttributes<SVGRectElement>"}]},{name:"JSXElementConstructor",elements:[{name:"SVGRectElement"}],raw:"JSXElementConstructor<SVGRectElement>"}],raw:`ReactElement<
  SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>,
  JSXElementConstructor<SVGRectElement>
>`},name:"block"},{type:{name:"signature",type:"object",raw:`{
  date: string
  count: number
  level: number
}`,signature:{properties:[{key:"date",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}},{key:"level",value:{name:"number",required:!0}}]}},name:"activity"}],return:{name:"ReactElement"}}},description:"Render prop for calendar blocks (activities). For example, useful to\nattach event handlers or to wrap the element with a link. Use\n`React.cloneElement` to pass additional props to the element if necessary.",defaultValue:{value:"undefined",computed:!0}},renderColorLegend:{required:!1,tsType:{name:"signature",type:"function",raw:"(block: BlockElement, level: number) => ReactElement",signature:{arguments:[{type:{name:"ReactElement",elements:[{name:"intersection",raw:"SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>",elements:[{name:"SVGAttributes",elements:[{name:"SVGRectElement"}],raw:"SVGAttributes<SVGRectElement>"},{name:"HTMLAttributes",elements:[{name:"SVGRectElement"}],raw:"HTMLAttributes<SVGRectElement>"}]},{name:"JSXElementConstructor",elements:[{name:"SVGRectElement"}],raw:"JSXElementConstructor<SVGRectElement>"}],raw:`ReactElement<
  SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>,
  JSXElementConstructor<SVGRectElement>
>`},name:"block"},{type:{name:"number"},name:"level"}],return:{name:"ReactElement"}}},description:"Render prop for color legend blocks. Use `React.cloneElement` to pass\nadditional props to the element if necessary.",defaultValue:{value:"undefined",computed:!0}},showColorLegend:{required:!1,tsType:{name:"boolean"},description:"Toggle to hide the color legend below the calendar.",defaultValue:{value:"true",computed:!1}},showMonthLabels:{required:!1,tsType:{name:"boolean"},description:"Toggle to hide the month labels above the calendar.",defaultValue:{value:"true",computed:!1}},showTotalCount:{required:!1,tsType:{name:"boolean"},description:"Toggle to hide the total count below the calendar.",defaultValue:{value:"true",computed:!1}},showWeekdayLabels:{required:!1,tsType:{name:"union",raw:"boolean | Array<DayName>",elements:[{name:"boolean"},{name:"Array",elements:[{name:"union",raw:"'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'",elements:[{name:"literal",value:"'sun'"},{name:"literal",value:"'mon'"},{name:"literal",value:"'tue'"},{name:"literal",value:"'wed'"},{name:"literal",value:"'thu'"},{name:"literal",value:"'fri'"},{name:"literal",value:"'sat'"}]}],raw:"Array<DayName>"}]},description:"Toggle to show weekday labels left to the calendar.\nAlternatively, provide an array of ISO 8601 weekday names to display.\nExample: `['mon', 'wed', 'fri']`.",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"Style object to pass to the component container.",defaultValue:{value:"{}",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:`| {
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
\`\`\``,defaultValue:{value:"undefined",computed:!0}},tooltips:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
below the calendar. See the story for details about tooltip configuration.`,defaultValue:{value:"{}",computed:!1}},weekStart:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Index of day to be used as start of week. 0 represents Sunday.",defaultValue:{value:"0",computed:!1}}}};const cs={title:"React Activity Calendar",component:H,argTypes:{data:{control:!1},blockMargin:{control:{type:"range",min:0,max:20}},blockRadius:{control:{type:"range",min:0,max:20}},blockSize:{control:{type:"range",min:4,max:30,step:1}},colorScheme:{control:!1},fontSize:{control:{type:"range",min:6,max:32,step:2}},maxLevel:{control:{type:"range",min:1,max:10}},ref:{control:!1},showWeekdayLabels:{control:"boolean"},style:{control:!1},tooltips:{control:!1},weekStart:{options:[0,1,2,3,4,5,6],control:{type:"select",labels:{0:"Sunday (0)",1:"Monday (1)",2:"Tuesday (2)",3:"Wednesday (3)",4:"Thursday (4)",5:"Friday (5)",6:"Saturday (6)"}}}},decorators:[(e,{args:t})=>(t.colorScheme=he()?"dark":"light",u.jsx(e,{}))],parameters:{controls:{sort:"requiredFirst"},layout:"centered"},tags:["autodocs"]},G={blockMargin:4,blockRadius:2,blockSize:12,fontSize:14,loading:!1,maxLevel:4,showColorLegend:!0,showMonthLabels:!0,showTotalCount:!0,showWeekdayLabels:!1,weekStart:0},Zn={light:["#f0f0f0","#c4edde","#7ac7c4","#f73859","#384259"],dark:["hsl(0, 0%, 22%)","#4D455D","#7DB9B6","#F5E9CF","#E96479"]},$e={args:G,render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsx(H,{...e,data:t})},parameters:{docs:{source:{code:"<ActivityCalendar data={data} />"}}}},Ve={args:{...G,data:[],loading:!0},parameters:{docs:{source:{code:"<ActivityCalendar data={data} loading />"}}}},We={args:{...G,maxLevel:2},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(ye,{children:[u.jsx("h1",{children:"Activity levels"}),u.jsx(H,{...e,data:t,style:{margin:"1.5rem 0"}}),u.jsxs("p",{children:["Use the"," ",u.jsx("code",{children:u.jsx("b",{children:"maxLevel"})})," ","prop to control the number of activity levels. This value is zero indexed, where 0 represents no activity. ",u.jsx("code",{children:"maxLevel"})," is 4 by default, so this results in 5 activity levels. Each activity level must be in the interval from 0 to"," ",u.jsx("code",{children:"maxLevel"}),"."]})]})},parameters:{docs:{source:{code:"<ActivityCalendar data={data} maxLevel={2} loading />"}}}},_e={args:G,render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel,interval:{start:new Date(2022,5,1),end:new Date(2023,4,31)}}),[e.maxLevel]),n=d.useMemo(()=>Y({maxLevel:e.maxLevel,interval:{start:new Date(2023,2,8),end:new Date(2023,7,1)}}),[e.maxLevel]),r=d.useMemo(()=>Y({maxLevel:e.maxLevel,interval:{start:new Date(2023,5,14),end:new Date(2023,6,17)}}),[e.maxLevel]);return u.jsxs(Qn,{children:[u.jsx(H,{...e,data:t,labels:{totalCount:"{{count}} activities in 2022 & 2023"}}),u.jsx(H,{...e,data:n}),u.jsx(H,{...e,data:r})]})}},qe={args:{...G,theme:{light:["hsl(0, 0%, 92%)","rebeccapurple"],dark:["hsl(0, 0%, 22%)","hsl(225,92%,77%)"]}},parameters:{docs:{source:{code:Yt}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(ye,{children:[u.jsx("h1",{children:"Color themes"}),u.jsx(H,{...e,data:t,style:{margin:"2rem 0"}}),u.jsxs("p",{children:["Use the"," ",u.jsx("code",{children:u.jsx("b",{children:"theme"})})," ","prop to configure the calendar colors for the light and dark"," ",u.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme",children:"color scheme"}),". Provide all colors per scheme"," ",u.jsx(Tt,{kind:"react-activity-calendar",name:"explicit-themes",children:"explicitly"})," ","(5 by default) or set exactly two colors (the lowest and highest intensity) to calculate a single-hue scale. For explicit themes the color count must match the number of activity levels, which is controlled by the"," ",u.jsx(Tt,{kind:"react-activity-calendar",name:"activity-levels",children:u.jsx("code",{children:"maxLevel"})})," ","prop. Colors can be specified in any valid CSS format."]}),u.jsxs("p",{children:["At least one scheme's colors must be set. If undefined, the default theme is used. By default, the calendar selects the current system color scheme, but you can enforce a specific scheme with the"," ",u.jsx("a",{href:"/?path=/docs/react-activity-calendar--docs",children:u.jsx("code",{children:"colorScheme"})})," ","prop."]}),u.jsx(we,{code:Yt,isDarkMode:he()})]})}},He={args:{...G,theme:Zn},parameters:{controls:{exclude:["maxLevel"]},docs:{source:{code:lr}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:4}),[]);return u.jsxs(ye,{children:[u.jsx("h1",{children:"Explicit theme"}),u.jsx("p",{}),u.jsxs("p",{children:["See the"," ",u.jsx(Tt,{kind:"react-activity-calendar",name:"color-themes",children:"color themes"})," ","page for details how to use the ",u.jsx("code",{children:"theme"})," prop."]}),u.jsx(H,{...e,data:t,style:{marginTop:"2rem"}})]})}},Be={args:{...G,blockSize:14,blockRadius:7,blockMargin:5,fontSize:16,theme:Zn},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsx(H,{...e,data:t})},parameters:{controls:{exclude:["maxLevel"]},docs:{source:{code:or}}}},Ue={args:{...G,renderBlock:(e,t)=>d.cloneElement(e,{onClick:()=>{alert(JSON.stringify(t))},onMouseEnter:()=>{console.log("on mouse enter")}})},parameters:{docs:{source:{code:zt}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(ye,{children:[u.jsx("h1",{children:"Event Handlers"}),u.jsxs("p",{children:["Use the"," ",u.jsx("code",{children:u.jsx("b",{children:"renderBlock"})})," ","prop to attach event handlers to the SVG ",u.jsx("code",{children:"rect"})," elements that represent calendar days. Click on any block below to see it in action."]}),u.jsx(H,{...e,data:t,style:{margin:"2rem 0"}}),u.jsxs("p",{children:["Use the ",u.jsx("code",{children:"React.cloneElement()"})," function to assign the handlers:"]}),u.jsx(we,{code:zt,isDarkMode:he()})]})}},ze={args:{...G,tooltips:{activity:{text:e=>`${e.level} activities on ${e.date}`},colorLegend:{text:e=>`Activity level ${e+1}`}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(ye,{children:[u.jsx("h1",{children:"Tooltips"}),u.jsxs("p",{children:["Use the"," ",u.jsx("code",{children:u.jsx("b",{children:"tooltips"})})," ","prop to show tooltips when hovering the calendar days or the color legend. Each tooltip's content is generated by a callback function, which receives either the activity data or level value of the hovered element."]}),u.jsx(H,{...e,data:t,style:{margin:"2rem 0"}}),u.jsxs("p",{children:["Tooltips no longer depend on external libraries and are now integrated directly into this package. Thanks to code-splitting, tooltips only affect your bundle size when you use them. Tooltips are implemented using the"," ",u.jsx("a",{href:"https://floating-ui.com/",children:"Floating UI"})," library as a “headless” component, meaning they come ",u.jsx("b",{children:"without predefined styles"}),". This gives you full control over the appearance:"]}),u.jsxs("ul",{children:[u.jsxs("li",{children:["Import the default styles provided by this package, ",u.jsx("b",{children:"or"})]}),u.jsx("li",{children:"Add your own custom CSS."})]}),u.jsx(we,{code:"import 'react-activity-calendar/tooltips.css';",isDarkMode:he()}),u.jsx(we,{code:`/* Adapt to your needs */
${dr}`,isDarkMode:he()}),u.jsx("h2",{children:"Tooltip configuration"}),u.jsx("p",{children:"You can configure the tooltips with the following optional settings:"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("a",{href:"https://floating-ui.com/docs/useFloating#placement",children:"placement"})," of the tooltip"]}),u.jsxs("li",{children:[u.jsx("a",{href:"https://floating-ui.com/docs/offset#options",children:"offset"})," to the element in pixels (4 by default)"]}),u.jsxs("li",{children:["the cursor “",u.jsx("a",{href:"https://floating-ui.com/docs/useHover#restms",children:"rest time"}),"” in milliseconds before opening a tooltip (150ms by default)"]}),u.jsxs("li",{children:[u.jsx("a",{href:"https://floating-ui.com/docs/useTransition#usetransitionstyles-props",children:"transition styles"})," ","to fine-tune CSS animations"]}),u.jsx("li",{children:"whether to draw an arrow (false by default)"})]}),u.jsx(we,{code:cr,isDarkMode:he()}),u.jsx(H,{...e,data:t,tooltips:{activity:{text:n=>`${n.level} activities on ${n.date}`,placement:"right",offset:8,transitionStyles:{duration:100,common:{fontFamily:"monospace"}},hoverRestMs:300,withArrow:!0}},style:{margin:"2rem 0"}})]})},parameters:{docs:{source:{code:ur}}}},Ye={args:{...G,showMonthLabels:!1,showColorLegend:!1,showTotalCount:!1},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsx(H,{...e,data:t})},parameters:{docs:{source:{code:"<ActivityCalendar data={data} showMonthLabels={false} showColorLegend={false} showTotalCount={false} />"}}}},Ge={args:{...G,showWeekdayLabels:!0},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(Qn,{children:[u.jsxs("div",{children:[u.jsx(Et,{code:"true",children:"Show every second weekday (default)"}),u.jsx(H,{...e,data:t})]}),u.jsxs("div",{children:[u.jsx(Et,{code:"['mon', 'fri']",children:"Show specific days"}),u.jsx(H,{...e,data:t,showWeekdayLabels:["mon","fri"]})]}),u.jsxs("div",{children:[u.jsx(Et,{code:"['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']",children:"Show every day"}),u.jsx(H,{...e,data:t,showWeekdayLabels:["sun","mon","tue","wed","thu","fri","sat"]})]})]})},parameters:{docs:{source:{code:"<ActivityCalendar data={data} showWeekdayLabels />"}}}},Je={args:{...G,showWeekdayLabels:!0,labels:{months:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],weekdays:["So","Mo","Di","Mi","Do","Fr","Sa"],totalCount:"{{count}} Aktivitäten in {{year}}",legend:{less:"Weniger",more:"Mehr"}}},parameters:{docs:{source:{code:sr}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsxs(ye,{children:[u.jsx("h1",{children:"Localization"}),u.jsx("p",{children:"Example in German:"}),u.jsx(H,{...e,data:t,style:{margin:"2rem 0"}}),u.jsx(we,{code:ar,isDarkMode:he()})]})}},Xe={args:{...G,weekStart:1},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsx(H,{...e,data:t})},parameters:{docs:{source:{code:"<ActivityCalendar data={data} weekStart={1} />"}}}},Ke={args:G,parameters:{docs:{source:{code:"<ActivityCalendar data={data} />"}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]);return u.jsx("div",{style:{width:480,maxWidth:"100%",border:"dashed 1px #929292"},children:u.jsx(H,{...e,data:t})})}},Ze={args:G,parameters:{docs:{source:{code:ir}}},render:e=>{const t=d.useMemo(()=>Y({maxLevel:e.maxLevel}),[e.maxLevel]),n=d.useRef(null);return d.useEffect(()=>{console.log("calendar ref",n)},[n]),u.jsxs(u.Fragment,{children:[u.jsx(H,{...e,data:t,ref:n}),u.jsx("br",{}),u.jsx("p",{children:"Check the JavaScript console to see the ref logged."})]})}},Qn=({children:e})=>u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:e}),Et=({children:e,code:t})=>u.jsxs("div",{role:"heading",style:{display:"flex",alignItems:"center",gap:12,marginBottom:16,fontSize:16,fontWeight:"bolder"},children:[e,t&&u.jsx("code",{style:{fontSize:13,fontWeight:"normal"},children:t})]});$e.parameters={...$e.parameters,docs:{...$e.parameters?.docs,source:{originalSource:`{
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
}`,...$e.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`{
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
}`,...Ve.parameters?.docs?.source}}};We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`{
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
}`,...We.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`{
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
}`,..._e.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`{
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
}`,...qe.parameters?.docs?.source}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`{
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
}`,...He.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`{
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
}`,...Be.parameters?.docs?.source}}};Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`{
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
}`,...Ue.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
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
}`,...ze.parameters?.docs?.source}}};Ye.parameters={...Ye.parameters,docs:{...Ye.parameters?.docs,source:{originalSource:`{
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
}`,...Ye.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`{
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
}`,...Ge.parameters?.docs?.source}}};Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`{
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
}`,...Je.parameters?.docs?.source}}};Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`{
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
}`,...Xe.parameters?.docs?.source}}};Ke.parameters={...Ke.parameters,docs:{...Ke.parameters?.docs,source:{originalSource:`{
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
}`,...Ke.parameters?.docs?.source}}};Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`{
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
}`,...Ze.parameters?.docs?.source}}};const us=["Default","Loading","ActivityLevels","DateRanges","ColorThemes","ExplicitThemes","Customization","EventHandlers","Tooltips","WithoutLabels","WeekdayLabels","LocalizedLabels","MondayAsWeekStart","NarrowScreens","ContainerRef"];export{We as ActivityLevels,qe as ColorThemes,Ze as ContainerRef,Be as Customization,_e as DateRanges,$e as Default,Ue as EventHandlers,He as ExplicitThemes,Ve as Loading,Je as LocalizedLabels,Xe as MondayAsWeekStart,Ke as NarrowScreens,ze as Tooltips,Ge as WeekdayLabels,Ye as WithoutLabels,us as __namedExportsOrder,cs as default};
