import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  getAllFundraisings,
  getAllFundraisingsFail,
  getAllFundraisingsSuccess,
} from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';

import { useOffchain } from '.';
import { getOffchainError } from '..';

const useGetAllFundraisings = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();

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
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(getAllFundraisingsFail(error));
  };

  if (offchain) {
    return () => {
      offchain.getAllFundraisings(handleSuccess)(handleError)(protocol)();
      dispatch(getAllFundraisings());
    };
  }
  return getOffchainError;
};

export { useGetAllFundraisings };
