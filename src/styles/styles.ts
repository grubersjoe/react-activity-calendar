import type { CSSProperties } from 'react'
import type { ColorScheme } from '../types'

export const styles = {
  container: (fontSize: number) =>
    ({
      width: 'max-content', // Calendar should not grow
      maxWidth: '100%', // Do not remove - parent might be a flexbox
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontSize: `${fontSize}px`,
    }) satisfies CSSProperties,
  scrollContainer: (fontSize: number) =>
    ({
      maxWidth: '100%',
      overflowX: 'auto',
      overflowY: 'hidden',
      paddingTop: Math.ceil(0.1 * fontSize), // SVG <text> overflows in Firefox at y=0
    }) satisfies CSSProperties,
  calendar: {
    display: 'block', // SVGs are inline-block by default
    overflow: 'visible', // Weekday labels are rendered left of the container
  } satisfies CSSProperties,
  rect: (colorScheme: ColorScheme) =>
    ({
      stroke: colorScheme === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.04)',
    }) satisfies CSSProperties,
  footer: {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 16px',
      whiteSpace: 'nowrap',
    } satisfies CSSProperties,
    legend: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
    } satisfies CSSProperties,
  },
}
