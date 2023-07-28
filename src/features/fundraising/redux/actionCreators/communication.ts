import { makeCommunicationActionCreators } from 'redux-make-communication';

import type * as A from '../../types/actions';

const {
  execute: create,
  success: createSuccess,
  fail: createFail,
} = makeCommunicationActionCreators<A.Create, A.CreateSuccess, A.CreateFail>(
  'FUNDRAISING:CREATE',
  'FUNDRAISING:CREATE_SUCCESS',
  'FUNDRAISING:CREATE_FAIL',
);

const {
  execute: donate,
  success: donateSuccess,
  fail: donateFail,
} = makeCommunicationActionCreators<A.Donate, A.DonateSuccess, A.DonateFail>(
  'FUNDRAISING:DONATE',
  'FUNDRAISING:DONATE_SUCCESS',
  'FUNDRAISING:DONATE_FAIL',
);

const {
  execute: receiveFunds,
  success: receiveFundsSuccess,
  fail: receiveFundsFail,
} = makeCommunicationActionCreators<
  A.ReceiveFunds,
  A.ReceiveFundsSuccess,
  A.ReceiveFundsFail
>(
  'FUNDRAISING:RECEIVE_FUNDS',
  'FUNDRAISING:RECEIVE_FUNDS_SUCCESS',
  'FUNDRAISING:RECEIVE_FUNDS_FAIL',
);

export {
  create,
  createSuccess,
  createFail,
  donate,
  donateSuccess,
  donateFail,
  receiveFunds,
  receiveFundsSuccess,
  receiveFundsFail,
};
