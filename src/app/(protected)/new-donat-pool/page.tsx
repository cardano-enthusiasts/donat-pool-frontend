import { type Metadata } from 'next';

import { NewDonatPool } from '@/containers';
import { Common } from '@/shared/components';

const metadata: Metadata = {
  title: 'New Donat.Pool',
};

function Page() {
  return (
    <Common>
      <NewDonatPool />
    </Common>
  );
}

export { Page as default, metadata };
