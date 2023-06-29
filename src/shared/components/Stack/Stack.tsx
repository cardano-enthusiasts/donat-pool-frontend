import { useEffect, useRef, useState } from 'react';

import { useWindowScroll } from 'shared/helpers/hooks/useWindowScroll';

import { DocLink, Img, Items, Title, Wrapper } from './Stack.styled';
import { Button } from '../.';

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const windowScroll = useWindowScroll();
  const stack: Array<{ id: string; src: string; href: string }> = [
    {
      id: 'plutarch',
      src: '/img/plutarch.svg',
      href: 'https://github.com/Plutonomicon/plutarch-plutus',
    },
    {
      id: 'cardano-transaction-lib',
      src: '/img/cardano-transaction-lib.svg',
      href: 'https://github.com/Plutonomicon/cardano-transaction-lib',
    },
    {
      id: 'react',
      src: '/img/react.svg',
      href: 'https://react.dev/',
    },
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
        {stack.map(({ id, src, href }) => (
          <DocLink target="_blank" rel="noreferrer" href={href} key={id}>
            <Img src={src} alt={id} isActive={isActive} />
          </DocLink>
        ))}
      </Items>

      <Button primaryColor="red" secondaryColor="blue" fontColor="white">
        Read more
      </Button>
    </Wrapper>
  );
};

export { Stack };
