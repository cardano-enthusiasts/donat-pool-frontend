import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Item = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};
`;

export { Wrapper, Item };
