import { Tooltip as MuiTooltip } from '@mui/material';
import LinkTo from '@storybook/addon-links/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Highlight, themes as prismThemes } from 'prism-react-renderer';
import { type ForwardedRef, cloneElement, useMemo, useRef } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useDarkMode } from 'storybook-dark-mode';

import Container from '../../.storybook/components/Container';
import exampleCustomization from '../../examples/customization?raw';
import exampleEventHandlersInterface from '../../examples/event-handlers-type?raw';
import exampleEventHandlers from '../../examples/event-handlers?raw';
import exampleLabelsShape from '../../examples/labels-shape?raw';
import exampleLabels from '../../examples/labels?raw';
import exampleRef from '../../examples/ref?raw';
import exampleThemeExplicit from '../../examples/themes-explicit?raw';
import exampleTheme from '../../examples/themes?raw';
import exampleTooltipsMui from '../../examples/tooltips-mui?raw';
import exampleTooltipsReact from '../../examples/tooltips-react?raw';
import type { Theme } from '../types';
import { generateTestData } from '../utils/calendar';
import ActivityCalendar, { type Props } from './ActivityCalendar';

type Story = StoryObj<Props>;

/* eslint-disable react-hooks/rules-of-hooks */

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
    style: {
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
      args.colorScheme = useDarkMode() ? 'dark' : 'light';

      return <Story />;
    },
  ],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

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
} satisfies Omit<Props, 'data'>;

export default meta;
const explicitTheme: Theme = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['hsl(0, 0%, 22%)', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
};

export const Default: Story = {
  args: defaultProps,
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} />',
      },
    },
  },
};

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
};

export const ActivityLevels: Story = {
  args: {
    ...defaultProps,
    maxLevel: 2,
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);

    return (
      <Container>
        <ActivityCalendar
          {...args}
          theme={{ light: ['hsl(0, 0%, 92%)', '#980043'] }}
          data={data}
          style={{ marginBottom: '2rem' }}
        />

        <p>
          Use the{' '}
          <code>
            <b>maxLevel</b>
          </code>{' '}
          prop to control the number of activity levels. This value is zero indexed (0 represents no
          activity), so for example a <code>maxLevel</code> of 2 will total in 3 levels as above.
          Each activity level must be in the interval from 0 to <code>maxLevel</code>, which is 4
          per default.
        </p>
      </Container>
    );
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} maxLevel={2} loading />',
      },
    },
  },
};

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
    );

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
    );

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
    );

    return (
      <>
        <ActivityCalendar
          {...args}
          data={dataLong}
          labels={{
            totalCount: '{{count}} activities in 2022 & 2023',
          }}
        />
        <br />
        <br />
        <ActivityCalendar {...args} data={dataMedium} />
        <br />
        <br />
        <ActivityCalendar {...args} data={dataShort} />
      </>
    );
  },
};

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
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);

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
          Define each color scale{' '}
          <LinkTo kind="react-activity-calendar" name="explicit-theme">
            explicitly
          </LinkTo>{' '}
          by settings all colors (5 per default) or pass exactly two colors (the lowest and highest
          intensity) to calculate a single-hue scale. For explicit themes the color count must match
          the number of activity levels, which is controlled by the{' '}
          <LinkTo kind="react-activity-calendar" name="date-ranges">
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
    );
  },
};

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
    const data = useMemo(() => generateTestData({ maxLevel: 4 }), []);

    return (
      <Container>
        <h1>Explicit theme</h1>
        <p></p>
        <p>
          See the{' '}
          <LinkTo kind="react-activity-calendar" name="color-themes">
            WithTheme
          </LinkTo>{' '}
          story for details how to use the <code>theme</code> prop.
        </p>
        <ActivityCalendar {...args} data={data} style={{ marginTop: '2rem' }} />
      </Container>
    );
  },
};

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
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
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
};

export const EventHandlers: Story = {
  args: {
    ...defaultProps,
    eventHandlers: {
      onClick: () => activity => {
        alert(JSON.stringify(activity));
      },
      onMouseEnter: () => () => {
        console.log('on mouse enter');
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: exampleEventHandlers,
      },
    },
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);

    return (
      <Container>
        <h1>Event Handlers</h1>
        <p>
          You can register event handlers for the SVG <code>&lt;rect/&gt;</code> elements that are
          used to render the calendar days. This way you can control the behaviour on click, hover,
          etc. All event listeners have the following signature, so you can use the activity data of
          the block inside the handler:
        </p>
        <Source code={exampleEventHandlersInterface} isDarkMode={useDarkMode()} />
        <p>Click on any block below to see it in action:</p>
        <ActivityCalendar {...args} data={data} style={{ margin: '2rem 0' }} />
        <Source code={exampleEventHandlers} isDarkMode={useDarkMode()} />
      </Container>
    );
  },
};

export const Tooltips: Story = {
  args: defaultProps,
  parameters: {
    docs: {
      source: {
        code: exampleTooltipsReact,
      },
    },
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);

    return (
      <Container>
        <h1>Tooltip Examples</h1>
        <p>
          To add a 3rd party tooltip component to the calendar you can use the{' '}
          <code>renderBlock</code> prop.
        </p>
        <h2>
          <a href="https://mui.com/material-ui/react-tooltip/">Material UI</a>
        </h2>
        <p>
          In the simplest case, each block only needs to be wrapped with a{' '}
          <code>&lt;Tooltip/&gt;</code> component, as shown here for Material UI:
        </p>
        <Source code={exampleTooltipsMui} isDarkMode={useDarkMode()} />
        <ActivityCalendar
          {...args}
          data={data}
          renderBlock={(block, activity) => (
            <MuiTooltip title={`${activity.count} activities on ${activity.date}`}>
              {block}
            </MuiTooltip>
          )}
        />
        <p>
          Using the <code>renderLegendBlock</code> prop, you can additionally add tooltips to the
          color legend elements.
        </p>
        <ActivityCalendar
          {...args}
          data={data}
          hideColorLegend={false}
          renderLegendBlock={(block, legendElement) => (
            <MuiTooltip title={`Level: ${legendElement.level}`}>{block}</MuiTooltip>
          )}
        />
        <h2>
          <a href="https://github.com/ReactTooltip/react-tooltip">react-tooltip</a>
        </h2>
        <p>
          Some libraries, like <code>react-tooltip</code>, require that additional props are passed
          to the block elements. You can achieve this using the <code>React.cloneElement</code>{' '}
          function:
        </p>
        <Source code={exampleTooltipsReact} isDarkMode={useDarkMode()} />
        <ActivityCalendar
          {...args}
          data={data}
          renderBlock={(block, activity) =>
            cloneElement(block, {
              'data-tooltip-id': 'react-tooltip',
              'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
            })
          }
        />
        <ReactTooltip id="react-tooltip" />
      </Container>
    );
  },
};

export const WithoutLabels: Story = {
  args: {
    ...defaultProps,
    hideMonthLabels: true,
    hideColorLegend: true,
    hideTotalCount: true,
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} hideMonthLabels hideColorLegend hideTotalCount />',
      },
    },
  },
};

export const WeekdayLabels: Story = {
  args: {
    ...defaultProps,
    showWeekdayLabels: true,
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} showWeekdayLabels />',
      },
    },
  },
};

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
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);

    return (
      <Container>
        <h1>Localization</h1>
        <p>(Example in German)</p>
        <ActivityCalendar {...args} data={data} style={{ margin: '2rem 0' }} />
        <Source code={exampleLabelsShape} isDarkMode={useDarkMode()} />
      </Container>
    );
  },
};

export const MondayAsWeekStart: Story = {
  args: {
    ...defaultProps,
    weekStart: 1,
  },
  render: args => {
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);
    return <ActivityCalendar {...args} data={data} />;
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} weekStart={1} />',
      },
    },
  },
};

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
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);

    return (
      <div style={{ width: 480, maxWidth: '100%', border: 'dashed 1px #929292' }}>
        <ActivityCalendar {...args} data={data} />
      </div>
    );
  },
};

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
    const data = useMemo(() => generateTestData({ maxLevel: args.maxLevel }), [args.maxLevel]);
    const calendarRef = useRef<HTMLElement>(null);
    console.log('calendar ref', calendarRef);

    return (
      <>
        <ActivityCalendar {...args} data={data} ref={calendarRef} />
        <br />
        <p>Check the JavaScript console to see the ref logged.</p>
      </>
    );
  },
};

const Source = ({
  code,
  isDarkMode,
  language = 'tsx',
}: {
  code: string;
  isDarkMode: boolean;
  language?: string;
}) => {
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
              margin: '1rem 0 2rem',
              backgroundColor: 'transparent',
              whiteSpace: 'pre-wrap',
            })}
          >
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
  );
};
