import type { RequestStatus } from '@/shared/types';

interface State {
  status: RequestStatus;
  error?: string;
}

export type { State };
