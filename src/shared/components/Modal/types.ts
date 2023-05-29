import { type ReactNode } from 'react';

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  isClosingDisabled?: boolean;
  children: ReactNode;
}
