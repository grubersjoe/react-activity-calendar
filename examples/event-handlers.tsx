import { cloneElement } from 'react'

<ActivityCalendar
  data={data}
  renderBlock: (block, activity) =>
    cloneElement(block, {
      onClick: () => {
        alert(JSON.stringify(activity))
      },
      onMouseEnter: () => {
        console.log('on mouse enter')
      },
    })
/>
