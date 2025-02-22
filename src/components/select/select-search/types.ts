import { ChangeEvent, ElementType, ReactNode } from 'react';

export interface SetValueOption {
  shouldValidate: boolean;
  shouldDirty: boolean;
  shouldTouch: boolean;
}

export interface SelectSearchProps<T> {
  id?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLElement>) => void;
  items?: T[];
  defaultItem?: T;
  placeholder?: string;
  fieldValue?: keyof T;
  fieldLabel?: keyof T;
  setValue?: (name: any, value?: T, options?: Partial<SetValueOption>) => void;
  disabled?: boolean;
  loading?: boolean;
  clean?: boolean;
  formControl?: ElementType;
  className?: string;
  contentClassName?: string;
  contentGroupClassName?: string;
  contentItemClassName?: string;
  onClean?: (state: false) => void;
  onSearch?: (value: string) => void;
  offlineSearch?: boolean;
  onSelect?: (item: T) => void;
  modal?: boolean;
  iconCheck?: boolean;
  selectEmpty?: boolean;
  selectEmptyText?: string;
  children?: (props?: ChildrenProps<T>) => ReactNode;
}

type ChildrenProps<T> = {
  item: T;
};
