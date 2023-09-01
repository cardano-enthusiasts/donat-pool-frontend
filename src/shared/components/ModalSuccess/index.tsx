import Image from 'next/image';

import { DoubleBorderedButton, Modal } from '@/shared/components';

import type { Props } from './types';

function ModalSuccess({ shown, description, onClose }: Props) {
  const containerClasses = 'flex w-full flex-col items-center';

  return (
    <Modal shown={shown}>
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
          <Image className="mb-10" src="/img/happy-cat.svg" alt="happy cat" width={140} height={140} />
          <div className="mb-6">{description}</div>
          <DoubleBorderedButton primaryColor="blue" backgroundColor="white" isFullWidth onClick={onClose}>
            Close button
          </DoubleBorderedButton>
        </div>
      </div>
    </Modal>
  );
}

export default ModalSuccess;
