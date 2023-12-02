export type PageErrorButtonType = 'reload' | 'go_home';
export type PageErrorCodeType = '400' | '401' | '403' | '404' | '409' | '500';

export interface PageErrorProps {
  code?: PageErrorCodeType;
  title?: string;
  description?: string;
  button?: PageErrorButtonType;
  className?: string;
}
