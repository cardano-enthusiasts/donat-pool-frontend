import {
  type IPlainFailAction,
  type IPlainAction,
} from 'redux-make-communication';

type Create = IPlainAction<'FUNDRAISING:CREATE'>;
type CreateSuccess = IPlainAction<'FUNDRAISING:CREATE_SUCCESS'>;
type CreateFail = IPlainFailAction<'FUNDRAISING:CREATE_FAIL'>;

type Donate = IPlainAction<'FUNDRAISING:DONATE'>;
type DonateSuccess = IPlainAction<'FUNDRAISING:DONATE_SUCCESS'>;
type DonateFail = IPlainFailAction<'FUNDRAISING:DONATE_FAIL'>;

type ReceiveFunds = IPlainAction<'FUNDRAISING:RECEIVE_FUNDS'>;
type ReceiveFundsSuccess = IPlainAction<'FUNDRAISING:RECEIVE_FUNDS_SUCCESS'>;
type ReceiveFundsFail = IPlainFailAction<'FUNDRAISING:RECEIVE_FUNDS_FAIL'>;

type Action =
  | Create
  | CreateSuccess
  | CreateFail
  | Donate
  | DonateSuccess
  | DonateFail
  | ReceiveFunds
  | ReceiveFundsSuccess
  | ReceiveFundsFail;

export type {
  Action,
  Create,
  CreateSuccess,
  CreateFail,
  Donate,
  DonateSuccess,
  DonateFail,
  ReceiveFunds,
  ReceiveFundsSuccess,
  ReceiveFundsFail,
};
