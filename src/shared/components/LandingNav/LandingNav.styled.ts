import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Link = styled.a<{ isActive: boolean }>`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif, sans-serif;
  font-size: ${({ isActive }) => (isActive ? '54px' : '15px')};
  color: ${({ theme }) => theme.colors.white};
`;

export { Wrapper, Link };
