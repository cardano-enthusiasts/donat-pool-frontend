'use client';

import { ProjectCard } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useDonatPools } from '@/shared/hooks';

function DonatPools() {
  const { areBeingFetched: donatPoolsAreBeingFetched, donatPools, fetchError: fetchDonatPoolsError } = useDonatPools();

  return (
    <>
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
    </>
  );
}

export default DonatPools;
