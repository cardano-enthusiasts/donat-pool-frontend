import type { Fundraising } from '@/shared/types';

interface Props {
  data: Omit<Fundraising, 'creator'>;
  status?: 'default' | 'active' | 'completed';
  linkSection: 'all-projects' | 'my-projects';
  paddingSize?: 's' | 'm';
}

export type { Props };
