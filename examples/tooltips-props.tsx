<ActivityCalendar
  data={data}
  tooltips={{
    activity: {
      text: activity => `${activity.level} activities on ${activity.date}`,
      placement: 'right',
      offset: 6,
      restMs: 300,
      transitionStyles: {
        duration: 100,
        common: { fontFamily: 'monospace' },
      },
      withArrow: true,
    },
  }}
/>
