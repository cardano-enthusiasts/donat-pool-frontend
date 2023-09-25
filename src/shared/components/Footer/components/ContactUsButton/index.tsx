'use client';

import { useState } from 'react';

import { PrimaryButton, ContactUsModal } from '@/shared/components';

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
      <PrimaryButton shadowColor="darkGreen" onClick={handleClick}>
        Contact us
      </PrimaryButton>
      {modalIsShown && <ContactUsModal onClose={handleModalClose} />}
    </>
  );
}

export default ContactUsButton;
