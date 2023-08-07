'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Common, Project } from '@/layouts';
import { PrivateProjectsActions, RaisedCounter } from '@/shared/components';
import { getDate } from '@/shared/helpers';
import { useGetUserFundraisings } from '@/shared/helpers/hooks';
import { useDonatPool } from '@/shared/hooks';
import { type Fundraising } from '@/shared/types';
import { useAppSelector } from '@/store/hooks';

import {
  CounterWrapper,
  Deadline,
  DeadlineAndStatus,
  Inner,
  Status,
} from './PrivateProject.styled';

const PrivateProject = () => {
  const params = useParams();
  const offchain = useDonatPool();
  const router = useRouter();
  const getUserFundraisings = useGetUserFundraisings();
  const [currentProject, setCurrentProject] = useState<Fundraising | null>(
    null,
  );
  const { fundraisings } = useAppSelector((state) => state.userFundraisings);

  useEffect(() => {
    if (offchain) {
      getUserFundraisings();
    }
  }, [offchain]);

  useEffect(() => {
    if (fundraisings) {
      const project = fundraisings.find(
        ({ threadTokenCurrency }) => threadTokenCurrency === params.id,
      );
      if (project) {
        setCurrentProject(project);
      } else {
        setCurrentProject(null);
      }
    }
  }, [fundraisings, params.id]);

  return currentProject ? (
    <>
      <Common>
        <Project
          previousPageTitle="My projects"
          onPreviousPageClick={() => {
            router.push('/my-projects');
          }}
          title={currentProject.title}
        >
          <Inner>
            <DeadlineAndStatus>
              <Status isActive={!currentProject.isCompleted}>
                {currentProject.isCompleted ? 'Completed' : 'Active'}
              </Status>
              <Deadline>Until {getDate(currentProject.deadline)}</Deadline>
            </DeadlineAndStatus>
            <CounterWrapper>
              <RaisedCounter
                raised={Number(currentProject.raisedAmt.value) / 1000000}
                goal={Number(currentProject.goal.value) / 1000000}
              />
            </CounterWrapper>
            <PrivateProjectsActions project={currentProject} />
          </Inner>
        </Project>
      </Common>
    </>
  ) : (
    <></>
  );
};

export default PrivateProject;
