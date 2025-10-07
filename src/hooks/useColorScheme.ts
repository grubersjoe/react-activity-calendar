import { useEffect, useState } from 'react'

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light')

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
