'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { reset } from '@/redux/slices/fundsReceiving';
import { DoubleBorderedButton, ModalError, ModalLoading, ModalSuccess, StandardButton } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useAppDispatch, useAppSelector, useReceiveFunds } from '@/shared/hooks';

import styles from './styles.module.css';
import { Props } from './types';

function PrivateProjectsActions({ project }: Props) {
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const receiveFunds = useReceiveFunds();

  const {
    fundsReceiving: { error, status },
    appInfo: { protocol },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (error) {
      setIsModalErrorOpen(true);
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (status === 'success') {
      setIsModalErrorOpen(true);
      router.push(ROUTES.myDonatPools);
      dispatch(reset());
    }
  }, [status, dispatch, router]);

  const link = window.location.href.replace(ROUTES.myDonatPools, ROUTES.donatPools);

  async function copyContent() {
    try {
      await navigator.clipboard.writeText(link);
      setIsModalSuccessOpen(true);
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
    setIsModalErrorOpen(false);
    dispatch(reset());
  }

  function handleSuccessModalClose() {
    setIsModalSuccessOpen(false);
    dispatch(reset());
  }

  return project.completed ? (
    <>
      <div className="mt-6 flex flex-col items-center gap-4">
        <StandardButton
          primaryColor="red"
          secondaryColor="blue"
          isFullWidth
          fontColor="white"
          onClick={handleCollectMoneyButtonClick}
        >
          {Number(project.raisedAmt) >= Number(project.goal)
            ? 'You have reached the goal! Take money'
            : 'Project reached its deadline. Collect fund'}
        </StandardButton>
        {protocol?.protocolFeeParam && (
          <div className="text-red">We remind you that our commission is {protocol.protocolFeeParam}%</div>
        )}
      </div>
      <ModalLoading open={status === 'requesting'} />
      <ModalError
        open={isModalErrorOpen}
        title="Withdrawal of funds"
        errorText={error}
        onClose={handleErrorModalClose}
      />
    </>
  ) : (
    <>
      <div className={`${styles.link} text-blue`}>
        {link}
        <div className="shrink-0">
          <DoubleBorderedButton backgroundColor="white" size="s" primaryColor="blue" onClick={handleCopyLinkClick}>
            Copy and share
          </DoubleBorderedButton>
        </div>
      </div>
      <ModalSuccess
        open={isModalSuccessOpen}
        description="Link copied to clipboard."
        onClose={handleSuccessModalClose}
      />
    </>
  );
}

export default PrivateProjectsActions;
