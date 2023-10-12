import { ElementType, HTMLProps, ReactNode, SVGProps } from 'react';
import { IconBaseProps } from 'react-icons';

export interface CollapsibleProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export interface CollapsibleIconProps extends IconBaseProps {
  icon: ElementType<SVGProps<HTMLOrSVGElement>>;
}

export interface CollapsibleHeaderProps {
  children?: ReactNode;
  title?: string;
  className?: string;
  classNameIcon?: string;
  showArrowIcon?: boolean;
  block?: boolean;
}

export interface CollapsibleBodyProps extends HTMLProps<HTMLDivElement> {
  open?: boolean;
}
