import { toast } from 'react-toastify';

import { useOffchain } from 'shared/helpers/hooks';

import { getOffchainError } from '../getOffchainError';

const useCreateFundraising = (protocol) => {
  const offchain = useOffchain();

  const handleSuccess = (fundraisingData) => {
    console.log(fundraisingData);
    toast.success('The fundraising was created successfully');
  };

  const handleError = (error) => {
    toast.error(error);
  };

  if (offchain) {
    return offchain.createFundraising(handleSuccess)(handleError)(protocol);
  }
  return () => getOffchainError;
};

export { useCreateFundraising };
