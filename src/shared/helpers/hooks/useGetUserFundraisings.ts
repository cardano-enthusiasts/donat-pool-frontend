import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  getUserProjectsFail,
  getUserProjectsSuccess,
} from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';

import { useOffchain } from '.';
import { transformProjects } from '../transformProjects';

const useGetUserFundraisings = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();

  const handleSuccess = (projects) => {
    const transformedProjects = transformProjects(projects);
    dispatch(getUserProjectsSuccess(transformedProjects));
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(getUserProjectsFail(error));
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
