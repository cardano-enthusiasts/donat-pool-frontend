'use client';

import { ConnectWalletModal } from '@/shared/components';
import { useCardano } from '@/shared/hooks';

function Layout({ children }: React.PropsWithChildren) {
  const { initialized, connectedWalletCardanoKey } = useCardano();

  if (initialized) {
    return connectedWalletCardanoKey ? children : <ConnectWalletModal />;
  }
}

export default Layout;
