import { MouseEvent } from 'react';

export type Tab = 'day' | 'month' | 'year';

export type onNavClickType = (
  e: MouseEvent<HTMLElement>,
  direction: 'next' | 'prev',
  dateElement: Tab,
) => void;

export type ChangeSelectionTabType = (e: MouseEvent<HTMLElement> | null, tab: Tab) => void;

export interface CalendarProps {
  value?: Date;
  onChange?(date: Date): void;
}
