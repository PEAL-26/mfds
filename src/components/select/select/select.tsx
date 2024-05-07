'use client';
import { useState } from 'react';
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
    ...rest
  } = props;
  const [selectedItem, setSelectedItem] = useState<T | undefined>(defaultItem);

  return (
    <SelectPrimitive {...rest}>
      <SelectTrigger id={id} className={cn('w-[180px]', className)}>
        <SelectValue
          placeholder={placeholder}
          defaultValue={String(selectedItem?.[fieldValue])}
          className="placeholder:text-gray-300"
        />
      </SelectTrigger>
      <SelectContent className={cn(contentClassName)}>
        <SelectGroup className={cn(contentGroupClassName)}>
          {items.map((item) => (
            <SelectItem
              key={String(item[fieldValue])}
              value={String(item[fieldValue])}
              onSelect={() => setSelectedItem(item)}
              className={cn(contentItemClassName)}
            >
              {String(item[fieldLabel])}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectPrimitive>
  );
}
