import { type RequestStatus, type WalletMode } from 'shared/types';

interface State {
  mode: WalletMode;
  status: RequestStatus;
}

export type { State };
