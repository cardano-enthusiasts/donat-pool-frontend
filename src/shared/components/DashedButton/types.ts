import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  onClick: () => void;
  primaryColor: 'red' | 'blue';
  secondaryColor: 'red' | 'blue';
  backgroundColor: 'yellow' | 'green';
  isClickedTheme: boolean;
  isFixedWidth?: boolean;
}
