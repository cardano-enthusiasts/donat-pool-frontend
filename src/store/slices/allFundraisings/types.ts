import { type RequestStatus, type Fundraisings } from 'shared/types';

interface State {
  value: Fundraisings | null;
  error: string | null;
  status: RequestStatus;
}

export type { State };
