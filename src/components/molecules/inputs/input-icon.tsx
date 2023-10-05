import { InputIconType } from './types';

export function InputIcon(props: InputIconType) {
  const { icon: Icon } = props;

  return (
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
    </div>
  );
}
