<ActivityCalendar
  data={data}
  tooltips={{
    activity: {
      text: ({level, date}) => `${level} activities on ${new Date(date).toLocaleDateString('en-US')}`
    },
    colorLegend: {
      text: level => `Activity level ${level + 1}`
    },
  }}
/>
