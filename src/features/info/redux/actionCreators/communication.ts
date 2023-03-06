import { makeCommunicationActionCreators } from 'redux-make-communication';

import type * as A from '../../types/actions';

const {
  execute: setConfig,
  success: setConfigSuccess,
  fail: setConfigFail,
} = makeCommunicationActionCreators<
  A.SetConfig,
  A.SetConfigSuccess,
  A.SetConfigFail
>('INFO:SET_CONFIG', 'INFO:SET_CONFIG_SUCCESS', 'INFO:SET_CONFIG_FAIL');

const {
  execute: setUserProjects,
  success: setUserProjectsSuccess,
  fail: setUserProjectsFail,
} = makeCommunicationActionCreators<
  A.SetUserProjects,
  A.SetUserProjectsSuccess,
  A.SetUserProjectsFail
>(
  'INFO:SET_USER_PROJECTS',
  'INFO:SET_USER_PROJECTS_SUCCESS',
  'INFO:SET_USER_PROJECTS_FAIL'
);

export {
  setConfig,
  setConfigSuccess,
  setConfigFail,
  setUserProjects,
  setUserProjectsSuccess,
  setUserProjectsFail,
};
