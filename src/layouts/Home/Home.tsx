import Image from 'next/image';

import {
  BigImg,
  Description,
  Inner,
  Intro,
  Title,
  Wrapper,
} from './Home.styled';

const Home = () => {
  return (
    <Wrapper>
      <Inner>
        <Intro>
          <Title>Donate</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Description>
        </Intro>
        <BigImg>
          <Image src="/img/donut.svg" width="300" height="300" alt="donut" />
        </BigImg>
      </Inner>
    </Wrapper>
  );
};

export default Home;
