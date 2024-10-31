'use client';

import { type Dispatch, type SetStateAction, type SVGProps } from 'react';
import type { Placement } from '@floating-ui/react-dom';
import { createPortal } from 'react-dom';
import { useFloating } from '../hooks/useFloating';
import { getClassName } from '../lib/calendar';
import type { ColorScheme, SVGRectEventHandler } from '../types';

interface Props extends SVGProps<SVGRectElement> {
  id: string;
  colorScheme: ColorScheme;
  eventHandlers?: SVGRectEventHandler;
  tooltip?: {
    content: string;
    placement?: Placement;
    activeId: string | null;
    setActiveId: Dispatch<SetStateAction<string | null>>;
  };
}

export function Block({ id, colorScheme, eventHandlers, tooltip, ...props }: Props) {
  const floating = useFloating(tooltip?.placement);

  if (floating.open && id !== tooltip?.activeId) {
    floating.setOpen(false);
  }

  return (
    <>
      <rect
        {...eventHandlers}
        {...props}
        {...(tooltip && {
          ref: floating.refs.setReference,
          onMouseEnter: event => {
            eventHandlers?.onMouseEnter?.(event);
            tooltip.setActiveId(id);
            floating.setOpen(true);
          },
        })}
      />
      {tooltip &&
        floating.open &&
        createPortal(
          <div
            role="tooltip"
            ref={floating.refs.setFloating}
            className={getClassName('tooltip')}
            data-color-scheme={colorScheme}
            style={{
              ...floating.floatingStyles,
            }}
          >
            {tooltip.content}
          </div>,
          document.body,
        )}
    </>
  );
}
