'use client';

import { useState } from 'react';

import { StandardButton } from '@/shared/components';

import ContactUsModal from '../ContactUsModal';

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
      {modalIsShown && <ContactUsModal onClose={handleModalClose} />}
    </>
  );
}

export default ContactUsButton;
