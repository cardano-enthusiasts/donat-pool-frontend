import { type ICommunication } from 'redux-make-communication';

import { type WalletStatus, type Fundraisings } from 'shared/types';

interface ReduxState {
  communication: {
    getUserFundraisings: ICommunication;
    getAllFundraisings: ICommunication;
    setWalletStatus: ICommunication;
  };
  data: {
    userFundraisings: Fundraisings | null;
    allFundraisings: Fundraisings | null;
    walletStatus: WalletStatus;
  };
}

export type { ReduxState };
