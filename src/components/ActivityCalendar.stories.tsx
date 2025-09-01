import {
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ForwardedRef,
  type ReactElement,
} from 'react'
import LinkTo from '@storybook/addon-links/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useDarkMode } from '@vueless/storybook-dark-mode'
import { Highlight, themes as prismThemes } from 'prism-react-renderer'
import Container from '../../.storybook/components/Container'
import exampleCustomization from '../../examples/customization?raw'
import exampleEventHandlers from '../../examples/event-handlers?raw'
import exampleLabelsShape from '../../examples/labels-shape?raw'
import exampleLabels from '../../examples/labels?raw'
import exampleRef from '../../examples/ref?raw'
import exampleThemeExplicit from '../../examples/themes-explicit?raw'
import exampleTheme from '../../examples/themes?raw'
import exampleTooltipsConfig from '../../examples/tooltips-config?raw'
import exampleTooltips from '../../examples/tooltips?raw'
import exampleTooltipsCSS from '../../src/styles/tooltips.css?raw'
import { generateTestData } from '../lib/calendar'
import type { Theme } from '../types'
import { ActivityCalendar, type Props } from './ActivityCalendar'
import '../styles/tooltips.css'
import { themes } from 'storybook/theming'

type Story = StoryObj<Props>

const meta: Meta<ForwardedRef<Props>> = {
  title: 'React Activity Calendar',
  component: ActivityCalendar,
  argTypes: {
    data: {
      control: false,
    },
    blockMargin: {
      control: { type: 'range', min: 0, max: 20 },
    },
    blockRadius: {
      control: { type: 'range', min: 0, max: 20 },
    },
    blockSize: {
      control: { type: 'range', min: 4, max: 30, step: 1 },
    },
    colorScheme: {
      control: false,
    },
    fontSize: {
      control: { type: 'range', min: 6, max: 32, step: 2 },
    },
    maxLevel: {
      control: { type: 'range', min: 1, max: 9 },
    },
    ref: {
      control: false,
    },
    showWeekdayLabels: {
      control: 'boolean',
    },
    style: {
      control: false,
    },
    tooltips: {
      control: false,
    },
    weekStart: {
      options: [0, 1, 2, 3, 4, 5, 6],
      control: {
        type: 'select',
        labels: {
          0: 'Sunday (0)',
          1: 'Monday (1)',
          2: 'Tuesday (2)',
          3: 'Wednesday (3)',
          4: 'Thursday (4)',
          5: 'Friday (5)',
          6: 'Saturday (6)',
        },
      },
    },
  },
  decorators: [
    (Story, { args }) => {
      // @ts-expect-error unsure if typing forward refs correctly is possible
      args.colorScheme = useDarkMode() ? 'dark' : 'light'

      return <Story />
    },
  ],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
}

// Storybook does not initialize the controls for some reason
const defaultProps = {
  blockMargin: 4,
  blockRadius: 2,
  blockSize: 12,
  fontSize: 14,
  hideColorLegend: false,
  hideMonthLabels: false,
  hideTotalCount: false,
  loading: false,
  maxLevel: 4,
  showWeekdayLabels: false,
  weekStart: 0, // Sunday
} satisfies Omit<Props, 'data'>

export default meta
const explicitTheme: Theme = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['hsl(0, 0%, 22%)', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
}

export const Default: Story = {
  args: defaultProps,
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])
    return <ActivityCalendar {...args} data={data} />
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} />',
      },
    },
  },
}

export const Loading: Story = {
  args: {
    ...defaultProps,
    data: [],
    loading: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} loading />',
      },
    },
  },
}

export const ActivityLevels: Story = {
  args: {
    ...defaultProps,
    maxLevel: 2,
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])

    return (
      <Container>
        <h1>Activity levels</h1>
        <ActivityCalendar {...args} data={data} style={{ margin: '1rem 0' }} />
        <p>
          Use the{' '}
          <code>
            <b>maxLevel</b>
          </code>{' '}
          prop to control the number of activity levels. This value is zero indexed, where 0
          represents no activity. <code>maxLevel</code> is 4 per default, so this results in 5
          activity levels. Each activity level must be in the interval from 0 to{' '}
          <code>maxLevel</code>.
        </p>
      </Container>
    )
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} maxLevel={2} loading />',
      },
    },
  },
}

export const DateRanges: Story = {
  args: defaultProps,
  render: args => {
    const dataLong = useMemo(
      () =>
        generateTestData({
          maxLevel: args.maxLevel,
          interval: {
            start: new Date(2022, 5, 1),
            end: new Date(2023, 4, 31),
          },
        }),
      [args.maxLevel],
    )

    const dataMedium = useMemo(
      () =>
        generateTestData({
          maxLevel: args.maxLevel,
          interval: {
            start: new Date(2023, 2, 8),
            end: new Date(2023, 7, 1),
          },
        }),
      [args.maxLevel],
    )

    const dataShort = useMemo(
      () =>
        generateTestData({
          maxLevel: args.maxLevel,
          interval: {
            start: new Date(2023, 5, 14),
            end: new Date(2023, 6, 17),
          },
        }),
      [args.maxLevel],
    )

    return (
      <Stack>
        <ActivityCalendar
          {...args}
          data={dataLong}
          labels={{
            totalCount: '{{count}} activities in 2022 & 2023',
          }}
        />
        <ActivityCalendar {...args} data={dataMedium} />
        <ActivityCalendar {...args} data={dataShort} />
      </Stack>
    )
  },
}

export const ColorThemes: Story = {
  args: {
    ...defaultProps,
    theme: {
      light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
      dark: ['hsl(0, 0%, 22%)', 'hsl(225,92%,77%)'],
    },
  },
  parameters: {
    docs: {
      source: {
        code: exampleTheme,
      },
    },
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])

    return (
      <Container>
        <h1>Color themes</h1>
        <ActivityCalendar {...args} data={data} style={{ margin: '2rem 0' }} />
        <p>
          Use the{' '}
          <code>
            <b>theme</b>
          </code>{' '}
          prop to configure the calendar colors for the light and dark system{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme">color scheme</a>.
          Pass all colors per scheme{' '}
          <LinkTo kind="react-activity-calendar" name="explicit-themes">
            explicitly
          </LinkTo>{' '}
          (5 per default) or set exactly two colors (the lowest and highest intensity) to calculate
          a single-hue scale. For explicit themes the color count must match the number of activity
          levels, which is controlled by the{' '}
          <LinkTo kind="react-activity-calendar" name="activity-levels">
            <code>maxLevel</code>
          </LinkTo>{' '}
          prop. Colors can be specified in any valid CSS format.
        </p>
        <p>
          The colors for at least one scheme must be set. If undefined, the default theme is used.
          By default, the calendar will select the current system color scheme, but you can enforce
          a specific scheme with the{' '}
          <a href="/?path=/docs/react-activity-calendar--docs">
            <code>colorScheme</code>
          </a>{' '}
          prop.
        </p>
        <Source code={exampleTheme} isDarkMode={useDarkMode()} />
      </Container>
    )
  },
}

export const ExplicitThemes: Story = {
  args: {
    ...defaultProps,
    theme: explicitTheme,
  },
  parameters: {
    // maxLevel cannot be used for a static explicit theme
    controls: { exclude: ['maxLevel'] },
    docs: {
      source: {
        code: exampleThemeExplicit,
      },
    },
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: 4 }), [])

    return (
      <Container>
        <h1>Explicit theme</h1>
        <p></p>
        <p>
          See the{' '}
          <LinkTo kind="react-activity-calendar" name="color-themes">
            color themes
          </LinkTo>{' '}
          page for details how to use the <code>theme</code> prop.
        </p>
        <ActivityCalendar {...args} data={data} style={{ marginTop: '2rem' }} />
      </Container>
    )
  },
}

export const Customization: Story = {
  args: {
    ...defaultProps,
    blockSize: 14,
    blockRadius: 7,
    blockMargin: 5,
    fontSize: 16,
    theme: explicitTheme,
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])
    return <ActivityCalendar {...args} data={data} />
  },
  parameters: {
    // maxLevel cannot be used for a static explicit theme
    controls: { exclude: ['maxLevel'] },
    docs: {
      source: {
        code: exampleCustomization,
      },
    },
  },
}

export const EventHandlers: Story = {
  args: {
    ...defaultProps,
    renderBlock: (block, activity) =>
      cloneElement(block, {
        onClick: () => {
          alert(JSON.stringify(activity))
        },
        onMouseEnter: () => {
          // eslint-disable-next-line no-console
          console.log('on mouse enter')
        },
      }),
  },
  parameters: {
    docs: {
      source: {
        code: exampleEventHandlers,
      },
    },
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])

    return (
      <Container>
        <h1>Event Handlers</h1>
        <p>
          Use the{' '}
          <code>
            <b>renderBlock</b>
          </code>{' '}
          prop to attach event handlers to the SVG <code>rect</code> elements that represent
          calendar days. Click on any block below to see it in action.
        </p>
        <ActivityCalendar {...args} data={data} style={{ margin: '2rem 0' }} />
        <p>
          Use the <code>React.cloneElement()</code> function to assign the handlers:
        </p>
        <Source code={exampleEventHandlers} isDarkMode={useDarkMode()} />
      </Container>
    )
  },
}

export const Tooltips: Story = {
  args: {
    ...defaultProps,
    tooltips: {
      activity: {
        text: activity => `${activity.level} activities on ${activity.date}`,
      },
      colorLegend: {
        text: level => `Activity level ${level + 1}`,
      },
    },
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])

    return (
      <Container>
        <h1>Tooltips</h1>
        <p>
          Use the{' '}
          <code>
            <b>tooltips</b>
          </code>{' '}
          prop to show tooltips when hovering the calendar days or the color legend. Each tooltip's
          content is generated by a callback function, which receives either the activity data or
          level value of the hovered element.
        </p>
        <ActivityCalendar {...args} data={data} style={{ margin: '2rem 0' }} />
        <p>
          Tooltips are implemented using the <a href="https://floating-ui.com/">Floating UI</a>{' '}
          library as a “headless”; component, meaning they come <b>without pre-defined styles</b>.
          This gives you complete styling flexibility – you can either import the provided default
          styles or write custom CSS yourself:
        </p>
        <Source code="import 'react-activity-calendar/tooltips.css';" isDarkMode={useDarkMode()} />
        <Source code={exampleTooltipsCSS} isDarkMode={useDarkMode()} />

        <h2>Tooltip configuration</h2>
        <p>Each tooltip type supports the following optional configuration settings:</p>
        <ul>
          <li>
            <a href="https://floating-ui.com/docs/useFloating#placement">placement</a> of the
            tooltip
          </li>
          <li>
            <a href="https://floating-ui.com/docs/offset#options">offset</a> to the element in
            pixels (4 per default)
          </li>
          <li>
            the cursor “<a href="https://floating-ui.com/docs/useHover#restms">rest time</a>”; in
            milliseconds before opening a tooltip (150ms per default)
          </li>
          <li>
            <a href="https://floating-ui.com/docs/useTransition#usetransitionstyles-props">
              transition styles
            </a>{' '}
            to fine-tune CSS animations
          </li>
          <li>whether to draw an arrow (false per default)</li>
        </ul>
        <Source code={exampleTooltipsConfig} isDarkMode={useDarkMode()} />
        <ActivityCalendar
          {...args}
          data={data}
          tooltips={{
            activity: {
              text: activity => `${activity.level} activities on ${activity.date}`,
              placement: 'right',
              offset: 8,
              transitionStyles: {
                duration: 100,
                common: { fontFamily: 'monospace' },
              },
              hoverRestMs: 300,
              withArrow: true,
            },
          }}
          style={{ margin: '2rem 0' }}
        />
      </Container>
    )
  },
  parameters: {
    docs: {
      source: {
        code: exampleTooltips,
      },
    },
  },
}

export const WithoutLabels: Story = {
  args: {
    ...defaultProps,
    hideMonthLabels: true,
    hideColorLegend: true,
    hideTotalCount: true,
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])
    return <ActivityCalendar {...args} data={data} />
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} hideMonthLabels hideColorLegend hideTotalCount />',
      },
    },
  },
}

export const WeekdayLabels: Story = {
  args: {
    ...defaultProps,
    showWeekdayLabels: true,
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])
    return (
      <Stack>
        <div>
          <StackHeading code="true">Show every second weekday (default)</StackHeading>
          <ActivityCalendar {...args} data={data} />
        </div>

        <div>
          <StackHeading code="['mon', 'fri']">Show specific days</StackHeading>
          <ActivityCalendar {...args} data={data} showWeekdayLabels={['mon', 'fri']} />
        </div>

        <div>
          <StackHeading code="['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']">
            Show every day
          </StackHeading>
          <ActivityCalendar
            {...args}
            data={data}
            showWeekdayLabels={['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']}
          />
        </div>
      </Stack>
    )
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} showWeekdayLabels />',
      },
    },
  },
}

export const LocalizedLabels: Story = {
  args: {
    ...defaultProps,
    showWeekdayLabels: true,
    labels: {
      months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      totalCount: '{{count}} Aktivitäten in {{year}}',
      legend: {
        less: 'Weniger',
        more: 'Mehr',
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: exampleLabels,
      },
    },
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])

    return (
      <Container>
        <h1>Localization</h1>
        <p>Example in German:</p>
        <ActivityCalendar {...args} data={data} style={{ margin: '2rem 0' }} />
        <Source code={exampleLabelsShape} isDarkMode={useDarkMode()} />
      </Container>
    )
  },
}

export const MondayAsWeekStart: Story = {
  args: {
    ...defaultProps,
    weekStart: 1,
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])
    return <ActivityCalendar {...args} data={data} />
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} weekStart={1} />',
      },
    },
  },
}

export const NarrowScreens: Story = {
  args: defaultProps,
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} />',
      },
    },
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])

    return (
      <div style={{ width: 480, maxWidth: '100%', border: 'dashed 1px #929292' }}>
        <ActivityCalendar {...args} data={data} />
      </div>
    )
  },
}

export const ContainerRef: Story = {
  args: defaultProps,
  parameters: {
    docs: {
      source: {
        code: exampleRef,
      },
    },
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel])
    const calendarRef = useRef<HTMLElement>(null)

    useEffect(() => {
      // eslint-disable-next-line no-console
      console.log('calendar ref', calendarRef)
    }, [calendarRef])

    return (
      <>
        <ActivityCalendar {...args} data={data} ref={calendarRef} />
        <br />
        <p>Check the JavaScript console to see the ref logged.</p>
      </>
    )
  },
}

const Stack = ({ children }: { children: Array<ReactElement> }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>{children}</div>
)

const StackHeading = ({ children, code }: { children: string; code?: string }) => (
  <div
    role="heading"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16,
      fontSize: 16,
      fontWeight: 'bolder',
    }}
  >
    {children}
    {code && <code style={{ fontSize: 13, fontWeight: 'normal' }}>{code}</code>}
  </div>
)

const Source = ({
  code,
  isDarkMode,
  language = 'tsx',
}: {
  code: string
  isDarkMode: boolean
  language?: string
}) => {
  const [copied, setCopied] = useState(false)
  const theme = isDarkMode ? themes.dark : themes.light

  return (
    <div>
      <Highlight
        code={code.trim()}
        language={language}
        theme={isDarkMode ? prismThemes.vsDark : prismThemes.vsLight}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={Object.assign({}, style, {
              position: 'relative',
              margin: '1rem 0 1.5rem',
              padding: '1em',
              whiteSpace: 'pre-wrap',
              backgroundColor: isDarkMode ? theme.appBg : 'hsl(210,50%,99%)', // slightly lighter than theme.appBg
              border: `1px solid ${theme.appBorderColor}`,
              borderRadius: theme.appBorderRadius,
            })}
          >
            <button
              type="button"
              onClick={() => {
                void navigator.clipboard.writeText(code).then(() => {
                  setCopied(true)
                  setTimeout(() => {
                    setCopied(false)
                  }, 1500)
                })
              }}
              style={{
                position: 'absolute',
                bottom: -1,
                right: -1,
                padding: '4px 10px',
                backgroundColor: theme.buttonBg,
                border: `1px solid ${theme.appBorderColor}`,
                borderTopLeftRadius: theme.appBorderRadius,
                borderBottomRightRadius: theme.appBorderRadius,
                color: theme.textColor,
                fontWeight: 700,
                fontSize: 12,
                cursor: 'pointer',
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
