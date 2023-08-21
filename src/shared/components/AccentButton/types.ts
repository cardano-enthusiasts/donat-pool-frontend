import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  onClick?: () => void;
  primaryColor: 'yellow' | 'blue';
  secondaryColor: 'red' | 'green';
  fontColor: 'red' | 'green';
  isAnimation?: boolean;
  type?: 'submit' | 'button';
  href?: string | null;
  size?: 's' | 'm';
  isDisabled?: boolean;
}
