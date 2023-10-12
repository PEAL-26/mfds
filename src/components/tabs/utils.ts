import { ReactNode } from 'react';
import { TabType } from './types';

export function checkDuplicateIds(tabs: TabType[]): void {
  const idSet = new Set<string>();

  tabs.forEach((tab) => {
    if (idSet.has(tab.id)) {
      throw new Error(`Duplicate tab ID found: ${tab.id}`);
    }

    idSet.add(tab.id);
  });
}

export function checkChildrenLength(children: ReactNode, tabs: TabType[]): void {
  if (Array.isArray(children) && children.length !== tabs.length) {
    throw new Error(
      'O número de elementos em "children" deve ser igual ao número de elementos em "tabs".',
    );
  }
}
