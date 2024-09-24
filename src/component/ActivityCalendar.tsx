'use client';

import { getYear, parseISO } from 'date-fns';
import {
  type CSSProperties,
  type ForwardedRef,
  Fragment,
  type ReactElement,
  forwardRef,
} from 'react';

import { DEFAULT_LABELS, LABEL_MARGIN, NAMESPACE } from '../constants';
import { useColorScheme } from '../hooks/useColorScheme';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import styles from '../styles/styles.module.css';
import type {
  Activity,
  BlockElement,
  DayIndex,
  DayName,
  EventHandlerMap,
  Labels,
  ReactEvent,
  SVGRectEventHandler,
  ThemeInput,
} from '../types';
import {
  generateEmptyData,
  getClassName,
  groupByWeeks,
  range,
  validateActivities,
} from '../utils/calendar';
import { getMonthLabels, initWeekdayLabels, maxWeekdayLabelWidth } from '../utils/label';
import { createTheme } from '../utils/theme';

export interface Props {
  /**
   * List of calendar entries. Every `Activity` object requires an ISO 8601
   * `date` string in the format `yyyy-MM-dd`, a `count` property with the
   * amount of tracked data and a `level` property in the range `0-maxLevel`
   * to specify activity intensity. The `maxLevel` prop is 4 by default.
   *
   * For missing dates, no activity is assumed. This allows choosing the start
   * and end date of the calendar arbitrarily by passing empty entries as the
   * first and last item.
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
   * Use a specific color scheme instead of the system one. Supported values
   * are `'light'` and `'dark'`.
   */
  colorScheme?: 'light' | 'dark';
  /**
   * Event handlers to register for the SVG `<rect>` elements that are used to
   * render the calendar days. Handler signature: `event => activity => void`
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
   * Toggle to hide the total count below calendar.
   */
  hideTotalCount?: boolean;
  /**
   * Localization strings for all calendar labels.
   *
   * `totalCount` supports the placeholders `{{count}}` and `{{year}}`.
   */
  labels?: Labels;
  /**
   * Maximum activity level (zero indexed).
   */
  maxLevel?: number;
  /**
   * Toggle for loading state. `data` property will be ignored if set.
   */
  loading?: boolean;
  /**
   * Ref to access the calendar DOM node.
   */
  ref?: ForwardedRef<HTMLElement>;
  /**
   * Render prop for calendar blocks (activities). For example, useful to wrap
   * the element with a tooltip component. Use `React.cloneElement` to pass
   * additional props to the element if necessary.
   */
  renderBlock?: (block: BlockElement, activity: Activity) => ReactElement;
  /**
   * Render prop for color legend blocks. For example, useful to wrap the
   * element with a tooltip component. Use `React.cloneElement` to pass
   * additional props to the element if necessary.
   */
  renderColorLegend?: (block: BlockElement, level: number) => ReactElement;
  /**
   * Toggle to show weekday labels left to the calendar.
   * Alternatively, pass a list of ISO 8601 weekday names to show.
   * For example `['mon', 'wed', 'fri']`.
   */
  showWeekdayLabels?: boolean | Array<DayName>;
  /**
   * Style object to pass to component container.
   */
  style?: CSSProperties;
  /**
   * Set the calendar colors for the light and dark system color scheme.
   * Define each color scale explicitly by settings all colors (5 per default)
   * or pass exactly two colors (the lowest and highest intensity) to calculate
   * a single-hue scale. Colors can be specified in any valid CSS format.
   *
   * The colors for at least one scheme must be set. If undefined, the default
   * theme is used. By default, the calendar will select the current system color
   * scheme, but you can enforce a specific scheme with the `colorScheme` prop.
   *
   * Example:
   *
   * ```tsx
   * <ActivityCalendar
   *   data={data}
   *   theme={{
   *     light: ['hsl(0, 0%, 92%)', 'firebrick'],
   *     dark: ['#333', 'rgb(214, 16, 174)'],
   *   }}
   * />
   * ```
   *
   */
  theme?: ThemeInput;
  /**
   * Overwrite the total activity count.
   */
  totalCount?: number;
  /**
   * Index of day to be used as start of week. 0 represents Sunday.
   */
  weekStart?: DayIndex;
}

const ActivityCalendar = forwardRef<HTMLElement, Props>(
  (
    {
      data: activities,
      blockMargin = 4,
      blockRadius = 2,
      blockSize = 12,
      colorScheme = undefined,
      eventHandlers = {},
      fontSize = 14,
      hideColorLegend = false,
      hideMonthLabels = false,
      hideTotalCount = false,
      labels: labelsProp = undefined,
      maxLevel = 4,
      loading = false,
      renderBlock = undefined,
      renderColorLegend = undefined,
      showWeekdayLabels = false,
      style: styleProp = {},
      theme: themeProp = undefined,
      totalCount: totalCountProp = undefined,
      weekStart = 0, // Sunday
    }: Props, // Required for react-docgen
    ref,
  ) => {
    maxLevel = Math.max(1, maxLevel);

    const theme = createTheme(themeProp, maxLevel + 1);
    const systemColorScheme = useColorScheme();
    const colorScale = theme[colorScheme ?? systemColorScheme];

    const useAnimation = !usePrefersReducedMotion();

    if (loading) {
      activities = generateEmptyData();
    }

    validateActivities(activities, maxLevel);

    const firstActivity = activities[0] as Activity;
    const year = getYear(parseISO(firstActivity.date));
    const weeks = groupByWeeks(activities, weekStart);

    const labels = Object.assign({}, DEFAULT_LABELS, labelsProp);
    const labelHeight = hideMonthLabels ? 0 : fontSize + LABEL_MARGIN;

    const weekdayLabels = initWeekdayLabels(showWeekdayLabels, weekStart);
    const weekdayLabelOffset = weekdayLabels.shouldShow
      ? maxWeekdayLabelWidth(labels.weekdays, weekdayLabels, fontSize) + LABEL_MARGIN
      : undefined;

    function getDimensions() {
      return {
        width: weeks.length * (blockSize + blockMargin) - blockMargin,
        height: labelHeight + (blockSize + blockMargin) * 7 - blockMargin,
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

            const style =
              loading && useAnimation
                ? {
                    animation: `${styles.loadingAnimation} 1.75s ease-in-out infinite`,
                    animationDelay: `${weekIndex * 20 + dayIndex * 20}ms`,
                  }
                : undefined;

            const block = (
              <rect
                {...getEventHandlers(activity)}
                x={0}
                y={labelHeight + (blockSize + blockMargin) * dayIndex}
                width={blockSize}
                height={blockSize}
                rx={blockRadius}
                ry={blockRadius}
                fill={colorScale[activity.level]}
                data-date={activity.date}
                data-level={activity.level}
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

      const totalCount =
        typeof totalCountProp === 'number'
          ? totalCountProp
          : activities.reduce((sum, activity) => sum + activity.count, 0);

      return (
        <footer
          className={getClassName('footer', styles.footer)}
          style={{ marginLeft: weekdayLabelOffset }}
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
              <span style={{ marginRight: '0.4em' }}>{labels.legend.less}</span>
              {range(maxLevel + 1).map(level => {
                const block = (
                  <svg width={blockSize} height={blockSize} key={level}>
                    <rect
                      width={blockSize}
                      height={blockSize}
                      fill={colorScale[level]}
                      rx={blockRadius}
                      ry={blockRadius}
                    />
                  </svg>
                );

                return renderColorLegend ? renderColorLegend(block, level) : block;
              })}
              <span style={{ marginLeft: '0.4em' }}>{labels.legend.more}</span>
            </div>
          )}
        </footer>
      );
    }

    function renderWeekdayLabels() {
      if (!weekdayLabels.shouldShow) {
        return null;
      }

      return (
        <g className={getClassName('legend-weekday')}>
          {range(7).map(index => {
            const dayIndex = ((index + weekStart) % 7) as DayIndex;

            if (!weekdayLabels.byDayIndex(dayIndex)) {
              return null;
            }

            return (
              <text
                x={-LABEL_MARGIN}
                y={labelHeight + (blockSize + blockMargin) * index + blockSize / 2}
                dominantBaseline="central"
                textAnchor="end"
                key={index}
              >
                {labels.weekdays[dayIndex]}
              </text>
            );
          })}
        </g>
      );
    }

    function renderMonthLabels() {
      if (hideMonthLabels) {
        return null;
      }

      return (
        <g className={getClassName('legend-month')}>
          {getMonthLabels(weeks, labels.months).map(({ label, weekIndex }) => (
            <text
              x={(blockSize + blockMargin) * weekIndex}
              dominantBaseline="hanging"
              key={weekIndex}
            >
              {label}
            </text>
          ))}
        </g>
      );
    }

    const { width, height } = getDimensions();

    const containerStyles = {
      fontSize,
      ...(useAnimation && {
        [`--${NAMESPACE}-loading`]: colorScale[0],
        [`--${NAMESPACE}-loading-active`]:
          colorScheme === 'light'
            ? `oklab(from ${colorScale[0]} calc(l * 0.96) a b)`
            : `oklab(from ${colorScale[0]} calc(l * 1.06) a b)`,
      }),
    };

    return (
      <article
        ref={ref}
        className={`${NAMESPACE} ${styles.container}`}
        style={{ ...styleProp, ...containerStyles }}
      >
        <div className={getClassName('scroll-container', styles.scrollContainer)}>
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            className={getClassName('calendar', styles.calendar)}
            style={{ marginLeft: weekdayLabelOffset }}
          >
            {!loading && renderWeekdayLabels()}
            {!loading && renderMonthLabels()}
            {renderCalendar()}
          </svg>
        </div>
        {renderFooter()}
      </article>
    );
  },
);

ActivityCalendar.displayName = 'ActivityCalendar';

// TODO: remove this in v3
export const Skeleton = (props: Omit<Props, 'data'>) => <ActivityCalendar data={[]} {...props} />;

// TODO: make this a named export in v3
export default ActivityCalendar;
