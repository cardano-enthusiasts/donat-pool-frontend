import { makeCommunicationActionCreators } from 'redux-make-communication';

import type * as A from '../../types/actions';

const {
  execute: update,
  success: updateSuccess,
  fail: updateFail,
} = makeCommunicationActionCreators<A.Update, A.UpdateSuccess, A.UpdateFail>(
  'PROTOCOL:UPDATE',
  'PROTOCOL:UPDATE_SUCCESS',
  'PROTOCOL:UPDATE_FAIL'
);

const {
  execute: getInfo,
  success: getInfoSuccess,
  fail: getInfoFail,
} = makeCommunicationActionCreators<A.GetInfo, A.GetInfoSuccess, A.GetInfoFail>(
  'PROTOCOL:GET_INFO',
  'PROTOCOL:GET_INFO_SUCCESS',
  'PROTOCOL:GET_INFO_FAIL'
);

export {
  update,
  updateSuccess,
  updateFail,
  getInfo,
  getInfoSuccess,
  getInfoFail,
};
