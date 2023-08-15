import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { reset } from '@/redux/slices/fundsReceiving';
import { ROUTES } from '@/shared/constants';
import { useReceiveFunds } from '@/shared/hooks';

import { ButtonWrapper, Commission, LinkWrapper, WithdrawSection } from './PrivateProjectsActions.styled';
import type { Props } from './types';
import { DoubleBorderedButton, ModalError, ModalLoading, ModalSuccess, StandardButton } from '../.';

const PrivateProjectsActions = ({ project }: Props) => {
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
      router.push(ROUTES.userFundraisings);
      dispatch(reset());
    }
  }, [status, dispatch, router]);

  const link = window.location.href;

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setIsModalSuccessOpen(true);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCopyLinkClick = () => {
    copyContent().catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  return project.isCompleted ? (
    <>
      <WithdrawSection>
        <StandardButton
          primaryColor="red"
          secondaryColor="blue"
          isFullWidth={true}
          onClick={() => {
            receiveFunds({
              frThreadTokenCurrency: project.threadTokenCurrency,
              frThreadTokenName: project.threadTokenName,
            });
          }}
          fontColor="white"
        >
          {Number(project.raisedAmt) >= Number(project.goal)
            ? 'You have reached the goal! Take money'
            : 'Project reached its deadline. Collect fund'}
        </StandardButton>
        {protocol?.protocolFeeParam && (
          <Commission>We remind you that our commission is {protocol.protocolFeeParam}%</Commission>
        )}
      </WithdrawSection>

      <ModalLoading isOpen={status === 'requesting'} />
      <ModalError
        isOpen={isModalErrorOpen}
        title="Withdrawal of funds"
        errorText={error}
        onClose={() => {
          setIsModalErrorOpen(false);
          dispatch(reset());
        }}
      />
    </>
  ) : (
    <>
      <LinkWrapper>
        {link}
        <ButtonWrapper>
          <DoubleBorderedButton backgroundColor="white" size="s" primaryColor="blue" onClick={handleCopyLinkClick}>
            Copy link
          </DoubleBorderedButton>
        </ButtonWrapper>
      </LinkWrapper>
      <ModalSuccess
        description="Link copied to clipboard."
        isOpen={isModalSuccessOpen}
        onClose={() => {
          setIsModalSuccessOpen(false);
          dispatch(reset());
        }}
      />
    </>
  );
};

export { PrivateProjectsActions };
