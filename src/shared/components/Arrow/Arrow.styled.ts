import styled from 'styled-components';

const Wrapper = styled.div<{ isUp: boolean }>`
  transform: ${({ isUp }) => (isUp ? 'rotate(180deg)' : 'rotate(0deg)')};
  height: 24px;
`;

export { Wrapper };
