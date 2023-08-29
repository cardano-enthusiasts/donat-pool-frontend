import { Metadata } from 'next';

import { Common, NewProject } from '@/layouts';

const metadata: Metadata = {
  title: 'New Donat.Pool',
};
const Page = () => {
  return (
    <Common>
      <NewProject />
    </Common>
  );
};

export { Page as default, metadata };
