'use client';

import { ConnectWalletModal } from '@/shared/components';
import { useCardano, useOffchain } from '@/shared/hooks';

function Layout({ children }: React.PropsWithChildren) {
  const { initialized, connectedWalletCardanoKey } = useCardano();
  const offchain = useOffchain();

  if (initialized && offchain) {
    return connectedWalletCardanoKey ? children : <ConnectWalletModal />;
  }
}

export default Layout;
