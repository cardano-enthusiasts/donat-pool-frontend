import type { Metadata } from 'next';

import { DonatPools } from '@/containers';
import { APP_URL, ROUTES } from '@/shared/constants';

const metadata: Metadata = {
  title: 'List of all projects',
  description:
    'Help others to bring their projects to life or start your own with community support. Lowest fees and highest reliability.',
  keywords: [
    'crowdfunding',
    'donation',
    'donations',
    'support',
    'community',
    'startup',
    'startups',
    'ideas',
    'funding',
    'funds',
    'projects',
  ],
  openGraph: {
    title: 'Donat.Pool: List of all projects',
    description:
      'Help others to bring their projects to life or start your own with community support. Lowest fees and highest reliability.',
    url: `${APP_URL}${ROUTES.donatPools}`,
  },
};

function Page() {
  return <DonatPools />;
}

export { Page as default, metadata };
