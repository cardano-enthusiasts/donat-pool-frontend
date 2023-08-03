import { useAppDispatch } from 'core/hooks';
import {
  setError,
  setUserFundraisings,
  setStatus,
} from 'store/slices/userFundraisings';
import { setWalletMode } from 'store/slices/wallet';
import { testnetNami } from 'shared/constants/wallet';
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
    dispatch(setWalletMode('connected'));
    const transformedProjects = transformProjects(projects);
    dispatch(setUserFundraisings(transformedProjects));
    dispatch(setStatus('success'));
  };

  const handleError = (error) => {
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return () => {
      offchain.getUserRelatedFundraisings(handleSuccess)(handleError)(protocol)(
        testnetNami,
      )();
      checkWalletStatus();
      dispatch(setStatus('requesting'));
    };
  }
  return getOffchainError;
};

export { useGetUserFundraisings };
