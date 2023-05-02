import { useDispatch } from 'react-redux';

import {
  getAllFundraisings,
  getAllFundraisingsFail,
  getAllFundraisingsSuccess,
  setWalletStatusSuccess,
} from 'features/info/redux/actionCreators';

import { useOffchain, useCheckWalletStatus, useHandleError } from '.';
import { getOffchainError } from '..';

const useGetAllFundraisings = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = (projects) => {
    const filteredProjects = projects.map(
      ({
        creator,
        deadline,
        description,
        goal,
        raisedAmt,
        threadTokenCurrency,
        threadTokenName,
      }) => {
        return {
          creator,
          deadline: Number(deadline.value),
          description,
          goal: Number(goal.value),
          raisedAmount: Number(raisedAmt.value),
          threadTokenCurrency,
          threadTokenName,
        };
      }
    );
    dispatch(getAllFundraisingsSuccess(filteredProjects));
    dispatch(setWalletStatusSuccess('connected'));
  };

  const handleError = (error) => {
    handleCommonError(error);
    dispatch(getAllFundraisingsFail(error));
  };

  if (offchain) {
    return () => {
      offchain.getAllFundraisings(handleSuccess)(handleError)(protocol)();
      checkWalletStatus();
      dispatch(getAllFundraisings());
    };
  }
  return getOffchainError;
};

export { useGetAllFundraisings };
