import { useState } from 'react'
import { Highlight, themes as prismThemes } from 'prism-react-renderer'
import { themes } from 'storybook/theming'

export const Source = ({
  code,
  isDarkMode,
  language = 'tsx',
}: {
  code: string
  isDarkMode: boolean
  language?: string
}) => {
  const [copied, setCopied] = useState(false)
  const theme = isDarkMode ? themes.dark : themes.light

  return (
    <div>
      <Highlight
        code={code.trim()}
        language={language}
        theme={isDarkMode ? prismThemes.vsDark : prismThemes.vsLight}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={Object.assign({}, style, {
              position: 'relative',
              margin: '1rem 0 1.5rem',
              padding: '1em',
              whiteSpace: 'pre-wrap',
              backgroundColor: isDarkMode ? theme.appBg : 'hsl(210,50%,99%)', // slightly lighter than theme.appBg
              border: `1px solid ${theme.appBorderColor}`,
              borderRadius: theme.appBorderRadius,
            })}
          >
            <button
              type="button"
              onClick={() => {
                void navigator.clipboard.writeText(code).then(() => {
                  setCopied(true)
                  setTimeout(() => {
                    setCopied(false)
                  }, 1500)
                })
              }}
              style={{
                position: 'absolute',
                bottom: -1,
                right: -1,
                padding: '4px 10px',
                backgroundColor: theme.buttonBg,
                border: `1px solid ${theme.appBorderColor}`,
                borderTopLeftRadius: theme.appBorderRadius,
                borderBottomRightRadius: theme.appBorderRadius,
                color: theme.textColor,
                fontWeight: 700,
                fontSize: 12,
                cursor: 'pointer',
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
