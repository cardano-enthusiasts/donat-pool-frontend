'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { ProjectCard, StandardButton } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useFundraisings } from '@/shared/hooks';

const Page = () => {
  const router = useRouter();
  const {
    areBeingFetched: fundraisingsAreBeingFetched,
    fundraisings,
    error: fetchFundraisingsError,
  } = useFundraisings();

  useEffect(() => {
    document.title = 'All projects';
  }, []);

  return (
    <Common>
      <div className="mb-14 flex items-center justify-between gap-14 text-center max-md:mb-8 max-md:flex-col max-md:gap-5">
        <h1>All Donation pools</h1>
        <div className="max-md:fixed max-md:bottom-[3.75rem] max-md:right-8 max-md:z-10">
          <StandardButton
            primaryColor="red"
            secondaryColor="blue"
            fontColor="white"
            onClick={() => {
              router.push(ROUTES.newFundraising);
            }}
          >
            Create a new project
          </StandardButton>
        </div>
      </div>
      {fundraisingsAreBeingFetched && <div>fundraisings are being fetched</div>}
      {fundraisings && (
        <div className="grid grid-cols-projects gap-10 max-sm:grid-cols-1 max-sm:gap-8">
          {fundraisings
            .filter(({ isCompleted }) => !isCompleted)
            .sort((fundraising1, fundraising2) => Number(fundraising1.deadline) - Number(fundraising2.deadline))
            .map((fundraising) => (
              <ProjectCard key={fundraising.threadTokenCurrency} data={fundraising} linkSection="all-projects" />
            ))}
        </div>
      )}
      {fetchFundraisingsError && <div className="text-error">An error happened while fetching fundraisings</div>}
    </Common>
  );
};

export default Page;
