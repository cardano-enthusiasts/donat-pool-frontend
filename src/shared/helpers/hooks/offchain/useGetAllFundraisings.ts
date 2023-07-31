import { useDispatch } from 'react-redux';

import {
  setError,
  setStatus,
  updateAllFundraisings,
} from 'core/slices/allFundraisings';
import { updateWalletStatus } from 'core/slices/walletStatus';
import { type BackendProjects } from 'shared/types';

import { useOffchain, useCheckWalletStatus, useHandleError } from '..';
import { getOffchainError } from '../..';

const useGetAllFundraisings = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = (projects: BackendProjects) => {
    console.log(projects);
    const filteredProjects = projects.map(
      ({
        creator,
        deadline,
        description,
        goal,
        raisedAmt,
        threadTokenCurrency,
        threadTokenName,
        path,
        isCompleted,
      }) => {
        return {
          creator,
          deadline: Number(deadline.value),
          description,
          goal: Number(goal.value),
          raisedAmount: Number(raisedAmt.value),
          threadTokenCurrency,
          threadTokenName,
          path,
          isCompleted,
        };
      },
    );
    dispatch(updateAllFundraisings(filteredProjects));
    dispatch(updateWalletStatus('connected'));
  };

  const handleError = (error) => {
    handleCommonError(error);
    dispatch(setError(error));
  };

  if (offchain) {
    return () => {
      offchain.getAllFundraisings(handleSuccess)(handleError)(protocol)();
      checkWalletStatus();
      dispatch(setStatus('requesting'));
    };
  }
  return getOffchainError;
};

export { useGetAllFundraisings };
