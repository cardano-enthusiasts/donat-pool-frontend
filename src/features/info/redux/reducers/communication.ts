import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'redux-make-communication';

import { type ReduxState } from 'features/info/types';

import type * as A from '../../types/actions';
import { initialState } from '../initialState';

const communication = combineReducers<ReduxState['communication']>({
  getUserFundraisings: makeCommunicationReducer<
    A.GetUserFundraisings,
    A.GetUserFundraisingsSuccess,
    A.GetUserFundraisingsFail
  >(
    'INFO:GET_USER_FUNDRAISINGS',
    'INFO:GET_USER_FUNDRAISINGS_SUCCESS',
    'INFO:GET_USER_FUNDRAISINGS_FAIL',
    initialState.communication.getUserFundraisings
  ),
  getAllFundraisings: makeCommunicationReducer<
    A.GetAllFundraisings,
    A.GetAllFundraisingsSuccess,
    A.GetAllFundraisingsFail
  >(
    'INFO:GET_ALL_FUNDRAISINGS',
    'INFO:GET_ALL_FUNDRAISINGS_SUCCESS',
    'INFO:GET_ALL_FUNDRAISINGS_FAIL',
    initialState.communication.getAllFundraisings
  ),
});

export { communication };
