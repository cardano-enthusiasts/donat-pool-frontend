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
  createFundraising: makeCommunicationReducer<
    A.CreateFundraising,
    A.CreateFundraisingSuccess,
    A.CreateFundraisingFail
  >(
    'INFO:CREATE_FUNDRAISING',
    'INFO:CREATE_FUNDRAISING_SUCCESS',
    'INFO:CREATE_FUNDRAISING_FAIL',
    initialState.communication.createFundraising
  ),
  donate: makeCommunicationReducer<A.Donate, A.DonateSuccess, A.DonateFail>(
    'INFO:DONATE',
    'INFO:DONATE_SUCCESS',
    'INFO:DONATE_FAIL',
    initialState.communication.donate
  ),
  receiveFunds: makeCommunicationReducer<
    A.ReceiveFunds,
    A.ReceiveFundsSuccess,
    A.ReceiveFundsFail
  >(
    'INFO:RECEIVE_FUNDS',
    'INFO:RECEIVE_FUNDS_SUCCESS',
    'INFO:RECEIVE_FUNDS_FAIL',
    initialState.communication.receiveFunds
  ),
  updateProtocol: makeCommunicationReducer<
    A.UpdateProtocol,
    A.UpdateProtocolSuccess,
    A.UpdateProtocolFail
  >(
    'INFO:UPDATE_PROTOCOL',
    'INFO:UPDATE_PROTOCOL_SUCCESS',
    'INFO:UPDATE_PROTOCOL_FAIL',
    initialState.communication.updateProtocol
  ),
  getProtocolInfo: makeCommunicationReducer<
    A.GetProtocolInfo,
    A.GetProtocolInfoSuccess,
    A.GetProtocolInfoFail
  >(
    'INFO:GET_PROTOCOL_INFO',
    'INFO:GET_PROTOCOL_INFO_SUCCESS',
    'INFO:GET_PROTOCOL_INFO_FAIL',
    initialState.communication.getProtocolInfo
  ),
});

export { communication };
