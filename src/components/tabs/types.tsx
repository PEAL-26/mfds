import { ReactNode } from 'react';

export type TabType = {
  id: string;
  title: string;
};

export interface TabsProps {
  tabs: TabType[];
  defaultTab?: TabType;
  children: ReactNode;
  className?: string;
}
