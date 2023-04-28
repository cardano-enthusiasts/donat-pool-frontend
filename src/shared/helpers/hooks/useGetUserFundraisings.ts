import { useDispatch } from 'react-redux';

import {
  getUserFundraisings,
  getUserFundraisingsFail,
  getUserFundraisingsSuccess,
  setWalletStatusSuccess,
} from 'features/info/redux/actionCreators';
import {
  useCheckWalletStatus,
  useOffchain,
  useHandleError,
} from 'shared/helpers/hooks';

import { getOffchainError } from '..';
import { transformProjects } from '../transformProjects';

const useGetUserFundraisings = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = (projects) => {
    dispatch(setWalletStatusSuccess('connected'));
    const transformedProjects = transformProjects(projects);
    dispatch(getUserFundraisingsSuccess(transformedProjects));
  };

  const handleError = (error) => {
    handleCommonError(error);
    dispatch(getUserFundraisingsFail(error));
  };

  if (offchain) {
    return () => {
      offchain.getUserRelatedFundraisings(handleSuccess)(handleError)(
        protocol
      )();
      checkWalletStatus();
      dispatch(getUserFundraisings());
    };
  }
  return getOffchainError;
};

export { useGetUserFundraisings };
