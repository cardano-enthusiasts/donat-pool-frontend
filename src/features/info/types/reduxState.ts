import { type ICommunication } from 'redux-make-communication';

import { type WalletStatus, type Fundraisings } from 'shared/types';

interface ReduxState {
  communication: {
    getUserFundraisings: ICommunication;
    getAllFundraisings: ICommunication;
    setWalletStatus: ICommunication;
    getUserInfo: ICommunication;
  };
  data: {
    user: {
      fundraisings: Fundraisings | null;
      isManager: boolean | null;
      address: string | null;
    };
    allFundraisings: Fundraisings | null;
    walletStatus: WalletStatus;
  };
}

export type { ReduxState };
