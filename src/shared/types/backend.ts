import { type UserInfo } from './common';

interface BackendProject {
  creator: object;
  deadline: { value: bigint };
  description: string;
  goal: { value: bigint };
  raisedAmt: { value: bigint };
  threadTokenCurrency: Uint8Array;
  threadTokenName: Uint8Array;
  path: string;
  isCompleted: boolean;
}

type BackendProjects = BackendProject[];

interface ConfigParam {
  value: number;
}
interface BackendParams {
  minAmountParam: ConfigParam;
  maxAmountParam: ConfigParam;
  minDurationParam: ConfigParam;
  maxDurationParam: ConfigParam;
  protocolFeeParam: ConfigParam;
}

interface UserAndProtocolParams {
  protocolConfig: BackendParams;
  userInfo: UserInfo;
}

export type {
  BackendProjects,
  BackendProject,
  BackendParams,
  UserAndProtocolParams,
};
