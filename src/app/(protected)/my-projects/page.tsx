import { Metadata } from 'next';

import { Common, MyProjects } from '@/layouts';

const metadata: Metadata = {
  title: 'My Donat.Pools',
};

const Page = () => {
  return (
    <Common>
      <MyProjects />
    </Common>
  );
};

export { Page as default, metadata };
