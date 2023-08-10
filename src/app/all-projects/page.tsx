'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { Button, ProjectCard } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useAuthGuard, useAllFundraisings } from '@/shared/hooks';
import { useAppSelector } from '@/store/hooks';

import { CardsWrapper, CreateButton, Title, TitleAndButton } from './AllProjects.styled';

const Page = () => {
  useAuthGuard();
  const router = useRouter();
  const {
    areBeingFetched: fundraisingsAreBeingFetched,
    fundraisings,
    fetchError: fetchFundraisingsError,
  } = useAllFundraisings();
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.status);

  useEffect(() => {
    document.title = 'All projects';
  }, []);

  if (connectWalletStatus !== 'success') {
    return;
  }

  return (
    <Common>
      <TitleAndButton>
        <Title>All Donation pools</Title>
        <CreateButton>
          <Button
            primaryColor="red"
            secondaryColor="blue"
            fontColor="white"
            onClick={() => {
              router.push(ROUTES.newFundraising);
            }}
          >
            Create a new project
          </Button>
        </CreateButton>
      </TitleAndButton>
      {fundraisingsAreBeingFetched && <div>loading</div>}
      {fundraisings && (
        <CardsWrapper>
          {fundraisings
            .filter(({ isCompleted }) => !isCompleted)
            .sort((fundraising1, fundraising2) => Number(fundraising1.deadline) - Number(fundraising2.deadline))
            .map((fundraising) => (
              <ProjectCard key={fundraising.threadTokenCurrency} data={fundraising} linkSection="all-projects" />
            ))}
        </CardsWrapper>
      )}
      {fetchFundraisingsError && <div>error</div>}
    </Common>
  );
};

export default Page;
