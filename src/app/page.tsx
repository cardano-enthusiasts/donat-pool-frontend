import type { Metadata } from 'next';

import { Landing } from '@/containers';

const metadata: Metadata = {
  title: 'Donat.Pool: Crowdfunding on Cardano blockchain',
  description:
    'Bring your projects to life with community support and help others. Lowest fees and highest reliability.',
};

function Page() {
  return <Landing />;
}

export { Page as default, metadata };
