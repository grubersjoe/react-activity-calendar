'use client'

import {
  forwardRef,
  Fragment,
  lazy,
  Suspense,
  useEffect,
  useState,
  type CSSProperties,
  type ForwardedRef,
  type ReactElement,
} from 'react'
import { getYear, parseISO } from 'date-fns'
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
import { styles } from '../styles/styles'
import type {
  Activity,
  BlockElement,
  ColorScheme,
  DayIndex,
  DayName,
  Labels,
  ThemeInput,
} from '../types'
import { type TooltipConfig } from './Tooltip'

const Tooltip = lazy(() => import('./Tooltip').then(module => ({ default: module.Tooltip })))

export type Props = {
  /**
   * List of calendar entries. Each Activity object requires an ISO 8601 date
   * string in the `yyyy-MM-dd` format, a `count` property indicating the amount
   * of tracked data, and a `level` property in the range `[minLevel, maxLevel]`
   * representing activity intensity. By default, `minLevel` is 0 and `maxLevel`
   * is 4, resulting in five activity levels.
   *
   * Dates without corresponding entries are assumed to have no activity. This
   * allows you to set arbitrary start and end dates for the calendar by passing
   * empty entries as the first and last items.
   *
   * @example
   * {
   *   date: "2021-02-20",
   *   count: 16,
   *   level: 3
   * }
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
   * Class name to add to the component container.
   */
  className?: string
  /**
   * Use the `'light'` or `'dark'` color scheme instead of the system one.
   */
  colorScheme?: ColorScheme
  /**
   * Font size for text in pixels.
   */
  fontSize?: number
  /**
   * Localization strings for all calendar labels.
   * `totalCount` supports the placeholders `{{count}}` and `{{year}}`.
   */
  labels?: Labels
  /**
   * Maximum activity level, 4 by default.
   * @see minLevel
   */
  maxLevel?: number
  /**
   * Minimum activity level, 0 by default.
   * @see maxLevel
   */
  minLevel?: number
  /**
   * Toggle to display the calendar loading state. The `data` property is
   * ignored if set.
   */
  loading?: boolean
  /**
   * Ref to access the calendar DOM node.
   */
  ref?: ForwardedRef<HTMLElement>
  /**
   * Render prop for calendar blocks (activities). Useful to attach event
   * handlers or to wrap the element with a link. Use `React.cloneElement` to
   * pass additional props to the element if necessary.
   */
  renderBlock?: (block: BlockElement, activity: Activity) => ReactElement
  /**
   * Render prop for color legend blocks. Use `React.cloneElement` to pass
   * additional props to the element if necessary.
   */
  renderColorLegend?: (block: BlockElement, level: number) => ReactElement
  /**
   * Toggle to hide the color legend below the calendar.
   */
  showColorLegend?: boolean
  /**
   * Toggle to hide the month labels above the calendar.
   */
  showMonthLabels?: boolean
  /**
   * Toggle to hide the total count below the calendar.
   */
  showTotalCount?: boolean
  /**
   * Toggle to show weekday labels left to the calendar.
   * Alternatively, provide an array of ISO 8601 weekday names to display.
   *
   * @example ['mon', 'wed', 'fri']
   */
  showWeekdayLabels?: boolean | Array<DayName>
  /**
   * Style object to pass to the component container.
   */
  style?: CSSProperties
  /**
   * Set the calendar colors for the light and dark color schemes. Provide
   * the colors for all activity levels per scheme explicitly or specify two
   * colors (the zero and maximum intensity) to calculate a scale automatically.
   * The number of activity levels is controlled by the `minLevel` and
   * `maxLevel` properties.
   * If you have negative activity levels, you can also pass three colors,
   * representing the negative, zero, and positive levels, to calculate a
   * corresponding scale. For explicit themes the color count must match the
   * number of activity levels. Colors can be specified in any valid CSS format.
   *
   * For undefined color schemes the default theme is used. By default, the
   * current system color scheme is applied, but you can enforce a specific
   * scheme with the `colorScheme` prop.
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
   * @see colorScheme
   * @see minLevel
   * @see maxLevel
   */
  theme?: ThemeInput
  /**
   * Tooltips to display when hovering over activity blocks or the color legend
   * below the calendar.
   *
   * @see [Documentation](https://grubersjoe.github.io/react-activity-calendar/?path=/story/react-activity-calendar--tooltips)
   *
   */
  tooltips?: {
    activity?: TooltipConfig & {
      text: (activity: Activity) => string
    }
    colorLegend?: TooltipConfig & {
      text: (level: number) => string
    }
  }
  /**
   * Index of day to be used as the week start. 0 represents Sunday.
   */
  weekStart?: DayIndex
}

export const ActivityCalendar = forwardRef<HTMLElement, Props>(
  (
    {
      data: activities,
      blockMargin = 4,
      blockRadius = 2,
      blockSize = 12,
      className,
      colorScheme: colorSchemeProp,
      fontSize = 14,
      labels: labelsProp,
      loading = false,
      minLevel = 0,
      maxLevel = 4,
      renderBlock,
      renderColorLegend,
      showColorLegend = true,
      showMonthLabels = true,
      showTotalCount = true,
      showWeekdayLabels = false,
      style: styleProp = {},
      theme: themeProp,
      tooltips = {},
      weekStart = 0, // Sunday
    },
    ref,
  ) => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
      setIsClient(true)
    }, [])

    if (minLevel >= maxLevel) {
      throw new RangeError(
        `Minimum activity level must be less than maximum level. Got ${minLevel} and ${maxLevel}.`,
      )
    }

    const levels = { minLevel, maxLevel }
    const theme = createTheme(themeProp, levels)
    const systemColorScheme = useColorScheme()
    const colorScheme = colorSchemeProp ?? systemColorScheme
    const colorScale = theme[colorScheme]

    const animationLoaded = useLoadingAnimation(colorScale[0] as string, colorScheme)
    const useAnimation = !usePrefersReducedMotion()

    if (loading) {
      // Only show the loading state once the CSS animation has been injected
      // to avoid a flash of white with dark backgrounds.
      if (useAnimation && !animationLoaded) {
        return null
      }

      activities = generateEmptyData()
    }

    validateActivities(activities, levels)

    const firstActivity = activities[0] as Activity
    const year = getYear(parseISO(firstActivity.date))
    const weeks = groupByWeeks(activities, weekStart)

    const labels = Object.assign({}, DEFAULT_LABELS, labelsProp)
    const labelHeight = showMonthLabels ? fontSize + LABEL_MARGIN : 0

    const weekdayLabels = initWeekdayLabels(showWeekdayLabels, weekStart)

    // Must be calculated on the client, or SSR hydration errors will occur
    // because server and client HTML would not match.
    const weekdayLabelOffset =
      isClient && weekdayLabels.shouldShow
        ? maxWeekdayLabelWidth(labels.weekdays, weekdayLabels, fontSize) + LABEL_MARGIN
        : undefined

    function getDimensions() {
      return {
        width: weeks.length * (blockSize + blockMargin) - blockMargin,
        height: labelHeight + (blockSize + blockMargin) * 7 - blockMargin,
      }
    }

    function renderCalendar() {
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
                x={0}
                y={labelHeight + (blockSize + blockMargin) * dayIndex}
                width={blockSize}
                height={blockSize}
                rx={blockRadius}
                ry={blockRadius}
                fill={colorForLevel(activity.level)}
                data-date={activity.date}
                data-level={activity.level}
                style={{
                  ...styles.rect(colorScheme),
                  ...loadingAnimation,
                }}
              />
            )

            const renderedBlock = renderBlock ? renderBlock(block, activity) : block

            return (
              <Fragment key={activity.date}>
                {tooltips.activity ? (
                  <Suspense fallback={renderedBlock}>
                    <Tooltip
                      text={tooltips.activity.text(activity)}
                      colorScheme={colorScheme}
                      placement={tooltips.activity.placement ?? 'top'}
                      hoverRestMs={tooltips.activity.hoverRestMs}
                      offset={tooltips.activity.offset}
                      transitionStyles={tooltips.activity.transitionStyles}
                      withArrow={tooltips.activity.withArrow}
                    >
                      {renderedBlock}
                    </Tooltip>
                  </Suspense>
                ) : (
                  renderedBlock
                )}
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

    function renderFooter() {
      if (!showTotalCount && !showColorLegend) {
        return null
      }

      const totalCount = activities.reduce((sum, activity) => sum + activity.count, 0)

      return (
        <footer
          className={getClassName('footer')}
          style={{ ...styles.footer.container, marginLeft: weekdayLabelOffset }}
        >
          {/* Placeholder */}
          {loading && <div>&nbsp;</div>}

          {!loading && showTotalCount && (
            <div className={getClassName('count')}>
              {labels.totalCount
                ? labels.totalCount
                    .replace('{{count}}', String(totalCount))
                    .replace('{{year}}', String(year))
                : `${totalCount} activities in ${year}`}
            </div>
          )}

          {!loading && showColorLegend && (
            <div className={getClassName('legend-colors')} style={styles.footer.legend}>
              {labels.legend.less && (
                <span style={{ marginRight: '0.4em' }}>{labels.legend.less}</span>
              )}

              {range(minLevel, maxLevel + 1).map(level => {
                const colorLegend = (
                  <svg width={blockSize} height={blockSize} key={level}>
                    <rect
                      width={blockSize}
                      height={blockSize}
                      fill={colorForLevel(level)}
                      rx={blockRadius}
                      ry={blockRadius}
                      style={styles.rect(colorScheme)}
                    />
                  </svg>
                )

                const renderedColorLegend = renderColorLegend
                  ? renderColorLegend(colorLegend, level)
                  : colorLegend

                return (
                  <Fragment key={level}>
                    {tooltips.colorLegend ? (
                      <Suspense fallback={renderedColorLegend}>
                        <Tooltip
                          text={tooltips.colorLegend.text(level)}
                          colorScheme={colorScheme}
                          placement={tooltips.colorLegend.placement ?? 'bottom'}
                          hoverRestMs={tooltips.colorLegend.hoverRestMs}
                          offset={tooltips.colorLegend.offset}
                          transitionStyles={tooltips.colorLegend.transitionStyles}
                          withArrow={tooltips.colorLegend.withArrow}
                        >
                          {renderedColorLegend}
                        </Tooltip>
                      </Suspense>
                    ) : (
                      renderedColorLegend
                    )}
                  </Fragment>
                )
              })}

              {labels.legend.more && (
                <span style={{ marginLeft: '0.4em' }}>{labels.legend.more}</span>
              )}
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
                x={-LABEL_MARGIN}
                y={labelHeight + (blockSize + blockMargin) * index + blockSize / 2}
                dominantBaseline="central"
                textAnchor="end"
                fill="currentColor"
                key={index}
              >
                {labels.weekdays[dayIndex]}
              </text>
            )
          })}
        </g>
      )
    }

    function renderMonthLabels() {
      if (!showMonthLabels) {
        return null
      }

      return (
        <g className={getClassName('legend-month')}>
          {getMonthLabels(weeks, labels.months).map(({ label, weekIndex }) => (
            <text
              x={(blockSize + blockMargin) * weekIndex}
              y={0}
              dominantBaseline="hanging"
              fill="currentColor"
              key={weekIndex}
            >
              {label}
            </text>
          ))}
        </g>
      )
    }

    function colorForLevel(level: number) {
      return colorScale[level - minLevel] // shift to zero-based index
    }

    const { width, height } = getDimensions()

    return (
      <article
        ref={ref}
        className={`${NAMESPACE} ${className ?? ''}`.trim()}
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
