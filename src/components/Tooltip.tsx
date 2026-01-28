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
  type OffsetOptions,
  type Placement,
  type UseHoverProps,
  type UseTransitionStylesProps,
} from '@floating-ui/react'
import { getClassName } from '../lib/calendar'
import type { ColorScheme } from '../types'

export type TooltipConfig = {
  placement?: Placement
  offset?: OffsetOptions
  transitionStyles?: UseTransitionStylesProps
  hoverRestMs?: UseHoverProps['restMs']
  withArrow?: boolean
}

export type TooltipProps = TooltipConfig & {
  children: ReactElement<{ ref: Ref<unknown> }>
  text: string
  colorScheme: ColorScheme
}

export function Tooltip({
  children,
  text,
  colorScheme,
  placement,
  offset: offsetProp = 4,
  transitionStyles: transitionStylesProp,
  hoverRestMs = 150,
  withArrow = false,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)

  const { context, refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      flip(),
      offset(offsetProp),
      shift({ padding: 8 }),
      withArrow ? arrow({ element: arrowRef }) : null, // eslint-disable-line react-hooks/refs
    ],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, { restMs: hoverRestMs })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, dismiss, role])
  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, transitionStylesProp)

  return (
    <>
      {cloneElement(children, { ref: refs.setReference, ...getReferenceProps() })}
      {isMounted && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            className={getClassName('tooltip')}
            style={{ ...floatingStyles, ...transitionStyles }}
            data-color-scheme={colorScheme}
            {...getFloatingProps()}
          >
            {text}
            {withArrow && (
              <FloatingArrow
                ref={arrowRef}
                context={context}
                className={getClassName('tooltip-arrow')}
              />
            )}
          </div>
        </FloatingPortal>
      )}
    </>
  )
}
