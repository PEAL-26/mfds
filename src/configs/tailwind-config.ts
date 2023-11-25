import { colors } from '@/styles';
import plugin from 'tailwindcss/plugin';

export const tailwindConfig = plugin(
  ({ addUtilities, theme, e }) => {
    const values = theme('colors') || {};

    const utilities = Object.entries(values).map(([colorValue, colorVariants]) => {
      let property = Object();
      Object.entries(colorVariants).map(([variantKey, variantValue]) => {
        const key = variantKey === 'DEFAULT' ? colorValue : `${colorValue}-${variantKey}`;

        property[e(key)] = variantValue;
      });

      return property;
    });

    addUtilities(utilities);
  },
  {
    theme: {
      extend: {
        colors,
      },
    },
  },
);

export default tailwindConfig;
