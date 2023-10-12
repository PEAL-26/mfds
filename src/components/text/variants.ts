import { tv } from 'tailwind-variants';

export const textVariants = tv({
  variants: {
    variant: {
      title: 'text-xl font-bold',
      subtitle: 'text-lg font-bold',
      normal: 'text-base font-normal',
      none: '',
    },
  },
});
