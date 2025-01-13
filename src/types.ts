import type {
  AnimationEvent,
  ClipboardEvent,
  CompositionEvent,
  DOMAttributes,
  DragEvent,
  FocusEvent,
  FormEvent,
  HTMLAttributes,
  JSXElementConstructor,
  KeyboardEvent,
  MouseEvent,
  PointerEvent,
  ReactElement,
  SVGAttributes,
  SyntheticEvent,
  TouchEvent,
  TransitionEvent,
  UIEvent,
  WheelEvent,
} from 'react'

export interface Activity {
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

export interface Theme {
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

interface BlockAttributes extends SVGAttributes<SVGRectElement>, HTMLAttributes<SVGRectElement> {}

export type BlockElement = ReactElement<BlockAttributes, JSXElementConstructor<SVGRectElement>>

export type SVGRectEventHandler = Omit<
  DOMAttributes<SVGRectElement>,
  'css' | 'children' | 'dangerouslySetInnerHTML'
>

export type EventHandlerMap = {
  [key in keyof SVGRectEventHandler]: (
    ...event: Parameters<NonNullable<SVGRectEventHandler[keyof SVGRectEventHandler]>>
  ) => (activity: Activity) => void
}

export type ReactEvent<E extends Element> = AnimationEvent<E> &
  ClipboardEvent<E> &
  CompositionEvent<E> &
  DragEvent<E> &
  FocusEvent<E> &
  FormEvent<E> &
  KeyboardEvent<E> &
  MouseEvent<E> &
  PointerEvent<E> &
  SyntheticEvent<E> &
  TouchEvent<E> &
  TransitionEvent<E> &
  UIEvent<E> &
  WheelEvent<E>
