import { InputMessage } from './input-message';
import { InputMessageContainerProps } from './types';

export function InputMessageContainer(props: InputMessageContainerProps) {
  const { children, errors = [], infos = [], warns = [] } = props;

  const notHaveMessages =
    (!errors || errors?.length === 0) &&
    (!infos || infos?.length === 0) &&
    (!warns || warns?.length === 0);

  if (notHaveMessages) return null;

  return (
    <div className="flex flex-col">
      {errors.map((error, index) => (
        <InputMessage key={index} type="error" text={error} />
      ))}
      {infos.map((info, index) => (
        <InputMessage key={index} type="info" text={info} />
      ))}
      {warns.map((warn, index) => (
        <InputMessage key={index} type="warn" text={warn} />
      ))}
      {children}
    </div>
  );
}
