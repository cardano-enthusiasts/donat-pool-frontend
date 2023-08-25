import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useUserFundraisings } from '@/shared/hooks';
import type { Fundraising } from '@/shared/types';

import type { ProjectStatus, Props } from './types';
import { BorderedButton, ProjectCard, StandardButton } from '../.';

function MyProjects({ onCreateAProjectClick }: Props) {
  const [allProjectsWithStatus, setAllProjectsWithStatus] = useState<Fundraising[] | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Fundraising[] | null>(null);
  const [filter, setFilter] = useState<ProjectStatus | null>(null);
  const { fundraisings } = useUserFundraisings();

  useEffect(() => {
    if (fundraisings) {
      setAllProjectsWithStatus(fundraisings);
      setFilteredProjects(fundraisings);
    } else {
      setAllProjectsWithStatus(null);
    }
  }, [fundraisings]);

  function handleFilterClick(status: ProjectStatus, projects: Fundraising[]) {
    if (filter === status) {
      setFilteredProjects(projects);
      setFilter(null);
    } else {
      const isCompleted = status === 'completed';
      setFilteredProjects(projects.filter((item) => item.isCompleted === isCompleted));
      setFilter(status);
    }
  }

  return (
    <>
      <div className="mb-15 flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-5 max-md:mb-8">
        <div className="flex items-center justify-center gap-10 max-md:items-start max-sm:flex-col max-sm:gap-5">
          <h1 className="font-rammetto-one text-[3.375rem] leading-[104%] text-red max-lg:text-[2.25rem] max-sm:text-[2.25rem]">
            My projects
          </h1>
          {allProjectsWithStatus !== null && (
            <div className="flex gap-6">
              <BorderedButton
                color="red"
                isClickedTheme={filter === 'active'}
                onClick={() => {
                  handleFilterClick('active', allProjectsWithStatus);
                }}
              >
                Active
              </BorderedButton>
              <BorderedButton
                color="green"
                isClickedTheme={filter === 'completed'}
                onClick={() => {
                  handleFilterClick('completed', allProjectsWithStatus);
                }}
              >
                Completed
              </BorderedButton>
            </div>
          )}
        </div>

        <div className="max-md:fixed max-md:bottom-15 max-md:right-[1.875rem] max-md:z-10">
          <StandardButton primaryColor="red" secondaryColor="blue" fontColor="white" onClick={onCreateAProjectClick}>
            Create a new project
          </StandardButton>
        </div>
      </div>

      <div className="mx-auto w-full max-md:max-w-[90vw]">
        {filteredProjects && filteredProjects.length !== 0 ? (
          <div className="grid grid-cols-projects gap-10 max-md:grid-cols-1">
            {filteredProjects.map((item) => (
              <ProjectCard
                data={item}
                linkSection="my-projects"
                key={item.threadTokenCurrency}
                status={item.isCompleted ? 'completed' : 'active'}
                paddingSize="s"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6">
            You don&apos;t have any projects yet. Create a project to start receiving donations.
            <Image src="/img/sad-cat.svg" alt="sad cat image" width={140} height={140} className="max-w-full" />
          </div>
        )}
      </div>
    </>
  );
}

export { MyProjects };
