import { ROUTES } from '@/shared/constants';

import {
  ButtonWrapper,
  Description,
  DescriptionPart1,
  DescriptionPart2,
  MainLogo,
  Wrapper,
} from './TitleAndDescription.styles';
import type { Props } from './types';
import { AccentButton } from '../.';

const TitleAndDescription = ({ isActive }: Props) => {
  return (
    <Wrapper isActive={isActive}>
      <MainLogo src="/img/big-logo.svg" alt="Donat pool logo" />
      <Description>
        <DescriptionPart1>Give a little,</DescriptionPart1>
        <DescriptionPart2>help a lot</DescriptionPart2>
      </Description>
      <ButtonWrapper>
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
      </ButtonWrapper>
    </Wrapper>
  );
};

export { TitleAndDescription };
