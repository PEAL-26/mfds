import { LabelDescriptionProps } from './types';

export function LabelDescription(props: LabelDescriptionProps) {
  const { title, description } = props;

  return (
    <span className="text-lg text-black ">
      <span className="font-bold">{title}</span>
      <p>{description}</p>
    </span>
  );
}

export * from './types';
