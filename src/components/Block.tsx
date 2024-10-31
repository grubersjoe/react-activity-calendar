'use client'

import { type Dispatch, type ReactElement, type SetStateAction, type SVGProps } from 'react'
import type { Placement } from '@floating-ui/react-dom'
import { createPortal } from 'react-dom'
import { useFloating } from '../hooks/useFloating'
import { getClassName } from '../lib/calendar'
import type { BlockElement, ColorScheme } from '../types'

export type Props = {
  id: string
  colorScheme: ColorScheme
  renderBlock?: (block: BlockElement) => ReactElement
  tooltip?: {
    content: string
    placement?: Placement
    activeId: string | null
    setActiveId: Dispatch<SetStateAction<string | null>>
  }
} & SVGProps<SVGRectElement>

export function Block({ id, colorScheme, tooltip, renderBlock, ...props }: Props) {
  const floating = useFloating(tooltip?.placement)

  if (floating.open && id !== tooltip?.activeId) {
    floating.setOpen(false)
  }

  const block = (
    <rect
      {...props}
      {...(tooltip && {
        ref: floating.refs.setReference,
        onMouseEnter: () => {
          tooltip.setActiveId(id)
          floating.setOpen(true)
        },
      })}
    />
  )

  return (
    <>
      {renderBlock ? renderBlock(block) : block}
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
  )
}
