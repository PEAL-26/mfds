import { twMerge } from 'tailwind-merge';
import { Popover } from '../index';
import { PopoverHelpProps } from './types';

export function PopoverHelp(props: PopoverHelpProps) {
  const { content, contentClassName, popoverClassName } = props;
  return (
    <Popover
      content={
        <div className={twMerge('rounded bg-black p-2 text-xs text-white', contentClassName)}>
          {content}
        </div>
      }
      theme="light"
    >
      <span
        className={twMerge(
          'inline-flex h-5 w-5 cursor-help items-center justify-center rounded-full bg-orange-600 text-white',
          popoverClassName,
        )}
      >
        ?
      </span>
    </Popover>
  );
}

export * from './types';
