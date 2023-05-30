import styled from 'styled-components';

import { h2 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  margin-bottom: 160px;
  @media (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const Title = styled.h2`
  ${h2}
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 54px;
  line-height: 104%;
  color: ${({ theme }) => theme.colors.red};
  margin: 80px 0 60px 0;

  @media (max-width: 900px) {
    margin-bottom: 15px;
    font-size: 36px;
  }
  @media (max-width: 400px) {
    margin-bottom: 15px;
    font-size: 30px;
  }
`;

export { Wrapper, Title };
