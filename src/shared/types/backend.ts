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

export type { BackendProjects, BackendProject };
