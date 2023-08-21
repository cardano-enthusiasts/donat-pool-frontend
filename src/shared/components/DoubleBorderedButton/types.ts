import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  onClick?: () => void;
  primaryColor: 'blue';
  backgroundColor: 'white' | 'red';
  href?: string | null;
  size?: 's' | 'm';
  isFullWidth?: boolean;
}
