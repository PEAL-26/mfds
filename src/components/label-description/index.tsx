import { LabelDescriptionProps } from './types';

export function LabelDescription(props: LabelDescriptionProps) {
  const { title, description, required } = props;

  return (
    <span className="text-lg text-black ">
      <span className="font-bold">{title}
         {required && <span className="text-red">{' *'}</span>}
      </span>
      <p>{description}</p>
    </span>
  );
}

export * from './types';
