import { type Status, type Fundraisings } from 'shared/types';

interface State {
  value: Fundraisings | null;
  error: string | null;
  status: Status;
}

export type { State };
