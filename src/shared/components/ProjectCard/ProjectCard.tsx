import { Link } from 'react-router-dom';

import getDate from 'shared/helpers/getDate';

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
    path,
    raisedAmount,
    threadTokenName,
    threadTokenCurrency,
  },
}: Props) => {
  return (
    <Link to={`/${path}`}>
      <Wrapper>
        <Title>{description}</Title>
        <DateAndAmount>
          <DateItem>{getDate(deadline)}</DateItem>
          <Amount>{goal / 1000000}</Amount>
        </DateAndAmount>
      </Wrapper>
    </Link>
  );
};

export { ProjectCard };
