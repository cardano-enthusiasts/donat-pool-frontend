import {
  Wrapper,
  TeamImage,
  TeamImageWrapper,
  ButtonWrapper,
  StackItems,
  StackTitle,
  Stack,
} from './AboutUs.styled';
import { Button } from '../Button/Button';

const AboutUs = () => {
  const stack: Array<{ title: string; color: 'blue' | 'red' | 'green' }> = [
    { title: 'Plutarch', color: 'blue' },
    { title: 'Cardano-transaction-lib', color: 'red' },
    { title: 'React', color: 'green' },
  ];
  return (
    <Wrapper>
      <TeamImageWrapper>
        <TeamImage src="/img/team.svg" />
      </TeamImageWrapper>
      <ButtonWrapper>
        <Button themeType="secondary" primaryColor="blue" secondaryColor="red">
          Donate To Us
        </Button>
      </ButtonWrapper>
      <StackTitle>Our stack</StackTitle>
      <Stack>
        {stack.map(({ title, color }) => {
          return (
            <StackItems key={title} color={color} data-title={title}>
              {title}
            </StackItems>
          );
        })}
      </Stack>
      <Button themeType="primary" primaryColor="red" secondaryColor="blue">
        Read more
      </Button>
    </Wrapper>
  );
};

export { AboutUs };
