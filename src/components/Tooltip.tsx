'use client'

import { cloneElement, useRef, useState, type ReactElement, type Ref } from 'react'
import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles,
  type Placement,
} from '@floating-ui/react'
import { getClassName } from '../lib/calendar'
import type { ColorScheme } from '../types'

export type Props = {
  children: ReactElement<{ ref: Ref<unknown> }>
  text: string
  placement: Placement
  withArrow?: boolean
  colorScheme: ColorScheme
}

export function Tooltip({ children, text, placement, withArrow, colorScheme }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)

  const { context, refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      flip(),
      offset(4),
      shift({ padding: 8 }),
      withArrow ? arrow({ element: arrowRef }) : null,
    ],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, dismiss, role])
  const { isMounted, styles: transitionStyles } = useTransitionStyles(context)

  return (
    <>
      {cloneElement(children, { ref: refs.setReference, ...getReferenceProps() })}
      {
        <FloatingPortal>
          {isMounted && (
            <div
              ref={refs.setFloating}
              className={getClassName('tooltip')}
              style={{ ...floatingStyles, ...transitionStyles }}
              data-color-scheme={colorScheme}
              {...getFloatingProps()}
            >
              {text}
              {withArrow && <FloatingArrow ref={arrowRef} context={context} />}
            </div>
          )}
        </FloatingPortal>
      }
    </>
  )
}
