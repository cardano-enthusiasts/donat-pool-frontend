import { initialCommunicationField } from 'redux-make-communication';

import { type ReduxState } from '../types';

const initialState: ReduxState = {
  communication: {
    setConfig: initialCommunicationField,
    setUserProjects: initialCommunicationField,
  },
  data: {
    config: {
      minAmountParam: 0,
      maxAmountParam: 0,
      minDurationParam: 0,
      maxDurationParam: 0,
      protocolFeeParam: 0,
    },
    userProjects: null,
  },
};

export { initialState };
