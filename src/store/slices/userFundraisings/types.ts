import { type RequestStatus, type Fundraisings } from '@/shared/types';

interface State {
  fundraisings: Fundraisings;
  status: RequestStatus;
  error?: string;
}

export type { State };
