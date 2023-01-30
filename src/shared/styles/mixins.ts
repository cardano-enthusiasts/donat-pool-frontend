import { css } from 'styled-components';

const baseContainer = css`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 70px;
  padding-right: 70px;

  @media (max-width: 1250px) {
    padding-left: 45px;
    padding-right: 45px;
  }

  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export { baseContainer };
