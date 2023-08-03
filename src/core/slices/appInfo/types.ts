import { type RequestStatus, type Config, type UserInfo } from 'shared/types';

interface State {
  protocol: Config | null;
  userInfo: UserInfo | null;
  error: string | null;
  status: RequestStatus;
}

export type { State };
