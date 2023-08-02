import { useDispatch } from 'react-redux';

import {
  setError,
  setStatus,
  updateAllFundraisings,
} from 'core/slices/allFundraisings';
import { updateWalletMode } from 'core/slices/wallet';
import { testnetNami } from 'shared/constants/wallet';
import { type BackendProjects } from 'shared/types';

import { useOffchain, useCheckWalletStatus, useHandleError } from '..';
import { getOffchainError, transformProjects } from '../..';

const useGetAllFundraisings = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = (projects: BackendProjects) => {
    const filteredProjects = transformProjects(projects);
    dispatch(updateAllFundraisings(filteredProjects));
    dispatch(updateWalletMode('connected'));
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
