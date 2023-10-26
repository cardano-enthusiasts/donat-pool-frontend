import { QuaternaryLink } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import BigLogoImage from '@public/images/big-logo.svg';

function TitleAndDescription() {
  return (
    <div className="flex flex-col pt-15 font-rammetto-one max-lg:pt-10">
      <BigLogoImage className="mb-[1.875rem] max-w-[48.125rem]" />
      <div
        className="mb-10
          w-full
          max-w-[62.5rem]
          font-microsoft-ya-hei
          text-[3.375rem]/tight
          font-bold
          text-green
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
