import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  @media (max-width: 860px) {
    display: flex;
    justify-content: center;
  }
`;

const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  line-height: 133%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: 0;
  &:before {
    content: url('/icons/paper-clip.svg');
    height: 22px;
  }
`;

const Address = styled.div`
  position: absolute;
  right: 0;
  margin-top: 4px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.gray};
  filter: drop-shadow(0px 2px 15px rgba(71, 87, 230, 0.4));

  &:before {
    position: absolute;
    top: -16px;
    content: url('/icons/tooltip-symmetric.svg');
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 12px;
  }
`;

export { Wrapper, ConnectButton, Address };
