import { forwardRef,ReactNode } from 'react';
import { RxCaretSort } from 'react-icons/rx';
import { cn } from '../../../libs/utils';
import { Button,ButtonProps } from '../../button';

interface SelectSearchButtonProps extends ButtonProps {
  selectedFieldLabel?: ReactNode;
  placeholder?: string;
}

export const SelectSearchButton = forwardRef<HTMLButtonElement, SelectSearchButtonProps>(
  (props, ref) => {
    const { selectedFieldLabel, placeholder = '', className, ...rest } = props;
    return (
      <Button.Root
        ref={ref}
        variant="outline"
        role="combobox"
        className={cn(
          'line-clamp-1 flex w-full items-center justify-between rounded-md border border-gray-light text-sm focus:outline-none focus:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-50',
          !selectedFieldLabel && 'text-gray-300',
          className,
        )}
        {...rest}
      >
        {selectedFieldLabel || placeholder}
        <RxCaretSort className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button.Root>
    );
  },
);

SelectSearchButton.displayName = 'SelectSearchButton';
