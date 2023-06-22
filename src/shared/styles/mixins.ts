import { css } from 'styled-components';

const baseContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: 1250px) {
    padding-left: 45px;
    padding-right: 45px;
  }

  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const baseInner = css`
  width: 100%;
  max-width: 1920px;
`;

const link = css`
  a {
    text-decoration: none;
  }
`;

const h1 = css`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 54px;
  line-height: 104%;
  color: ${({ theme }) => theme.colors.red};
  margin: 0;

  @media (max-width: 900px) {
    font-size: 36px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

const h2 = css`
  font-weight: 700;
  line-height: 120%;
`;

const h3 = css`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
`;

const getLargeLayoutPadding = () => css`
  padding-right: 80px;
`;

const getMediumLayoutPadding = () => css`
  padding-left: 50px;
  padding-right: 50px;
`;
const getSmallLayoutPadding = () => css`
  padding-left: 20px;
  padding-right: 20px;
`;

export {
  baseContainer,
  baseInner,
  link,
  h1,
  h2,
  h3,
  getLargeLayoutPadding,
  getMediumLayoutPadding,
  getSmallLayoutPadding,
};
