import { type ReactNode } from 'react';

export interface Props {
  previousPageTitle: string;
  onPreviousPageClick: () => void;
  pageHeader: ReactNode;
  children: ReactNode;
}
