import styled from 'styled-components';

import { h1 } from '@/shared/styles/mixins';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Inner = styled.div`
  max-width: 620px;
  width: 100%;
`;

const PreviousPage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 280%;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  &:before {
    display: block;
    content: url('/icons/arrow.svg');
    text-align: center;
    width: 40px;
    height: 40px;
    margin-right: 23px;
  }

  @media (max-width: 1200px) {
    position: static;
  }
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  @media (max-width: 1200px) {
    justify-content: start;
  }
  @media (max-width: 900px) {
    margin-bottom: 32px;
  }
`;

const Title = styled.h1`
  ${h1};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Wrapper, Inner, PreviousPage, PageHeader, Title };
