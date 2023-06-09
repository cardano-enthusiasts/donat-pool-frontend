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
  max-width: 1440px;
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

const cardWrapper = css`
  background: ${({ theme }) => theme.colors.white};
  padding: 28px 16px 24px;

  border-radius: 6px;

  @media (max-width: 900px) {
    padding: 20px;
  }
  @media (max-width: 500px) {
    padding: 12px;
  }
`;

const getFieldStyles = ({ errorInfo }) =>
  css`
    width: 100%;
    min-width: 150px;
    border: 2px solid
      ${({ theme }) =>
        errorInfo || errorInfo === ''
          ? theme.colors.error
          : theme.colors.black};

    color: ${({ theme }) =>
      errorInfo || errorInfo === '' ? theme.colors.error : theme.colors.black};
    border-radius: 6px;
    width: 100%;
    padding: 13px 16px;
    outline: none;
    font-family: 'Microsoft YaHei', Arial, sans-serif;
    background-color: transparent;
    font-size: 20px;

    &::placeholder {
      font-family: 'Microsoft YaHei', Arial, sans-serif;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.green};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.dark50};
      background-color: ${({ theme }) => theme.colors.dark5};
    }
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
  cardWrapper,
  getFieldStyles,
  getLargeLayoutPadding,
  getMediumLayoutPadding,
  getSmallLayoutPadding,
};
