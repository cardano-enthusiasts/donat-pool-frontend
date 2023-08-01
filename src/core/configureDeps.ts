import { type Store } from 'redux';

import { type AppReduxState, type Dependencies } from '@/shared/types';

function configureDeps(store: Store<AppReduxState>): Dependencies {
  return {
    getDispatch: () => store.dispatch,
    getState: store.getState,
  };
}

export { configureDeps };
