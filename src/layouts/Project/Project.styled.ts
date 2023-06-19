import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 160px;
  @media (max-width: 600px) {
    margin-bottom: 60px;
  }
`;

const Inner = styled.div`
  max-width: 620px;
`;

const PreviousPage = styled.div`
  position: absolute;
  left: 0;
  top: 80px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  &:before {
    display: block;
    content: url('/icons/arrow.svg');
    height: 32px;
    margin-right: 23px;
  }

  @media (max-width: 1200px) {
    top: 20px;
  }
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  @media (max-width: 900px) {
    margin: 80px 0 30px 0;
  }
`;

export { Wrapper, Inner, PreviousPage, PageHeader };
