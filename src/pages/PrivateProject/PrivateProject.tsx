import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Common, Project } from 'layouts';
import { PrivateProjectsActions, RaisedCounter } from 'shared/components';
import getDate from 'shared/helpers/getDate';
import { useGetUserFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState, type Fundraising } from 'shared/types';

import {
  CounterWrapper,
  Deadline,
  DeadlineAndStatus,
  Inner,
  Status,
  Title,
} from './PrivateProject.styled';

const PrivateProject = () => {
  const params = useParams();
  const offchain = useOffchain();
  const navigate = useNavigate();
  const getUserFundraisings = useGetUserFundraisings();
  const [currentProject, setCurrentProject] = useState<Fundraising | null>(
    null
  );
  const { fundraisings } = useSelector(
    (state: AppReduxState) => state.info.data.user
  );

  useEffect(() => {
    if (offchain) {
      getUserFundraisings();
    }
  }, [offchain]);

  useEffect(() => {
    if (fundraisings) {
      const project = fundraisings.find(({ path }) => path === params.id);
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
          pageHeader={<Title>{currentProject.description}</Title>}
        >
          <Inner>
            <DeadlineAndStatus>
              <Status isActive={currentProject.status === 'active'}>
                {currentProject.status === 'active' ? 'Active' : 'Completed'}
              </Status>
              <Deadline>{getDate(currentProject.deadline)}</Deadline>
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
