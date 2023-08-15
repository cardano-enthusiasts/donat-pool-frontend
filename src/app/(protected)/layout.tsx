'use client';

import { useAuthGuard } from '@/shared/hooks';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const walletConnected = useAuthGuard();

  if (!walletConnected) {
    return;
  }

  return children;
};

export default Layout;
