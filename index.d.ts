declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PROTOCOL: string;
    }
  }

  interface Window {
    donatPool: Promise<{
      connectWallet: any;
      closeProtocol: any;
      createFundraising: any;
      donate: any;
      getAllFundraisings: any;
      getAppInfo: any;
      getUserRelatedFundraisings: any;
      startProtocol: any;
      updateProtocol: any;
      receiveFunds: any;
    }>;
    cardano: {
      nami: any;
    };
  }
}

export {};
