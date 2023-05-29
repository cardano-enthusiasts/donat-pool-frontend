import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-size: 36px;
  line-height: 111%;
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
  margin: 0 0 40px 0;
`;
const InputWrapper = styled.div`
  margin-bottom: 32px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;

const LoadingDonut = styled.img`
  animation: spin 4s linear infinite;
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Success = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;

const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;

export { Title, InputWrapper, Buttons, Loading, LoadingDonut, Success, Error };
