import { ErrorText, Img, Inner, Title } from './ModalError.styled';
import type { Props } from './types';
import { Button, Modal } from '../.';

const ModalError = ({ isOpen, title, errorText = '', onClose }: Props) => {
  return (
    <Modal open={isOpen}>
      <Title>{title}</Title>
      <Inner>
        <Img src="/img/bitten-donut.svg" alt="bitten donut" />
        <ErrorText>{errorText}</ErrorText>
        <Button themeType="double-bordered" primaryColor="blue" width="100%" onClick={onClose} tertiaryColor="white">
          Close button
        </Button>
      </Inner>
    </Modal>
  );
};

export { ModalError };
