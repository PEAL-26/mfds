'use client';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { LuCheck, LuLoader2 } from 'react-icons/lu';

import { cn } from '../../../libs/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from '../../@radix-ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../../@radix-ui/popover';

import { SelectSearchButton } from './button';
import { SelectSearchProps } from './types';

export function SelectSearch<T>(props: SelectSearchProps<T>) {
  const {
    name,
    items = [],
    defaultItem,
    placeholder = 'Selecione um item...',
    setValue,
    fieldValue = 'id' as keyof T,
    fieldLabel = 'name' as keyof T,
    formControl: FormControl,
    disabled = false,
    loading = false,
    clean = false,
    className,
    contentClassName,
    contentGroupClassName,
    contentItemClassName,
    onChange,
    onClean,
    onSearch,
    offlineSearch = false,
    onSelect,
    modal,
    ...rest
  } = props;

  const popoverRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | undefined>(undefined);

  const [search, setSearch] = useState('');

  useEffect(() => {
    onSearch?.(search);
  }, [search]);

  useEffect(() => {
    setSelectedItem(defaultItem);
  }, [defaultItem]);

  useEffect(() => {
    if (defaultItem) {
      const item = items.find((item) => item[fieldValue] === defaultItem[fieldValue]);
      if (item) setSelectedItem(item);
    }
  }, [fieldLabel, fieldValue, items, defaultItem]);

  useEffect(() => {
    if (clean) {
      handleClean();
      onClean?.(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clean]);

  const handleSelect = (item: T) => {
    const obj: Record<any, any> = {};
    obj[fieldValue] = item[fieldValue];
    obj[fieldLabel] = item[fieldLabel];
    setValue?.(name, item);
    setOpen(false);
    setSearch('');
    setSelectedItem(() => item);
    onSelect?.(item);
    handleChange(obj);
  };

  const handleClean = () => {
    setValue?.(name, undefined);
    setOpen(false);
    setSearch('');
    setSelectedItem(undefined);
    onSelect?.({} as T);
    handleChange();
  };

  const handleChange = (value?: Record<any, any>) => {
    const event = {
      target: { value },
      currentTarget: { value },
    } as unknown as ChangeEvent<HTMLElement>;

    onChange?.(event);
  };

  return (
    <Popover
      modal={modal}
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          setSearch('');
        }
      }}
      {...rest}
    >
      <PopoverTrigger disabled={disabled} asChild className={cn('w-full', className)}>
        {FormControl ? (
          <FormControl>
            <SelectSearchButton
              selectedFieldLabel={String(selectedItem?.[fieldLabel] || '')}
              placeholder={placeholder}
            />
          </FormControl>
        ) : (
          <SelectSearchButton
            selectedFieldLabel={String(selectedItem?.[fieldLabel] || '')}
            placeholder={placeholder}
          />
        )}
      </PopoverTrigger>
      <PopoverContent
        align="start"
        ref={popoverRef}
        className={cn('w-full bg-white p-0', contentClassName)}
      >
        <Command shouldFilter={offlineSearch}>
          <CommandInput modal={modal} onValueChange={setSearch} placeholder="Pesquisar..." />
          <CommandList>
            {loading && (
              <CommandLoading className="flex justify-center py-6">
                <LuLoader2 className="size-4 animate-spin" />
              </CommandLoading>
            )}
            {offlineSearch && <CommandEmpty>Nenhum item encontrado.</CommandEmpty>}
            {!offlineSearch && !loading && items.length == 0 && (
              <CommandEmpty>Nenhum item encontrado.</CommandEmpty>
            )}
            {!loading && (
              <CommandGroup className={cn(contentGroupClassName)}>
                {items.map((item) => (
                  <CommandItem
                    key={`${item[fieldValue]}`}
                    value={String(item[fieldLabel])}
                    onSelect={() => handleSelect(item)}
                    className={cn(contentItemClassName)}
                  >
                    <LuCheck
                      className={cn(
                        'mr-2 h-4 w-4',
                        item[fieldValue] === selectedItem?.[fieldValue]
                          ? 'opacity-100'
                          : 'opacity-0',
                      )}
                    />
                    <span>{`${item[fieldLabel]}`}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
