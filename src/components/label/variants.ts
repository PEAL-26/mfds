import { tv } from 'tailwind-variants';

export const labelVariants = tv({
  variants: {
    variant: {
      success: 'text-green',
      error: 'text-red',
      none: '',
    },
  },
});
