import { type ICommunication } from 'redux-make-communication';

interface ReduxState {
  communication: {
    create: ICommunication;
    donate: ICommunication;
    receiveFunds: ICommunication;
  };
  data: null;
}

export type { ReduxState };
