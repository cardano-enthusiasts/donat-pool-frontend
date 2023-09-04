import { DoubleBorderedButton, Modal } from '@/shared/components';
import BittenDonutImg from '@public/img/bitten-donut.svg';

import styles from './styles.module.css';
import { Props } from './types';

function ModalError({ shown, title, errorText = '', onClose }: Props) {
  return (
    <Modal shown={shown}>
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
        <BittenDonutImg className="mb-10" />
        <div className={styles.text}>{errorText}</div>
        <DoubleBorderedButton primaryColor="blue" backgroundColor="white" isFullWidth onClick={onClose}>
          Close button
        </DoubleBorderedButton>
      </div>
    </Modal>
  );
}

export default ModalError;
