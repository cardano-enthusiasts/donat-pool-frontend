import styled from 'styled-components';

import { cardWrapper } from 'shared/styles/mixins';

import { type Props } from './types';

const getColor = (status) => {
  const statusColors = {
    default: 'blue',
    active: 'red',
    completed: 'green',
  };
  return ({ theme }) => theme.colors[statusColors[status]];
};

const Wrapper = styled.div<{ status: Props['status'] }>`
  ${cardWrapper};

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
  border-top: 2px solid ${({ theme }) => theme.colors.black};
  width: 100%;
`;
const DateItem = styled.div``;
const Amount = styled.div`
  font-weight: bold;
  &:after {
    content: url('icons/ADA.svg');
    width: 14px;
    height: 14px;
  }
`;
const Title = styled.h3`
  font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  color: ${({ theme }) => theme.colors.blue};

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
`;

export { Wrapper, DateItem, Amount, DateAndAmount, Title, Status };
