import { initialCommunicationField } from 'redux-make-communication';

import { type ReduxState } from '../types';

const initialState: ReduxState = {
  communication: {
    getUserFundraisings: initialCommunicationField,
    getAllFundraisings: initialCommunicationField,
    setWalletStatus: initialCommunicationField,
    getUserInfo: initialCommunicationField,
  },
  data: {
    allFundraisings: null,
    user: {
      fundraisings: null,
      isManager: false,
      address: null,
    },
    walletStatus: 'default',
  },
};

export { initialState };
