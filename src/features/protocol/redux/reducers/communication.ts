import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'redux-make-communication';

import { type ReduxState } from '../../types';
import type * as A from '../../types/actions';
import { initialState } from '../initialState';

const communication = combineReducers<ReduxState['communication']>({
  update: makeCommunicationReducer<A.Update, A.UpdateSuccess, A.UpdateFail>(
    'PROTOCOL:UPDATE',
    'PROTOCOL:UPDATE_SUCCESS',
    'PROTOCOL:UPDATE_FAIL',
    initialState.communication.update,
  ),
  getInfo: makeCommunicationReducer<A.GetInfo, A.GetInfoSuccess, A.GetInfoFail>(
    'PROTOCOL:GET_INFO',
    'PROTOCOL:GET_INFO_SUCCESS',
    'PROTOCOL:GET_INFO_FAIL',
    initialState.communication.getInfo,
  ),
});

export { communication };
