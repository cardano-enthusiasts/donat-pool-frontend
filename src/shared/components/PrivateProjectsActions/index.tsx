'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { reset } from '@/redux/slices/fundsReceiving';
import { ModalError, ModalLoading, ModalSuccess, PrimaryButton, SecondaryButton } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useReceiveFunds } from '@/shared/hooks';

import styles from './styles.module.css';
import type { Props } from './types';

function PrivateProjectsActions({ project }: Props) {
  const [modalSuccessIsShown, setModalSuccessIsShown] = useState(false);
  const [modalErrorIsShown, setModalErrorIsShown] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const receiveFunds = useReceiveFunds();

  const {
    fundsReceiving: { error, status },
    appInfo: { protocol },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (error) {
      setModalErrorIsShown(true);
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (status === 'success') {
      setModalErrorIsShown(true);
      router.push(ROUTES.myDonatPools);
      dispatch(reset());
    }
  }, [status, dispatch, router]);

  const link = window.location.href.replace(ROUTES.myDonatPools, ROUTES.donatPools);

  async function copyContent() {
    try {
      await navigator.clipboard.writeText(link);
      setModalSuccessIsShown(true);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  function handleCopyLinkClick() {
    copyContent().catch((err) => {
      console.error('Failed to copy: ', err);
    });
  }

  function handleCollectMoneyButtonClick() {
    receiveFunds({
      frThreadTokenCurrency: project.threadTokenCurrency,
      frThreadTokenName: project.threadTokenName,
    });
  }

  function handleErrorModalClose() {
    setModalErrorIsShown(false);
    dispatch(reset());
  }

  function handleSuccessModalClose() {
    setModalSuccessIsShown(false);
    dispatch(reset());
  }

  return project.isCompleted ? (
    <>
      <div className="mt-6 flex flex-col items-center gap-4">
        <PrimaryButton stretchy size="lg" onClick={handleCollectMoneyButtonClick}>
          {Number(project.raisedAmt) >= Number(project.goal)
            ? 'You have reached the goal! Take money'
            : 'Project reached its deadline. Collect fund'}
        </PrimaryButton>
        {protocol?.protocolFeeParam && (
          <div className="text-red">We remind you that our commission is {protocol.protocolFeeParam}%</div>
        )}
      </div>
      {status === 'requesting' && <ModalLoading />}
      {modalErrorIsShown && (
        <ModalError title="Withdrawal of funds" errorText={error} onClose={handleErrorModalClose} />
      )}
    </>
  ) : (
    <>
      <div className={`${styles.link} text-blue`}>
        {link}
        <div className="shrink-0">
          <SecondaryButton
            backgroundColor="white"
            textColor="blue"
            shadowColor="whiteBlue"
            onClick={handleCopyLinkClick}
          >
            Copy and share
          </SecondaryButton>
        </div>
      </div>
      {modalSuccessIsShown && (
        <ModalSuccess description="Link copied to clipboard." onClose={handleSuccessModalClose} />
      )}
    </>
  );
}

export default PrivateProjectsActions;
