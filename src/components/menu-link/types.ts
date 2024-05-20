import { ElementType, ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';
import { LinkProps } from '../link';

export interface MenuLinkProps extends Partial<LinkProps> {
  children?: ReactNode;
  type?: 'link' | 'button';
  title?: string;
  href?: string;
  onClick?(): void;
  icon?: ElementType<IconBaseProps>;
  className?: string;
  sizeIcon?: number;
}
