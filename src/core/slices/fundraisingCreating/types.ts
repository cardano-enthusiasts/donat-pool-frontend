import { type Status } from 'shared/types';

interface State {
  error: string | null;
  status: Status;
  path: string | null;
}

export type { State };
