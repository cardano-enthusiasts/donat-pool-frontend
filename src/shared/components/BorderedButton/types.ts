import { ReactNode } from 'react';

export interface Props {
  color: 'red' | 'green';
  children: string | ReactNode;
  onClick: () => void;
  isClickedTheme: boolean;
}
