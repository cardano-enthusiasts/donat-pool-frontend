interface BackendProject {
  creator: object;
  deadline: { value: bigint };
  description: string;
  goal: { value: bigint };
  raisedAmt: { value: bigint };
  threadTokenCurrency: Uint8Array;
  threadTokenName: Uint8Array;
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

export type { BackendProjects, BackendProject, BackendParams };
