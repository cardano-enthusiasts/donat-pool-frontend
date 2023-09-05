'use client';

import { useState } from 'react';

import { Modal } from '@/shared/components';

import Form from './components/Form';
import type { Props } from './types';

function ContactUsModal({ onClose }: Props) {
  const [submitError, setSubmitError] = useState<string>();

  return (
    <Modal
      title="Contact us"
      description="You can report about an error or write to us how we can help you."
      error={submitError}
    >
      <Form onSubmitSuccess={onClose} onSubmitFailure={setSubmitError} onCancelButtonClick={onClose} />
    </Modal>
  );
}

export default ContactUsModal;
