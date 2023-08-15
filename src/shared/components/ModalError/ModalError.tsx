import { ErrorText, Img, Inner, Title } from './ModalError.styled';
import type { Props } from './types';
import { DoubleBorderedButton, Modal } from '../.';

const ModalError = ({ isOpen, title, errorText = '', onClose }: Props) => {
  return (
    <Modal isOpen={isOpen}>
      <Title>{title}</Title>
      <Inner>
        <Img src="/img/bitten-donut.svg" alt="bitten donut" />
        <ErrorText>{errorText}</ErrorText>
        <DoubleBorderedButton primaryColor="blue" isFullWidth={true} onClick={onClose} backgroundColor="white">
          Close button
        </DoubleBorderedButton>
      </Inner>
    </Modal>
  );
};

export { ModalError };
