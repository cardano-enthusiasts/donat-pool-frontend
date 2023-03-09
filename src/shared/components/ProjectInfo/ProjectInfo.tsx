import { toast } from 'react-toastify';

import { protocol } from 'shared/constants';
import { useOffchain } from 'shared/helpers/hooks';

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
  const offchain = useOffchain();
  const getDate = () => {
    return new Date(deadline).toLocaleString('ru');
  };
  const fundraisingData = {
    frThreadTokenCurrency: threadTokenCurrency,
    frThreadTokenName: threadTokenName,
    protocol,
  };

  const handleReceiveFundsSuccess = () => {
    console.log('success');
  };

  const handleReceiveFundsError = (error) => {
    console.log(error);
    toast.error(error);
  };

  const handleReceiveFunds = () => {
    if (offchain) {
      console.log(fundraisingData);
      offchain.receiveFunds(handleReceiveFundsSuccess)(handleReceiveFundsError)(
        fundraisingData
      )();
    } else {
      toast.error('offchain is not defined');
    }
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
