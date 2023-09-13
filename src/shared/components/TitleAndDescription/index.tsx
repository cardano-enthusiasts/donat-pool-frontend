import { QuaternaryLink } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import BigLogoImage from '@public/images/big-logo.svg';

import styles from './styles.module.css';
import type { Props } from './types';

function TitleAndDescription({ active }: Props) {
  return (
    <div className={`flex flex-col font-rammetto-one ${active ? styles.wrapper : styles.wrapperInactive}`}>
      <BigLogoImage className="mb-[1.875rem] max-w-[48.125rem]" />
      <div
        className="mb-10
          flex
          w-full
          max-w-[62.5rem]
          flex-col
          text-8xl/none
          text-green
          delay-200
          max-xl:w-[70%]
          max-xl:max-w-[31.875rem]
          max-xl:text-5xl
          max-sm:w-full
          max-sm:max-w-[20rem]
          max-sm:text-3xl"
      >
        <div>Give a little,</div>
        <div className="self-end">help a lot</div>
      </div>
      <div className="mb-[5.625rem] max-md:mb-12">
        <QuaternaryLink animated href={ROUTES.donatPools}>
          Start
          <br />
          using
        </QuaternaryLink>
      </div>
    </div>
  );
}

export default TitleAndDescription;
