import {
  type BackendProjects,
  type CreateFundraisingParams,
  type FundraisingData,
  type UserAndProtocolParams,
  type Config,
  type BackendProject,
} from './';

type OnError = (error: string) => void;

interface TestnetNami {
  wallet: 'Nami';
  isMainnet: false;
}

type ConnectWallet = (
  onSuccess: () => void,
) => (onError: OnError) => (walletParams: TestnetNami) => () => void;

type CreateFundraising = (
  onSuccess: (fundraisingData: BackendProject) => void,
) => (
  onError: OnError,
) => (
  fixedProtocol: string,
) => (
  walletParams: TestnetNami,
) => (createFundraisingParams: CreateFundraisingParams) => () => void;

type Donate = (
  onSuccess: () => void,
) => (
  onError: OnError,
) => (
  fixedProtocol: string,
) => (
  walletParams: TestnetNami,
) => (fundraisingData: FundraisingData) => (amount: number) => () => void;

type GetFundraisings = (
  onSuccess: (projects: BackendProjects) => void,
) => (
  onError: OnError,
) => (fixedProtocol: string) => (walletParams: TestnetNami) => () => void;

type GetAppInfo = (
  onSuccess: (params: UserAndProtocolParams) => void,
) => (
  onError: OnError,
) => (fixedProtocol: string) => (walletParams: TestnetNami) => () => void;

type UpdateProtocol = (
  onSuccess: (config: Config) => void,
) => (
  onError: OnError,
) => (fixedProtocol: string) => (walletParams: TestnetNami) => () => void;

type ReceiveFunds = (
  onSuccess: (something) => void,
) => (
  onError: OnError,
) => (
  protocol: string,
) => (
  walletParams: TestnetNami,
) => (fundraisingData: FundraisingData) => () => void;
declare global {
  interface Window {
    offchain: {
      closeProtocol: any;
      connectWallet: ConnectWallet;
      createFundraising: CreateFundraising;
      donate: Donate;
      getAllFundraisings: GetFundraisings;
      getAppInfo: GetAppInfo;
      getUserRelatedFundraisings: GetFundraisings;
      updateProtocol: UpdateProtocol;
      receiveFunds: ReceiveFunds;
    };
    cardano: {
      nami: any;
    };
  }
}

export type { TestnetNami };
