import {
  type IPlainFailAction,
  type IPlainAction,
  type IAction,
} from 'redux-make-communication';

import { type Config } from 'shared/types';

type SetConfig = IPlainAction<'INFO:SET_CONFIG'>;
type SetConfigSuccess = IAction<'INFO:SET_CONFIG_SUCCESS', Config>;
type SetConfigFail = IPlainFailAction<'INFO:SET_CONFIG_FAIL'>;

type Action = SetConfig | SetConfigSuccess | SetConfigFail;

export type { Action, SetConfig, SetConfigSuccess, SetConfigFail };
