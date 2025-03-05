import { SyntheticEvent } from 'react'

type EventHandler = (event: SyntheticEvent) => (activity: Activity) => void

interface Activity {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}
