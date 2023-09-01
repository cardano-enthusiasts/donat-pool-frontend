import { Modal } from '@/shared/components';

import Form from './components/Form';
import { Props } from './types';

function ContactUsModal({ shown, onClose }: Props) {
  return (
    <Modal
      shown={shown}
      title="Contact us"
      description="You can report about an error or write to us how we can help you."
    >
      <Form onSubmit={onClose} onCancelButtonClick={onClose} />
    </Modal>
  );
}

export default ContactUsModal;
