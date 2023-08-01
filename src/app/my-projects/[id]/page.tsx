import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setWalletStatusSuccess } from '@/features/info/redux/actionCreators';
import { Common, Project } from '@/layouts';
import {
  NotAvailableError,
  PrivateProjectsActions,
  RaisedCounter,
} from '@/shared/components';
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
  const dispatch = useDispatch();
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
  const {
    data: { walletStatus },
  } = useSelector((state: AppReduxState) => state.info);

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

  useEffect(() => {
    if (walletStatus === 'declined') {
      router.push('/');
      dispatch(setWalletStatusSuccess('default'));
    }
  }, [walletStatus, window]);

  return walletStatus === 'notAvailable' || !window?.cardano?.nami ? (
    <NotAvailableError />
  ) : currentProject ? (
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
