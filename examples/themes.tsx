// @ts-nocheck
const explicitTheme: ThemeInput = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
};

<ActivityCalendar data={data} theme={explicitTheme} />

const minimalTheme: ThemeInput = {
  light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
  // for `dark` the default theme will be used
};

<ActivityCalendar data={data} theme={minimalTheme} />
