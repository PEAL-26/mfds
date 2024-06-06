'use client';
import { Button, buttonVariants } from '../../button';
import { Link } from '../../link';
import { TableEmptyButton } from './types';

export function TableEmptyButton(props: TableEmptyButton) {
  const { url, title, onClick } = props;

  if (url) {
    return (
      <Link href={url} className={buttonVariants({ variant: 'secondary' })}>
        {title}
      </Link>
    );
  }

  return (
    <Button.Root variant="secondary" onClick={onClick}>
      {title}
    </Button.Root>
  );
}
