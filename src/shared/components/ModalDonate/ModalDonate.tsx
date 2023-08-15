import { useEffect, useState } from 'react';

import { Buttons, InputWrapper, Title } from './ModalDonate.styled';
import type { Props } from './types';
import { DoubleBorderedButton, Input, Modal, StandardButton } from '../.';

const ModalDonate = ({ isOpen, onClose, data: { threadTokenCurrency, threadTokenName }, donate }: Props) => {
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

  const handleChange = (event: any) => {
    const currentValue = event.target.value === '' ? '' : Number(event.target.value);
    setValue(currentValue);
  };

  const handleSubmit = (event: any) => {
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
          <DoubleBorderedButton
            backgroundColor="white"
            onClick={() => {
              handleClose();
            }}
            primaryColor="blue"
          >
            Cancel
          </DoubleBorderedButton>
          <StandardButton primaryColor="red" secondaryColor="blue" isFullWidth={true} type="submit" fontColor="white">
            Donate
          </StandardButton>
        </Buttons>
      </form>
    </Modal>
  );
};

export { ModalDonate };
