import { primaryInfoSections, secondaryInfoSections } from './data';
import {
  Wrapper,
  Title,
  Description,
  InfoSection,
  ButtonAndInfo,
  MinorDescription,
  MinorInfoSection,
} from './WhyChooseUs.styled';
import { Button } from '../Button/Button';

const WhyChooseUs = () => {
  return (
    <Wrapper>
      {primaryInfoSections.map(({ title, description }) => (
        <InfoSection key={title}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InfoSection>
      ))}
      <ButtonAndInfo>
        <Button themeType="primary" primaryColor="blue" secondaryColor="green">
          See code
        </Button>
        <MinorDescription>
          Мы открыли для вас код контрактов, чтобы вы могли удостовериться, что
          система безопасна.
        </MinorDescription>
      </ButtonAndInfo>
      <Title>Donate with ease</Title>
      <MinorInfoSection>
        <Description>{secondaryInfoSections.description1}</Description>
        <Description>{secondaryInfoSections.description2}</Description>
      </MinorInfoSection>
    </Wrapper>
  );
};

export { WhyChooseUs };
