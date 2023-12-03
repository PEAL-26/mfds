import { LinkProps as LinkPropsNest } from 'next/link';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export interface LinkProps extends LinkPropsNest {
  href: string;
  title?: string;
  className?: string;
  children?: ReactNode;
  target?: HTMLAttributeAnchorTarget;
}
