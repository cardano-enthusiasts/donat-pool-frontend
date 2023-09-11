import type { Metadata } from 'next';

import { MyDonatPools } from '@/containers';
import { Layout } from '@/shared/components';
import { APP_URL, ROUTES } from '@/shared/constants';

const metadata: Metadata = {
  title: 'My Donat.Pools',
  description: 'List of all your projects. Share and manage them.',
  openGraph: {
    title: 'Donat.Pool: My Donat.Pools',
    description: 'List of all your projects. Share and manage them.',
    url: `${APP_URL}${ROUTES.myDonatPools}`,
  },
};

function Page() {
  return (
    <Layout>
      <MyDonatPools />
    </Layout>
  );
}

export { Page as default, metadata };
