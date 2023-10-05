'use client';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { SlArrowDown, SlArrowUp } from '../../../libs/react-icon';

import { CollapsibleIcon } from './collapsible-icon';
import { CollapsibleHeaderProps } from './types';

export function CollapsibleHeader(props: CollapsibleHeaderProps) {
  const { children, title, className, classNameIcon, showArrowIcon = true, block = false } = props;

  const collapsibleHeaderRef = useRef<HTMLHeadingElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = (e: MouseEvent) => {
    if (block) return;

    const noCollapsible = collapsibleHeaderRef.current?.querySelectorAll('.no-collapsible');

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
    const parent = collapsibleHeaderRef.current?.parentNode;
    const body = parent?.querySelector('[data-collapsible-body]');

    if (isOpen) {
      body?.setAttribute('aria-expanded', 'true');
      body?.setAttribute('data-open', 'true');
    } else {
      body?.setAttribute('aria-expanded', 'false');
      body?.setAttribute('data-open', 'false');
    }
  }, [isOpen]);

  useEffect(() => {
    if (block) {
      setIsOpen(true);
      return;
    }

    const parent = collapsibleHeaderRef.current?.parentNode;
    const body = parent?.querySelector('[data-collapsible-body]');
    const state = body?.getAttribute('data-open');

    if (state === 'true') setIsOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h2 ref={collapsibleHeaderRef}>
      <button
        type="button"
        onClick={toggleCollapsible}
        data-block={block}
        className={twMerge(
          'flex w-full items-center justify-between rounded-t-md bg-gray-light/50 p-3 text-xl font-bold text-black data-[block=false]:cursor-pointer data-[block=true]:cursor-default',
          className,
        )}
      >
        {title && <span>{title}</span>}
        <div className="flex-1">{children}</div>
        {showArrowIcon && <CollapsibleIcon icon={icon} size={20} className={classNameIcon} />}
      </button>
    </h2>
  );
}
