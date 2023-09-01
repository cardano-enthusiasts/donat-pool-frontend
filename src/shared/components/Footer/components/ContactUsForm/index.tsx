'use client';

import { isAxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import api from '@/shared/api';
import { DoubleBorderedButton, StandardButton, NewInput, Textarea } from '@/shared/components';

import { Props, FormValues } from './types';

function ContactUsForm({ onSubmit, onCancelButtonClick }: Props) {
  const {
    handleSubmit: createSubmitHandler,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [requestError, setRequestError] = useState<string>();

  const handleSubmit = createSubmitHandler(async (data) => {
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(1);
        }, 2000);
      });
      await api.post('core/contact-us', data);
      onSubmit();
    } catch (error) {
      setRequestError(isAxiosError(error) ? error.message : 'Unknown error');
    }
  });

  return (
    // "React Hook Form" expects passing submit handler this way
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit}>
      <div className="mb-10 space-y-6">
        <NewInput
          label="Phone / E-mail / Telegram nickname"
          name="contact"
          placeholder="+0 / mail@mail.com / @nickname"
          register={register}
          registerOptions={{ required: 'Contact is required', disabled: isSubmitting }}
          error={errors.contact?.message}
        />
        <NewInput
          label="Your Name"
          name="name"
          placeholder="Elon Musk"
          register={register}
          registerOptions={{ required: 'Name is required', disabled: isSubmitting }}
          error={errors.name?.message}
        />
        <Textarea
          label="Your Message"
          name="message"
          placeholder="Hello!"
          register={register}
          registerOptions={{ disabled: isSubmitting }}
        />
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-x-6">
        <DoubleBorderedButton
          primaryColor="blue"
          backgroundColor="white"
          onClick={onCancelButtonClick}
          disabled={isSubmitting}
        >
          Cancel
        </DoubleBorderedButton>
        <StandardButton
          primaryColor="red"
          secondaryColor="blue"
          fontColor="white"
          isFullWidth
          type="submit"
          disabled={isSubmitting}
        >
          Send
        </StandardButton>
      </div>
      {requestError && <div className="mt-10 text-error">{requestError}</div>}
    </form>
  );
}

export default ContactUsForm;
