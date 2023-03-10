import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  setUserProjectsFail,
  setUserProjectsSuccess,
} from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';

import { useOffchain } from '.';
import { transformProjects } from '../transformProjects';

const useGetUserFundraisings = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();

  const handleSuccess = (projects) => {
    const transformedProjects = transformProjects(projects);
    dispatch(setUserProjectsSuccess(transformedProjects));
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(setUserProjectsFail(error));
  };

  const getOffchainError = () => {
    toast.error('offchain is not defined');
  };

  if (offchain) {
    return offchain.getUserRelatedFundraisings(handleSuccess)(handleError)(
      protocol
    );
  }
  return getOffchainError;
};

export { useGetUserFundraisings };
