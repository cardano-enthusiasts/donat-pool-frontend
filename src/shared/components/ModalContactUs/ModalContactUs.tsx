import { useState } from 'react';

import {
  Description,
  Title,
  Inner,
  ButtonsWrapper,
} from './ModalContactUs.styled';
import { type Props } from './types';
import { Button, Input, Modal } from '../.';

const ModalContactUs = ({ isOpen, onClose }: Props) => {
  const initialData = { contact: '', name: '', message: '' };
  const [data, setData] = useState(initialData);

  const handleInputChange = (
    event: any,
    fieldName: 'contact' | 'name' | 'message',
  ) => {
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
        <Inner>
          <Title>Contact us</Title>
          <Description>
            You can report about an error or write to us how we can help you.
          </Description>
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
        </Inner>

        <ButtonsWrapper>
          <Button
            onClick={handleCancelClick}
            primaryColor="blue"
            themeType="double-bordered"
            tertiaryColor="white"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            primaryColor="red"
            secondaryColor="blue"
            fontColor="white"
            width="100%"
          >
            Send
          </Button>
        </ButtonsWrapper>
      </form>
    </Modal>
  );
};

export { ModalContactUs };
