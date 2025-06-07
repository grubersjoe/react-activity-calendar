<ActivityCalendar
  data={data}
  tooltips={{
    activity: {
      text: activity => `${activity.level} activities on ${activity.date}`
    },
    colorLegend: {
      text: level => `Activity level ${level + 1}`
    },
  }}
/>
