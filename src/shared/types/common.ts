import { type protocol } from 'shared/constants';
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
}

type Fundraisings = Fundraising[];

interface FundraisingData {
  frThreadTokenCurrency: Uint8Array;
  frThreadTokenName: Uint8Array;
  protocol: typeof protocol;
}

interface CreateFundraisingParams {
  description: string;
  amount: number;
  duration: number;
}

type ActiveHeaderItem = 'all-projects' | 'home' | 'management' | 'profile';

export type {
  Config,
  Fundraisings,
  Fundraising,
  FundraisingData,
  CreateFundraisingParams,
  ActiveHeaderItem,
};
