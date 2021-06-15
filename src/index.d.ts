import { FunctionComponent, ReactNode, CSSProperties } from 'react';
import { ColorInput } from 'tinycolor2';
import { Day as WeekDay } from 'date-fns';

export type CalendarData = Array<Day>;

export interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface Props {
  /**
   * List of calendar entries for one year. Every Day object requires an ISO 8601 `date`
   * property (yyyy-MM-dd), a `count` property with the amount of tracked data and finally
   * a `level` property in the range 0 - 4 to specify activity intensity.
   */
  data: Array<Day>;
  /**
   * Margin between blocks in pixels.
   */
  blockMargin?: number;
  /**
   * Border radius of blocks in pixels.
   */
  blockRadius?: number;
  /**
   * Block size in pixels.
   */
  blockSize?: number;
  /**
   * Pass `<ReactTooltip html />` as child to show tooltips.
   */
  children?: ReactNode;
  /**
   * Base color to compute graph intensity hues (darkest color). Any valid CSS color is accepted
   */
  color?: ColorInput;
  /**
   * A date-fns/format compatible date string used in tooltips.
   */
  dateFormat?: string;
  /**
   * Font size for text in pixels.
   */
  fontSize?: number;
  /**
   * Toggle to hide color legend below calendar.
   */
  hideColorLegend?: boolean;
  /**
   * Toggle to hide month labels above calendar.
   */
  hideMonthLabels?: boolean;
  /**
   * Toggle to hide total count below calendar.
   */
  hideTotalCount?: boolean;
  /**
   * Toggle to show day labels.
   */
  showWeekdayLabels?: boolean;
  /**
   * Style object to pass to component container.
   */
  style?: CSSProperties;
  /**
   * An object specifying all theme colors explicitly.
   */
  theme?: Theme;
  /**
   * Index of day to be used as start of week. 0 represents Sunday.
   */
  weekStart?: WeekDay;
}

export interface Theme {
  readonly level4: string;
  readonly level3: string;
  readonly level2: string;
  readonly level1: string;
  readonly level0: string;
}

declare function createCalendarTheme(baseColor: ColorInput, emptyColor?: string): Theme;

declare const ActivityCalendar: FunctionComponent<Props>;
declare const Skeleton: FunctionComponent;

export { createCalendarTheme, Skeleton };
export default ActivityCalendar;
