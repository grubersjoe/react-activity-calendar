import { useEffect, useState } from 'react'
import { NAMESPACE } from '../constants'
import type { ColorScheme } from '../types'

export const loadingAnimationName = `${NAMESPACE}--loading-animation`

export function useLoadingAnimation(zeroColor: string, colorScheme: ColorScheme) {
  const [injected, setInjected] = useState(false)

  useEffect(() => {
    const colorLoading = `oklab(from ${zeroColor} l a b)`
    const colorActive =
      colorScheme === 'light'
        ? `oklab(from ${zeroColor} calc(l * 0.96) a b)`
        : `oklab(from ${zeroColor} calc(l * 1.08) a b)`

    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes ${loadingAnimationName} {
        0% {
          fill: ${colorLoading};
        }
        50% {
          fill: ${colorActive};
        }
        100% {
          fill: ${colorLoading};
        }
      }
    `
    document.head.appendChild(style)

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInjected(true)

    return () => {
      document.head.removeChild(style)
      setInjected(false)
    }
  }, [zeroColor, colorScheme])

  return injected
}
