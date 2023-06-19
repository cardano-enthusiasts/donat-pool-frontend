import { useState } from 'react';

import {
  Description,
  Title,
  Inner,
  ButtonsWrapper,
} from './ModalContactUs.styled';
import { Button, Input, Modal } from '../.';

const ModalContactUs = ({ isOpen, onClose }) => {
  const [data, setData] = useState({ contact: '', name: '', message: '' });

  const handleInputChange = (
    event,
    fieldName: 'contact' | 'name' | 'message'
  ) => {
    const { value } = event.target as HTMLInputElement;
    setData({
      ...data,
      [fieldName]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen}>
      <form onSubmit={handleSubmit}>
        <Inner>
          <Title>Contact us</Title>
          <Description>
            You can report about error or write to us how we can help you.
          </Description>
          <Input
            value={data.contact}
            onChange={(event) => {
              handleInputChange(event, 'contact');
            }}
            placeholder="+0 / mail@mail.com / @nickname"
            fontColor="yellow"
          >
            Phone / E-mail / Telegram nickname
          </Input>
          <Input
            value={data.name}
            onChange={(event) => {
              handleInputChange(event, 'name');
            }}
            placeholder="Elon Mask"
            fontColor="yellow"
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
            fontColor="yellow"
          >
            Your Message
          </Input>
        </Inner>

        <ButtonsWrapper>
          <Button themeType="tertiary" onClick={onClose} primaryColor="blue">
            Cancel
          </Button>
          <Button
            themeType="primary"
            type="submit"
            primaryColor="red"
            secondaryColor="blue"
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
