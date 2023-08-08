import { useEffect, useState } from 'react';

import { Buttons, InputWrapper, Title } from './ModalDonate.styled';
import { type Props } from './types';
import { Button, Input, Modal } from '../.';

const ModalDonate = ({
  isOpen,
  onClose,
  data: { threadTokenCurrency, threadTokenName },
  donate,
}: Props) => {
  const [value, setValue] = useState<'' | number>('');

  const fundraisingData = {
    frThreadTokenCurrency: threadTokenCurrency,
    frThreadTokenName: threadTokenName,
  };

  useEffect(() => {
    setValue('');
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

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

  return (
    <Modal isOpen={isOpen}>
      <Title>How many ADA would you like to donate?</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input value={value} onChange={handleChange} type="number" />
        </InputWrapper>
        <Buttons>
          <Button
            themeType="double-bordered"
            backgroundColor="white"
            onClick={() => {
              handleClose();
            }}
            primaryColor="blue"
          >
            Cancel
          </Button>
          <Button
            themeType="standard"
            primaryColor="red"
            secondaryColor="blue"
            width="100%"
            type="submit"
            fontColor="white"
          >
            Donate
          </Button>
        </Buttons>
      </form>
    </Modal>
  );
};

export { ModalDonate };
