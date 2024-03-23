'use client';

import { useEffect, useState } from 'react';

export function useDataTheme() {
  const [dataTheme, setDataTheme] = useState<'light' | 'dark' | null>(null);

  const onChange = (mutationList: Array<MutationRecord>) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        const theme = (mutation.target as HTMLElement).getAttribute('data-theme');

        switch (theme) {
          case 'dark':
            setDataTheme('dark');
            break;
          case 'light':
            setDataTheme('light');
            break;
          default:
            setDataTheme(null);
            break;
        }
      }
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(onChange);

    observer.observe(window.document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return dataTheme;
}
