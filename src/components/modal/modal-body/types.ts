import { HTMLProps } from 'react';

export interface ModalBodyProps extends HTMLProps<HTMLDivElement> {
  enableBackdropClose?: boolean;
}
