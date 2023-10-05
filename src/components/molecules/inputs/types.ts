import { ElementType, HTMLProps, ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';

import { LabelProps } from '../../atoms/label';
import { TextInputProps } from '../../atoms/text-input';

export interface InputRootProps {
  children?: ReactNode;
  className?: string;
}

export interface InputTextProps extends TextInputProps {
  icon?: ElementType<IconBaseProps>;
}

export interface InputTextBadgeProps extends TextInputProps {
  badge: string;
  badgeAlign?: 'left' | 'right';
}

export type InputIconType = {
  icon: ElementType<IconBaseProps>;
};

export interface InputTextLabelProps extends TextInputProps {
  label: string;
}

export interface InputLabelProps extends LabelProps {
  text: string;
}

export interface InputMessageContainerProps extends HTMLProps<HTMLDivElement> {}

export interface InputMessageProps {
  type?: 'error' | 'info' | 'warn';
  text?: string;
}
