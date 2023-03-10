import { toast } from 'react-toastify';

import { useOffchain } from '.';
import { getOffchainError } from '../getOffchainError';

const useReceiveFunds = () => {
  const offchain = useOffchain();

  const handleSuccess = () => {
    toast.success('Received successfully');
  };

  const handleError = (error) => {
    toast.error(error);
  };

  if (offchain) {
    return offchain.receiveFunds(handleSuccess)(handleError);
  }
  return () => getOffchainError;
};

export { useReceiveFunds };
