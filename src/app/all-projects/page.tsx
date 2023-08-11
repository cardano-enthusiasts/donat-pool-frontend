'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { Button, ProjectCard } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useAuthGuard, useAllFundraisings } from '@/shared/hooks';
import { useAppSelector } from '@/store/hooks';

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
      <div className="justify-between items-center mb-14 flex gap-14 text-center max-md:mb-8 max-md:flex-col max-md:gap-5">
        <h1>All Donation pools</h1>
        <div className="max-md:fixed max-md:bottom-[60px] max-md:right-8">
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
        </div>
      </div>
      {fundraisingsAreBeingFetched && <div>fundraisings are being fetched</div>}
      {fundraisings && (
        <div className="grid grid-cols-projects gap-10 max-sm:grid-cols-1 max-sm:gap-8">
          {fundraisings
            .filter(({ isCompleted }) => !isCompleted)
            .sort((fundraising1, fundraising2) => Number(fundraising1.deadline) - Number(fundraising2.deadline))
            .map((fundraising) => (
              <ProjectCard key={fundraising.threadTokenCurrency} data={fundraising} linkSection="all-projects" />
            ))}
        </div>
      )}
      {fetchFundraisingsError && <div className="text-error">{fetchFundraisingsError}</div>}
    </Common>
  );
};

export default Page;
