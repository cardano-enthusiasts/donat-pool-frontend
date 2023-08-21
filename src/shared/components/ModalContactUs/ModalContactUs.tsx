import { useState } from 'react';

import type { Props } from './types';
import { DoubleBorderedButton, Input, Modal, StandardButton } from '../.';

const ModalContactUs = ({ isOpen, onClose }: Props) => {
  const initialData = { contact: '', name: '', message: '' };
  const [data, setData] = useState(initialData);

  const handleInputChange = (event: any, fieldName: 'contact' | 'name' | 'message') => {
    const { value } = event.target as HTMLInputElement;
    setData({
      ...data,
      [fieldName]: value,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  const handleCancelClick = () => {
    onClose();
    setData(initialData);
  };

  return (
    <Modal isOpen={isOpen}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-6">
          <h1>Contact us</h1>
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
            multiline={true}
            rows={6}
          >
            Your Message
          </Input>
        </div>

        <div className="mt-10 flex w-full gap-6">
          <DoubleBorderedButton primaryColor="blue" backgroundColor="white" onClick={handleCancelClick}>
            Cancel
          </DoubleBorderedButton>
          <StandardButton type="submit" primaryColor="red" secondaryColor="blue" fontColor="white" isFullWidth={true}>
            Send
          </StandardButton>
        </div>
      </form>
    </Modal>
  );
};

export { ModalContactUs };
