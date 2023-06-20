import { useEffect, useRef } from 'react';

import { Img, Items, Title, Wrapper } from './Stack.styled';
import { Button } from '../.';

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const stack: Array<{ id: string; src: string }> = [
    { id: 'plutarch', src: '/img/plutarch.svg' },
    { id: 'cardano-transaction-lib', src: '/img/cardano-transaction-lib.svg' },
    { id: 'react', src: '/img/react.svg' },
  ];
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.getBoundingClientRect().top);
    }
  });
  return (
    <Wrapper>
      <Title>Our stack</Title>
      <Items ref={ref}>
        {stack.map(({ id, src }) => (
          <Img key={id} src={src} alt={id} />
        ))}
      </Items>

      <Button themeType="primary" primaryColor="red" secondaryColor="blue">
        Read more
      </Button>
    </Wrapper>
  );
};

export { Stack };
