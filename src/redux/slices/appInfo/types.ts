import { RequestStatus } from '@/shared/types';
import { Config, UserInfo } from '@/shared/types/common';

interface State {
  protocol: Config | null;
  userInfo: UserInfo | null;
  status: RequestStatus;
  error?: string;
}

export type { State };
