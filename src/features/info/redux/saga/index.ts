import { type SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import type * as A from '../../types/actions';
import { getConfig, getUserProjects, getAllProjects } from '../actionCreators';

const getConfigType: A.GetConfig['type'] = 'INFO:GET_CONFIG';
const getUserProjectsType: A.GetUserProjects['type'] = 'INFO:GET_USER_PROJECTS';
const getAllProjectsType: A.GetAllProjects['type'] = 'INFO:GET_ALL_PROJECTS';

function* rootSaga(): SagaIterator {
  yield all([takeLatest(getConfigType, getConfig)]);
  yield all([takeLatest(getUserProjectsType, getUserProjects)]);
  yield all([takeLatest(getAllProjectsType, getAllProjects)]);
}

export { rootSaga };
