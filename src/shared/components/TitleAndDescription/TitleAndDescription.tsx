import Image from 'next/image';

import { ROUTES } from '@/shared/constants';

import styles from './TitleAndDescription.module.css';
import { Props } from './types';
import { AccentButton } from '../.';

function TitleAndDescription({ active }: Props) {
  return (
    <div className={`flex flex-col font-rammetto-one ${active ? styles.wrapper : styles.wrapperInactive}`}>
      <Image
        className="mb-[1.875rem] w-full max-w-[48.125rem]"
        src="/img/big-logo.svg"
        alt="Donat pool logo"
        width="771"
        height="341"
      />
      <div className="leading-0 mb-10 flex w-full max-w-[62.5rem] flex-col text-8xl text-green delay-200 max-xl:w-[70%] max-xl:max-w-[31.875rem] max-xl:text-5xl max-sm:w-full max-sm:max-w-[20rem] max-sm:text-3xl">
        <div>Give a little,</div>
        <div className="self-end">help a lot</div>
      </div>
      <div className="relative z-10 mb-[5.625rem] delay-500 max-lg:mb-12">
        <AccentButton primaryColor="yellow" secondaryColor="red" fontColor="red" href={ROUTES.fundraisings} animated>
          Start
          <br />
          using
        </AccentButton>
      </div>
    </div>
  );
}

export default TitleAndDescription;
