import { initialCommunicationField } from 'redux-make-communication';

import { type ReduxState } from '../types';

const initialState: ReduxState = {
  communication: {
    getUserFundraisings: initialCommunicationField,
    getAllFundraisings: initialCommunicationField,
    setWalletStatus: initialCommunicationField,
  },
  data: {
    userFundraisings: null,
    allFundraisings: null,
    walletStatus: 'default',
  },
};

export { initialState };
