'use client';

import { useState } from 'react';

import { Input, Modal, SecondaryButton, PrimaryButton } from '@/shared/components';

import type { Props } from './types';

function ModalDonate({ data: { threadTokenCurrency, threadTokenName }, donate, onClose }: Props) {
  const [value, setValue] = useState<'' | number>('');

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
    <Modal>
      <h2 className="mb-10 text-center font-rammetto-one text-4xl text-red">How many ADA would you like to donate?</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <Input value={value} type="number" onChange={handleChange} />
        </div>
        <div className="flex gap-6">
          <SecondaryButton size="lg" backgroundColor="white" textColor="blue" shadowColor="whiteBlue" onClick={onClose}>
            Cancel
          </SecondaryButton>
          <PrimaryButton stretchy size="lg" type="submit">
            Donate
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  );
}

export default ModalDonate;
