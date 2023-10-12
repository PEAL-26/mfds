import { ReactNode } from 'react';

export type AlertTypes = 'warn' | 'error' | 'success' | 'info';

export interface AlertProps {
  children: ReactNode;
  show?: boolean;
  type: AlertTypes;
  onHide?(): void;
}

export interface AlertIconProps {
  type: AlertTypes;
}
