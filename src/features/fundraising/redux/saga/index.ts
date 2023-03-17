import { type SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import type * as A from '../../types/actions';
import { create, donate, receiveFunds } from '../actionCreators';

const createType: A.Create['type'] = 'FUNDRAISING:CREATE';
const donateType: A.Donate['type'] = 'FUNDRAISING:DONATE';
const receiveFundsType: A.ReceiveFunds['type'] = 'FUNDRAISING:RECEIVE_FUNDS';

function* rootSaga(): SagaIterator {
  yield all([takeLatest(createType, create)]);
  yield all([takeLatest(donateType, donate)]);
  yield all([takeLatest(receiveFundsType, receiveFunds)]);
}

export { rootSaga };
