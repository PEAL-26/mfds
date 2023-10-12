'use client';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

import { Button } from '@/components/button';
import { TableEmptyButton } from './types';

export function TableEmptyButton(props: TableEmptyButton) {
  const { url, title } = props;
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (url) {
      router.push(url);
      return;
    }
  };

  return (
    <Button.Root variant="secondary" onClick={handleClick}>
      {title}
    </Button.Root>
  );
}
