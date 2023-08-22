import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  color: 'red' | 'green';
  isClickedTheme: boolean;
  onClick: () => void;
}

export type { Props };
