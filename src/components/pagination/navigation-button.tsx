import { NavigationButtonProps } from './types';

export function NavigationButton(props: NavigationButtonProps) {
  const { active, icon: Icon, color, onClick } = props;

  return (
    <button
      onClick={onClick}
      disabled={!active}
      data-active={active}
      data-color={!!color}
      style={{ color }}
      className="data-[active=false]:cursor-not-allowed data-[active=false]:text-opacity-30 data-[color=false]:data-[active=true]:text-neutral-500"
    >
      <Icon size={30} color={color} />
    </button>
  );
}
