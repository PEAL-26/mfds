import { PageErrorButtonType, PageErrorProps } from './types';

export const getErrors = ({ title, description, code = '400' }: Omit<PageErrorProps, 'button'>) =>
  ({
    400: {
      title: title || 'Falha na requisição!',
      description:
        description ||
        'A requisição não pôde ser processada. Por favor, actualize a página ou tente novamente mais tarde.',
    },
    401: {
      title: title || 'Não Autorizado!',
      description: description || 'Acesso não autorizado, verifique suas credenciais.',
    },
    403: {
      title: title || 'Acesso Proibido!',
      description:
        description ||
        'Desculpe, acesso não permitido. Contacte o administrador se acredita que isso seja um engano.',
    },
    404: {
      title: title || 'Não Encontrado!',
      description: description || 'Este recurso não existe ou foi removido.',
    },
    409: {
      title: title || 'Conflito na Requisição!',
      description:
        description ||
        'Houve um conflito ao processar a sua solicitação. Por favor, actualize a página e tente novamente.',
    },
    500: {
      title: title || 'Falha Interno do Servidor!',
      description:
        description ||
        'Desculpe, ocorreu um problema interno. Nossas equipes estão cientes e trabalhando para resolver isso.',
    },
  })[code];

export const getButtonTitle = (button?: PageErrorButtonType) =>
  button
    ? {
        reload: 'Actualizar',
        go_home: 'Ir Para o Home',
      }[button]
    : null;
