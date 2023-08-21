import HTMLReactParser from 'html-react-parser';

import { PRIMARY_SECTIONS, SECONDARY_SECTIONS } from './data';
import { StandardButton } from '..';

const WhyChooseUs = () => {
  const titleClasses = 'mb-6 text-5xl font-bold leading-normal max-lg:text-[32px] max-lg:leading-tight';
  const descriptionClasses = 'text-2xl max-md:text-lg';
  return (
    <div className="text-black">
      {PRIMARY_SECTIONS.map(({ title, description }) => (
        <div className="mb-10" key={title}>
          <h3 className={titleClasses}>{title}</h3>
          <div className={descriptionClasses}>{HTMLReactParser(description)}</div>
        </div>
      ))}
      <div className="mb-10 flex items-center gap-6 max-lg:flex-col max-lg:items-start">
        <div className="shrink-0">
          <StandardButton
            primaryColor="blue"
            secondaryColor="green"
            fontColor="white"
            href="https://github.com/fullstack-development/donat-pool-onchain"
            isAnimation={true}
          >
            On-chain code
          </StandardButton>
        </div>

        <div className="shrink-0">
          <StandardButton
            primaryColor="green"
            secondaryColor="blue"
            fontColor="black"
            href="https://github.com/fullstack-development/donat-pool-offchain"
            isAnimation={true}
          >
            Off-chain code
          </StandardButton>
        </div>

        <div>
          We made the code of our smart contracts publicly available so that you can be sure the system is secure.
        </div>
      </div>
      <h3 className={titleClasses}>Donate with ease</h3>
      <div className="flex gap-10 max-sm:flex-col">
        <div className={descriptionClasses}>{HTMLReactParser(SECONDARY_SECTIONS.description1)}</div>
        <div className={descriptionClasses}>{HTMLReactParser(SECONDARY_SECTIONS.description2)}</div>
      </div>
    </div>
  );
};

export { WhyChooseUs };
