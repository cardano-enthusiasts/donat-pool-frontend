import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';

import { protocol } from 'shared/constants';
import { useDonate } from 'shared/helpers/hooks';
import { theme } from 'shared/styles/theme';
import { type AppReduxState } from 'shared/types';

import {
  Item,
  Wrapper,
  Title,
  Items,
  ButtonWrapper,
  Loader,
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
  const fundraisingData = {
    frThreadTokenCurrency: threadTokenCurrency,
    frThreadTokenName: threadTokenName,
    protocol,
  };
  const [isClicked, setIsClicked] = useState(false);
  const handleDonateResult = () => {
    setValue('');
    setIsClicked(false);
    setIsButtonDisabled(false);
    setIsInputDisabled(false);
  };
  const donate = useDonate(handleDonateResult);
  const [value, setValue] = useState<'' | number>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const { isRequesting } = useSelector(
    (state: AppReduxState) => state.info.communication.donate
  );

  const getDate = () => {
    return new Date(deadline).toLocaleString('ru');
  };

  useEffect(() => {
    setIsButtonDisabled(value === '');
  }, [value]);

  useEffect(() => {
    if (isRequesting) {
      setIsButtonDisabled(true);
      setIsInputDisabled(true);
    } else {
      setIsInputDisabled(false);
      if (value === '') {
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
      }
    }
  }, [isRequesting, value]);

  const handleClickDonate = () => {
    if (value !== '') {
      donate(fundraisingData, value);
      setIsClicked(true);
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
        isDisabled={isInputDisabled}
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
      <Loader isLoading={isRequesting}>
        {isRequesting && isClicked && (
          <ReactLoading color={theme.colors.secondary} height={20} />
        )}
      </Loader>
    </Wrapper>
  );
};

export { ProjectCard };
