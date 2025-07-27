<ActivityCalendar
  data={data}
  tooltips={{
    activity: {
      text: activity => `${activity.count} activities on ${activity.date}`
    },
    colorLegend: {
      text: level => `Activity level ${level + 1}`
    },
  }}
/>
