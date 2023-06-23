import styled from 'styled-components';

import { h1 } from 'shared/styles/mixins';

const Title = styled.h1`
  ${h1}
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 24px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 0 60px 0;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 900px) {
    margin: 56px 0 32px 0;
  }
`;

const TitleAndButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 760px) {
    align-items: start;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const CreateButton = styled.div`
  @media (max-width: 760px) {
    position: fixed;
    bottom: 60px;
    right: 30px;
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  padding-bottom: 160px;
  margin: 0 auto;
  @media (max-width: 900px) {
    padding-bottom: 56px;
  }
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

const NoProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const SadCat = styled.img`
  max-width: 140px;
`;

export {
  Title,
  FilterButtons,
  PageHeader,
  TitleAndButtons,
  ProjectWrapper,
  CardsWrapper,
  NoProject,
  SadCat,
  CreateButton,
};
