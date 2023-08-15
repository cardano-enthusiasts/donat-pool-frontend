import { ReactNode } from 'react';

export interface Props {
  onClick?: () => void;
  children: string | ReactNode;
  primaryColor: 'blue';
  backgroundColor: 'white' | 'red';
  href?: string | null;
  size?: 's' | 'm';
  isFullWidth?: boolean;
}
