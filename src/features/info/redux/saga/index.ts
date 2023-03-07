import { type SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import type * as A from '../../types/actions';
import { setConfig, setUserProjects, setAllProjects } from '../actionCreators';

const setConfigType: A.SetConfig['type'] = 'INFO:SET_CONFIG';
const setUserProjectsType: A.SetUserProjects['type'] = 'INFO:SET_USER_PROJECTS';
const setAllProjectsType: A.SetAllProjects['type'] = 'INFO:SET_ALL_PROJECTS';

function* rootSaga(): SagaIterator {
  yield all([takeLatest(setConfigType, setConfig)]);
  yield all([takeLatest(setUserProjectsType, setUserProjects)]);
  yield all([takeLatest(setAllProjectsType, setAllProjects)]);
}

export { rootSaga };
