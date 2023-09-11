import type { Metadata } from 'next';

import { DonatPool } from '@/containers';
import { Layout } from '@/shared/components';

const metadata: Metadata = {
  title: 'Help the project',
  description: 'Help bring project to life. Donate and become one of the early adopters!',
  openGraph: {
    title: 'Donat.Pool: Help the project',
    description: 'Help bring project to life. Donate and become one of the early adopters!',
  },
};

function Page() {
  return (
    <Layout>
      <DonatPool />
    </Layout>
  );
}

export { Page as default, metadata };
