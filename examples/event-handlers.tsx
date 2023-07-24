// @ts-nocheck
<ActivityCalendar
  data={data}
  eventHandlers={{
    onClick: (event) => (activity) => {
      alert(JSON.stringify(activity));
    },
    onMouseEnter: (event) => (activity) => {
      console.log('on mouse enter');
    },
  }}
/>
