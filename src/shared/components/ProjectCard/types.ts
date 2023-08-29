import { ROUTES } from '@/shared/constants';
import { DonatPool } from '@/shared/types';

interface Props {
  data: Omit<DonatPool, 'creator'>;
  status?: 'default' | 'active' | 'completed';
  linkSection: typeof ROUTES.donatPools | typeof ROUTES.myDonatPools;
  paddingSize?: 's' | 'm';
}

export type { Props };
