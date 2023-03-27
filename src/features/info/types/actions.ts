import {
  type IPlainFailAction,
  type IPlainAction,
  type IAction,
} from 'redux-make-communication';

import { type WalletStatus, type Fundraisings } from 'shared/types';

type GetUserFundraisings = IPlainAction<'INFO:GET_USER_FUNDRAISINGS'>;
type GetUserFundraisingsSuccess = IAction<
  'INFO:GET_USER_FUNDRAISINGS_SUCCESS',
  Fundraisings
>;
type GetUserFundraisingsFail =
  IPlainFailAction<'INFO:GET_USER_FUNDRAISINGS_FAIL'>;

type GetAllFundraisings = IPlainAction<'INFO:GET_ALL_FUNDRAISINGS'>;
type GetAllFundraisingsSuccess = IAction<
  'INFO:GET_ALL_FUNDRAISINGS_SUCCESS',
  Fundraisings
>;
type GetAllFundraisingsFail =
  IPlainFailAction<'INFO:GET_ALL_FUNDRAISINGS_FAIL'>;

type SetWalletStatus = IPlainAction<'INFO:SET_WALLET_STATUS'>;
type SetWalletStatusSuccess = IAction<
  'INFO:SET_WALLET_STATUS_SUCCESS',
  WalletStatus
>;
type SetWalletStatusFail = IPlainFailAction<'INFO:SET_WALLET_STATUS_FAIL'>;

type Action =
  | GetUserFundraisings
  | GetUserFundraisingsSuccess
  | GetUserFundraisingsFail
  | GetAllFundraisings
  | GetAllFundraisingsSuccess
  | GetAllFundraisingsFail
  | SetWalletStatus
  | SetWalletStatusSuccess
  | SetWalletStatusFail;

export type {
  Action,
  GetUserFundraisings,
  GetUserFundraisingsSuccess,
  GetUserFundraisingsFail,
  GetAllFundraisings,
  GetAllFundraisingsSuccess,
  GetAllFundraisingsFail,
  SetWalletStatus,
  SetWalletStatusSuccess,
  SetWalletStatusFail,
};