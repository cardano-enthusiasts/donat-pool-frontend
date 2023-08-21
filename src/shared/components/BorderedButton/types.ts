import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  color: 'red' | 'green';
  onClick: () => void;
  isClickedTheme: boolean;
}
