import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'redux-make-communication';

import { type ReduxState } from 'features/info/types';

import type * as A from '../../types/actions';
import { initialState } from '../initialState';

const communication = combineReducers<ReduxState['communication']>({
  setConfig: makeCommunicationReducer<
    A.SetConfig,
    A.SetConfigSuccess,
    A.SetConfigFail
  >(
    'INFO:SET_CONFIG',
    'INFO:SET_CONFIG_SUCCESS',
    'INFO:SET_CONFIG_FAIL',
    initialState.communication.setConfig
  ),
  setUserProjects: makeCommunicationReducer<
    A.SetUserProjects,
    A.SetUserProjectsSuccess,
    A.SetUserProjectsFail
  >(
    'INFO:SET_USER_PROJECTS',
    'INFO:SET_USER_PROJECTS_SUCCESS',
    'INFO:SET_USER_PROJECTS_FAIL',
    initialState.communication.setUserProjects
  ),
});

export { communication };
