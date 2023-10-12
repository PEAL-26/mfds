import { onNavClickType } from '../types';

export interface TabYearProps {
  yearsArray: number[];
  selectedYear: number;
  onYearChange(year: number): void;
  onNavClick: onNavClickType;
}

export interface TabYearNavigationProps {
  onNavClick: onNavClickType;
  yearsArray: number[];
}
