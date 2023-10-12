import { CheckToggleProps } from './types';

export function CheckToggle(props: CheckToggleProps) {
  const { active } = props;

  //   const className = {
  //     true: "bg-primary-a",
  //     false: "bg-white",
  //   }[!!active ? true : false];

  return (
    <div className="flex rounded-sm border border-gray-light">
      <span className="w-full cursor-pointer rounded-l-sm bg-primary-a px-2 py-1 text-xs font-bold text-white max-sm:text-[10px]">
        LIGADO
      </span>
      <span className="w-full cursor-pointer rounded-r-sm bg-white px-2 py-1 text-xs font-normal max-sm:text-[10px]">
        DESLIGAR
      </span>
    </div>
  );
}

export * from './types';
