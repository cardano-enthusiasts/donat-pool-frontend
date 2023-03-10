import {
  type IPlainFailAction,
  type IPlainAction,
  type IAction,
} from 'redux-make-communication';

import { type Projects, type Config } from 'shared/types';

type GetUserProjects = IPlainAction<'INFO:GET_USER_PROJECTS'>;
type GetUserProjectsSuccess = IAction<
  'INFO:GET_USER_PROJECTS_SUCCESS',
  Projects
>;
type GetUserProjectsFail = IPlainFailAction<'INFO:GET_USER_PROJECTS_FAIL'>;

type GetAllProjects = IPlainAction<'INFO:GET_ALL_PROJECTS'>;
type GetAllProjectsSuccess = IAction<'INFO:GET_ALL_PROJECTS_SUCCESS', Projects>;
type GetAllProjectsFail = IPlainFailAction<'INFO:GET_ALL_PROJECTS_FAIL'>;

type CreateFundraising = IPlainAction<'INFO:CREATE_FUNDRAISING'>;
type CreateFundraisingSuccess = IPlainAction<'INFO:CREATE_FUNDRAISING_SUCCESS'>;
type CreateFundraisingFail = IPlainFailAction<'INFO:CREATE_FUNDRAISING_FAIL'>;

type Donate = IPlainAction<'INFO:DONATE'>;
type DonateSuccess = IPlainAction<'INFO:DONATE_SUCCESS'>;
type DonateFail = IPlainFailAction<'INFO:DONATE_FAIL'>;

type ReceiveFunds = IPlainAction<'INFO:RECEIVE_FUNDS'>;
type ReceiveFundsSuccess = IPlainAction<'INFO:RECEIVE_FUNDS_SUCCESS'>;
type ReceiveFundsFail = IPlainFailAction<'INFO:RECEIVE_FUNDS_FAIL'>;

type UpdateProtocol = IPlainAction<'INFO:UPDATE_PROTOCOL'>;
type UpdateProtocolSuccess = IPlainAction<'INFO:UPDATE_PROTOCOL_SUCCESS'>;
type UpdateProtocolFail = IPlainFailAction<'INFO:UPDATE_PROTOCOL_FAIL'>;

type GetProtocolInfo = IPlainAction<'INFO:GET_PROTOCOL_INFO'>;
type GetProtocolInfoSuccess = IAction<'INFO:GET_PROTOCOL_INFO_SUCCESS', Config>;
type GetProtocolInfoFail = IPlainFailAction<'INFO:GET_PROTOCOL_INFO_FAIL'>;

type Action =
  | GetUserProjects
  | GetUserProjectsSuccess
  | GetUserProjectsFail
  | GetAllProjects
  | GetAllProjectsSuccess
  | GetAllProjectsFail
  | CreateFundraising
  | CreateFundraisingSuccess
  | CreateFundraisingFail
  | Donate
  | DonateSuccess
  | DonateFail
  | ReceiveFunds
  | ReceiveFundsSuccess
  | ReceiveFundsFail
  | UpdateProtocol
  | UpdateProtocolSuccess
  | UpdateProtocolFail
  | GetProtocolInfo
  | GetProtocolInfoSuccess
  | GetProtocolInfoFail;

export type {
  Action,
  GetUserProjects,
  GetUserProjectsSuccess,
  GetUserProjectsFail,
  GetAllProjects,
  GetAllProjectsSuccess,
  GetAllProjectsFail,
  CreateFundraising,
  CreateFundraisingSuccess,
  CreateFundraisingFail,
  Donate,
  DonateSuccess,
  DonateFail,
  ReceiveFunds,
  ReceiveFundsSuccess,
  ReceiveFundsFail,
  UpdateProtocol,
  UpdateProtocolSuccess,
  UpdateProtocolFail,
  GetProtocolInfo,
  GetProtocolInfoSuccess,
  GetProtocolInfoFail,
};
