import { useEffect, useState } from 'react';

import { Goal, Img, Line, Raised, Wrapper } from './RaisedCounter.styled';
import type { Props } from './types';

const RaisedCounter = ({ raised, goal }: Props) => {
  const [imgTitle, setImgTitle] = useState('donut-0');
  const getImgIndex = (part: number) => {
    if (part < 0.2) {
      return 0;
    }
    if (part >= 0.2 && part < 0.4) {
      return 1;
    }
    if (part >= 0.4 && part < 0.6) {
      return 2;
    }
    if (part >= 0.6 && part < 1) {
      return 3;
    }
    return 4;
  };

  useEffect(() => {
    const raisedPart = raised / goal;
    setImgTitle(`donut-${getImgIndex(raisedPart)}`);
  }, [raised, goal]);

  return (
    <Wrapper>
      <Img src={`/img/${imgTitle}.svg`} alt="progress bar" />
      <Raised>{raised}</Raised>
      <Line />
      <Goal>{goal}</Goal>
    </Wrapper>
  );
};

export { RaisedCounter };
