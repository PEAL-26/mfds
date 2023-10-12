import { tv } from 'tailwind-variants';

export const checkBoxVariants = tv({
  variants: {
    variant: {
      primary: 'w-5 h-5 text-primary border-gray-dark rounded focus:ring-0',
      success: 'w-5 h-5 text-green border-green rounded focus:ring-0',
      error: 'w-5 h-5 text-red border-red rounded focus:ring-0',
      none: '',
    },
  },
});
