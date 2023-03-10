import { type ICommunication } from 'redux-make-communication';

import { type Projects, type Config } from 'shared/types';

interface ReduxState {
  communication: {
    getUserProjects: ICommunication;
    getAllProjects: ICommunication;
    createFundraising: ICommunication;
    donate: ICommunication;
    receiveFunds: ICommunication;
    updateProtocol: ICommunication;
    getProtocolInfo: ICommunication;
  };
  data: {
    config: Config;
    userProjects: Projects | null;
    allProjects: Projects | null;
  };
}

export type { ReduxState };
