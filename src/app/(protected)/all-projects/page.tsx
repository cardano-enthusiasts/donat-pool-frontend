'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { useAppSelector } from '@/redux/hooks';
import { Button, ProjectCard } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useAllFundraisings } from '@/shared/hooks';

import { CardsWrapper, CreateButton, Title, TitleAndButton } from './AllProjects.styled';

const Page = () => {
  const router = useRouter();
  const {
    areBeingFetched: fundraisingsAreBeingFetched,
    fundraisings,
    error: fetchFundraisingsError,
  } = useAllFundraisings();
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);

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
      {fundraisingsAreBeingFetched && <div>fundraisings are being fetched</div>}
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
      {fetchFundraisingsError && <div className="text-error">{fetchFundraisingsError}</div>}
    </Common>
  );
};

export default Page;
