import { toast } from 'react-toastify';

import { protocol } from 'shared/constants';

import { useOffchain } from '.';
import { getOffchainError } from '../getOffchainError';

const useUpdateProtocol = (onSuccess, onError) => {
  const offchain = useOffchain();

  const handleSuccess = () => {
    toast.success('Config was updated successfully');
    onSuccess();
  };

  const handleError = (error) => {
    toast.error(error);
    onError();
  };

  if (offchain) {
    return offchain?.updateProtocol(handleSuccess)(handleError)(protocol);
  }
  return () => getOffchainError;
};

export { useUpdateProtocol };
