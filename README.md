# React Activity Calendar

[![CI](https://github.com/grubersjoe/react-activity-calendar/actions/workflows/test.yml/badge.svg)](https://github.com/grubersjoe/react-activity-calendar/actions/workflows/test.yml)

A flexible React component to display activity data in a calendar (heatmap).

**[Documentation (Storybook)](https://grubersjoe.github.io/react-activity-calendar)**

![Screenshot](screenshot.png)

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
interval from 0 to `maxLevel`, which is 4 per default (see
[documentation](https://grubersjoe.github.io/react-activity-calendar/?path=/story/react-activity-calendar--activity-levels)).

It is up to you how to generate and classify your data.

```json
[
  {
    "date": "2023-06-14",
    "count": 2,
    "level": 1
  },
  {
    "date": "2023-06-22",
    "count": 16,
    "level": 3
  }
]
```

## Known issues

### Server side rendering

Server side rendering (SSR) is not supported because the component relies on various browser APIs.
For example, `window.matchMedia()` is used to detect the user's preferred color scheme. Likewise,
the `use client` directive is used as preparation for
[React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components).
On the server `null` will be rendered instead of the calendar.

### Create React App unsupported

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
