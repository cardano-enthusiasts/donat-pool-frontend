'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Common, Project } from '@/layouts';
import { PrivateProjectsActions, RaisedCounter, Status } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { formatDate } from '@/shared/helpers';
import { useAuthGuard, useUserFundraisings } from '@/shared/hooks';
import type { Fundraising } from '@/shared/types';

const Page = () => {
  useAuthGuard();
  const params = useParams();
  const router = useRouter();
  const { fundraisings } = useUserFundraisings();
  const [currentProject, setCurrentProject] = useState<Fundraising | null>(null);

  useEffect(() => {
    if (fundraisings) {
      const project = fundraisings.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id);
      if (project) {
        setCurrentProject(project);
      } else {
        setCurrentProject(null);
      }
    }
  }, [fundraisings, params.id]);

  return (
    currentProject && (
      <Common>
        <Project
          previousPageTitle="My projects"
          onPreviousPageClick={() => {
            router.push(ROUTES.userFundraisings);
          }}
          title={currentProject.title}
        >
          <div className="max-w-[600px]">
            <div className="flex items-center justify-between border-b-2 border-t-2 border-black py-7">
              <Status isActive={!currentProject.isCompleted} />
              <div className="text-xl font-bold">Until {formatDate(Number(currentProject.deadline.value))}</div>
            </div>
            <div className="flex border-b-2 border-black py-6">
              <RaisedCounter
                raised={Number(currentProject.raisedAmt.value) / 1000000}
                goal={Number(currentProject.goal.value) / 1000000}
              />
            </div>
            <PrivateProjectsActions project={currentProject} />
          </div>
        </Project>
      </Common>
    )
  );
};

export default Page;
