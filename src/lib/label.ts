import { getMonth, parseISO } from 'date-fns'
import type { Props } from '../components/ActivityCalendar'
import { DEFAULT_MONTH_LABELS } from '../constants'
import type { DayIndex, DayName, Week, WeekdayLabels } from '../types'

type MonthLabel = {
  weekIndex: number
  label: string
}

export function getMonthLabels(
  weeks: Array<Week>,
  monthNames: Array<string> = DEFAULT_MONTH_LABELS,
): Array<MonthLabel> {
  return weeks
    .reduce<Array<MonthLabel>>((labels, week, weekIndex) => {
      const firstActivity = week.find(activity => activity !== undefined)

      if (!firstActivity) {
        throw new Error(`Unexpected error: Week ${weekIndex + 1} is empty.`)
      }

      const month = monthNames[getMonth(parseISO(firstActivity.date))]

      if (!month) {
        const monthName = new Date(firstActivity.date).toLocaleString('en-US', { month: 'short' })
        throw new Error(`Unexpected error: undefined month label for ${monthName}.`)
      }

      const prevLabel = labels[labels.length - 1]

      if (weekIndex === 0 || prevLabel?.label !== month) {
        return [...labels, { weekIndex, label: month }]
      }

      return labels
    }, [])
    .filter(({ weekIndex }, index, labels) => {
      // Labels should only be shown if there is "enough" space (data).
      // This is a naive implementation that does not take the block size,
      // font size, etc. into account.
      const minWeeks = 3

      // Skip the first month label if there is not enough space for the next one.
      if (index === 0) {
        return labels[1] && labels[1].weekIndex - weekIndex >= minWeeks
      }

      // Skip the last month label if there is not enough data in that month
      // to avoid overflowing the calendar on the right.
      if (index === labels.length - 1) {
        return weeks.slice(weekIndex).length >= minWeeks
      }

      return true
    })
}

export function maxWeekdayLabelWidth(
  labels: Array<string>,
  showWeekdayLabel: WeekdayLabels,
  fontSize: number,
): number {
  if (labels.length !== 7) {
    throw new Error('Exactly 7 labels, one for each weekday must be passed.')
  }

  return labels.reduce(
    (maxWidth, label, index) =>
      showWeekdayLabel.byDayIndex(index as DayIndex)
        ? Math.max(maxWidth, Math.ceil(calcTextDimensions(label, fontSize).width))
        : maxWidth,
    0,
  )
}

export function calcTextDimensions(text: string, fontSize: number) {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return { width: 0, height: 0 }
  }

  if (fontSize < 1) {
    throw new RangeError('fontSize must be positive')
  }

  if (text.length === 0) {
    return { width: 0, height: 0 }
  }

  const namespace = 'http://www.w3.org/2000/svg'
  const svg = document.createElementNS(namespace, 'svg')

  svg.style.position = 'absolute'
  svg.style.visibility = 'hidden'
  svg.style.fontFamily = window.getComputedStyle(document.body).fontFamily
  svg.style.fontSize = `${fontSize}px`

  const textNode = document.createElementNS(namespace, 'text')
  textNode.textContent = text

  svg.appendChild(textNode)
  document.body.appendChild(svg)
  const boundingBox = textNode.getBBox()

  document.body.removeChild(svg)

  return { width: boundingBox.width, height: boundingBox.height }
}

export function initWeekdayLabels(
  input: Props['showWeekdayLabels'],
  weekStart: DayIndex,
): WeekdayLabels {
  if (!input)
    return {
      byDayIndex: () => false,
      shouldShow: false,
    }

  // Default: Show every second day of the week.
  if (input === true) {
    return {
      byDayIndex: index => {
        return ((7 + index - weekStart) % 7) % 2 !== 0
      },
      shouldShow: true,
    }
  }

  const indexed: Array<boolean> = []
  for (const name of input) {
    const index = dayNameToIndex[name.toLowerCase() as DayName]
    indexed[index] = true
  }

  return {
    byDayIndex: index => indexed[index] ?? false,
    shouldShow: input.length > 0,
  }
}

const dayNameToIndex: Record<DayName, DayIndex> = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
}
