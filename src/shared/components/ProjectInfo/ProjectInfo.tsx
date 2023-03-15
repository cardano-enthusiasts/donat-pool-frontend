import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import { protocol } from 'shared/constants';
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
    (state: AppReduxState) => state.info.communication.receiveFunds
  );
  const fundraisingData = {
    frThreadTokenCurrency: threadTokenCurrency,
    frThreadTokenName: threadTokenName,
    protocol,
  };

  const handleReceiveFunds = () => {
    // const overtimeFundraisingData = {
    //   frThreadTokenCurrency: new Uint8Array([
    //     174, 105, 251, 106, 201, 216, 73, 212, 42, 249, 59, 198, 117, 154, 221,
    //     22, 86, 144, 152, 182, 137, 61, 199, 34, 202, 109, 190, 69,
    //   ]),
    //   frThreadTokenName: new Uint8Array([
    //     70, 117, 110, 100, 114, 97, 105, 115, 105, 110, 103, 84, 104, 114, 101,
    //     97, 100, 84, 111, 107, 101, 110,
    //   ]),
    //   protocol: {
    //     protocolCurrency: new Uint8Array([
    //       250, 223, 43, 36, 7, 209, 54, 199, 79, 77, 240, 0, 34, 150, 75, 20,
    //       18, 157, 20, 212, 155, 69, 124, 210, 117, 45, 98, 199,
    //     ]),
    //     protocolTokenName: new Uint8Array([
    //       68, 111, 110, 97, 116, 80, 111, 111, 108, 80, 114, 111, 116, 111, 99,
    //       111, 108,
    //     ]),
    //   },
    // };

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
          <Button onClick={handleReceiveFunds} size="s">
            receive funds
          </Button>
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
