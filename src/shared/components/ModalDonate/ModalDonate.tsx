import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useDonate } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import {
  Buttons,
  Error,
  InputWrapper,
  Loading,
  LoadingDonut,
  Success,
  Title,
} from './ModalDonate.styled';
import { type Props } from './types';
import { Button, Input, Modal } from '../.';

const ModalDonate = ({
  isOpen,
  onClose,
  data: { threadTokenCurrency, threadTokenName },
}: Props) => {
  const [value, setValue] = useState<'' | number>('');
  const [status, setStatus] = useState<keyof typeof content>('default');
  const { isRequesting, error } = useSelector(
    (state: AppReduxState) => state.fundraising.communication.donate
  );
  const fundraisingData = {
    frThreadTokenCurrency: threadTokenCurrency,
    frThreadTokenName: threadTokenName,
  };
  const handleDonateSuccess = () => {
    setStatus('success');
  };
  const handleDonateError = () => {
    setStatus('error');
  };
  const donate = useDonate({
    onSuccess: handleDonateSuccess,
    onError: handleDonateError,
  });
  const handleClose = () => {
    onClose();
    setStatus('default');
  };

  useEffect(() => {
    if (isRequesting) {
      setStatus('loading');
    }
  }, [isRequesting]);

  const handleChange = (event) => {
    const currentValue =
      event.target.value === '' ? '' : Number(event.target.value);
    setValue(currentValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== '') {
      donate(fundraisingData, value);
    }
  };

  const defaultTitle = (
    <Title>
      How many ADA would
      <br /> you like to donate?
    </Title>
  );

  const content = {
    success: (
      <>
        <Title>Well done!</Title>
        <Success>
          <img src="img/happy-cat.svg" alt="happy cat" />
          <div>Congratulations! Your donut is ready!</div>
        </Success>
      </>
    ),
    error: (
      <>
        {defaultTitle}
        <Error>
          <img src="img/bitten-donut.svg" alt="bitten donut" />
          <div>{error}</div>
          <Button
            themeType="tertiary"
            primaryColor="blue"
            width="100%"
            onClick={() => {
              handleClose();
            }}
          >
            Close button
          </Button>
        </Error>
      </>
    ),
    loading: (
      <>
        {defaultTitle}
        <Loading>
          <LoadingDonut src="img/progress-bar.svg" alt="progress bar" />
          <div>Please wait a bit. We are preparing your donut</div>
        </Loading>
      </>
    ),
    default: (
      <>
        {defaultTitle}
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input value={value} onChange={handleChange} />
          </InputWrapper>
          <Buttons>
            <Button
              themeType="tertiary"
              onClick={() => {
                handleClose();
              }}
              primaryColor="blue"
            >
              Cancel
            </Button>
            <Button
              primaryColor="red"
              secondaryColor="blue"
              width="100%"
              type="submit"
            >
              Donate
            </Button>
          </Buttons>
        </form>
      </>
    ),
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {content[status]}
    </Modal>
  );
};

export { ModalDonate };
