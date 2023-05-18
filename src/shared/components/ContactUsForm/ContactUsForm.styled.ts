import styled from 'styled-components';

const Wrapper = styled.form`
  max-width: 450px;
  font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 48px;
  line-height: 133%;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

const Description = styled.div`
  font-size: 24px;
`;

export { Wrapper, Title, Description };
