'use client';
import { twMerge } from 'tailwind-merge';
import { KeyboardButtonProps } from './types';

export function KeyboardButton(props: KeyboardButtonProps) {
  const { value, className = '', icon: Icon, onClick } = props;

  return (
    <div
      className={twMerge(
        'group flex h-12 w-16 cursor-pointer items-center justify-center rounded border border-white bg-primary text-white hover:bg-white',
        className,
      )}
      onClick={onClick}
    >
      {value && (
        <span className="text-xl font-bold text-white group-hover:text-primary">{value}</span>
      )}
      {Icon && <Icon className="h-6 w-6 stroke-white group-hover:stroke-primary" />}
    </div>
  );
}
