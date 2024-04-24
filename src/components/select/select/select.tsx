'use client';
import { useState } from 'react';
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
    fieldLabel = 'label' as keyof T,
    fieldValue = 'value' as keyof T,
    placeholder = 'Selecione um item...',
    ...rest
  } = props;
  const [selectedItem, setSelectedItem] = useState<T | undefined>(defaultItem);

  return (
    <SelectPrimitive {...rest}>
      <SelectTrigger id={id} className="w-[180px]">
        <SelectValue
          placeholder={placeholder}
          defaultValue={String(selectedItem?.[fieldValue])}
          className="placeholder:text-gray-300"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem
              key={String(item[fieldValue])}
              value={String(item[fieldValue])}
              onSelect={() => setSelectedItem(item)}
            >
              {String(item[fieldLabel])}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectPrimitive>
  );
}
