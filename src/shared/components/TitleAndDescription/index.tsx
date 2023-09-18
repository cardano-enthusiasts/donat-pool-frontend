import { QuaternaryLink } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import BigLogoImage from '@public/images/big-logo.svg';

import type { Props } from './types';

function TitleAndDescription({ active }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col font-rammetto-one [&>*]:transition-transform [&>*]:duration-1000 [&>*]:ease-in max-lg:[&>*]:translate-y-0 max-lg:[&>*]:transition-none',
        {
          '[&>*]:translate-y-0': active,
          '[&>*]:translate-y-1/2': !active,
        },
      )}
    >
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
      <div className="mb-[5.625rem] max-lg:mb-12">
        <QuaternaryLink animation="continuous" href={ROUTES.donatPools}>
          Start
          <br />
          using
        </QuaternaryLink>
      </div>
    </div>
  );
}

export default TitleAndDescription;
