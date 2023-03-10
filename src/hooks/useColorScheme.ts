import { useCallback, useEffect, useState } from 'react';

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  const onChange = useCallback(
    (event: MediaQueryListEvent) => setColorScheme(event.matches ? 'dark' : 'light'),
    [],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', onChange);

    setColorScheme(mediaQuery.matches ? 'dark' : 'light');

    return () => mediaQuery.removeEventListener('change', onChange);
  }, [onChange]);

  return colorScheme;
}
