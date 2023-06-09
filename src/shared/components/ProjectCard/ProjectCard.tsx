import { Link } from 'react-router-dom';

import getDate from 'shared/helpers/getDate';

import {
  DateItem,
  Title,
  DateAndAmount,
  Amount,
  Wrapper,
  Status,
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
  linkSection,
  status = 'default',
}: Props) => {
  const statusTitles = {
    active: 'Active',
    completed: 'Completed',
  };

  return (
    <Link to={`/${linkSection}/${path}`}>
      <Wrapper status={status}>
        {status !== 'default' && (
          <Status status={status}>{statusTitles[status]}</Status>
        )}
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
