import { ROUTES } from '@/shared/constants';
import type { Fundraising } from '@/shared/types';

interface Props {
  data: Omit<Fundraising, 'creator'>;
  status?: 'default' | 'active' | 'completed';
  linkSection: typeof ROUTES.fundraisings | typeof ROUTES.userFundraisings;
  paddingSize?: 's' | 'm';
}

export type { Props };
