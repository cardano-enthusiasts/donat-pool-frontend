'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Common } from '@/layouts';
import { ManagementParams, ManagerEditor } from '@/shared/components';
import { useAppSelector } from '@/store/hooks';

import { Title, Wrapper } from './Management.styled';

const Management = () => {
  const {
    appInfo: { userInfo, protocol },
    wallet: { status },
  } = useAppSelector((state) => state);

  const router = useRouter();

  useEffect(() => {
    document.title = 'Management';
  }, []);

  useEffect(() => {
    if (userInfo && !userInfo.isManager) {
      router.push('/all-projects');
    }
  }, [userInfo]);

  return status !== 'requesting' ? (
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
  ) : (
    <></>
  );
};
export default Management;