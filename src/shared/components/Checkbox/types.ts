import type { ReactNode } from 'react';

export interface Props {
  className?: string;
  isChecked: boolean;
  onChange: () => void;
  children: ReactNode;
}
