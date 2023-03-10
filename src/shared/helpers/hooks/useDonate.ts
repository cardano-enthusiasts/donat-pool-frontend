import { toast } from 'react-toastify';

import { useOffchain } from 'shared/helpers/hooks';
import { type FundraisingData } from 'shared/types';

import { getOffchainError } from '../getOffchainError';

const useDonate = (fundraisingData: FundraisingData, onSuccess) => {
  const offchain = useOffchain();

  const handleSuccess = () => {
    toast.success('Donated successfully');
    onSuccess();
  };

  const handleError = (error) => {
    toast.error(error);
  };

  if (offchain) {
    return offchain.donate(handleSuccess)(handleError)(fundraisingData);
  }
  return () => getOffchainError;
};

export { useDonate };
