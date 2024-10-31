import type { HTMLAttributes, JSXElementConstructor, ReactElement, SVGAttributes } from 'react'

export type Activity = {
  date: string
  count: number
  level: number
}

export type Week = Array<Activity | undefined>
export type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 // 0 = Sunday, 1 = Monday etc.
export type DayName = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'

export type WeekdayLabels = {
  byDayIndex: (index: DayIndex) => boolean
  shouldShow: boolean
}

export type Labels = Partial<{
  months: Array<string>
  weekdays: Array<string>
  totalCount: string
  legend: Partial<{
    less: string
    more: string
  }>
}>

export type Color = string
export type ColorScale = Array<Color>

export type Theme = {
  light: ColorScale
  dark: ColorScale
}

// Require that at least one color scheme is passed.
export type ThemeInput =
  | {
      light: ColorScale
      dark?: ColorScale
    }
  | {
      light?: ColorScale
      dark: ColorScale
    }

export type ColorScheme = 'light' | 'dark'

export type BlockElement = ReactElement<
  SVGAttributes<SVGRectElement> & HTMLAttributes<SVGRectElement>,
  JSXElementConstructor<SVGRectElement>
>
