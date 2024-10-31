<ActivityCalendar
  data={data}
  tooltips={{
    activity: {
      text: activity => `${activity.level} activities on ${activity.date}`,
      placement: 'right',
      withArrow: true,
    },
  }}
/>
