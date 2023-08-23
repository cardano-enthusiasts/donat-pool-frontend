'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { useAppSelector } from '@/redux/hooks';
import { ManagementParams, ManagerEditor } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

const Page = () => {
  const {
    appInfo: { userInfo, protocol },
    connectWallet: { requestStatus: status },
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
        <h1 className="mb-15 mt-20 font-rammetto-one text-[3.375rem] leading-[104%] text-red max-lg:text-[2.25rem] max-md:mb-8 max-md:mt-14 max-sm:mb-4 max-sm:text-[2.25rem]">
          Management contract
        </h1>
        <div className="mb-40 flex justify-between gap-10 max-md:mb-14 max-md:flex-col">
          {protocol && (
            <>
              <ManagerEditor config={protocol} />
              <ManagementParams config={protocol} />
            </>
          )}
        </div>
      </Common>
    )
  );
};
export default Page;
