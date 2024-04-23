import { InputTextProps } from '../input-text';

export interface InputWithBadgeProps extends InputTextProps {
  badge: string;
  badgeAlign?: 'left' | 'right';
  badgeMinWidth?: number;
  containerClassName?: string;
  labelClassName?: string;
}
