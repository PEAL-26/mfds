'use client';
import TippyJs from '@tippyjs/react';
import { PopoverProps } from './types';

export function Popover(props: PopoverProps) {
  const { children, ...rest } = props;

  return <TippyJs {...rest}>{children}</TippyJs>;
}

export * from './popover-help';
export * from './types';
