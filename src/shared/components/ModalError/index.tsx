import { Modal, SecondaryButton } from '@/shared/components';
import BittenDonutImage from '@public/images/bitten-donut.svg';

import styles from './styles.module.css';
import type { Props } from './types';

function ModalError({ title, errorText = '', onClose }: Props) {
  return (
    <Modal>
      <h1
        className="mb-6
          text-center
          font-rammetto-one
          text-4xl/[104%]
          text-red
          max-lg:text-[2.25rem]
          max-sm:text-[2.25rem]"
      >
        {title}
      </h1>
      <div className="flex flex-col items-center">
        <BittenDonutImage className="mb-10" />
        <div className={styles.text}>{errorText}</div>
        <SecondaryButton stretchy size="lg" textColor="blue" shadowColor="whiteBlue" onClick={onClose}>
          Close button
        </SecondaryButton>
      </div>
    </Modal>
  );
}

export default ModalError;
