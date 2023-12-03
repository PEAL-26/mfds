import LinkNext from 'next/link';
import { twMerge } from 'tailwind-merge';

import { LinkProps } from './types';

export function Link(props: LinkProps) {
  const { children, title, className, href,target , ...rest } = props;

  return (
    <LinkNext
      href={href}
      className={twMerge('font-normal text-primary-a hover:underline', className)}
      target={target}
      {...rest}
    >
      {title || children}
    </LinkNext>
  );
}

export * from './types';
