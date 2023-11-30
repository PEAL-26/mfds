import plugin from 'tailwindcss/plugin';
import { colors } from '../../styles';
import { getColorsUtilities } from './colors';

export const tailwindConfig = plugin(
  ({ addUtilities, theme, e }) => {
    const colors = theme('colors') || {};
    const colorsUtilities = getColorsUtilities({ colors, e });

    addUtilities(colorsUtilities);
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
