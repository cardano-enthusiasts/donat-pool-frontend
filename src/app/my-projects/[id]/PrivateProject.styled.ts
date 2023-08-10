import styled from 'styled-components';

const DeadlineAndStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  padding: 28px 0;
`;

const Status = styled.div<{ isActive: boolean }>`
  padding: 8px 12px;
  background: #fff;
  border: 2px solid ${({ theme, isActive }) => (isActive ? theme.colors.red : theme.colors.green)};
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.red : theme.colors.green)};
`;

const Deadline = styled.div`
  font-weight: bold;
  font-size: 20px;

  color: #141414;
`;

const Inner = styled.div`
  max-width: 600px;
`;

const CounterWrapper = styled.div`
  display: flex;
  padding: 24px 0;
  border-bottom: 2px solid #000000;
`;

export { DeadlineAndStatus, Status, Deadline, Inner, CounterWrapper };
