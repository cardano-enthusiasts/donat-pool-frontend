import { ReactNode } from 'react';

export interface Props {
  onClick: () => void;
  children: string | ReactNode;
  primaryColor: 'red' | 'blue';
  secondaryColor: 'red' | 'blue';
  backgroundColor: 'yellow' | 'green';
  isClickedTheme: boolean;
  isFixedWidth?: boolean;
}
