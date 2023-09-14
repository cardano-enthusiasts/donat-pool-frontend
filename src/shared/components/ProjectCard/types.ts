import type { ROUTES } from '@/shared/constants';
import type { DonatPool } from '@/shared/types';

interface Props {
  data: DonatPool;
  status?: 'default' | 'active' | 'completed';
  linkSection: typeof ROUTES.donatPools | typeof ROUTES.myDonatPools;
  paddingSize?: 's' | 'm';
}

export type { Props };
