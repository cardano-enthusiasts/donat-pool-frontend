import { useState } from 'react';

import { Description, Title, Form } from './ContactUsForm.styled';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

const ContactUsForm = () => {
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
    <Form onSubmit={handleSubmit}>
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
      <Button themeType="secondary" type="submit" size="s">
        Send
      </Button>
    </Form>
  );
};

export { ContactUsForm };
