import { HTMLProps } from 'react';

export interface GroupProps extends HTMLProps<HTMLDivElement> {
  type?: 'col' | 'row';
}
