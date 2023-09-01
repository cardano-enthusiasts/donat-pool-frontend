'use client';

import { useEffect, useState } from 'react';

import { DoubleBorderedButton, Input, Modal, StandardButton } from '@/shared/components';

import { type Props } from './types';

function ModalDonate({ shown, onClose, data: { threadTokenCurrency, threadTokenName }, donate }: Props) {
  const [value, setValue] = useState<'' | number>('');

  useEffect(() => {
    setValue('');
  }, [shown]);

  function handleChange(event: React.ChangeEvent<Element>) {
    const target = event.target as HTMLInputElement;
    const currentValue = target.value === '' ? '' : Number(target.value);
    setValue(currentValue);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
    <Modal shown={shown}>
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
