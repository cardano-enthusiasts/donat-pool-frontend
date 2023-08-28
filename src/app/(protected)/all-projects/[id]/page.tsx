'use client';

import { useEffect, useState } from 'react';

import { Common } from '@/layouts';
import { reset } from '@/redux/slices/donating';
import { ModalDonate, ModalError, ModalLoading, ModalSuccess, AccentButton } from '@/shared/components';
import { formatDate } from '@/shared/helpers';
import { useAppDispatch, useAppSelector, useQueriedFundraising, useDonate } from '@/shared/hooks';

function Page() {
  const dispatch = useAppDispatch();
  const {
    isBeingFetched: fundraisingIsBeingFetched,
    fundraising,
    fetchError: fetchFundraisingError,
  } = useQueriedFundraising();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalLoadingOpen, setIsModalLoadingOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const donate = useDonate();

  const donateStatus = useAppSelector((state) => state.donating.status);
  const donateError = useAppSelector((state) => state.donating.error);

  useEffect(() => {
    const requesting = donateStatus === 'requesting';
    setIsModalLoadingOpen(requesting);

    const requestSuccessful = donateStatus === 'success';
    const requestWithError = donateStatus === 'error';
    if (requesting || requestSuccessful || requestWithError) {
      setIsModalOpen(false);
    }
    if (requestSuccessful) {
      setIsModalSuccessOpen(true);
    }
    if (requestWithError) {
      setIsModalErrorOpen(true);
    }
  }, [donateStatus]);

  function handleDonateButtonClick() {
    setIsModalOpen(true);
  }

  function handleDonateModalClose() {
    setIsModalOpen(false);
  }

  function handleErrorModalClose() {
    setIsModalErrorOpen(false);
    dispatch(reset());
  }

  function handleSuccessModalClose() {
    setIsModalSuccessOpen(false);
    dispatch(reset());
  }

  return (
    <>
      <Common>
        {fundraisingIsBeingFetched && <div>fundraising is being fetched</div>}
        {fundraising && (
          <div className="pb-40 pt-20">
            <h1 className="mb-6 overflow-hidden text-ellipsis whitespace-nowrap text-center font-rammetto-one text-[3.375rem] leading-[104%] text-red max-lg:text-[2.25rem] max-sm:text-[2.25rem]">
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
                onClick={handleDonateButtonClick}
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
          data={{
            threadTokenCurrency: fundraising.threadTokenCurrency,
            threadTokenName: fundraising.threadTokenName,
          }}
          donate={donate}
          onClose={handleDonateModalClose}
        />
      )}
      <ModalError
        isOpen={isModalErrorOpen}
        title="How many ADA would you like to donate?"
        errorText={donateError}
        onClose={handleErrorModalClose}
      />
      <ModalLoading isOpen={isModalLoadingOpen} title="How many ADA would you like to donate?" />
      <ModalSuccess
        isOpen={isModalSuccessOpen}
        description="Congratulations! Your donut is ready!"
        onClose={handleSuccessModalClose}
      />
    </>
  );
}

export default Page;
