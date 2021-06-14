import { FunctionComponent, ReactNode, CSSProperties } from 'react';
import { ColorInput } from 'tinycolor2';
import { Day as WeekDay } from 'date-fns';

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface Props {
  /**
   * List of calendar entries.
   */
  data: Array<Day>;
  /**
   * Block margin in pixel.
   */
  blockMargin?: number;
  /**
   * Block radius in pixel.
   */
  blockRadius?: number;
  /**
   * Block size in pixel.
   */
  blockSize?: number;
  /**
   * Pass `<ReactTooltip html />` as child to show tooltips.
   */
  children?: ReactNode;
  /**
   * Base color to compute graph intensity hues. Any valid CSS color is possible.
   */
  color?: ColorInput;
  /**
   * A date-fns/format compatible date string used in tooltip messages.
   */
  dateFormat?: string;
  /**
   * Font size for text in pixels.
   */
  fontSize?: number;
  /**
   * Toggle to hide color legend.
   */
  hideColorLegend?: boolean;
  /**
   * Toggle to hide month labels.
   */
  hideMonthLabels?: boolean;
  /**
   * Toggle to hide total count.
   */
  hideTotalCount?: boolean;
  /**
   * Show loading state (skeleton).
   */
  loading?: boolean;
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

declare const GitHubCalendar: FunctionComponent<Props>;

export { createCalendarTheme };
export default GitHubCalendar;
