'use client';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { CollapsibleBodyProps } from './types';

export function CollapsibleBody(props: CollapsibleBodyProps) {
  const { children, className, block = false, open = false } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div
      data-open={block ? true : isOpen}
      aria-expanded={block ? true : isOpen}
      data-collapsible-body
      data-block={block}
      className={twMerge('p-3 data-[open=true]:block data-[open=false]:hidden', className)}
    >
      {children}
    </div>
  );
}
