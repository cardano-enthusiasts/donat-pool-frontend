import { Metadata } from 'next';

import { NewDonatPool } from '@/containers';
import { Common } from '@/shared/components';

const metadata: Metadata = {
  title: 'Donat.Pool: Start a new project',
  description: 'Create a page for your project where your community can support you in Ada.',
};

function Page() {
  return (
    <Common>
      <NewDonatPool />
    </Common>
  );
}

export { Page as default, metadata };
