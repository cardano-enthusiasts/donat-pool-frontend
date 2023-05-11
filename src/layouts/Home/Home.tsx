import { useEffect } from 'react';

import { Button, InitialLoading, Waves } from 'shared/components';

import {
  TitleAndDescription,
  Wrapper,
  Title,
  Description,
  DescriptionPart1,
  DescriptionPart2,
  ButtonWrapper,
} from './Home.styled';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
      <InitialLoading />
      <Waves />
      <TitleAndDescription>
        <Title>
          Donat.
          <br />
          Pool —
        </Title>
        <Description>
          <DescriptionPart1>Give a little,</DescriptionPart1>
          <DescriptionPart2>help a lot</DescriptionPart2>
        </Description>
        <ButtonWrapper>
          <Button>Start using</Button>
        </ButtonWrapper>
      </TitleAndDescription>
      <Wrapper></Wrapper>
    </>
  );
};

export default Home;
