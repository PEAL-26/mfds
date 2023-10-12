import { Popover } from '../index';
import { PopoverHelpProps } from './types';

export function PopoverHelp({ content }: PopoverHelpProps) {
  return (
    <Popover
      content={<div className="rounded bg-black p-2 text-xs text-white">{content}</div>}
      theme="light"
    >
      <span className="inline-flex h-5 w-5 cursor-help items-center justify-center rounded-full bg-orange-600 text-white">
        ?
      </span>
    </Popover>
  );
}

export * from './types';
