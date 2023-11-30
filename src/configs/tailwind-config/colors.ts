type Props = {
  colors: any;
  e(str: string): string;
};

export const getColorsUtilities = ({ colors, e }: Props) =>
  Object.entries(colors).map(([colorValue, colorVariants]) => {
    let property = {};

    Object.entries(colorVariants).map(([variantKey, variantValue]) => {
      const key = variantKey === 'DEFAULT' ? colorValue : `${colorValue}-${variantKey}`;

      property[e(key)] = variantValue;
    });

    return property;
  });
