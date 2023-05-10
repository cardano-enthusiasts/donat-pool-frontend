import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Button, InitialLoading, Waves } from 'shared/components';
import { type AppReduxState } from 'shared/types';

import {
  TitleAndDescription,
  Wrapper,
  Title,
  Description,
  DescriptionPart1,
  DescriptionPart2,
} from './Home.styled';

const Home = () => {
  const { isManager } = useSelector(
    (state: AppReduxState) => state.info.data.user
  );
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
        <Button>Start using</Button>
      </TitleAndDescription>
      <Wrapper></Wrapper>
    </>
  );
};

export default Home;
