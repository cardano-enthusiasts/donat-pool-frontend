import { Metadata } from 'next';

import { AllProjects, Common } from '@/layouts';
import { StandardButton } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

const metadata: Metadata = {
  title: 'All Donat.Pools',
};
const Page = () => {
  return (
    <Common>
      <div className="mb-14 flex items-center justify-between gap-14 text-center max-md:mb-8 max-md:flex-col max-md:gap-5">
        <h1 className="font-rammetto-one text-[3.375rem] leading-[104%] text-red max-lg:text-[2.25rem] max-sm:text-[2.25rem]">
          All Donation pools
        </h1>
        <div className="max-md:fixed max-md:bottom-15 max-md:right-8 max-md:z-10">
          <StandardButton primaryColor="red" secondaryColor="blue" fontColor="white" href={ROUTES.newFundraising}>
            Create a new project
          </StandardButton>
        </div>
      </div>
      <AllProjects />
    </Common>
  );
};

export { Page as default, metadata };
