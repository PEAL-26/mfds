import { describe, expect, it } from '@jest/globals';

import { CurrencyProps, totalizarItens, validateCurrencyProps } from '@/helpers/currency';

type Item = {
  product: string;
  price: CurrencyProps;
};

describe('totalizarItens', () => {
  it('deve calcular o total corretamente para uma lista válida de itens', () => {
    const items: Item[] = [
      {
        product: 'X1',
        price: { value: 10, currency: 'USD' },
      },
      {
        product: 'X2',
        price: { value: 20, currency: 'EUR' },
      },
      {
        product: 'X3',
        price: { value: 30 },
      },
    ];

    const total = totalizarItens(items, 'price');
    expect(total).toBe(60);
  });

  it('deve retornar 0 para uma lista vazia de itens', () => {
    const items: Item[] = [];

    const total = totalizarItens(items, 'price');
    expect(total).toBe(0);
  });

  it('deve lançar um erro se um item não tiver a propriedade especificada', () => {
    const items: Item[] = [
      { product: 'x1', price: { value: 10, currency: 'USD' } },
      // @ts-ignore
      { product: 'x1', price: { currency: 'EUR' } },
    ];

    expect(() => totalizarItens(items, 'price')).toThrowError('value must be a number');
  });
});

describe('validateCurrencyProps', () => {
  it('não deve lançar um erro para uma CurrencyProps válida', () => {
    const currencyProps: CurrencyProps = { value: 100, currency: 'USD', locales: 'en-US' };

    expect(() => validateCurrencyProps(currencyProps)).not.toThrowError();
  });

  it('deve lançar um erro se o objeto não for nulo', () => {
    const obj: any = null;
    expect(() => validateCurrencyProps(obj)).toThrowError('Object must be a non-null object');
  });

  it('deve lançar um erro se a propriedade "value" não for um número', () => {
    // @ts-ignore
    const currencyProps: CurrencyProps = { value: '100', currency: 'USD' };
    expect(() => validateCurrencyProps(currencyProps)).toThrowError('value must be a number');
  });

  it('deve lançar um erro se a propriedade "currency" não for uma string ou undefined', () => {
    // @ts-ignore
    const currencyProps: CurrencyProps = { value: 100, currency: 123 };
    expect(() => validateCurrencyProps(currencyProps)).toThrowError(
      'currency must be a string or undefined',
    );
  });

  it('deve lançar um erro se a propriedade "locales" não for uma string ou undefined', () => {
    // @ts-ignore
    const currencyProps: CurrencyProps = { value: 100, currency: 'USD', locales: 123 };
    expect(() => validateCurrencyProps(currencyProps)).toThrowError(
      'locales must be a string or undefined',
    );
  });
});
