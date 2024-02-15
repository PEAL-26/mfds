import { Props } from 'react-select';

export interface SelectProps extends Props {
  error?: string;
  containerClassName?: string;
}

export interface SelectBadgeProps extends Props {
  badge: string;
  badgeAlign?: 'left' | 'right';
  error?: string;
  containerClassName?: string;
}

export interface SelectLabelProps extends Props {
  label: string;
  error?: string;
  containerClassName?: string;
}
