import React, { FunctionComponent, CSSProperties, ReactNode } from 'react';
import { format, getYear, parseISO } from 'date-fns/esm';
import { ColorInput } from 'tinycolor2';
import type { Day as WeekDay } from 'date-fns';

import styles from './styles.css';

import { DEFAULT_THEME, MIN_DISTANCE_MONTH_LABELS, NAMESPACE } from '../constants';
import { Day, Theme } from '../types';
import { createCalendarTheme, getClassName, getMonthLabels, groupByWeeks } from '../util';

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
   * Toggle to show weekday labels left to the calendar.
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

const ActivityCalendar: FunctionComponent<Props> = ({
  data,
  blockMargin = 4,
  blockRadius = 2,
  blockSize = 12,
  children,
  color = undefined,
  dateFormat = 'MMM do, yyyy',
  fontSize = 14,
  hideColorLegend = false,
  hideMonthLabels = false,
  hideTotalCount = false,
  showWeekdayLabels = false,
  style = {},
  theme = undefined,
  weekStart = 0, // Sunday
}: Props) => {
  // PropsWithChildren<Props> is required for react-docgen
  if (data.length === 0) {
    return (
      <article className={NAMESPACE} style={style}>
        No data
      </article>
    );
  }

  const weeks = groupByWeeks(data, weekStart);
  const totalCount = data.reduce((sum, day) => sum + day.count, 0);
  const year = getYear(parseISO(data[0]?.date));

  const textHeight = hideMonthLabels ? 0 : fontSize + 2 * blockMargin;

  function getTheme(): Theme {
    if (theme) {
      return Object.assign({}, DEFAULT_THEME, theme);
    }

    if (color) {
      return createCalendarTheme(color);
    }

    return DEFAULT_THEME;
  }

  function getDimensions() {
    const width = weeks.length * (blockSize + blockMargin) - blockMargin;
    const height = textHeight + (blockSize + blockMargin) * 7 - blockMargin;

    return { width, height };
  }

  function getTooltipMessage(contribution: Day) {
    const date = parseISO(contribution.date);
    return `<strong>${contribution.count} contributions</strong> on ${format(date, dateFormat)}`;
  }

  function renderLabels() {
    const style = {
      fontSize,
    };

    if (!showWeekdayLabels && hideMonthLabels) {
      return null;
    }

    return (
      <>
        {showWeekdayLabels && (
          <g className={getClassName('legend-weekday')} style={style}>
            {weeks[1].map((day, y) => {
              if (!day || y % 2 === 0) {
                return null;
              }

              return (
                <text
                  x={-2 * blockMargin}
                  y={textHeight + (fontSize / 2 + blockMargin) + (blockSize + blockMargin) * y}
                  textAnchor="end"
                  key={day.date}
                >
                  {format(parseISO(day.date), 'EEEEEE')}
                </text>
              );
            })}
          </g>
        )}
        {!hideMonthLabels && (
          <g className={getClassName('legend-month')} style={style}>
            {getMonthLabels(weeks).map(({ text, x }, index, labels) => {
              // Skip the first month label if there's not enough space to the next one
              if (index === 0 && labels[1].x - x <= MIN_DISTANCE_MONTH_LABELS) {
                return null;
              }

              return (
                <text x={(blockSize + blockMargin) * x} alignmentBaseline="hanging" key={x}>
                  {text}
                </text>
              );
            })}
          </g>
        )}
      </>
    );
  }

  function renderBlocks() {
    const theme = getTheme();

    return weeks
      .map(week =>
        week.map((day, y) => {
          if (!day) {
            return null;
          }

          return (
            <rect
              x={0}
              y={textHeight + (blockSize + blockMargin) * y}
              width={blockSize}
              height={blockSize}
              fill={theme[`level${day.level}` as keyof Theme]}
              rx={blockRadius}
              ry={blockRadius}
              className={styles.block}
              data-date={day.date}
              data-tip={children ? getTooltipMessage(day) : undefined}
              key={day.date}
            />
          );
        }),
      )
      .map((week, x) => (
        <g key={x} transform={`translate(${(blockSize + blockMargin) * x}, 0)`}>
          {week}
        </g>
      ));
  }

  function renderFooter() {
    const theme = getTheme();

    if (hideTotalCount && hideColorLegend) {
      return null;
    }

    return (
      <footer
        className={getClassName('footer', styles.footer)}
        style={{ marginTop: blockMargin, fontSize }}
      >
        {!hideTotalCount && (
          <div className={getClassName('count')}>
            {totalCount} contributions in {year}
          </div>
        )}
        {!hideColorLegend && (
          <div className={getClassName('legend-colors')} style={{ marginLeft: 'auto' }}>
            <span style={{ marginRight: '0.5em' }}>Less</span>
            {Array(5)
              .fill(undefined)
              .map((_, index) => (
                <svg width={blockSize} height={blockSize} key={index} style={{ margin: '0 0.1em' }}>
                  <rect
                    width={blockSize}
                    height={blockSize}
                    fill={theme[`level${index}` as keyof Theme]}
                    rx={blockRadius}
                    ry={blockRadius}
                  />
                </svg>
              ))}
            <span style={{ marginLeft: '0.5em' }}>More</span>
          </div>
        )}
      </footer>
    );
  }

  const { width, height } = getDimensions();

  return (
    <article className={NAMESPACE} style={{ ...style, ...{ maxWidth: '100%', width } }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={getClassName('calendar', styles.calendar)}
      >
        {renderLabels()}
        {renderBlocks()}
      </svg>
      {renderFooter()}
      {children}
    </article>
  );
};

export default ActivityCalendar;
