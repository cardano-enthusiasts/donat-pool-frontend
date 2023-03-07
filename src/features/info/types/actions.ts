import {
  type IPlainFailAction,
  type IPlainAction,
  type IAction,
} from 'redux-make-communication';

import { type Projects, type Config } from 'shared/types';

type SetConfig = IPlainAction<'INFO:SET_CONFIG'>;
type SetConfigSuccess = IAction<'INFO:SET_CONFIG_SUCCESS', Config>;
type SetConfigFail = IPlainFailAction<'INFO:SET_CONFIG_FAIL'>;

type SetUserProjects = IPlainAction<'INFO:SET_USER_PROJECTS'>;
type SetUserProjectsSuccess = IAction<
  'INFO:SET_USER_PROJECTS_SUCCESS',
  Projects
>;
type SetUserProjectsFail = IPlainFailAction<'INFO:SET_USER_PROJECTS_FAIL'>;

type SetAllProjects = IPlainAction<'INFO:SET_ALL_PROJECTS'>;
type SetAllProjectsSuccess = IAction<'INFO:SET_ALL_PROJECTS_SUCCESS', Projects>;
type SetAllProjectsFail = IPlainFailAction<'INFO:SET_ALL_PROJECTS_FAIL'>;

type Action =
  | SetConfig
  | SetConfigSuccess
  | SetConfigFail
  | SetUserProjects
  | SetUserProjectsSuccess
  | SetUserProjectsFail
  | SetAllProjects
  | SetAllProjectsSuccess
  | SetAllProjectsFail;

export type {
  Action,
  SetConfig,
  SetConfigSuccess,
  SetConfigFail,
  SetUserProjects,
  SetUserProjectsSuccess,
  SetUserProjectsFail,
  SetAllProjects,
  SetAllProjectsSuccess,
  SetAllProjectsFail,
};
