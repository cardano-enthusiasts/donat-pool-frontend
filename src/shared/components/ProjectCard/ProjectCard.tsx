import Link from 'next/link';

import { getDate } from '@/shared/helpers';

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
    raisedAmt,
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
    <Link href={`/${linkSection}/${threadTokenCurrency}`}>
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
                  {Number(raisedAmt.value) / 1000000}
                  <Line />
                </>
              )}
            </RaisedAmount>
            {Number(goal.value) / 1000000}
          </Amount>
        </DateAndAmount>
      </Wrapper>
    </Link>
  );
};

export { ProjectCard };
