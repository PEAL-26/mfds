import { ModalHeaderProps } from './types';

export function ModalHeader(props: ModalHeaderProps) {
  const { title, children, ...rest } = props;

  return (
    <div className="w-full rounded-t bg-gray-200 p-3" {...rest}>
      {title && <span className="text-xl font-bold text-black">{title}</span>}
      {children}
    </div>
  );
}
