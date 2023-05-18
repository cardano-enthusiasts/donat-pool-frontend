import { useState } from 'react';

import { Description, Title, Wrapper } from './ContactUsForm.styled';
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
    <Wrapper onSubmit={handleSubmit}>
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
        title="Phone / E-mail / Telegram nickname"
      />
      <Input
        value={data.name}
        onChange={(event) => {
          handleInputChange(event, 'name');
        }}
        placeholder="Elon Mask"
        title="Your Name"
      />
      <Input
        value={data.message}
        onChange={(event) => {
          handleInputChange(event, 'message');
        }}
        placeholder="Hello!"
        title="Your Message"
        multiline={true}
        rows={6}
      />
      <Button themeType="secondary" type="submit">
        Send
      </Button>
    </Wrapper>
  );
};

export { ContactUsForm };
