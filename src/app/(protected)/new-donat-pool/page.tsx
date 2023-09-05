import type { Metadata } from 'next';

import { NewDonatPool } from '@/containers';

const metadata: Metadata = {
  title: 'Donat.Pool: Start a new project',
  description: 'Create a page for your project where your community can support you in Ada.',
};

function Page() {
  return <NewDonatPool />;
}

export { Page as default, metadata };
