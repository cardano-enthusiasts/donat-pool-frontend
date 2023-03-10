import { makeCommunicationActionCreators } from 'redux-make-communication';

import type * as A from '../../types/actions';

const {
  execute: getConfig,
  success: getConfigSuccess,
  fail: getConfigFail,
} = makeCommunicationActionCreators<
  A.GetConfig,
  A.GetConfigSuccess,
  A.GetConfigFail
>('INFO:GET_CONFIG', 'INFO:GET_CONFIG_SUCCESS', 'INFO:GET_CONFIG_FAIL');

const {
  execute: getUserProjects,
  success: getUserProjectsSuccess,
  fail: getUserProjectsFail,
} = makeCommunicationActionCreators<
  A.GetUserProjects,
  A.GetUserProjectsSuccess,
  A.GetUserProjectsFail
>(
  'INFO:GET_USER_PROJECTS',
  'INFO:GET_USER_PROJECTS_SUCCESS',
  'INFO:GET_USER_PROJECTS_FAIL'
);

const {
  execute: getAllProjects,
  success: getAllProjectsSuccess,
  fail: getAllProjectsFail,
} = makeCommunicationActionCreators<
  A.GetAllProjects,
  A.GetAllProjectsSuccess,
  A.GetAllProjectsFail
>(
  'INFO:GET_ALL_PROJECTS',
  'INFO:GET_ALL_PROJECTS_SUCCESS',
  'INFO:GET_ALL_PROJECTS_FAIL'
);

export {
  getConfig,
  getConfigSuccess,
  getConfigFail,
  getUserProjects,
  getUserProjectsSuccess,
  getUserProjectsFail,
  getAllProjects,
  getAllProjectsSuccess,
  getAllProjectsFail,
};
