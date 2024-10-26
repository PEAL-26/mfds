'use client';
import { useEffect,useState } from 'react';
import { cn } from '../../../libs/utils';
import {
SelectContent,
SelectGroup,
Select as SelectPrimitive,
SelectTrigger,
} from '../../@radix-ui/select';
import { SelectItem } from './select-item';
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
    selectEmptyText = 'Nenhum (a)',
    onValueChange,
    onSelect,
    value,
    ...rest
  } = props;

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | undefined>(undefined);

  const handleValueChangeClose = (item: T | null) => {
    handleValueChange(item);
    setOpen(false);
  };

  const handleValueChange = (item: T | null) => {
    let obj = Object(item || {});

    if (item === null) {
      obj[fieldValue] = null;
      obj[fieldLabel] = selectEmptyText;
    }

    if (item !== null) {
      obj = items.find((i) => String(i?.[fieldValue]) === String(item?.[fieldValue]));
    }

    setSelectedItem(obj);

    onSelect?.(obj);
    onValueChange?.(String(obj?.[fieldValue]));
  };

  useEffect(() => {
    handleValueChange(defaultItem);
  }, [defaultItem]);

  useEffect(() => {
    let obj = Object()
    obj[fieldValue] = value;
    handleValueChange(obj);
  }, [value]);

  return (
    <SelectPrimitive open={open} onOpenChange={setOpen} {...rest}>
      <SelectTrigger
        id={id}
        className={cn(
          'w-[180px] min-w-[180px]',
          className,
          !selectedItem?.[fieldLabel] && 'text-gray-300',
        )}
      >
        <div className="line-clamp-1 text-left">
          {(selectedItem?.[fieldLabel] || placeholder) as any}
        </div>
      </SelectTrigger>
      <SelectContent className={cn(contentClassName)}>
        <SelectGroup className={cn(contentGroupClassName)}>
          {selectEmpty && (
            <SelectItem
              iconCheck={iconCheck}
              checked={selectedItem?.[fieldValue] === null}
              value={null}
              className={cn(contentItemClassName)}
              onClick={() => handleValueChangeClose(null)}
            >
              {selectEmptyText}
            </SelectItem>
          )}
          {items.map((item) => (
            <SelectItem
              iconCheck={iconCheck}
              checked={String(selectedItem?.[fieldValue]) === String(item?.[fieldValue])}
              key={String(item?.[fieldValue])}
              value={String(item?.[fieldValue])}
              className={cn(contentItemClassName)}
              onClick={() => handleValueChangeClose(item)}
              // asChild
            >
              {item[fieldLabel] as any}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectPrimitive>
  );
}
