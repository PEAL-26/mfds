import { ReactNode } from 'react';

export type TabType = {
  id: string;
  title: string;
};

export interface TabsProps {
  tabs: TabType[];
  defaultTab?: TabType;
  defaultTabId?: string;
  children: ReactNode;
  className?: string;
  onChangeTab?(tab: TabType):void
}
