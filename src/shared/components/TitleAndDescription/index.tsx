import cn from 'classnames';

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
          w-full
          max-w-[62.5rem]
          font-microsoft-ya-hei
          text-[3.375rem]/tight
          font-bold
          text-green
          delay-200
          max-md:text-3xl"
      >
        Crowdfunding on Cardano blockchain for everyone
      </div>
      <div className="mb-[5.625rem] ml-6 max-lg:mb-12">
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
