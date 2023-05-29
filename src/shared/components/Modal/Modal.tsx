import { type FC } from 'react';

import { Background, CloseButton, Content, Wrapper } from './Modal.styled';
import { type Props } from './types';

const Modal: FC<Props> = ({
  isOpen,
  onClose,
  children,
  isClosingDisabled = false,
}) => {
  const handleClose = () => {
    if (!isClosingDisabled) {
      onClose();
    }
  };

  const content = (
    <Wrapper>
      <Background onClick={handleClose} />
      <Content>
        <CloseButton onClick={handleClose} />
        {children}
      </Content>
    </Wrapper>
  );

  return isOpen ? content : <></>;
};

export { Modal };
