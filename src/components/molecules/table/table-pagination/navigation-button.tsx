import { NavigationButtonProps } from './types';

export function NavigationButton(props: NavigationButtonProps) {
  const { active, icon: Icon, onClick } = props;

  return (
    <button
      onClick={onClick}
      data-active={active}
      disabled={!active}
      className="data-[active=false]:cursor-not-allowed data-[active=false]:text-neutral-500/30 data-[active=true]:text-neutral-500"
    >
      <Icon size={30} />
    </button>
  );
}
