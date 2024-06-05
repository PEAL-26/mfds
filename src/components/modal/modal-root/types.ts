import { HTMLProps, ReactNode } from 'react';

export interface ModalRootProps extends Omit<HTMLProps<HTMLDivElement>, 'className'> {
  children: ReactNode;
  open: boolean;
  onClose?(state: boolean): void;
  enableBackdropClose?: boolean;
  blockClosing?: boolean;
  containerClassName?: string;
  contentClassName?: string;
}
