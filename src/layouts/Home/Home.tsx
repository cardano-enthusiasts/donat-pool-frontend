import { toast } from 'react-toastify';

import Button from 'shared/components/Button/Button';
import Cards from 'shared/components/Cards/Cards';
import { useOffchain } from 'shared/hooks/useOffchain';

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
  const offchain = useOffchain();
  const handleStartProtocolSuccess = (params) => {
    toast.success('Protocol was started');
  };

  const handleStartProtocolError = () => {
    toast.error('Start protocol error');
  };

  const startProtocolParams = {
    minAmountParam: 50000000,
    maxAmountParam: 1000000000,
    minDurationParam: 100,
    maxDurationParam: 1000,
    protocolFeeParam: 10,
  };
  const handleStartProtocolClick = () => {
    offchain.startProtocol(handleStartProtocolSuccess)(
      handleStartProtocolError
    )(startProtocolParams)();
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
      <CardsWrapper>
        <Cards />
      </CardsWrapper>
    </Wrapper>
  );
};

export default Home;
