import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  getAllProjectsFail,
  getAllProjectsSuccess,
} from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';

import { useOffchain } from '.';

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
    dispatch(getAllProjectsSuccess(filteredProjects));
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(getAllProjectsFail(error));
  };

  const getOffchainError = () => {
    toast.error('offchain is not defined');
  };

  if (offchain) {
    return offchain.getAllFundraisings(handleSuccess)(handleError)(protocol);
  }
  return getOffchainError;
};

export { useGetAllFundraisings };
