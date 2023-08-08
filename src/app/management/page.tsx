'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { ManagementParams, ManagerEditor } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useAppSelector } from '@/store/hooks';

import { Title, Wrapper } from './Management.styled';

const Page = () => {
  const {
    appInfo: { userInfo, protocol },
    connectWallet: { status },
  } = useAppSelector((state) => state);

  const router = useRouter();

  useEffect(() => {
    document.title = 'Management';
  }, []);

  useEffect(() => {
    if (userInfo && !userInfo.isManager) {
      router.push(ROUTES.allFundraisings);
    }
  }, [userInfo]);

  return (
    status !== 'requesting' && (
      <Common>
        <Title>Management contract</Title>
        <Wrapper>
          {protocol && (
            <>
              <ManagerEditor config={protocol} />
              <ManagementParams config={protocol} />
            </>
          )}
        </Wrapper>
      </Common>
    )
  );
};
export default Page;
