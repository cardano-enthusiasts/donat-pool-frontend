import { Description, Img, Inner, Title, Wrapper } from './ModalSuccess.styled';
import type { Props } from './types';
import { DoubleBorderedButton, Modal } from '../.';

const ModalSuccess = ({ description, isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen}>
      <Wrapper>
        <Title>Well done!</Title>
        <Inner>
          <Img src="/img/happy-cat.svg" alt="happy cat" />
          <Description>{description}</Description>
          <DoubleBorderedButton primaryColor="blue" backgroundColor="white" isFullWidth={true} onClick={onClose}>
            Close button
          </DoubleBorderedButton>
        </Inner>
      </Wrapper>
    </Modal>
  );
};

export { ModalSuccess };
