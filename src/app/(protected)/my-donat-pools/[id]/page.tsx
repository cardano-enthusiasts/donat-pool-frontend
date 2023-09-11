import type { Metadata } from 'next';

import { MyDonatPool } from '@/containers';
import { Layout } from '@/shared/components';

const metadata: Metadata = {
  title: 'Help the project',
  description: 'Help bring project to life. Donate and become one of the early adopters!',
};

function Page() {
  return (
    <Layout>
      <MyDonatPool />
    </Layout>
  );
}

export { Page as default, metadata };
