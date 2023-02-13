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
              {/* <Button variant="contained" color="accent">
                Create project
              </Button>
              <Button variant="outlined" color="accent">
                Learn more
              </Button> */}
            </MainButtons>
          </IntroInner>
        </Intro>
        <BigImg>
          <img src="img/donut.svg" alt="donat" ></img>
        </BigImg>
      </MainScreen>
      <CardsWrapper>
        <Cards />
      </CardsWrapper>
    </Wrapper>
  );
};

export default Home;
