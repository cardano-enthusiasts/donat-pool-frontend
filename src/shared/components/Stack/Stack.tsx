import { useEffect, useRef, useState } from 'react';

import { useWindowScroll } from 'shared/helpers/hooks/useWindowScroll';

import { Img, Items, Title, Wrapper } from './Stack.styled';
import { Button } from '../.';

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const windowScroll = useWindowScroll();
  const stack: Array<{ id: string; src: string }> = [
    { id: 'plutarch', src: '/img/plutarch.svg' },
    { id: 'cardano-transaction-lib', src: '/img/cardano-transaction-lib.svg' },
    { id: 'react', src: '/img/react.svg' },
  ];
  useEffect(() => {
    if (ref.current) {
      setIsActive(
        window.innerHeight - 100 > ref.current.getBoundingClientRect().top
      );
    }
  }, [windowScroll]);

  return (
    <Wrapper>
      <Title>Our stack</Title>
      <Items ref={ref}>
        {stack.map(({ id, src }) => (
          <Img key={id} src={src} alt={id} isActive={isActive} />
        ))}
      </Items>

      <Button primaryColor="red" secondaryColor="blue" fontColor="white">
        Read more
      </Button>
    </Wrapper>
  );
};

export { Stack };
