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
  classNameContainer?: string;
  showArrowIcon?: boolean;
  onClick?(): void;
}

export interface CollapsibleBodyProps extends HTMLProps<HTMLDivElement> {
  open?: boolean;
  block?: boolean;
}

export interface CollapsibleHeaderContainerProps extends HTMLProps<HTMLInputElement> {
  classNameIcon?: string;
  showArrowIcon?: boolean;
  onClick?(): void;
}
