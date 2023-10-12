'use client';
import { useState } from 'react';

import { twMerge } from 'tailwind-merge';
import Button from '../button';
import { TabsProps, TabType } from './types';
import { checkDuplicateIds } from './utils';

export function Tabs(props: TabsProps) {
  const { tabs, defaultTab, children, className } = props;

  const [currentTab, setCurrentTab] = useState<TabType>(defaultTab || tabs[0]);

  const handleChangeTab = (tab: TabType) => {
    setCurrentTab(tab);
  };

  checkDuplicateIds(tabs);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-fit gap-3">
        {tabs.map((item, index) => (
          <Button
            key={index}
            variant={currentTab.id === item.id ? 'primary' : 'secondary'}
            className={currentTab.id === item.id ? 'hover:bg-primary-a hover:text-white' : ''}
            onClick={() => handleChangeTab(item)}
          >
            {item.title}
          </Button>
        ))}
      </div>

      {Array.isArray(children) &&
        children.map((child, index) => {
          return (
            <div
              key={tabs[index].id}
              data-visible={tabs[index].id === currentTab.id}
              className={twMerge(className, 'data-[visible=false]:hidden')}
            >
              {child}
            </div>
          );
        })}
    </div>
  );
}

export * from './types';
