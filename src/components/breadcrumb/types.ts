export type LinksBreadcrumb = {
  title: string;
  url?: string;
};

export interface BreadcrumbProps {
  links: LinksBreadcrumb[];
}
