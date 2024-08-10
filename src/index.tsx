import { useEffect, useState } from 'react';

import Calendar, { type Props, Skeleton } from './component/ActivityCalendar';

function ActivityCalendar(props: Props) {
  // This component relies on various client hooks,
  // so it cannot be rendered on the server.
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient ? <Calendar {...props} /> : null;
}

export { Skeleton };
export default ActivityCalendar;
