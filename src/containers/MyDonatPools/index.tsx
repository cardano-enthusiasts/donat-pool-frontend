'use client';

import { useEffect, useState } from 'react';

import { BorderedButton, Loader, ProjectCard, Layout, PrimaryLink } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useMyDonatPools } from '@/shared/hooks';
import type { DonatPool } from '@/shared/types';
import SadCatImage from '@public/images/sad-cat.svg';

import type { ProjectStatus } from './types';

function MyDonatPools() {
  const [filter, setFilter] = useState<ProjectStatus | null>(null);
  const { areBeingFetched, donatPools, fetchError } = useMyDonatPools();
  const [filteredDonatPools, setFilteredDonatPools] = useState<DonatPool[] | null>(null);

  useEffect(() => {
    if (donatPools) {
      setFilteredDonatPools(donatPools);
    }
  }, [donatPools]);

  function handleFilterClick(status: ProjectStatus, projects: DonatPool[]) {
    if (filter === status) {
      setFilteredDonatPools(projects);
      setFilter(null);
    } else {
      const completed = status === 'completed';
      setFilteredDonatPools(projects.filter((item) => item.isCompleted === completed));
      setFilter(status);
    }
  }

  return (
    <Layout error={fetchError}>
      <div
        className="mb-15
          max-md:mb-8
          md:flex
          md:flex-wrap
          md:items-center
          md:justify-between
          md:gap-x-5"
      >
        <div className="flex items-center justify-center gap-10 max-md:items-start max-sm:flex-col max-sm:gap-5">
          <h1
            className="font-rammetto-one
              text-menu-active
              text-red
              max-md:text-[2.25rem]/[2.25rem]"
          >
            My Donat.Pools
          </h1>
          <div className="flex gap-6">
            {donatPools?.some(({ isCompleted }) => !isCompleted) && (
              <BorderedButton
                color="red"
                isClickedTheme={filter === 'active' || donatPools.every(({ isCompleted }) => !isCompleted)}
                onClick={() => {
                  handleFilterClick('active', donatPools);
                }}
              >
                Active
              </BorderedButton>
            )}
            {donatPools?.some(({ isCompleted }) => isCompleted) && (
              <BorderedButton
                color="green"
                isClickedTheme={filter === 'completed' || donatPools.every(({ isCompleted }) => isCompleted)}
                onClick={() => {
                  handleFilterClick('completed', donatPools);
                }}
              >
                Completed
              </BorderedButton>
            )}
          </div>
        </div>
        <div className="max-md:fixed max-md:bottom-15 max-md:right-[1.875rem]">
          <PrimaryLink size="lg" href={ROUTES.newDonatPool}>
            Create Donat.Pool
          </PrimaryLink>
        </div>
      </div>
      <div className="mx-auto w-full max-md:max-w-[90vw]">
        {areBeingFetched ? (
          <Loader />
        ) : (
          filteredDonatPools &&
          (filteredDonatPools.length === 0 ? (
            <div className="flex flex-col items-center gap-6">
              You don&apos;t have any projects yet. Create a project to start receiving donations.
              <SadCatImage className="max-w-full" />
            </div>
          ) : (
            <div className="grid grid-cols-projects gap-10 max-md:grid-cols-1">
              {filteredDonatPools.map((item) => (
                <ProjectCard
                  key={item.threadTokenCurrency}
                  data={item}
                  linkSection={ROUTES.myDonatPools}
                  status={item.isCompleted ? 'completed' : 'active'}
                  paddingSize="s"
                />
              ))}
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}

export default MyDonatPools;
