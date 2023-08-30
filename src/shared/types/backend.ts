import { UserInfo } from './common';

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

export type { BackendParams, UserAndProtocolParams };
