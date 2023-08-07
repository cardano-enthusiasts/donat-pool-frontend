import { type RequestStatus, type Fundraising } from '@/shared/types';

interface State {
  fundraisings: Fundraising[];
  status: RequestStatus;
  error?: string;
}

export type { State };
