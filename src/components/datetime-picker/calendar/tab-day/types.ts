import { MouseEvent } from 'react';
import { ChangeSelectionTabType, onNavClickType } from '../types';

export interface TabDayNavigationProps {
  onNavClick: onNavClickType;
  changeSelectionTab: ChangeSelectionTabType;
  monthNames: string[];
  selectedMonth: number;
  selectedYear: number;
}

export interface TabDayProps {
  weekDays: string[];
  displayedWeeks: Date[][];
  selectedDate: Date | null;
  now: Date;
  startDate?: Date;
  endDate?: Date;
  onDayClick(e: MouseEvent<HTMLElement>): void;
  onTodayClick(e: MouseEvent<HTMLElement>): void;

  monthNames: string[];
  selectedMonth: number;
  selectedYear: number;
  onNavClick: onNavClickType;
  changeSelectionTab: ChangeSelectionTabType;
}
