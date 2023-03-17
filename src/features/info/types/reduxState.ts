import { type ICommunication } from 'redux-make-communication';

import { type Fundraisings } from 'shared/types';

interface ReduxState {
  communication: {
    getUserFundraisings: ICommunication;
    getAllFundraisings: ICommunication;
  };
  data: {
    userFundraisings: Fundraisings | null;
    allFundraisings: Fundraisings | null;
  };
}

export type { ReduxState };
