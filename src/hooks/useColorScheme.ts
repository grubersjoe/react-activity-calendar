import { useEffect, useState } from 'react'
import type { ColorScheme } from '../types'

const query = '(prefers-color-scheme: dark)'

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() =>
    typeof window === 'undefined' ? 'light' : window.matchMedia(query).matches ? 'dark' : 'light',
  )

  const onChange = (event: MediaQueryListEvent) => {
    setColorScheme(event.matches ? 'dark' : 'light')
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setColorScheme(mediaQuery.matches ? 'dark' : 'light')

    mediaQuery.addEventListener('change', onChange)

    return () => {
      mediaQuery.removeEventListener('change', onChange)
    }
  }, [])

  return colorScheme
}
