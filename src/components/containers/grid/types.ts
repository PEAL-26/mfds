import { HTMLProps } from 'react';

export interface GridProps extends Omit<HTMLProps<HTMLDivElement>, 'cols'> {
  cols?: string;
}
