import HTMLReactParser from 'html-react-parser';

import { primaryInfoSections, secondaryInfoSections } from './data';
import {
  Wrapper,
  Title,
  Description,
  InfoSection,
  ButtonAndInfo,
  MinorDescription,
  MinorInfoSection,
  ButtonWrapper,
} from './WhyChooseUs.styled';
import { Button } from '../Button/Button';

const WhyChooseUs = () => {
  return (
    <Wrapper>
      {primaryInfoSections.map(({ title, description }) => (
        <InfoSection key={title}>
          <Title>{title}</Title>
          <Description>{HTMLReactParser(description)}</Description>
        </InfoSection>
      ))}
      <ButtonAndInfo>
        <ButtonWrapper>
          <Button
            primaryColor="blue"
            secondaryColor="green"
            fontColor="white"
            href="https://github.com/fullstack-development/donat-pool-onchain"
          >
            On-chain code
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button
            primaryColor="green"
            secondaryColor="blue"
            fontColor="black"
            href="https://github.com/fullstack-development/donat-pool-offchain"
          >
            Off-chain code
          </Button>
        </ButtonWrapper>

        <MinorDescription>
          We made the code of our smart contracts publicly available so that you
          can be sure the system is secure.
        </MinorDescription>
      </ButtonAndInfo>
      <Title>Donate with ease</Title>
      <MinorInfoSection>
        <Description>
          {HTMLReactParser(secondaryInfoSections.description1)}
        </Description>
        <Description>
          {HTMLReactParser(secondaryInfoSections.description2)}
        </Description>
      </MinorInfoSection>
    </Wrapper>
  );
};

export { WhyChooseUs };
