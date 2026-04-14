// For five activity levels
const explicitTheme: ThemeInput = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
}

<ActivityCalendar data={data} theme={explicitTheme} />

// A scale for any number of activity levels going from light gray to purple.
const twoColorTheme: ThemeInput = {
  light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
  // for `dark` the default theme will be used
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
