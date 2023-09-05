'use client';

import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { DashedButton } from '@/shared/components';
import { useWindowScroll } from '@/shared/hooks';
import CardanoLibImage from '@public/img/cardano-transaction-lib.svg';
import PlutarchImage from '@public/img/plutarch.svg';
import ReactImage from '@public/img/react.svg';

function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [shown, setShown] = useState(false);
  const windowScroll = useWindowScroll();
  const classes = cn('w-full transition-transform duration-1000 ease', { 'translate-y-full': !isActive });

  useEffect(() => {
    if (ref.current) {
      setIsActive(window.innerHeight - 100 > ref.current.getBoundingClientRect().top);
    }
  }, [windowScroll]);

  function getLink(title: string, href: string) {
    return (
      <>
        {' '}
        <a className="text-red underline" target="_blank" rel="noreferrer" href={href}>
          {title}
        </a>{' '}
      </>
    );
  }

  function handleReadButtonClick() {
    setShown(!shown);
  }

  return (
    <div className="flex max-w-[50rem] flex-col gap-10">
      <div className="text-2xl font-bold text-gray">Our stack</div>
      <div ref={ref}>
        <CardanoLibImage className={`${classes} max-w-[900px]`} />
        <PlutarchImage
          className={`${classes} mt-[-1.875rem] max-w-[510px] delay-200 max-lg:mt-[-1.25rem] max-lg:max-w-[65%] max-sm:mt-[-0.625rem]`}
        />
        <ReactImage
          className={`${classes} mt-[-1.875rem] max-w-[338px] delay-500 max-lg:mt-[-1.25rem] max-lg:max-w-[50%] max-sm:mt-[-0.625rem]`}
        />
      </div>

      <DashedButton
        primaryColor="red"
        secondaryColor="blue"
        backgroundColor="yellow"
        isClickedTheme={shown}
        isFixedWidth
        onClick={handleReadButtonClick}
      >
        Read {shown ? 'less' : 'more'}
      </DashedButton>
      {shown && (
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
}

export default Stack;
