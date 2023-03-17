import {
  compose,
  applyMiddleware,
  combineReducers,
  createStore,
  type Middleware,
  type Store,
  type Reducer,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { type SagaMiddleware } from 'redux-saga';

import * as features from 'features';
import { type AppReduxState } from 'shared/types';

interface IStoreData {
  store: Store<AppReduxState>;
  runSaga: SagaMiddleware<any>['run'];
}

function configureStore(): IStoreData {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];

  const composeEnhancers =
    process.env.NODE_ENV === 'development' ? composeWithDevTools({}) : compose;

  const reducersMap: Record<keyof AppReduxState, Reducer | undefined> = {
    info: features.info.entry.reducer,
    protocol: features.protocol.entry.reducer,
    fundraising: features.fundraising.entry.reducer,
  };

  const store: Store<AppReduxState> = createStore(
    combineReducers(
      Object.fromEntries(
        Object.entries(reducersMap).filter(
          ([, reducer]) => reducer !== undefined
        )
      ) as Record<keyof AppReduxState, Reducer>
    ),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return { store, runSaga: sagaMiddleware.run };
}

export { configureStore };
