import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'redux-make-communication';

import { type ReduxState } from 'features/info/types';

import type * as A from '../../types/actions';
import { initialState } from '../initialState';

const communication = combineReducers<ReduxState['communication']>({
  getConfig: makeCommunicationReducer<
    A.GetConfig,
    A.GetConfigSuccess,
    A.GetConfigFail
  >(
    'INFO:GET_CONFIG',
    'INFO:GET_CONFIG_SUCCESS',
    'INFO:GET_CONFIG_FAIL',
    initialState.communication.getConfig
  ),
  getUserProjects: makeCommunicationReducer<
    A.GetUserProjects,
    A.GetUserProjectsSuccess,
    A.GetUserProjectsFail
  >(
    'INFO:GET_USER_PROJECTS',
    'INFO:GET_USER_PROJECTS_SUCCESS',
    'INFO:GET_USER_PROJECTS_FAIL',
    initialState.communication.getUserProjects
  ),
  getAllProjects: makeCommunicationReducer<
    A.GetAllProjects,
    A.GetAllProjectsSuccess,
    A.GetAllProjectsFail
  >(
    'INFO:GET_ALL_PROJECTS',
    'INFO:GET_ALL_PROJECTS_SUCCESS',
    'INFO:GET_ALL_PROJECTS_FAIL',
    initialState.communication.getAllProjects
  ),
});

export { communication };
