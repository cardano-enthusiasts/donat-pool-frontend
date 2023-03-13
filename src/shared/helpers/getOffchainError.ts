import { toast } from 'react-toastify';

const getOffchainError = () => {
  toast.error('offchain is not defined');
};

export { getOffchainError };
