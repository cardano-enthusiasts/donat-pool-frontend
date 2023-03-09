import { type SagaIterator } from '@redux-saga/types';
import {
  type Reducer,
  type Dispatch,
  type ActionCreator,
  type Action,
} from 'redux';

import type * as features from 'features';
import { type protocol } from 'shared/constants';

import {
  type BackendProjects,
  type BackendParams,
  type CreateFundraisingParams,
  type FundraisingData,
  type Config,
} from './';

type OnError = (error: string) => void;
type CreateFundraising = (
  onSuccess: (fundraisingData: FundraisingData) => void
) => (
  onError: OnError
) => (
  fixedProtocol: typeof protocol
) => (createFundraisingParams: CreateFundraisingParams) => () => void;

type Donate = (
  onSuccess: (something) => void
) => (
  onError: OnError
) => (fundraisingData: FundraisingData) => (amount: number) => () => void;

type GetFundraisings = (
  onSuccess: (projects: BackendProjects) => void
) => (onError: OnError) => (fixedProtocol: typeof protocol) => () => void;

type GetProtocolInfo = (
  onSuccess: (params: BackendParams) => void
) => (onError: OnError) => (fixedProtocol: typeof protocol) => () => void;

type StartProtocol = (
  onSuccess: (params: BackendParams) => void
) => (onError: OnError) => (config: Config) => () => void;

type UpdateProtocol = (
  onSuccess: (config: Config) => void
) => (
  onError: OnError
) => (fixedProtocol: typeof protocol) => (config: Config) => () => void;

type ReceiveFunds = (
  onSuccess: (something) => void
) => (onError: OnError) => (fundraisingData: FundraisingData) => () => void;
declare global {
  interface Window {
    offchain: {
      closeProtocol: any;
      connectWallet: () => void;
      createFundraising: CreateFundraising;
      donate: Donate;
      getAllFundraisings: GetFundraisings;
      getProtocolInfo: GetProtocolInfo;
      getUserRelatedFundraisings: GetFundraisings;
      startProtocol: StartProtocol;
      updateProtocol: UpdateProtocol;
      receiveFunds: ReceiveFunds;
    };
  }
}

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
