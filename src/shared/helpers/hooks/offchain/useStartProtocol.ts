import { useHandleError, useOffchain } from 'shared/helpers/hooks';

import { getOffchainError } from '../..';

const useStartProtocol = () => {
  const offchain = useOffchain();
  const handleCommonError = useHandleError();

  const startProtocolParams = {
    minAmountParam: 50000000,
    maxAmountParam: 1000000000,
    minDurationParam: 100,
    maxDurationParam: 1000,
    protocolFeeParam: 10,
  };

  const handleSuccess = (protocol) => {
    console.log(protocol);
  };

  const handleError = (error) => {
    handleCommonError(error);
  };

  if (offchain) {
    return () => {
      offchain.startProtocol(handleSuccess)(handleError)(startProtocolParams)();
    };
  }
  return () => getOffchainError;
};

export { useStartProtocol };
