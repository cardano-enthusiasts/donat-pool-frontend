import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { setAllProjectsSuccess } from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';
import { transformProjects } from 'shared/helpers';
import { useOffchain } from 'shared/helpers/hooks';

import {
  Item,
  Wrapper,
  Title,
  Items,
  ButtonWrapper,
} from './ProjectCard.styled';
import { type Props } from './types';
import { Button, Input } from '..';

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
  const dispatch = useDispatch();
  const [value, setValue] = useState<'' | number>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const fundraisingData = {
    frThreadTokenCurrency: threadTokenCurrency,
    frThreadTokenName: threadTokenName,
    protocol,
  };
  const getDate = () => {
    return new Date(deadline).toLocaleString('ru');
  };

  const handleGetAllFundraisingsSuccess = (projects) => {
    const filteredProjects = transformProjects(projects);
    dispatch(setAllProjectsSuccess(filteredProjects));
  };

  const handleDonateSuccess = () => {
    toast.success('Donated successfully');
    offchain?.getAllFundraisings(handleGetAllFundraisingsSuccess)(console.log)(
      protocol
    )();
    setValue('');
  };
  const handleDonateError = (error) => {
    console.log(error);
  };

  useEffect(() => {
    if (value === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [value]);

  const handleClickDonate = () => {
    if (offchain) {
      if (value !== '') {
        offchain.donate(handleDonateSuccess)(handleDonateError)(
          fundraisingData
        )(value * 1000000)();
      }
    } else {
      toast.error('offchain is not defined');
    }
  };

  const handleInputChange = (event) => {
    const currentValue =
      event.target.value === '' ? '' : Number(event.target.value);
    setValue(currentValue);
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
      <Input
        value={value}
        onChange={handleInputChange}
        placeholder="Enter donation amount"
        hint="ADA"
      />
      <ButtonWrapper>
        <Button
          onClick={handleClickDonate}
          theme="bordered"
          isDisabled={isButtonDisabled}
        >
          Donate
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export { ProjectCard };
