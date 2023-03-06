import { type ICommunication } from 'redux-make-communication';

import { type UserProjects, type Config } from 'shared/types';

interface ReduxState {
  communication: {
    setConfig: ICommunication;
    setUserProjects: ICommunication;
  };
  data: { config: Config; userProjects: UserProjects | null };
}

export type { ReduxState };
