import { type RequestStatus } from 'shared/types';

interface State {
  error: string | null;
  status: RequestStatus;
  path: string | null;
}

export type { State };
