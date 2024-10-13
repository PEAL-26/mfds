'use client';
import { ChangeEvent,useState } from 'react';
import { cn } from '../../../libs/utils';
import {
SelectContent,
SelectGroup,
SelectItem,
Select as SelectPrimitive,
SelectTrigger,
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
    selectEmptyText = 'Nenhum (a)',
    onValueChange,
    onSelect,
    onChange,
    ...rest
  } = props;
  const [selectedItem, setSelectedItem] = useState<T | undefined | null>(() => defaultItem);

  console.log({ selectedItem });

  const handleValueChange = (value: any) => {
    if (value === null) {
      const obj = Object();
      obj[fieldValue] = null;
      obj[fieldLabel] = selectEmptyText;

      setSelectedItem(obj);
      onValueChange?.(value);
      onSelect?.(null);
      handleChange(null);
      return;
    }

    const item = items.find((i) => i[fieldValue] === value);
    setSelectedItem(item);
    onSelect?.(item);
    onValueChange?.(value);
    handleChange(item);
  };

  const handleChange = (value?: Record<any, any>) => {
    const event = {
      target: { value },
      currentTarget: { value },
    } as unknown as ChangeEvent<HTMLElement>;

    onChange?.(event);
  };

  return (
    <SelectPrimitive onValueChange={handleValueChange} {...rest}>
      <SelectTrigger
        id={id}
        className={cn('min-w-[180px] w-[180px]', className, !selectedItem?.[fieldLabel] && 'text-gray-300')}
      >
        <div className='line-clamp-1 text-left'>{(selectedItem?.[fieldLabel] || placeholder) as any}</div>
      </SelectTrigger>
      <SelectContent className={cn(contentClassName)}>
        <SelectGroup className={cn(contentGroupClassName)}>
          {selectEmpty && (
            <SelectItem iconCheck={iconCheck} value={null} className={cn(contentItemClassName)}>
              {selectEmptyText}
            </SelectItem>
          )}
          {items.map((item) => (
            <SelectItem
              iconCheck={iconCheck}
              key={String(item[fieldValue])}
              value={String(item[fieldValue])}
              className={cn(contentItemClassName)}
              asChild
            >
              {item[fieldLabel] as any}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectPrimitive>
  );
}
