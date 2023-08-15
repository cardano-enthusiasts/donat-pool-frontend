import { ReactNode } from 'react';

export interface Props {
  onClick?: () => void;
  children: string | ReactNode;
  primaryColor: 'red' | 'blue' | 'green' | 'yellow';
  secondaryColor: 'blue' | 'green';
  fontColor: 'white' | 'black';
  isFullWidth?: boolean;
  isAnimation?: boolean;
  type?: 'submit' | 'button';
  href?: string | null;
  size?: 's' | 'm';
  isDisabled?: boolean;
}
