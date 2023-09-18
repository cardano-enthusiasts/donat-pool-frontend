'use client';

import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { reset } from '@/redux/slices/donating';
import {
  ModalDonate,
  ModalError,
  ModalLoading,
  ModalSuccess,
  RaisedCounter,
  Layout,
  Loader,
  ConnectWalletModal,
  QuaternaryButton,
} from '@/shared/components';
import { convertLovelaceToADA, formatDate } from '@/shared/helpers';
import { useQueriedDonatPool, useDonate, useCardano } from '@/shared/hooks';

function DonatPool() {
  const dispatch = useAppDispatch();
  const { isBeingFetched: donatPoolIsBeingFetched, donatPool, fetchError: fetchDonatPoolError } = useQueriedDonatPool();
  const { connectedWalletCardanoKey } = useCardano();
  const [modalDonateIsShown, setModalDonateIsShown] = useState(false);
  const [modalErrorIsShown, setModalErrorIsShown] = useState(false);
  const [modalLoadingIsShown, setModalLoadingIsShown] = useState(false);
  const [modalSuccessIsShown, setModalSuccessIsShown] = useState(false);
  const [modalConnectIsShown, setModalConnectIsShown] = useState(false);
  const donate = useDonate();

  const donateStatus = useAppSelector((state) => state.donating.status);
  const donateError = useAppSelector((state) => state.donating.error);

  useEffect(() => {
    const requesting = donateStatus === 'requesting';
    setModalLoadingIsShown(requesting);

    const requestIsSuccessful = donateStatus === 'success';
    const requestWithError = donateStatus === 'error';
    if (requesting || requestIsSuccessful || requestWithError) {
      setModalDonateIsShown(false);
    }
    if (requestIsSuccessful) {
      setModalSuccessIsShown(true);
    }
    if (requestWithError) {
      setModalErrorIsShown(true);
    }
  }, [donateStatus]);

  function handleDonateButtonClick() {
    if (connectedWalletCardanoKey) {
      setModalDonateIsShown(true);
    } else {
      setModalConnectIsShown(true);
    }
  }

  function handleDonateModalClose() {
    setModalDonateIsShown(false);
  }

  function handleErrorModalClose() {
    setModalErrorIsShown(false);
    dispatch(reset());
  }

  function handleSuccessModalClose() {
    setModalSuccessIsShown(false);
    dispatch(reset());
  }

  function handleConnectModalClose() {
    setModalConnectIsShown(false);
  }

  function handleWalletConnect() {
    setModalDonateIsShown(true);
    setModalConnectIsShown(false);
  }

  return (
    <Layout error={JSON.stringify(fetchDonatPoolError)}>
      {donatPoolIsBeingFetched ? (
        <Loader />
      ) : (
        donatPool && (
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
              <QuaternaryButton size="lg" onClick={handleDonateButtonClick}>
                Donate
              </QuaternaryButton>
            </div>
          </div>
        )
      )}
      {donatPool && modalDonateIsShown && (
        <ModalDonate
          data={{
            threadTokenCurrency: donatPool.threadTokenCurrency,
            threadTokenName: donatPool.threadTokenName,
          }}
          donate={donate}
          onClose={handleDonateModalClose}
        />
      )}
      {!connectedWalletCardanoKey && modalConnectIsShown && (
        <ConnectWalletModal onWalletConnect={handleWalletConnect} onClose={handleConnectModalClose} />
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
