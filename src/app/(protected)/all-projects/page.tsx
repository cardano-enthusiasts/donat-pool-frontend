import { Metadata } from 'next';

import { AllProjects, Common } from '@/layouts';

const metadata: Metadata = {
  title: 'All Donat.Pools',
};
const Page = () => {
  return (
    <Common>
      <AllProjects />
    </Common>
  );
};

export { Page as default, metadata };
