import type { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  isChecked: boolean;
  onChange: () => void;
}
