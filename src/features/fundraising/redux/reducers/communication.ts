import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'redux-make-communication';

import { type ReduxState } from '../../types';
import type * as A from '../../types/actions';
import { initialState } from '../initialState';

const communication = combineReducers<ReduxState['communication']>({
  create: makeCommunicationReducer<A.Create, A.CreateSuccess, A.CreateFail>(
    'FUNDRAISING:CREATE',
    'FUNDRAISING:CREATE_SUCCESS',
    'FUNDRAISING:CREATE_FAIL',
    initialState.communication.create
  ),
  donate: makeCommunicationReducer<A.Donate, A.DonateSuccess, A.DonateFail>(
    'FUNDRAISING:DONATE',
    'FUNDRAISING:DONATE_SUCCESS',
    'FUNDRAISING:DONATE_FAIL',
    initialState.communication.donate
  ),
  receiveFunds: makeCommunicationReducer<
    A.ReceiveFunds,
    A.ReceiveFundsSuccess,
    A.ReceiveFundsFail
  >(
    'FUNDRAISING:RECEIVE_FUNDS',
    'FUNDRAISING:RECEIVE_FUNDS_SUCCESS',
    'FUNDRAISING:RECEIVE_FUNDS_FAIL',
    initialState.communication.receiveFunds
  ),
});

export { communication };
