interface Config {
  minAmountParam: number;
  maxAmountParam: number;
  minDurationParam: number;
  maxDurationParam: number;
  protocolFeeParam: number;
}

interface Project {
  creator: any;
  deadline: number;
  description: string;
  goal: number;
  raisedAmount: number;
  threadTokenCurrency: any[];
  threadTokenName: any[];
}

type Projects = Project[];

export type { Config, Projects, Project };
