import { ButtonProps } from '../../../components/atoms/button/types';
import { ElementType, SVGAttributes } from 'react';

export interface ButtonElementProps extends ButtonProps {}

export interface ButtonIconProps extends SVGAttributes<SVGElement> {
  icon: ElementType;
  size?: number;
}
