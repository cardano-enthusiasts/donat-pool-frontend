import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { InitialLoading } from 'shared/components';
import { type AppReduxState } from 'shared/types';

import { Wrapper } from './Home.styled';

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
      <Wrapper></Wrapper>
    </>
  );
};

export default Home;
