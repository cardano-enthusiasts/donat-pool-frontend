import { Metadata } from 'next';

import { MyDonatPools } from '@/containers';
import { Common } from '@/layouts';

const metadata: Metadata = {
  title: 'My Donat.Pools',
};

function Page() {
  return (
    <Common>
      <MyDonatPools />
    </Common>
  );
}

export { Page as default, metadata };
