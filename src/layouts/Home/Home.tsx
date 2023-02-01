import { useTheme } from '@emotion/react';
import { Button } from '@mui/material';
import Image from 'next/image';

import Cards from 'shared/components/Cards/Cards';

import {
  BigImg,
  Description,
  MainScreen,
  Intro,
  MainButtons,
  Title,
  Wrapper,
  IntroInner,
  CardsWrapper,
} from './Home.styled';

const Home = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <MainScreen theme={theme}>
        <Intro theme={theme}>
          <IntroInner>
            <Title>
              Some <span>header</span>
            </Title>
            <Description>
              Lorem ipsum dolor sit amet, <span>consectetur adipiscing</span>
              elit
            </Description>
            <MainButtons>
              <Button variant="contained" color="accent">
                Create project
              </Button>
              <Button variant="outlined" color="accent">
                Learn more
              </Button>
            </MainButtons>
          </IntroInner>
        </Intro>
        <BigImg>
          <Image src="/img/donut.svg" width="300" height="300" alt="donut" />
        </BigImg>
      </MainScreen>
      <CardsWrapper>
        <Cards />
      </CardsWrapper>
    </Wrapper>
  );
};

export default Home;
