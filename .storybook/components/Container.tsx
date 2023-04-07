import { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Container: FunctionComponent<Props> = ({ children }) => {
  return <div style={{ margin: '1rem 0 2rem' }}>{children}</div>;
};

export default Container;
