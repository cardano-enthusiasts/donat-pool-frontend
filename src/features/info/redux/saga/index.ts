import { type SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import type * as A from '../../types/actions';
import { getUserFundraisings, getAllFundraisings } from '../actionCreators';

const getUserFundraisingsType: A.GetUserFundraisings['type'] =
  'INFO:GET_USER_FUNDRAISINGS';
const getAllFundraisingsType: A.GetAllFundraisings['type'] =
  'INFO:GET_ALL_FUNDRAISINGS';

function* rootSaga(): SagaIterator {
  yield all([takeLatest(getUserFundraisingsType, getUserFundraisings)]);
  yield all([takeLatest(getAllFundraisingsType, getAllFundraisings)]);
}

export { rootSaga };
