import { useEffect, useState } from 'react'
import type { ColorScheme } from '../types'

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')

  const onChange = (event: MediaQueryListEvent) => {
    setColorScheme(event.matches ? 'dark' : 'light')
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setColorScheme(mediaQuery.matches ? 'dark' : 'light')

    mediaQuery.addEventListener('change', onChange)

    return () => {
      mediaQuery.removeEventListener('change', onChange)
    }
  }, [])

  return colorScheme
}
