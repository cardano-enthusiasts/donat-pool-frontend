import { type Status, type WalletStatus } from 'shared/types';

interface State {
  value: WalletStatus;
  status: Status;
}

export type { State };
