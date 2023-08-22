'use client';

import { useEffect, useState } from 'react';

import { Common } from '@/layouts';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { reset } from '@/redux/slices/donating';
import { ModalDonate, ModalError, ModalLoading, ModalSuccess, AccentButton } from '@/shared/components';
import { formatDate } from '@/shared/helpers';
import { useQueriedFundraising } from '@/shared/hooks';
import { useDonate } from '@/shared/hooks';

const Page = () => {
  const dispatch = useAppDispatch();
  const {
    isBeingFetched: fundraisingIsBeingFetched,
    fundraising,
    error: fetchFundraisingError,
  } = useQueriedFundraising();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalLoadingOpen, setIsModalLoadingOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const donate = useDonate();

  const donateStatus = useAppSelector((state) => state.donating.status);
  const donateError = useAppSelector((state) => state.donating.error);

  useEffect(() => {
    const isRequesting = donateStatus === 'requesting';
    setIsModalLoadingOpen(isRequesting);

    const isSuccessfully = donateStatus === 'success';
    const isError = donateStatus === 'error';
    if (isRequesting || isSuccessfully || isError) {
      setIsModalOpen(false);
    }
    if (isSuccessfully) {
      setIsModalSuccessOpen(true);
    }
    if (isError) {
      setIsModalErrorOpen(true);
    }
  }, [donateStatus]);

  return (
    <>
      <Common>
        {fundraisingIsBeingFetched && <div>fundraising is being fetched</div>}
        {fundraising && (
          <div className="pb-40 pt-20">
            <h1 className="mb-6 overflow-hidden text-ellipsis whitespace-nowrap text-center font-rammetto-one text-[3.375rem] leading-[104%] text-red max-lg:text-[36px] max-sm:text-[2.25rem]">
              {fundraising.title}
            </h1>
            <div className="border-b-2 border-t-2 border-black py-6 text-center text-xl font-bold">
              Until {formatDate(Number(fundraising.deadline))}
            </div>
            <div className="mx-0 mb-10 mt-6" />

            <div className="flex justify-center">
              <AccentButton
                primaryColor="yellow"
                secondaryColor="red"
                fontColor="red"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Donate
              </AccentButton>
            </div>
          </div>
        )}
        {fetchFundraisingError && <div className="text-error">An error happened while fetching the fundraising</div>}
      </Common>
      {fundraising && (
        <ModalDonate
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          data={{
            threadTokenCurrency: fundraising.threadTokenCurrency,
            threadTokenName: fundraising.threadTokenName,
          }}
          donate={donate}
        />
      )}
      <ModalError
        isOpen={isModalErrorOpen}
        title="How many ADA would you like to donate?"
        errorText={donateError}
        onClose={() => {
          setIsModalErrorOpen(false);
          dispatch(reset());
        }}
      />
      <ModalLoading isOpen={isModalLoadingOpen} title="How many ADA would you like to donate?" />
      <ModalSuccess
        isOpen={isModalSuccessOpen}
        description="Congratulations! Your donut is ready!"
        onClose={() => {
          setIsModalSuccessOpen(false);
          dispatch(reset());
        }}
      />
    </>
  );
};

export default Page;
