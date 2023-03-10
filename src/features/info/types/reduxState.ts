import { type ICommunication } from 'redux-make-communication';

import { type Fundraisings, type Config } from 'shared/types';

interface ReduxState {
  communication: {
    getUserFundraisings: ICommunication;
    getAllFundraisings: ICommunication;
    createFundraising: ICommunication;
    donate: ICommunication;
    receiveFunds: ICommunication;
    updateProtocol: ICommunication;
    getProtocolInfo: ICommunication;
  };
  data: {
    config: Config;
    userFundraisings: Fundraisings | null;
    allFundraisings: Fundraisings | null;
  };
}

export type { ReduxState };
