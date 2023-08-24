import { ROUTES } from '@/shared/constants';
import type { Fundraising } from '@/shared/types';

interface Props {
  data: Omit<Fundraising, 'creator'>;
  status?: 'default' | 'active' | 'completed';
  linkSection: typeof ROUTES.allFundraisings | typeof ROUTES.userFundraisings;
  paddingSize?: 's' | 'm';
}

export type { Props };
