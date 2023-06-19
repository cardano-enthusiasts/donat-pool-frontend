import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'shared/components';
import { useStartProtocol } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import {
  Description,
  MainScreen,
  Intro,
  Title,
  Wrapper,
  IntroInner,
} from './Home.styled';

const Home = () => {
  const startProtocol = useStartProtocol();
  const { isManager } = useSelector(
    (state: AppReduxState) => state.info.data.user
  );
  useEffect(() => {
    document.title = 'Home';
  }, []);

  const handleStartProtocolClick = () => {
    startProtocol();
  };

  return (
    <Wrapper>
      <MainScreen>
        <Intro>
          <IntroInner>
            <Title>Donat.Pool</Title>
            <Description>Give a little, help a lot</Description>
            {isManager && (
              <Button theme="filled" onClick={handleStartProtocolClick}>
                start protocol
              </Button>
            )}
          </IntroInner>
        </Intro>
      </MainScreen>
    </Wrapper>
  );
};

export default Home;
