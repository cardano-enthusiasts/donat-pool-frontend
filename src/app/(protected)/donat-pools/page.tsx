import type { Metadata } from 'next';

import { DonatPools } from '@/containers';
import { Layout, StandardButton } from '@/shared/components';
import { APP_URL, ROUTES } from '@/shared/constants';

const metadata: Metadata = {
  title: 'List of all projects',
  description:
    'Help others to bring their projects to life or start your own with community support. Lowest fees and highest reliability.',
  openGraph: {
    title: 'Donat.Pool: List of all projects',
    description:
      'Help others to bring their projects to life or start your own with community support. Lowest fees and highest reliability.',
    url: `${APP_URL}${ROUTES.donatPools}`,
  },
};

function Page() {
  return (
    <Layout>
      <div
        className="mb-14
          flex
          items-center
          justify-between
          gap-14
          text-center
          max-md:mb-8
          max-md:flex-col
          max-md:gap-5"
      >
        <h1
          className="font-rammetto-one
            text-[3.375rem]/[104%]
            text-red
            max-lg:text-[2.25rem]
            max-sm:text-[2.25rem]"
        >
          All Donat.Pools
        </h1>
        <div className="max-md:fixed max-md:bottom-15 max-md:right-8">
          <StandardButton primaryColor="red" secondaryColor="blue" fontColor="white" href={ROUTES.newDonatPool}>
            Create Donat.Pool
          </StandardButton>
        </div>
      </div>
      <DonatPools />
    </Layout>
  );
}

export { Page as default, metadata };
