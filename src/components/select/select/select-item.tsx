import { forwardRef,HTMLProps } from 'react';
import { LuCheck } from 'react-icons/lu';
import { cn } from '../../../libs/utils';

interface Props extends HTMLProps<HTMLDivElement> {
  iconCheck?: boolean;
  value?: string;
  className?: string;
  onClick?(): void;
}

export const SelectItem = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { iconCheck, value, className, onClick, children, checked, ...rest } = props;
  return (
    <div
      {...rest}
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pr-2 text-sm outline-none hover:bg-gray-50 focus:bg-gray-50 focus:text-black  data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        iconCheck ? 'pl-8' : 'pl-2',
        className,
      )}
      onClick={() => onClick?.()}
    >
      {iconCheck && checked && (
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <LuCheck className="h-4 w-4" />
        </span>
      )}
      {children}
    </div>
  );
});

SelectItem.displayName = 'SelectItem';
