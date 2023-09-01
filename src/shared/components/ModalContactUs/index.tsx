'use client';

import { useState } from 'react';

import { DoubleBorderedButton, Input, Modal, StandardButton } from '@/shared/components';

import { Props } from './types';

function ModalContactUs({ shown, onClose }: Props) {
  const initialData = { contact: '', name: '', message: '' };
  const [data, setData] = useState(initialData);

  function handleInputChange(event: React.ChangeEvent<Element>, fieldName: 'contact' | 'name' | 'message') {
    const { value } = event.target as HTMLInputElement;
    setData({
      ...data,
      [fieldName]: value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleCancelClick() {
    onClose();
    setData(initialData);
  }

  return (
    <Modal shown={shown}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-6">
          <h1
            className="font-rammetto-one
              text-[3.375rem]
              leading-[104%]
              text-red
              max-lg:text-[2.25rem] 
              max-sm:text-[2.25rem]"
          >
            Contact us
          </h1>
          <div>You can report about an error or write to us how we can help you.</div>
          <Input
            value={data.contact}
            onChange={(event) => {
              handleInputChange(event, 'contact');
            }}
            placeholder="+0 / mail@mail.com / @nickname"
          >
            Phone / E-mail / Telegram nickname
          </Input>
          <Input
            value={data.name}
            onChange={(event) => {
              handleInputChange(event, 'name');
            }}
            placeholder="Elon Mask"
          >
            Your Name
          </Input>
          <Input
            value={data.message}
            onChange={(event) => {
              handleInputChange(event, 'message');
            }}
            placeholder="Hello!"
            multiline
            rows={6}
          >
            Your Message
          </Input>
        </div>

        <div className="mt-10 flex w-full gap-6">
          <DoubleBorderedButton primaryColor="blue" backgroundColor="white" onClick={handleCancelClick}>
            Cancel
          </DoubleBorderedButton>
          <StandardButton type="submit" primaryColor="red" secondaryColor="blue" fontColor="white" isFullWidth>
            Send
          </StandardButton>
        </div>
      </form>
    </Modal>
  );
}

export default ModalContactUs;
