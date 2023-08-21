import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  color: 'red' | 'green';
  isClickedTheme: boolean;
  onClick: () => void;
}
