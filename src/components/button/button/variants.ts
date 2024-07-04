import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  variants: {
    variant: {
      primary:
        'rounded-md bg-primary-a text-white py-2 px-3 text-sm font-bold hover:bg-primary-900 border border-primary-a transition-all',
      secondary:
        'bg-white rounded-md text-primary-a py-2 px-3 text-sm font-bold hover:bg-gray-50 border border-white transition-all',
      success:
        'rounded-md bg-green-600 text-white py-2 px-3 text-sm font-bold hover:bg-green-700 hover:text-white border border-green-600 hover:border-green-700 transition-all',
      error:
        'rounded-md bg-red-600 text-white py-2 px-3 text-sm font-bold hover:bg-red-700 hover:text-white border border-red-600 hover:border-red-700 transition-all',
      outline:
        'rounded-md py-2 px-3 border border-gray-light bg-white hover:bg-gray-50 transition-all',
      link: 'inline-flex w-fit items-center text-primary hover:underline',
      none: '',
    },
  },
});
