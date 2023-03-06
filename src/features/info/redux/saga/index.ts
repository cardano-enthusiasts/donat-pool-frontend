import { type SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import type * as A from '../../types/actions';
import { setConfig, setUserProjects } from '../actionCreators';

const setConfigType: A.SetConfig['type'] = 'INFO:SET_CONFIG';
const setUserProjectsType: A.SetUserProjects['type'] = 'INFO:SET_USER_PROJECTS';

function* rootSaga(): SagaIterator {
  yield all([takeLatest(setConfigType, setConfig)]);
  yield all([takeLatest(setUserProjectsType, setUserProjects)]);
}

export { rootSaga };
