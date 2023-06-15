import styled from 'styled-components';

const Inner = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Title = styled.h1`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.red};
  margin: 0;
  font-size: 54px;
  line-height: 104%;
`;

const Description = styled.div`
  font-size: 16px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  margin-top: 40px;
`;

export { Inner, Title, Description, ButtonsWrapper };
