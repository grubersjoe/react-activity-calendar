<ActivityCalendar
  data={data}
  tooltips={{
    activity: {
      text: ({level, date}) =>
        `${level} activities on ${new Date(date).toLocaleDateString('en-US')}`,
      placement: 'right',
      offset: 6,
      hoverRestMs: 300,
      transitionStyles: {
        duration: 100,
        common: { fontFamily: 'monospace' },
      },
      withArrow: true,
    },
  }}
/>
