import { initialCommunicationField } from 'redux-make-communication';

import { type ReduxState } from '../types';

const initialState: ReduxState = {
  communication: {
    getUserFundraisings: initialCommunicationField,
    getAllFundraisings: initialCommunicationField,
    createFundraising: initialCommunicationField,
    donate: initialCommunicationField,
    receiveFunds: initialCommunicationField,
    updateProtocol: initialCommunicationField,
    getProtocolInfo: initialCommunicationField,
  },
  data: {
    config: {
      minAmountParam: 0,
      maxAmountParam: 0,
      minDurationParam: 0,
      maxDurationParam: 0,
      protocolFeeParam: 0,
    },
    userFundraisings: null,
    allFundraisings: null,
  },
};

export { initialState };
