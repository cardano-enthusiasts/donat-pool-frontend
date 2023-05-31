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

export {
  ProjectWrapper,
  Title,
  FilterButtons,
  PageHeader,
  TitleAndButtons,
  CardsWrapper,
};
