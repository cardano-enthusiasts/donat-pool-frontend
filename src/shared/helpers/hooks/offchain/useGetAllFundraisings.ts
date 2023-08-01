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
        title,
        goal,
        raisedAmt,
        threadTokenCurrency,
        threadTokenName,
        isCompleted,
      }) => {
        return {
          creator,
          deadline: Number(deadline.value),
          title,
          goal: Number(goal.value),
          raisedAmount: Number(raisedAmt.value),
          threadTokenCurrency,
          threadTokenName,
          isCompleted,
        };
      },
    );
    dispatch(updateAllFundraisings(filteredProjects));
    dispatch(updateWalletMode('connected'));
  };

  const handleError = (error) => {
    handleCommonError(error);
    dispatch(setError(error));
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
