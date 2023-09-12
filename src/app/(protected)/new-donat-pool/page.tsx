import type { Metadata } from 'next';

import { NewDonatPool } from '@/containers';
import { Layout } from '@/shared/components';
import { APP_URL, ROUTES } from '@/shared/constants';

const metadata: Metadata = {
  title: 'Start a new project',
  description: 'Create a page for your project where your community can support you in Ada.',
  openGraph: {
    title: 'Donat.Pool: Start a new project',
    description: 'Create a page for your project where your community can support you in Ada.',
    url: `${APP_URL}${ROUTES.newDonatPool}`,
  },
};

function Page() {
  return (
    <Layout>
      <NewDonatPool />
    </Layout>
  );
}

export { Page as default, metadata };
