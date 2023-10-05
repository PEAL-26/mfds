import { TippyProps as TippyJsProps } from '@tippyjs/react';
import { HTMLAttributes, ReactNode } from 'react';
// import { Placement } from 'tippy.js';

export interface DropdownExpansibleAreaProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  formatting?: 'default' | 'none';
}

export interface DropdownProps extends Omit<TippyJsProps, 'children'> {
  children?: ReactNode;
  className?: string;
  minElementWidth?: boolean;
}
