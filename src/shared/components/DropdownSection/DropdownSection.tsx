import { useState } from 'react';

import {
  Arrow,
  Content,
  Header,
  Title,
  Wrapper,
} from './DropdownSection.styled';
import type { Props } from './types';

const DropdownSection = ({ title = '', children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Header
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Title>{title}</Title>
        <Arrow src="/icons/red-arrow.svg" isOpen={isOpen} />
      </Header>
      {isOpen && <Content>{children}</Content>}
    </Wrapper>
  );
};

export { DropdownSection };
