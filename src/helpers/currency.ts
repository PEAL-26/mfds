export interface CurrencyProps {
  value: number;
  currency?: string;
  locales?: string;
}

export const formatarMoeda = (props: CurrencyProps) => {
  const { value, currency = 'AOA', locales = 'pt-AO' } = props;

  const formattedValue = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return formattedValue.replace('AOA', 'Kz');
};

export const totalizarItens = <T>(itens: T[], campo: any) => {
  return itens.reduce((accumulator, currentValue) => {
    const object = Object(currentValue);

    // TODO verificar se o campo é do tipo CurrencyProps
    if (object[campo]) {
    }

    return accumulator + object[campo].value.value;
  }, 0);
};
