import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  getUserFundraisings,
  getUserFundraisingsFail,
  getUserFundraisingsSuccess,
} from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';

import { useOffchain } from '.';
import { transformProjects } from '../transformProjects';

const useGetUserFundraisings = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();

  const handleSuccess = (projects) => {
    const transformedProjects = transformProjects(projects);
    dispatch(getUserFundraisingsSuccess(transformedProjects));
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(getUserFundraisingsFail(error));
  };

  const getOffchainError = () => {
    toast.error('offchain is not defined');
  };

  if (offchain) {
    return () => {
      offchain.getUserRelatedFundraisings(handleSuccess)(handleError)(
        protocol
      )();
      dispatch(getUserFundraisings());
    };
  }
  return getOffchainError;
};

export { useGetUserFundraisings };
