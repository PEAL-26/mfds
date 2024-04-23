import { tv } from 'tailwind-variants';

export const labelVariants = tv({
  variants: {
    variant: {
      success: 'text-green',
      error: 'text-red',
      none: '',
      input:
        "flex items-center justify-center bg-gray-300 p-2 text-center text-sm font-bold data-[align='left']:rounded-s-md data-[align='right']:rounded-e-md",
      badge:
        'flex min-w-[96px] items-center justify-center bg-gray-300 px-2 text-center align-middle text-sm font-bold data-[align="left"]:rounded-s-md data-[align="right"]:rounded-e-md',
    },
  },
});
