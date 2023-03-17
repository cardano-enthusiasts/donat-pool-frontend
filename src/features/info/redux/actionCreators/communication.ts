import { makeCommunicationActionCreators } from 'redux-make-communication';

import type * as A from '../../types/actions';

const {
  execute: getUserFundraisings,
  success: getUserFundraisingsSuccess,
  fail: getUserFundraisingsFail,
} = makeCommunicationActionCreators<
  A.GetUserFundraisings,
  A.GetUserFundraisingsSuccess,
  A.GetUserFundraisingsFail
>(
  'INFO:GET_USER_FUNDRAISINGS',
  'INFO:GET_USER_FUNDRAISINGS_SUCCESS',
  'INFO:GET_USER_FUNDRAISINGS_FAIL'
);

const {
  execute: getAllFundraisings,
  success: getAllFundraisingsSuccess,
  fail: getAllFundraisingsFail,
} = makeCommunicationActionCreators<
  A.GetAllFundraisings,
  A.GetAllFundraisingsSuccess,
  A.GetAllFundraisingsFail
>(
  'INFO:GET_ALL_FUNDRAISINGS',
  'INFO:GET_ALL_FUNDRAISINGS_SUCCESS',
  'INFO:GET_ALL_FUNDRAISINGS_FAIL'
);

export {
  getUserFundraisings,
  getUserFundraisingsSuccess,
  getUserFundraisingsFail,
  getAllFundraisings,
  getAllFundraisingsSuccess,
  getAllFundraisingsFail,
};
