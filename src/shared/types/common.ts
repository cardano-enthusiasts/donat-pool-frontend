interface Config {
  minAmountParam: number;
  maxAmountParam: number;
  minDurationParam: number;
  maxDurationParam: number;
  protocolFeeParam: number;
}

interface Fundraising {
  creator: string;
  deadline: number;
  title: string;
  goal: number;
  raisedAmount: number;
  threadTokenCurrency: string;
  threadTokenName: string;
  isCompleted: boolean;
}

type Fundraisings = Fundraising[];

interface FundraisingData {
  frThreadTokenCurrency: string;
  frThreadTokenName: string;
}

interface CreateFundraisingParams {
  title: string;
  amount: number;
  duration: {
    days: number;
    hours: number;
    minutes: number;
  };
}

type WalletMode =
  | 'default'
  | 'connected'
  | 'declined'
  | 'notAvailable'
  | 'missingCollateral';

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

type Status = 'default' | 'success' | 'error' | 'requesting';

export type {
  Config,
  Fundraisings,
  Fundraising,
  FundraisingData,
  CreateFundraisingParams,
  WalletMode,
  UserInfo,
  LandingSection,
  Status,
};
