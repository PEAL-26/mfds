import { NavigationButtonProps } from './types';

export function NavigationButton(props: NavigationButtonProps) {
  const { active, icon: Icon, color = '', onClick } = props;

  return (
    <button
      onClick={onClick}
      disabled={!active}
      data-active={active}
      data-color={color}
      className="data-[active=false]:cursor-not-allowed data-[color='']:data-[active=false]:text-neutral-500/30 data-[color='']:data-[active=true]:text-neutral-500"
    >
      <Icon size={30} />
    </button>
  );
}


//#FF4D
