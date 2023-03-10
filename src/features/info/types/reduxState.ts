import { type ICommunication } from 'redux-make-communication';

import { type Projects, type Config } from 'shared/types';

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
    userFundraisings: Projects | null;
    allFundraisings: Projects | null;
  };
}

export type { ReduxState };
