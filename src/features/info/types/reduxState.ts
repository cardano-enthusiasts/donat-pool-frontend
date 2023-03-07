import { type ICommunication } from 'redux-make-communication';

import { type Projects, type Config } from 'shared/types';

interface ReduxState {
  communication: {
    setConfig: ICommunication;
    setUserProjects: ICommunication;
    setAllProjects: ICommunication;
  };
  data: {
    config: Config;
    userProjects: Projects | null;
    allProjects: Projects | null;
  };
}

export type { ReduxState };
