import { initialCommunicationField } from 'redux-make-communication';

import { type ReduxState } from '../types';

const initialState: ReduxState = {
  communication: {
    create: initialCommunicationField,
    donate: initialCommunicationField,
    receiveFunds: initialCommunicationField,
  },
  data: null,
};

export { initialState };
