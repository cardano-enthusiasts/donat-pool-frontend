import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  primaryColor: 'red' | 'blue';
  secondaryColor: 'red' | 'blue';
  backgroundColor: 'yellow' | 'green';
  isClickedTheme: boolean;
  isFixedWidth?: boolean;
  onClick: () => void;
}
