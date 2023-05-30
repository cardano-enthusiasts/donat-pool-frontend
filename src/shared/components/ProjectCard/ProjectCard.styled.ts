import styled from 'styled-components';

import { cardWrapper } from 'shared/styles/mixins';

const Wrapper = styled.div`
  ${cardWrapper};
  display: flex;
  flex-direction: column;
  cursor: pointer;
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

export { Wrapper, DateItem, Amount, DateAndAmount, Title };
