import { tv } from 'tailwind-variants';

export const inputTextVariants = tv({
  variants: {
    variant: {
      primary:
        'bg-white border border-gray-light text-black text-xs rounded-md focus:ring-gray-300 focus:border-gray-300 w-full p-2',
      success:
        'bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-xs rounded-md focus:ring-green-500 focus:border-green-500 w-full p-2',
      error:
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-xs rounded-md focus:ring-red-500 focus:border-red-500 w-full p-2',
      disable:
        'bg-gray-100 border border-gray-light text-gray-900 text-xs rounded-md focus:border-gray-300 w-full p-2 cursor-not-allowed',
      none: '',
    },
  },
});
