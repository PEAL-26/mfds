import { getPropertyValue } from '@/helpers/objects';

import { describe,expect,it } from '@jest/globals';

describe('getPropertyValue', () => {
  it('deve retornar o valor da propriedade correta', () => {
    const obj = { id: 123, name: 'Test' };
    const value = getPropertyValue(obj, 'name');
    expect(value).toBe('Test');
  });

  it('deve retornar undefined se a propriedade não existir', () => {
    const obj = { id: 123, name: 'Test' };
    // @ts-ignore
    const value = getPropertyValue(obj, 'age');
    expect(value).toBeUndefined();
  });

  it('deve retornar undefined se o objeto não for fornecido', () => {
    const value = getPropertyValue(null, 'age');
    expect(value).toBeUndefined();
  });
});
