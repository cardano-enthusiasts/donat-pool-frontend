import { type FC } from 'react';

import { Background, Content, Wrapper } from './Modal.styled';
import { type Props } from './types';

const Modal: FC<Props> = ({ isOpen, children }) => {
  const content = (
    <Wrapper>
      <Background />
      <Content>{children}</Content>
    </Wrapper>
  );

  return isOpen ? content : <></>;
};

export { Modal };
