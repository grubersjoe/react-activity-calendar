import { CSSProperties, FunctionComponent } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  children: string;
  style?: CSSProperties;
};

const CodeBlock: FunctionComponent<Props> = ({ children }) => (
  <SyntaxHighlighter
    language="typescript"
    customStyle={{ margin: '2rem 0', borderRadius: 3 }}
    codeTagProps={{ className: 'syntax-highlighter' }}
    style={tomorrow}
  >
    {children}
  </SyntaxHighlighter>
);

export default CodeBlock;
