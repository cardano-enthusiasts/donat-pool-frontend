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

interface CreateDonatPoolParams {
  title: string;
  amount: number;
  duration: {
    days: number;
    hours: number;
    minutes: number;
  };
}

interface SubItem {
  id: string;
  title: string;
}

interface Item {
  subItems: SubItem[];
  id: string;
}

interface RoadmapText {
  phases: { title: string; items: (SubItem | Item)[] }[];
}

interface Protocol {
  protocolCurrency: string;
  protocolTokenName: string;
}

export type {
  RequestStatus,
  WalletCardanoKey,
  FetchedDonatPool,
  DonatPool,
  CreateDonatPoolParams,
  RoadmapText,
  Item,
  SubItem,
  Protocol,
};
