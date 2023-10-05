'use client';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { CollapsibleBodyProps } from './types';

export function CollapsibleBody(props: CollapsibleBodyProps) {
  const { children, className, open = false } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div
      data-open={isOpen}
      aria-expanded={isOpen}
      data-collapsible-body
      className={twMerge('p-3 data-[open=true]:block data-[open=false]:hidden', className)}
    >
      {children}
    </div>
  );
}
