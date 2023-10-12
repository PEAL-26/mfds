import { Props } from 'react-select';

export interface SelectProps extends Props {}

export interface SelectBadgeProps extends Props {
  badge: string;
  badgeAlign?: 'left' | 'right';
}

export interface SelectLabelProps extends Props {
  label: string;
}
