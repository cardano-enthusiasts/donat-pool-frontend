import { type Theme } from '@mui/material';
import styled from 'styled-components';

const LogoLink = styled.a<{ theme: Theme }>`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
`;

export { LogoLink };
