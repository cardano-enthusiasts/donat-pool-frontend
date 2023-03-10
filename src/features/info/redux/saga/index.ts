import { type SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import type * as A from '../../types/actions';
import {
  getUserProjects,
  getAllProjects,
  createFundraising,
  donate,
  receiveFunds,
  updateProtocol,
  getProtocolInfo,
} from '../actionCreators';

const getUserProjectsType: A.GetUserProjects['type'] = 'INFO:GET_USER_PROJECTS';
const getAllProjectsType: A.GetAllProjects['type'] = 'INFO:GET_ALL_PROJECTS';
const createFundraisingType: A.CreateFundraising['type'] =
  'INFO:CREATE_FUNDRAISING';
const donateType: A.Donate['type'] = 'INFO:DONATE';
const receiveFundsType: A.ReceiveFunds['type'] = 'INFO:RECEIVE_FUNDS';
const updateProtocolType: A.UpdateProtocol['type'] = 'INFO:UPDATE_PROTOCOL';
const getProtocolInfoType: A.GetProtocolInfo['type'] = 'INFO:GET_PROTOCOL_INFO';

function* rootSaga(): SagaIterator {
  yield all([takeLatest(getUserProjectsType, getUserProjects)]);
  yield all([takeLatest(getAllProjectsType, getAllProjects)]);
  yield all([takeLatest(createFundraisingType, createFundraising)]);
  yield all([takeLatest(donateType, donate)]);
  yield all([takeLatest(receiveFundsType, receiveFunds)]);
  yield all([takeLatest(updateProtocolType, updateProtocol)]);
  yield all([takeLatest(getProtocolInfoType, getProtocolInfo)]);
}

export { rootSaga };
