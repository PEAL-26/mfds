import { ElementType, SVGProps } from 'react';
import { IconBaseProps } from 'react-icons';

export interface IconProps extends IconBaseProps {
  icon: ElementType<SVGProps<HTMLOrSVGElement>>;
}
