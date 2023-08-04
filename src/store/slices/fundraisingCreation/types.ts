import { type RequestStatus } from '@/shared/types';

interface State {
  status: RequestStatus;
  path?: string;
  error?: string;
}

export type { State };
