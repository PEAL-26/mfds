# MFDS

[![GitHub issues](https://img.shields.io/github/issues/PEAL-26/mfds)](https://github.com/PEAL-26/mfds/issues)
[![GitHub license](https://img.shields.io/github/license/PEAL-26/mfds)](https://github.com/PEAL-26/mfds/blob/master/LICENSE)

## Descrição

O **MFDS** (Mais Facturas Design System) foi criado com o objetivo de simplificar e acelerar o desenvolvimento de aplicativos, proporcionando uma base sólida e reutilizável para interfaces. Ele utiliza componentes prontos e configuráveis que seguem as melhores práticas de design e usabilidade, permitindo que desenvolvedores foquem no que realmente importa: a lógica de negócio e funcionalidades específicas dos projetos.

Para construir este design system robusto e flexível, foram utilizadas bibliotecas como:

- **@radix-ui**: Oferece componentes acessíveis e customizáveis.
- **@tippyjs/react**: Fornece uma solução poderosa para tooltips e popovers.
- **react-dropzone**: Facilita a criação de zonas de drag-and-drop para upload de arquivos.
- **tailwindcss**: Oferece uma abordagem utilitária para estilização, permitindo criação rápida de layouts.

Além disso, o **MFDS** exige dependências importantes para o seu funcionamento, que devem ser instaladas como `peerDependencies`:

- **next** (^13.5.4): Framework essencial para o desenvolvimento com React e funcionalidades avançadas.
- **react** e **react-dom** (^18.2.0): Base do ecossistema de interfaces.
- **react-icons** (^4.11.0): Conjunto de ícones personalizáveis.
- **sweetalert2** e **sweetalert2-react-content**: Para criar diálogos interativos e atraentes.

## Instalação

Você pode instalar este pacote via npm:

```bash
npm install mfds
```

Instale também o plugin @tailwindcss/forms para que os inputs sejam estilizados

```bash
npm i -D @tailwindcss/forms
```

## Configurações

1. Insira as seguintes linhas no seu arquivo **tailwind.config.js**:

```js
const { tailwindConfig } = require('mfds/configs');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/mfds/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [tailwindConfig, forms],
};
```

## Uso

Para usar este design system em seu projeto, você pode importar os componentes necessários da seguinte maneira:

```javascript
import { Button, Input } from 'mfds/components';
```

Certifique-se de que as dependências do React (`next`, `react` e `react-dom`) estejam instaladas em seu projeto, conforme especificado nas `peerDependencies`.

## Módulos

- Components
- Configs
- Contexts
- Helpers
- Hooks
- Libs
- Styles

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Você pode relatar problemas na [página de problemas](https://github.com/PEAL-26/mfds/issues).

## Licença

Este projeto é licenciado sob a Licença ISC. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## Links

- [Página do Design System](https://peal-26.github.io/mfds)
- [Página do GitHub](https://github.com/PEAL-26/mfds)
- [Página de Problemas](https://github.com/PEAL-26/mfds/issues)
- [Página do npm](https://www.npmjs.com/package/mfds)
