import { type SagaIterator } from '@redux-saga/types';
import {
  type Reducer,
  type Dispatch,
  type ActionCreator,
  type Action,
} from 'redux';

import type * as features from 'features';

interface Dependencies {
  getDispatch: () => Dispatch;
  getState: () => AppReduxState;
}

type FeatureSaga = (deps: Dependencies) => SagaIterator;

interface FeatureEntry {
  actionCreators?: Record<string, ActionCreator<Action>>;
  selectors?: any;
  reducer?: Reducer;
  saga?: FeatureSaga;
}

interface AppReduxState {
  info: features.info.types.ReduxState;
}

type RootSaga = (deps: Dependencies) => () => SagaIterator;

type ReducersMap<T> = {
  [key in keyof T]: Reducer<T[key]>;
};

export type {
  Dependencies,
  FeatureSaga,
  FeatureEntry,
  AppReduxState,
  RootSaga,
  ReducersMap,
};
