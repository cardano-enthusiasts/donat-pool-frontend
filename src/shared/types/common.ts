interface Config {
  minAmountParam: number;
  maxAmountParam: number;
  minDurationParam: number;
  maxDurationParam: number;
  protocolFeeParam: number;
}

interface Fundraising {
  creator: object;
  deadline: number;
  description: string;
  goal: number;
  raisedAmount: number;
  threadTokenCurrency: Uint8Array;
  threadTokenName: Uint8Array;
  path: string;
  status: ProjectStatus;
}

type Fundraisings = Fundraising[];

interface FundraisingData {
  frThreadTokenCurrency: Uint8Array;
  frThreadTokenName: Uint8Array;
}

interface CreateFundraisingParams {
  description: string;
  amount: number;
  duration: {
    days: number;
    hours: number;
    minutes: number;
  };
}

type WalletStatus = 'default' | 'connected' | 'declined' | 'notAvailable';

interface UserInfo {
  isManager: boolean;
  address: string;
}

type LandingSection =
  | 'home'
  | 'how-it-works'
  | 'why-choose-us'
  | 'about-us'
  | 'roadmap'
  | 'contact-us';

type ProjectStatus = 'active' | 'completed';

export type {
  Config,
  Fundraisings,
  Fundraising,
  FundraisingData,
  CreateFundraisingParams,
  WalletStatus,
  UserInfo,
  LandingSection,
  ProjectStatus,
};
