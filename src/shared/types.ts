import store from '@/redux/store';

type RequestStatus = 'default' | 'requesting' | 'success' | 'error';

interface FetchedFundraising {
  creator: string;
  deadline: { value: bigint };
  goal: { value: bigint };
  isCompleted: boolean;
  raisedAmt: { value: bigint };
  threadTokenCurrency: string;
  threadTokenName: string;
  title: string;
}

interface Fundraising {
  creator: string;
  deadline: string;
  goal: string;
  completed: boolean;
  raisedAmt: string;
  threadTokenCurrency: string;
  threadTokenName: string;
  title: string;
}

type RootState = ReturnType<typeof store.getState>;
type WalletCardanoKey = 'nami' | 'LodeWallet' | 'flint' | 'eternl';

export type { RequestStatus, FetchedFundraising, Fundraising, RootState, WalletCardanoKey };
