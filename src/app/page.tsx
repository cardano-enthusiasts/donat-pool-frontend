import type { Metadata } from 'next';

import { Landing } from '@/containers';
import { APP_URL } from '@/shared/constants';

const metadata: Metadata = {
  title: 'Donat.Pool: Crowdfunding on Cardano blockchain',
  description:
    'Bring your projects to life with community support and help others. Lowest fees and highest reliability.',
  openGraph: {
    title: 'Donat.Pool: Crowdfunding on Cardano blockchain',
    description:
      'Bring your projects to life with community support and help others. Lowest fees and highest reliability.',
    url: APP_URL,
  },
};

function Page() {
  return <Landing />;
}

export { Page as default, metadata };
