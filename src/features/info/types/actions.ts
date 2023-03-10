import {
  type IPlainFailAction,
  type IPlainAction,
  type IAction,
} from 'redux-make-communication';

import { type Projects, type Config } from 'shared/types';

type GetConfig = IPlainAction<'INFO:GET_CONFIG'>;
type GetConfigSuccess = IAction<'INFO:GET_CONFIG_SUCCESS', Config>;
type GetConfigFail = IPlainFailAction<'INFO:GET_CONFIG_FAIL'>;

type GetUserProjects = IPlainAction<'INFO:GET_USER_PROJECTS'>;
type GetUserProjectsSuccess = IAction<
  'INFO:GET_USER_PROJECTS_SUCCESS',
  Projects
>;
type GetUserProjectsFail = IPlainFailAction<'INFO:GET_USER_PROJECTS_FAIL'>;

type GetAllProjects = IPlainAction<'INFO:GET_ALL_PROJECTS'>;
type GetAllProjectsSuccess = IAction<'INFO:GET_ALL_PROJECTS_SUCCESS', Projects>;
type GetAllProjectsFail = IPlainFailAction<'INFO:GET_ALL_PROJECTS_FAIL'>;

type Action =
  | GetConfig
  | GetConfigSuccess
  | GetConfigFail
  | GetUserProjects
  | GetUserProjectsSuccess
  | GetUserProjectsFail
  | GetAllProjects
  | GetAllProjectsSuccess
  | GetAllProjectsFail;

export type {
  Action,
  GetConfig,
  GetConfigSuccess,
  GetConfigFail,
  GetUserProjects,
  GetUserProjectsSuccess,
  GetUserProjectsFail,
  GetAllProjects,
  GetAllProjectsSuccess,
  GetAllProjectsFail,
};
