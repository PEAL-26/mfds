import { getVersionFromPackageJson } from '@/helpers';

import { describe, expect, it } from '@jest/globals';

describe('getPropertyValue', () => {
  it('deve retornar o valor da versão', () => {
    const version = getVersionFromPackageJson();

    expect(version).toBeDefined();
  });
});
