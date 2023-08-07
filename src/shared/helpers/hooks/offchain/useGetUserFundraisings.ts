import { testnetNami } from '@/shared/constants/wallet';
import { useHandleError } from '@/shared/helpers/hooks';
import { useDonatPool } from '@/shared/hooks';
import { useAppDispatch } from '@/store/hooks';
import { setWalletStatus } from '@/store/slices/connectWallet';
import {
  setError,
  setUserFundraisings,
  setRequesting,
} from '@/store/slices/userFundraisings';

import { getOffchainError } from '../..';
import { transformProjects } from '../../transformProjects';

const useGetUserFundraisings = () => {
  const offchain = useDonatPool();
  const handleCommonError = useHandleError();
  const protocol = JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL);
  const dispatch = useAppDispatch();

  const handleSuccess = (projects) => {
    dispatch(setWalletStatus('connected'));
    const transformedProjects = transformProjects(projects);
    dispatch(setUserFundraisings(transformedProjects));
  };

  const handleError = (error) => {
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return () => {
      offchain.getUserRelatedFundraisings(handleSuccess)(handleError)(protocol)(
        testnetNami,
      );
      dispatch(setRequesting());
    };
  }
  return getOffchainError;
};

export { useGetUserFundraisings };
