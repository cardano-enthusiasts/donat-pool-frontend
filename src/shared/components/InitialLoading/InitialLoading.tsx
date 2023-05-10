import { useEffect, useState } from 'react';

import {
  CatImage,
  InnerCircle,
  OuterCircle,
  Wrapper,
  NavWrapper,
} from './InitialLoading.styled';
import { ActionDonuts } from '../ActionDonuts/ActionDonuts';
import { LandingNav } from '../LandingNav/LandingNav';

const InitialLoading = () => {
  const [windowScroll, setWindowScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(Math.round(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <InnerCircle windowScroll={windowScroll / 10} />
      <OuterCircle windowScroll={windowScroll / 10} />
      <ActionDonuts />
      <CatImage />
      <NavWrapper>
        <LandingNav />
      </NavWrapper>
    </Wrapper>
  );
};

export { InitialLoading };
