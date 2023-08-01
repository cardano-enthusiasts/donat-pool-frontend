import {
  type IPlainFailAction,
  type IPlainAction,
  type IAction,
} from 'redux-make-communication';

import { type Config } from '@/shared/types';

type Update = IPlainAction<'PROTOCOL:UPDATE'>;
type UpdateSuccess = IPlainAction<'PROTOCOL:UPDATE_SUCCESS'>;
type UpdateFail = IPlainFailAction<'PROTOCOL:UPDATE_FAIL'>;

type GetInfo = IPlainAction<'PROTOCOL:GET_INFO'>;
type GetInfoSuccess = IAction<'PROTOCOL:GET_INFO_SUCCESS', Config>;
type GetInfoFail = IPlainFailAction<'PROTOCOL:GET_INFO_FAIL'>;

type Action =
  | Update
  | UpdateSuccess
  | UpdateFail
  | GetInfo
  | GetInfoSuccess
  | GetInfoFail;

export type {
  Action,
  Update,
  UpdateSuccess,
  UpdateFail,
  GetInfo,
  GetInfoSuccess,
  GetInfoFail,
};
