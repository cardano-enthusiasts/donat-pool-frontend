import { useEffect, useState } from 'react';

import ManagementParams from 'shared/components/ManagementParams/ManagementParams';
import ManagerEditor from 'shared/components/ManagerEditor/ManagerEditor';
import { useOffchain } from 'shared/hooks/useOffchain';

import { Title, Wrapper } from './Management.styled';
import fixedProtocol from '../../../startProtocolParams';

const Management = () => {
  const [protocolParams, setProtocolParams] = useState({
    minAmountParam: 0,
    maxAmountParam: 0,
    minDurationParam: 0,
    maxDurationParam: 0,
    protocolFeeParam: 0,
  });
  const offchain = useOffchain();

  const onGetInfo = (params) => {
    setProtocolParams({
      minAmountParam: Number(params.minAmountParam.value),
      maxAmountParam: Number(params.maxAmountParam.value),
      minDurationParam: Number(params.minDurationParam.value),
      maxDurationParam: Number(params.maxDurationParam.value),
      protocolFeeParam: Number(params.protocolFeeParam.value),
    });
  };
  const getProtocolInfo = () => {
    offchain?.getProtocolInfo(onGetInfo)(console.log)(fixedProtocol)();
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
        protocol={protocolParams}
      />
      <Title>Current protocol parameters</Title>
      <ManagementParams protocol={protocolParams} />
    </Wrapper>
  );
};
export default Management;
