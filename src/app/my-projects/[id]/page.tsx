import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';

import { Common, Project } from '@/layouts';
import { PrivateProjectsActions, RaisedCounter } from '@/shared/components';
import { getDate } from '@/shared/helpers';
import { useGetUserFundraisings, useOffchain } from '@/shared/helpers/hooks';
import { type AppReduxState, type Fundraising } from '@/shared/types';

import {
  CounterWrapper,
  Deadline,
  DeadlineAndStatus,
  Inner,
  Status,
} from './PrivateProject.styled';

const PrivateProject = () => {
  const params = useParams();
  const offchain = useOffchain();
  const router = useRouter();
  const getUserFundraisings = useGetUserFundraisings();
  const [currentProject, setCurrentProject] = useState<Fundraising | null>(
    null,
  );
  const { fundraisings } = useSelector(
    (state: AppReduxState) => state.info.data.user,
  );

  useEffect(() => {
    if (offchain) {
      getUserFundraisings();
    }
  }, [offchain]);

  useEffect(() => {
    if (fundraisings) {
      const project = fundraisings.find(({ path }) => path === params?.id);
      if (project) {
        setCurrentProject(project);
      } else {
        setCurrentProject(null);
      }
    }
  }, [fundraisings, params?.id]);

  return currentProject ? (
    <>
      <Common>
        <Project
          previousPageTitle="My projects"
          onPreviousPageClick={() => {
            router.push('/my-projects');
          }}
          title={currentProject.description}
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
                raised={currentProject.raisedAmount / 1000000}
                goal={currentProject.goal / 1000000}
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
