export interface PropsWithChildren {
  children: React.ReactNode;
}

export type RequestStatus = 'default' | 'requesting' | 'success' | 'error';

export interface FetchedFundraising {
  creator: string;
  deadline: { value: bigint };
  goal: { value: bigint };
  isCompleted: boolean;
  raisedAmt: { value: bigint };
  threadTokenCurrency: string;
  threadTokenName: string;
  title: string;
}

export interface Fundraising {
  creator: string;
  deadline: string;
  goal: string;
  isCompleted: boolean;
  raisedAmt: string;
  threadTokenCurrency: string;
  threadTokenName: string;
  title: string;
}
