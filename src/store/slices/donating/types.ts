import { type RequestStatus } from 'shared/types';

interface State {
  error: string | null;
  status: RequestStatus;
}

export type { State };
