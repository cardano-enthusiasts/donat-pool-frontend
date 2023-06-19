import { type ReactNode } from 'react';

export interface Props {
  isChecked: boolean;
  onChange: () => void;
  children: ReactNode;
}
