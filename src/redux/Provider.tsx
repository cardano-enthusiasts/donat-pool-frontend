'use client';

import { Provider as ReduxProvider } from 'react-redux';

import store from './store';

function Provider({ children }: React.PropsWithChildren) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}

export default Provider;
