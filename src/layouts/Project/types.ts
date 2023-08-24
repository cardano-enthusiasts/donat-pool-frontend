import type { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  previousPageTitle: string;
  onPreviousPageClick: () => void;
  title: string;
}
