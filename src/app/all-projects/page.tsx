'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setWalletStatusSuccess } from '@/features/info/redux/actionCreators';
import { Common } from '@/layouts';
import { Button, NotAvailableError, ProjectCard } from '@/shared/components';
import {
  useConnectWallet,
  useGetAllFundraisings,
  useOffchain,
} from '@/shared/helpers/hooks';
import { type Fundraisings, type AppReduxState } from '@/shared/types';

import {
  CardsWrapper,
  CreateButton,
  Title,
  TitleAndButton,
} from './AllProjects.styled';

const AllProjects = () => {
  const dispatch = useDispatch();
  const offchain = useOffchain();
  const router = useRouter();
  const connectWallet = useConnectWallet();
  const getAllFundraisings = useGetAllFundraisings();
  const {
    data: { allFundraisings, walletStatus },
    communication: {
      setWalletStatus: { isRequesting },
    },
  } = useSelector((state: AppReduxState) => state.info);

  useEffect(() => {
    connectWallet();
  }, []);

  useEffect(() => {
    if (offchain && walletStatus === 'connected') {
      getAllFundraisings();
    }
  }, [offchain, walletStatus]);

  useEffect(() => {
    document.title = 'All projects';
  }, []);

  useEffect(() => {
    if (walletStatus === 'declined') {
      router.push('/');
      dispatch(setWalletStatusSuccess('default'));
    }
  }, [walletStatus, window]);

  const sortAndFilterFundraising = (fundraisings: Fundraisings) => {
    return fundraisings
      .sort(
        (fundraising1, fundraising2) =>
          fundraising1.deadline - fundraising2.deadline,
      )
      .filter(({ isCompleted }) => !isCompleted);
  };

  return walletStatus === 'notAvailable' || !window?.cardano?.nami ? (
    <NotAvailableError />
  ) : !isRequesting ? (
    <Common>
      <TitleAndButton>
        <Title>All Donation pools</Title>
        <CreateButton>
          <Button
            primaryColor="red"
            secondaryColor="blue"
            fontColor="white"
            onClick={() => {
              router.push('/new-project');
            }}
          >
            Create a new project
          </Button>
        </CreateButton>
      </TitleAndButton>

      <CardsWrapper>
        {allFundraisings ? (
          sortAndFilterFundraising(allFundraisings).map((project) => {
            return (
              <ProjectCard
                data={project}
                key={project.threadTokenCurrency.toString()}
                linkSection="all-projects"
              />
            );
          })
        ) : (
          <></>
        )}
      </CardsWrapper>
    </Common>
  ) : (
    <></>
  );
};

export default AllProjects;
