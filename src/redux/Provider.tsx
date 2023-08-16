'use client';

import { Provider as ReduxProvider } from 'react-redux';

import store from './store';

export default function ({ children }: React.PropsWithChildren) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
