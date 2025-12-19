import { useEffect, useState } from 'react'
import type { ColorScheme } from '../types'

export function useColorScheme() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const [colorScheme, setColorScheme] = useState<ColorScheme>(mediaQuery.matches ? 'dark' : 'light')

  const onChange = (event: MediaQueryListEvent) => {
    setColorScheme(event.matches ? 'dark' : 'light')
  }

  useEffect(() => {
    mediaQuery.addEventListener('change', onChange)

    return () => {
      mediaQuery.removeEventListener('change', onChange)
    }
  }, [mediaQuery])

  return colorScheme
}
