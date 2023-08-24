import { useEffect, useState } from 'react';

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
      <h2 className="mb-10 text-center font-rammetto-one text-4xl text-red">How many ADA would you like to donate?</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <Input value={value} onChange={handleChange} type="number" />
        </div>
        <div className="flex gap-6">
          <DoubleBorderedButton
            backgroundColor="white"
            primaryColor="blue"
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </DoubleBorderedButton>
          <StandardButton primaryColor="red" secondaryColor="blue" isFullWidth={true} type="submit" fontColor="white">
            Donate
          </StandardButton>
        </div>
      </form>
    </Modal>
  );
};

export { ModalDonate };
