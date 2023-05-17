import {
  TeamImage,
  TeamImageWrapper,
  Name,
  JobTitle,
  Kate,
  Oksana,
  Svetlana,
  Olga,
  Mariay,
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
    <>
      <TeamImageWrapper>
        <TeamImage src="img/team.png" />
        <Kate>
          <Name>Kate Bushueva</Name>
          <JobTitle>Haskell developer Cardano blockchain engineer</JobTitle>
        </Kate>
        <Oksana>
          <Name>Oksana Potsulan</Name>
          <JobTitle>Project manager</JobTitle>
        </Oksana>
        <Svetlana>
          <Name>Svetlana Dunicheva</Name>
          <JobTitle>Developer</JobTitle>
        </Svetlana>
        <Olga>
          <Name>Olga Klimenko</Name>
          <JobTitle>Developer</JobTitle>
        </Olga>
        <Mariay>
          <Name>Mariya Bulanova</Name>
          <JobTitle>Designer</JobTitle>
        </Mariay>
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
            <StackItems key={title} color={color}>
              {title}
            </StackItems>
          );
        })}
      </Stack>
    </>
  );
};

export { AboutUs };
