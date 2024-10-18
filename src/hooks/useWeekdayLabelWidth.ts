import { useEffect, useState } from 'react';
import type { DayIndex, WeekdayLabels } from '../types';

export function useWeekdayLabelWidth(
  labels: string[],
  showWeekdayLabel: WeekdayLabels,
  fontSize: number,
): number {
  return labels.reduce((maxWidth, label, index) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const width = Math.ceil(useTextDimensions(label, fontSize).width);
    return showWeekdayLabel.byDayIndex(index as DayIndex) ? Math.max(width, maxWidth) : maxWidth;
  }, 0);
}

function useTextDimensions(text: string, fontSize: number) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (fontSize < 1) {
      throw new RangeError('fontSize must be positive');
    }

    if (text.length === 0) {
      return;
    }

    const namespace = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(namespace, 'svg');

    svg.style.position = 'absolute';
    svg.style.visibility = 'hidden';
    svg.style.fontFamily = window.getComputedStyle(document.body).fontFamily;
    svg.style.fontSize = `${fontSize}px`;

    const textNode = document.createElementNS(namespace, 'text');
    textNode.textContent = text;

    svg.appendChild(textNode);
    document.body.appendChild(svg);
    setDimensions(textNode.getBBox());

    return () => {
      try {
        document.body.removeChild(svg);
      } catch {
        // ignore
      }
    };
  }, [fontSize, text]);

  return dimensions;
}
