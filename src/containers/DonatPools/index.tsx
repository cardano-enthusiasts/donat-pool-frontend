'use client';
import { Layout, StandardButton, Loading, NoDonatPool, ProjectCard } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useDonatPools } from '@/shared/hooks';

function DonatPools() {
  const { areBeingFetched: donatPoolsAreBeingFetched, donatPools, fetchError: fetchDonatPoolsError } = useDonatPools();

  return (
    <Layout error={fetchDonatPoolsError}>
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

      {donatPoolsAreBeingFetched && !donatPools && <Loading />}
      {donatPools && donatPools.length !== 0 && (
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
      {donatPools?.filter(({ completed }) => !completed)?.length === 0 && <NoDonatPool />}
    </Layout>
  );
}

export default DonatPools;
