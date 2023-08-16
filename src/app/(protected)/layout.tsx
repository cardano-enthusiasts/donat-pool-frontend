'use client';

import { useAuthGuard } from '@/shared/hooks';

export default ({ children }: React.PropsWithChildren) => {
  const walletConnected = useAuthGuard();

  if (!walletConnected) {
    return;
  }

  return children;
};
