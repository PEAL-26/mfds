'use client';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { SlArrowDown, SlArrowUp } from '../../libs/react-icon';

import { CollapsibleIcon } from './collapsible-icon';
import { CollapsibleHeaderContainerProps } from './types';

export function CollapsibleHeaderContainer(props: CollapsibleHeaderContainerProps) {
  const { children, showArrowIcon, classNameIcon, className } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [block, setBlock] = useState(false);

  const toggleCollapsible = (e: MouseEvent) => {
    if (block) return;

    const noCollapsible = buttonRef.current?.querySelectorAll('.no-collapsible');

    const isClickInsideNoCollapsible = () => {
      if (!noCollapsible) return false;

      for (const element of Array.from(noCollapsible)) {
        if (element.contains(e.target as Node)) {
          return true;
        }
      }

      return false;
    };

    if (!isClickInsideNoCollapsible()) setIsOpen(!isOpen);
  };

  const icon = {
    open: SlArrowUp,
    close: SlArrowDown,
  }[isOpen ? 'open' : 'close'];

  useEffect(() => {
    const h2 = buttonRef.current?.closest('h2');
    const parent = h2?.parentNode;
    const body = parent?.querySelector('[data-collapsible-body]');

    if (!h2 || !parent || !body) {
      return;
    }

    const blockState = body.getAttribute('data-block') === 'true';

    if (blockState) {
      setBlock(true);
      setIsOpen(true);
    } else {
      body.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      body.setAttribute('data-open', isOpen ? 'true' : 'false');
    }
  }, [isOpen]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleCollapsible}
      data-block={block}
      className={twMerge(
        'flex w-full items-center justify-between rounded-t-md bg-gray-light/50 p-3 text-xl font-bold text-black data-[block=false]:cursor-pointer data-[block=true]:cursor-default',
        className,
      )}
    >
      {children}
      {showArrowIcon && <CollapsibleIcon icon={icon} size={20} className={classNameIcon} />}
    </button>
  );
}
