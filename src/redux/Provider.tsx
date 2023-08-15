'use client';

import { Provider as ReduxProvider } from 'react-redux';

import type { PropsWithChildren } from '@/shared/types';

import store from './store';

export default function Provider({ children }: PropsWithChildren) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
