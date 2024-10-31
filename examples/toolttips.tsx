// @ts-nocheck
<ActivityCalendar
  data={data}
  tooltips={{
    block: activity => `${activity.level} activities on ${activity.date}`,
    colorLegend: level => `Activity level ${level + 1}`,
  }}
/>
