import { ElementType } from 'react';
import { IconBaseProps } from 'react-icons';
import { InputTextProps } from '../input-text';

export type IconType = ElementType<IconBaseProps>;

export interface InputWithIconProps extends InputTextProps {
  icon?: IconType;
}

export interface InputIconProps {
  icon: IconType;
}
