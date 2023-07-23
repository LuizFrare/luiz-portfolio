export interface LinkProps {
  href: string;
  target?: string;
  children?: React.ReactNode;
}

export interface HeaderProps {
  links: LinkProps[];
}