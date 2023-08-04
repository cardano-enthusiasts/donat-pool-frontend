'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Common } from '@/layouts';
import { ManagementParams, ManagerEditor } from '@/shared/components';
import { type AppReduxState } from '@/shared/types';

import { Title, Wrapper } from './Management.styled';

const Management = () => {
  const {
    protocol: {
      data: { config },
    },
    info: {
      communication: {
        setWalletStatus: { isRequesting },
      },
      data: {
        user: { isManager },
      },
    },
  } = useSelector((state: AppReduxState) => state);
  const router = useRouter();

  useEffect(() => {
    document.title = 'Management';
  }, []);

  useEffect(() => {
    if (isManager === false) {
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
