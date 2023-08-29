import store from '@/redux/store';

type RequestStatus = 'default' | 'requesting' | 'success' | 'error';
type WalletCardanoKey = 'nami' | 'LodeWallet' | 'flint' | 'eternl';
type RootState = ReturnType<typeof store.getState>;

interface FetchedDonatPool {
  title: string;
  creator: string;
  deadline: { value: bigint };
  goal: { value: bigint };
  raisedAmt: { value: bigint };
  threadTokenCurrency: string;
  threadTokenName: string;
  isCompleted: boolean;
}

interface DonatPool {
  title: string;
  creator: string;
  deadline: string;
  goal: string;
  raisedAmt: string;
  threadTokenCurrency: string;
  threadTokenName: string;
  completed: boolean;
}

export type { RequestStatus, WalletCardanoKey, RootState, FetchedDonatPool, DonatPool };
