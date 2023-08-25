import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { useWindowScroll } from '@/shared/hooks';

import styles from './Stack.module.css';
import { DashedButton } from '../.';

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
      setIsActive(window.innerHeight - 100 > ref.current.getBoundingClientRect().top);
    }
  }, [windowScroll]);

  const getLink = (title: any, href: any) => {
    return (
      <>
        {' '}
        <a className="text-red underline" target="_blank" rel="noreferrer" href={href}>
          {title}
        </a>{' '}
      </>
    );
  };

  return (
    <div className="flex max-w-[50rem] flex-col gap-10">
      <div className="text-gray text-2xl font-bold">Our stack</div>
      <div ref={ref}>
        {stack.map(({ id, src }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={cn(styles.img, { 'translate-y-full': !isActive })} key={id} src={src} alt={id} />
        ))}
      </div>

      <DashedButton
        primaryColor="red"
        secondaryColor="blue"
        backgroundColor="yellow"
        isClickedTheme={isOpen}
        isFixedWidth
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Read {isOpen ? 'less' : 'more'}
      </DashedButton>
      {isOpen && (
        <div className="text-2xl max-md:text-lg">
          <div className="mb-10">
            We use strongly typed Haskell and
            {getLink('Plutarch', 'https://github.com/Plutonomicon/plutarch-plutus')}
            to build reliable and efficient smart contracts for the Cardano blockchain. For the off-chain part we use
            {getLink('cardano-transaction-lib', 'https://github.com/Plutonomicon/cardano-transaction-lib')}
            and{getLink('React.', 'https://react.dev/')}
          </div>
          As part of the
          {getLink('MetaLamp team', 'https://www.metalamp.io/')}
          with years of experience in developing blockchain (Cardano, Ethereum) and traditional services (dashboards,
          logistics, banking, etc) we know exactly what we do and we are eager to write our code in the best way
          possible.
        </div>
      )}
    </div>
  );
};

export { Stack };
