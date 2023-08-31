import { Modal } from '@/shared/components';

import { Props } from './types';
import ContactUsForm from '../ContactUsForm';

function ModalContactUs({ onClose }: Props) {
  return (
    <Modal shown title="Contact us" description="You can report about an error or write to us how we can help you.">
      <ContactUsForm onSubmit={onClose} onCancelButtonClick={onClose} />
    </Modal>
  );
}

export default ModalContactUs;
