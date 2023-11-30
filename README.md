# Software EDV Design System

[![GitHub issues](https://img.shields.io/github/issues/PEAL-26/software-edv)](https://github.com/PEAL-26/software-edv/issues)
[![GitHub license](https://img.shields.io/github/license/PEAL-26/software-edv)](https://github.com/PEAL-26/software-edv/blob/main/LICENSE)

## Descrição

O Software EDV Design System é um sistema de design desenvolvido para o Software EDV.

## Instalação

Você pode instalar este pacote via npm:

```bash
npm install software-edv-design-system
```

Instale também o plugin @tailwindcss/forms que os inputs sejam estilizados

```bash
npm i -D @tailwindcss/forms
```

## Configurações

1. Insira as seguintes linhas no seu arquivo **tailwind.config.js**:

```js
const { tailwindConfig } = require('software-edv-design-system/configs');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/software-edv-design-system/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [tailwindConfig, forms],
};
```

2. Insira as seguintes linhas no seu arquivo **global.css** para configurar o Tailwind CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --border: 214.3 31.8% 91.4%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
}
```

3. Insira as seguintes linhas no seu arquivo **components.json** para configurar o [ui.shadcn](https://ui.shadcn.com/docs/components-json):

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## Uso

Para usar este design system em seu projeto, você pode importar os componentes necessários da seguinte maneira:

```javascript
import { Button, Input } from 'software-edv-design-system/components';
```

Certifique-se de que as dependências do React (`react` e `react-dom`) estejam instaladas em seu projeto, conforme especificado nas `peerDependencies`.

## Scripts

- `npm run clean`: Remove a pasta `dist` para limpar o projeto.
- `npm run build`: Limpa o projeto e compila o código TypeScript em JavaScript na pasta `dist`.
- `npm run publish`: Publica uma nova versão da biblioteca no npm.
- `npm run patch`: Atualiza a versão do pacote para a próxima versão de correção (patch).
- `npm test`: Executa testes (nenhum teste especificado no momento).

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Você pode relatar problemas na [página de problemas](https://github.com/PEAL-26/software-edv/issues).

## Licença

Este projeto é licenciado sob a Licença ISC. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## Links

- [Página do Design System](https://peal-26.github.io/software-edv-design-system)
- [Página do GitHub](https://github.com/PEAL-26/software-edv)
- [Página de Problemas](https://github.com/PEAL-26/software-edv/issues)
- [Página do npm](https://www.npmjs.com/package/software-edv-design-system)
