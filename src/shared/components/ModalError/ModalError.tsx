import cn from 'classnames';
import Image from 'next/image';

import styles from './ModalError.module.css';
import type { Props } from './types';
import { DoubleBorderedButton, Modal } from '../.';

const ModalError = ({ isOpen, title, errorText = '', onClose }: Props) => {
  return (
    <Modal isOpen={isOpen}>
      <h1 className="mb-6 text-center font-rammetto-one text-4xl leading-[104%] text-red max-lg:text-[36px] max-sm:text-[2.25rem]">
        {title}
      </h1>
      <div className="flex flex-col items-center">
        <Image className="mb-10" src="/img/bitten-donut.svg" alt="bitten donut" width={140} height={140} />
        <div className={cn('mb-6', styles.text)}>{errorText}</div>
        <DoubleBorderedButton primaryColor="blue" isFullWidth={true} backgroundColor="white" onClick={onClose}>
          Close button
        </DoubleBorderedButton>
      </div>
    </Modal>
  );
};

export { ModalError };
