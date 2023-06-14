import {
  Wrapper,
  TeamImage,
  TeamImageWrapper,
  ButtonWrapper,
  StackImg,
  StackTitle,
  Stack,
} from './AboutUs.styled';
import { Button } from '../Button/Button';

const AboutUs = () => {
  const stack: Array<{ id: string; src: string }> = [
    { id: 'plutarch', src: '/img/plutarch.svg' },
    { id: 'cardano-transaction-lib', src: '/img/cardano-transaction-lib.svg' },
    { id: 'react', src: '/img/react.svg' },
  ];
  return (
    <Wrapper>
      <TeamImageWrapper>
        <TeamImage src="/img/team.svg" />
      </TeamImageWrapper>
      <ButtonWrapper>
        <Button themeType="secondary" primaryColor="blue" secondaryColor="red">
          Donate
          <br /> To Us
        </Button>
      </ButtonWrapper>
      <StackTitle>Our stack</StackTitle>
      <Stack>
        {stack.map(({ id, src }) => (
          <StackImg key={id} src={src} alt={id} />
        ))}
      </Stack>
      <Button themeType="primary" primaryColor="red" secondaryColor="blue">
        Read more
      </Button>
    </Wrapper>
  );
};

export { AboutUs };
