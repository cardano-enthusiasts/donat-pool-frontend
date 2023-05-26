import {
  DateItem,
  Title,
  DateAndAmount,
  Amount,
  Wrapper,
} from './ProjectCard.styled';
import { type Props } from './types';

const ProjectCard = ({
  data: {
    deadline,
    description,
    goal,
    raisedAmount,
    threadTokenName,
    threadTokenCurrency,
  },
}: Props) => {
  const getDate = () => {
    return new Date(deadline).toLocaleString('ru');
  };

  return (
    <Wrapper>
      <Title>{description}</Title>
      <DateAndAmount>
        <DateItem>{getDate()}</DateItem>
        <Amount>{goal / 1000000}</Amount>
      </DateAndAmount>
    </Wrapper>
  );
};

export { ProjectCard };
