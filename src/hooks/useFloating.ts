import { useState } from 'react';
import {
  autoUpdate,
  offset,
  shift,
  useFloating as useFloatingLib,
  type Placement,
} from '@floating-ui/react-dom';

export function useFloating(placement: Placement = 'top') {
  const [open, setOpen] = useState(false);

  const floating = useFloatingLib({
    open,
    placement,
    middleware: [offset(4), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  return { open, setOpen, ...floating };
}
