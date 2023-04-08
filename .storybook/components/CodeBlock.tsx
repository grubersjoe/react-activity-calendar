import { CSSProperties, FunctionComponent } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useDarkMode } from 'storybook-dark-mode';

type Props = {
  children: string;
  style?: CSSProperties;
};

const CodeBlock: FunctionComponent<Props> = ({ children }) => {
  const isDark = useDarkMode();

  return (
    <SyntaxHighlighter
      language="typescript"
      customStyle={{
        margin: '2rem 0',
        borderRadius: 3,
        ...(isDark && { background: '#222425' }),
      }}
      codeTagProps={{ className: 'syntax-highlighter' }}
      style={isDark ? oneDark : oneLight}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
