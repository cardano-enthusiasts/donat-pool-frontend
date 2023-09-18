import type { Metadata } from 'next';

import { DonatPool } from '@/containers';

const metadata: Metadata = {
  title: 'Help the project',
  description: 'Help bring project to life. Donate and become one of the early adopters!',
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
    'project',
  ],
  openGraph: {
    title: 'Donat.Pool: Help the project',
    description: 'Help bring project to life. Donate and become one of the early adopters!',
  },
};

function Page() {
  return <DonatPool />;
}

export { Page as default, metadata };
