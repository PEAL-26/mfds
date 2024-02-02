import { HTMLProps } from 'react';

export interface ModalHeaderProps extends HTMLProps<HTMLDivElement> {
  title?: string;
  titleClassName?:string
}
