import Image from 'next/image';

import type { Props } from './types';
import { DoubleBorderedButton, Modal } from '../.';

const ModalError = ({ isOpen, title, errorText = '', onClose }: Props) => {
  return (
    <Modal isOpen={isOpen}>
      <h1 className="mb-6 text-center text-4xl">{title}</h1>
      <div className="flex flex-col items-center">
        <Image className="mb-10" src="/img/bitten-donut.svg" alt="bitten donut" width={140} height={140} />
        <div className="mb-6 ">{errorText}</div>
        <DoubleBorderedButton primaryColor="blue" isFullWidth={true} onClick={onClose} backgroundColor="white">
          Close button
        </DoubleBorderedButton>
      </div>
    </Modal>
  );
};

export { ModalError };
