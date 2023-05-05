import { useEffect, useState } from 'react';

import {
  CatImage,
  InnerCircle,
  OuterCircle,
  Wrapper,
} from './InitialLoading.styled';
import { ActionDonuts } from '../ActionDonuts/ActionDonuts';

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
    </Wrapper>
  );
};

export { InitialLoading };
