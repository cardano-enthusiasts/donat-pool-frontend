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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false);
  const [modalLoadingIsOpen, setModalLoadingIsOpen] = useState(false);
  const [modalSuccessIsOpen, setModalSuccessIsOpen] = useState(false);
  const donate = useDonate();

  const donateStatus = useAppSelector((state) => state.donating.status);
  const donateError = useAppSelector((state) => state.donating.error);

  useEffect(() => {
    const requesting = donateStatus === 'requesting';
    setModalLoadingIsOpen(requesting);

    const requestIsSuccessful = donateStatus === 'success';
    const requestWithError = donateStatus === 'error';
    if (requesting || requestIsSuccessful || requestWithError) {
      setModalIsOpen(false);
    }
    if (requestIsSuccessful) {
      setModalSuccessIsOpen(true);
    }
    if (requestWithError) {
      setModalErrorIsOpen(true);
    }
  }, [donateStatus]);

  function handleDonateButtonClick() {
    setModalIsOpen(true);
  }

  function handleDonateModalClose() {
    setModalIsOpen(false);
  }

  function handleErrorModalClose() {
    setModalErrorIsOpen(false);
    dispatch(reset());
  }

  function handleSuccessModalClose() {
    setModalSuccessIsOpen(false);
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
          open={modalIsOpen}
          data={{
            threadTokenCurrency: fundraising.threadTokenCurrency,
            threadTokenName: fundraising.threadTokenName,
          }}
          donate={donate}
          onClose={handleDonateModalClose}
        />
      )}
      <ModalError
        open={modalErrorIsOpen}
        title="How many ADA would you like to donate?"
        errorText={donateError}
        onClose={handleErrorModalClose}
      />
      <ModalLoading open={modalLoadingIsOpen} title="How many ADA would you like to donate?" />
      <ModalSuccess
        open={modalSuccessIsOpen}
        description="Congratulations! Your donut is ready!"
        onClose={handleSuccessModalClose}
      />
    </>
  );
}

export default Page;
