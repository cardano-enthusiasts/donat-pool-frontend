import { toast } from 'react-toastify';

import { useOffchain } from 'shared/helpers/hooks';

import { getOffchainError } from '..';

const useStartProtocol = () => {
  const offchain = useOffchain();

  const startProtocolParams = {
    minAmountParam: 50000000,
    maxAmountParam: 1000000000,
    minDurationParam: 100,
    maxDurationParam: 1000,
    protocolFeeParam: 10,
  };

  const handleSuccess = (protocol) => {
    console.log(protocol);
    toast.success('Protocol was started');
  };

  const handleError = (error) => {
    toast.error(error);
  };

  if (offchain) {
    return () => {
      offchain.startProtocol(handleSuccess)(handleError)(startProtocolParams)();
    };
  }
  return () => getOffchainError;
};

export { useStartProtocol };
