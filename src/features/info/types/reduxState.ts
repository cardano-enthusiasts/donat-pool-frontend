import { type ICommunication } from 'redux-make-communication';

import { type Projects, type Config } from 'shared/types';

interface ReduxState {
  communication: {
    getConfig: ICommunication;
    getUserProjects: ICommunication;
    getAllProjects: ICommunication;
  };
  data: {
    config: Config;
    userProjects: Projects | null;
    allProjects: Projects | null;
  };
}

export type { ReduxState };
