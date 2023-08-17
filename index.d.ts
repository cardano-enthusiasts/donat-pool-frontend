import type { FetchedFundraising } from '@/shared/types';
import type { FundraisingData } from '@/shared/types/common';

interface WalletParameters {
  wallet: 'Nami';
  isMainnet: false;
}
interface InjectedProvider<Name> {
  name: Name;
  enable: () => Promise<unknown>;
  isEnabled: () => Promise<boolean>;
  icon: string;
  apiVersion: string;
}
interface Protocol {
  protocolCurrency: string;
  protocolTokenName: string;
}
type handleError = (error: string) => void;
type FetchFundraisings = (
  onSuccess: (fundraisings: FetchedFundraising[]) => void,
) => (onError: handleError) => (protocol: Protocol) => (walletParameters: WalletParameters) => () => void;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PROTOCOL: string;
    }
  }

  interface Window {
    cardano?: {
      nami?: InjectedProvider<'Nami'>;
      flint?: InjectedProvider<'Flint wallet'>;
      eternl?: InjectedProvider<'eternl'>;
    };
    donatPool: Promise<{
      connectWallet: (
        onSuccess: () => void,
      ) => (onError: handleError) => (walletParameters: WalletParameters) => () => void;
      getAppInfo: (
        onSuccess: (appInfo: {
          protocolConfig: {
            minAmountParam: {
              value: number;
            };
            maxAmountParam: {
              value: number;
            };
            minDurationParam: {
              value: number;
            };
            maxDurationParam: {
              value: number;
            };
            protocolFeeParam: {
              value: number;
            };
          };
          userInfo: {
            address: string;
            isManager: boolean;
          };
        }) => void,
      ) => (onError: handleError) => (protocol: Protocol) => (walletParameters: WalletParameters) => () => void;
      createFundraising: (onSuccess: (createdFundraising: Fundraising) => void) => (onError: handleError) => (
        protocol: Protocol,
      ) => (walletParameters: WalletParameters) => (data: {
        title: string;
        amount: number;
        duration: {
          days: number;
          hours: number;
          minutes: number;
        };
      }) => () => void;
      getAllFundraisings: FetchFundraisings;
      getUserRelatedFundraisings: FetchFundraisings;
      donate: (
        onSuccess: () => void,
      ) => (
        onError: handleError,
      ) => (
        protocol: Protocol,
      ) => (walletParameters: WalletParameters) => (fundraisingData: FundraisingData) => (amount: number) => () => void;
      setProtocol: (
        onSuccess: (config: {
          minAmountParam: number;
          maxAmountParam: number;
          minDurationParam: number;
          maxDurationParam: number;
          protocolFeeParam: number;
        }) => void,
      ) => (onError: handleError) => (protocol: Protocol) => (walletParameters: WalletParameters) => () => void;
      closeProtocol: any;
      receiveFunds: (
        onSuccess: () => void,
      ) => (
        onError: handleError,
      ) => (
        protocol: Protocol,
      ) => (walletParameters: WalletParameters) => (fundraisingData: FundraisingData) => () => void;
    }>;
  }
}

export {};
