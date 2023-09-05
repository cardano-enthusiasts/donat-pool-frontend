import type { Metadata } from 'next';

import { MyDonatPools } from '@/containers';
import { Common } from '@/shared/components';

const metadata: Metadata = {
  title: 'Donat.Pool: My Donat.Pools',
  description: 'List of all your projects. Share and manage them.',
};

function Page() {
  return (
    <Common>
      <MyDonatPools />
    </Common>
  );
}

export { Page as default, metadata };
