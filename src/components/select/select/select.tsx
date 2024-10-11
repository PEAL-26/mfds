'use client';
import { isValidElement, useEffect,useState } from 'react';
import { cn } from '../../../libs/utils';
import {
SelectContent,
SelectGroup,
SelectItem,
Select as SelectPrimitive,
SelectTrigger,
SelectValue,
} from '../../@radix-ui/select';
import { SelectProps } from './types';

export function Select<T>(props: SelectProps<T>) {
  const {
    id,
    items = [],
    defaultItem,
    fieldLabel = 'name' as keyof T,
    fieldValue = 'id' as keyof T,
    placeholder = 'Selecione um item...',
    className,
    contentClassName,
    contentGroupClassName,
    contentItemClassName,
    iconCheck = true,
    selectEmpty = false,
    selectEmptyText='Nenhum (a)',
    ...rest
  } = props;
  const [selectedItem, setSelectedItem] = useState<T | undefined>(() => defaultItem);

  return (
    <SelectPrimitive {...rest}>
      <SelectTrigger id={id} className={cn('w-[180px]', className)}>
       {selectedItem?.[fieldLabel] && isValidElement(selectedItem?.[fieldLabel]) && <>{selectedItem?.[fieldLabel]}</>}

        {/* <SelectValue
          placeholder={placeholder}
          defaultValue={String(selectedItem?.[fieldValue])}
          className="placeholder:text-gray-300"
        >
          {selectedItem?.[fieldLabel] as any}
        </SelectValue> */}
      </SelectTrigger>
      <SelectContent className={cn(contentClassName)}>
        <SelectGroup className={cn(contentGroupClassName)}>
          {selectEmpty &&  <SelectItem
              iconCheck={iconCheck}
              value={undefined}
              onSelect={() => setSelectedItem(undefined)}
              className={cn(contentItemClassName)}
            >
             {selectEmptyText}
            </SelectItem>}
          {items.map((item) => (
            <SelectItem
              iconCheck={iconCheck}
              key={String(item[fieldValue])}
              value={String(item[fieldValue])}
              onSelect={() => setSelectedItem(item)}
              className={cn(contentItemClassName)}
            >
              {item[fieldLabel] as any}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectPrimitive>
  );
}
