import { Modal, SecondaryButton } from '@/shared/components';
import HappyCatImage from '@public/images/happy-cat.svg';

import type { Props } from './types';

function ModalSuccess({ description, onClose }: Props) {
  const containerClasses = 'flex w-full flex-col items-center';

  return (
    <Modal>
      <div className={containerClasses}>
        <h1
          className="mb-6
            text-center
            font-rammetto-one
            text-[3.375rem]/[104%]
            text-red
            max-lg:text-[2.25rem]
            max-sm:text-[2.25rem]"
        >
          Well done!
        </h1>
        <div className={containerClasses}>
          <HappyCatImage className="mb-10" />
          <div className="mb-6">{description}</div>
          <SecondaryButton stretchy size="lg" textColor="blue" shadowColor="whiteBlue" onClick={onClose}>
            Close button
          </SecondaryButton>
        </div>
      </div>
    </Modal>
  );
}

export default ModalSuccess;
