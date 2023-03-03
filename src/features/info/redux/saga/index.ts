import { type SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import type * as A from '../../types/actions';
import { setConfig } from '../actionCreators';

const setConfigType: A.SetConfig['type'] = 'INFO:SET_CONFIG';

function* rootSaga(): SagaIterator {
  yield all([takeLatest(setConfigType, setConfig)]);
}

export { rootSaga };
