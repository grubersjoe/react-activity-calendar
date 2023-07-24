// @ts-nocheck
type EventHandler = (event: React.SyntheticEvent) => (activity: Activity) => void;

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}
