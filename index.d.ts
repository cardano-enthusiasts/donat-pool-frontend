import { type Fundraising } from '@/shared/types';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PROTOCOL: string;
    }
  }

  interface WalletParameters {
    wallet: 'Nami';
    isMainnet: false;
  }

  interface Window {
    donatPool: Promise<{
      connectWallet: (
        onSuccess: () => void,
      ) => (
        onError: (error: string) => void,
      ) => (walletParameters: WalletParameters) => () => void;
      getAllFundraisings: (
        onSuccess: (fundraisings: Fundraising[]) => void,
      ) => (
        onError: (error: string) => void,
      ) => (
        protocol: Record<string, unknown>,
      ) => (walletParameters: WalletParameters) => () => void;
      closeProtocol: any;
      createFundraising: any;
      donate: any;
      getAppInfo: any;
      getUserRelatedFundraisings: any;
      startProtocol: any;
      setProtocol: any;
      receiveFunds: any;
    }>;
    cardano: {
      nami: any;
    };
  }
}

export {};
