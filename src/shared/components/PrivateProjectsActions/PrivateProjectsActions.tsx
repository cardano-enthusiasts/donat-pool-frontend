import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useReceiveFunds } from 'shared/helpers/hooks';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { reset } from 'store/slices/fundsReceiving';

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
      navigate('/my-projects');
      dispatch(reset());
    }
  }, [status, dispatch, navigate]);

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
        {protocol?.protocolFeeParam && (
          <Commission>
            We remind you that our commission is {protocol.protocolFeeParam}%
          </Commission>
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
          dispatch(reset());
        }}
      />
    </>
  );
};

export { PrivateProjectsActions };
