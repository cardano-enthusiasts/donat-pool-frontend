import { type SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import type * as A from '../../types/actions';
import {
  getUserFundraisings,
  getAllFundraisings,
  createFundraising,
  donate,
  receiveFunds,
  updateProtocol,
  getProtocolInfo,
} from '../actionCreators';

const getUserFundraisingsType: A.GetUserFundraisings['type'] =
  'INFO:GET_USER_FUNDRAISINGS';
const getAllFundraisingsType: A.GetAllFundraisings['type'] =
  'INFO:GET_ALL_FUNDRAISINGS';
const createFundraisingType: A.CreateFundraising['type'] =
  'INFO:CREATE_FUNDRAISING';
const donateType: A.Donate['type'] = 'INFO:DONATE';
const receiveFundsType: A.ReceiveFunds['type'] = 'INFO:RECEIVE_FUNDS';
const updateProtocolType: A.UpdateProtocol['type'] = 'INFO:UPDATE_PROTOCOL';
const getProtocolInfoType: A.GetProtocolInfo['type'] = 'INFO:GET_PROTOCOL_INFO';

function* rootSaga(): SagaIterator {
  yield all([takeLatest(getUserFundraisingsType, getUserFundraisings)]);
  yield all([takeLatest(getAllFundraisingsType, getAllFundraisings)]);
  yield all([takeLatest(createFundraisingType, createFundraising)]);
  yield all([takeLatest(donateType, donate)]);
  yield all([takeLatest(receiveFundsType, receiveFunds)]);
  yield all([takeLatest(updateProtocolType, updateProtocol)]);
  yield all([takeLatest(getProtocolInfoType, getProtocolInfo)]);
}

export { rootSaga };
