import classNames from 'classnames';
import Image from 'next/image';

import { ROUTES } from '@/shared/constants';

import styles from './TitleAndDescription.module.css';
import type { Props } from './types';
import { AccentButton } from '../.';

const TitleAndDescription = ({ isActive }: Props) => {
  return (
    <div
      className={classNames(
        'flex flex-col font-rammetto-one',
        isActive && styles.wrapper,
        !isActive && styles.wrapperInactive,
      )}
    >
      <Image
        className="mb-[30px] w-full max-w-[770px]"
        src="/img/big-logo.svg"
        alt="Donat pool logo"
        width="771"
        height="341"
      />
      <div className="leading-0 mb-10 flex w-full max-w-[1000px] flex-col text-8xl text-green delay-200 max-xl:w-[70%] max-xl:max-w-[510px] max-xl:text-5xl max-sm:w-full max-sm:max-w-[320px] max-sm:text-3xl">
        <div>Give a little,</div>
        <div className="self-end">help a lot</div>
      </div>
      <div className="relative z-10 mb-[90px] delay-500 max-lg:mb-12">
        <AccentButton
          primaryColor="yellow"
          secondaryColor="red"
          fontColor="red"
          href={ROUTES.allFundraisings}
          isAnimation={true}
        >
          Start
          <br />
          using
        </AccentButton>
      </div>
    </div>
  );
};

export { TitleAndDescription };
