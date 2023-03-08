import { toast } from 'react-toastify';

import { protocol } from 'shared/constants';
import { useOffchain } from 'shared/helpers/hooks';

import { Item, Wrapper, Title, Items } from './ProjectCard.styled';
import { type Props } from './types';
import { Button } from '..';

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
  const offchain = useOffchain();

  const fundraisingData = {
    frThreadTokenCurrency: threadTokenCurrency,
    frThreadTokenName: threadTokenName,
    protocol,
  };
  const getDate = () => {
    return new Date(deadline).toString();
  };

  const handleDonateSuccess = (smt) => {
    toast.success('Donated successfully', smt);
  };
  const handleDonateError = (error) => {
    console.log(error);
  };

  const handleClickDonate = () => {
    if (offchain) {
      offchain.donate(handleDonateSuccess)(handleDonateError)(fundraisingData)(
        100000000
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
        <Item>{raisedAmount}</Item>
      </Items>
      <Button onClick={handleClickDonate}>Donate</Button>
    </Wrapper>
  );
};

export { ProjectCard };
