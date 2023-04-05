import chroma from 'chroma-js';
import type { Day as WeekDay } from 'date-fns';
import { getYear, parseISO } from 'date-fns';
import React, { CSSProperties, Fragment, FunctionComponent, ReactElement } from 'react';

import {
  DEFAULT_LABELS,
  DEFAULT_WEEKDAY_LABELS,
  MIN_DISTANCE_MONTH_LABELS,
  NAMESPACE,
} from '../constants';
import { useColorScheme } from '../hooks/useColorScheme';
import {
  Activity,
  BlockElement,
  EventHandlerMap,
  Labels,
  ReactEvent,
  SVGRectEventHandler,
  ThemeInput,
} from '../types';
import {
  createTheme,
  generateEmptyData,
  getClassName,
  getMonthLabels,
  groupByWeeks,
} from '../util';
import styles from './styles.module.css';

export interface Props {
  /**
   * List of calendar entries. Every `Activity` object requires an ISO 8601 `date`
   * property in the format `yyyy-MM-dd`, a `count` property with the amount
   * of tracked data and finally a `level` property in the range `0 - 4` to
   * specify activity intensity.
   *
   * Example object:
   *
   * ```json
   * {
   *   date: "2021-02-20",
   *   count: 16,
   *   level: 3
   * }
   * ```
   */
  data: Array<Activity>;
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
   * Use a specific color scheme instead of the system one. `light` is the default.
   */
  colorScheme?: 'light' | 'dark';
  /**
   * Event handlers to register for the SVG `<rect>` elements that are used to render the calendar days. Handler signature: `event => activity => void`
   */
  eventHandlers?: EventHandlerMap;

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
   * Localization strings for all calendar labels.
   *
   * - `totalCount` supports the placeholders `{{count}}` and `{{year}}`.
   */
  labels?: Labels;
  /**
   * Toggle for loading state. `data` property will be ignored if set.
   */
  loading?: boolean;
  /**
   * Render prop for calendar blocks (activities). For example, useful to wrap the element with a tooltip component. Use `React.cloneElement` to pass additional props to the element if necessary.
   */
  renderBlock?: (block: BlockElement, activity: Activity) => ReactElement;
  /**
   * Toggle to show weekday labels left to the calendar.
   */
  showWeekdayLabels?: boolean;
  /**
   * Style object to pass to component container.
   */
  style?: CSSProperties;
  /**
   * An object specifying all theme colors explicitly`.
   */
  theme?: ThemeInput;
  /**
   * Overwrite the total activity count.
   */
  totalCount?: number;
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
  eventHandlers = {},
  fontSize = 14,
  hideColorLegend = false,
  hideMonthLabels = false,
  hideTotalCount = false,
  loading = false,
  renderBlock = undefined,
  showWeekdayLabels = false,
  style = {},
  totalCount: totalCountProp,
  weekStart = 0, // Sunday
  ...props
}: Props) => {
  const systemColorScheme = useColorScheme();
  const colorScheme = props.colorScheme ?? systemColorScheme;

  if (loading) {
    data = generateEmptyData();
  }

  if (data.length === 0) {
    return null;
  }

  const year = getYear(parseISO(data[0]?.date));
  const weeks = groupByWeeks(data, weekStart);

  const totalCount =
    typeof totalCountProp === 'number'
      ? totalCountProp
      : data.reduce((sum, activity) => sum + activity.count, 0);

  const theme = createTheme(props.theme);
  const labels = Object.assign({}, DEFAULT_LABELS, props.labels);
  const textHeight = hideMonthLabels ? 0 : fontSize + 2 * blockMargin;

  function getDimensions() {
    return {
      width: weeks.length * (blockSize + blockMargin) - blockMargin,
      height: textHeight + (blockSize + blockMargin) * 7 - blockMargin,
    };
  }

  function getEventHandlers(activity: Activity): SVGRectEventHandler {
    return (
      Object.keys(eventHandlers) as Array<keyof SVGRectEventHandler>
    ).reduce<SVGRectEventHandler>(
      (handlers, key) => ({
        ...handlers,
        [key]: (event: ReactEvent<SVGRectElement>) => eventHandlers[key]?.(event)(activity),
      }),
      {},
    );
  }

  function renderCalendar() {
    return weeks
      .map((week, weekIndex) =>
        week.map((activity, dayIndex) => {
          if (!activity) {
            return null;
          }

          const style = loading
            ? {
                animation: `${styles.loadingAnimation} 1.75s ease-in-out infinite`,
                animationDelay: `${weekIndex * 20 + dayIndex * 20}ms`,
              }
            : undefined;

          const block = (
            <rect
              {...getEventHandlers(activity)}
              x={0}
              y={textHeight + (blockSize + blockMargin) * dayIndex}
              width={blockSize}
              height={blockSize}
              fill={theme[colorScheme][activity.level]}
              rx={blockRadius}
              ry={blockRadius}
              style={style}
            />
          );

          return (
            <Fragment key={activity.date}>
              {renderBlock ? renderBlock(block, activity) : block}
            </Fragment>
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
    if (hideTotalCount && hideColorLegend) {
      return null;
    }

    return (
      <footer
        className={getClassName('footer', styles.footer)}
        style={{ marginTop: 2 * blockMargin, fontSize }}
      >
        {/* Placeholder */}
        {loading && <div>&nbsp;</div>}

        {!loading && !hideTotalCount && (
          <div className={getClassName('count')}>
            {labels.totalCount
              ? labels.totalCount
                  .replace('{{count}}', String(totalCount))
                  .replace('{{year}}', String(year))
              : `${totalCount} activities in ${year}`}
          </div>
        )}

        {!loading && !hideColorLegend && (
          <div className={getClassName('legend-colors', styles.legendColors)}>
            <span style={{ marginRight: '0.4em' }}>{labels?.legend?.less ?? 'Less'}</span>
            {Array(5)
              .fill(undefined)
              .map((_, level) => (
                <svg width={blockSize} height={blockSize} key={level}>
                  <rect
                    width={blockSize}
                    height={blockSize}
                    fill={theme[colorScheme][level]}
                    rx={blockRadius}
                    ry={blockRadius}
                  />
                </svg>
              ))}
            <span style={{ marginLeft: '0.4em' }}>{labels?.legend?.more ?? 'More'}</span>
          </div>
        )}
      </footer>
    );
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
            {weeks[0].map((day, index) => {
              if (index % 2 === 0) {
                return null;
              }

              const dayIndex = (index + weekStart) % 7;

              return (
                <text
                  x={-2 * blockMargin}
                  y={textHeight + (fontSize / 2 + blockMargin) + (blockSize + blockMargin) * index}
                  textAnchor="end"
                  key={index}
                >
                  {labels.weekdays ? labels.weekdays[dayIndex] : DEFAULT_WEEKDAY_LABELS[dayIndex]}
                </text>
              );
            })}
          </g>
        )}
        {!hideMonthLabels && (
          <g className={getClassName('legend-month')} style={style}>
            {getMonthLabels(weeks, labels.months).map(({ text, x }, index, labels) => {
              // Skip the first month label if there's not enough space to the next one
              if (index === 0 && labels[1] && labels[1].x - x <= MIN_DISTANCE_MONTH_LABELS) {
                return null;
              }

              return (
                <text x={(blockSize + blockMargin) * x} dominantBaseline="hanging" key={x}>
                  {text}
                </text>
              );
            })}
          </g>
        )}
      </>
    );
  }

  const { width, height } = getDimensions();
  const additionalStyles = {
    maxWidth: width,
    // Required for correct colors in CSS loading animation
    [`--${NAMESPACE}-loading`]: theme[colorScheme][0],
    [`--${NAMESPACE}-loading-active`]:
      colorScheme === 'light'
        ? chroma(theme[colorScheme][0]).darken(0.3).hex()
        : chroma(theme[colorScheme][0]).brighten(0.25).hex(),
  };

  return (
    <article
      className={`${NAMESPACE} ${styles.container}`}
      style={{ ...style, ...additionalStyles }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={getClassName('calendar', styles.calendar)}
      >
        {!loading && renderLabels()}
        {renderCalendar()}
      </svg>
      {renderFooter()}
    </article>
  );
};

export const Skeleton: FunctionComponent<Omit<Props, 'data'>> = props => (
  <ActivityCalendar data={[]} {...props} />
);

export default ActivityCalendar;
