import { useAppDispatch } from 'core/hooks';
import {
  setError,
  setStatus,
  setAllFundraisings,
} from 'core/slices/allFundraisings';
import { setWalletMode } from 'core/slices/wallet';
import { testnetNami } from 'shared/constants/wallet';
import { type BackendProjects } from 'shared/types';

import { useOffchain, useCheckWalletStatus, useHandleError } from '..';
import { getOffchainError, transformProjects } from '../..';

const useGetAllFundraisings = () => {
  const offchain = useOffchain();
  const dispatch = useAppDispatch();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = (projects: BackendProjects) => {
    const filteredProjects = transformProjects(projects);
    dispatch(setAllFundraisings(filteredProjects));
    dispatch(setWalletMode('connected'));
  };

  const handleError = (error) => {
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return () => {
      offchain.getAllFundraisings(handleSuccess)(handleError)(protocol)(
        testnetNami,
      )();
      checkWalletStatus();
      dispatch(setStatus('requesting'));
    };
  }
  return getOffchainError;
};

export { useGetAllFundraisings };
