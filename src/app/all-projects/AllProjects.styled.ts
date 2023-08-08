import styled from 'styled-components';

import { h1 } from '@/shared/styles/mixins';

const TitleAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  margin-bottom: 60px;
  text-align: center;
  @media (max-width: 900px) {
    margin-bottom: 32px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const CreateButton = styled.div`
  @media (max-width: 760px) {
    position: fixed;
    bottom: 60px;
    right: 30px;
  }
`;

const Title = styled.h1`
  ${h1}
  margin: 0;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  gap: 40px;
  @media (max-width: 800px) {
    gap: 32px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export { TitleAndButton, Title, CardsWrapper, CreateButton };
