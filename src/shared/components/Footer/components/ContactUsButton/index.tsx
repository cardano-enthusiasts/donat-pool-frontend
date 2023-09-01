'use client';

import { useState } from 'react';

import { StandardButton, ContactUsModal } from '@/shared/components';

function ContactUsButton() {
  const [modalIsShown, setModalIsShown] = useState(false);

  function handleClick() {
    setModalIsShown(true);
  }

  function handleModalClose() {
    setModalIsShown(false);
  }

  return (
    <>
      <StandardButton primaryColor="red" secondaryColor="green" size="s" fontColor="white" onClick={handleClick}>
        Contact us
      </StandardButton>
      <ContactUsModal shown={modalIsShown} onClose={handleModalClose} />
    </>
  );
}

export default ContactUsButton;
