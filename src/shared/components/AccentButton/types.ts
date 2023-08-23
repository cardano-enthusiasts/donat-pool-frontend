import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  primaryColor: 'yellow' | 'blue';
  secondaryColor: 'red' | 'green';
  fontColor: 'red' | 'green';
  isAnimation?: boolean;
  type?: 'submit' | 'button';
  href?: string | null;
  isExternal?: boolean;
  size?: 's' | 'm';
  isDisabled?: boolean;
  onClick?: () => void;
}

export type { Props };
