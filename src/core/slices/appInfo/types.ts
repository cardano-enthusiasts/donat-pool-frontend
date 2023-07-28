import { type Status, type Config, type UserInfo } from 'shared/types';

interface State {
  protocol: Config | null;
  userInfo: UserInfo | null;
  error: string | null;
  status: Status;
}

export type { State };
