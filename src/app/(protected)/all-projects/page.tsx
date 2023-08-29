'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { ProjectCard, StandardButton } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useDonatPools } from '@/shared/hooks';

function Page() {
  const router = useRouter();
  const { areBeingFetched: donatPoolsAreBeingFetched, donatPools, fetchError: fetchDonatPoolsError } = useDonatPools();

  useEffect(() => {
    document.title = 'All projects';
  }, []);

  function handleNewProjectButtonClick() {
    router.push(ROUTES.newDonatPool);
  }

  return (
    <Common>
      <div className="mb-14 flex items-center justify-between gap-14 text-center max-md:mb-8 max-md:flex-col max-md:gap-5">
        <h1 className="font-rammetto-one text-[3.375rem] leading-[104%] text-red max-lg:text-[2.25rem] max-sm:text-[2.25rem]">
          All Donation pools
        </h1>
        <div className="max-md:fixed max-md:bottom-15 max-md:right-8 max-md:z-10">
          <StandardButton
            primaryColor="red"
            secondaryColor="blue"
            fontColor="white"
            onClick={handleNewProjectButtonClick}
          >
            Create a new project
          </StandardButton>
        </div>
      </div>
      {donatPoolsAreBeingFetched && <div>donat pools are being fetched</div>}
      {donatPools && (
        <div className="grid grid-cols-projects gap-10 max-sm:grid-cols-1 max-sm:gap-8">
          {donatPools
            .filter(({ completed }) => !completed)
            .sort(
              (firstDonatPool, secondDonatPool) => Number(firstDonatPool.deadline) - Number(secondDonatPool.deadline),
            )
            .map((donatPool) => (
              <ProjectCard key={donatPool.threadTokenCurrency} data={donatPool} linkSection={ROUTES.donatPools} />
            ))}
        </div>
      )}
      {fetchDonatPoolsError && <div className="text-error">An error happened while fetching donat pools</div>}
    </Common>
  );
}

export default Page;
