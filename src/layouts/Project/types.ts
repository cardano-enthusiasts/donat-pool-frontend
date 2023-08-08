import type { ReactNode } from 'react';

export interface Props {
  previousPageTitle: string;
  onPreviousPageClick: () => void;
  title: string;
  children: ReactNode;
}
