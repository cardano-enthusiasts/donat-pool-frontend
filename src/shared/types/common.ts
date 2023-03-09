import { type protocol } from 'shared/constants';
interface Config {
  minAmountParam: number;
  maxAmountParam: number;
  minDurationParam: number;
  maxDurationParam: number;
  protocolFeeParam: number;
}

interface Project {
  creator: object;
  deadline: number;
  description: string;
  goal: number;
  raisedAmount: number;
  threadTokenCurrency: Uint8Array;
  threadTokenName: Uint8Array;
}

type Projects = Project[];

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

export type {
  Config,
  Projects,
  Project,
  FundraisingData,
  CreateFundraisingParams,
};
