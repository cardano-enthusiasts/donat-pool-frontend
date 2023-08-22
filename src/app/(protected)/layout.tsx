'use client';

import { useAuthGuard } from '@/shared/hooks';
import type { PropsWithChildren } from '@/shared/types';

export default ({ children }: PropsWithChildren) => {
  const walletConnected = useAuthGuard();

  if (!walletConnected) {
    return;
  }

  return children;
};
