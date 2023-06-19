import styled from 'styled-components';

const Wrapper = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 117%;

  color: ${({ theme }) => theme.colors.red};
`;

export { Wrapper };
