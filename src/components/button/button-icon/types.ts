import { ElementType, SVGAttributes, SVGProps } from 'react';
import { IconBaseProps } from 'react-icons';

export interface ButtonIconProps extends SVGAttributes<SVGElement> {
  icon: ElementType<IconBaseProps>;
  size?: number;
}
