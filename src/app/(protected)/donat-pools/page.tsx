import type { Metadata } from 'next';

import { DonatPools } from '@/containers';

const metadata: Metadata = {
  title: 'Donat.Pool: list of all projects',
  description:
    'Help others to bring their projects to life or start your own with community support. Lowest fees and highest reliability.',
};

function Page() {
  return <DonatPools />;
}

export { Page as default, metadata };
