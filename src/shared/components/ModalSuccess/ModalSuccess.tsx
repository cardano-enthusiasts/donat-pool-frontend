import { Description, Img, Inner, Title, Wrapper } from './ModalSuccess.styled';
import { type Props } from './types';
import { Button, Modal } from '../.';

const ModalSuccess = ({ description, isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen}>
      <Wrapper>
        <Title>Well done!</Title>
        <Inner>
          <Img src="img/happy-cat.svg" alt="happy cat" />
          <Description>{description}</Description>
          <Button
            themeType="tertiary"
            primaryColor="blue"
            width="100%"
            onClick={onClose}
          >
            Close button
          </Button>
        </Inner>
      </Wrapper>
    </Modal>
  );
};

export { ModalSuccess };
