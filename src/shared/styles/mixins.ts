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

const link = css`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark75};

    &:hover {
      color: ${({ theme }) => theme.colors.dark100};
    }
  }
`;

const h1 = css`
  font-size: 32px;
  line-height: 120%;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark100};
`;

const h2 = css`
  font-weight: 700;
  line-height: 120%;
`;

const cardWrapper = css`
  background: #fff;
  border: 1px solid #fff;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 40px 30px;
`;

export { baseContainer, link, h1, h2, cardWrapper };
