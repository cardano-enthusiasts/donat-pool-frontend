import { useState } from 'react';

import {
  Arrow,
  Content,
  Header,
  Title,
  Wrapper,
} from './DropdownSection.styled';

const DropdownSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Header
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Title>What is Donat.Pool?</Title>
        <Arrow src="/icons/red-arrow.svg"></Arrow>
      </Header>
      {isOpen && <Content>dd</Content>}
    </Wrapper>
  );
};

export { DropdownSection };
