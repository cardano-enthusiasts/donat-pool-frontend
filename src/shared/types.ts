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
  isCompleted: boolean;
  raisedAmt: string;
  threadTokenCurrency: string;
  threadTokenName: string;
  title: string;
}

type RootState = ReturnType<typeof store.getState>;

export type { RequestStatus, FetchedFundraising, Fundraising, RootState };
