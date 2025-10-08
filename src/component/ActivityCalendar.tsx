'use client'

import {
  forwardRef,
  Fragment,
  useEffect,
  useState,
  type CSSProperties,
  type ForwardedRef,
  type ReactElement,
} from 'react'
import { getMonth, getYear, parseISO } from 'date-fns'
import { DEFAULT_LABELS, LABEL_MARGIN, NAMESPACE } from '../constants'
import { useColorScheme } from '../hooks/useColorScheme'
import { loadingAnimationName, useLoadingAnimation } from '../hooks/useLoadingAnimation'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import {
  generateEmptyData,
  getClassName,
  groupByWeeks,
  range,
  validateActivities,
} from '../lib/calendar'
import { getMonthLabels, initWeekdayLabels, maxWeekdayLabelWidth } from '../lib/label'
import { createTheme } from '../lib/theme'
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
  Week,
} from '../types'
import { styles } from './styles'

export type Props = {
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
  data: Array<Activity>
  /**
   * Margin between blocks in pixels.
   */
  blockMargin?: number
  /**
   * Border radius of blocks in pixels.
   */
  blockRadius?: number
  /**
   * Block size in pixels.
   */
  blockSize?: number
  /**
   * Use a specific color scheme instead of the system one. Supported values
   * are `'light'` and `'dark'`.
   */
  colorScheme?: 'light' | 'dark'
  /**
   * Event handlers to register for the SVG `<rect>` elements that are used to
   * render the calendar days. Handler signature: `event => activity => void`
   */
  eventHandlers?: EventHandlerMap
  /**
   * Font size for text in pixels.
   */
  fontSize?: number
  /**
   * Toggle to hide color legend below calendar.
   */
  hideColorLegend?: boolean
  /**
   * Toggle to hide month labels above calendar.
   */
  hideMonthLabels?: boolean
  /**
   * Toggle to hide the total count below calendar.
   */
  hideTotalCount?: boolean
  /**
   * Localization strings for all calendar labels.
   *
   * `totalCount` supports the placeholders `{{count}}` and `{{year}}`.
   */
  labels?: Labels
  /**
   * Maximum activity level (zero-indexed). 4 per default, 0 means "no activity".
   */
  maxLevel?: number
  /**
   * Toggle for loading state. `data` property will be ignored if set.
   */
  loading?: boolean
  /**
   * Ref to access the calendar DOM node.
   */
  ref?: ForwardedRef<HTMLElement>
  /**
   * Render prop for calendar blocks (activities). For example, useful to wrap
   * the element with a tooltip component. Use `React.cloneElement` to pass
   * additional props to the element if necessary.
   */
  renderBlock?: (block: BlockElement, activity: Activity) => ReactElement
  /**
   * Render prop for color legend blocks. For example, useful to wrap the
   * element with a tooltip component. Use `React.cloneElement` to pass
   * additional props to the element if necessary.
   */
  renderColorLegend?: (block: BlockElement, level: number) => ReactElement
  /**
   * Toggle to show weekday labels left to the calendar.
   * Alternatively, pass a list of ISO 8601 weekday names to show.
   * For example `['mon', 'wed', 'fri']`.
   */
  showWeekdayLabels?: boolean | Array<DayName>
  /**
   * Style object to pass to component container.
   */
  style?: CSSProperties
  /**
   * Set the calendar colors for the light and dark system color scheme. Pass
   * all colors per scheme explicitly (5 per default) or set exactly two colors
   * (the lowest and highest intensity) to calculate a single-hue scale. The
   * number of colors is controlled by the `maxLevel` property. Colors can be
   * specified in any valid CSS format.
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
  theme?: ThemeInput
  /**
   * Overwrite the total activity count.
   */
  totalCount?: number
  /**
   * Index of day to be used as start of week. 0 represents Sunday.
   */
  weekStart?: DayIndex
  /**
   * Toggle to split calendar by months with spacing between them.
   * When enabled, automatically adds one block space between months.
   */
  splitByMonth?: boolean
  /**
   * Position of month labels relative to the activity blocks.
   * 'top' places labels above the activity blocks, 'bottom' places them below.
   */
  monthLabelPosition?: 'top' | 'bottom'
  /**
   * Spacing in pixels between month labels and activity groups.
   * Controls the gap between month labels and the calendar blocks.
   */
  monthLabelSpacing?: number
  /**
   * Spacing in pixels between week labels and activity groups.
   * Controls the gap between weekday labels and the calendar blocks.
   */
  weekLabelSpacing?: number
  /**
   * Text styling properties for month labels.
   * Supports fontSize, fontFamily, fontWeight, color, etc.
   */
  monthLabelProps?: React.SVGProps<SVGTextElement>
  /**
   * Text styling properties for week labels.
   * Supports fontSize, fontFamily, fontWeight, color, etc.
   */
  weekLabelProps?: React.SVGProps<SVGTextElement>
  /**
   * Additional spacing between activity groups in pixels.
   * This adds extra space between different activity levels/groups.
   */
  activityGroupSpacing?: number
}

export const ActivityCalendar = forwardRef<HTMLElement, Props>(
  (
    {
      data: activities,
      blockMargin = 4,
      blockRadius = 2,
      blockSize = 12,
      colorScheme: colorSchemeProp = undefined,
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
      splitByMonth = false,
      monthLabelPosition = 'top',
      monthLabelSpacing = LABEL_MARGIN,
      weekLabelSpacing = LABEL_MARGIN,
      monthLabelProps,
      weekLabelProps,
    }: Props, // Required for react-docgen
    ref,
  ) => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
      setIsClient(true)
    }, [])

    maxLevel = Math.max(1, maxLevel)

    const theme = createTheme(themeProp, maxLevel + 1)
    const systemColorScheme = useColorScheme()
    const colorScheme = colorSchemeProp ?? systemColorScheme
    const colorScale = theme[colorScheme]

    useLoadingAnimation(colorScale[0] as string, colorScheme)
    const useAnimation = !usePrefersReducedMotion()

    if (loading) {
      activities = generateEmptyData()
    }

    validateActivities(activities, maxLevel)

    const firstActivity = activities[0] as Activity
    const year = getYear(parseISO(firstActivity.date))
    const weeks = groupByWeeks(activities, weekStart)

    const labels = Object.assign({}, DEFAULT_LABELS, labelsProp)
    const labelHeight = hideMonthLabels ? 0 : fontSize + monthLabelSpacing

    const weekdayLabels = initWeekdayLabels(showWeekdayLabels, weekStart)

    // Must be calculated on the client or SSR hydration errors will occur
    // because server and client HTML would not match.
    const weekdayLabelOffset =
      isClient && weekdayLabels.shouldShow
        ? maxWeekdayLabelWidth(labels.weekdays, weekdayLabels, fontSize) + weekLabelSpacing
        : undefined

    function groupWeeksByMonth(weeks: Array<Week>) {
      const monthGroups: Array<{
        month: number
        year: number
        weeks: Array<Week>
        startWeekIndex: number
      }> = []

      weeks.forEach((week, weekIndex) => {
        const firstActivity = week.find(activity => activity !== undefined)
        if (!firstActivity) return

        const date = parseISO(firstActivity.date)
        const month = getMonth(date)
        const year = getYear(date)

        const lastGroup = monthGroups[monthGroups.length - 1]

        if (!lastGroup || lastGroup.month !== month || lastGroup.year !== year) {
          monthGroups.push({
            month,
            year,
            weeks: [week],
            startWeekIndex: weekIndex,
          })
        } else {
          lastGroup.weeks.push(week)
        }
      })

      return monthGroups
    }

    function getDimensions() {
      let width = weeks.length * (blockSize + blockMargin) - blockMargin

      if (splitByMonth) {
        const monthGroups = groupWeeksByMonth(weeks)
        const numberOfMonthGaps = monthGroups.length - 1
        const spacing = blockSize + blockMargin
        width += numberOfMonthGaps * spacing
      }

      // Calculate height, adding extra space for bottom labels if needed
      let height = labelHeight + (blockSize + blockMargin) * 7 - blockMargin
      if (monthLabelPosition === 'bottom' && !hideMonthLabels) {
        height += fontSize + monthLabelSpacing
      }

      return {
        width,
        height,
      }
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
      )
    }

    function renderCalendar() {
      if (!splitByMonth) {
        // Current implementation for non-split mode
        return weeks
          .map((week, weekIndex) =>
            week.map((activity, dayIndex) => {
              if (!activity) {
                return null
              }

              const loadingAnimation =
                loading && useAnimation
                  ? {
                      animation: `${loadingAnimationName} 1.75s ease-in-out infinite`,
                      animationDelay: `${weekIndex * 20 + dayIndex * 20}ms`,
                    }
                  : undefined

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
                  style={{ ...styles.rect(colorScheme), ...loadingAnimation }}
                />
              )

              return (
                <Fragment key={activity.date}>
                  {renderBlock ? renderBlock(block, activity) : block}
                </Fragment>
              )
            }),
          )
          .map((week, x) => (
            <g key={x} transform={`translate(${(blockSize + blockMargin) * x}, 0)`}>
              {week}
            </g>
          ))
      }

      // New month-split implementation
      const monthGroups = groupWeeksByMonth(weeks)
      let cumulativeOffset = 0

      return monthGroups.map((monthGroup, monthIndex) => {
        const monthWeeks = monthGroup.weeks.map((week, weekIndexInMonth) =>
          week.map((activity, dayIndex) => {
            if (!activity) {
              return null
            }

            const globalWeekIndex = monthGroup.startWeekIndex + weekIndexInMonth
            const loadingAnimation =
              loading && useAnimation
                ? {
                    animation: `${loadingAnimationName} 1.75s ease-in-out infinite`,
                    animationDelay: `${globalWeekIndex * 20 + dayIndex * 20}ms`,
                  }
                : undefined

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
                style={{ ...styles.rect(colorScheme), ...loadingAnimation }}
              />
            )

            return (
              <Fragment key={activity.date}>
                {renderBlock ? renderBlock(block, activity) : block}
              </Fragment>
            )
          }),
        )

        const monthElement = (
          <g key={`month-${monthIndex}`} transform={`translate(${cumulativeOffset}, 0)`}>
            {monthWeeks.map((week, weekIndexInMonth) => (
              <g
                key={weekIndexInMonth}
                transform={`translate(${(blockSize + blockMargin) * weekIndexInMonth}, 0)`}
              >
                {week}
              </g>
            ))}
          </g>
        )

        // Update cumulative offset for next month
        cumulativeOffset += monthGroup.weeks.length * (blockSize + blockMargin)
        if (monthIndex < monthGroups.length - 1) {
          cumulativeOffset += blockSize + blockMargin
        }

        return monthElement
      })
    }

    function renderFooter() {
      if (hideTotalCount && hideColorLegend) {
        return null
      }

      const totalCount =
        typeof totalCountProp === 'number'
          ? totalCountProp
          : activities.reduce((sum, activity) => sum + activity.count, 0)

      return (
        <footer
          className={getClassName('footer')}
          style={{ ...styles.footer.container, marginLeft: weekdayLabelOffset }}
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
            <div className={getClassName('legend-colors')} style={styles.footer.legend}>
              <span style={{ marginRight: '0.4em' }}>{labels.legend.less}</span>
              {range(maxLevel + 1).map(level => {
                const block = (
                  <svg width={blockSize} height={blockSize}>
                    <rect
                      width={blockSize}
                      height={blockSize}
                      fill={colorScale[level]}
                      rx={blockRadius}
                      ry={blockRadius}
                      style={styles.rect(colorScheme)}
                    />
                  </svg>
                )

                return (
                  <Fragment key={level}>
                    {renderColorLegend ? renderColorLegend(block, level) : block}
                  </Fragment>
                )
              })}
              <span style={{ marginLeft: '0.4em' }}>{labels.legend.more}</span>
            </div>
          )}
        </footer>
      )
    }

    function renderWeekdayLabels() {
      if (!weekdayLabels.shouldShow) {
        return null
      }

      return (
        <g className={getClassName('legend-weekday')}>
          {range(7).map(index => {
            const dayIndex = ((index + weekStart) % 7) as DayIndex

            if (!weekdayLabels.byDayIndex(dayIndex)) {
              return null
            }

            return (
              <text
                x={-weekLabelSpacing}
                y={labelHeight + (blockSize + blockMargin) * index + blockSize / 2}
                dominantBaseline="central"
                textAnchor="end"
                fill="currentColor"
                key={index}
                {...weekLabelProps}
              >
                {labels.weekdays[dayIndex]}
              </text>
            )
          })}
        </g>
      )
    }

    function renderMonthLabels() {
      if (hideMonthLabels) {
        return null
      }

      // Calculate y position based on monthLabelPosition
      const calendarHeight = (blockSize + blockMargin) * 7 - blockMargin
      const yPosition =
        monthLabelPosition === 'bottom' ? labelHeight + calendarHeight + monthLabelSpacing : 0
      const dominantBaseline = monthLabelPosition === 'bottom' ? 'hanging' : 'hanging'

      if (!splitByMonth) {
        // Normal mode with configurable label position
        return (
          <g className={getClassName('legend-month')}>
            {getMonthLabels(weeks, labels.months).map(({ label, weekIndex }) => (
              <text
                x={(blockSize + blockMargin) * weekIndex}
                y={yPosition}
                dominantBaseline={dominantBaseline}
                fill="currentColor"
                key={weekIndex}
                {...monthLabelProps}
              >
                {label}
              </text>
            ))}
          </g>
        )
      }

      // Split-by-month mode with configurable label position
      const monthGroups = groupWeeksByMonth(weeks)
      let cumulativeOffset = 0

      return (
        <g className={getClassName('legend-month')}>
          {monthGroups.map((monthGroup, monthIndex) => {
            const firstActivity = monthGroup.weeks[0]?.find(activity => activity !== undefined)
            if (!firstActivity) return null

            const month = labels.months[getMonth(parseISO(firstActivity.date))]
            if (!month) return null

            const monthLabel = (
              <text
                x={cumulativeOffset}
                y={yPosition}
                dominantBaseline={dominantBaseline}
                fill="currentColor"
                key={monthIndex}
                {...monthLabelProps}
              >
                {month}
              </text>
            )

            // Update cumulative offset for next month
            cumulativeOffset += monthGroup.weeks.length * (blockSize + blockMargin)
            if (monthIndex < monthGroups.length - 1) {
              cumulativeOffset += blockSize + blockMargin
            }

            return monthLabel
          })}
        </g>
      )
    }

    const { width, height } = getDimensions()

    return (
      <article
        ref={ref}
        className={NAMESPACE}
        style={{ ...styleProp, ...styles.container(fontSize) }}
      >
        <div className={getClassName('scroll-container')} style={styles.scrollContainer(fontSize)}>
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            className={getClassName('calendar')}
            style={{ ...styles.calendar, marginLeft: weekdayLabelOffset }}
          >
            {!loading && renderWeekdayLabels()}
            {!loading && renderMonthLabels()}
            {renderCalendar()}
          </svg>
        </div>
        {renderFooter()}
      </article>
    )
  },
)

ActivityCalendar.displayName = 'ActivityCalendar'

export const Skeleton = (props: Omit<Props, 'data'>) => <ActivityCalendar data={[]} {...props} />
