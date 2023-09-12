'use client';
import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { requestAllDonatPools } from '@/redux/slices/allDonatPools/thunk';
import { Layout, StandardButton, ProjectCard, Loader, FakeDonatPoolCard } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

function DonatPools() {
  const dispatch = useAppDispatch();
  const { donatPools, status, error } = useAppSelector((state) => state.allDonatPools);

  useEffect(() => {
    dispatch(requestAllDonatPools());
  }, []);

  const activeDonatPools = useMemo(() => donatPools?.filter(({ completed }) => !completed), [donatPools]);

  return (
    <Layout error={error}>
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

      {status === 'requesting' && !donatPools && <Loader />}
      {activeDonatPools &&
        (activeDonatPools.length === 0 ? (
          <div className="w-full">
            <div className="mb-15 text-center">
              There are no projects yet. But you can be the first to create a Donat.Pool
            </div>
            <div className="grid grid-cols-projects gap-10 max-sm:grid-cols-1 max-sm:gap-8">
              <FakeDonatPoolCard />
              <FakeDonatPoolCard />
              <FakeDonatPoolCard />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-projects gap-10 max-sm:grid-cols-1 max-sm:gap-8">
            {activeDonatPools
              .sort(
                (firstDonatPool, secondDonatPool) => Number(firstDonatPool.deadline) - Number(secondDonatPool.deadline),
              )
              .map((donatPool) => (
                <ProjectCard key={donatPool.threadTokenCurrency} data={donatPool} linkSection={ROUTES.donatPools} />
              ))}
          </div>
        ))}
    </Layout>
  );
}

export default DonatPools;
