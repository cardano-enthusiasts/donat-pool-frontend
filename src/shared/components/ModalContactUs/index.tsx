'use client';

import { useState } from 'react';

import { DoubleBorderedButton, Input, Modal, StandardButton } from '@/shared/components';

import { Props } from './types';

function ModalContactUs({ onClose }: Props) {
  const [data, setData] = useState({ contact: '', name: '', message: '' });

  function handleInputChange(event: any, fieldName: 'contact' | 'name' | 'message') {
    const { value } = event.target as HTMLInputElement;

    setData({
      ...data,
      [fieldName]: value,
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <Modal shown title="Contact us" description="You can report about an error or write to us how we can help you.">
      <form onSubmit={handleSubmit}>
        <div className="mb-10 space-y-6">
          <Input
            value={data.contact}
            placeholder="+0 / mail@mail.com / @nickname"
            onChange={(event) => {
              handleInputChange(event, 'contact');
            }}
          >
            Phone / E-mail / Telegram nickname
          </Input>
          <Input
            value={data.name}
            placeholder="Elon Musk"
            onChange={(event) => {
              handleInputChange(event, 'name');
            }}
          >
            Your Name
          </Input>
          <Input
            value={data.message}
            placeholder="Hello!"
            multiline
            rows={6}
            onChange={(event) => {
              handleInputChange(event, 'message');
            }}
          >
            Your Message
          </Input>
        </div>
        <div className="flex gap-x-6">
          <DoubleBorderedButton primaryColor="blue" backgroundColor="white" onClick={onClose}>
            Cancel
          </DoubleBorderedButton>
          <div className="grow">
            <StandardButton primaryColor="red" secondaryColor="blue" fontColor="white" isFullWidth type="submit">
              Send
            </StandardButton>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default ModalContactUs;
