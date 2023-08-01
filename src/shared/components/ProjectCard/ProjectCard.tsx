import { Link } from 'react-router-dom';

import { getDate } from 'shared/helpers';

import {
  DateItem,
  Title,
  DateAndAmount,
  Amount,
  Wrapper,
  Status,
  RaisedAmount,
  Line,
} from './ProjectCard.styled';
import { type Props } from './types';

const ProjectCard = ({
  data: {
    deadline,
    title,
    goal,
    raisedAmount,
    threadTokenName,
    threadTokenCurrency,
  },
  linkSection,
  status = 'default',
  paddingSize = 'm',
}: Props) => {
  const statusTitles = {
    active: 'Active',
    completed: 'Completed',
  };

  return (
    <Link to={`/${linkSection}/${threadTokenCurrency}`}>
      <Wrapper status={status} paddingSize={paddingSize}>
        {status !== 'default' && (
          <Status status={status}>{statusTitles[status]}</Status>
        )}
        <Title>{title}</Title>
        <DateAndAmount>
          <DateItem>{getDate(deadline)}</DateItem>
          <Amount>
            <RaisedAmount>
              {status === 'active' && (
                <>
                  {raisedAmount / 1000000}
                  <Line />
                </>
              )}
            </RaisedAmount>
            {goal / 1000000}
          </Amount>
        </DateAndAmount>
      </Wrapper>
    </Link>
  );
};

export { ProjectCard };
