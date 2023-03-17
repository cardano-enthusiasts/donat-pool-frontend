import { initialCommunicationField } from 'redux-make-communication';

import { type ReduxState } from '../types';

const initialState: ReduxState = {
  communication: {
    update: initialCommunicationField,
    getInfo: initialCommunicationField,
  },
  data: {
    config: {
      minAmountParam: 0,
      maxAmountParam: 0,
      minDurationParam: 0,
      maxDurationParam: 0,
      protocolFeeParam: 0,
    },
  },
};

export { initialState };
