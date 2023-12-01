import { twMerge } from 'tailwind-merge';
import { DropdownExpansibleAreaProps } from './types';

export function DropdownExpansibleArea(props: DropdownExpansibleAreaProps) {
  const { children, className, formatting = 'default', ...rest } = props;

  const formattingClassName = {
    default: 'min-w-[256px] rounded-md border bg-white shadow',
    none: '',
  }[formatting];

  return (
    <div
      data-dropdown="expansible-area"
      className={twMerge(formattingClassName, className)}
      {...rest}
    >
      {children}
    </div>
  );
}

DropdownExpansibleArea.displayName = "DropdownExpansibleArea"
