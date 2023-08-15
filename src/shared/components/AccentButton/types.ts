import { ReactNode } from 'react';

export interface Props {
  onClick?: () => void;
  children: string | ReactNode;
  primaryColor: 'yellow' | 'blue';
  secondaryColor: 'red' | 'green';
  fontColor: 'red' | 'green';
  isAnimation?: boolean;
  type?: 'submit' | 'button';
  href?: string | null;
  size?: 's' | 'm';
  isDisabled?: boolean;
}
