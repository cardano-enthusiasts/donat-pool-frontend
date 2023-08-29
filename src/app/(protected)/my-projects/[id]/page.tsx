'use client';

import cn from 'classnames';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Common, Project } from '@/layouts';
import { PrivateProjectsActions, RaisedCounter } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { formatDate } from '@/shared/helpers';
import { useUserFundraisings } from '@/shared/hooks';
import type { Fundraising } from '@/shared/types';

import THEME from './constants';

const Page = () => {
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

  const getTheme = (isCompleted: boolean) => (isCompleted ? THEME.completed : THEME.active);

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
          <div className="max-w-[37.5rem]">
            <div className="flex items-center justify-between border-b-2 border-t-2 border-black py-7">
              <div
                className={cn(`font-bold ${getTheme(currentProject.isCompleted).classes} rounded-md border-2 px-3 py-2

              text-sm`)}
              >
                {getTheme(currentProject.isCompleted).text}
              </div>
              <div className="text-xl font-bold">Until {formatDate(Number(currentProject.deadline))}</div>
            </div>
            <div className="flex border-b-2 border-black py-6">
              <RaisedCounter
                raised={Number(currentProject.raisedAmt) / 1000000}
                goal={Number(currentProject.goal) / 1000000}
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
