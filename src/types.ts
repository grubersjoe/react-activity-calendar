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
  readonly months: Array<string>;
  readonly weekdays: Array<string>;
  readonly totalCount: string;
  readonly legend: Partial<{
    readonly less: string;
    readonly more: string;
  }>;
}>;

export interface Theme {
  readonly level4: string;
  readonly level3: string;
  readonly level2: string;
  readonly level1: string;
  readonly level0: string;
}


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
