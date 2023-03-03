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

export { setConfig, setConfigSuccess, setConfigFail };
