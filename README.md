# React Activity Calendar

[![CI](https://github.com/grubersjoe/react-activity-calendar/actions/workflows/test.yml/badge.svg)](https://github.com/grubersjoe/react-activity-calendar/actions/workflows/test.yml)

A flexible React component to display activity data in a calendar (heatmap).

![Screenshot](screenshot.png?v5)

**[Documentation (Storybook)](https://grubersjoe.github.io/react-activity-calendar)**

## Features

- color themes 🌈
- dark & light mode ✨
- tooltips 🪧
- event handlers ⁉️
- localization 🌍

The component expects activity data with the following structure. Each activity level must be in the
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
