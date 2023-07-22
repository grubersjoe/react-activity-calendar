(globalThis.webpackChunkreact_activity_calendar=globalThis.webpackChunkreact_activity_calendar||[]).push([[559],{"./src/component/ActivityCalendar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EventHandlers:()=>EventHandlers,Loading:()=>Loading,WithCustomizedLook:()=>WithCustomizedLook,WithDayLabels:()=>WithDayLabels,WithExplicitTheme:()=>WithExplicitTheme,WithLocalizedLabels:()=>WithLocalizedLabels,WithMondayAsWeekStart:()=>WithMondayAsWeekStart,WithSpecificDateRange:()=>WithSpecificDateRange,WithTheme:()=>WithTheme,WithTooltips:()=>WithTooltips,WithoutLabels:()=>WithoutLabels,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ActivityCalendar_stories});var Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),react=__webpack_require__("./node_modules/@storybook/addon-links/dist/react/index.mjs"),eachDayOfInterval=__webpack_require__("./node_modules/date-fns/esm/eachDayOfInterval/index.js"),lastDayOfMonth=__webpack_require__("./node_modules/date-fns/esm/lastDayOfMonth/index.js"),formatISO=__webpack_require__("./node_modules/date-fns/esm/formatISO/index.js"),node_modules_react=__webpack_require__("./node_modules/react/index.js"),react_tooltip_min=__webpack_require__("./node_modules/react-tooltip/dist/react-tooltip.min.mjs"),esm=(__webpack_require__("./node_modules/react-tooltip/dist/react-tooltip.min.css"),__webpack_require__("./node_modules/storybook-dark-mode/dist/esm/index.js")),prism=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/prism.js"),one_dark=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/one-dark.js"),one_light=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/one-light.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CodeBlock=_ref=>{let{children}=_ref;const isDark=(0,esm.vs)();return(0,jsx_runtime.jsx)(prism.Z,{language:"typescript",customStyle:{margin:"2rem 0",borderRadius:3,...isDark&&{background:"#222425"}},codeTagProps:{className:"syntax-highlighter"},style:isDark?one_dark.Z:one_light.Z,children})};CodeBlock.displayName="CodeBlock",CodeBlock.__docgenInfo={description:"",methods:[],displayName:"CodeBlock"};const components_CodeBlock=CodeBlock,Container=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)("div",{style:{margin:"1rem 0 2rem"},children})};Container.displayName="Container",Container.__docgenInfo={description:"",methods:[],displayName:"Container"};const components_Container=Container,NAMESPACE="react-activity-calendar",LEVEL_COUNT=5,MIN_DISTANCE_MONTH_LABELS=2,DEFAULT_MONTH_LABELS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],DEFAULT_WEEKDAY_LABELS=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],DEFAULT_LABELS={months:DEFAULT_MONTH_LABELS,weekdays:DEFAULT_WEEKDAY_LABELS,totalCount:"{{count}} activities in {{year}}",legend:{less:"Less",more:"More"}};var chroma=__webpack_require__("./node_modules/chroma-js/chroma.js"),chroma_default=__webpack_require__.n(chroma),getYear=__webpack_require__("./node_modules/date-fns/esm/getYear/index.js"),parseISO=__webpack_require__("./node_modules/date-fns/esm/parseISO/index.js");const query="(prefers-reduced-motion: reduce)";var getDay=__webpack_require__("./node_modules/date-fns/esm/getDay/index.js"),subWeeks=__webpack_require__("./node_modules/date-fns/esm/subWeeks/index.js"),nextDay=__webpack_require__("./node_modules/date-fns/esm/nextDay/index.js"),differenceInCalendarDays=__webpack_require__("./node_modules/date-fns/esm/differenceInCalendarDays/index.js"),getMonth=__webpack_require__("./node_modules/date-fns/esm/getMonth/index.js");function groupByWeeks(days){let weekStart=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(0===days.length)return[];const normalizedDays=function fillHoles(days){const daysMap=days.reduce(((map,day)=>(map.set(day.date,day),map)),new Map);return(0,eachDayOfInterval.Z)({start:(0,parseISO.Z)(days[0].date),end:(0,parseISO.Z)(days[days.length-1].date)}).map((day=>{const date=(0,formatISO.Z)(day,{representation:"date"});return daysMap.has(date)?daysMap.get(date):{date,count:0,level:0}}))}(days),firstDate=(0,parseISO.Z)(normalizedDays[0].date),firstCalendarDate=(0,getDay.Z)(firstDate)===weekStart?firstDate:(0,subWeeks.Z)((0,nextDay.Z)(firstDate,weekStart),1),paddedDays=[...Array((0,differenceInCalendarDays.Z)(firstDate,firstCalendarDate)).fill(void 0),...normalizedDays];return Array(Math.ceil(paddedDays.length/7)).fill(void 0).map(((_,calendarWeek)=>paddedDays.slice(7*calendarWeek,7*calendarWeek+7)))}function getMonthLabels(weeks){let monthNames=arguments.length>1&&void 0!==arguments[1]?arguments[1]:DEFAULT_MONTH_LABELS;return weeks.reduce(((labels,week,index)=>{const firstWeekDay=week.find((day=>void 0!==day));if(!firstWeekDay)throw new Error(`Unexpected error: Week is empty: [${week}].`);const month=monthNames[(0,getMonth.Z)((0,parseISO.Z)(firstWeekDay.date))],prev=labels[labels.length-1];return 0===index||prev.text!==month?[...labels,{x:index,y:0,text:month}]:labels}),[]).filter(((label,index,labels)=>0!==index||labels[1]&&labels[1].x-label.x>MIN_DISTANCE_MONTH_LABELS))}function getClassName(name,styles){return styles?`${NAMESPACE}__${name} ${styles}`:`${NAMESPACE}__${name}`}const defaultTheme=createTheme({light:["hsl(0, 0%, 92%)","hsl(0, 0%, 26%)"],dark:["hsl(0, 0%, 20%)","hsl(0, 0%, 92%)"]});function createTheme(theme){var _theme$light,_theme$dark;return theme?(function validateTheme(theme){if("object"!=typeof theme||void 0===theme.light&&void 0===theme.dark)throw new Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${LEVEL_COUNT} colors respectively.`);if(theme.light){const{length}=theme.light;if(2!==length&&length!==LEVEL_COUNT)throw new Error(`theme.light must contain exactly 2 or ${LEVEL_COUNT} colors, ${length} passed.`)}if(theme.dark){const{length}=theme.dark;if(2!==length&&length!==LEVEL_COUNT)throw new Error(`theme.dark must contain exactly 2 or ${LEVEL_COUNT} colors, ${length} passed.`)}}(theme),theme.light=null!==(_theme$light=theme.light)&&void 0!==_theme$light?_theme$light:defaultTheme.light,theme.dark=null!==(_theme$dark=theme.dark)&&void 0!==_theme$dark?_theme$dark:defaultTheme.dark,{light:isColorScale(theme.light)?theme.light:createColorScale(theme.light),dark:isColorScale(theme.dark)?theme.dark:createColorScale(theme.dark)}):defaultTheme}function isColorScale(colors){const invalidColor=colors.find((color=>!chroma_default().valid(color)));if(invalidColor)throw new Error(`Invalid color "${invalidColor}" passed. All CSS color formats are accepted.`);return colors.length===LEVEL_COUNT}function createColorScale(colors){return chroma_default().scale(colors).mode("lch").colors(LEVEL_COUNT)}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/styles.module.css"),styles_module_default=__webpack_require__.n(styles_module),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module_default(),options);const component_styles_module=styles_module_default()&&styles_module_default().locals?styles_module_default().locals:void 0,ActivityCalendar=_ref=>{let{data,blockMargin=4,blockRadius=2,blockSize=12,colorScheme,eventHandlers={},fontSize=14,hideColorLegend=!1,hideMonthLabels=!1,hideTotalCount=!1,labels:labelsProp,loading=!1,renderBlock,showWeekdayLabels=!1,style={},theme:themeProp,totalCount:totalCountProp,weekStart=0}=_ref;const theme=createTheme(themeProp),systemColorScheme=function useColorScheme(){const[colorScheme,setColorScheme]=(0,node_modules_react.useState)("light"),onChange=event=>setColorScheme(event.matches?"dark":"light");return(0,node_modules_react.useEffect)((()=>{const mediaQuery=window.matchMedia("(prefers-color-scheme: dark)");return setColorScheme(mediaQuery.matches?"dark":"light"),mediaQuery.addEventListener("change",onChange),()=>{mediaQuery.removeEventListener("change",onChange)}}),[]),colorScheme}(),colorScale=theme[null!=colorScheme?colorScheme:systemColorScheme],useAnimation=!function usePrefersReducedMotion(){const[prefersReducedMotion,setPrefersReducedMotion]=(0,node_modules_react.useState)(!0);return(0,node_modules_react.useEffect)((()=>{const mediaQuery=window.matchMedia(query);setPrefersReducedMotion(mediaQuery.matches);const onChange=event=>{setPrefersReducedMotion(event.matches)};return mediaQuery.addEventListener("change",onChange),()=>{mediaQuery.removeEventListener("change",onChange)}}),[]),prefersReducedMotion}();if(loading&&(data=function generateEmptyData(){const year=(new Date).getFullYear();return(0,eachDayOfInterval.Z)({start:new Date(year,0,1),end:new Date(year,11,31)}).map((date=>({date:(0,formatISO.Z)(date,{representation:"date"}),count:0,level:0})))}()),0===data.length)return null;const year=(0,getYear.Z)((0,parseISO.Z)(data[0]?.date)),weeks=groupByWeeks(data,weekStart),labels=Object.assign({},DEFAULT_LABELS,labelsProp),textHeight=hideMonthLabels?0:fontSize+2*blockMargin;function getEventHandlers(activity){return Object.keys(eventHandlers).reduce(((handlers,key)=>({...handlers,[key]:event=>eventHandlers[key]?.(event)(activity)})),{})}const{width,height}=function getDimensions(){return{width:weeks.length*(blockSize+blockMargin)-blockMargin,height:textHeight+7*(blockSize+blockMargin)-blockMargin}}(),calendarStyles={maxWidth:width,[`--${NAMESPACE}-level-0`]:colorScale[0],[`--${NAMESPACE}-level-1`]:colorScale[1],[`--${NAMESPACE}-level-2`]:colorScale[2],[`--${NAMESPACE}-level-3`]:colorScale[3],[`--${NAMESPACE}-level-4`]:colorScale[4],...useAnimation&&{[`--${NAMESPACE}-loading`]:colorScale[0],[`--${NAMESPACE}-loading-active`]:"light"===colorScheme?chroma_default()(colorScale[0]).darken(.3).hex():chroma_default()(colorScale[0]).brighten(.25).hex()}};return(0,jsx_runtime.jsxs)("article",{className:`${NAMESPACE} ${component_styles_module.container}`,style:{...style,...calendarStyles},children:[(0,jsx_runtime.jsxs)("svg",{width,height,viewBox:`0 0 ${width} ${height}`,className:getClassName("calendar",component_styles_module.calendar),children:[!loading&&function renderLabels(){const style={fontSize};return!showWeekdayLabels&&hideMonthLabels?null:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showWeekdayLabels&&(0,jsx_runtime.jsx)("g",{className:getClassName("legend-weekday"),style,children:weeks[0].map(((day,index)=>{if(index%2==0)return null;const dayIndex=(index+weekStart)%7;return(0,jsx_runtime.jsx)("text",{x:-2*blockMargin,y:textHeight+(fontSize/2+blockMargin)+(blockSize+blockMargin)*index,textAnchor:"end",children:labels.weekdays?labels.weekdays[dayIndex]:DEFAULT_WEEKDAY_LABELS[dayIndex]},index)}))}),!hideMonthLabels&&(0,jsx_runtime.jsx)("g",{className:getClassName("legend-month"),style,children:getMonthLabels(weeks,labels.months).map(((_ref2,index,labels)=>{let{text,x}=_ref2;return 0===index&&labels[1]&&labels[1].x-x<=MIN_DISTANCE_MONTH_LABELS?null:(0,jsx_runtime.jsx)("text",{x:(blockSize+blockMargin)*x,dominantBaseline:"hanging",children:text},x)}))})]})}(),function renderCalendar(){return weeks.map(((week,weekIndex)=>week.map(((activity,dayIndex)=>{if(!activity)return null;const style=loading&&useAnimation?{animation:`${component_styles_module.loadingAnimation} 1.75s ease-in-out infinite`,animationDelay:20*weekIndex+20*dayIndex+"ms"}:void 0,block=(0,jsx_runtime.jsx)("rect",{...getEventHandlers(activity),x:0,y:textHeight+(blockSize+blockMargin)*dayIndex,width:blockSize,height:blockSize,rx:blockRadius,ry:blockRadius,"data-date":activity.date,"data-level":activity.level,style});return(0,jsx_runtime.jsx)(node_modules_react.Fragment,{children:renderBlock?renderBlock(block,activity):block},activity.date)})))).map(((week,x)=>(0,jsx_runtime.jsx)("g",{transform:`translate(${(blockSize+blockMargin)*x}, 0)`,children:week},x)))}()]}),function renderFooter(){var _labels$legend$less,_labels$legend$more;if(hideTotalCount&&hideColorLegend)return null;const totalCount="number"==typeof totalCountProp?totalCountProp:data.reduce(((sum,activity)=>sum+activity.count),0);return(0,jsx_runtime.jsxs)("footer",{className:getClassName("footer",component_styles_module.footer),style:{marginTop:2*blockMargin,fontSize},children:[loading&&(0,jsx_runtime.jsx)("div",{children:" "}),!loading&&!hideTotalCount&&(0,jsx_runtime.jsx)("div",{className:getClassName("count"),children:labels.totalCount?labels.totalCount.replace("{{count}}",String(totalCount)).replace("{{year}}",String(year)):`${totalCount} activities in ${year}`}),!loading&&!hideColorLegend&&(0,jsx_runtime.jsxs)("div",{className:getClassName("legend-colors",component_styles_module.legendColors),children:[(0,jsx_runtime.jsx)("span",{style:{marginRight:"0.4em"},children:null!==(_labels$legend$less=labels?.legend?.less)&&void 0!==_labels$legend$less?_labels$legend$less:"Less"}),Array(LEVEL_COUNT).fill(void 0).map(((_,level)=>(0,jsx_runtime.jsx)("svg",{width:blockSize,height:blockSize,children:(0,jsx_runtime.jsx)("rect",{width:blockSize,height:blockSize,fill:colorScale[level],rx:blockRadius,ry:blockRadius})},level))),(0,jsx_runtime.jsx)("span",{style:{marginLeft:"0.4em"},children:null!==(_labels$legend$more=labels?.legend?.more)&&void 0!==_labels$legend$more?_labels$legend$more:"More"})]})]})}()]})};ActivityCalendar.displayName="ActivityCalendar";const Skeleton=props=>(0,jsx_runtime.jsx)(ActivityCalendar,{data:[],...props});Skeleton.displayName="Skeleton",ActivityCalendar.__docgenInfo={description:"",methods:[],displayName:"ActivityCalendar",props:{blockMargin:{defaultValue:{value:"4",computed:!1},required:!1,tsType:{name:"number"},description:"Margin between blocks in pixels."},blockRadius:{defaultValue:{value:"2",computed:!1},required:!1,tsType:{name:"number"},description:"Border radius of blocks in pixels."},blockSize:{defaultValue:{value:"12",computed:!1},required:!1,tsType:{name:"number"},description:"Block size in pixels."},colorScheme:{defaultValue:{value:"undefined",computed:!0},required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Use a specific color scheme instead of the system one. Supported values\nare `'light'` and `'dark'`."},eventHandlers:{defaultValue:{value:"{}",computed:!1},required:!1,tsType:{name:"EventHandlerMap"},description:"Event handlers to register for the SVG `<rect>` elements that are used to\nrender the calendar days. Handler signature: `event => activity => void`"},fontSize:{defaultValue:{value:"14",computed:!1},required:!1,tsType:{name:"number"},description:"Font size for text in pixels."},hideColorLegend:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Toggle to hide color legend below calendar."},hideMonthLabels:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Toggle to hide month labels above calendar."},hideTotalCount:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Toggle to hide total count below calendar."},labels:{defaultValue:{value:"undefined",computed:!0},required:!1,tsType:{name:"Labels"},description:"Localization strings for all calendar labels.\n\n`totalCount` supports the placeholders `{{count}}` and `{{year}}`."},loading:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Toggle for loading state. `data` property will be ignored if set."},renderBlock:{defaultValue:{value:"undefined",computed:!0},required:!1,tsType:{name:"signature",type:"function",raw:"(block: BlockElement, activity: Activity) => ReactElement",signature:{arguments:[{name:"block",type:{name:"BlockElement"}},{name:"activity",type:{name:"Activity"}}],return:{name:"ReactElement"}}},description:"Render prop for calendar blocks (activities). For example, useful to wrap\nthe element with a tooltip component. Use `React.cloneElement` to pass\nadditional props to the element if necessary."},showWeekdayLabels:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Toggle to show weekday labels left to the calendar."},style:{defaultValue:{value:"{}",computed:!1},required:!1,tsType:{name:"CSSProperties"},description:"Style object to pass to component container."},theme:{defaultValue:{value:"undefined",computed:!0},required:!1,tsType:{name:"ThemeInput"},description:"Set the calendar colors for the `light` and `dark` system color scheme. The\ncolor scale for at least one color scheme needs to be specified. For\nundefined values, the default theme is selected. By default, the calendar\nwill use the currently set system color scheme, but you can enforce a\nspecific color scheme with the `colorScheme` prop.\n\nDefine each color scale explicitly with five colors or pass exactly two\ncolors (lowest and highest intensity) to calculate a single-hue scale.\nColors can be specified in any valid CSS format.\n\nExample:\n\n```tsx\n<ActivityCalendar\n  data={data}\n  theme={{\n    light: ['hsl(0, 0%, 92%)', 'firebrick'],\n    dark: ['#333', 'rgb(214, 16, 174)'],\n  }}\n/>\n```"},totalCount:{defaultValue:{value:"undefined",computed:!0},required:!1,tsType:{name:"number"},description:"Overwrite the total activity count."},weekStart:{defaultValue:{value:"0",computed:!1},required:!1,tsType:{name:"WeekDay"},description:"Index of day to be used as start of week. 0 represents Sunday."},data:{required:!0,tsType:{name:"Array",elements:[{name:"Activity"}],raw:"Array<Activity>"},description:'List of calendar entries. Every `Activity` object requires an ISO 8601\n`date` string in the format `yyyy-MM-dd`, a `count` property with the\namount of tracked data and a `level` property in the range `0-4` to\nspecify activity intensity.\n\nExample object:\n\n```json\n{\n  date: "2021-02-20",\n  count: 16,\n  level: 3\n}\n```'}}};const component_ActivityCalendar=ActivityCalendar;Skeleton.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const meta={title:"React Activity Calendar",component:component_ActivityCalendar,decorators:[(Story,_ref)=>{let{args,viewMode}=_ref;const darkMode=(0,esm.vs)();return args.colorScheme="story"===viewMode&&darkMode?"dark":"light",(0,jsx_runtime.jsx)(Story,{})}],parameters:{controls:{sort:"requiredFirst"},layout:"centered"},argTypes:{data:{control:!1},blockMargin:{control:{type:"range",min:0,max:20}},blockRadius:{control:{type:"range",min:0,max:20}},blockSize:{control:{type:"range",min:4,max:100,step:2}},colorScheme:{control:!1},fontSize:{control:{type:"range",min:6,max:32,step:2}},style:{control:!1},weekStart:{options:[0,1,2,3,4,5,6],control:{type:"select",labels:{0:"Sunday (0)",1:"Monday (1)",2:"Tuesday (2)",3:"Wednesday (3)",4:"Thursday (4)",5:"Friday (5)",6:"Saturday (6)"}}}}},TemplateTheme=args=>(0,jsx_runtime.jsxs)(components_Container,{children:[(0,jsx_runtime.jsx)("h1",{children:"Themes"}),(0,jsx_runtime.jsx)(component_ActivityCalendar,{...args,style:{margin:"2rem 0"}}),(0,jsx_runtime.jsx)("h2",{children:"Usage"}),(0,jsx_runtime.jsxs)("p",{children:["Use the ",(0,jsx_runtime.jsx)("code",{children:"theme"})," prop to set the calendar colors for the light and dark"," ",(0,jsx_runtime.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme",children:"system color scheme"}),". The color scale for at least one color scheme needs to be specified. For undefined values, the default theme is selected. By default, the calendar will use the currently set system color scheme, but you can enforce a specific color scheme with the"," ",(0,jsx_runtime.jsx)("a",{href:"/?path=/docs/react-activity-calendar--docs",children:(0,jsx_runtime.jsx)("code",{children:"colorScheme"})})," ","prop."]}),(0,jsx_runtime.jsxs)("p",{children:["Define each color scale"," ",(0,jsx_runtime.jsx)(react.Z,{kind:"react-activity-calendar",name:"with-explicit-theme",children:"explicitly"})," ","with five colors or pass exactly two colors (lowest and highest intensity) to calculate a single-hue scale. Colors can be specified in any valid CSS format."]}),(0,jsx_runtime.jsx)(components_CodeBlock,{children:"import ActivityCalendar, {ThemeInput} from \"react-activity-calendar\";\n\nconst minimalTheme: ThemeInput = {\n  light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],\n  // dark: the default theme will be used as fallback\n}\n\n<ActivityCalendar data={data} theme={minimalTheme} /> \n\nconst explicitTheme: ThemeInput = {\n  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],\n  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],\n}; \n\n<ActivityCalendar data={data} theme={explicitTheme} /> \n"})]});TemplateTheme.displayName="TemplateTheme";const TemplateExplicitTheme=args=>(0,jsx_runtime.jsxs)(components_Container,{children:[(0,jsx_runtime.jsx)("h1",{children:"Explicit theme"}),(0,jsx_runtime.jsx)("p",{}),(0,jsx_runtime.jsxs)("p",{children:["See the"," ",(0,jsx_runtime.jsx)(react.Z,{kind:"react-activity-calendar",name:"with-theme",children:"WithTheme"})," ","story for details how to use the ",(0,jsx_runtime.jsx)("code",{children:"theme"})," prop."]}),(0,jsx_runtime.jsx)(component_ActivityCalendar,{...args,style:{margin:"2rem 0"}})]});TemplateExplicitTheme.displayName="TemplateExplicitTheme";const TemplateTooltips=args=>(0,jsx_runtime.jsxs)(components_Container,{children:[(0,jsx_runtime.jsx)("h1",{children:"Tooltip Examples"}),(0,jsx_runtime.jsxs)("p",{children:["To add a 3rd party tooltip component to the calendar you can use the ",(0,jsx_runtime.jsx)("code",{children:"renderBlock"})," ","property."]}),(0,jsx_runtime.jsx)("h2",{children:(0,jsx_runtime.jsx)("a",{href:"https://mui.com/material-ui/react-tooltip/",children:"Material UI"})}),(0,jsx_runtime.jsxs)("p",{children:["In the simplest case, each block only needs to be wrapped with a ",(0,jsx_runtime.jsx)("code",{children:"<Tooltip/>"})," ","component, as shown here for Material UI:"]}),(0,jsx_runtime.jsx)(components_CodeBlock,{children:"import { Tooltip as MuiTooltip } from '@mui/material';\n\n<ActivityCalendar\n  data={myData}\n  renderBlock={(block, activity) => (\n    <MuiTooltip title={`${activity.count} activities on ${activity.date}`}>\n      {block}\n    </MuiTooltip>\n  )}\n/>"}),(0,jsx_runtime.jsx)(component_ActivityCalendar,{...args,renderBlock:(block,activity)=>(0,jsx_runtime.jsx)(Tooltip.Z,{title:`${activity.count} activities on ${activity.date}`,children:block})}),(0,jsx_runtime.jsx)("h2",{children:(0,jsx_runtime.jsx)("a",{href:"https://github.com/ReactTooltip/react-tooltip",children:"react-tooltip"})}),(0,jsx_runtime.jsxs)("p",{children:["Some libraries, like ",(0,jsx_runtime.jsx)("code",{children:"react-tooltip"}),", require that additional props are passed to the block elements. You can achieve this using the ",(0,jsx_runtime.jsx)("code",{children:"React.cloneElement"})," function:"]}),(0,jsx_runtime.jsx)(components_CodeBlock,{children:"import { Tooltip as ReactTooltip } from \"react-tooltip\";\nimport \"react-tooltip/dist/react-tooltip.css\";\n\n<ActivityCalendar\n  data={myData}\n  renderBlock={(block, activity) =>\n    React.cloneElement(block, {\n      'data-tooltip-id': 'react-tooltip',\n      'data-tooltip-html': `${activity.count} activities on ${activity.date}`,\n    })\n  }\n/>\n<ReactTooltip id=\"react-tooltip\" />"}),(0,jsx_runtime.jsx)(component_ActivityCalendar,{...args,renderBlock:(block,activity)=>(0,node_modules_react.cloneElement)(block,{"data-tooltip-id":"react-tooltip","data-tooltip-html":`${activity.count} activities on ${activity.date}`})}),(0,jsx_runtime.jsx)(react_tooltip_min.u,{id:"react-tooltip"})]});TemplateTooltips.displayName="TemplateTooltips";const TemplateLocalized=args=>(0,jsx_runtime.jsxs)(components_Container,{children:[(0,jsx_runtime.jsx)("h1",{children:"Localization"}),(0,jsx_runtime.jsx)("p",{children:"(Example in German)"}),(0,jsx_runtime.jsx)(component_ActivityCalendar,{...args,style:{margin:"2rem 0"}}),(0,jsx_runtime.jsx)(components_CodeBlock,{children:"// Shape of `labels` property (default values).\n// All properties are optional.\n\nconst labels = {\n  months: [\n    'Jan',\n    'Feb',\n    'Mar',\n    'Apr',\n    'May',\n    'Jun',\n    'Jul',\n    'Aug',\n    'Sep',\n    'Oct',\n    'Nov',\n    'Dec',\n  ],\n  weekdays: [\n    'Sun', // Sunday first!\n    'Mon',\n    'Tue',\n    'Wed',\n    'Thu',\n    'Fri',\n    'Sat',\n  ],\n  totalCount: '{{count}} activities in {{year}}',\n  legend: {\n    less: 'Less',\n    more: 'More',\n  },\n};\n"})]});TemplateLocalized.displayName="TemplateLocalized";const TemplateEventHandlers=args=>(0,jsx_runtime.jsxs)(components_Container,{children:[(0,jsx_runtime.jsx)("h1",{children:"Event Handlers"}),(0,jsx_runtime.jsxs)("p",{children:["You can register event handlers for the SVG ",(0,jsx_runtime.jsx)("code",{children:"<rect/>"})," elements that are used to render the calendar days. This way you can control the behaviour on click, hover, etc. All event listeners have the following signature, so you can use the activity data of the block inside the handler:"]}),(0,jsx_runtime.jsx)(components_CodeBlock,{children:"(event: React.SyntheticEvent) => (data: Activity) => void\n      \ninterface Activity {\n  date: string;\n  count: number;\n  level: 0 | 1 | 2 | 3 | 4;\n}"}),(0,jsx_runtime.jsx)("p",{children:"Click on any block below to see it in action:"}),(0,jsx_runtime.jsx)(component_ActivityCalendar,{...args,style:{margin:"2rem 0"}}),(0,jsx_runtime.jsx)(components_CodeBlock,{children:"<ActivityCalendar \n  data={data}  \n  eventHandler={{\n    onClick: event => activity => {\n      console.log({ event, activity });\n      alert(JSON.stringify(activity, null, 4));\n    },\n    onMouseEnter: event => activity => console.log('mouseEnter'),\n  }}\n/>\n"})]});TemplateEventHandlers.displayName="TemplateEventHandlers";const ActivityCalendar_stories=meta,explicitTheme={light:["#f0f0f0","#c4edde","#7ac7c4","#f73859","#384259"],dark:["hsl(0, 0%, 22%)","#4D455D","#7DB9B6","#F5E9CF","#E96479"]},labels={months:DEFAULT_MONTH_LABELS,weekdays:DEFAULT_WEEKDAY_LABELS,totalCount:"{{count}} activities in {{year}}",legend:{less:"Less",more:"More"}},Default={args:{data:generateData(),labels}},Loading={args:{loading:!0,data:generateData(),labels}},WithTheme={render:TemplateTheme,args:{data:generateData(),theme:{light:["hsl(0, 0%, 92%)","rebeccapurple"],dark:["hsl(0, 0%, 22%)","hsl(225,92%,77%)"]},labels}},WithExplicitTheme={render:TemplateExplicitTheme,args:{data:generateData(),theme:explicitTheme,labels}},WithCustomizedLook={args:{data:generateData(),blockSize:14,blockRadius:7,blockMargin:5,fontSize:16,theme:explicitTheme,labels}},WithMondayAsWeekStart={args:{data:generateData(),weekStart:1,labels}},WithSpecificDateRange={args:{data:generateData(2,7),labels}},WithTooltips={render:TemplateTooltips,args:{data:generateData()}},WithoutLabels={args:{data:generateData(),hideMonthLabels:!0,hideColorLegend:!0,hideTotalCount:!0,labels}},WithDayLabels={args:{data:generateData(),showWeekdayLabels:!0,labels}},WithLocalizedLabels={render:TemplateLocalized,args:{data:generateData(),showWeekdayLabels:!0,labels:{months:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],weekdays:["So","Mo","Di","Mi","Do","Fr","Sa"],totalCount:"{{count}} Aktivitäten in {{year}}",legend:{less:"Weniger",more:"Mehr"}}}},EventHandlers={render:TemplateEventHandlers,args:{data:generateData(),eventHandlers:{onClick:event=>activity=>{console.log({event,activity}),alert(JSON.stringify(activity,null,4))}}}};function generateData(){let monthStart=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,monthEnd=arguments.length>1&&void 0!==arguments[1]?arguments[1]:11;const yearStart=(new Date).getFullYear(),yearEnd=monthEnd<monthStart?yearStart+1:yearStart;return(0,eachDayOfInterval.Z)({start:new Date(yearStart,monthStart,1),end:(0,lastDayOfMonth.Z)(new Date(yearEnd,monthEnd,1))}).map((date=>{const count=Math.max(0,Math.round(10*Math.random()-8*Math.random())),level=Math.ceil(count/(10/(LEVEL_COUNT-1)));return{date:(0,formatISO.Z)(date,{representation:"date"}),count,level}}))}Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: generateData(),\n    labels\n  }\n}",...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    loading: true,\n    data: generateData(),\n    labels\n  }\n}",...Loading.parameters?.docs?.source}}},WithTheme.parameters={...WithTheme.parameters,docs:{...WithTheme.parameters?.docs,source:{originalSource:"{\n  render: TemplateTheme,\n  args: {\n    data: generateData(),\n    theme: {\n      light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],\n      dark: ['hsl(0, 0%, 22%)', 'hsl(225,92%,77%)']\n    },\n    labels\n  }\n}",...WithTheme.parameters?.docs?.source}}},WithExplicitTheme.parameters={...WithExplicitTheme.parameters,docs:{...WithExplicitTheme.parameters?.docs,source:{originalSource:"{\n  render: TemplateExplicitTheme,\n  args: {\n    data: generateData(),\n    theme: explicitTheme,\n    labels\n  }\n}",...WithExplicitTheme.parameters?.docs?.source}}},WithCustomizedLook.parameters={...WithCustomizedLook.parameters,docs:{...WithCustomizedLook.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: generateData(),\n    blockSize: 14,\n    blockRadius: 7,\n    blockMargin: 5,\n    fontSize: 16,\n    theme: explicitTheme,\n    labels\n  }\n}",...WithCustomizedLook.parameters?.docs?.source}}},WithMondayAsWeekStart.parameters={...WithMondayAsWeekStart.parameters,docs:{...WithMondayAsWeekStart.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: generateData(),\n    weekStart: 1,\n    labels\n  }\n}",...WithMondayAsWeekStart.parameters?.docs?.source}}},WithSpecificDateRange.parameters={...WithSpecificDateRange.parameters,docs:{...WithSpecificDateRange.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: generateData(2, 7),\n    labels\n  }\n}",...WithSpecificDateRange.parameters?.docs?.source}}},WithTooltips.parameters={...WithTooltips.parameters,docs:{...WithTooltips.parameters?.docs,source:{originalSource:"{\n  render: TemplateTooltips,\n  args: {\n    data: generateData()\n  }\n}",...WithTooltips.parameters?.docs?.source}}},WithoutLabels.parameters={...WithoutLabels.parameters,docs:{...WithoutLabels.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: generateData(),\n    hideMonthLabels: true,\n    hideColorLegend: true,\n    hideTotalCount: true,\n    labels\n  }\n}",...WithoutLabels.parameters?.docs?.source}}},WithDayLabels.parameters={...WithDayLabels.parameters,docs:{...WithDayLabels.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: generateData(),\n    showWeekdayLabels: true,\n    labels\n  }\n}",...WithDayLabels.parameters?.docs?.source}}},WithLocalizedLabels.parameters={...WithLocalizedLabels.parameters,docs:{...WithLocalizedLabels.parameters?.docs,source:{originalSource:"{\n  render: TemplateLocalized,\n  args: {\n    data: generateData(),\n    showWeekdayLabels: true,\n    labels: {\n      months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],\n      weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],\n      totalCount: '{{count}} Aktivitäten in {{year}}',\n      legend: {\n        less: 'Weniger',\n        more: 'Mehr'\n      }\n    }\n  }\n}",...WithLocalizedLabels.parameters?.docs?.source}}},EventHandlers.parameters={...EventHandlers.parameters,docs:{...EventHandlers.parameters?.docs,source:{originalSource:"{\n  render: TemplateEventHandlers,\n  args: {\n    data: eventHandlerData,\n    eventHandlers: {\n      onClick: event => activity => {\n        console.log({\n          event,\n          activity\n        });\n        alert(JSON.stringify(activity, null, 4));\n      }\n    }\n  }\n}",...EventHandlers.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Loading","WithTheme","WithExplicitTheme","WithCustomizedLook","WithMondayAsWeekStart","WithSpecificDateRange","WithTooltips","WithoutLabels","WithDayLabels","WithLocalizedLabels","EventHandlers"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/styles.module.css":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,'._22ACVCfxHXiiEz0HK56ry7 rect{stroke:rgba(0,0,0,.08);stroke-width:1px;shape-rendering:geometricPrecision}@media(prefers-color-scheme: dark){._22ACVCfxHXiiEz0HK56ry7 rect{stroke:rgba(255,255,255,.04)}}._20j6gG1A00XS63g-XfJhCw{display:block;max-width:100%;height:auto;overflow:visible}._20j6gG1A00XS63g-XfJhCw text{fill:currentColor}._20j6gG1A00XS63g-XfJhCw [data-level="0"]{fill:var(--react-activity-calendar-level-0)}._20j6gG1A00XS63g-XfJhCw [data-level="1"]{fill:var(--react-activity-calendar-level-1)}._20j6gG1A00XS63g-XfJhCw [data-level="2"]{fill:var(--react-activity-calendar-level-2)}._20j6gG1A00XS63g-XfJhCw [data-level="3"]{fill:var(--react-activity-calendar-level-3)}._20j6gG1A00XS63g-XfJhCw [data-level="4"]{fill:var(--react-activity-calendar-level-4)}._3_Jtfu5D4Se0riLtBBqT1F{display:flex}.sqmatJVrSzBi51Vvd08GE{margin-left:auto;display:flex;align-items:center;gap:.2em}@keyframes _1u0nLzzD-AGqYA0-e55i9u{0%{fill:var(--react-activity-calendar-loading)}50%{fill:var(--react-activity-calendar-loading-active)}100%{fill:var(--react-activity-calendar-loading)}}',""]),exports.locals={container:"_22ACVCfxHXiiEz0HK56ry7",calendar:"_20j6gG1A00XS63g-XfJhCw",footer:"_3_Jtfu5D4Se0riLtBBqT1F",legendColors:"sqmatJVrSzBi51Vvd08GE",loadingAnimation:"_1u0nLzzD-AGqYA0-e55i9u"},module.exports=exports}}]);