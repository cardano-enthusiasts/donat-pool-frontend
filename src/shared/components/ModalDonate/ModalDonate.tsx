import { useEffect, useState } from 'react';

import { Props } from './types';
import { DoubleBorderedButton, Input, Modal, StandardButton } from '../.';

function ModalDonate({ open, onClose, data: { threadTokenCurrency, threadTokenName }, donate }: Props) {
  const [value, setValue] = useState<'' | number>('');

  useEffect(() => {
    setValue('');
  }, [open]);

  function handleChange(event: any) {
    const currentValue = event.target.value === '' ? '' : Number(event.target.value);
    setValue(currentValue);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if (value !== '') {
      donate(
        {
          frThreadTokenCurrency: threadTokenCurrency,
          frThreadTokenName: threadTokenName,
        },
        value,
      );
    }
  }

  return (
    <Modal open={open}>
      <h2 className="mb-10 text-center font-rammetto-one text-4xl text-red">How many ADA would you like to donate?</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <Input value={value} type="number" onChange={handleChange} />
        </div>
        <div className="flex gap-6">
          <DoubleBorderedButton backgroundColor="white" primaryColor="blue" onClick={onClose}>
            Cancel
          </DoubleBorderedButton>
          <StandardButton primaryColor="red" secondaryColor="blue" isFullWidth type="submit" fontColor="white">
            Donate
          </StandardButton>
        </div>
      </form>
    </Modal>
  );
}

export default ModalDonate;
