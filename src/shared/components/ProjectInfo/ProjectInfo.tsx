import { protocol } from 'shared/constants';
import { useReceiveFunds } from 'shared/helpers/hooks/useReceiveFunds';

import {
  ButtonWrapper,
  Item,
  Items,
  Title,
  Wrapper,
} from './ProjectInfo.styled';
import { type Props } from './types';
import { Button } from '..';

const ProjectInfo = ({
  data: {
    deadline,
    description,
    goal,
    raisedAmount,
    threadTokenCurrency,
    threadTokenName,
  },
}: Props) => {
  const receiveFunds = useReceiveFunds();
  const getDate = () => {
    return new Date(deadline).toLocaleString('ru');
  };
  const fundraisingData = {
    frThreadTokenCurrency: threadTokenCurrency,
    frThreadTokenName: threadTokenName,
    protocol,
  };

  const handleReceiveFunds = () => {
    console.log(fundraisingData);
    receiveFunds(fundraisingData);
  };

  return (
    <Wrapper>
      <Title>{description}</Title>
      <Items>
        <Item>deadline: </Item>
        <Item>{getDate()}</Item>
        <Item>goal: </Item>
        <Item>{goal / 1000000} ADA</Item>
        <Item>raised: </Item>
        <Item>{raisedAmount / 1000000} ADA</Item>
      </Items>
      <ButtonWrapper>
        <Button onClick={handleReceiveFunds} size="s">
          receive funds
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
export { ProjectInfo };
