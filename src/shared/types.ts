type RequestStatus = 'default' | 'requesting' | 'success' | 'error';
type WalletCardanoKey = 'nami' | 'LodeWallet' | 'flint' | 'eternl';

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

type CardanoKey = 'nami' | 'LodeWallet' | 'flint' | 'eternl';

export type { RequestStatus, WalletCardanoKey, FetchedDonatPool, DonatPool, CardanoKey };
