'use client';

import { useAuthGuard } from '@/shared/hooks';

const Layout = ({ children }: { children: React.ReactNode }) => {
  useAuthGuard();

  return children;
};

export default Layout;
