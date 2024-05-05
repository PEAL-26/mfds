'use client';
import { useEffect, useState } from 'react';
import { cn } from '../../libs/utils';
import { ToggleGroup, ToggleGroupItem } from '../@radix-ui/toggle-group';
import { CheckToggleProps } from './types';

type State = 'true' | 'false';
export function CheckToggle(props: CheckToggleProps) {
  const { active = true, onChange } = props;

  const [value, setValue] = useState<State>('true');

  const className =
    'w-full cursor-pointer px-2 text-[10px] bg-white font-normal data-[state=on]:bg-primary data-[state=on]:text-white h-7';

  useEffect(() => {
    setValue(active ? 'true' : 'false');
  }, [active]);

  return (
    <ToggleGroup
      type="single"
      className="rounded-sm border border-gray-light"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value as State);
        onChange?.(value === 'true' ? true : false);
      }}
    >
      <ToggleGroupItem
        value="false"
        className={cn(className, 'rounded-l-sm data-[state=on]:bg-red-600')}
      >
        {value === 'false' ? 'DESLIGADO' : 'DESLIGAR'}
      </ToggleGroupItem>
      <ToggleGroupItem value="true" className={cn(className, 'rounded-r-sm')}>
        {value === 'true' ? 'LIGADO' : 'LIGAR'}
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export * from './types';
