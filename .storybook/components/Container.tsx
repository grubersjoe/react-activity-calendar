import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div style={{ margin: '1rem 0 2rem' }}>{children}</div>;
};

export default Container;
