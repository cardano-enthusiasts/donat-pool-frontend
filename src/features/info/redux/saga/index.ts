import { type SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import type * as A from '../../types/actions';
import {
  getUserFundraisings,
  getAllFundraisings,
  setWalletStatus,
} from '../actionCreators';

const getUserFundraisingsType: A.GetUserFundraisings['type'] =
  'INFO:GET_USER_FUNDRAISINGS';
const getAllFundraisingsType: A.GetAllFundraisings['type'] =
  'INFO:GET_ALL_FUNDRAISINGS';
const setWalletStatusType: A.SetWalletStatus['type'] = 'INFO:SET_WALLET_STATUS';

function* rootSaga(): SagaIterator {
  yield all([takeLatest(getUserFundraisingsType, getUserFundraisings)]);
  yield all([takeLatest(getAllFundraisingsType, getAllFundraisings)]);
  yield all([takeLatest(setWalletStatusType, setWalletStatus)]);
}

export { rootSaga };
