import {
  type IPlainFailAction,
  type IPlainAction,
  type IAction,
} from 'redux-make-communication';

import { type UserProjects, type Config } from 'shared/types';

type SetConfig = IPlainAction<'INFO:SET_CONFIG'>;
type SetConfigSuccess = IAction<'INFO:SET_CONFIG_SUCCESS', Config>;
type SetConfigFail = IPlainFailAction<'INFO:SET_CONFIG_FAIL'>;

type SetUserProjects = IPlainAction<'INFO:SET_USER_PROJECTS'>;
type SetUserProjectsSuccess = IAction<
  'INFO:SET_USER_PROJECTS_SUCCESS',
  UserProjects
>;
type SetUserProjectsFail = IPlainFailAction<'INFO:SET_USER_PROJECTS_FAIL'>;

type Action =
  | SetConfig
  | SetConfigSuccess
  | SetConfigFail
  | SetUserProjects
  | SetUserProjectsSuccess
  | SetUserProjectsFail;

export type {
  Action,
  SetConfig,
  SetConfigSuccess,
  SetConfigFail,
  SetUserProjects,
  SetUserProjectsSuccess,
  SetUserProjectsFail,
};
