import { type SagaIterator } from '@redux-saga/types';
import {
  type Reducer,
  type Dispatch,
  type ActionCreator,
  type Action,
} from 'redux';

import type * as features from 'features';

import {
  type BackendProjects,
  type BackendParams,
  type CreateFundraisingParams,
  type FundraisingData,
  type Config,
  type UserAndProtocolParams,
  type Fundraising,
} from './';

type OnError = (error: string) => void;

type ConnectWallet = (
  onSuccess: () => void,
) => (onError: OnError) => () => void;

type CreateFundraising = (
  onSuccess: (fundraisingData: Fundraising) => void,
) => (
  onError: OnError,
) => (
  fixedProtocol: string,
) => (createFundraisingParams: CreateFundraisingParams) => () => void;

type Donate = (
  onSuccess: () => void,
) => (
  onError: OnError,
) => (
  fixedProtocol: string,
) => (fundraisingData: FundraisingData) => (amount: number) => () => void;

type GetFundraisings = (
  onSuccess: (projects: BackendProjects) => void,
) => (onError: OnError) => (fixedProtocol: string) => () => void;

type GetAppInfo = (
  onSuccess: (params: UserAndProtocolParams) => void,
) => (onError: OnError) => (fixedProtocol: string) => () => void;

type StartProtocol = (
  onSuccess: (params: BackendParams) => void,
) => (onError: OnError) => (config: Config) => () => void;

type UpdateProtocol = (
  onSuccess: (config: Config) => void,
) => (
  onError: OnError,
) => (fixedProtocol: string) => (config: Config) => () => void;

type ReceiveFunds = (
  onSuccess: (something) => void,
) => (
  onError: OnError,
) => (protocol: string) => (fundraisingData: FundraisingData) => () => void;
declare global {
  interface Window {
    offchain: {
      closeProtocol: any;
      connectWallet: ConnectWallet;
      createFundraising: CreateFundraising;
      donate: Donate;
      getAllFundraisings: GetFundraisings;
      getAppInfo: GetAppInfo;
      getUserRelatedFundraisings: GetFundraisings;
      startProtocol: StartProtocol;
      updateProtocol: UpdateProtocol;
      receiveFunds: ReceiveFunds;
    };
    cardano: {
      nami: any;
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
  protocol: features.protocol.types.ReduxState;
  fundraising: features.fundraising.types.ReduxState;
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
