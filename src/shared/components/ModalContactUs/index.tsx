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
        <div className="flex gap-x-6">
          <DoubleBorderedButton primaryColor="blue" backgroundColor="white" onClick={onClose}>
            Cancel
          </DoubleBorderedButton>
          <div className="grow">
            <StandardButton type="submit" primaryColor="red" secondaryColor="blue" fontColor="white" isFullWidth>
              Send
            </StandardButton>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default ModalContactUs;
