// @ts-nocheck
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

<ActivityCalendar
  data={data}
  renderBlock={(block, activity) =>
    React.cloneElement(block, {
      'data-tooltip-id': 'react-tooltip',
      'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
    })
  }
/>

<ReactTooltip id="react-tooltip" />
