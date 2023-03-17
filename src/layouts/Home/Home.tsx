import { Button } from 'shared/components';
import { useStartProtocol } from 'shared/helpers/hooks';

import {
  Description,
  MainScreen,
  Intro,
  MainButtons,
  Title,
  Wrapper,
  IntroInner,
} from './Home.styled';

const Home = () => {
  const startProtocol = useStartProtocol();

  const handleStartProtocolClick = () => {
    startProtocol();
  };

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
              <Button theme="filled" onClick={handleStartProtocolClick}>
                start protocol
              </Button>
              <Button theme="bordered">Learn more</Button>
            </MainButtons>
          </IntroInner>
        </Intro>
      </MainScreen>
    </Wrapper>
  );
};

export default Home;
