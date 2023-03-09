import { toast } from 'react-toastify';

import { Button } from 'shared/components';
import { useOffchain } from 'shared/helpers/hooks';

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
  const offchain = useOffchain();
  const handleStartProtocolSuccess = (protocol) => {
    console.log(protocol);
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
    if (offchain) {
      offchain.startProtocol(handleStartProtocolSuccess)(
        handleStartProtocolError
      )(startProtocolParams)();
    } else {
      toast.error('The protocol was started');
    }
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
