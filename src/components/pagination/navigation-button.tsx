import { twMerge } from 'tailwind-merge';
import { NavigationButtonProps } from './types';

export function NavigationButton(props: NavigationButtonProps) {
  const { active, icon: Icon, color, onClick } = props;

  return (
    <button
      onClick={onClick}
      disabled={!active}
      data-active={active}
      data-color={!!color}
      className={twMerge(
        'data-[active=false]:cursor-not-allowed data-[color=false]:text-neutral-500 data-[active=false]:text-opacity-30',
      )}
    >
      <Icon size={30} style={{ opacity: active ? 1 : 0.3, color }} />
    </button>
  );
}
