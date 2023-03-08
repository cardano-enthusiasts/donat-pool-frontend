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

export type { Config, Projects, Project };
