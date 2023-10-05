import { tv } from 'tailwind-variants';

export const variants = tv({
  variants: {
    variant: {
      primary: 'w-5 h-5 text-primary border-gray-dark rounded-full focus:ring-0',
      success: 'w-5 h-5 text-green border-green rounded-full focus:ring-0',
      error: 'w-5 h-5 text-red border-red rounded-full focus:ring-0',
      none: '',
    },
  },
});
