import { ElementType } from 'react';

export interface KeyboardButtonProps {
  value?: string;
  className?: string;
  icon?: ElementType;
  onClick?(): void;
}
