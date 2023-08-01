import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useReceiveFunds } from '@/shared/helpers/hooks';
import { type AppReduxState } from '@/shared/types';

import {
  ButtonWrapper,
  Commission,
  LinkWrapper,
  WithdrawSection,
} from './PrivateProjectsActions.styled';
import { type Props } from './types';
import { Button, ModalError, ModalLoading, ModalSuccess } from '../.';

const PrivateProjectsActions = ({ project }: Props) => {
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate('/my-projects');
  };
  const onError = () => {
    setIsModalErrorOpen(true);
  };
  const receiveFunds = useReceiveFunds({ onSuccess, onError });
  const { protocolFeeParam } = useSelector(
    (state: AppReduxState) => state.protocol.data.config,
  );
  const { isRequesting, error } = useSelector(
    (state: AppReduxState) => state.fundraising.communication.receiveFunds,
  );
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
        <Button
          primaryColor="red"
          secondaryColor="blue"
          width="100%"
          onClick={() => {
            receiveFunds({
              frThreadTokenCurrency: project.threadTokenCurrency,
              frThreadTokenName: project.threadTokenName,
            });
          }}
          fontColor="white"
        >
          {project.raisedAmount >= project.goal
            ? 'You have reached the goal! Take money'
            : 'Project reached its deadline. Collect fund'}
        </Button>
        <Commission>
          We remind you that our commission is {protocolFeeParam}%
        </Commission>
      </WithdrawSection>

      <ModalLoading isOpen={isRequesting} />
      <ModalError
        isOpen={isModalErrorOpen}
        title="Withdrawal of funds"
        errorText={error}
        onClose={() => {
          setIsModalErrorOpen(false);
        }}
      />
    </>
  ) : (
    <>
      <LinkWrapper>
        {link}
        <ButtonWrapper>
          <Button
            themeType="double-bordered"
            tertiaryColor="white"
            size="s"
            primaryColor="blue"
            onClick={handleCopyLinkClick}
          >
            Copy link
          </Button>
        </ButtonWrapper>
      </LinkWrapper>
      <ModalSuccess
        description="Link copied to clipboard."
        isOpen={isModalSuccessOpen}
        onClose={() => {
          setIsModalSuccessOpen(false);
        }}
      />
    </>
  );
};

export { PrivateProjectsActions };
