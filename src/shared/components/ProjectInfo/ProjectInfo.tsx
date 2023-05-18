import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import { useReceiveFunds } from 'shared/helpers/hooks';
import { theme } from 'shared/styles/theme';
import { type AppReduxState } from 'shared/types';

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
  const { isRequesting } = useSelector(
    (state: AppReduxState) => state.fundraising.communication.receiveFunds
  );
  const protocol = JSON.parse(process.env.PROTOCOL);
  const fundraisingData = {
    frThreadTokenCurrency: threadTokenCurrency,
    frThreadTokenName: threadTokenName,
    protocol,
  };

  const handleReceiveFunds = () => {
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
        <ButtonWrapper>
          <Button onClick={handleReceiveFunds}>receive funds</Button>
        </ButtonWrapper>
        <div>
          <BeatLoader
            color={theme.colors.secondary}
            loading={isRequesting}
            size={20}
            aria-label="Loading beat"
            data-testid="loader"
          />
        </div>
      </Items>
    </Wrapper>
  );
};
export { ProjectInfo };
