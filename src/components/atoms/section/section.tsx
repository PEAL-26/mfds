import { twMerge } from 'tailwind-merge';
import { SectionProps } from './types';

export function Section(props: SectionProps) {
  const { children, className, ...rest } = props;
  return (
    <section className={twMerge('rounded p-6 shadow', className)} {...rest}>
      {children}
    </section>
  );
}
