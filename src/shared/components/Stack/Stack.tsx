import { useEffect, useRef, useState } from 'react';

import { useWindowScroll } from 'shared/helpers/hooks';

import {
  Description,
  Img,
  Items,
  Link,
  Part1,
  Title,
  Wrapper,
} from './Stack.styled';
import { Button } from '../.';

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  const getLink = (title, href) => {
    return (
      <>
        {' '}
        <Link target="_blank" rel="noreferrer" href={href}>
          {title}
        </Link>{' '}
      </>
    );
  };

  return (
    <Wrapper>
      <Title>Our stack</Title>
      <Items ref={ref}>
        {stack.map(({ id, src }) => (
          <Img key={id} src={src} alt={id} isActive={isActive} />
        ))}
      </Items>

      <Button
        themeType="dashed"
        primaryColor="red"
        secondaryColor="blue"
        tertiaryColor="yellow"
        fontColor="white"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        isClickedTheme={isOpen}
        width="180px"
      >
        Read {isOpen ? 'less' : 'more'}
      </Button>
      {isOpen && (
        <Description>
          <Part1>
            We use strongly typed Haskell and
            {getLink(
              'Plutarch',
              'https://github.com/Plutonomicon/plutarch-plutus'
            )}
            to build reliable and efficient smart contracts for the Cardano
            blockchain. For the off-chain part we use
            {getLink(
              'cardano-transaction-lib',
              'https://github.com/Plutonomicon/cardano-transaction-lib'
            )}
            and{getLink('React.', 'https://react.dev/')}
          </Part1>
          As part of the
          {getLink('MetaLamp team', 'https://www.metalamp.io/')}
          with years of experience in developing blockchain (Cardano, Ethereum)
          and traditional services (dashboards, logistics, banking, etc) we know
          exactly what we do and we are eager to write our code in the best way
          possible.
        </Description>
      )}
    </Wrapper>
  );
};

export { Stack };
