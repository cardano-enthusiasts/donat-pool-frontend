import styled from 'styled-components';

import { h2 } from 'shared/styles/mixins';

const Title = styled.h2`
  ${h2}
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 54px;
  line-height: 104%;
  color: ${({ theme }) => theme.colors.red};
  margin: 0;

  @media (max-width: 900px) {
    margin-bottom: 15px;
    font-size: 36px;
  }
  @media (max-width: 400px) {
    margin-bottom: 15px;
    font-size: 30px;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 24px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 0 60px 0;
`;

const TitleAndButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const ProjectWrapper = styled.div`
  width: 100%;
  padding-bottom: 160px;
  @media (max-width: 700px) {
    max-width: 90vw;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  gap: 40px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const CreatorInner = styled.div`
  max-width: 620px;
`;

const CreatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 160px;
`;

const PreviousPageLink = styled.div`
  position: absolute;
  left: 0;
  top: 80px;
  display: flex;
  align-items: center;
  font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  &:before {
    content: url('/icons/arrow.svg');
    margin-right: 23px;
  }
`;

export {
  ProjectWrapper,
  Title,
  FilterButtons,
  PageHeader,
  TitleAndButtons,
  CardsWrapper,
  CreatorWrapper,
  CreatorInner,
  PreviousPageLink,
};
