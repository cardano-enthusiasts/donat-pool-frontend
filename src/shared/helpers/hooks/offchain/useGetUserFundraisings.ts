import { useAppDispatch } from 'core/hooks';
import {
  setError,
  updateUserFundraisings,
  setStatus,
} from 'core/slices/userFundraisings';
import { updateWalletMode } from 'core/slices/wallet';
import {
  useCheckWalletStatus,
  useOffchain,
  useHandleError,
} from 'shared/helpers/hooks';

import { getOffchainError } from '../..';
import { transformProjects } from '../../transformProjects';

const useGetUserFundraisings = () => {
  const offchain = useOffchain();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);
  const dispatch = useAppDispatch();

  const handleSuccess = (projects) => {
    dispatch(updateWalletMode('connected'));
    const transformedProjects = transformProjects(projects);
    console.log(transformedProjects);

    dispatch(updateUserFundraisings(transformedProjects));
    dispatch(setStatus('success'));
  };

  const handleError = (error) => {
    handleCommonError(error);
    dispatch(setError(error));
  };

  if (offchain) {
    return () => {
      offchain.getUserRelatedFundraisings(handleSuccess)(handleError)(
        protocol,
      )();
      checkWalletStatus();
      dispatch(setStatus('requesting'));
    };
  }
  return getOffchainError;
};

export { useGetUserFundraisings };
