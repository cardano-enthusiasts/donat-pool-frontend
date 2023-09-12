'use client';

import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { reset } from '@/redux/slices/donating';
import {
  ModalDonate,
  ModalError,
  ModalLoading,
  ModalSuccess,
  AccentButton,
  RaisedCounter,
  Layout,
  Loader,
} from '@/shared/components';
import { convertLovelaceToADA, formatDate } from '@/shared/helpers';
import { useQueriedDonatPool, useDonate } from '@/shared/hooks';

function DonatPool() {
  const dispatch = useAppDispatch();
  const { isBeingFetched: donatPoolIsBeingFetched, donatPool, fetchError: fetchDonatPoolError } = useQueriedDonatPool();
  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalErrorIsShown, setModalErrorIsShown] = useState(false);
  const [modalLoadingIsShown, setModalLoadingIsShown] = useState(false);
  const [modalSuccessIsShown, setModalSuccessIsShown] = useState(false);
  const donate = useDonate();

  const donateStatus = useAppSelector((state) => state.donating.status);
  const donateError = useAppSelector((state) => state.donating.error);

  useEffect(() => {
    const requesting = donateStatus === 'requesting';
    setModalLoadingIsShown(requesting);

    const requestIsSuccessful = donateStatus === 'success';
    const requestWithError = donateStatus === 'error';
    if (requesting || requestIsSuccessful || requestWithError) {
      setModalIsShown(false);
    }
    if (requestIsSuccessful) {
      setModalSuccessIsShown(true);
    }
    if (requestWithError) {
      setModalErrorIsShown(true);
    }
  }, [donateStatus]);

  function handleDonateButtonClick() {
    setModalIsShown(true);
  }

  function handleDonateModalClose() {
    setModalIsShown(false);
  }

  function handleErrorModalClose() {
    setModalErrorIsShown(false);
    dispatch(reset());
  }

  function handleSuccessModalClose() {
    setModalSuccessIsShown(false);
    dispatch(reset());
  }

  return (
    <Layout error={fetchDonatPoolError}>
      {donatPoolIsBeingFetched && <Loader />}
      {donatPool && (
        <div className="pb-40 pt-20">
          <h1
            className="mb-6
              overflow-hidden
              text-ellipsis
              whitespace-nowrap
              text-center
              font-rammetto-one
              text-[3.375rem]/[125%]
              text-red
              max-lg:text-[2.25rem]
              max-sm:text-[2.25rem]"
          >
            {donatPool.title}
          </h1>
          <div className="border-b-2 border-t-2 border-black py-6 text-center text-xl font-bold">
            Until {formatDate(Number(donatPool.deadline))}
          </div>
          <div className="mb-10 mt-6">
            <RaisedCounter
              raised={convertLovelaceToADA(donatPool.raisedAmt)}
              goal={convertLovelaceToADA(donatPool.goal)}
            />
          </div>
          <div className="flex justify-center">
            <AccentButton primaryColor="yellow" secondaryColor="red" fontColor="red" onClick={handleDonateButtonClick}>
              Donate
            </AccentButton>
          </div>
        </div>
      )}
      {donatPool && modalIsShown && (
        <ModalDonate
          data={{
            threadTokenCurrency: donatPool.threadTokenCurrency,
            threadTokenName: donatPool.threadTokenName,
          }}
          donate={donate}
          onClose={handleDonateModalClose}
        />
      )}
      {modalErrorIsShown && (
        <ModalError
          title="How many ADA would you like to donate?"
          errorText={donateError}
          onClose={handleErrorModalClose}
        />
      )}
      {modalLoadingIsShown && <ModalLoading title="How many ADA would you like to donate?" />}
      {modalSuccessIsShown && (
        <ModalSuccess description="Congratulations! Your donut is ready!" onClose={handleSuccessModalClose} />
      )}
    </Layout>
  );
}

export default DonatPool;
