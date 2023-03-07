import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  setConfig,
  setConfigFail,
  setConfigSuccess,
} from 'features/info/redux/actionCreators';
import { ManagementParams, ManagerEditor } from 'shared/components';
import { protocol } from 'shared/constants';
import { useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import { Title, Wrapper } from './Management.styled';

const Management = () => {
  const offchain = useOffchain();
  const { config } = useSelector((state: AppReduxState) => state.info.data);
  const dispatch = useDispatch();

  const handleGetInfoSuccess = (params) => {
    dispatch(
      setConfigSuccess({
        minAmountParam: Number(params.minAmountParam.value),
        maxAmountParam: Number(params.maxAmountParam.value),
        minDurationParam: Number(params.minDurationParam.value),
        maxDurationParam: Number(params.maxDurationParam.value),
        protocolFeeParam: Number(params.protocolFeeParam.value),
      })
    );
  };

  const handleGetInfoError = (error) => {
    toast.error(error);
    dispatch(setConfigFail(error));
  };

  const getProtocolInfo = () => {
    setConfig();
    offchain?.getProtocolInfo(handleGetInfoSuccess)(handleGetInfoError)(
      protocol
    )();
  };

  useEffect(() => {
    if (offchain) {
      getProtocolInfo();
    }
  }, [offchain]);

  return (
    <Wrapper>
      <Title>Management contract</Title>
      <ManagerEditor
        onUpdatedSuccess={getProtocolInfo}
        onUpdatedError={getProtocolInfo}
        config={config}
      />
      <Title>Current protocol parameters</Title>
      <ManagementParams config={config} />
    </Wrapper>
  );
};
export default Management;
