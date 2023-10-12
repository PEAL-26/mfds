import { HTMLProps, ReactNode } from 'react';

export interface ModalRootProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  open: boolean;
  onClose?(state: boolean): void;
}
