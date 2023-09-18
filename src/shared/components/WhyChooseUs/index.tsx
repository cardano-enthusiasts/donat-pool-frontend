import { PrimaryLink } from '@/shared/components';

import { PRIMARY_SECTIONS, SECONDARY_SECTIONS } from './data';

function WhyChooseUs() {
  const titleClasses = 'mb-6 text-5xl/normal font-bold max-lg:text-[2rem]/tight';
  const descriptionClasses = 'text-2xl max-md:text-lg';

  return (
    <div className="text-black">
      {PRIMARY_SECTIONS.map(({ title, description }) => (
        <div className="mb-10" key={title}>
          <h3 className={titleClasses}>{title}</h3>
          <div className={descriptionClasses}>{description}</div>
        </div>
      ))}
      <div className="mb-10 flex items-center gap-6 max-lg:flex-col max-lg:items-start">
        <div className="shrink-0">
          <PrimaryLink
            platformBackgroundTheme="darkGreen"
            backgroundTheme="blue"
            animation="continuous"
            external
            href="https://github.com/fullstack-development/donat-pool-onchain"
          >
            On-chain code
          </PrimaryLink>
        </div>
        <div className="shrink-0">
          <PrimaryLink
            backgroundTheme="green"
            textTheme="black"
            animation="continuous"
            external
            href="https://github.com/fullstack-development/donat-pool-offchain"
          >
            Off-chain code
          </PrimaryLink>
        </div>
        <div>
          We made the code of our smart contracts publicly available so that you can be sure the system is secure.
        </div>
      </div>
      <h3 className={titleClasses}>Donate with ease</h3>
      <div className="flex gap-10 max-sm:flex-col">
        {SECONDARY_SECTIONS.map((section) => (
          <div className={descriptionClasses} key={section}>
            {section}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
