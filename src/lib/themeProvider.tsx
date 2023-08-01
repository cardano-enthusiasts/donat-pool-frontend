'use client';

import { ThemeProvider } from 'styled-components';

import { theme } from '@/shared/styles/theme';
import StyledComponentsRegistry from './registry';

export default function StyledComponentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
