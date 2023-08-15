'use client';

import { useAuthGuard } from '@/shared/hooks';
import type { PropsWithChildren } from '@/shared/types';

const Layout = ({ children }: PropsWithChildren) => {
  const walletConnected = useAuthGuard();

  if (!walletConnected) {
    return;
  }

  return children;
};

export default Layout;
