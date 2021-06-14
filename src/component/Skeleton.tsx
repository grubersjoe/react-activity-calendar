import React, { CSSProperties } from 'react';
import styles from './styles.css';
import { DEFAULT_THEME } from '../constants';

interface Props {
  width: number;
  height: number;
}

function getWrapperStyles({ width, height }: Props): CSSProperties {
  return {
    position: 'relative',
    overflow: 'hidden',
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: DEFAULT_THEME.level0,
  };
}

function getLoadingStyles(): CSSProperties {
  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
    animation: `${styles.loadingAnimation} 1.5s infinite ease-in-out`,
  };
}

const Skeleton: React.FC<Props> = props => (
  <div style={getWrapperStyles(props)}>
    <div style={getLoadingStyles()} className={styles.loadingAnimation} />
  </div>
);

export default Skeleton;
