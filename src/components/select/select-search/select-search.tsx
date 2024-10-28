'use client';
import { ChangeEvent,useEffect,useState } from 'react';
import { LuCheck,LuLoader2 } from 'react-icons/lu';

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
import { SelectContent,Select as SelectPrimitive,SelectTrigger } from '../../@radix-ui/select';

import { SelectSearchButton } from './button';
import { SelectSearchProps } from './types';

export function SelectSearch<T>(props: SelectSearchProps<T>) {
  const {
    id,
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
    iconCheck = true,
    selectEmpty = false,
    selectEmptyText = 'Nenhum (a)',
    children,
    ...rest
  } = props;

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | undefined>(() => defaultItem);
  const [search, setSearch] = useState('');

  useEffect(() => {
    onSearch?.(search);
  }, [search]);

  // useEffect(() => {
  //   setSelectedItem(defaultItem);
  // }, [defaultItem]);

  useEffect(() => {
    if (defaultItem) {
      const item = items.find((item) => item?.[fieldValue] === defaultItem?.[fieldValue]);
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
    <SelectPrimitive
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          setSearch('');
        }
      }}
      {...rest}
    >
      <SelectTrigger
        id={id}
        className={cn('w-[180px] min-w-[180px]', className)}
        asChild
        search
        formatting={false}
      >
        {children ? (
          children({ item: selectedItem })
        ) : FormControl ? (
          <FormControl>
            <SelectSearchButton
              selectedFieldLabel={selectedItem?.[fieldLabel] as any}
              placeholder={placeholder}
            />
          </FormControl>
        ) : (
          <SelectSearchButton
            selectedFieldLabel={selectedItem?.[fieldLabel] as any}
            placeholder={placeholder}
          />
        )}
      </SelectTrigger>
      <SelectContent className={cn(contentClassName)}>
        <Command shouldFilter={offlineSearch}>
          <CommandInput onValueChange={setSearch} placeholder="Pesquisar..." />
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
                {selectEmpty && (
                  <CommandItem
                    value={'null'}
                    onSelect={() => {
                      const obj = Object();
                      obj[fieldValue] = null;
                      obj[fieldLabel] = selectEmptyText;
                      handleSelect(obj);
                    }}
                    className={cn(contentItemClassName)}
                  >
                    {iconCheck && (
                      <LuCheck
                        className={cn(
                          'mr-2 h-4 w-4',
                          selectedItem?.[fieldValue] === null ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                    )}
                    <span>{selectEmptyText}</span>
                  </CommandItem>
                )}
                {items.map((item) => (
                  <CommandItem
                    key={`${item[fieldValue]}`}
                    value={String(item[fieldLabel])}
                    onSelect={() => handleSelect(item)}
                    className={cn(contentItemClassName)}
                  >
                    {iconCheck && (
                      <LuCheck
                        className={cn(
                          'mr-2 h-4 w-4',
                          item[fieldValue] === selectedItem?.[fieldValue]
                            ? 'opacity-100'
                            : 'opacity-0',
                        )}
                      />
                    )}
                    <span>{item[fieldLabel] as any}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </SelectContent>
    </SelectPrimitive>
  );
}
