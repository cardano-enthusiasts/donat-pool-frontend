import type { Metadata } from 'next';

import { MyDonatPools } from '@/containers';

const metadata: Metadata = {
  title: 'Donat.Pool: My Donat.Pools',
  description: 'List of all your projects. Share and manage them.',
};

function Page() {
  return <MyDonatPools />;
}

export { Page as default, metadata };
