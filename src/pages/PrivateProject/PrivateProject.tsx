import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Common, Project } from 'layouts';
import { PrivateProjectsActions, RaisedCounter } from 'shared/components';
import { getDate } from 'shared/helpers';
import { useGetUserFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type Fundraising } from 'shared/types';
import { useAppSelector } from 'store/hooks';

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
  const navigate = useNavigate();
  const getUserFundraisings = useGetUserFundraisings();
  const [currentProject, setCurrentProject] = useState<Fundraising | null>(
    null,
  );
  const fundraisings = useAppSelector((state) => state.userFundraisings.value);

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
            navigate('/my-projects');
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
