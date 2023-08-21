import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  primaryColor: 'red' | 'blue' | 'green' | 'yellow';
  secondaryColor: 'blue' | 'green';
  fontColor: 'white' | 'black';
  isFullWidth?: boolean;
  isAnimation?: boolean;
  type?: 'submit' | 'button';
  href?: string | null;
  size?: 's' | 'm';
  isDisabled?: boolean;
  onClick?: () => void;
}
