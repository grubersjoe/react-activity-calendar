# React Activity Calendar

[![CI](https://github.com/grubersjoe/react-activity-calendar/actions/workflows/test.yml/badge.svg)](https://github.com/grubersjoe/react-activity-calendar/actions/workflows/test.yml)
[![npm version](https://badge.fury.io/js/react-activity-calendar.svg)](https://www.npmjs.com/package/react-activity-calendar)

A React component to display activity data in a calendar (heatmap).<br>
[Documentation (Storybook)](https://grubersjoe.github.io/react-activity-calendar)

**Version 3** has been
[released](https://github.com/grubersjoe/react-activity-calendar/releases/tag/v3.0) 🎉<br>See the
[upgrade guide](https://grubersjoe.github.io/react-activity-calendar/?path=/docs/react-activity-calendar-upgrading-to-v3--docs).

![Screenshot](screenshot.png)

<a href="https://www.buymeacoffee.com/grubersjoe">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 32px;" >
</a>

## Installation

```shell
npm install react-activity-calendar
```

## Features

- any number of activity levels 📈
- color themes 🌈
- dark & light mode ✨
- tooltips 🪧
- event handlers ⁉️
- localization 🌍

The component expects activity data in the following structure. Each activity level must be in the
interval from 0 to `maxLevel`, which is 4 by default (see
[documentation](https://grubersjoe.github.io/react-activity-calendar/?path=/story/react-activity-calendar--activity-levels)).
It is up to you how to generate and classify your data.

```tsx
import { ActivityCalendar } from 'react-activity-calendar'

const data = [
  {
    date: '2024-06-23',
    count: 2,
    level: 1,
  },
  {
    date: '2024-08-02',
    count: 16,
    level: 4,
  },
  {
    date: '2024-11-29',
    count: 11,
    level: 3,
  },
]

function Calendar() {
  return <ActivityCalendar data={data} />
}
```

## FAQ

### Why does the calendar not render in environment x?

If you encounter issues rendering this component in a specific React framework, please refer to the
following repository. It contains working examples for Astro, Next.js, Remix and Vite. Server side
rendering (SSR) is supported.

[Framework examples](https://github.com/grubersjoe/react-activity-calendar-tests)

### Why is Create React App unsupported?

Create React App (CRA) is considered
[abandoned](https://github.com/facebook/create-react-app/discussions/11086), and you probably should
not use it anymore (more
[background](https://github.com/facebook/create-react-app/issues/11180#issuecomment-874748552)).
Using this component inside CRA will lead to errors for reasons described in issue
[#105](https://github.com/grubersjoe/react-activity-calendar/issues/105). This repo is not for CRA
support questions. If you encounter issues, you need to fix those yourself given the maintenance
state of CRA. Personally, I would recommend using [Vite](https://vitejs.dev/) instead of CRA.

## Development

### Start the Storybook

```shell
npm run storybook
```

### Update the documentation

```shell
npm run build:storybook
```

## Related projects

- [grubersjoe/react-github-calendar](https://github.com/grubersjoe/react-github-calendar)
- [grubersjoe/github-contributions-api](https://github.com/grubersjoe/github-contributions-api)
