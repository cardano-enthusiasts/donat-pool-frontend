import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 160px;
`;

const Title = styled.h1`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 54px;
  line-height: 104%;
  text-align: center;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #ff6b95;
  margin: 0 0 24px;
  @media (max-width: 800px) {
    font-size: 36px;
  }
`;

const Duration = styled.div`
  padding: 24px 0;
  border-top: 2px solid #141414;
  border-bottom: 2px solid #141414;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CounterWrapper = styled.div`
  margin: 24px 0 40px 0;
`;

export { Wrapper, Title, Duration, ButtonWrapper, CounterWrapper };
