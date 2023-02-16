import Button from 'shared/components/Button/Button';
import Cards from 'shared/components/Cards/Cards';

import {
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
  return (
    <Wrapper>
      <MainScreen>
        <Intro>
          <IntroInner>
            <Title>
              Some <span>header</span>
            </Title>
            <Description>
              Lorem ipsum dolor sit amet, <span>consectetur adipiscing</span>
              elit
            </Description>
            <MainButtons>
              <Button theme="filled">Create project</Button>
              <Button theme="bordered">Learn more</Button>
            </MainButtons>
          </IntroInner>
        </Intro>
      </MainScreen>
      <CardsWrapper>
        <Cards />
      </CardsWrapper>
    </Wrapper>
  );
};

export default Home;
