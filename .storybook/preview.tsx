import { useEffect, useState } from 'react'
import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks'
import type { Preview } from '@storybook/react-vite'
import { DARK_MODE_EVENT_NAME } from '@vueless/storybook-dark-mode'
import { themes, type ThemeVarsPartial } from 'storybook/theming'
import './storybook.scss'

const baseTheme = {
  base: 'light',
  brandTitle: 'React Activity Calendar',
  brandUrl: 'https://github.com/grubersjoe/react-activity-calendar',
} satisfies ThemeVarsPartial

const themeOverride = {
  fontBase: 'ui-sans-serif, sans-serif',
  fontCode: 'ui-monospace, monospace',
} satisfies Omit<ThemeVarsPartial, 'base'>

// This component is a workaround for the dark mode addon not being available on
// docs pages: https://github.com/hipstersmoothie/storybook-dark-mode/issues/282
const Container = (props: DocsContainerProps) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useState(prefersDark ? themes.dark : themes.light)

  useEffect(() => {
    const listener = (isDark: boolean) => {
      setTheme(isDark ? themes.dark : themes.light)
    }

    props.context.channel.on(DARK_MODE_EVENT_NAME, listener)

    return () => {
      props.context.channel.removeListener(DARK_MODE_EVENT_NAME, listener)
    }
  }, [props.context.channel])

  return (
    <DocsContainer
      {...props}
      theme={{
        ...baseTheme,
        ...theme,
        ...themeOverride,
      }}
    />
  )
}

export const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
      codePanel: true,
      container: Container,
      source: {
        language: 'tsx',
      },
    },
    darkMode: {
      stylePreview: true,
      dark: { ...baseTheme, ...themes.dark, ...themeOverride },
      light: { ...baseTheme, ...themes.light, ...themeOverride },
    },
  },
}

export default preview
