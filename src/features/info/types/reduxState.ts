import { type ICommunication } from 'redux-make-communication';

import { type Config } from 'shared/types';

interface ReduxState {
  communication: {
    setConfig: ICommunication;
  };
  data: { config: Config };
}

export type { ReduxState };
