import { useEffect, useState } from 'react'

const query = '(prefers-reduced-motion: reduce)'

export function usePrefersReducedMotion() {
  const mediaQuery = window.matchMedia(query)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(mediaQuery.matches)

  useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', onChange)

    return () => {
      mediaQuery.removeEventListener('change', onChange)
    }
  }, [mediaQuery])

  return prefersReducedMotion
}
