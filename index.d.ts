import type { FetchedFundraising } from '@/shared/types';
import type { FundraisingData } from '@/shared/types/common';

interface ConnectionParameters {
  wallet: 'Nami' | 'Lode' | 'Flint' | 'Eternl';
  isMainnet: false;
}
interface InjectedWallet<Name> {
  name: Name;
  apiVersion: string;
  icon: string;
  enable: () => Promise<Record<string, unknown> | undefined> | never;
  isEnabled: () => Promise<boolean>;
}
interface Protocol {
  protocolCurrency: string;
  protocolTokenName: string;
}
type HandleError = (error: string) => void;
type FetchFundraisings = (
  onSuccess: (fundraisings: FetchedFundraising[]) => void,
) => (onError: HandleError) => (protocol: Protocol) => (connectionParameters: ConnectionParameters) => () => void;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PROTOCOL: string;
    }
  }

  interface Window {
    cardano?: {
      nami?: InjectedWallet<'Nami'>;
      LodeWallet?: InjectedWallet<'LodeWallet'>;
      flint?: InjectedWallet<'Flint wallet'>;
      eternl?: InjectedWallet<'eternl'>;
    };
    donatPool: Promise<{
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
      ) => (onError: HandleError) => (protocol: Protocol) => (connectionParameters: ConnectionParameters) => () => void;
      createFundraising: (onSuccess: (createdFundraising: Fundraising) => void) => (onError: HandleError) => (
        protocol: Protocol,
      ) => (connectionParameters: ConnectionParameters) => (data: {
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
        onError: HandleError,
      ) => (
        protocol: Protocol,
      ) => (
        connectionParameters: ConnectionParameters,
      ) => (fundraisingData: FundraisingData) => (amount: number) => () => void;
      setProtocol: (
        onSuccess: (config: {
          minAmountParam: number;
          maxAmountParam: number;
          minDurationParam: number;
          maxDurationParam: number;
          protocolFeeParam: number;
        }) => void,
      ) => (onError: HandleError) => (protocol: Protocol) => (connectionParameters: ConnectionParameters) => () => void;
      receiveFunds: (
        onSuccess: () => void,
      ) => (
        onError: HandleError,
      ) => (
        protocol: Protocol,
      ) => (connectionParameters: ConnectionParameters) => (fundraisingData: FundraisingData) => () => void;
    }>;
  }
}

export {};
