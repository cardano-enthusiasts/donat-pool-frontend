import styled from 'styled-components';

import { h2 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  margin: 80px 0;
`;

const TitleAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 60px;
  text-align: center;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

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
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  gap: 40px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export { Wrapper, TitleAndButton, Title, CardsWrapper };
