import { makeCommunicationActionCreators } from 'redux-make-communication';

import type * as A from '../../types/actions';

const {
  execute: getUserProjects,
  success: getUserProjectsSuccess,
  fail: getUserProjectsFail,
} = makeCommunicationActionCreators<
  A.GetUserProjects,
  A.GetUserProjectsSuccess,
  A.GetUserProjectsFail
>(
  'INFO:GET_USER_PROJECTS',
  'INFO:GET_USER_PROJECTS_SUCCESS',
  'INFO:GET_USER_PROJECTS_FAIL'
);

const {
  execute: getAllProjects,
  success: getAllProjectsSuccess,
  fail: getAllProjectsFail,
} = makeCommunicationActionCreators<
  A.GetAllProjects,
  A.GetAllProjectsSuccess,
  A.GetAllProjectsFail
>(
  'INFO:GET_ALL_PROJECTS',
  'INFO:GET_ALL_PROJECTS_SUCCESS',
  'INFO:GET_ALL_PROJECTS_FAIL'
);

const {
  execute: createFundraising,
  success: createFundraisingSuccess,
  fail: createFundraisingFail,
} = makeCommunicationActionCreators<
  A.CreateFundraising,
  A.CreateFundraisingSuccess,
  A.CreateFundraisingFail
>(
  'INFO:CREATE_FUNDRAISING',
  'INFO:CREATE_FUNDRAISING_SUCCESS',
  'INFO:CREATE_FUNDRAISING_FAIL'
);

const {
  execute: donate,
  success: donateSuccess,
  fail: donateFail,
} = makeCommunicationActionCreators<A.Donate, A.DonateSuccess, A.DonateFail>(
  'INFO:DONATE',
  'INFO:DONATE_SUCCESS',
  'INFO:DONATE_FAIL'
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
  'INFO:RECEIVE_FUNDS',
  'INFO:RECEIVE_FUNDS_SUCCESS',
  'INFO:RECEIVE_FUNDS_FAIL'
);

const {
  execute: updateProtocol,
  success: updateProtocolSuccess,
  fail: updateProtocolFail,
} = makeCommunicationActionCreators<
  A.UpdateProtocol,
  A.UpdateProtocolSuccess,
  A.UpdateProtocolFail
>(
  'INFO:UPDATE_PROTOCOL',
  'INFO:UPDATE_PROTOCOL_SUCCESS',
  'INFO:UPDATE_PROTOCOL_FAIL'
);

const {
  execute: getProtocolInfo,
  success: getProtocolInfoSuccess,
  fail: getProtocolInfoFail,
} = makeCommunicationActionCreators<
  A.GetProtocolInfo,
  A.GetProtocolInfoSuccess,
  A.GetProtocolInfoFail
>(
  'INFO:GET_PROTOCOL_INFO',
  'INFO:GET_PROTOCOL_INFO_SUCCESS',
  'INFO:GET_PROTOCOL_INFO_FAIL'
);

export {
  getUserProjects,
  getUserProjectsSuccess,
  getUserProjectsFail,
  getAllProjects,
  getAllProjectsSuccess,
  getAllProjectsFail,
  createFundraising,
  createFundraisingSuccess,
  createFundraisingFail,
  donate,
  donateSuccess,
  donateFail,
  receiveFunds,
  receiveFundsSuccess,
  receiveFundsFail,
  updateProtocol,
  updateProtocolSuccess,
  updateProtocolFail,
  getProtocolInfo,
  getProtocolInfoSuccess,
  getProtocolInfoFail,
};
