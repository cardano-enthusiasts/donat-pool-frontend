import styled from 'styled-components';

import { type Props } from './types';

const getColor = (status) => {
  const statusColors = {
    default: 'blue',
    active: 'red',
    completed: 'green',
  };
  return ({ theme }) => theme.colors[statusColors[status]];
};

const Wrapper = styled.div<{
  status: Props['status'];
  paddingSize: NonNullable<Props['paddingSize']>;
}>`
  background: #fff;
  padding: ${({ paddingSize }) =>
    paddingSize === 's' ? '10px 16px 24px' : '28px 16px 24px'};

  border-radius: 6px;

  @media (max-width: 900px) {
    padding: 20px;
  }
  @media (max-width: 500px) {
    padding: 12px;
  }

  border: 2px solid ${({ status }) => getColor(status)};
  box-shadow: -4px 4px 0px ${({ status }) => getColor(status)};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
`;

const DateAndAmount = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 2px solid #141414;
  width: 100%;
`;
const DateItem = styled.div`
  line-height: 100%;
`;
const Amount = styled.div`
  display: flex;
  font-weight: bold;
  line-height: 100%;
  &:after {
    content: url('/icons/ADA.svg');
    margin-left: 4px;
    width: 14px;
    height: 14px;
  }
`;
const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  color: #4757e6;

  margin: 0 0 43px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 400px) {
    max-width: 200px;
  }
`;

const Status = styled.div<{ status: Props['status'] }>`
  color: ${({ status }) => getColor(status)};
  font-weight: bold;
  padding-bottom: 12px;
  border-bottom: 2px solid #000000;
  margin-bottom: 18px;
  font-size: 14px;
`;

const RaisedAmount = styled.div`
  display: flex;
  color: #ff6b95;
`;

const Line = styled.div`
  width: 2px;
  border-radius: 5px;
  margin: 0 8px;
  background-color: #ff6b95;
`;

export {
  Wrapper,
  DateItem,
  Amount,
  DateAndAmount,
  Title,
  Status,
  RaisedAmount,
  Line,
};
