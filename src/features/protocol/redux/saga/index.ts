import { type SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import type * as A from '../../types/actions';
import { update, getInfo } from '../actionCreators';

const updateType: A.Update['type'] = 'PROTOCOL:UPDATE';
const getInfoType: A.GetInfo['type'] = 'PROTOCOL:GET_INFO';

function* rootSaga(): SagaIterator {
  yield all([takeLatest(updateType, update)]);
  yield all([takeLatest(getInfoType, getInfo)]);
}

export { rootSaga };
