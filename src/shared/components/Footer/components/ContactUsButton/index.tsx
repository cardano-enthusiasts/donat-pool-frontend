import { useState } from 'react';

import { StandardButton, ModalContactUs } from '@/shared/components';

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
      <ModalContactUs shown={modalIsShown} onClose={handleModalClose} />
    </>
  );
}

export default ContactUsButton;
