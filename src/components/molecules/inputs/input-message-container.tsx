import { InputMessageContainerProps } from './types';

export function InputMessageContainer(props: InputMessageContainerProps) {
  const { children } = props;

  return <div className="flex flex-col">{children}</div>;
}
