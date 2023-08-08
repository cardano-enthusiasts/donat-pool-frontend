type RequestStatus = 'default' | 'requesting' | 'success' | 'error';

interface Fundraising {
  creator: string;
  deadline: { value: bigint };
  title: string;
  goal: { value: bigint };
  raisedAmt: { value: bigint };
  threadTokenCurrency: string;
  threadTokenName: string;
  isCompleted: boolean;
}

export type { RequestStatus, Fundraising };
