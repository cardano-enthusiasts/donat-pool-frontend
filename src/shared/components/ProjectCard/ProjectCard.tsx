import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setAllProjects } from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';
import { useDonate, useGetAllFundraisings } from 'shared/helpers/hooks';

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
  const dispatch = useDispatch();
  const getAllFundraisings = useGetAllFundraisings();
  const fundraisingData = {
    frThreadTokenCurrency: threadTokenCurrency,
    frThreadTokenName: threadTokenName,
    protocol,
  };
  const handleDonateSuccess = () => {
    getAllFundraisings();
    dispatch(setAllProjects());
    setValue('');
  };
  const donate = useDonate(fundraisingData, handleDonateSuccess);
  const [value, setValue] = useState<'' | number>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const getDate = () => {
    return new Date(deadline).toLocaleString('ru');
  };

  useEffect(() => {
    if (value === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [value]);

  const handleClickDonate = () => {
    if (value !== '') {
      donate(value * 1000000)();
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
