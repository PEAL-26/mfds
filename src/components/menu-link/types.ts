import { ElementType, ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';

export interface MenuLinkProps {
  children?: ReactNode;
  title?: string;
  href?: string;
  onClick?(): void;
  icon?: ElementType<IconBaseProps>;
  className?: string;
  sizeIcon?: number;
}
