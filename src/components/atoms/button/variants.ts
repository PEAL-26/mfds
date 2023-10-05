import { tv } from 'tailwind-variants';

export const variants = tv({
  variants: {
    variant: {
      primary:
        'rounded-md bg-primary-a text-gray-light  py-2 px-3 text-sm font-bold hover:bg-gray-light hover:text-primary-a border border-primary-a transition-all',
      secondary:
        'rounded-md text-primary-a py-2 px-3 text-sm font-bold hover:bg-primary-a hover:text-gray-light border border-primary-a transition-all',
      success:
        'rounded-md bg-green text-white py-2 px-3 text-sm font-bold hover:opacity-70 hover:text-white border border-green transition-all',
      error:
        'rounded-md bg-red text-white py-2 px-3 text-sm font-bold hover:opacity-70 hover:text-white border border-red transition-all',
      none: '',
    },
  },
});
