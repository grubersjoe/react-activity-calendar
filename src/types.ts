import React, {
  DOMAttributes,
  HTMLAttributes,
  JSXElementConstructor,
  ReactElement,
  SVGAttributes,
} from 'react';

export type Level = 0 | 1 | 2 | 3 | 4;

export interface Activity {
  date: string;
  count: number;
  level: Level;
}

export type Week = Array<Activity | undefined>;

export type Labels = Partial<{
  months: Array<string>;
  weekdays: Array<string>;
  totalCount: string;
  legend: Partial<{
    less: string;
    more: string;
  }>;
}>;

export type Color = string;
export type ColorScale = [Color, Color, Color, Color, Color];
export type ColorScaleInput = [from: Color, to: Color];

export interface Theme {
  light: [string, string, string, string, string];
  dark: [string, string, string, string, string];
}

// Require that at least one color scheme is passed.
export type ThemeInput =
  | {
      light: ColorScale | ColorScaleInput;
      dark?: ColorScale | ColorScaleInput;
    }
  | {
      light?: ColorScale | ColorScaleInput;
      dark: ColorScale | ColorScaleInput;
    };

interface BlockAttributes extends SVGAttributes<SVGRectElement>, HTMLAttributes<SVGRectElement> {}
export type BlockElement = ReactElement<BlockAttributes, JSXElementConstructor<SVGRectElement>>;

export type SVGRectEventHandler = Omit<
  DOMAttributes<SVGRectElement>,
  'css' | 'children' | 'dangerouslySetInnerHTML'
>;

export type EventHandlerMap = {
  [key in keyof SVGRectEventHandler]: (
    ...event: Parameters<NonNullable<SVGRectEventHandler[keyof SVGRectEventHandler]>>
  ) => (activity: Activity) => void;
};

export type ReactEvent<E extends Element> = React.AnimationEvent<E> &
  React.ClipboardEvent<E> &
  React.CompositionEvent<E> &
  React.DragEvent<E> &
  React.FocusEvent<E> &
  React.FormEvent<E> &
  React.KeyboardEvent<E> &
  React.MouseEvent<E> &
  React.PointerEvent<E> &
  React.SyntheticEvent<E> &
  React.TouchEvent<E> &
  React.TransitionEvent<E> &
  React.UIEvent<E> &
  React.WheelEvent<E>;
